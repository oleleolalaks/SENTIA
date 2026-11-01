'use strict';

// As atividades da escola ficam só no SENTIA. O Jardim usa outro arquivo e outro save.
// const guarda referências que não serão trocadas; let guarda estados que mudam.
// var é a forma antiga do glossário: seu escopo é de função, então prefiro let/const neste projeto.
const $ = selector => document.querySelector(selector);
const activeAlerts = [];
const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      alertBox('O navegador não conseguiu guardar os dados. Você pode continuar nesta sessão.');
    }
  }
};
const emotions = [['felicidade', 'Felicidade', 'Perceber e compartilhar o que faz bem.', 'A felicidade pode aparecer em uma conquista, em companhia ou em um detalhe cotidiano. Ela não exige estar animado o tempo inteiro.', 'Que pequena coisa mereceu sua atenção hoje?'], ['amor', 'Amor', 'Cuidado, vínculo e presença.', 'O amor aparece em diferentes relações e gestos de cuidado. Cuidar também envolve ouvir limites e reconhecer os próprios.', 'Como você demonstra que se importa?'], ['tristeza', 'Tristeza', 'Um espaço para reconhecer perdas.', 'A tristeza pode acompanhar perdas, mudanças e frustrações. Não precisa ser escondida ou resolvida imediatamente. Companhia e tempo podem ajudar a acolhê-la.', 'O que você gostaria que alguém escutasse?'], ['orgulho', 'Orgulho', 'Reconhecer o valor do seu caminho.', 'Orgulho pode ser reconhecer esforço e conquistas. Ele convive com admitir erros e aprender, sem precisar diminuir ninguém.', 'De qual esforço seu você se lembra com carinho?'], ['determinacao', 'Determinação', 'Persistir com espaço para ajustar.', 'Determinação é uma disposição para continuar em direção a algo importante. Mudar de estratégia ou descansar não apaga o que foi construído.', 'Qual próximo passo cabe no seu dia?'], ['calma', 'Calma', 'Encontrar um intervalo no movimento.', 'Calma não significa ausência de problemas. Pode ser um momento em que há espaço para observar e decidir sem agir imediatamente.', 'Onde você encontra um pequeno intervalo?'], ['ansiedade', 'Ansiedade', 'Antecipar o que ainda não aconteceu.', 'A ansiedade pode acompanhar incertezas e expectativas. Reconhecer o que está acontecendo agora ajuda a separar uma possibilidade de um fato.', 'O que está ao seu alcance neste momento?'], ['medo', 'Medo', 'Perceber riscos e buscar proteção.', 'O medo chama atenção para ameaças percebidas. O contexto importa: nem todo alerta significa perigo imediato, e pedir apoio pode ajudar a avaliar uma situação.', 'O que faria você se sentir acompanhado?'], ['culpa', 'Culpa', 'Revisitar ações e responsabilidades.', 'A culpa pode convidar a reconhecer um erro e reparar o que for possível. Ser responsável por uma ação não significa ser responsável por tudo.', 'Existe um reparo possível, pequeno e concreto?'], ['odio', 'Ódio', 'Reconhecer uma hostilidade intensa.', 'O ódio pode reunir hostilidade, dor e rejeição intensas. Sentir algo não torna qualquer ação inevitável: é possível buscar distância, cuidado e formas seguras de lidar com o conflito.', 'Qual limite precisa ser respeitado sem ferir ninguém?']];
const findAsset = part => ASSETS.find(p => p.includes(part));
const sprite = id => findAsset('/02-No-Cenario-64/' + id + '/00-base.png');
const storedDiscoveries = storage.get('sentia-discoveries', []);
let discoveries = new Set((Array.isArray(storedDiscoveries) ? storedDiscoveries : []).filter(x => Number.isInteger(x) && x >= 0 && x < 7));
const lanternIds = ['medo', 'calma', 'orgulho', 'amor', 'tristeza', 'determinacao'];
const lanternClues = {
  medo: ['E', 'Na fila numerada de 1 a 6, Medo vem imediatamente antes de Calma, sem outra lanterna entre os dois.'],
  calma: ['S', 'Calma não ocupa nenhuma ponta da fila: sua posição fica entre 2 e 5.'],
  orgulho: ['C', 'Orgulho vem depois de Calma e antes de Amor. Essas posições não precisam ser vizinhas.'],
  amor: ['U', 'Amor vem exatamente duas posições antes de Determinação: há uma lanterna entre os dois.'],
  tristeza: ['T', 'Tristeza vem imediatamente antes de Determinação, sem outra lanterna entre os dois.'],
  determinacao: ['A', 'Use cada sentimento uma única vez. Leia as marcas pela numeração: posição 1, depois 2, até 6, mesmo se os cartões aparecerem em várias linhas.']
};
const sealPairs = ['calma+medo', 'amor+tristeza', 'determinacao+orgulho'];
const sealVerses = ['O aviso encontra espaço para respirar.', 'A falta ainda guarda um vínculo.', 'Reconhecer o caminho e dar o próximo passo.'];
const storedPuzzle = storage.get('sentia-portal-puzzle-v2', {}) || {};
const puzzle = {
  version: 2,
  stage: [1, 2, 3, 4].includes(storedPuzzle.stage) ? storedPuzzle.stage : 1,
  clues: Array.isArray(storedPuzzle.clues) ? [...new Set(storedPuzzle.clues.filter(x => lanternIds.includes(x)))] : [],
  combinations: Array.isArray(storedPuzzle.combinations) ? [...new Set(storedPuzzle.combinations.map(x => typeof x==='string'?x.split('+').sort().join('+'):'').filter(x => sealPairs.includes(x)))] : [],
  order: Array.isArray(storedPuzzle.order) && storedPuzzle.order.length === 6 ? storedPuzzle.order.map(x => lanternIds.includes(x) ? x : '') : Array(6).fill(''),
  seals: Array.isArray(storedPuzzle.seals??storedPuzzle.pairs) && (storedPuzzle.seals??storedPuzzle.pairs).length === 3 ? (storedPuzzle.seals??storedPuzzle.pairs).map(pair => Array.isArray(pair) && pair.length === 2 ? pair.map(x => lanternIds.includes(x) ? x : '') : ['', '']) : Array.from({length:3}, () => ['', '']),
  attempts: Number.isInteger(storedPuzzle.attempts) && storedPuzzle.attempts >= 0 ? storedPuzzle.attempts : 0,
  hints: Number.isInteger(storedPuzzle.hints) ? Math.max(0, Math.min(3, storedPuzzle.hints)) : 0,
  solved: storedPuzzle.solved === true
};
if (puzzle.solved) puzzle.stage = 4;
else if (puzzle.stage === 4) puzzle.stage = 1;
const storedCollection = storage.get('sentia-collection', []);
let collection = new Set((Array.isArray(storedCollection) ? storedCollection : []).filter(x => emotions.some(e => e[0] === x)));
// Uma descoberta já guardada no Atlas também conta no caderno após atualizar o site.
for(const id of lanternIds)if(collection.has(id)&&!puzzle.clues.includes(id))puzzle.clues.push(id);
let puzzleRestored=false;
if(!puzzle.solved) {
  const validOrder=new Set(puzzle.order).size===6&&puzzle.order.every(Boolean)&&orderRules(puzzle.order).every(Boolean);
  const validSeals=puzzle.seals.every((pair,i)=>pair[0]&&pair[1]&&[...pair].sort().join('+')===sealPairs[i]);
  // Etapa antiga incompleta volta a ser editável, preservando tudo que já foi preenchido.
  if(puzzle.stage>1&&!validOrder){puzzle.stage=1;puzzleRestored=true;}
  else if(puzzle.stage>2&&!validSeals){puzzle.stage=2;puzzleRestored=true;}
}
storage.set('sentia-portal-puzzle-v2',puzzle);
let collectionOnly = false;
// O enigma é um recurso do site: JSON preserva as pistas sem tocar no save do jogo.
function savePuzzle() {
  storage.set('sentia-portal-puzzle-v2', puzzle);
  renderDiscoveries();
}
function discover(id) {
  if (!discoveries.has(id)) {
    discoveries.add(id);
    storage.set('sentia-discoveries', [...discoveries]);
  }
  renderDiscoveries();
}
function renderDiscoveries() {
  // O for percorre a fila numerada e cria um indicador por fragmento.
  const dots=[];
  for(let i=0;i<lanternIds.length;i++){
    const id=lanternIds[i];
    const dot = document.createElement('i');
    const found = puzzle.clues.includes(id);
    const label = emotions.find(e => e[0] === id)[1];
    dot.classList.toggle('found', found);
    dot.title = 'Pista de ' + label;
    dot.setAttribute('role', 'img');
    dot.setAttribute('aria-label', 'Pista de ' + label + (found ? ': encontrada' : ': por descobrir'));
    dots.push(dot);
  }
  $('#discoveries').replaceChildren(...dots);
  $('#discovery-text').textContent = puzzle.solved ? 'O enigma foi resolvido. O caminho continua aberto neste navegador.' : puzzle.clues.length + ' de 6 pistas no caderno · ' + (puzzle.stage - 1) + ' de 3 etapas resolvidas. Visitar páginas não abre esta porta: as pistas precisam se conectar.';
  $('#garden-entry').textContent = puzzle.solved ? 'Entrar no Jardim ↗' : 'Resolver o enigma das lanternas ↓';
}
// Parte 3: cria um aviso com nós do DOM e permite dispensar pelo botão ou pelo relógio.
function alertBox(text) {
  const box=document.createElement('div');box.className='alert';
  const message=document.createElement('span');message.textContent=text;
  const close=document.createElement('button');close.textContent='×';close.setAttribute('aria-label','Dispensar aviso');
  const dismiss=()=>{box.remove();const index=activeAlerts.indexOf(box);if(index>=0)activeAlerts.splice(index,1);};
  close.addEventListener('click',dismiss);
  box.appendChild(message);box.appendChild(close);
  // O mais recente entra antes dos demais. A pilha mantém no máximo três avisos.
  document.getElementById('alerts').prepend(box);activeAlerts.unshift(box);
  while(activeAlerts.length>3){const oldest=activeAlerts.pop();oldest.remove();}
  setTimeout(dismiss,7000);
}
let modalReturn = null;
// Parte 2: abre a janela, dá um nome acessível e move o foco para seu primeiro campo.
function openModal(content) {
  const origin = document.activeElement;
  modalReturn = {
    element: origin,
    emotion: origin?.dataset.emotionId,
    task: origin?.dataset.taskEdit
  };
  $('#modal-body').replaceChildren(content);
  const heading = content.querySelector('h2,h1,h3');
  $('#modal').removeAttribute('aria-label');
  $('#modal').removeAttribute('aria-labelledby');
  if (heading) {
    heading.id = 'modal-title';
    heading.tabIndex = -1;
    $('#modal').setAttribute('aria-labelledby', heading.id);
  } else $('#modal').setAttribute('aria-label', content.querySelector('label')?.textContent.trim() || 'SENTIA');
  $('#modal').showModal();
  (content.querySelector('input,textarea,select') || heading)?.focus({preventScroll:true});
}
$('#modal .close').onclick = () => $('#modal').close();
// Guardar e editar recriam os controles: o foco volta para o novo card, não para o início da página.
$('#modal').addEventListener('close', () => {
  if (!modalReturn) return;
  const target = modalReturn.emotion ? document.querySelector('[data-emotion-id="' + CSS.escape(modalReturn.emotion) + '"]') : modalReturn.task ? document.querySelector('[data-task-edit="' + CSS.escape(modalReturn.task) + '"]') : modalReturn.element;
  (target?.isConnected && target.getClientRects().length ? target : $('#conteudo')).focus({preventScroll:true});
  modalReturn = null;
});
$('#modal').addEventListener('click', e => {
  if (e.target === $('#modal')) {
    const r = e.target.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close();
  }
});
// Parte 4: o filtro usa o texto buscado e a coleção para reconstruir os cartões visíveis.
function renderAtlas() {
  const q = $('#busca').value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filtered = emotions.filter(e => (!collectionOnly || collection.has(e[0])) && e.join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(q));
  $('#emotion-grid').replaceChildren(...filtered.map(e => {
    const b = document.createElement('button');
    b.className = 'emotion-card';
    b.dataset.emotionId = e[0];
    b.innerHTML = '<span class="small">' + (collection.has(e[0]) ? '✓ NA SUA COLEÇÃO' : 'SENTIR / ' + String(emotions.indexOf(e) + 1).padStart(2, '0')) + '</span><img alt="" src="' + sprite(e[0]) + '"><h3>' + e[1] + '</h3><p>' + e[2] + '</p>';
    b.onclick = () => {
      discover(0);
      const article = document.createElement('article');
      article.innerHTML = '<img class="modal-sprite" alt="Representação de ' + e[1] + '" src="' + sprite(e[0]) + '"><p class="eyebrow">ATLAS EMOCIONAL</p><h2>' + e[1] + '</h2><p>' + e[3] + '</p><h3>Uma pergunta para levar</h3><p>' + e[4] + '</p><button class="button primary">Guardar esta descoberta ✦</button>';
      if (lanternClues[e[0]]) {
        const clue = document.createElement('aside');
        clue.className = 'atlas-clue';
        const title = document.createElement('strong');
        title.textContent = 'Fragmento das lanternas' + (puzzle.stage > 1 ? ' · marca ' + lanternClues[e[0]][0] : '');
        const text = document.createElement('p');
        text.textContent = lanternClues[e[0]][1];
        clue.append(title, text);
        article.querySelector('button').before(clue);
      }
      article.querySelector('button').onclick = () => {
        collection.add(e[0]);
        storage.set('sentia-collection', [...collection]);
        if (lanternClues[e[0]] && !puzzle.clues.includes(e[0])) puzzle.clues.push(e[0]);
        savePuzzle();
        discover(1);
        $('#modal').close();
        renderAtlas();
        renderPuzzle();
        alertBox(lanternClues[e[0]] ? 'Descoberta guardada. A pista foi copiada para o caderno das lanternas.' : 'Descoberta guardada na sua coleção.');
      };
      openModal(article);
    };
    return b;
  }));
  $('#search-count').textContent = filtered.length ? filtered.length + ' sentimentos encontrados.' : collectionOnly && !collection.size ? 'Sua coleção ainda está vazia. Abra um sentimento e guarde uma descoberta.' : 'Nenhum resultado. Tente outra palavra ou limpe os filtros.';
  $('#collection-filter').textContent = collectionOnly ? 'Mostrar todos os sentimentos' : 'Minha coleção (' + collection.size + ')';
  $('#collection-filter').setAttribute('aria-pressed', String(collectionOnly));
  $('#clear-atlas-filters').hidden = !q && !collectionOnly;
}
$('#busca').oninput = renderAtlas;
$('#clear-atlas-filters').onclick = () => {
  $('#busca').value = '';
  collectionOnly = false;
  renderAtlas();
  $('#busca').focus();
};
$('#collection-filter').onclick = () => {
  collectionOnly = !collectionOnly;
  renderAtlas();
};
['#emocao-a', '#emocao-b'].forEach(s => emotions.forEach(e => $(s).add(new Option(e[1], e[0]))));
$('#emocao-b').value = 'medo';
$('#combinar').onclick = () => {
  const a = emotions.find(e => e[0] === $('#emocao-a').value),
    b = emotions.find(e => e[0] === $('#emocao-b').value);
  if (a === b) {
    alertBox('Escolha dois sentimentos diferentes para ver uma conexão.');
    return;
  }
  const pair = [a[0], b[0]].sort().join('+');
  const texts = {
    'felicidade+medo': 'Um começo pode trazer entusiasmo e receio. Você pode reconhecer a alegria da novidade e dar um passo pequeno enquanto conhece o caminho.',
    'amor+tristeza': 'Sentir falta pode mostrar o valor de um vínculo. O carinho não elimina a tristeza; pode oferecer companhia enquanto ela existe.',
    'ansiedade+determinacao': 'Querer seguir em frente e se preocupar com o resultado podem acontecer juntos. Separar o próximo passo de todas as possibilidades ajuda a tornar a ação concreta.',
    'culpa+orgulho': 'É possível reconhecer uma conquista e também perceber um erro. Um sentimento não precisa apagar a responsabilidade ou o esforço que o outro revela.',
    'calma+medo': 'O alerta do medo pode coexistir com um intervalo de calma. Ter apoio e informação pode abrir espaço para escolher como agir.',
    'determinacao+orgulho': 'Reconhecer o esforço que já fez pode acompanhar a vontade de continuar. Orgulho dá nome ao caminho percorrido; determinação ajuda a escolher o próximo passo, inclusive quando ele precisa ser menor.'
  };
  $('#connection').innerHTML = '<p class="eyebrow">DOIS SENTIMENTOS, UM ENCONTRO</p><h2>' + a[1] + '<br>+ ' + b[1] + '</h2><p>' + (texts[pair] || a[1] + ' e ' + b[1] + ' podem aparecer na mesma experiência. Um lado pode dizer “' + a[2].toLowerCase() + '” e o outro pedir atenção a algo diferente. Observe o contexto e o que cada um destaca, sem precisar escolher um único sentimento.') + '</p>';
  discover(2);
  if (sealPairs.includes(pair)) {
    if (!puzzle.combinations.includes(pair)) puzzle.combinations.push(pair);
    savePuzzle();
    const clue = document.createElement('aside');
    clue.className = 'connection-clue';
    clue.textContent = 'Verso encontrado para os selos: “' + sealVerses[sealPairs.indexOf(pair)] + '”';
    $('#connection').append(clue);
    renderPuzzle();
  }
};
// Parte 5: plano pessoal com array/localStorage; MySQL só no registro compartilhado.
// Ambos ficam na parte escolar, sem alterar os dados do Jardim.
RegistrosSentia.init({openModal,onDiscover:()=>discover(4)});
$('#reflect-choice').onchange = () => {
  if ($('#reflect-choice').value) discover(5);
};
// Parte 6: esta é uma simulação local. Promise e setTimeout fazem a espera; não há IA externa.
const reflections = ['Você pode reconhecer um esforço sem esperar um resultado perfeito.', 'Qual coisa pequena pode esperar até amanhã?', 'Um limite também pode ser uma forma de cuidado.', 'É possível pedir companhia sem ter uma explicação pronta.', 'Você não precisa resolver todo o dia de uma vez.'];
$('#reflection').onclick = async () => {
  const b = $('#reflection');
  b.disabled = true;
  b.textContent = 'Preparando uma pausa…';
  $('#reflection-result').hidden=false;
  $('#reflection-text').textContent='Procurando uma pequena reflexão…';
  try {
    const text = await new Promise(resolve => setTimeout(() => resolve(reflections[Math.floor(Math.random() * reflections.length)]), 700));
    $('#reflection-text').textContent = text;
  } catch {
    $('#reflection-text').textContent = 'Não foi possível mostrar a reflexão agora. Tente novamente.';
  } finally {
    b.disabled = false;
    b.textContent = 'Receber outra reflexão ✦';
  }
};
$('#contact-form').onsubmit = e => {
  e.preventDefault();
  const name = $('#nome'),
    email = $('#email'),
    message = $('#mensagem');
  if (name.value.trim().length < 2) {
    $('#form-status').textContent = 'Escreva um nome com pelo menos 2 letras.';
    name.focus();
    return;
  }
  if (!email.validity.valid || !email.value.trim()) {
    $('#form-status').textContent = 'Confira o formato do e-mail.';
    email.focus();
    return;
  }
  if (message.value.trim().length < 10) {
    $('#form-status').textContent = 'A sugestão precisa ter pelo menos 10 caracteres.';
    message.focus();
    return;
  }
  $('#form-status').textContent = 'Tudo certo com os campos. Esta demonstração não envia nem armazena a mensagem.';
  const summary=document.createElement('div'),heading=document.createElement('h2'),description=document.createElement('p');
  heading.textContent='Sua ideia está conferida';
  description.textContent=`${name.value.trim()}, os campos estão válidos. Esta demonstração não envia nem guarda seu nome, e-mail ou mensagem.`;
  const finish=document.createElement('button');finish.className='button primary';finish.textContent='Concluir conferência';
  finish.addEventListener('click',()=>{$('#contact-form').reset();$('#modal').close();alertBox('Campos conferidos. Nenhuma mensagem foi enviada.');});
  summary.append(heading,description,finish);openModal(summary);
};
$('#garden-entry').onclick = () => {
  if (!puzzle.solved) {
    $('#portal-puzzle').scrollIntoView({behavior:reducedMotionEnabled() ? 'auto' : 'smooth',block:'start'});
    $('#puzzle-title').focus({preventScroll:true});
    return;
  }
  discover(6);
  const wrap = document.createElement('div');
  wrap.innerHTML = '<p class="eyebrow">ANTES DE ATRAVESSAR</p><h2>Jardim dos Ecos</h2><p>Uma narrativa ficcional de terror psicológico, com violência sugerida, perdas e sustos. A história questiona a intenção do protagonista; não recomenda eliminar sentimentos.</p><p>Escolha como vai jogar. Você poderá mudar nas configurações.</p><div class="actions"><button class="button primary" data-device="pc">PC · teclado e mouse</button><button class="button secondary" data-device="mobile">Celular · toque</button></div>';
  wrap.querySelectorAll('[data-device]').forEach(b => b.onclick = () => {
    storage.set('sentia-device', b.dataset.device);
    PortalSentia.enter();
  });
  openModal(wrap);
};

