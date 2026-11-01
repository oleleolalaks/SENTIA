'use strict';

// As atividades da escola ficam só no SENTIA. O Jardim usa outro arquivo e outro save.
const $ = selector => document.querySelector(selector);
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
let discoveries = new Set(storage.get('sentia-discoveries', []));
let tasks = storage.get('sentia-tasks', []);
if (!Array.isArray(tasks)) tasks = [];
const labels = ['Conhecer um sentimento', 'Abrir uma descoberta', 'Combinar sentimentos', 'Conhecer o projeto', 'Registrar uma pequena ação', 'Escolher uma pausa', 'Observar o portal'];
function discover(id) {
  if (!discoveries.has(id)) {
    discoveries.add(id);
    storage.set('sentia-discoveries', [...discoveries]);
  }
  renderDiscoveries();
}
function renderDiscoveries() {
  $('#discoveries').replaceChildren(...labels.map((label, i) => {
    const dot = document.createElement('i');
    dot.classList.toggle('found', discoveries.has(i));
    dot.title = label;
    dot.setAttribute('aria-label', label + (discoveries.has(i) ? ': encontrada' : ': por descobrir'));
    return dot;
  }));
  $('#discovery-text').textContent = discoveries.size + ' de 7 descobertas. ' + (discoveries.size >= 6 ? 'O portal parece ter percebido você.' : 'Explore o Atlas, as conexões, o projeto e seu registro.');
  $('#garden-entry').textContent = discoveries.size === 7 ? 'Entrar no Jardim ↗' : 'Observar o portal ✦';
}
function alertBox(text) {
  const box = document.createElement('div');
  box.className = 'alert';
  const message = document.createElement('span');
  message.textContent = text;
  const close = document.createElement('button');
  close.textContent = '×';
  close.setAttribute('aria-label', 'Dispensar aviso');
  close.onclick = () => box.remove();
  box.append(message, close);
  $('#alerts').append(box);
  setTimeout(() => box.remove(), 7000);
}
function openModal(content) {
  $('#modal-body').replaceChildren(content);
  $('#modal').showModal();
}
$('#modal .close').onclick = () => $('#modal').close();
$('#modal').addEventListener('click', e => {
  if (e.target === $('#modal')) {
    const r = e.target.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close();
  }
});
function renderAtlas() {
  const q = $('#busca').value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filtered = emotions.filter(e => e.join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(q));
  $('#emotion-grid').replaceChildren(...filtered.map(e => {
    const b = document.createElement('button');
    b.className = 'emotion-card';
    b.innerHTML = '<span class="small">SENTIR / ' + String(emotions.indexOf(e) + 1).padStart(2, '0') + '</span><img alt="" src="' + sprite(e[0]) + '"><h3>' + e[1] + '</h3><p>' + e[2] + '</p>';
    b.onclick = () => {
      discover(0);
      const article = document.createElement('article');
      article.innerHTML = '<img class="modal-sprite" alt="Representação de ' + e[1] + '" src="' + sprite(e[0]) + '"><p class="eyebrow">ATLAS EMOCIONAL</p><h2>' + e[1] + '</h2><p>' + e[3] + '</p><h3>Uma pergunta para levar</h3><p>' + e[4] + '</p><button class="button primary">Guardar esta descoberta ✦</button>';
      article.querySelector('button').onclick = () => {
        discover(1);
        $('#modal').close();
        alertBox('Uma descoberta guardada. Continue no seu ritmo.');
      };
      openModal(article);
    };
    return b;
  }));
  $('#search-count').textContent = filtered.length ? filtered.length + ' sentimentos encontrados.' : 'Nenhum resultado. Tente outra palavra.';
}
$('#busca').oninput = renderAtlas;
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
    'calma+medo': 'O alerta do medo pode coexistir com um intervalo de calma. Ter apoio e informação pode abrir espaço para escolher como agir.'
  };
  $('#connection').innerHTML = '<p class="eyebrow">DOIS SENTIMENTOS, UM ENCONTRO</p><h2>' + a[1] + '<br>+ ' + b[1] + '</h2><p>' + (texts[pair] || a[1] + ' e ' + b[1] + ' podem aparecer na mesma experiência. Um lado pode dizer “' + a[2].toLowerCase() + '” e o outro pedir atenção a algo diferente. Observe o contexto e o que cada um destaca, sem precisar escolher um único sentimento.') + '</p>';
  discover(2);
};
// Aq a lista lê, cria, edita e apaga ações. O texto digitado entra como texto, nunca como HTML.
function renderTasks() {
  $('#tasks').replaceChildren(...tasks.map(t => {
    const li = document.createElement('li');
    li.classList.toggle('done', t.done);
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !!t.done;
    cb.setAttribute('aria-label', 'Concluir ' + t.text);
    cb.onchange = () => {
      t.done = cb.checked;
      saveTasks();
    };
    const span = document.createElement('span');
    span.textContent = t.text;
    const edit = document.createElement('button');
    edit.textContent = 'Editar';
    edit.onclick = () => {
      const form = document.createElement('form');
      const label = document.createElement('label');
      label.textContent = 'Editar ação';
      const input = document.createElement('input');
      input.value = t.text;
      input.maxLength = 160;
      input.required = true;
      label.append(input);
      const ok = document.createElement('button');
      ok.className = 'button primary';
      ok.textContent = 'Salvar';
      form.append(label, ok);
      form.onsubmit = e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        t.text = input.value.trim();
        saveTasks();
        $('#modal').close();
      };
      openModal(form);
    };
    const del = document.createElement('button');
    del.textContent = '×';
    del.setAttribute('aria-label', 'Apagar ' + t.text);
    del.onclick = () => {
      tasks = tasks.filter(x => x.id !== t.id);
      saveTasks();
    };
    li.append(cb, span, edit, del);
    return li;
  }));
  $('#task-status').textContent = tasks.length ? tasks.reduce((total, t) => total + (t.done ? 1 : 0), 0) + ' de ' + tasks.length + ' ações concluídas.' : 'Seu registro ainda está vazio.';
}
function saveTasks() {
  storage.set('sentia-tasks', tasks);
  renderTasks();
}
$('#task-form').onsubmit = e => {
  e.preventDefault();
  const text = $('#task').value.trim();
  if (!text) {
    alertBox('Escreva uma ação antes de adicionar.');
    return;
  }
  tasks.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    text,
    done: false
  });
  $('#task').value = '';
  saveTasks();
  discover(4);
};
$('#clear-tasks').onclick = () => {
  if (tasks.length && confirm('Apagar todas as ações deste navegador?')) {
    tasks = [];
    saveTasks();
  }
};
$('#reflect-choice').onchange = () => {
  if ($('#reflect-choice').value) discover(5);
};
const reflections = ['Você pode reconhecer um esforço sem esperar um resultado perfeito.', 'Qual coisa pequena pode esperar até amanhã?', 'Um limite também pode ser uma forma de cuidado.', 'É possível pedir companhia sem ter uma explicação pronta.', 'Você não precisa resolver todo o dia de uma vez.'];
$('#reflection').onclick = async () => {
  const b = $('#reflection');
  b.disabled = true;
  b.textContent = 'Preparando uma pausa…';
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
  alertBox('Campos conferidos. Nenhuma mensagem foi enviada.');
};
$('#garden-entry').onclick = () => {
  if (discoveries.size < 6) {
    alertBox('Ainda há caminhos para explorar: Atlas, Convergência, Sobre e Registro.');
    return;
  }
  discover(6);
  const wrap = document.createElement('div');
  wrap.innerHTML = '<p class="eyebrow">ANTES DE ATRAVESSAR</p><h2>Jardim dos Ecos</h2><p>Uma narrativa ficcional de terror psicológico, com violência sugerida, perdas e sustos. A história questiona a intenção do protagonista; não recomenda eliminar sentimentos.</p><p>Escolha como vai jogar. Você poderá mudar nas configurações.</p><div class="actions"><button class="button primary" data-device="pc">PC · teclado e mouse</button><button class="button secondary" data-device="mobile">Celular · toque</button></div>';
  wrap.querySelectorAll('[data-device]').forEach(b => b.onclick = () => {
    storage.set('sentia-device', b.dataset.device);
    location.href = 'jardim.html';
  });
  openModal(wrap);
};
function theme() {
  const dark = storage.get('sentia-dark', false);
  document.body.classList.toggle('dark', dark);
  $('#tema').setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
}
$('#tema').onclick = () => {
  storage.set('sentia-dark', !document.body.classList.contains('dark'));
  theme();
};
$('#reduce-motion').checked = storage.get('sentia-reduced', false);
document.body.classList.toggle('reduced', $('#reduce-motion').checked);
$('#reduce-motion').onchange = () => {
  storage.set('sentia-reduced', $('#reduce-motion').checked);
  document.body.classList.toggle('reduced', $('#reduce-motion').checked);
};
function route() {
  const requested = location.hash.slice(1) || 'home';
  const id = document.getElementById(requested)?.classList.contains('page') ? requested : 'home';
  document.querySelectorAll('.page').forEach(p => p.hidden = p.id !== id);
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.hash === '#' + id);
    if (a.hash === '#' + id) a.setAttribute('aria-current', 'page');else a.removeAttribute('aria-current');
  });
  document.title = 'SENTIA · ' + {
    home: 'um lugar para sentir',
    atlas: 'Atlas emocional',
    convergencia: 'Convergência',
    praticas: 'Práticas e registro',
    jardim: 'Jardim dos Ecos',
    sobre: 'Sobre',
    creditos: 'Créditos'
  }[id];
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
renderTasks();
renderDiscoveries();
route();
