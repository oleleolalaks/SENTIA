/* Esse módulo cuida das conversas do site normal, sem ler ou alterar a partida do Jardim. */
(() => {
  'use strict';

  /* O caminho do worker acompanha a pasta do site, inclusive em uma publicação no GitHub Pages. */
  const scriptURL = new URL(document.currentScript.src);
  const workerURL = new URL('ia-worker.js', scriptURL);
  /* A versão também acompanha o worker, evitando reaproveitar código de uma publicação antiga. */
  workerURL.search = scriptURL.search;
  const KEY = 'sentia-conversas-v1';
  const personas = window.SENTIA_PERSONAS || [];
  const root = document.querySelector('#conversas');
  /* Se essa página não existe, o arquivo não interfere no restante do projeto. */
  if (!root || !personas.length) return;

  /* Os controles ficam separados do estado da conversa para facilitar a atualização da tela. */
  const el = Object.fromEntries(['personas', 'name', 'emotion', 'portrait', 'status', 'load',
    'load-cancel', 'progress', 'progress-text', 'log', 'empty', 'form', 'input', 'send', 'stop',
    'clear', 'export', 'save-history', 'counter', 'suggestions', 'device', 'release', 'note', 'hint', 'description']
    .map(name => [name, root.querySelector('#chat-' + name)]));
  let selected = personas[0].id;
  let histories = Object.fromEntries(personas.map(persona => [persona.id, []]));
  let remember = false;
  let worker = null;
  let ready = false;
  let loading = false;
  let generating = false;
  /* Essa marca distingue uma resposta completa de um texto interrompido pelo botão. */
  let stoppingRequested = false;
  let request = null;
  let serial = 0;
  let selectionSerial = 0;
  let stopTimer = null;
  let download = new Map();
  let lastProgress = 0;

  /* Aqui só são aceitas mensagens curtas com os papéis que a interface conhece. */
  function cleanHistory(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(item => item && ['user', 'assistant'].includes(item.role)
      && typeof item.content === 'string' && item.content.trim())
      .slice(-40).map(item => ({ role: item.role, content: item.content.slice(0, 2400),
        interrupted: item.interrupted === true }));
  }

  /* O histórico só volta de uma visita anterior quando a pessoa escolheu guardá-lo. */
  function readHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (!saved || saved.enabled !== true) return;
      remember = true;
      for (const persona of personas) histories[persona.id] = cleanHistory(saved.histories?.[persona.id]);
      if (personas.some(persona => persona.id === saved.selected)) selected = saved.selected;
    } catch {
      /* Um JSON antigo ou bloqueado não impede a conversa nesta sessão. */
      remember = false;
    }
  }

  /* A gravação é local e não usa o banco compartilhado das tarefas. */
  function saveHistory() {
    try {
      if (!remember) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, JSON.stringify({ enabled: true, selected,
        histories: Object.fromEntries(personas.map(persona => [persona.id, cleanHistory(histories[persona.id])])) }));
    } catch {
      el.note.textContent = 'O navegador não conseguiu guardar a conversa. Ela continua disponível nesta aba.';
    }
  }

  /* Esse aviso fica no painel e não interrompe a pessoa a cada palavra recebida. */
  function status(text, state = '') {
    el.status.textContent = text;
    el.status.dataset.state = state;
  }

  /* Aqui os botões acompanham o estado real do modelo e da geração. */
  function controls() {
    el.load.hidden = ready || loading;
    el['load-cancel'].hidden = !loading;
    el.progress.hidden = !loading;
    el['progress-text'].hidden = !loading;
    el.device.disabled = loading || generating || ready;
    el.input.disabled = !ready || generating;
    el.input.placeholder = ready ? 'Escreva uma mensagem para este sentimento' : 'Prepare a conversa para escrever sua mensagem';
    el.send.disabled = !ready || generating || !el.input.value.trim();
    el.stop.hidden = !generating;
    el.release.hidden = !ready;
    el.export.disabled = !histories[selected].length || generating;
    el.clear.disabled = !histories[selected].length && !generating;
    el['save-history'].checked = remember;
    el.counter.textContent = el.input.value.length + ' / 1000';
    root.dataset.busy = String(loading || generating);
    el.log.setAttribute('aria-busy', String(generating));
  }

  /* Só rola automaticamente quando a pessoa já estava perto da última mensagem. */
  function followBottom(force = false) {
    if (force || el.log.scrollHeight - el.log.scrollTop - el.log.clientHeight < 110)
      el.log.scrollTop = el.log.scrollHeight;
  }

  /* O texto é inserido como texto, nunca como HTML vindo da pessoa ou do modelo. */
  function bubble(item) {
    const article = document.createElement('article');
    article.className = 'chat-message';
    article.dataset.role = item.role;
    const name = document.createElement('strong');
    name.textContent = item.role === 'user' ? 'Você' : personas.find(persona => persona.id === selected).name;
    const text = document.createElement('p');
    text.textContent = item.content || 'Pensando…';
    article.append(name, text);
    if (item.interrupted) {
      const label = document.createElement('small');
      label.textContent = 'Resposta interrompida';
      article.append(label);
    }
    el.log.append(article);
    return text;
  }

  /* Cada personagem tem mensagens próprias, sem misturar o que foi dito aos outros. */
  function renderConversation() {
    el.log.replaceChildren();
    const history = histories[selected];
    el.empty.hidden = history.length > 0;
    for (const item of history) bubble(item);
    followBottom(true);
    controls();
  }

  /* Essa função seleciona o retrato aprovado e prepara perguntas que só preenchem o campo. */
  function renderPersona() {
    const persona = personas.find(item => item.id === selected);
    el.name.textContent = persona.name;
    el.emotion.textContent = persona.emotion;
    el.description.textContent = persona.description;
    root.style.setProperty('--chat-accent', persona.color);
    const path = (window.ASSETS || []).find(item => item.includes('/01-Ecos/' + persona.id + '/01-Dialogo/00-base.png'));
    el.portrait.hidden = !path;
    if (path) el.portrait.src = path;
    el.portrait.alt = persona.name + ', personagem de ' + persona.emotion.toLocaleLowerCase('pt-BR');
    el.personas.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.persona === selected)));
    el.suggestions.replaceChildren();
    for (const text of persona.suggestions) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chat-suggestion';
      button.textContent = text;
      button.addEventListener('click', () => {
        el.input.value = text;
        controls();
        if (!el.input.disabled) el.input.focus();
        else el.note.textContent = 'A pergunta está no campo. Prepare a conversa para enviar.';
      });
      el.suggestions.append(button);
    }
    renderConversation();
  }

  /* Uma troca durante a resposta espera a interrupção e descarta seleções antigas. */
  async function selectPersona(id) {
    const selection = ++selectionSerial;
    if (id === selected) return;
    await stopGeneration();
    if (selection !== selectionSerial) return;
    selected = id;
    el.input.value = '';
    el.note.textContent = '';
    renderPersona();
    saveHistory();
  }

  /* Aqui são criados os seletores sem adicionar uma segunda navegação ao site. */
  function renderSelectors() {
    for (const persona of personas) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chat-persona';
      button.dataset.persona = persona.id;
      button.setAttribute('aria-pressed', String(persona.id === selected));
      const symbol = document.createElement('span');
      symbol.className = 'chat-persona-symbol';
      symbol.setAttribute('aria-hidden', 'true');
      symbol.textContent = persona.symbol;
      const words = document.createElement('span');
      const name = document.createElement('strong');
      const emotion = document.createElement('small');
      name.textContent = persona.name;
      emotion.textContent = persona.emotion;
      words.append(name, emotion);
      button.append(symbol, words);
      button.addEventListener('click', () => selectPersona(persona.id));
      el.personas.append(button);
    }
  }

  /* Cada arquivo informa seu próprio avanço, sem somar o mesmo download duas vezes. */
  function progress(data) {
    if (!data.file) return;
    const previous = download.get(data.file) || { loaded: 0, total: 0 };
    download.set(data.file, { loaded: Math.max(previous.loaded, data.loaded), total: Math.max(previous.total, data.total) });
    if (performance.now() - lastProgress < 180 && data.status !== 'done') return;
    lastProgress = performance.now();
    const items = [...download.values()];
    const loaded = items.reduce((sum, item) => sum + item.loaded, 0);
    const total = items.reduce((sum, item) => sum + item.total, 0);
    if (total > 0) {
      el.progress.max = total;
      el.progress.value = loaded;
      el['progress-text'].textContent = (loaded / 1e6).toFixed(0) + ' MB de ' + (total / 1e6).toFixed(0)
        + ' MB recebidos. A preparação termina depois do download.';
    } else {
      el.progress.removeAttribute('value');
      el['progress-text'].textContent = 'Verificando os arquivos e o cache do navegador.';
    }
    /* Terminar um JSON pequeno não quer dizer que os pesos já acabaram de baixar. */
    if (data.status === 'done' && data.file.endsWith('.onnx'))
      status('Preparando a memória do modelo. Você pode cancelar.', 'loading');
    else if (data.status === 'progress' && data.file.endsWith('.onnx'))
      status('Baixando o modelo. Você pode cancelar a preparação.', 'loading');
  }

  /* Erros explicam a saída possível, sem substituir o modelo por frases prontas. */
  function friendly(error) {
    const text = String(error?.message || error);
    if (text.includes('GPU_UNAVAILABLE')) return 'A aceleração não está disponível neste navegador. Escolha o modo compatível e prepare novamente.';
    if (/memory|allocation|out of bounds|allocate|buffer size/i.test(text)) return 'Faltou memória para o modelo. Feche outras abas ou tente em um computador com mais memória.';
    if (/NOT_READY/.test(text)) return 'Prepare a conversa antes de enviar uma mensagem.';
    return 'Não foi possível concluir a IA neste aparelho. Confira a conexão e tente novamente no modo compatível. Nenhuma resposta pronta foi usada no lugar dela.';
  }

  /* Uma operação pendente é encerrada antes de remover o worker. */
  function terminate(reason = 'Operação interrompida') {
    if (stopTimer) clearTimeout(stopTimer);
    stopTimer = null;
    const pending = request;
    request = null;
    worker?.terminate();
    worker = null;
    ready = false;
    if (pending) pending.reject(reason instanceof Error ? reason : new DOMException(reason, 'AbortError'));
  }

  /* O worker recebe só o necessário para o personagem e a conversa atual. */
  function ensureWorker() {
    if (worker) return;
    worker = new Worker(workerURL, { type: 'module' });
    worker.addEventListener('message', event => {
      const data = event.data || {};
      if (!request || data.id !== request.id) return;
      if (data.type === 'progress') progress(data);
      else if (data.type === 'status') status(data.text, 'loading');
      else if (data.type === 'chunk') request.onChunk?.(data.text);
      else if (['ready', 'complete', 'released', 'error'].includes(data.type)) {
        const pending = request;
        request = null;
        if (stopTimer) clearTimeout(stopTimer);
        stopTimer = null;
        if (data.type === 'error') pending.reject(new Error(data.code));
        else pending.resolve(data);
      }
    });
    worker.addEventListener('error', event => {
      event.preventDefault();
      terminate(new Error(event.message || 'ENGINE_CRASH'));
      status('O navegador encerrou o modelo. Prepare a conversa novamente.', 'error');
      controls();
    });
  }

  /* Essa Promise aguarda uma resposta real do worker, sem simular tempo de IA. */
  function invoke(type, values = {}, onChunk) {
    ensureWorker();
    if (request) return Promise.reject(new Error('BUSY'));
    return new Promise((resolve, reject) => {
      request = { id: ++serial, type, resolve, reject, onChunk };
      worker.postMessage({ id: request.id, type, ...values });
    });
  }

  /* O download só é autorizado pelo clique, com os controles sempre recuperados no finally. */
  async function prepare() {
    if (loading || generating || ready) return;
    if (!['http:', 'https:'].includes(location.protocol)) {
      status('Para a IA, abra o site pelo Live Server, pelo XAMPP ou pelo endereço publicado. As outras páginas continuam funcionando por arquivo.', 'error');
      return;
    }
    if (!window.Worker || !window.WebAssembly) {
      status('Este navegador não oferece os recursos necessários. Tente uma versão recente do Chrome, Edge ou Firefox.', 'error');
      return;
    }
    loading = true;
    download = new Map();
    lastProgress = 0;
    el.progress.removeAttribute('value');
    el['progress-text'].textContent = 'Iniciando o preparo. Os arquivos já guardados podem ser reaproveitados.';
    el.note.textContent = '';
    status('Preparando a conversa neste aparelho.', 'loading');
    controls();
    try {
      const result = await invoke('load', { device: el.device.value });
      ready = true;
      status('Pronta para conversar neste aparelho.', 'ready');
      el.note.textContent = result.backend === 'webgpu' ? 'Aceleração gráfica ativa.' : 'Modo compatível ativo. Respostas podem demorar em aparelhos mais simples.';
      el.input.disabled = false;
      el.input.focus();
    } catch (error) {
      terminate();
      status(error.name === 'AbortError' ? 'Preparo cancelado. Você pode tentar de novo.' : friendly(error), error.name === 'AbortError' ? '' : 'error');
    } finally {
      loading = false;
      controls();
    }
  }

  /* O pedido de parada usa o fim antecipado do modelo, com encerramento completo se ele travar. */
  async function stopGeneration() {
    if (!generating || !request) return;
    const pending = request;
    pending.stopped = true;
    stoppingRequested = true;
    worker?.postMessage({ type: 'interrupt', id: pending.id });
    if (!stopTimer) stopTimer = setTimeout(() => terminate('Resposta interrompida'), 1800);
    /* Esse pequeno observador espera apenas a resposta ativa, sem bloquear a página. */
    await new Promise(resolve => {
      const check = () => {
        if (request !== pending && !generating) resolve();
        else setTimeout(check, 30);
      };
      check();
    });
  }

  /* Essa é a ação principal do formulário de conversa. */
  async function submit(event) {
    event.preventDefault();
    const text = el.input.value.trim().slice(0, 1000);
    if (!text || !ready || generating || loading) return;
    const persona = personas.find(item => item.id === selected);
    const history = histories[persona.id];
    history.push({ role: 'user', content: text });
    /* Só a memória desse personagem é encaminhada ao modelo. */
    const context = history.filter(item => !item.interrupted).slice(-16).map(item => ({ role: item.role, content: item.content }));
    const answer = { role: 'assistant', content: '' };
    history.push(answer);
    el.input.value = '';
    generating = true;
    stoppingRequested = false;
    renderConversation();
    const target = el.log.lastElementChild.querySelector('p');
    status(persona.name + ' está preparando uma resposta.', 'generating');
    el.note.textContent = '';
    saveHistory();
    try {
      const result = await invoke('generate', { persona: persona.voice, history: context }, chunk => {
        answer.content += String(chunk);
        if (selected === persona.id) {
          const nearBottom = el.log.scrollHeight - el.log.scrollTop - el.log.clientHeight < 110;
          target.textContent = answer.content;
          if (nearBottom) followBottom(true);
        }
      });
      answer.content = String(result.text || answer.content).trim().slice(0, 2400);
      if (stoppingRequested) {
        answer.interrupted = true;
        if (!answer.content) history.splice(history.indexOf(answer), 1);
        status('Resposta interrompida.', ready ? 'ready' : '');
        el.note.textContent = 'O texto já recebido foi mantido.';
      } else {
        if (!answer.content) throw new Error('EMPTY_RESPONSE');
        status('Resposta concluída.', 'ready');
        el.note.textContent = persona.name + ' respondeu. Você pode continuar a conversa.';
      }
    } catch (error) {
      answer.interrupted = true;
      if (!answer.content) history.splice(history.indexOf(answer), 1);
      status(error.name === 'AbortError' ? 'Resposta interrompida.' : friendly(error), error.name === 'AbortError' ? '' : 'error');
      el.note.textContent = error.name === 'AbortError' ? 'O texto já recebido foi mantido.' : 'Você pode tentar enviar outra mensagem.';
    } finally {
      /* A lista é limitada, e os botões voltam mesmo depois de erro ou parada. */
      if (history.length > 40) history.splice(0, history.length - 40);
      generating = false;
      saveHistory();
      if (selected === persona.id) renderConversation();
      controls();
    }
  }

  /* Aqui o histórico vira um TXT para baixar, sem enviar as mensagens para um servidor. */
  function exportConversation() {
    const persona = personas.find(item => item.id === selected);
    const text = ['SENTIA, conversa com ' + persona.name, 'Mensagens geradas localmente por Qwen2.5-0.5B-Instruct.', '',
      ...histories[selected].map(item => (item.role === 'user' ? 'Você' : persona.name) + '\n' + item.content
        + (item.interrupted ? '\nResposta interrompida.' : '') + '\n')].join('\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sentia-conversa-' + persona.id + '.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /* As ações ficam ligadas aos seus próprios controles. */
  el.load.addEventListener('click', prepare);
  el['load-cancel'].addEventListener('click', () => terminate('Preparo cancelado'));
  el.form.addEventListener('submit', submit);
  el.stop.addEventListener('click', stopGeneration);
  el.input.addEventListener('input', controls);
  el.input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      if (!el.send.disabled) el.form.requestSubmit();
    }
  });
  el['save-history'].addEventListener('change', () => {
    remember = el['save-history'].checked;
    saveHistory();
    el.note.textContent = remember ? 'As conversas serão guardadas só neste navegador.' : 'As conversas não serão guardadas ao fechar. O histórico salvo anteriormente foi removido.';
  });
  el.clear.addEventListener('click', async () => {
    const persona = personas.find(item => item.id === selected);
    if (!window.confirm('Apagar a conversa com ' + persona.name + ' neste navegador?')) return;
    await stopGeneration();
    histories[persona.id] = [];
    saveHistory();
    renderConversation();
    el.note.textContent = 'Conversa apagada. Você pode começar de novo.';
  });
  el.export.addEventListener('click', exportConversation);
  el.release.addEventListener('click', async () => {
    await stopGeneration();
    terminate();
    status('Modelo liberado da memória. Suas mensagens continuam nesta aba.');
    controls();
  });
  /* Ao sair da página, nenhuma resposta continua sendo gerada escondida. */
  window.addEventListener('hashchange', () => {
    if (location.hash !== '#conversas') stopGeneration();
  });
  window.addEventListener('pagehide', () => { saveHistory(); terminate(); });
  /* O reinício geral apaga também a cópia em memória, para pagehide não recriar dados apagados. */
  window.addEventListener('sentia:reset', () => {
    remember = false;
    histories = Object.fromEntries(personas.map(persona => [persona.id, []]));
    terminate('Site reiniciado');
    saveHistory();
  });
  window.addEventListener('pageshow', () => { controls(); });
  /* A página começa pronta para escolher, mas não baixa o modelo sozinha. */
  readHistory();
  renderSelectors();
  renderPersona();
  status('Escolha um sentimento e prepare a conversa.');
})();
