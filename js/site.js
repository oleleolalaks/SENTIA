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
  medo: ['E', 'Na fila numerada de 1 a 6, Medo fica antes de Calma. Não precisam ser vizinhos.'],
  calma: ['S', 'Calma ocupa uma posição de número par: 2, 4 ou 6.'],
  orgulho: ['T', 'Orgulho fica antes de Amor. Não precisam ser vizinhos.'],
  amor: ['U', 'Amor vem exatamente duas posições antes de Determinação: há uma lanterna entre os dois.'],
  tristeza: ['C', 'Orgulho fica entre Medo e Tristeza, à mesma distância dos dois. Conte as posições da fila.'],
  determinacao: ['A', 'Use cada sentimento uma única vez. Para a palavra, siga os selos de 1 a 3: em cada par, leia primeiro a marca da lanterna em posição ímpar e depois a da posição par. A ordem dos campos do selo não muda essa leitura.']
};
const sealPairs = ['calma+medo', 'amor+tristeza', 'determinacao+orgulho'];
const sealVerses = ['O aviso encontra espaço para respirar.', 'A falta ainda guarda um vínculo.', 'Reconhecer o caminho e dar o próximo passo.'];
const trailWeights = [1,4,2,3, 2,3,1,4, 4,4,4,2, 3,1,3,1];
const storedPuzzle = storage.get('sentia-portal-puzzle-v2', {}) || {};
const puzzle = {
  version: 2,
  stage: [1, 2, 3, 4, 5].includes(storedPuzzle.stage) ? storedPuzzle.stage : 1,
  trail: Array.isArray(storedPuzzle.trail) && validTrail(storedPuzzle.trail) ? [...storedPuzzle.trail] : [],
  clues: Array.isArray(storedPuzzle.clues) ? [...new Set(storedPuzzle.clues.filter(x => lanternIds.includes(x)))] : [],
  combinations: Array.isArray(storedPuzzle.combinations) ? [...new Set(storedPuzzle.combinations.map(x => typeof x==='string'?x.split('+').sort().join('+'):'').filter(x => sealPairs.includes(x)))] : [],
  order: Array.isArray(storedPuzzle.order) && storedPuzzle.order.length === 6 ? storedPuzzle.order.map(x => lanternIds.includes(x) ? x : '') : Array(6).fill(''),
  seals: Array.isArray(storedPuzzle.seals??storedPuzzle.pairs) && (storedPuzzle.seals??storedPuzzle.pairs).length === 3 ? (storedPuzzle.seals??storedPuzzle.pairs).map(pair => Array.isArray(pair) && pair.length === 2 ? pair.map(x => lanternIds.includes(x) ? x : '') : ['', '']) : Array.from({length:3}, () => ['', '']),
  attempts: Number.isInteger(storedPuzzle.attempts) && storedPuzzle.attempts >= 0 ? storedPuzzle.attempts : 0,
  hints: Number.isInteger(storedPuzzle.hints) ? Math.max(0, Math.min(3, storedPuzzle.hints)) : 0,
  solved: storedPuzzle.solved === true
};
if (puzzle.solved) puzzle.stage = 5;
else if (puzzle.stage === 5) puzzle.stage = 1;
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
  $('#discovery-text').textContent = puzzle.solved ? 'O enigma foi resolvido. O caminho continua aberto neste navegador.' : puzzle.clues.length + ' de 6 pistas no caderno · ' + (puzzle.stage - 1) + ' de 4 etapas resolvidas. Visitar páginas não abre esta porta: as pistas precisam se conectar.';
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
  // O índice começa em zero; a posição que aparece no cartão começa em um.
  // As cinco relações juntas têm uma única solução, sem entregar os vizinhos prontos.
  return [at('medo') < at('calma'), (at('calma') + 1) % 2 === 0, at('orgulho') < at('amor'), at('determinacao') === at('amor') + 2, 2 * at('orgulho') === at('medo') + at('tristeza')];
}
function portalWord() {
  // Os selos determinam os pares; a posição na fila determina qual marca vem primeiro.
  return puzzle.seals.map(pair => [...pair].sort((a, b) => (puzzle.order.indexOf(b) + 1) % 2 - (puzzle.order.indexOf(a) + 1) % 2).map(id => lanternClues[id][0]).join('')).join('');
}
// O mosaico cruza direção, duas paradas e a soma das pedras. Não depende de tempo ou memória.
function validTrail(path, complete = false) {
  const connected = path.length <= 7 && path.every((cell, i) => Number.isInteger(cell) && cell >= 0 && cell < 16 && (i === 0 ? cell === 0 : cell === path[i-1] + 4 || (path[i-1] % 4 < 3 && cell === path[i-1] + 1)));
  return connected && (!complete || (path.length === 7 && path[6] === 15 && path.includes(5) && path.includes(10) && path.reduce((sum, cell) => sum + trailWeights[cell], 0) === 16));
}
function renderTrail() {
  $('#trail-step').hidden = puzzle.stage !== 4;
  const selected = puzzle.trail;
  $('#trail-grid').replaceChildren(...trailWeights.map((cost, cell) => {
    const button = document.createElement('button');
    const place = String.fromCharCode(65 + Math.floor(cell / 4)) + (cell % 4 + 1);
    const name = ({0:'Semente',5:'Folha',10:'Lua',15:'Portal'})[cell] || 'Pedra';
    const symbol = ({0:'✦',5:'♧',10:'☾',15:'◇'})[cell] || '·';
    button.type = 'button';button.dataset.cell = cell;
    if (selected.includes(cell)) button.dataset.step = selected.indexOf(cell) + 1;
    button.innerHTML = '<small>' + place + '</small><span aria-hidden="true">' + symbol + '</span><b>' + cost + '</b>';
    button.setAttribute('aria-label',place + ', ' + name + ', valor ' + cost);
    button.setAttribute('aria-pressed', String(selected.includes(cell)));
    button.disabled = puzzle.stage !== 4 || !validTrail([...selected, cell]);
    button.onclick = () => {puzzle.trail.push(cell);savePuzzle();renderTrail();($('#trail-grid button:not(:disabled)') || $('#trail-check')).focus({preventScroll:true});};
    return button;
  }));
  const sum = selected.reduce((total, cell) => total + trailWeights[cell], 0);
  $('#trail-status').textContent = selected.length + '/7 pedras · soma ' + sum + '/16 · Folha ' + (selected.includes(5)?'✓':'por visitar') + ' · Lua ' + (selected.includes(10)?'✓':'por visitar');
  $('#trail-undo').disabled = !selected.length;
}
function renderPuzzle() {
  $('#lantern-form > p:not(.eyebrow)').textContent='As posições formam uma única fila, de 1 a 6. No celular, siga a numeração e continue na próxima linha. “Antes” e “depois” se referem aos números, não à linha da tela. Use cada sentimento uma vez e respeite todas as pistas do caderno.';
  $('#puzzle-notebook-title').textContent = 'Meu caderno de pistas · ' + puzzle.clues.length + '/6 fragmentos';
  $('#puzzle-attempts').textContent = puzzle.attempts ? puzzle.attempts + (puzzle.attempts === 1 ? ' verificação feita' : ' verificações feitas') : 'Sem limite de tentativas';
  $('#puzzle-steps').replaceChildren(...['As lanternas', 'Os vínculos', 'A palavra', 'O mosaico'].map((text, i) => {
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
  // Depois de conferir, os pares continuam à vista para resolver a leitura das marcas.
  $('#seal-form').hidden = puzzle.stage < 2;
  $('#seal-form button').hidden = puzzle.stage > 2;
  $('#seal-solved').hidden = puzzle.stage < 3;
  $('#word-step').hidden = puzzle.stage !== 3;
  $('#portal-solved').hidden = !puzzle.solved;
  $('#portal-solved-entry').hidden = !puzzle.solved;
  $('#seal-slots').replaceChildren(...puzzle.seals.map((pair,i) => {
    const row = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Selo ' + (i + 1) + ' · ' + sealVerses[i];
    row.append(legend);
    pair.forEach((id,j) => {
      const select = lanternSelect('Selo ' + (i + 1) + ', sentimento ' + (j + 1), id, value => {
        puzzle.seals[i][j] = value;
        savePuzzle();
      });
      select.disabled = puzzle.stage > 2;
      row.append(select);
    });
    return row;
  }));
  const hints = {
    1: [
      'Cruze as pistas: Orgulho precisa vir antes de Amor, e Determinação fica duas posições depois de Amor. Reserve espaço também dos dois lados de Orgulho.',
      'Experimente Amor em 3: Determinação iria para 5 e Orgulho precisaria ficar em 2. O equilíbrio de Orgulho exigiria Medo ou Tristeza em 3, já ocupada. Essa hipótese não funciona.',
      'Amor fica em 4 e Determinação em 6. Se Orgulho estivesse em 2, não sobraria posição par para Calma. Teste Orgulho em 3 e complete usando as outras pistas.'
    ],
    2: [
      'Cada verso junta duas ideias presentes nos textos do Atlas. Procure quais sentimentos representam essas duas ideias, sem repetir nenhum nos outros selos.',
      'No primeiro verso, pense em quem avisa sobre um risco e em quem oferece um intervalo. Na Convergência, compare o verso encontrado com o selo.',
      'Para os outros versos, relacione vínculo com falta; depois, reconhecer o esforço com continuar. O caderno guarda as conexões já encontradas.'
    ],
    3: [
      'A fila não é a ordem de leitura da palavra. Os três selos juntam as marcas em pares: consulte o fragmento de Determinação.',
      'Siga os selos de 1 a 3. Em cada par, leia primeiro a marca em posição ímpar (1, 3 ou 5), depois a de posição par (2, 4 ou 6).',
      'No selo 2, a lanterna da posição 5 deve ser lida antes da posição 4. Use o mesmo critério nos outros dois selos e junte os três pares de letras.'
    ],
    4: [
      'Conte também os valores da Semente e do Portal. São sete pedras no total, avançando só para a direita ou para baixo.',
      'Planeje o caminho em dois trechos: chegar à Folha B2 e depois à Lua C3. Compare a soma das alternativas antes de continuar.',
      'Os dois caminhos até B2 somam 8 ou 6. Entre B2 e C3, as alternativas acrescentam 5 ou 8. Depois de C3, faltam 3 ou 4. Qual combinação chega a 16?'
    ]
  };
  $('#puzzle-hint-text').textContent = puzzle.hints && hints[puzzle.stage] ? hints[puzzle.stage][puzzle.hints - 1] : '';
  $('#puzzle-hint').hidden = puzzle.solved;
  $('#puzzle-hint').textContent = puzzle.hints < 3 ? 'Pedir uma pista de raciocínio (' + (puzzle.hints + 1) + '/3)' : 'Rever a última pista';
  renderTrail();
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
    puzzle.hints = 0;
    savePuzzle();
    renderPuzzle();
    puzzleStatus('As seis marcas acenderam. Agora associe os vínculos aos três selos.', true);
    $('#seal-title').focus();
  } else {
    savePuzzle();renderPuzzle();
    puzzleStatus('A disposição ainda contradiz as pistas. Cruze as relações do caderno: uma posição precisa funcionar para todas elas ao mesmo tempo. Se precisar, peça uma pista de raciocínio.');
  }
};
$('#seal-form').onsubmit = e => {
  e.preventDefault();
  if (puzzle.stage !== 2) return;
  puzzle.attempts++;
  const chosen = puzzle.seals.flat();
  if (chosen.some(id => !id) || new Set(chosen).size !== 6) {
    savePuzzle();renderPuzzle();
    return puzzleStatus('Preencha os três selos usando cada sentimento uma única vez, sem repetir. A ordem dos dois campos de um selo não importa.');
  }
  const correct = puzzle.seals.map((pair,i) => pair[0] && pair[1] && pair[0] !== pair[1] && [...pair].sort().join('+') === sealPairs[i]);
  savePuzzle();renderPuzzle();
  if (!correct.every(Boolean)) return puzzleStatus('Os vínculos ainda não correspondem aos versos. Teste suas hipóteses na Convergência e compare os versos encontrados com os títulos dos selos. A ordem dos dois campos de um selo não importa.');
  if (puzzle.combinations.length < 3) {
    $('.puzzle-notebook').open=true;
    return puzzleStatus('Os pares dos selos estão corretos. Ainda falta registrar '+(3-puzzle.combinations.length)+' conexão(ões) na Convergência. Suas escolhas continuam salvas; confira no caderno quais versos faltam encontrar.');
  }
  puzzle.stage = 3;puzzle.hints = 0;savePuzzle();renderPuzzle();
  puzzleStatus('Os três vínculos se fecharam. Siga os selos de 1 a 3: em cada par, leia a marca da posição ímpar antes da posição par.', true);
  $('#portal-word').focus();
};
$('#word-form').onsubmit = e => {
  e.preventDefault();
  if (puzzle.stage !== 3) return;
  puzzle.attempts++;
  const word = $('#portal-word').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleUpperCase('pt-BR');
  if (word !== portalWord()) {savePuzzle();renderPuzzle();return puzzleStatus('Releia os selos de 1 a 3: em cada par, a marca da posição ímpar vem antes da posição par. Junte esses três pares, em vez de copiar a fila inteira.');}
  puzzle.stage = 4;puzzle.hints = 0;savePuzzle();renderPuzzle();
  puzzleStatus('A palavra acendeu o mosaico. Falta traçar uma passagem que respeite as quatro regras.', true);
  $('#trail-title').focus();
};
$('#trail-undo').onclick = () => {puzzle.trail.pop();savePuzzle();renderTrail();};
$('#trail-clear').onclick = () => {puzzle.trail = [];savePuzzle();renderTrail();};
$('#trail-check').onclick = () => {
  if (puzzle.stage !== 4) return;
  puzzle.attempts++;
  if (!validTrail(puzzle.trail, true)) {
    savePuzzle();renderPuzzle();
    return puzzleStatus('O mosaico ainda não fecha. Confira a passagem por Folha e Lua, as sete pedras e a soma 16. Você pode desfazer passos sem perder as etapas anteriores.');
  }
  puzzle.solved = true;puzzle.stage = 5;savePuzzle();discover(6);renderPuzzle();
  puzzleStatus('O caminho está aberto. Você pode escolher os controles antes de entrar.', true);
  $('#portal-solved-entry').focus();
};
$('#puzzle-hint').onclick = () => {
  puzzle.hints = Math.min(3, puzzle.hints + 1);savePuzzle();renderPuzzle();
};
$('#puzzle-reset').onclick = () => {
  if (!confirm('Recomeçar apenas o enigma? Suas pistas, tarefas e a partida do Jardim serão preservadas.')) return;
  Object.assign(puzzle,{stage:1,order:Array(6).fill(''),seals:Array.from({length:3},()=>['','']),trail:[],solved:false,hints:0});
  savePuzzle();renderPuzzle();puzzleStatus('As lanternas voltaram às posições vazias. As pistas continuam no caderno.');
};
$('#portal-solved-entry').onclick = () => $('#garden-entry').click();
// Este reinício limpa apenas o progresso do site. O save do Jardim e o MySQL ficam separados.
$('#reset-site').onclick = () => {
  const wrap = document.createElement('section');
  wrap.innerHTML = '<h2>Reiniciar o SENTIA?</h2><p>Sua coleção do Atlas, as descobertas, as pistas, o enigma e as ações do plano pessoal serão apagados deste navegador. O site voltará ao início, com o plano pessoal vazio.</p><p>A partida do Jardim, os registros compartilhados do MySQL e suas preferências de tema e movimento serão mantidos.</p><p class="small">Essa ação não pode ser desfeita. Se quiser guardar seu plano pessoal, baixe o registro antes.</p><div class="actions"><button type="button" class="button secondary" id="cancel-reset-site">Cancelar</button><button type="button" class="button primary" id="confirm-reset-site">Sim, reiniciar o SENTIA</button></div><p id="reset-site-status" role="status"></p>';
  wrap.querySelector('#cancel-reset-site').onclick = () => $('#modal').close();
  wrap.querySelector('#confirm-reset-site').onclick = () => {
    const keys = ['sentia-discoveries', 'sentia-collection', 'sentia-portal-puzzle-v2', 'sentia-personal-tasks', 'sentia-tasks', 'sentia-record-mode'];
    const backup = new Map();
    try {
      // A lista explícita impede apagar dados do jogo ou de outras páginas nesta origem.
      for (const key of keys) backup.set(key, localStorage.getItem(key));
      for (const key of keys) localStorage.removeItem(key);
    } catch {
      for (const [key, value] of backup) {
        try { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value); } catch {}
      }
      $('#reset-site-status').textContent = 'O navegador não permitiu reiniciar os dados. Confira a permissão de armazenamento e tente novamente.';
      return;
    }
    // Recarregar também limpa os estados que estavam na memória, sem chamar a API de registros.
    document.querySelectorAll('form').forEach(form => form.reset());
    location.hash = 'home';
    location.reload();
  };
  openModal(wrap);
};
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