// O portal tem um enigma de lógica. Pistas lidas ajudam, mas só a solução abre o Jardim.
function emotionName(id) { return emotions.find(e => e[0] === id)?.[1] || ''; }
function lanternSelect(label, value, onChange) {
  const select = document.createElement('select');
  select.setAttribute('aria-label', label);
  select.add(new Option('Escolha…', ''));
  lanternIds.forEach(id => select.add(new Option(emotionName(id), id)));
  select.value = value;
  select.onchange = () => onChange(select.value);
  return select;
}
function puzzleStatus(text, good = false) {
  $('#puzzle-feedback').textContent = text;
  $('#puzzle-feedback').classList.toggle('success', good);
  if (!good && location.hash === '#jardim') $('#puzzle-feedback').scrollIntoView({block:'nearest',behavior:reducedMotionEnabled() ? 'auto' : 'smooth'});
}
function orderRules(order) {
  const at = id => order.indexOf(id);
  return [at('calma') === at('medo') + 1, at('calma') > 0 && at('calma') < 5, at('orgulho') > at('calma') && at('orgulho') < at('amor'), at('determinacao') === at('amor') + 2, at('determinacao') === at('tristeza') + 1];
}
function renderPuzzle() {
  $('#lantern-form > p:not(.eyebrow)').textContent='As posições formam uma única fila, de 1 a 6. No celular, siga a numeração e continue na próxima linha. “Antes” e “depois” se referem aos números, não à linha da tela. Use cada sentimento uma vez e respeite todas as pistas do caderno.';
  $('#puzzle-notebook-title').textContent = 'Meu caderno de pistas · ' + puzzle.clues.length + '/6 fragmentos';
  $('#puzzle-attempts').textContent = puzzle.attempts ? puzzle.attempts + (puzzle.attempts === 1 ? ' verificação feita' : ' verificações feitas') : 'Sem limite de tentativas';
  $('#puzzle-steps').replaceChildren(...['As lanternas', 'Os vínculos', 'A palavra'].map((text, i) => {
    const item = document.createElement('li');
    item.textContent = (puzzle.stage > i + 1 ? '✓ ' : (i + 1) + ' · ') + text;
    item.classList.toggle('complete', puzzle.stage > i + 1);
    if (puzzle.stage === i + 1) item.setAttribute('aria-current', 'step');
    return item;
  }));
  $('#clue-notebook').replaceChildren(...lanternIds.map(id => {
    const item = document.createElement('li');
    const name = document.createElement('strong');
    name.textContent = emotionName(id) + (puzzle.clues.includes(id) ? puzzle.stage > 1 ? ' · ' + lanternClues[id][0] : ' · pista guardada' : ' · falta encontrar');
    const text = document.createElement('p');
    text.textContent = puzzle.clues.includes(id) ? lanternClues[id][1] : 'Abra este sentimento no Atlas e guarde a descoberta para copiar a pista.';
    const link = document.createElement('button');
    link.className = 'text-link';
    link.textContent = 'Consultar ' + emotionName(id) + ' no Atlas →';
    link.onclick = () => {
      collectionOnly = false;
      $('#busca').value = emotionName(id);
      renderAtlas();
      location.hash = 'atlas';
    };
    item.append(name, text, link);
    return item;
  }));
  $('#seal-notebook').replaceChildren(...sealPairs.map((pair,i) => {
    const li = document.createElement('li');
    li.textContent = puzzle.combinations.includes(pair) ? pair.split('+').map(emotionName).join(' + ') + ': “' + sealVerses[i] + '”' : 'Conexão ' + (i + 1) + ': procure pares na Convergência para descobrir este verso.';
    return li;
  }));
  const field = $('#lantern-slots');
  field.replaceChildren(...puzzle.order.map((id, i) => {
    const card = document.createElement('div');
    card.className = 'lantern-slot';
    const label = document.createElement('label');
    label.textContent = 'Posição ' + (i + 1);
    const portrait = document.createElement('img');
    portrait.alt = '';
    portrait.hidden = !id;
    if (id) portrait.src = sprite(id);
    const rune = document.createElement('span');
    rune.className = 'lantern-rune';
    rune.textContent = id && puzzle.clues.includes(id) ? puzzle.stage > 1 ? lanternClues[id][0] : '✦' : '·';
    const select = lanternSelect('Lanterna da posição ' + (i + 1), id, value => {
      puzzle.order[i] = value;
      savePuzzle();
      portrait.hidden = !value;
      if (value) portrait.src = sprite(value);
      rune.textContent = value && puzzle.clues.includes(value) ? puzzle.stage > 1 ? lanternClues[value][0] : '✦' : '·';
    });
    select.id = 'lantern-' + i;
    select.disabled = puzzle.stage > 1;
    label.htmlFor = select.id;
    card.append(label, portrait, rune, select);
    return card;
  }));
  $('#lantern-submit').hidden = puzzle.stage > 1;
  $('#seal-step').hidden = puzzle.stage < 2;
  $('#seal-form').hidden = puzzle.stage > 2;
  $('#seal-solved').hidden = puzzle.stage < 3;
  $('#word-step').hidden = puzzle.stage < 3 || puzzle.solved;
  $('#portal-solved').hidden = !puzzle.solved;
  $('#portal-solved-entry').hidden = !puzzle.solved;
  $('#seal-slots').replaceChildren(...puzzle.seals.map((pair,i) => {
    const row = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Selo ' + (i + 1) + ' · ' + sealVerses[i];
    row.append(legend);
    pair.forEach((id,j) => row.append(lanternSelect('Selo ' + (i + 1) + ', sentimento ' + (j + 1), id, value => {
      puzzle.seals[i][j] = value;
      savePuzzle();
    })));
    return row;
  }));
  $('#puzzle-hint-text').textContent = puzzle.hints ? [
    'Siga as posições de 1 a 6, mesmo no celular. Comece pelos vizinhos obrigatórios e monte blocos antes de preencher a fila.',
    'Um bloco tem Medo seguido de Calma. Outro tem Amor, Tristeza e Determinação em posições consecutivas, nessa ordem.',
    'Orgulho precisa ficar depois do primeiro bloco e antes do segundo. Confira se nenhuma lanterna se repete.'
  ][puzzle.hints - 1] : '';
  $('#puzzle-hint').textContent = puzzle.hints < 3 ? 'Pedir uma pista de raciocínio (' + (puzzle.hints + 1) + '/3)' : 'Rever a última pista';
}
$('#lantern-form').onsubmit = e => {
  e.preventDefault();
  if (puzzle.stage > 1) return;
  if (puzzle.clues.length < 6) {
    $('.puzzle-notebook').open=true;
    return puzzleStatus('Faltam os fragmentos de '+lanternIds.filter(id=>!puzzle.clues.includes(id)).map(emotionName).join(', ')+'. Abra cada um pelos links do caderno e toque em “Guardar esta descoberta”. Sua disposição continua salva.');
  }
  puzzle.attempts++;
  if (puzzle.order.some(x => !x) || new Set(puzzle.order).size !== 6) {
    savePuzzle();
    renderPuzzle();
    return puzzleStatus('Use as seis lanternas, sem repetir nenhum sentimento.');
  }
  const rules = orderRules(puzzle.order);
  if (rules.every(Boolean)) {
    puzzle.stage = 2;
    savePuzzle();
    renderPuzzle();
    puzzleStatus('As seis marcas acenderam. Agora associe os vínculos aos três selos.', true);
    $('#seal-title').focus();
  } else {
    const feedback = ['Medo precisa ocupar a posição imediatamente anterior à de Calma.', 'Calma precisa ficar em uma das posições de 2 a 5.', 'Confira a ordem numérica: primeiro Calma, depois Orgulho, depois Amor.', 'A posição de Determinação precisa ser o número da posição de Amor mais 2.', 'A posição de Determinação precisa ser o número da posição de Tristeza mais 1.'];
    savePuzzle();renderPuzzle();
    puzzleStatus(rules.filter(Boolean).length + ' de 5 relações estão coerentes. ' + feedback[rules.indexOf(false)]);
  }
};
$('#seal-form').onsubmit = e => {
  e.preventDefault();
  if (puzzle.stage !== 2) return;
  puzzle.attempts++;
  const correct = puzzle.seals.map((pair,i) => pair[0] && pair[1] && pair[0] !== pair[1] && [...pair].sort().join('+') === sealPairs[i]);
  savePuzzle();renderPuzzle();
  if (!correct.every(Boolean)) return puzzleStatus('Confira o selo '+(correct.indexOf(false)+1)+': cada verso pede seu próprio par. A ordem dos dois sentimentos dentro do mesmo selo não importa. Teste os pares na Convergência e compare o verso encontrado com o título do selo.');
  if (puzzle.combinations.length < 3) {
    $('.puzzle-notebook').open=true;
    return puzzleStatus('Os pares dos selos estão corretos. Falta registrar na Convergência: '+sealPairs.filter(pair=>!puzzle.combinations.includes(pair)).map(pair=>pair.split('+').map(emotionName).join(' + ')).join('; ')+'. Combine esses pares e volte para conferir os vínculos; suas escolhas continuam salvas.');
  }
  puzzle.stage = 3;savePuzzle();renderPuzzle();
  puzzleStatus('Os três vínculos se fecharam. Leia as marcas das lanternas na ordem encontrada.', true);
  $('#portal-word').focus();
};
$('#word-form').onsubmit = e => {
  e.preventDefault();
  if (puzzle.stage !== 3) return;
  puzzle.attempts++;
  const word = $('#portal-word').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleUpperCase('pt-BR');
  if (word !== 'ESCUTA') {savePuzzle();renderPuzzle();return puzzleStatus('A palavra vem das marcas, lidas da esquerda para a direita. Não é uma senha externa.');}
  puzzle.solved = true;puzzle.stage = 4;savePuzzle();discover(6);renderPuzzle();
  puzzleStatus('O caminho está aberto. Você pode escolher os controles antes de entrar.', true);
  $('#portal-solved-entry').focus();
};
$('#puzzle-hint').onclick = () => {
  puzzle.hints = Math.min(3, puzzle.hints + 1);savePuzzle();renderPuzzle();
};
$('#puzzle-reset').onclick = () => {
  if (!confirm('Recomeçar apenas o enigma? Suas pistas, tarefas e a partida do Jardim serão preservadas.')) return;
  Object.assign(puzzle,{stage:1,order:Array(6).fill(''),seals:Array.from({length:3},()=>['','']),solved:false,hints:0});
  savePuzzle();renderPuzzle();puzzleStatus('As lanternas voltaram às posições vazias. As pistas continuam no caderno.');
};
$('#portal-solved-entry').onclick = () => $('#garden-entry').click();
function theme() {
  const dark = storage.get('sentia-dark', false);
  // Parte 1: a classe ativa as variáveis CSS do tema; a preferência fica no localStorage.
  if(dark)document.body.classList.add('dark');else document.body.classList.remove('dark');
  $('#tema').setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
}
$('#tema').onclick = () => {
  storage.set('sentia-dark', !document.body.classList.contains('dark'));
  theme();
};
$('#reduce-motion').checked = storage.get('sentia-reduced', false);
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function reducedMotionEnabled() {
  return $('#reduce-motion').checked || motionPreference.matches;
}
function applyMotionPreference() {
  const reduced = reducedMotionEnabled();
  document.body.classList.toggle('reduced', reduced);
  document.documentElement.classList.toggle('reduced', reduced);
}
applyMotionPreference();
$('#reduce-motion').onchange = () => {
  storage.set('sentia-reduced', $('#reduce-motion').checked);
  applyMotionPreference();
};
motionPreference.addEventListener?.('change', applyMotionPreference);
// As âncoras mostram uma seção por vez; o foco e o título acompanham a navegação.
function route() {
  const requested = location.hash.slice(1) || 'home';
  const id = document.getElementById(requested)?.classList.contains('page') ? requested : 'home';
  document.querySelectorAll('.page').forEach(p => p.hidden = p.id !== id);
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.hash === '#' + id);
    if (a.hash === '#' + id) a.setAttribute('aria-current', 'page');else a.removeAttribute('aria-current');
  });
  // switch escolhe um título para cada seção; break impede cair no próximo caso.
  let title;
  switch(id){
    case 'atlas':title='Atlas emocional';break;
    case 'convergencia':title='Convergência';break;
    case 'praticas':title='Práticas e registro';break;
    case 'jardim':title='Jardim dos Ecos';break;
    case 'sobre':title='Sobre';break;
    case 'creditos':title='Créditos';break;
    default:title='um lugar para sentir';
  }
  document.title=`SENTIA · ${title}`;
  if (id === 'sobre') discover(3);
  window.scrollTo(0, 0);
  $('#conteudo').focus({
    preventScroll: true
  });
}
$('#hero-image').src = findAsset('/01-Entrada/03-praca-central.png');
$('#garden-image').src = findAsset('/01-Entrada/01-portal.png');
window.addEventListener('hashchange', route);
theme();
renderAtlas();
renderPuzzle();
if(puzzleRestored)puzzleStatus('Recuperamos seu enigma anterior. A primeira etapa incompleta voltou a ser editável; suas pistas e escolhas foram preservadas.');
renderDiscoveries();
route();
