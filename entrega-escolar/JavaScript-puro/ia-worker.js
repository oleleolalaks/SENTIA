/* Esse arquivo roda em uma tarefa separada para a IA não prender os botões do site. */
'use strict';

/* As versões fixas mantêm o mesmo motor e os mesmos pesos em cada publicação. */
const LIBRARY = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js';
const MODEL = 'onnx-community/Qwen2.5-0.5B-Instruct';
const REVISION = '22942cb7d7ba4cc81bb4673549ca4d4614469b5e';
/* Aqui ficam o modelo carregado e a operação que pode ser interrompida. */
let generator = null;
let library = null;
let stopping = null;
let loading = false;
let generating = false;
let backend = '';
let fallback = false;

/* Essa função devolve eventos para a interface, sempre junto do pedido original. */
function send(id, type, values = {}) {
  self.postMessage({ id, type, ...values });
}

/* Esse preparo só começa depois de a pessoa aceitar o download no site. */
async function load(id, requested) {
  if (loading || generating) throw new Error('BUSY');
  /* Um modelo já pronto é reaproveitado entre todos os sentimentos. */
  if (generator) {
    send(id, 'ready', { backend, model: MODEL, fallback });
    return;
  }
  loading = true;
  try {
    send(id, 'status', { text: 'Carregando o motor da conversa.' });
    library = await import(LIBRARY);
    /* O motor baixa só arquivos públicos. Nenhuma mensagem vira uma requisição HTTP. */
    library.env.allowLocalModels = false;
    library.env.useBrowserCache = true;
    /* Uma thread dispensa cabeçalhos especiais e funciona em hospedagem estática comum. */
    library.env.backends.onnx.wasm.numThreads = 1;
    library.env.backends.onnx.wasm.proxy = false;
    /* O modo automático usa a opção compatível. A aceleração é uma escolha separada. */
    backend = requested === 'webgpu' ? 'webgpu' : 'wasm';
    fallback = false;
    if (backend === 'webgpu') {
      let adapter = null;
      try {
        adapter = await self.navigator.gpu?.requestAdapter();
      } catch {
        /* Alguns aparelhos anunciam WebGPU, mas recusam o adaptador. A CPU continua sendo uma opção. */
      }
      if (!adapter || !adapter.features.has('shader-f16')) {
        backend = 'wasm';
        fallback = true;
        send(id, 'status', { text: 'A aceleração não está disponível. Preparando no modo compatível, na CPU.' });
      }
    }
    send(id, 'status', { text: 'Preparando os arquivos do modelo. O primeiro uso demora mais.' });
    /* Os dois modos pedem o mesmo arquivo quantizado, que pode ser reaproveitado no cache. */
    generator = await library.pipeline('text-generation', MODEL, {
      revision: REVISION,
      device: backend,
      dtype: 'q4f16',
      progress_callback: progress => send(id, 'progress', {
        file: String(progress.file || ''),
        status: String(progress.status || ''),
        loaded: Number(progress.loaded) || 0,
        total: Number(progress.total) || 0,
        progress: Number(progress.progress) || 0
      })
    });
    /* A pausa de uma tarefa deixa o worker receber o botão de parar entre os passos da CPU. */
    if (backend === 'wasm') {
      const forward = generator.model.forward.bind(generator.model);
      generator.model.forward = async inputs => {
        await new Promise(resolve => setTimeout(resolve, 0));
        return forward(inputs);
      };
    }
    send(id, 'ready', { backend, model: MODEL, fallback });
  } finally {
    /* Esse finally libera o estado mesmo quando a rede ou o aparelho falha. */
    loading = false;
  }
}

/* Aqui a memória recente é limitada para evitar uma conversa grande demais na memória do aparelho. */
function messagesFor(persona, history) {
  const system = `${persona}
Você é um personagem fictício do SENTIA. Converse em português brasileiro e responda ao que foi contado, usando as mensagens anteriores. Use duas a quatro frases curtas, sem repetir a apresentação. Não invente fatos sobre a pessoa nem escreva falas por ela. Não diagnostique, recomende medicamentos ou incentive violência e autolesão. Você não conhece o enredo do Jardim dos Ecos.`;
  /* Só mensagens com papéis válidos entram no contexto do modelo. */
  const valid = history.filter(item => item && ['user', 'assistant'].includes(item.role)
    && typeof item.content === 'string').map(item => ({ role: item.role, content: item.content.slice(0, 2200) }));
  let recent = valid.slice(-8);
  /* A conversa começa com uma mensagem da pessoa, nunca com uma resposta solta. */
  while (recent.length > 1 && recent[0].role !== 'user') recent.shift();
  /* O tokenizer confere o limite real antes da geração. */
  while (recent.length > 1) {
    const tokens = generator.tokenizer.apply_chat_template([{ role: 'system', content: system }, ...recent],
      /* O retorno precisa ser uma lista para length contar tokens, em vez de ler um Tensor como lista. */
      { tokenize: true, return_tensor: false, add_generation_prompt: true });
    if (tokens.length <= 1600) break;
    recent.splice(0, 2);
  }
  return [{ role: 'system', content: system }, ...recent];
}

/* Essa função gera palavras novas, em vez de escolher uma resposta pronta. */
async function generate(id, persona, history) {
  if (!generator) throw new Error('NOT_READY');
  if (loading || generating) throw new Error('BUSY');
  if (typeof persona !== 'string' || !Array.isArray(history) || !history.length) throw new Error('INVALID_REQUEST');
  generating = true;
  let text = '';
  try {
    stopping = new library.InterruptableStoppingCriteria();
    /* O streamer passa os trechos para a tela conforme o modelo os produz. */
    const streamer = new library.TextStreamer(generator.tokenizer, {
      skip_prompt: true,
      skip_special_tokens: true,
      callback_function: chunk => {
        text += chunk;
        send(id, 'chunk', { text: chunk });
      }
    });
    const messages = messagesFor(persona.slice(0, 1200), history);
    /* O limite de tokens mantém as respostas curtas e o aparelho disponível. */
    const result = await generator(messages, {
      max_new_tokens: 160,
      /* A escolha determinística reduz desvios no modelo pequeno sem usar respostas pré-escritas. */
      do_sample: false,
      repetition_penalty: 1.05,
      return_full_text: false,
      streamer,
      stopping_criteria: stopping
    });
    /* Esse resultado também cobre navegadores que entregam texto só no fim. */
    const generated = result?.[0]?.generated_text;
    const fallback = typeof generated === 'string' ? generated
      : Array.isArray(generated) ? generated.filter(item => item.role === 'assistant').at(-1)?.content || '' : '';
    send(id, 'complete', { text: text || fallback });
  } finally {
    generating = false;
    stopping = null;
  }
}

/* Aqui o worker recebe preparo, mensagem, interrupção e liberação do modelo. */
self.addEventListener('message', async event => {
  const { id, type, device, persona, history } = event.data || {};
  try {
    if (type === 'load') await load(id, device);
    else if (type === 'generate') await generate(id, persona, history);
    else if (type === 'interrupt') stopping?.interrupt();
    else if (type === 'dispose') {
      if (generating || loading) throw new Error('BUSY');
      await generator?.dispose();
      generator = null;
      send(id, 'released');
    }
  } catch (error) {
    /* O erro vai para a interface, que devolve o controle sem fingir uma resposta da IA. */
    send(id, 'error', { code: String(error?.message || error).slice(0, 600) });
  }
});
