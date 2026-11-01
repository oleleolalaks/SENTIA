'use strict';

// O Jardim tem um save próprio. Nada das tarefas, formulários ou exercícios do site roda aqui.
const G = (() => {
  const $ = s => document.querySelector(s),
    D = ROTEIRO,
    ids = ['felicidade', 'amor', 'tristeza', 'orgulho', 'determinacao', 'calma', 'ansiedade', 'culpa', 'medo', 'odio'];
  const first = {
    felicidade: 'F1',
    amor: 'A1',
    tristeza: 'N1',
    orgulho: 'O1',
    determinacao: 'D1',
    calma: 'P1',
    ansiedade: 'H1',
    culpa: 'C1',
    medo: 'M1',
    odio: 'ODG1'
  };
  const second = {
    felicidade: 'F2',
    amor: 'A2',
    tristeza: 'N2',
    orgulho: 'O2',
    calma: 'P2',
    ansiedade: 'H2',
    culpa: 'C2',
    medo: 'M2'
  };
  const palette = {
    felicidade: '#ffc653',
    amor: '#f6a1d7',
    orgulho: '#ffd971',
    determinacao: '#f24459',
    calma: '#b4d6b1',
    tristeza: '#89dfff',
    odio: '#ff6c60',
    medo: '#bfafe8',
    ansiedade: '#81e0e9',
    culpa: '#b0c8fb',
    sanidade: '#f2e7b0',
    insanidade: '#e7dfd2',
    neutralidade: '#c6c9d0'
  };
  let S,
    settings = {
      device: 'pc',
      assist: false,
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    },
    paused = false,
    mode = 'menu',
    queue = [],
    afterDialogue = null,
    currentEco = null,
    timed = null,
    clockTask = null,
    loopLast = performance.now(),
    retry = null,
    watch = null,
    qte = null,
    chase = null,
    mazeIndex = 0,
    ninfaErrors = 0,
    ninfaConsecutive = 0,
    keysHeld = {},
    rescueCooldown = 0;
  const asset = part => ASSETS.find(p => p.includes(part));
  const list = part => ASSETS.filter(p => p.includes(part) && p.endsWith('.png') && !/PREVIA|PRANCHA|ATLAS/.test(p));
  const startingRooms = ['amor', 'calma', 'felicidade', 'determinacao'];
  function unlockedRooms() {
    return [...new Set([...startingRooms, ...(S.flags.rooms || []), ...ids.filter(id=>S.talks[first[id]] || D.points.some(p=>p.eco===id&&S.seen[p.id]))])];
  }
  function unlockRoom(id, reason) {
    if(unlockedRooms().includes(id)) return;
    S.flags.rooms = [...(S.flags.rooms || []), id];
    const message = 'Quarto desbloqueado: ' + D.names[id] + '. ' + reason;
    S.flags.roomNotice = (S.flags.roomNotice ? S.flags.roomNotice + '\n' : '') + message;
    note('Um novo caminho: ' + D.names[id], reason);
    const notice = $('#room-notice');
    showRoomNotice();
    // O aviso permanece até a próxima mudança de cena, dando tempo de ler no celular.
    save();
  }
  function showRoomNotice() {
    const notice=$('#room-notice');
    notice.hidden=!S?.flags.roomNotice;
    if(notice.hidden) return;
    notice.replaceChildren(document.createTextNode(S.flags.roomNotice));
    notice.append(btn('Entendi',()=>{S.flags.roomNotice='';notice.hidden=true;save();}));
  }
  function checkHungerDoor() {
    if(S.talks.P1 && dead('calma') && dead('determinacao')) unlockRoom('medo','A passagem indicada por Pax está aberta na praça.');
  }
  // Aq fica o modelo da partida. Mortes e itens têm estados separados.
  function fresh() {
    return {
      version: 4,
      phase: 'explore',
      room: null,
      view: 0,
      activity: 0,
      seen: {},
      talks: {},
      lastTalk: {},
      dead: [],
      pending: {},
      items: [],
      flags: {},
      log: [],
      choices: [],
      sanity: 70,
      checkpoint: 0,
      playSeconds: 0,
      complete: false
    };
  }
  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  }
  function valid(s) {
    const record=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
    return record(s) && (s.room === null || ids.includes(s.room)) && Number.isInteger(s.view) && s.view >= 0 && s.view <= 3 && s.version === 4 && Array.isArray(s.dead) && s.dead.every(x => ids.includes(x)) && Array.isArray(s.items) && s.items.every(x=>typeof x==='string'&&x.length<120) && Array.isArray(s.log) && s.log.every(n=>record(n)&&typeof n.title==='string'&&typeof n.text==='string') && [s.seen,s.talks,s.flags,s.pending,s.lastTalk].every(record) && Array.isArray(s.choices) && Number.isFinite(s.activity) && Number.isFinite(s.sanity) && Number.isFinite(s.playSeconds) && ['explore', 'watch', 'fearChase', 'fearRoom', 'ninfa', 'odio', 'comics', 'arena', 'candy', 'stairs', 'maze', 'insaneChase', 'interrogation', 'revelation', 'keys', 'gate', 'ending', 'complete'].includes(s.phase);
  }
  // Salva no navegador, sem mandar os dados da partida para fora.
  function save() {
    updateJournalBadge();
    try {
      localStorage.setItem('sentia-garden-v4', JSON.stringify(S));
      $('#save-status').textContent = 'Progresso salvo neste navegador.';
    } catch {
      $('#save-status').textContent = 'Não foi possível salvar. Exporte a partida na pausa.';
    }
  }
  function setPhase(phase, checkpoint = 0) {
    S.phase = phase;
    S.checkpoint = checkpoint;
    save();
    window.AudioSentia?.setScene(phase);
  }
  let journalToastTimer = null, lastJournalSound = -Infinity, modalReturnTarget = null;
  const entryId = (entry, index) => entry.id || 'entry-' + index;
  function journalReadIds() {
    if (!S) return [];
    // Anotações de saves antigos já existentes não viram centenas de notificações ao atualizar.
    if (!Array.isArray(S.flags.journalRead)) S.flags.journalRead = S.log.map(entryId);
    return S.flags.journalRead;
  }
  function updateJournalBadge() {
    const button = $('#journal-button');
    if (!button) return;
    const readIds = journalReadIds();
    const count = S ? S.log.filter((entry,index) => !readIds.includes(entryId(entry,index))).length : 0;
    let badge = $('#journal-count');
    if (!badge) {badge=document.createElement('span');badge.id='journal-count';badge.className='journal-count';button.append(badge);}
    badge.textContent=String(count);badge.hidden=count===0;
    button.classList.toggle('has-new',count>0);
    button.setAttribute('aria-label','Registro de descobertas'+(count?' · '+count+' nova(s) anotação(ões)':''));
    button.disabled=mode==='menu';
    $('#inventory-button').disabled=mode==='menu';
  }
  function note(title, text, meta = {}) {
    if (S.log.some(n => n.title === title && n.text === text)) return false;
    journalReadIds();
    const point=D.points.find(p=>p.name===title);
    const eco=meta.eco||point?.eco;
    const voice=window.ObservacaoSentia?.interpretation(title,text,{eco,deaths:S.dead.length,item:meta.item});
    S.log.push({id:'entry-'+S.log.length,title,text,...(voice?{voice}:{}),source:meta.source||(point?'Observação':'Acontecimento')});
    updateJournalBadge();
    let notice=$('#journal-notice');
    if(!notice){notice=document.createElement('button');notice.id='journal-notice';notice.type='button';notice.className='journal-notice';notice.setAttribute('aria-live','polite');notice.onclick=journal;document.querySelector('.game-footer').append(notice);}
    notice.textContent='Nova anotação no registro · J';notice.hidden=false;
    clearTimeout(journalToastTimer);journalToastTimer=setTimeout(()=>{notice.hidden=true;},6500);
    if(performance.now()-lastJournalSound>1200){window.AudioSentia?.spatialCue?.('notification');lastJournalSound=performance.now();}
    return true;
  }
  function significant() {
    S.activity++;
    save();
  }
  function dead(id) {
    return S.dead.includes(id);
  }
  function kill(id, cause) {
    if (dead(id)) return;
    S.dead.push(id);
    delete S.pending[id];
    note('Uma ausência: ' + D.names[id], cause);
    if(S.room===id&&mode==='explore')$('#stage').classList.add('room-empty');
    significant();
    checkHungerDoor();
  }
  function addItem(id) {
    if (S.items.includes(id)) return;
    S.items.push(id);
    const name=({espada:'Espada de fogo',escudo:'Escudo de fogo',luz:'Luz de Sugar',faca:'Faca vermelha',lanterna:'Lanterna','chave-sanidade':'Chave de Cassidy','chave-insanidade':'Chave de Mizzery'})[id]||id;
    note('Na bolsa: '+name,'O objeto passou para a sua bolsa e pode ser examinado sem ser equipado.',{item:id,source:'Inventário'});
    window.AudioSentia?.spatialCue?.('item');
    save();
  }
  // Procura a pose aprovada. Choro vulnerável não confirma morte.
  function baseSprite(id, pose = 'base') {
    if(id==='insanidade'&&S?.flags.maskRemoved&&pose!=='forma-chave') return asset('/insanidade/11-rosto-4-desprendido.png');
    let part = id === 'neutralidade' ? '/04-Neutralidade/neutralidade.png' : ['sanidade', 'insanidade'].includes(id) ? '/03-Generais/' + id + '/' : '/01-Ecos/' + id + '/01-Dialogo/';
    if (id === 'neutralidade') return asset(part);
    const matches = list(part);
    let normalized = {
      'abalada': 'abalado',
      'quebrado': 'quebrou',
      'vulnerável': 'quebrou',
      'único': 'base',
      'pensamento': 'base',
      'entregar-espada/escudo': 'entregar-espada-e-escudo'
    }[pose] || (pose.startsWith('quebrando') ? 'quebrando' : pose.split(',')[0]);
    if(id==='tristeza') normalized=({abalado:'abalada',acolhido:'acolhida'})[normalized]||normalized;
    if(['sanidade','insanidade'].includes(id)) normalized=({gostou:id==='sanidade'?'aprovar':'divertido','nao-gostou':'discordar',abalado:'escutar',acolhido:id==='sanidade'?'aprovar':'divertido'})[normalized]||normalized;
    return matches.find(p => p.endsWith('-' + normalized + '.png')) || matches.find(p => p.includes(normalized)) || matches.find(p => p.endsWith('00-base.png'));
  }
  function background(src) {
    $('#background').src = src || asset('/01-Entrada/03-praca-central.png');
  }
  function clearIdle() { document.querySelectorAll('.idle-layer').forEach(layer => layer.remove()); }
  function actor(id, pose = 'base', extra = '') {
    clearIdle();
    const el = $('#actor');
    if(id==='tristeza'&&S?.phase==='ninfa'&&!S.flags.ninfaDefeated) extra=(extra+' combat').trim();
    if(id==='insanidade'&&S?.phase==='revelation') extra=(extra+' closeup').trim();
    if (!id) {
      el.hidden = true;
      return;
    }
    el.src = id==='amor' && S?.phase==='candy' && pose==='quebrou' ? asset('amor-chorando-rosto-coberto.png') : baseSprite(id, pose);
    el.dataset.pose = pose;
    el.alt = D.names[id] || id;
    el.hidden = false;
    el.className = 'actor ' + extra + (['amor', 'calma'].includes(id) && !settings.reduced ? ' floating' : '');
    currentEco = id;
    document.documentElement.style.setProperty('--accent', palette[id] || '#d6c395');
    document.documentElement.style.setProperty('--dialogue-art', 'url("' + new URL(asset('/02-Caixas-Dialogo/PNG/' + id + '.png'), document.baseURI).href + '")');
    if (pose === 'base' && !extra && !settings.reduced) {
      const parts = list('/05-Idle-e-Camadas/'+id+'/').filter(p => /\/0[1-3]-/.test(p));
      if(parts.length && asset('/05-Idle-e-Camadas/'+id+'/00-base.png')) {
        el.src = asset('/05-Idle-e-Camadas/'+id+'/00-base.png');
        parts.forEach((src,index) => { const layer = document.createElement('img'); layer.src=src; layer.alt=''; const motion=/asa/.test(src)?'wing':/agua|gotas/.test(src)?'water':/nucleo|halo/.test(src)?'glow':'sway';layer.className='actor idle-layer '+motion+' '+(index?'right':'left'); $('#stage').append(layer); });
      }
    }
  }
  function actorTwo(id, pose = 'base') {
    const el = $('#actor-two');
    el.hidden = !id;
    if (id) {
      el.className = 'actor two';
      el.src = baseSprite(id, pose);
      el.alt = D.names[id];
      $('#actor').classList.add('paired');
    }
  }
  function resetScene() {
    writing = null;
    window.AudioSentia?.stopVoice?.();
    window.AudioSentia?.clearRoom?.();
    $('#dialogue').classList.remove('is-writing');
    clearIdle();
    Arena.stop();
    window.Perseguicao?.stop();
    mode = 'scene';
    timed = null;
    clockTask = null;
    watch = null;
    qte = null;
    chase = null;
    keysHeld = {};
    queue = [];
    afterDialogue = null;
    $('#actor').hidden = true;
    $('#actor-two').hidden = true;
    $('#effect').hidden = true;
    $('#hands').hidden = true;
    $('#hands').className = 'hands';
    $('#held-object')?.remove();
    $('#dialogue').hidden = true;
    $('#prompt').hidden = true;
    $('#action-panel').hidden = true;
    $('#mobile-controls').hidden = true;
    $('#fade').hidden = true;
    $('#world-controls').replaceChildren();
    $('#status').textContent = '';
    $('#action-panel').className = 'action-panel';
    $('#background').style.opacity = '1';
    $('#stage').classList.remove('light');
    $('#stage').classList.remove('exploring','room-empty','chasing','impact','cinematic-closeup','shared-scene');
    $('#prompt').className='prompt';
    $('#sanity-hud').hidden = true;
    showRoomNotice();
    updateGestureControl();
    updateJournalBadge();
  }
  function objective(text) {
    $('#objective').textContent = text;
  }
  function btn(text, fn, cls = '') {
    const b = document.createElement('button');
    b.textContent = text;
    b.className = cls;
    b.onclick = fn;
    decorateControl(b,text);
    return b;
  }
  function decorateControl(button,text) {
    const key=/bolsa/i.test(text)?'inventario':/registro/i.test(text)?'diario':/pausa/i.test(text)?'pausa':/atacar|lutar/i.test(text)?'atacar':/proteger|defender/i.test(text)?'defender':/^luz/i.test(text)?'luz':/equipar/i.test(text)?'equipar':/correr/i.test(text)?'correr':/esquerda/i.test(text)?'esquerda':/direita/i.test(text)?'direita':/abaixar|baixo/i.test(text)?'baixo':/frente|avançar/i.test(text)?'avancar':/examinar|observar/i.test(text)?'examinar':/interagir|pegar/i.test(text)?'interagir':/fechar/i.test(text)?'fechar':/voltar|continuar/i.test(text)?'voltar':null;
    if(!key)return;
    button.classList.add('sprite-control');
    for(const [state,suffix] of [['normal','normal'],['pressed','pressionado'],['disabled','desativado']]) {
      const src=asset('/04-Botoes-4x/'+key+'-'+suffix+'.png');
      if(src)button.style.setProperty('--control-'+state,'url("'+new URL(src,document.baseURI).href+'")');
    }
  }
  function panel(title, text) {
    const p = $('#action-panel');
    p.replaceChildren();
    p.hidden = false;
    const h = document.createElement('h1');
    h.textContent = title;
    p.append(h);
    if (text) {
      const t = document.createElement('p');
      t.textContent = text;
      p.append(t);
    }
    return p;
  }
  // A fila cuida das falas e escolhas, travando as setinhas durante a conversa.
  function say(eco, lines, done) {
    writing = null;
    window.AudioSentia?.stopVoice?.();
    mode = 'dialogue';
    updateGestureControl();
    currentEco = eco;
    queue = lines.map(l => typeof l === 'string' ? {
      text: l,
      who: eco ? D.names[eco] : 'Jardim'
    } : Array.isArray(l) ? {
      who: l[0],
      text: l[1]
    } : l);
    afterDialogue = done;
    $('#action-panel').hidden = true;
    $('#prompt').hidden = true;
    $('#world-controls').replaceChildren();
    $('#dialogue').hidden = false;
    $('#stage').classList.remove('exploring','chasing');
    window.Perseguicao?.stop();
    if (eco) actor(eco,dead(eco)?'morreu':'base');
    nextLine();
  }
  let writing = null;
  // Cada letra aparece junto do bipe. O primeiro clique só completa a frase.
  function revealSpeech(text) {
    const letters = Array.from(text || '');
    writing = letters.length ? {letters, index:0, elapsed:0} : null;
    $('#speech').textContent = '';
    $('#speech').setAttribute('aria-label', text || '');
    $('#speech').setAttribute('aria-live','off');
    $('#dialogue').classList.toggle('is-writing',!!writing);
    $('#advance').setAttribute('aria-label', 'Mostrar frase inteira');
  }
  function voiceLetter(letter) {
    window.AudioSentia?.voice?.(letter,$('#speaker').textContent);
  }
  function finishWriting() {
    if (!writing) return false;
    $('#speech').textContent=writing.letters.join('');
    writing=null;
    $('#dialogue').classList.remove('is-writing');
    $('#advance').setAttribute('aria-label','Continuar');
    window.AudioSentia?.stopVoice?.();
    return true;
  }
  function nextLine() {
    if (paused) return;
    if (finishWriting()) return;
    $('.dialogue-body').scrollTop=0;
    timed = null;
    const line = queue.shift();
      if (line?.requiresItem && !S.items.includes(line.requiresItem)) return nextLine();
    if (!line) {
      $('#dialogue').hidden = true;
      const fn = afterDialogue;
      afterDialogue = null;
      fn?.();
      return;
    }
    $('#choices').replaceChildren();
    $('#dialogue').classList.remove('is-writing');
    $('#advance').hidden = false;
    if (line.choices) {
      $('#advance').hidden = true;
      $('#speech').textContent = line.text || 'O que você quer dizer?';
      $('#speech').setAttribute('aria-label',line.text || 'O que você quer dizer?');
      $('#speech').setAttribute('aria-live','polite');
      $('#speaker').textContent = 'Você';
      $('#speaker').title = 'Sua resposta';
      for (const c of line.choices) $('#choices').append(btn(c.label, () => {
        if (paused) return;
        S.choices.push({
          scene: line.id || S.phase,
          eco: currentEco,
          label: c.label
        });
        if (c.effect) c.effect();
        if (c.reply) queue.unshift({
          who: c.who || (dead(currentEco)?'Jardim':D.names[currentEco] || 'Jardim'),
          text: c.reply,
          pose: c.pose
        });
        if (c.go) {
          $('#dialogue').hidden = true;
          queue = [];
          c.go();
        } else nextLine();
      }));
      if (line.seconds) timed = {
        left: line.seconds,
        total: line.seconds,
        done: () => {
          line.onTimeout?.();
          queue.unshift({
            who: D.names[currentEco],
            text: line.silence || '…'
          });
          nextLine();
        }
      };
      return;
    }
    const nomesAntigos = {"Felicidade":"Sunny","Orgulho":"Aurea","Determinação":"Friska","Medo":"Hunger","Culpa":"Lúmen","Ódio":"Beerus","Sanidade":"Cassidy","Insanidade":"Mizzery"};
    $('#speaker').textContent = nomesAntigos[line.who] || line.who || D.names[currentEco] || 'Jardim';
    $('#speaker').title=$('#speaker').textContent;
    revealSpeech(line.text);
    const ecoSpeaking=currentEco && (!line.who || (nomesAntigos[line.who]||line.who)===D.names[currentEco]);
    if (currentEco && (line.pose || ecoSpeaking) && !['Você','Protagonista'].includes(line.who)) {
      let pose = line.pose || 'base';
      if(pose==='base') {
        if(/não (foi|confunda|use|fala)|pare|perigo|mentiu|ferir|machuca/i.test(line.text)) pose='nao-gostou';
        else if(/não consigo|medo|esque|perdi|sozinh|não sei|difícil|demais/i.test(line.text)) pose='abalado';
        else if(/obrigad|pode ficar|comigo|ajud|gost|junto|companhia/i.test(line.text)) pose='gostou';
      }
      actor(currentEco,dead(currentEco)?'morreu':pose);
    }
    if (line.image) {
      $('#effect').src = line.image;
      $('#effect').hidden = false;
    } else $('#effect').hidden = true;
    if (line.effect) line.effect();
    if($('#stage').classList.contains('shared-scene')&&!$('#actor-two').hidden)$('#actor').classList.add('paired');
  }
  $('#advance').onclick = nextLine;
  $('#dialogue').addEventListener('click',e=>{
    if(e.target.closest('button,a,input,select,textarea')||paused||mode!=='dialogue')return;
    if(writing)finishWriting();else if(!$('#advance').hidden)nextLine();
  });
  function roomBg(id, view = 0) {
    return list('/02-Ecos/' + id + '/')[view];
  }
  function worldSprite(id, variant=0) {
    const poses=['00-base','01-recolhido','02-lateral','03-costas'];
    return asset('/02-No-Cenario-64/' + id + '/'+poses[variant%4]+'.png') || baseSprite(id);
  }
  function explorationHands(gesture = '00-repouso') {
    const hands=$('#hands');
    const equipped={espada:'/02-Equipamentos/espada/01-preparacao.png',escudo:'/02-Equipamentos/escudo/01-pronto-verso.png',faca:'/02-Equipamentos/faca/01-pronta.png',luz:'/02-Equipamentos/luz/01-segurar.png',lanterna:'/01-Gestos-Aprovados/12-carregar-lanterna.png','chave-sanidade':'/02-Equipamentos/chaves/01-sanidade.png','chave-insanidade':'/02-Equipamentos/chaves/02-insanidade.png'};
    const equippedSource=gesture==='00-repouso'&&S.items.includes(S.flags.equipped)?equipped[S.flags.equipped]:null;
    const positive=startingRooms.includes(S.room)||S.room==='orgulho';
    const emotional=gesture==='00-repouso'&&!equippedSource&&S.room&&(positive?S.sanity>85:S.sanity<35);
    const source=equippedSource?asset(equippedSource):emotional?asset('/03-Efeitos-dos-Ecos/'+S.room+'.png'):asset('/01-Gestos-Aprovados/'+gesture+'.png');
    if(hands.getAttribute('src')!==source)hands.src=source;
    hands.dataset.gesture=gesture;
    hands.hidden=false;
    hands.classList.add('exploration-hands');
  }
  function updateSanityHUD() {
    const hud=$('#sanity-hud');
    hud.hidden=!S || (!S.room && mode!=='explore');
    $('#sanity-meter').value=S?.sanity ?? 70;
    $('#sanity-value').textContent=Math.round(S?.sanity ?? 70);
    const negative=['tristeza','odio','medo','ansiedade','culpa'].includes(S?.room);
    $('#sanity-trend').textContent=S?.room ? (dead(S.room)?'Quarto vazio · sanidade estável':negative?'Este quarto drena sua sanidade':'Este quarto recupera sua sanidade') : 'Na praça, estável';
    hud.classList.toggle('draining',negative);
  }
  // As cenas importantes esperam a convivência inicial e as pistas necessárias.
  function ready() {
    return unlockedRooms().some(id=>!dead(id)&&S.talks[first[id]]&&storyAction(id));
  }
  function sevenClosed() {
    return ['felicidade', 'orgulho', 'determinacao', 'calma', 'ansiedade', 'culpa', 'medo'].every(dead);
  }
  function hint(id) {
    if (dead(id)) return 'O quarto permaneceu.';
    if (S.pending[id]) return 'Uma visita ficou em aberto.';
    if (id === 'medo' && (!dead('calma') || !dead('determinacao'))) return 'A porta está fechada.';
    if (!S.talks[first[id]]) return 'Há alguém para conhecer.';
    if (id === 'determinacao' && !S.flags.knifeKnown) return 'A moldura guarda uma história.';
    if (id === 'tristeza' && sevenClosed()) return 'Ninfa quer falar com você.';
    if (id === 'odio' && S.dead.length === 8) return 'A última passagem.';
    if (Object.keys(S.seen).filter(k => k.startsWith(id + '.')).length < 6) return 'Ainda há detalhes para observar.';
    return 'Voltar também é uma escolha.';
  }
  // A praça reúne os caminhos. O quarto do Medo não abre no primeiro contato.
  function hub() {
    resetScene();
    mode = 'explore';
    S.room = null;
    S.view = 0;
    setPhase('explore');
    checkHungerDoor();
    background();
    explorationHands();
    $('#location').textContent = 'Praça central';
    objective('Conheça os moradores. Volte aos lugares que mudaram.');
    const p = panel('O Jardim dos Ecos', 'Os caminhos levam a lugares diferentes. Cada morador tem seu próprio tempo.');
    const grid = document.createElement('div');
    grid.className = 'rooms';
    for (const id of ids) {
      if(!unlockedRooms().includes(id)) continue;
      const b = btn('', () => enterRoom(id), 'room-card' + (dead(id) ? ' dead' : ''));
      const img = document.createElement('img');
      img.src = worldSprite(id);
      img.alt = '';
      const name = document.createElement('span');
      name.textContent = D.names[id];
      const status = document.createElement('small');
      status.textContent = hint(id);
      b.append(img, name, status);
      if (id === 'medo' && (!dead('calma') || !dead('determinacao'))) b.disabled = true;
      grid.append(b);
    }
    p.append(grid);
    const small = document.createElement('p');
    small.className = 'hint';
    small.textContent = ready() ? 'Algumas conversas mudaram. Há detalhes novos nos lugares conhecidos.' : 'Observe os lugares e converse antes de insistir em assuntos delicados. Ninfa e Hermes podem ajudar você a conhecer o Jardim.';
    p.append(small);
  }
  function enterRoom(id) {
    if (!ids.includes(id)) return hub();
    if (!unlockedRooms().includes(id)) return hub();
    const was = S.room;
    S.room = id;
    S.view = 0;
    S.flags.visits=S.flags.visits||{};
    S.flags.visits[id]=(S.flags.visits[id]||0)+1;
    if (was !== id) {S.flags.lastRoom = id;window.AudioSentia?.spatialCue?.('door',{intensity:.45});}
    if (S.pending[id] != null && S.activity > S.pending[id]) return laterDeath(id);
    renderRoom();
  }
  // Pólen, gotas e brasas são detalhes do quarto; não recebem cliques nem mudam a história.
  function roomAtmosphere(scene, id) {
    const layer = document.createElement('div');
    const kind = ({tristeza:'rain',orgulho:'embers',odio:'embers',calma:'leaves',amor:'petals',ansiedade:'electric',medo:'mist'})[id] || 'dust';
    layer.className = 'room-atmosphere ' + kind + (dead(id) ? ' spent' : '');
    layer.setAttribute('aria-hidden','true');
    layer.style.setProperty('--room-color',palette[id] || '#c2d3b5');
    const light = document.createElement('i');light.className = 'ambient-light';layer.append(light);
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('i');particle.className = 'ambient-pixel';
      particle.style.left = (7 + (i * 31 + S.view * 13) % 86) + '%';
      particle.style.top = (12 + i * 19 % 67) + '%';
      particle.style.setProperty('--drift', (i % 2 ? 13 : -11) + 'px');
      particle.style.animationDelay = (-i * 2.7) + 's';
      particle.style.animationDuration = (14 + i % 4 * 5) + 's';
      layer.append(particle);
    }
    if (['tristeza','calma'].includes(id)) {
      for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('i');ripple.className = 'ambient-ripple';
        ripple.style.left = (18 + i * 30) + '%';ripple.style.top = (77 + i % 2 * 9) + '%';
        ripple.style.animationDelay = (-i * 3) + 's';layer.append(ripple);
      }
    }
    scene.append(layer);
  }
  function renderRoom() {
    resetScene();
    mode = 'explore';
    const id = S.room;
    if (!id) return hub();
    if (!S.talks[first[id]] && !dead(id)) S.view = 0;
    background(roomBg(id, S.view));
    $('#stage').classList.add('exploring');
    $('#stage').classList.toggle('room-empty',dead(id));
    window.AudioSentia?.setRoom?.(id,S.view,{dead:dead(id),reduced:settings.reduced});
    $('#location').textContent = D.names[id] + ' · ' + ['Frente', 'Direita', 'Atrás', 'Esquerda'][S.view];
    objective(hint(id));
    setPhase('explore');
    explorationHands();
    updateSanityHUD();
    const scene = document.createElement('div');
    scene.className = 'room-scene';
    $('#world-controls').append(scene);
    roomAtmosphere(scene, id);
    // O morador fica num único lugar. Virar a câmera não teletransporta o Eco.
    if (!dead(id) && S.view === 0) {
      const resident = btn('', () => talk(id), 'talk-button world-eco');
      resident.setAttribute('aria-label', 'Conversar com ' + D.names[id]);
      const image = document.createElement('img');
      image.src = worldSprite(id,Math.max(0,(S.flags.visits?.[id]||1)-1));
      image.alt = '';
      const label = document.createElement('span');
      label.textContent = 'Conversar com ' + D.names[id];
      resident.append(image, label);
      scene.append(resident);
    }
    const inspect = document.createElement('div');
    inspect.className = 'inspect-list';
    D.points.filter(p => p.eco === id && p.view === S.view && S.talks[first[id]]).forEach(p => {
      const b = btn('', () => inspectPoint(p), 'scene-hotspot' + (S.seen[p.id] ? ' visited' : ''));
      b.dataset.point = p.id;
      b.setAttribute('aria-label', (S.seen[p.id] ? 'Reler: ' : 'Observar: ') + p.name);
      const n = Number(p.id.split('.p')[1]) - 1;
      const [x, y] = roomPoints[id][n];
      b.style.left = x + '%';
      b.style.top = y + '%';
      const item = pointSprite(p.name);
      if (item) {
        const image = document.createElement('img');
        image.src = item;
        image.alt = '';
        b.append(image);
        if(p.id==='orgulho.p1') {
          image.className='pedestal-sword';
          const shield=document.createElement('img');shield.src=asset('/03-Objetos-Extras-64/escudo-fogo.png');shield.alt='';shield.className='pedestal-shield';b.append(shield);
        }
      }
      const marker = document.createElement('span');
      marker.className = 'hotspot-marker';
      marker.textContent = S.seen[p.id] ? '✓' : '✦';
      const label = document.createElement('span');
      label.className = 'hotspot-label';
      label.textContent = p.name;
      b.append(marker, label);
      inspect.append(b);
    });
    scene.append(inspect);
    if(id==='amor' && S.view===0 && !S.flags.gestureL) {
      const point=btn('',openQuietInteraction,'quiet-interaction');
      point.setAttribute('aria-label','Interagir');
      const scrap=document.createElement('img');scrap.src=asset('/03-Objetos-Extras-64/fragmento-papel.png');scrap.alt='';point.append(scrap);
      scene.append(point);
    }
    renderGuest(scene,id);
    alignRoomScene();
    const nav = document.createElement('div');
    nav.className = 'room-nav';
    nav.append(btn('← Olhar à esquerda', () => {
      window.AudioSentia?.spatialCue?.('turn',{pan:-.5,intensity:.4});
      S.view = (S.view + 3) % 4;
      renderRoom();
    }), btn('Voltar à praça', hub), btn('Olhar à direita →', () => {
      window.AudioSentia?.spatialCue?.('turn',{pan:.5,intensity:.4});
      S.view = (S.view + 1) % 4;
      renderRoom();
    }));
    $('#world-controls').append(nav);
    if(!S.talks[first[id]]) {
      nav.querySelectorAll('button').forEach((b,i)=>{if(i!==1){b.disabled=true;b.title='Converse com '+D.names[id]+' antes de explorar.';}});
      objective('Converse com '+D.names[id]+' antes de olhar o quarto.');
    } else if(id==='determinacao' && S.flags.knifeKnown && !dead(id)) objective('A faca continua na moldura. Você pode voltar a falar sobre ela.');
    else if(storyAction(id)) objective('Há uma nova conversa com '+D.names[id]+'.');
    updateGestureControl();
  }
  function updateGestureControl() {
    const control=$('#gesture-l-button');
    control.hidden=!S?.flags.gestureL;
    control.disabled=paused || mode!=='explore' || !S?.room || S.view!==0 || dead(S.room);
  }
  const visits = [
    {key:'acolhimento',hosts:['calma','felicidade'],people:['calma','felicidade'],requires:['P1','F1'],lines:[['Sunny','Eu achei que ia só deixar a fita e sair.'],['Pax','Você não precisa inventar uma entrega para sentar.'],['Você','Vocês fazem isso sempre?'],['Sunny','Ele deixa o lugar livre até quando eu não tenho assunto.'],['Pax','Ninfa também aparece. Cada um sabe que pode ir embora e voltar.'],{choices:[{label:'Ficar e escutar os dois',reply:'A conversa continua sem pedir que você justifique a visita.',pose:'acolhido'},{label:'Perguntar se Pax se sente responsável por todos',reply:'Receber alguém não me dá o controle do que essa pessoa escolhe.',pose:'abalado'}]},['Sunny','Era só isso que eu queria que você visse.']]},
    {key:'melodia',hosts:['tristeza','ansiedade'],people:['tristeza','ansiedade'],requires:['N1','H1'],lines:[['Ninfa','Trouxe a caixa para você ouvir. Não para calcular.'],['Hermes','Eu calculei o intervalo em que ela parava. Depois parei de contar.'],['Você','Você guardou uma coisa sem utilidade?'],['Hermes','Sem uma utilidade que eu pudesse nomear. São afirmações diferentes.'],['Ninfa','As coisas que contamos aqui não precisam virar uma maneira de nos medir.'],{choices:[{label:'Pedir para ouvir a música',reply:'Por um momento, os dois deixam a conversa parar nas notas.',pose:'acolhido'},{label:'Perguntar o que Hermes não consegue prever',reply:'Uma intenção omitida continua fora da conta. Inclusive a sua.',pose:'nao-gostou'}]},['Ninfa','Você pode voltar e perguntar. Só não finja que não sabe de onde veio o que ouviu.']]},
    {key:'protecao',hosts:['amor','orgulho'],people:['amor','orgulho'],requires:['A1','O1'],lines:[['Sugar','O apoio está machucando o braço dele.'],['Aurea','Então ajustamos o apoio. Uma oferta não termina quando sai da mão.'],['Você','Vocês ainda estão conferindo isso?'],['Sugar','Sim. Cuidado também é voltar para perguntar.'],['Aurea','Escute o que ela está dizendo antes de chamar isso de fraqueza.'],{choices:[{label:'Deixar que ajustem a proteção',reply:'A alça fica firme sem apertar. Ninguém pede uma promessa em troca.',pose:'gostou'},{label:'Dizer que não precisa de ninguém',reply:'Você pode escolher seguir. Só não reescreva quem esteve aqui para tornar isso mais fácil.',pose:'nao-gostou'}]},['Sugar','Se o caminho mudar, eu tento encontrar você.']]},
    {key:'bilhete',hosts:['medo'],people:['medo','culpa'],requires:['M1'],lines:[['Lúmen','Eu só vim ver se você tinha recebido a mensagem.'],['Hunger','Recebi. Você não precisava atravessar tudo sozinho.'],['Você','Vocês já estavam se procurando antes de eu chegar?'],['Lúmen','As visitas não começaram com você. Eu queria que ele soubesse que podia voltar.'],['Hunger','Não vá atrás de outra pessoa para usar uma resposta contra ela.'],{choices:[{label:'Perguntar pela passagem adiante',reply:'O observatório fica depois deste quarto. Eu continuo de olho nesse caminho.',pose:'nao-gostou'},{label:'Ouvir a preocupação de Lúmen',reply:'Eu queria conseguir perguntar uma coisa sem ensaiar todas as respostas antes.',pose:'abalado'}]},['Lúmen','Eu vou deixar vocês conversarem. Depois eu passo outra vez.']]}
  ];
  function guestFor(host) {
    return visits.find(v=>v.hosts.includes(host)&&!S.flags['visit-'+v.key]&&v.requires.every(x=>S.talks[x])&&v.people.every(x=>!dead(x)));
  }
  function renderGuest(scene,host) {
    const visit=guestFor(host);if(!visit||S.view!==1)return;
    const guest=visit.people.find(x=>x!==host);
    const target=btn('',()=>sharedVisit(visit),'guest-eco');target.setAttribute('aria-label','Conversar com '+D.names[guest]+' em visita');
    const image=document.createElement('img');image.src=worldSprite(guest,2);image.alt='';const label=document.createElement('span');label.textContent=D.names[guest]+' está em visita';target.append(image,label);scene.append(target);
  }
  function sharedVisit(visit,done=renderRoom) {
    const host=S.room,guest=visit.people.find(x=>x!==host);resetScene();background(roomBg(host,1));$('#stage').classList.add('shared-scene');
    const lines=structuredClone(visit.lines);lines.forEach(l=>l.choices?.forEach(c=>c.who='Jardim'));lines[0]=Array.isArray(lines[0])?{who:lines[0][0],text:lines[0][1],effect:()=>actorTwo(guest)}:lines[0];
    say(host,lines,()=>{S.flags['visit-'+visit.key]=true;if(guest==='culpa'&&!S.talks.C1)finishConversation('C1','culpa');note('Encontro: '+visit.people.map(x=>D.names[x]).join(' e '),'Você ouviu os dois juntos. Novos assuntos podem ser retomados em seus quartos.');significant();done();});
  }
  function openQuietInteraction() {
    if(mode!=='explore' || S.room!=='amor' || S.view!==0) return;
    const form=document.createElement('form');
    const input=document.createElement('input');
    input.type='text';input.maxLength=120;input.autocomplete='off';input.setAttribute('aria-label','Texto');
    const status=document.createElement('p');status.setAttribute('role','status');status.textContent='…';
    const submit=btn('Confirmar',()=>{});submit.type='submit';
    const close=btn('Voltar',closeModal);close.type='button';
    form.append(input,submit,close,status);
    form.onsubmit=e=>{
      e.preventDefault();
      if(!GESTO.accepts(input.value)){status.textContent='…';input.select();return;}
      S.flags.gestureL=true;save();closeModal();renderRoom();
    };
    modal(form);input.focus();
  }
  function makeL() {
    if(!S.flags.gestureL || paused || mode!=='explore' || !S.room || S.view!==0 || dead(S.room)) return;
    const id=S.room;
    explorationHands('07-fazendo-L');
    $('#hands').classList.add('gesture-hands');
    const reply=id==='odio'?'AQUI É 22 PORRA.':id==='amor'?'Você estava guardando esse gesto para agora?':id==='felicidade'?'Tá. Essa eu não estava esperando.':'…';
    say(id,[{text:reply,pose:id==='odio'?'nao-gostou':id==='felicidade'?'gostou':'base'}],renderRoom);
    // A fala termina sozinha; o gesto não altera mortes, itens ou confrontos.
    defer(id==='odio'?1.8:2.4,renderRoom);
  }
  $('#gesture-l-button').onclick=makeL;
  // Coordenadas em porcentagem da imagem, conferidas nas quatro vistas de cada quarto.
  const roomPoints = {
    felicidade: [[27,42],[32,64],[71,69],[29,64],[63,68],[73,50]],
    amor: [[27,65],[37,64],[68,46],[27,76],[70,73],[69,66]],
    tristeza: [[72,52],[30,65],[74,64],[22,74],[66,62],[75,67]],
    orgulho: [[27,65],[31,55],[70,65],[36,55],[70,69],[77,52]],
    determinacao: [[68,50],[28,69],[69,62],[30,70],[73,64],[30,52]],
    calma: [[25,70],[27,35],[66,68],[44,64],[75,73],[65,46]],
    ansiedade: [[28,68],[66,41],[28,70],[29,60],[69,70],[68,48]],
    culpa: [[27,69],[30,68],[69,69],[28,67],[68,65],[53,55]],
    medo: [[29,63],[28,45],[72,65],[28,51],[72,69],[46,52]],
    odio: [[27,67],[30,53],[70,68],[27,74],[69,63],[48,51]]
  };
  function pointSprite(name) {
    const match = /pedestal de equipamentos/i.test(name) ? 'espada-fogo' : /faca|moldura/i.test(name) ? 'faca-vermelha' : /bilhete|carta|anotações|lista|registro|cálculo/i.test(name) ? 'bilhete' : /diário|desenhos|projetos/i.test(name) ? 'caderno' : /semente/i.test(name) ? 'semente' : /flores/i.test(name) ? 'flor' : /luz guardada/i.test(name) ? 'luz-amor' : /escudo/i.test(name) ? 'escudo-fogo' : null;
    return match ? asset('/03-Objetos-Extras-64/' + match + '.png') : null;
  }
  // Mantém os objetos colados à imagem mesmo quando a tela muda de formato.
  function alignRoomScene() {
    const scene = document.querySelector('.room-scene');
    if (!scene) return;
    const image = $('#background'), stage = $('#stage');
    if (!image.naturalWidth) return;
    const scale = Math.min(stage.clientWidth / image.naturalWidth, stage.clientHeight / image.naturalHeight);
    const width = image.naturalWidth * scale, height = image.naturalHeight * scale;
    Object.assign(scene.style, {width: width + 'px', height: height + 'px', left: (stage.clientWidth-width)/2 + 'px', top: (stage.clientHeight-height)/2 + 'px'});
  }
  $('#background').addEventListener('load', alignRoomScene);
  new ResizeObserver(alignRoomScene).observe($('#stage'));
  // As pistas podem ser relidas. Depois da morte, aparece a observação de ausência.
  function inspectPoint(p, replay = false) {
    if(!S.talks[first[p.eco]] && !dead(p.eco)) return talk(p.eco);
    if(S.seen[p.id]&&!replay&&(!dead(p.eco)||S.flags['absence-'+p.id])) return say(null,[{who:p.name,text:'Esta descoberta já está no registro.',choices:[
      {label:'Reler a descoberta',go:()=>inspectPoint(p,true)},
      ...(!dead(p.eco)?[{label:'Conversar com '+D.names[p.eco],go:()=>talk(p.eco)}]:[]),
      {label:'Voltar ao quarto',go:renderRoom}
    ]}],renderRoom);
    const visit=guestFor(p.eco);if(visit&&S.view===1&&!S.flags['visit-'+visit.key])return sharedVisit(visit,()=>{renderRoom();inspectPoint(p);});
    explorationHands(/bilhete|carta|diário|anotações|desenhos/i.test(p.name)?'04-segurar-papel':'01-alcancar');
    const wasSeen = S.seen[p.id];
    S.seen[p.id] = true;
    if(dead(p.eco)&&!S.flags['absence-'+p.id]){
      S.flags['absence-'+p.id]=true;
      note(p.name+' · depois da ausência',p.after);save();
    }
    if (!wasSeen) {
      window.AudioSentia?.sfx?.('discovery');
      note(p.name, p.description);
      significant();
    } else if (S.flags.lastInvestigation !== p.id) {
      S.activity++;
      S.flags.lastInvestigation = p.id;
      save();
    }
    const entries = [...investigationAction(p), {
      who: p.name,
      text: dead(p.eco) ? p.after : p.description
    }];
    if (!dead(p.eco) && p.voice) entries.push({
      who: D.names[p.eco],
      text: p.voice,
      effect:()=>{$('#held-object')?.remove();$('#hands').classList.remove('inspecting-hands');explorationHands();}
    });
    if (p.id.endsWith('.p6') && (!wasSeen||replay) && window.MEMORIAS?.[p.eco]) {
      const memory = MEMORIAS[p.eco];
      entries.push(...memory.paragraphs.map(text => ({
        who: memory.title,
        text
      })));
      note(memory.title, memory.paragraphs.join('\n\n'));
      if (!dead(p.eco)) entries.push(...memory.replies.map(text => ({
        who: D.names[p.eco],
        text
      })));
    }
    if (p.eco === 'determinacao' && /faca|moldura/i.test(p.name) && !S.flags.knifeKnown && !dead('determinacao')) return knifeIntroduction();
    if(p.id==='determinacao.p1' && !dead(p.eco)) entries.push({text:'A faca ainda está presa à moldura.',choices:[{label:'Tentar tomar a faca',go:determination},{label:'Deixar onde está',go:renderRoom}]});
    if(p.id==='orgulho.p1' && !dead(p.eco) && (!S.items.includes('espada')||!S.items.includes('escudo'))) entries.push({choices:[{label:'Pedir a espada e o escudo',go:aureaGifts},{label:'Continuar olhando',go:renderRoom}]});
    if(p.id==='medo.p1'&&!S.items.includes('lanterna')) entries.push({who:'Jardim',text:'Uma lanterna foi deixada junto à entrada.',choices:[{label:'Pegar a lanterna',go:()=>say(null,[{who:'Jardim',text:'Você recolhe a lanterna e testa o apoio na luva.',effect:()=>{addItem('lanterna');explorationHands('12-carregar-lanterna');}}],renderRoom)},{label:'Deixar a lanterna',go:renderRoom}]});
    say(dead(p.eco) ? null : p.eco, entries, renderRoom);
  }
  function holdObject(sprite,gesture) {
    window.AudioSentia?.spatialCue?.('inspect',{intensity:.4});
    explorationHands(gesture);
    $('#hands').classList.add('inspecting-hands');
    $('#actor').hidden=true;clearIdle();
    $('#held-object')?.remove();
    if(!sprite) return;
    const item=document.createElement('img');item.id='held-object';item.className='held-object';item.src=sprite;item.alt='';$('#stage').append(item);
  }
  function investigationAction(p) {
    const small=/bilhete|carta|anotações|lista|registro|desenhos|diário|semente|flores|presente|lembrança|caixa/i.test(p.name);
    if(!small) return [{who:'Jardim',text:'Você se aproxima para examinar '+p.name.toLocaleLowerCase('pt-BR')+'.',effect:()=>holdObject(null,'01-alcancar')}];
    const paper=/bilhete|carta|anotações|lista|registro|desenhos|diário/i.test(p.name);
    const sprite=pointSprite(p.name);
    return [
      {who:'Jardim',text:'Você estende a mão até '+p.name.toLocaleLowerCase('pt-BR')+'.',effect:()=>holdObject(null,'01-alcancar')},
      {who:'Jardim',text:'Você pega o objeto com cuidado e o traz para perto dos olhos.',effect:()=>{
        holdObject(paper?null:sprite,'04-segurar-papel');
        if(paper && /diário|anotações/.test(p.name)) $('#hands').src=asset('/02-Equipamentos/investigacao/01-caderno-aberto.png');
        else if(!paper) $('#hands').src=asset('/02-Equipamentos/investigacao/02-recolher.png');
        if(/flores/i.test(p.name)){explorationHands('11-segurar-flor');$('#held-object')?.remove();}
        if(/semente/i.test(p.name)){explorationHands('06-oferecer-semente');$('#held-object')?.remove();}
      }}
    ];
  }
  function finishConversation(id, eco) {
    S.talks[id] = true;
    significant();
    S.lastTalk[eco] = S.activity;
    save();
    const links={F1:['tristeza','Sunny indicou o caminho das flores azuis, onde Ninfa guarda suas lembranças.'],P1:['ansiedade','Pax indicou o caminho dos fios e das luzes azuis para encontrar Hermes.'],D1:['orgulho','Friska apontou os arcos dourados. Aurea guarda os equipamentos naquele lugar.']};
    if(links[id]) unlockRoom(...links[id]);
    if(id==='A1') {unlockRoom('culpa','Sugar indicou o caminho coberto de estrelas para encontrar Lúmen.');unlockRoom('odio','Sugar indicou os arcos vermelhos, no caminho de Beerus.');}
    checkHungerDoor();
  }
  function conversation(id, done = renderRoom) {
    const c = D.conversations[id];
    if (!c) return done();
    const script = structuredClone(c.script);
    script.forEach(line => {
      if (id === 'O1' && (line.pose === 'entregar-espada/escudo' || line.text === 'Ela quer acreditar que ofereceu proteção.')) line.requiresItem = 'espada';
      if (id === 'A1' && line.pose === 'entregar-luz') line.requiresItem = 'luz';
    });
    if(id==='O1') {
      const gift=script.findIndex(l=>l.pose==='entregar-espada/escudo');
      if(gift>=0) script.splice(gift,1,{text:'Pegue a espada pelo cabo. Não confunda força com invulnerabilidade.',pose:'entregar-espada-fogo',requiresItem:'espada'},{text:'O escudo fica apoiado no seu braço, pelo lado de dentro.',pose:'entregar-escudo-fogo',requiresItem:'escudo'});
      script.push({who:D.names.orgulho,text:'Você recebe as duas peças. Ela espera até você ajustar o apoio do braço.',pose:'entregar-espada-e-escudo',requiresItem:'escudo',effect:()=>{explorationHands();$('#hands').src=asset('/02-Equipamentos/escudo/04-espada-verso.png');}});
    }
    if(id==='N1') {script[0].pose='esconder-nas-nuvens';script.push({text:'Pode chegar mais perto. Eu deixei um espaço.',pose:'estender-a-mao'});}
    if(id==='N3') script.push({text:'Eu não queria ter que desconfiar de quem vinha ficar comigo.',pose:'choro-intenso'});
    if(id==='N4') script[0].pose='choro-intenso';
    script.forEach(line=>{
      const hands={'entregar-espada-fogo':'/02-Equipamentos/espada/01-preparacao.png','entregar-escudo-fogo':'/02-Equipamentos/escudo/01-pronto-verso.png','entregar-luz':'/02-Equipamentos/luz/02-oferecer.png'}[line.pose];
      if(hands) line.effect=()=>{explorationHands();$('#hands').src=asset(hands);};
    });
    const directions={F1:'Ninfa mora no caminho das flores azuis. Ela não recebe muitas visitas, então avise que chegou.',P1:'Procure Hermes pelo caminho dos fios e das luzes azuis. Ele pode ensinar a correr. Hunger também vem aqui; a passagem dele permanece fechada por enquanto.',D1:'Se quer equipamentos, procure Aurea nos arcos dourados. Não toque nas minhas coisas sem perguntar.',A1:'Lúmen está no caminho coberto de estrelas. Beerus fica depois dos arcos vermelhos. Eu passo pelos dois quando consigo.'};
    if(directions[id]) script.push({text:directions[id],pose:'gostou'});
    // A confidência precisa aparecer na conversa antes de virar consequência depois.
    if (id === 'N2') script.push({who: 'Ninfa', text: 'Pax não gosta de perceber tarde que alguém ficou desconfortável. Se precisar ir, diga. Não suma para testar isso.', pose: 'base'});
    script.forEach(l => {
      if (l.choices) {
        l.id = id;
        l.choices.forEach(ch => {
          if (id === 'O1' && ch.pose !== 'nao-gostou') ch.effect = () => {
            addItem('espada');
            addItem('escudo');
          };
          if (id === 'A1' && ch.pose !== 'abalado') ch.effect = () => addItem('luz');
        });
      }
    });
    say(c.eco, script, () => {
      finishConversation(id, c.eco);
      if (id === 'H1') return runTutorial(done);
      if (id === 'N2') {
        S.flags.confidencePax = true;
        note('Uma confidência de Ninfa', 'Pax não gosta de perceber tarde que alguém ficou desconfortável. Ninfa pediu que eu não sumisse para testá-lo.');
      }
      done();
    });
  }
  // Cada visita abre assuntos disponíveis. Não existe mais bloqueio por "já conversou".
  function storyAction(id) {
    const n = D.points.filter(p => p.eco === id && S.seen[p.id]).length;
    if (id === 'determinacao') {
      if (!S.flags.knifeKnown) return {label:'Perguntar sobre a faca emoldurada', go:knifeIntroduction};
      if (n >= 4) return {label:'Tentar tomar a faca', go:determination};
      return null;
    }
    if (id === 'odio' && S.dead.length > 0 && S.dead.length < 8 && !S.flags.odioWarning) return {label:'Ouvir o que Beerus percebeu',go:()=>conversation('ODG1',()=>{S.flags.odioWarning=true;save();talkMenu(id);})};
    const sec = second[id];
    const clue = id === 'felicidade' ? S.seen['felicidade.p6'] : n >= 2;
    if (sec && !S.talks[sec] && clue && (!['H2','O2','C2'].includes(sec) || S.dead.length > 0)) return {label:'Retomar nossa conversa',go:()=>conversation(sec,()=>talkMenu(id))};
    if (id === 'amor') {
      if (S.talks.A2 && !S.talks.A3 && S.dead.length) return {label:'Falar sobre quem não voltou',go:()=>conversation('A3',()=>talkMenu(id))};
      if (S.talks.A3 && !S.talks.A4 && sevenClosed()) return {label:'Perguntar sobre a passagem de Beerus',go:()=>conversation('A4',()=>talkMenu(id))};
    }
    if (id === 'tristeza') {
      if (S.talks.N2 && !S.talks.N3 && S.dead.length) return {label:'Ouvir a preocupação de Ninfa',go:()=>conversation('N3',()=>talkMenu(id))};
      if (S.talks.N3 && sevenClosed()) return {label:'Responder à acusação de Ninfa',go:()=>conversation('N4',()=>{setPhase('ninfa');ninfaStart(0,true);})};
    }
    if (id==='medo'&&S.talks.M2&&!S.flags['visit-bilhete']) {const visit=guestFor(id);if(visit)return {label:'Ouvir Lúmen no corredor',go:()=>sharedVisit(visit)};}
    if (id === 'medo' && S.talks.M2) return {label:'Seguir Hunger até o observatório',go:watchIntro};
    if (id === 'odio' && S.dead.length === 8 && S.talks.A4) return {label:'Atravessar a passagem de Beerus',go:odioIntro};
    if (minor[id] && S.talks[sec] && n >= 4) return {label:S.flags[id+'Confront']?'Retomar a conversa que ficou ferida':'Falar sobre o que aconteceu entre nós',go:()=>S.flags[id+'Confront']?minorEnd(id):minorConfront(id)};
    return null;
  }
  function availableTopics(id) {
    return (window.CONVIVENCIA || []).filter(t=>t.eco===id && !dead(id) && (!t.clues||t.clues.some(x=>S.seen[x])) && (!t.allClues||t.allClues.every(x=>S.seen[x])) && (!t.alive||t.alive.every(x=>!dead(x))) && (!t.dead||t.dead.every(x=>dead(x))) && (!t.talks||t.talks.every(x=>S.talks[x])) && (!t.items||t.items.every(x=>S.items.includes(x))) && (!t.flags||t.flags.every(x=>S.flags[x])));
  }
  function talk(id) {
    if (dead(id)) return renderRoom();
    if (!S.talks[first[id]]) {
      if(id==='odio' && !S.dead.length) return say('odio',[{text:'Se você veio visitar, pergunte antes de entrar.',pose:'base'},['Você','Sugar falou do seu caminho.'],{text:'Então não bloqueie a passagem dela. E olhe para quem mora aqui antes de atravessar.',pose:'nao-gostou'}],()=>{finishConversation(first[id],id);renderRoom();});
      return conversation(first[id]);
    }
    talkMenu(id);
  }
  function talkMenu(id) {
    if(dead(id)) return renderRoom();
    const options = [], main=storyAction(id);
    if(main) options.push({label:main.label,go:main.go});
    const topics=availableTopics(id);
    const visitor=guestFor(id);if(visitor)options.push({label:'Conversar com '+D.names[visitor.people.find(x=>x!==id)]+' em visita',go:()=>sharedVisit(visitor)});
    const topicMenu=(selected,revisit)=>say(id,[{text:revisit?'Qual conversa você quer relembrar?':'Qual descoberta você quer comentar?',choices:[
      ...selected.map(t=>({label:t.label,go:()=>say(id,t.lines,()=>{
        if(!S.flags['topic-'+t.id]){
          S.flags['topic-'+t.id]=true;
          const remembered=t.lines.map(line=>Array.isArray(line)?{who:line[0],text:line[1]}:line).filter(line=>line.text&&line.who!=='Você').slice(-2).map(line=>(line.who||D.names[id])+': '+line.text).join('\n');
          note('Conversa com '+D.names[id]+' · '+t.label,remembered||t.label,{eco:id,source:'Conversa'});significant();
        }
        talkMenu(id);
      })})),{label:'Voltar aos assuntos',go:()=>talkMenu(id)}
    ]}],renderRoom);
    const unread=topics.filter(t=>!S.flags['topic-'+t.id]),revisited=topics.filter(t=>S.flags['topic-'+t.id]);
    if(unread.length)options.push({label:'Falar de novas descobertas ('+unread.length+')',go:()=>topicMenu(unread,false)});
    if(revisited.length)options.push({label:'Relembrar conversas anteriores ('+revisited.length+')',go:()=>topicMenu(revisited,true)});
    if(id==='orgulho' && (!S.items.includes('espada')||!S.items.includes('escudo'))) options.push({label:'Pedir a espada e o escudo oferecidos',go:aureaGifts});
    if(id==='amor' && !S.items.includes('luz')) options.push({label:'Aceitar a luz que você ofereceu',go:()=>say('amor',[{text:'Pode aceitar agora. Não é uma dívida.',pose:'segurar-luz'},{text:'Segure com cuidado.',pose:'entregar-luz',effect:()=>addItem('luz')}],()=>talkMenu(id))});
    options.push({label:'Ficar e conversar um pouco',go:()=>say(id,smallTalk[id].map((text,i)=>({text,pose:i===0?'gostou':i===1?'abalado':'acolhido'})),()=>{significant();talkMenu(id);})});
    options.push({label:'Voltar a olhar o quarto',go:renderRoom});
    say(id,[{text:'Você pode retomar uma conversa ou perguntar sobre o que descobriu.',choices:options}],renderRoom);
  }
  const smallTalk = {
    felicidade:['Você pode voltar sem trazer uma pergunta difícil.','Eu ainda fico achando que preciso inventar alguma coisa antes de você chegar.','Mas você está aqui agora. A gente pode começar por isso.'],
    amor:['Você não precisa explicar cada pausa.','Às vezes eu também fico sem saber como continuar uma conversa.','A gente pode ficar um pouco.'],
    tristeza:['Hoje eu consegui lembrar o fim daquela música.','Fiquei com medo de esquecer de novo se tentasse explicar.','Se quiser, depois eu tento tocar para você.'],
    orgulho:['Reconhecer um limite também exige firmeza.','Eu não acerto tudo só porque tento parecer segura.','Você pode perguntar de novo sem transformar isso numa disputa.'],
    determinacao:['A peça ainda não encaixou. Eu tentei pelo outro lado.','Não precisa dizer que vai dar certo. Você não sabe.','Pode só ficar aqui enquanto eu tento.'],
    calma:['A outra xícara continua livre.','Às vezes o silêncio parece uma pergunta. Não precisa responder.','Você pode ficar.'],
    ansiedade:['O trajeto de volta é o mesmo. O tempo da visita mudou.','Não estou pedindo uma justificativa. Estou distinguindo as coisas.','Ainda posso mostrar o caminho quando você quiser sair.'],
    culpa:['Consegui deixar o presente onde estava.','Depois voltei para ver se tinha ficado torto. Eu sei.','Mas não tirei. Hoje isso já foi alguma coisa.'],
    medo:['Eu sei que você está aí.','Não se aproxime pelas costas. Você pode falar desse lugar.','Estou ouvindo.'],
    odio:['Se veio perguntar, espere a resposta.','Nem tudo que fica aqui precisa ser retirado ou consertado.','Sugar entende isso. Eu queria que você também entendesse.']
  };
  function aureaGifts() {
    say('orgulho',[{text:'A espada fica neste pedestal. Pegue pelo cabo.',pose:'entregar-espada-fogo',effect:()=>addItem('espada')},{text:'E este é o escudo. O apoio fica virado para o seu braço.',pose:'entregar-escudo-fogo',effect:()=>addItem('escudo')},{text:'Proteção não decide por você. Eu espero que se lembre disso.',pose:'entregar-espada-e-escudo'}],()=>talkMenu('orgulho'));
  }
  function knifeIntroduction() {
    say('determinacao', [{who:'Jardim',text:'Você aproxima a mão da moldura. Friska acompanha o gesto antes de você tocar na faca.',effect:()=>explorationHands('01-alcancar')}, ['Você', 'O que é aquela faca?'], ['Determinação', 'Ah, aquilo? Usei muito há um tempo atrás.'], ['Você', 'Posso pegar emprestada?'], {
      who: 'Determinação',
      text: 'Não.',
      pose: 'nao-gostou'
    }, ['Você', 'Nem por um instante?'], ['Determinação', 'Independentemente de quem fosse, só conseguiria aquela faca se me matasse primeiro.']], () => {
      S.flags.knifeKnown = true;
      note('A faca emoldurada', 'Determinação recusou emprestar a faca. Ela disse que só a conseguiriam se a matassem primeiro.');
      significant();
      S.lastTalk.determinacao = S.activity;
      renderRoom();
    });
  }
  function runTutorial(done) {
    resetScene();
    background(roomBg('ansiedade'));
    actor('ansiedade');
    const p = panel('Um caminho mais rápido', 'Nos quartos você usa setinhas. Nas perseguições, pressione Correr no celular ou Shift no PC. Experimente agora, sem risco.');
    p.append(btn('Correr · Shift', () => {
      S.flags.running = true;
      save();
      say('ansiedade', ['Preparação para um evento não é desejo de que ele aconteça.'], done);
    }));
    mode = 'runTutorial';
    retry = () => {
      S.flags.running = true;
      save();
      say('ansiedade', ['Preparação para um evento não é desejo de que ele aconteça.'], done);
    };
  }
  // A falsa batalha termina antes do turno, tanto em Agir quanto em Lutar.
  function determination() {
    if(!S.talks.D1) return talk('determinacao');
    if(!S.flags.knifeKnown) return knifeIntroduction();
    if(D.points.filter(p=>p.eco==='determinacao'&&S.seen[p.id]).length<4) return say('determinacao',[{text:'Você mal olhou o que eu estou fazendo. Já quer tirar a única coisa que eu disse para não tocar?',pose:'nao-gostou'},['Jardim','Há outras peças e anotações neste quarto.']],renderRoom);
    resetScene();
    background(roomBg('determinacao'));
    say('determinacao', [['Jardim', 'Sua mão vai até a moldura. Ela se coloca entre você e a faca.'], ['Determinação', 'Eu já respondi.'], ['Você', 'Eu não vou demorar.'], ['Determinação', 'Não é o tempo.']], () => {
      const p = panel('FRISKA', '♥ Você avançou até a moldura. Friska bloqueia a passagem.');
      p.classList.add('false-battle');
      const life=document.createElement('p');life.textContent='PROTAGONISTA   LV 1   HP 20 / 20';life.className='false-battle-status';p.append(life);
      mode='determinationBattle';
      p.append(btn('AGIR', determinationCut), btn('LUTAR', determinationCut));
    });
  }
  function determinationCut() {
    resetScene();
    background(roomBg('determinacao'));
    say('determinacao', [{
      who:'Jardim',text:'Um corte atravessa a visão antes do primeiro turno.',image:asset('/cortes/faca/02-corte.png'),pose:'morreu',
      effect:()=>{ $('#hands').src=asset('/02-Equipamentos/faca/03-atacar.png');$('#hands').hidden=false;kill('determinacao','O protagonista tomou a faca e a esfaqueou antes do primeiro turno.');addItem('faca'); }
    }, {
      who: 'Jardim',
      text: 'A moldura está vazia. Friska já não se move nem responde. A escolha veio depois da ação.',
      pose: 'morreu'
    }, {
      choices: [{
        label: 'POUPAR',
        reply: 'Você agiu sem pensar.'
      }, {
        label: 'MATAR',
        reply: 'Como assim?'
      }]
    }], () => {
      note('A faca agora está comigo', 'Não foi um presente. Os outros conheciam a recusa dela.');
      renderRoom();
    });
  }
  const minor = {
    felicidade: {
      before: ['Eu ia te mostrar uma coisa. Não ficou pronta.', 'Eu estava tentando falar isso antes de você olhar.'],
      question: 'Quando não consegue fazer ninguém feliz, quem é você?',
      reply: 'Você podia só não ter gostado.',
      broken: 'Pax nunca pediu que eu fizesse nada.',
      last: 'Eu queria que você tivesse vindo só para ficar.',
      after: 'O mural continua colorido. A brincadeira ficou sem resposta.'
    },
    calma: {
      before: ['Você saiu daqui e foi falar com ela.', 'Eu disse que você podia conversar. Não disse o que devia fazer com o que ouviu.'],
      question: 'De que serve acolher quem vai machucar outro?',
      reply: 'Você estava aqui pedindo um lugar.',
      broken: 'A porta estar aberta não foi o que escolheu a sua mão.',
      last: 'Eu teria deixado você entrar mesmo assim.',
      after: 'A segunda xícara continua intocada. O refúgio ficou sem Pax.'
    },
    ansiedade: {
      before: ['As duas respostas não descrevem o mesmo objetivo.', 'Quero uma resposta que seja verdadeira.'],
      question: 'Se não pode impedir, por que continua avisando?',
      reply: 'Você omitiu a própria intervenção.',
      broken: 'Eu não consigo terminar antes de você mudar.',
      last: 'Você sabia qual dado estava faltando.',
      after: 'O rádio está ligado. O núcleo de Hermes não está mais aceso.'
    },
    orgulho: {
      before: ['Eu pensei no que você precisava para se defender.', 'Eu não vou chamar uma escolha sua de destino.'],
      question: 'Todo mundo confiou nos seus princípios.',
      reply: 'Você não está falando em nome deles.',
      broken: 'Você recebeu confiança. E escolheu o que colocar atrás dela.',
      last: 'Não chame minha mão de sua escolha.',
      after: 'O pedestal permanece. A luz ao redor dela se apagou.'
    }
  };
  function minorConfront(id) {
    const m = minor[id];
    say(id, [...m.before.map(text => ({
      text,
      pose: 'abalado'
    })), {
      choices: [{
        label: 'Você não escolheu por mim.',
        reply: 'Eu sei. Eu queria conseguir parar de refazer a conversa.',
        pose: 'acolhido'
      }, {
        label: m.question,
        reply: m.reply,
        pose: 'quebrando'
      }]
    }, ['Você', 'Se eu não precisasse sentir isso, ninguém poderia usar contra mim.'], {
      text: 'Você está falando de mim ou do que trouxe até aqui?',
      pose: 'abalado'
    }], () => {
      S.flags[id + 'Confront'] = true;
      significant();
      S.lastTalk[id] = S.activity;
      renderRoom();
    });
  }
  // Essas quatro mortes são a proposta V4. Poupar agora deixa vivo até outro acontecimento.
  function minorEnd(id) {
    const m = minor[id];
    say(id, [{
      text: m.broken,
      pose: 'quebrou'
    }, ['Você', 'Você ainda precisa acreditar que podia ter impedido.'], {
      who: 'Jardim',
      text: 'Está chorando, mas continua vivo. A resposta não é um fim.'
    }, {
      choices: [{
        label: 'Parar e deixar vivo agora',
        go: () => {
          S.pending[id] = S.activity;
          S.choices.push({
            scene: 'minorSpare',
            eco: id,
            label: 'Deixou vivo no encontro'
          });
          say(id, [{
            text: 'Você pode ficar sem pedir que eu justifique tudo?',
            pose: 'acolhido'
          }], () => {
            note('Uma conversa interrompida: ' + D.names[id], 'Ficou vivo quando deixei o quarto.');
            save();
            hub();
          });
        }
      }, {
        label: 'Continuar insistindo',
        go: () => {
          say(id, [['Você', 'Eu não vou precisar disso depois.'], {
            text: m.last,
            pose: 'quebrou'
          }, {
            who: 'Jardim',
            text: 'A presença perde a resposta. O silêncio que vem depois é diferente.',
            pose: 'morreu',
            effect: () => kill(id, 'A ruptura veio depois de o protagonista insistir nas vulnerabilidades conhecidas. ' + m.after)
          }], renderRoom);
        }
      }]
    }], renderRoom);
  }
  function laterDeath(id) {
    resetScene();
    background(roomBg(id));
    say(id, [{
      who: 'Jardim',
      text: id === 'medo' ? 'Depois daquele encontro, Medo saiu vivo. Agora o quarto está vazio. A notícia da sua morte chega por quem ainda permanece. A perda posterior não apaga o momento em que você o poupou.' : minor[id].after,
      pose: 'morreu'
    }, {
      who: 'Jardim',
      text: 'O desfecho não aconteceu no instante em que você decidiu parar.',
      pose: 'morreu',
      effect: () => kill(id, id === 'medo' ? 'Poupado no quarto de Pax; morreu posteriormente, fora de cena, após o sofrimento acumulado pelas perdas.' : 'Deixado vivo no encontro; perda posterior ao retorno. ' + minor[id].after)
    }], renderRoom);
  }
  function defer(seconds, done) {
    clockTask = {
      left: seconds,
      done
    };
  }
  function prompt(label, actions, seconds, done) {
    mode = 'prompt';
    $('#prompt').hidden = false;
    $('#prompt-label').textContent = label;
    $('#prompt-actions').replaceChildren(...actions.map(a => btn(a.label, () => {
      if (paused || !timed) return;
      timed = null;
      $('#prompt').hidden = true;
      done(a.id);
    })));
    $('#timer-fill').style.transform = 'scaleX(1)';
    timed = {
      left: seconds,
      total: seconds,
      done: () => {
        $('#prompt').hidden = true;
        done(null);
      }
    };
  }
  // Os comandos rápidos aceitam toque e teclado. Pausar congela o prazo.
  function startQTE(moves, onDone, onFail, eco = null) {
    qte = {
      moves: [...moves],
      onDone,
      onFail,
      eco
    };
    nextQTE();
  }
  function nextQTE() {
    if (!qte) return;
    const move = qte.moves.shift();
    if (!move) {
      const cb = qte.onDone;
      qte = null;
      $('#prompt').hidden = true;
      return cb();
    }
    if(qte.eco==='tristeza') {
      window.AudioSentia?.sfx?.('wave',{pan:move==='left'?.55:move==='right'?-.55:0,distance:1.2,intensity:.6});
      const sequence=[[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,1,3],[4,8,13]][S.checkpoint%6];
      const step=qte.visualStep||0;qte.visualStep=step+1;
      const pose=sequence[step%sequence.length];
      actor('tristeza','base','combat');
      $('#actor').src=list('/01-Sprites-128/04-Tristeza/')[pose-1];
      const fx=[10,11,1,2,4,3,5,7,8,9,6,14,12,13][((S.checkpoint*3)+step)%14];
      $('#effect').src=list('/01-Sprites-128/05-Efeitos-Tristeza/')[fx-1];$('#effect').hidden=false;
      explorationHands(move==='guard'?'09-pare':'01-alcancar');
    }
    if(qte.moves && ['intercept','hold','push'].includes(move)) {
      window.AudioSentia?.sfx?.('grab',{intensity:.4});
      actor('medo','base','combat');$('#actor').src=asset('/02-Medo/'+({intercept:'09-terror-agarrar',hold:'12-terror-bloquear',push:'03-virar-esquina-normal'})[move]+'.png');
      explorationHands(move==='push'?'09-pare':'01-alcancar');
    }
    const labels = {
      left: 'Esquivar à esquerda',
      right: 'Esquivar à direita',
      guard: 'Proteger',
      down: 'Abaixar',
      intercept: 'Interceptar',
      hold: 'Segurar o braço',
      push: 'Empurrar',
      back: 'Recuar',
      cross: 'Atravessar'
    };
    const mapping = {
      left: '← / A',
      right: '→ / D',
      guard: 'Espaço',
      down: '↓ / S',
      intercept: 'E',
      hold: 'Espaço',
      push: 'W / ↑',
      back: '↓ / S',
      cross: 'E'
    };
    const action = {
      label: labels[move] + ' · ' + mapping[move],
      id: move
    };
    const decoy = ['left', 'right', 'guard', 'down'].includes(move) ? ['left', 'right', 'guard', 'down'].filter(x => x !== move).slice(0, 2).map(x => ({
      label: labels[x],
      id: x
    })) : [];
    const all = [action, ...decoy].sort((a, b) => a.id.localeCompare(b.id));
    $('#prompt-status').textContent = 'Siga o comando indicado. Teclado ou toque.';
    qte.expected = move;
    const pressure=qte.eco==='tristeza'?(S.flags.ninfaPressure||0):0;
    const seconds=settings.assist?3.2:Math.max(.72,1.22-(qte.eco==='tristeza'?S.checkpoint*.055:0)-pressure*.12);
    if(qte.eco==='tristeza')$('#prompt-status').textContent='Fôlego '+S.flags.ninfaVitality+' / 100 · Erros '+ninfaErrors+' · Responda antes da onda';
    prompt(labels[move], all, seconds, result => {
      const ok = result === move;
      const current = qte;
      if (!current) return;
      if (!ok) {
        window.AudioSentia?.sfx?.('hit');
        const proceed = current.onFail?.();
        if (proceed === false) {
          qte = null;
          return;
        }
      } else {
        if(current.eco==='tristeza')ninfaConsecutive=0;
        window.AudioSentia?.sfx?.(move==='guard'?'block':['intercept','hold','push'].includes(move)?'grab':'nearMiss',{intensity:.4,pan:move==='left'?.6:move==='right'?-.6:0});
      }
      defer(settings.assist ? .3 : .16, nextQTE);
    });
  }
  function deathScreen(text, restart, kind = 'insanidade') {
    resetScene();
    window.AudioSentia?.sfx?.(settings.reduced?'death':'jumpscare');
    mode = 'defeat';
    retry = restart;
    objective('Uma tentativa terminou. Seu checkpoint foi preservado.');
    const finish = () => {
      const p = panel('Tentar de novo', text);
      p.append(btn('Voltar ao checkpoint', restart), btn('Configurações', pauseMenu));
    };
    if (settings.reduced) {
      finish();
      return;
    }
    const frames = kind === 'insanidade' ? list('/01-Frames-500x380/') : [];
    if (frames.length) {
      let n = 0;
      const animate = () => {
        if (n === frames.length) {
          $('#effect').hidden = true;
          finish();
          return;
        }
        $('#effect').src = frames[n++];
        $('#effect').hidden = false;
        defer(.125, animate);
      };
      animate();
    } else {
      actor(kind);
      if (kind === 'medo') $('#actor').src = asset('/02-Medo/11-terror-jumpscare.png') || baseSprite('medo');
      if (kind === 'odio') {
        $('#actor').src=asset('/01-Odio/20-jumpscare.png');$('#actor').classList.add('closeup');
        return defer(.3,()=>{actor('odio','jumpscare','closeup');defer(.4,()=>{actor(null);finish();});});
      }
      defer(.7, () => {
        actor(null);
        finish();
      });
    }
  }
  function watchIntro() {
    if (!S.flags.rescues && S.talks.A1 && !dead('amor')) return rescue(watchIntro);
    resetScene();
    background(asset('/03-Observatorio/09-observatorio.png'));
    say('medo', ['Você continua entrando como se eles fossem ficar esperando.', ['Você', 'Está tentando me assustar?'], 'Você ainda acha que isso é sobre o que eu quero que você sinta.'], () => {
      const p = panel('Oito pontos de luz', 'Cada esfera mostra um corredor. Você tem 3 segundos para abrir a esfera em que Hunger apareceu. Sustente a visão por um instante para fazê-lo recuar. Cada ciclo passa pelas oito câmeras. Você precisa sustentar a vigilância por 3 minutos. A pausa suspende o tempo.');
      p.append(btn('Começar a vigilância', () => {
        setPhase('watch');
        watchStart();
      }), btn('Voltar antes de entrar', renderRoom));
    });
  }
  // As oito esferas são os pontos de vigilância, antes da chase do Medo.
  function watchStart() {
    resetScene(); mode='watch';
    background(asset('/03-Observatorio/09-observatorio.png')); explorationHands();
    $('#location').textContent='Observatório';
    watch={time:180,position:-1,stage:0,next:1.5,looking:-1,hold:0,repels:0,round:0,visited:[],spotted:false,grace:0};
    drawWatch(); objective('Encontre Hunger em até 3 segundos. Todas as oito esferas fazem parte do circuito.');
  }
  function cameraButtons() {
    const grid=document.createElement('div');grid.className='orbs watch-switches';
    for(let i=0;i<8;i++) {
      const button=btn(String(i+1),()=>{
        if(paused||mode!=='watch')return;
        watch.looking=i;watch.hold=0;
        if(watch.position===i)watch.spotted=true;
        showCamera(i);
      },'orb');
      button.dataset.camera=String(i);grid.append(button);
    }
    return grid;
  }
  function watchHud() {
    const hud=document.createElement('div');hud.className='watch-hud';
    const countdown=document.createElement('strong');countdown.className='watch-deadline';
    const progress=document.createElement('span');progress.className='watch-progress';
    hud.append(countdown,progress);return hud;
  }
  function updateWatchHud() {
    if(!watch)return;
    document.querySelectorAll('[data-camera]').forEach(button=>{
      const i=Number(button.dataset.camera),moving=watch.position===i;
      button.classList.toggle('alerting',moving);button.classList.toggle('active',watch.looking===i);
      button.setAttribute('aria-pressed',String(watch.looking===i));
      button.setAttribute('aria-label','Esfera '+(i+1)+(moving?', movimento detectado':''));
    });
    const label=watch.position<0?'Procure a próxima alteração de brilho':watch.looking===watch.position?'Mantenha a visão · '+Math.ceil(Math.max(0,.65-watch.hold)*10)/10+' s':'MOVIMENTO · '+Math.max(0,watch.next).toFixed(1)+' s para encontrar';
    document.querySelectorAll('.watch-deadline').forEach(el=>el.textContent=label);
    document.querySelectorAll('.watch-progress').forEach(el=>el.textContent='Vigilância '+Math.ceil(Math.max(0,watch.time))+' s · Esferas usadas '+watch.visited.length+'/8 · Recuos '+watch.repels);
    $('#status').textContent=watch.position<0?'Escute. Observe o brilho.':watch.looking===watch.position?'Presença na esfera '+(watch.position+1):'Hunger se moveu · '+Math.max(0,watch.next).toFixed(1)+' s';
  }
  function drawWatch() {
    const p=panel('Pontos de observação','Uma esfera mudou de brilho. Abra a visão certa em até 3 segundos e sustente o olhar por um instante.');
    p.classList.add('observation');p.append(watchHud(),cameraButtons());updateWatchHud();
  }
  function showCamera(i) {
    $('#action-panel').hidden=true; $('#action-panel').replaceChildren(); background(list('/02-Medo-Chase/')[i]);
    if(watch.position===i){actor('medo',watch.next<1?'terror-presenca-proxima':'terror-espreitar');$('#actor').className='actor world';}
    else actor(null);
    const controls=$('#world-controls');controls.replaceChildren();
    const hud=watchHud();hud.classList.add('camera-hud');controls.append(hud,cameraButtons());
    const nav=document.createElement('div');nav.className='room-nav';
    nav.append(btn('← Todas as esferas',()=>{
      if(paused)return;watch.looking=-1;watch.hold=0;actor(null);
      background(asset('/03-Observatorio/09-observatorio.png'));controls.replaceChildren();drawWatch();
    }));controls.append(nav);updateWatchHud();
  }
  function tickWatch(dt) {
    const w=watch;w.time-=dt;w.next-=dt;
    if(w.position<0&&w.next<=0) {
      // Um ciclo sem repetição garante que as oito câmeras sejam exigidas.
      const circuit=[0,5,2,7,3,6,1,4];
      w.position=(circuit[w.round%8]+Math.floor(w.round/8)*3)%8;w.round++;
      if(!w.visited.includes(w.position))w.visited.push(w.position);
      w.next=settings.assist?5:3;w.hold=0;w.spotted=w.looking===w.position;w.grace=0;
      window.AudioSentia?.sfx?.('alert');
      if(w.looking<0)drawWatch();else showCamera(w.looking);
    } else if(w.position>=0) {
      if(w.looking===w.position){
        w.spotted=true;w.hold+=dt;
        if(w.hold>=.65){
          w.repels++;w.position=-1;w.next=Math.max(.8,1.65-w.repels*.025);w.hold=0;
          window.AudioSentia?.sfx?.('turn');
          if(w.looking<0)drawWatch();else showCamera(w.looking);
        }
      }else w.hold=0;
      // Encontrar no último instante dá apenas o tempo de firmar o olhar; não renova o prazo.
      if(w.position>=0&&w.next<=0){
        if(!w.spotted||w.looking!==w.position)return deathScreen('Você não encontrou a esfera a tempo. Hunger atravessou o limiar.',watchStart,'medo');
        w.grace+=dt;
        if(w.grace>.75)return deathScreen('Você desviou antes de fazer a presença recuar.',watchStart,'medo');
      }
    }
    if(w.time<=0){setPhase('fearChase');return fearChaseIntro();}
    updateWatchHud();
  }
  const fearOrder = [0, 1, 4, 2, 5, 6, 3, 7],
    fearDirs = ['up', 'left', 'up', 'right', 'down', 'left', 'right', 'up'];
  function fearChaseIntro() {
    resetScene();
    say('medo', ['Você conseguiu olhar todos eles. Conseguiu entender algum?'], () => {
      const p = panel('A visão falhou', 'Corra pelos corredores. Segure Shift no PC ou toque em Correr para ligar e desligar a corrida. Reaja às vigas e ao piso cedendo. Nas saídas, siga a indicação visível. Dois erros próximos podem ser fatais; correr não apaga a distância perdida.');
      p.append(btn('Sair do observatório', () => chaseStart('medo')));
    });
  }
  // Cada chase usa seus próprios corredores, separados do labirinto comum.
  function chaseStart(kind, index = 0, runLatched = false, carryDanger = null) {
    resetScene();
    explorationHands('02-punhos-fechados');
    mode = 'chase';
    const n = kind === 'medo' ? 8 : 6;
    chase = {
      kind,
      index,
      progress: 0,
      danger: Number.isFinite(carryDanger)?carryDanger:settings.assist?2:3.8,
      stepClock:0, obstacleDone:false, feedbackLeft:0,
      runLatched,
      lookingBack: false,
      length: n,
      waiting: false
    };
    setPhase(kind === 'medo' ? 'fearChase' : 'insaneChase', index);
    drawChase();
  }
  function drawChase() {
    const c=chase;if(!c)return;
    const backgrounds=c.kind==='medo'?list('/02-Medo-Chase/'):list('/04-Labirinto-Comum/190000-pixels/');
    const source=backgrounds[c.kind==='medo'?fearOrder[c.index]:c.index%8];
    background(source);$('#actor').hidden=true;clearIdle();
    $('#stage').classList.add('chasing');
    const monster=c.kind==='medo'?asset('/02-Medo/10-terror-emboscada.png'):baseSprite('insanidade','presenca-invasiva');
    Perseguicao.start(source,monster);
    $('#location').textContent=c.kind==='medo'?'Corredores de Hunger':'Além da saída';
    objective('Corra e escolha a passagem antes de a presença alcançar você.');
    $('#world-controls').replaceChildren();
    const nav=document.createElement('div');nav.className='room-nav chase-nav';
    const toggleRun=()=>{c.runLatched=!c.runLatched;run.setAttribute('aria-pressed',String(c.runLatched));};
    const run=btn('Correr · Shift',e=>{if(!e||e.detail===0)toggleRun();});
    run.onpointerdown=e=>{if(e.button!==0)return;e.preventDefault();toggleRun();};
    run.id='chase-run';run.setAttribute('aria-pressed',String(!!c.runLatched));
    const back=btn('Olhar para trás · B',()=>{c.lookingBack=!c.lookingBack;back.setAttribute('aria-pressed',String(c.lookingBack));});
    back.id='chase-back';back.setAttribute('aria-pressed','false');nav.append(run,back);$('#world-controls').append(nav);
  }
  function chaseFailure(c,text) {
    deathScreen(text,()=>chaseStart(c.kind,Math.max(0,c.index-1)),c.kind);
  }
  function chaseDecision(c,label,dir,isTurn) {
    c.waiting=true;
    const labels={left:'← Esquerda',up:'↑ Frente',right:'Direita →',down:'↓ Abaixar'};
    const seconds=settings.assist?3:isTurn?1.15:1.05;
    window.AudioSentia?.sfx?.('alert');
    prompt(label,Object.entries(labels).map(([id,label])=>({id,label})),seconds,r=>{
      if(r!==dir){
        c.danger+=settings.assist?1.8:2.75;c.progress*=.58;c.waiting=false;mode='chase';
        c.turnFeedback='blocked';c.feedbackLeft=.65;
        window.AudioSentia?.sfx?.('hit');
        if(c.danger>=8)return chaseFailure(c,'Você perdeu distância no obstáculo. A presença alcançou você.');
        return;
      }
      c.turnFeedback=dir;c.feedbackLeft=.4;window.AudioSentia?.spatialCue?.('turn',{pan:dir==='left'?-.6:dir==='right'?.6:0,intensity:.45});
      c.waiting=false;mode='chase';
      if(!isTurn)return;
      c.index++;
      if(c.kind==='medo'&&c.index===4&&!dead('culpa'))return culpaCut(c);
      if(c.index>=c.length){if(c.kind==='medo'){setPhase('fearRoom');fearRoom();}else{setPhase('interrogation');interrogation();}return;}
      c.progress=0;c.obstacleDone=false;c.lookingBack=false;
      setPhase(c.kind==='medo'?'fearChase':'insaneChase',c.index);drawChase();
    });
    $('#prompt').classList.add('chase-prompt');
  }
  function tickChase(dt) {
    const c=chase;if(!c)return;
    const running=!!(keysHeld.run||c.runLatched),distance=c.kind==='medo'?2.6:2.9;
    c.feedbackLeft=Math.max(0,c.feedbackLeft-dt);if(!c.feedbackLeft)c.turnFeedback=null;
    // Correr mantém a distância; não apaga os erros anteriores.
    if(!c.waiting)c.progress+=dt*(running&&!c.lookingBack?1:.1);
    c.danger=Math.max(settings.assist?1:2.2,c.danger+dt*(c.waiting?.22:running&&!c.lookingBack?(settings.assist?-.09:-.025):c.lookingBack?1.65:2.45));
    c.stepClock+=dt;
    if(!c.waiting&&c.stepClock>(running?.31:.58)){c.stepClock=0;window.AudioSentia?.sfx?.('step',{pace:running?'run':'walk',surface:'stone',intensity:.55});}
    c.presenceClock=(c.presenceClock||0)+dt;
    if(c.danger>3&&c.presenceClock>1.25&&!c.waiting){c.presenceClock=0;window.AudioSentia?.sfx?.('approach',{pan:Math.sin(c.index*2.1)*.65,distance:Math.max(.5,(8-c.danger)*.4),intensity:.45});}
    Perseguicao.draw(dt,{...c,running,distance,reduced:settings.reduced,catchingUp:c.danger>5.5,threatCue:Math.max(0,(c.danger-4)/4)});
    $('#status').textContent='Passagem '+(c.index+1)+' / '+c.length+' · '+(running?'Correndo':'CORRA · Shift ou botão')+' · Margem '+Math.max(0,Math.round((8-c.danger)*12.5))+'%';
    $('#chase-run')?.setAttribute('aria-pressed',String(running));
    if(c.danger>=8)return chaseFailure(c,'A presença alcançou você. Corra, reaja aos obstáculos e evite olhar para trás por muito tempo.');
    if(c.waiting)return;
    if(!c.obstacleDone&&[1,2,5].includes(c.index)&&c.progress>=distance*.44){
      c.obstacleDone=true;
      const low=c.index!==2;
      return chaseDecision(c,low?'Uma viga atravessou o corredor — passe ABAIXADO!':'O piso cede à direita — desvie à ESQUERDA!',low?'down':'left',false);
    }
    if(c.progress>=distance){
      const dir=c.kind==='medo'?fearDirs[c.index]:['up','left','right','up','right','up'][c.index];
      const labels={up:'Seguir em frente',left:'Virar à esquerda',right:'Virar à direita',down:'Passar abaixado'};
      chaseDecision(c,'A passagem segura: '+labels[dir],dir,true);
    }
  }
  function culpaCut(saved) {
    say('culpa', [{
      text: 'O que aconteceu? Por que vocês estão—',
      pose: 'abalado'
    }, {text:'Hunger? Eu só queria saber se você estava bem.',pose:'quebrou'}, ['Jardim', 'Medo interrompe o caminho. Ele se volta para Culpa, decide e ataca. Não foi um golpe que errou você.'], {
      who: 'Jardim',
      text: 'Ela não termina a frase.',
      pose: 'morreu',
      effect: () => kill('culpa', 'Medo a matou intencionalmente durante a perseguição. A razão específica não foi esclarecida.')
    }], () => chaseStart('medo', saved.index, saved.runLatched, saved.danger));
  }
  function fearRoom() {
    resetScene();
    background(roomBg('calma'));
    say('medo', [['Jardim', 'Você reconhece o refúgio. A xícara continua ali. Pax, não.'], 'De todos os lugares…', ['Você', 'Você matou ela.'], 'Eu sei o que fiz.', ['Você', 'E veio me dizer o que eu fiz?'], 'Olha onde você foi procurar abrigo.', 'Pax teria deixado você entrar.', ['Você', 'Ele deixou.'], {
      text: 'E você sabia disso.',
      pose: 'abalado'
    }], () => {
      actor('medo');
      startQTE(['intercept', 'hold', 'push'], () => say('medo', [{
        text: 'Eu só queria que eles continuassem aqui.',
        pose: 'quebrou'
      }, ['Você', 'Isso não muda o que você fez.'], {
        text: 'Também não muda o que você fez.',
        pose: 'quebrou'
      }, {
        choices: [{
          label: 'Poupar',
          go: () => {
            S.flags.sparedFear = true;
            S.pending.medo = S.activity;
            note('Medo saiu vivo', 'Você o deixou ir enquanto chorava.');
            setPhase('explore');
            hub();
          }
        }, {
          label: 'Matar',
          go: () => say('medo', [{
            who: 'Jardim',
            text: 'A forma que assustava já tinha cedido. O protagonista ergue a mão mesmo assim.',
            pose: 'morreu',
            effect: () => kill('medo', 'Morto pelo protagonista no quarto de Pax, depois de voltar à forma habitual.')
          }], () => {
            setPhase('explore');
            hub();
          })
        }]
      }], hub), () => {
        deathScreen('Você não conseguiu impedir a aproximação.', fearRoom, 'medo');
        return false;
      });
    });
  }
  // Esse código aq troca os sprites e ataques de água da Ninfa. Cada fala vira checkpoint.
  function ninfaStart(index = 0, intro = false) {
    resetScene();
    explorationHands('09-pare');
    setPhase('ninfa', index);
    S.flags.ninfaDefeated=false;
    if(intro||!Number.isFinite(S.flags.ninfaVitality))S.flags.ninfaVitality=100;
    background(list('/03-Abismo-Tristeza/02-Base/')[index % 5]);
    actor('tristeza', 'base', 'combat');
    $('#actor').src = asset('/04-Tristeza/01-prontidao.png') || baseSprite('tristeza');
    $('#location').textContent = 'Mar da Culpa';
    objective('Resista às ondas e escute o que Ninfa tem a dizer.');
    if (intro) {
      ninfaErrors = 0;
      ninfaConsecutive = 0;
      const p = panel('A água sobe', 'Ninfa ataca de longe. Respostas têm 4 segundos; hesitar aumenta a pressão da próxima onda. As sequências aceleram a cada etapa. Cada erro custa fôlego; dois erros seguidos ou três no total encerram a tentativa. Cada fala é um checkpoint. O modo assistido amplia os prazos.');
      p.append(btn('Continuar', () => ninfaStart(index)));
      return;
    }
    const c = D.ninfa[index];
    say('tristeza', [{
      text: c.text,
      pose: ['aura-emocional','esferas-suspensas','lancar-esfera','aura-emocional','esferas-suspensas','lancar-esfera'][index]
    }, {
      seconds: settings.assist?7:4,
      onTimeout:()=>{S.flags.ninfaPressure=1;S.flags.ninfaVitality=Math.max(1,S.flags.ninfaVitality-12);},
      silence: c.silence,
      choices: c.answers.map((a,i) => ({
        label: a[0],
        reply: a[1],
        effect:()=>{S.flags.ninfaPressure=i===c.answers.length-1?1:0;}
      }))
    }], () => {
      actor('tristeza', 'base', 'combat');
      $('#actor').src = asset('/04-Tristeza/07-controlar-esferas.png') || baseSprite('tristeza');
      $('#effect').src = asset('/05-Efeitos-Tristeza/03-esferas-orbita.png');
      $('#effect').hidden = false;
      startQTE(c.moves, () => {
        if (index < 5) ninfaStart(index + 1);else ninfaEnd();
      }, () => {
        ninfaErrors++;
        ninfaConsecutive++;
        S.flags.ninfaVitality=Math.max(0,S.flags.ninfaVitality-(settings.assist?20:34));
        $('#stage').classList.add('impact');setTimeout(()=>$('#stage').classList.remove('impact'),350);
        $('#prompt-status').textContent = 'Impacto! Fôlego '+S.flags.ninfaVitality+' / 100 · Erros: ' + ninfaErrors + ' · seguidos: ' + ninfaConsecutive;
        if (ninfaErrors >= 3 || ninfaConsecutive >= 2 || S.flags.ninfaVitality<=0) {
          deathScreen('A água fechou a passagem. Retome a fala de Ninfa.', () => {
            ninfaErrors = 0;
            ninfaConsecutive = 0;
            S.flags.ninfaVitality=100;
            ninfaStart(index);
          }, 'tristeza');
          return false;
        }
        return true;
      }, 'tristeza');
    });
  }
  function ninfaEnd() {
    resetScene();
    S.flags.ninfaDefeated=true;
    background(list('/03-Abismo-Tristeza/02-Base/')[0]);
    say('tristeza', [{
      text: 'Então não chama o que aconteceu de não sentir nada.',
      pose: 'quebrou'
    }, {who:'Jardim',text:'A água escurece. Você ainda reconhece o último olhar antes de perder a vista dela.',effect:()=>{$('#actor').src=asset('/04-Tristeza/16-derrotada.png');}}, {
      who: 'Jardim',
      text: 'Quando o caminho retorna, Ninfa não vem junto.',
      pose:'morreu',
      effect: () => kill('tristeza', 'Morreu no desfecho do confronto aquático, depois de reconhecer a traição. A água e o corte ocultaram o fim.')
    }], () => {
      note('A confiança de Ninfa', 'Ela percebeu que suas confidências sobre os irmãos foram usadas pelo protagonista.');
      setPhase('explore');
      hub();
    });
  }
  function odioIntro() {
    resetScene();
    background(asset('/01-Arena-Odio/01-frente.png'));
    say('odio', [{text:'Não usa a voz deles para passar por mim.',pose:'chase'}, ['Você', 'Você não deixou outra passagem.'], {text:'Você faz a mesma pergunta até ouvir o que pode usar.',pose:'agarre'}, {text:'Sugar não vai entender isso como você.',pose:'grito'}], () => {
      const p = panel('A arena', 'Clique e arraste para olhar, ou use as setas. No celular, arraste o dedo para girar e use os controles para andar. PC: W/S avança e recua, A/D desloca, setas giram, F ataca, Espaço protege, E interage e Q lança a luz recebida. No celular, use o direcional e os botões. Aproxime-se para atingir, recue durante o preparo dos ataques.');
      p.append(btn('Entrar', () => {
        setPhase('odio');
        startArena(false);
      }));
    });
  }
  // Conecta a arena ao roteiro e aos botões de celular.
  function startArena(free) {
    resetScene();
    mode = 'arena';
    $('#location').textContent = 'Arena · ' + (free ? 'depois do silêncio' : 'Ódio');
    objective(free ? 'Pegue a espada' : 'Sobreviva ao último protetor.');
    const hud = document.createElement('div');
    hud.className = 'fps-hud';
    $('#world-controls').append(hud);
    const help = document.createElement('div');
    help.className = 'battle-help';
    help.textContent = 'Arraste para olhar · WASD mover · ← → girar · F atacar · Espaço defender · Q luz · E interagir';
    $('#world-controls').append(help);
    Arena.start({
      free,
      assist:settings.assist,
      collected: S.flags.swordPicked,
      items: S.items,
      equipped:S.flags.equipped,
      onHud: h => {
        hud.textContent = h.free ? h.warning : 'Vida ' + h.hp + ' · Beerus ' + h.enemy + ' · Fôlego '+(h.stamina??100)+' · Luz '+(h.lightReady?'pronta':'recarregando')+(h.phase===2?' · FASE II':'')+(h.guardBroken?' · DEFESA ROMPIDA':'')+' — ' + h.warning;
        document.querySelectorAll('[data-arena-action]').forEach(button=>{
          const action=button.dataset.arenaAction;
          if(action==='light')button.disabled=!!h.free||!S.items.includes('luz')||!h.lightReady;
          if(action==='attack')button.disabled=!!h.free;
        });
      },
      onDeath: () => deathScreen('Ódio interrompeu sua passagem.', () => startArena(false), 'odio'),
      onFinish: () => odioSurto(),
      onCollect: () => {
        S.flags.swordPicked = true;
        addItem('espada');
        objective('Aproxime-se de Sugar.');
      },
      onSugar: () => {
        setPhase('candy');
        candyFinal();
      }
    });
    if (settings.device === 'mobile') renderMobileArena();
  }
  function bindHold(button, key) {
    button.onpointerdown = e => {
      e.preventDefault();
      button.setPointerCapture(e.pointerId);
      keysHeld[key] = true;
      Arena.press(key, true);
    };
    const up = () => {
      keysHeld[key] = false;
      Arena.press(key, false);
    };
    button.onpointerup = up;
    button.onpointercancel = up;
    button.onlostpointercapture = up;
  }
  function renderMobileArena() {
    const wrap = $('#mobile-controls');
    wrap.replaceChildren();
    wrap.hidden = false;
    const pad = document.createElement('div');
    pad.className = 'dpad';
    [['↑', 'up'], ['←', 'turnLeft'], ['↓', 'down'], ['→', 'turnRight'], ['◁', 'left'], ['▷', 'right']].forEach(([label, key]) => {
      const b = btn(label, () => {});
      b.setAttribute('aria-label', {
        up: 'Avançar',
        down: 'Recuar',
        turnLeft: 'Olhar à esquerda',
        turnRight: 'Olhar à direita',
        left: 'Deslocar à esquerda',
        right: 'Deslocar à direita'
      }[key]);
      bindHold(b, key);
      pad.append(b);
    });
    const actions = document.createElement('div');
    actions.className = 'combat-buttons';
    [['Atacar', 'attack'], ['Luz', 'light'], ['Interagir', 'interact']].forEach(([label, type]) => {
      const b = btn(label, () => Arena.action(type));
      b.dataset.arenaAction=type;
      if (type === 'light' && !S.items.includes('luz')) b.disabled = true;
      actions.append(b);
    });
    const guard = btn('Proteger', () => {});
    bindHold(guard, 'guard');
    actions.append(guard);
    wrap.append(pad, actions);
  }
  function odioSurto() {
    resetScene();
    setPhase('comics');
    background(asset('/02-Cenas-500x380/02-odio-surta.png'));
    say(null, [['Jardim', 'O último golpe quase alcança Ódio. Então ele para de recuar.'], ['Jardim', 'As fissuras acendem. Disparos ocupam o espaço em que você tentava avançar. O controle da luta termina aqui.']], () => comics(0));
  }
  function comics(page = 0) {
    resetScene();
    setPhase('comics', page);
    const p = panel('', '');
    p.classList.add('comic');
    const img = document.createElement('img');
    img.src = asset('/04-Quadrinhos/pagina-0' + (page + 1) + '.png');
    img.alt = ['Ódio surta e atira; o rosto de Sugar surge, seguido por sua chegada à arena.', 'Sugar enfrenta Ódio com sua luz, voltada para ele.', 'A luz encerra o confronto. Ódio cai; Sugar permanece na arena.'][page];
    p.append(img);
    const nav = document.createElement('div');
    nav.className = 'comic-controls';
    if (page > 0) nav.append(btn('← Anterior', () => comics(page - 1)));
    const counter = document.createElement('span');
    counter.textContent = page + 1 + ' / 3';
    nav.append(counter, btn(page < 2 ? 'Próxima página →' : 'Voltar à arena', () => {
      if (page < 2) return comics(page + 1);
      kill('odio', 'Sugar o matou com seus poderes de luz para impedir os disparos e proteger o protagonista.');
      S.flags.comics = true;
      setPhase('arena');
      const end=[{who:'Jardim',text:'A luz se desfaz. Beerus não se levanta. Sugar permanece do outro lado da arena.',pose:'morreu'}];
      if(!S.items.includes('espada'))end.push(['Jardim','Sugar trouxe a espada do pedestal de Aurea. Durante a intervenção, ela caiu no centro da arena.']);
      say('odio',end,()=>startArena(true));
    }));
    p.append(nav);
    objective('A intervenção de Sugar · leitura livre');
  }
  // O jogador pode querer poupar. O protagonista contraria essa escolha aqui.
  function candyFinal() {
    resetScene();
    background(asset('/01-Arena-Odio/01-frente.png'));
    say('amor', [{
      text: 'Eu achei que se chegasse a tempo…',
      pose: 'quebrou'
    }, ['Você', 'Você chegou.'], {
      text: 'Você fala como se tivesse acabado.',
      pose: 'quebrou'
    }, {
      choices: [{
        label: 'POUPAR',
        go: () => {
          S.flags.triedSugar = true;
          save();
          say('amor', [{
            who: 'Você',
            text: 'Eu não vou precisar de ninguém depois.'
          }, {
            text: 'Você ainda está aqui?',
            pose: 'quebrou'
          }, {
            choices: [{
              label: 'MATAR',
              go: candyDeath
            }]
          }], candyDeath);
        }
      }, {
        label: 'MATAR',
        go: candyDeath
      }]
    }], candyDeath);
  }
  function candyDeath() {
    resetScene();
    background(asset('/02-Cenas-500x380/09-silhueta.png'));
    say(null, [['Jardim', 'O protagonista ergue a espada. A cena corta para uma silhueta.'], {
      who: 'Jardim',
      text: 'A luz deixa o corpo inteiro.',
      effect: () => {
        kill('amor', 'O protagonista a matou depois de recolher a espada. A tentativa de poupar, quando feita, não foi respeitada por ele.');
        actor('amor', 'morreu');
      }
    }], () => {
      setPhase('stairs');
      stairs();
    });
  }
  function stairs() {
    resetScene();
    background(asset('/02-Cenas-500x380/10-escadaria.png'));
    say(null, [['Jardim', 'A escadaria começa onde a arena termina. Cada lance afasta o chão em que Sugar ficou.'], ['Jardim', 'Você sobe. Nada do que deixou para trás responde.'], ['Jardim', 'No alto, há um labirinto comum. Dois nomes ainda serão ouvidos.']], mazeTutorial);
  }
  function mazeTutorial(step = 0) {
    resetScene();
    background(asset('/190000-pixels/06-cruzamento.png'));
    const instructions = ['Sanidade mostra a direção certa. Ela aponta à esquerda. Escolha esquerda.', 'Insanidade mostra o contrário. Ele aponta à esquerda. Escolha direita.', 'Quando os dois aparecem, vá pelo meio.'];
    if (step === 3) {
      setPhase('maze');
      const p = panel('Antes da primeira curva', 'A cada curva haverá Sanidade, Insanidade ou os dois. Siga Sanidade, contrarie Insanidade e vá pelo meio quando ambos aparecerem. Você terá 2 segundos. Um erro reinicia o labirinto. O modo assistido amplia esse tempo.');
      p.append(btn('Entrar no labirinto', () => mazeStart(0)));
      return;
    }
    actor(step === 1 ? 'insanidade' : 'sanidade');
    if (step === 2) actorTwo('insanidade');
    const p = panel('Aprender sem risco', instructions[step]);
    ['left', 'center', 'right'].forEach((dir, i) => p.append(btn(['← Esquerda', 'Meio', 'Direita →'][i], () => {
      if (dir === ['left', 'right', 'center'][step]) mazeTutorial(step + 1);else {
        actor(step===1?'insanidade':'sanidade','discordar');
        const n = document.createElement('p');
        n.textContent = 'Pode tentar outra vez. ' + instructions[step];
        p.append(n);
      }
    })));
  }
  // Sanidade: segue. Insanidade: contrário. Os dois: meio.
  function mazeStart(index = 0) {
    resetScene();
    mazeIndex = index;
    setPhase('maze');
    background(asset('/190000-pixels/' + (D.maze[index][0] === 'A' ? '06-cruzamento.png' : index % 2 ? '05-bifurcacao.png' : '02-corredor-reto.png')));
    const [who, dir] = D.maze[index];
    actor(who === 'I' ? 'insanidade' : 'sanidade',who==='S'?'orientar':who==='I'?(index%2?'discordar':'divertido'):'escutar');
    if (who === 'A') actorTwo('insanidade',index%2?'divertido':'escutar');
    $('#location').textContent = 'Curva ' + (index + 1) + ' / 20';
    const direction = dir === 'left' ? 'esquerda' : 'direita';
    const label = who === 'A' ? 'Sanidade e Insanidade aparecem juntos.' : (who === 'S' ? 'Sanidade' : 'Insanidade') + ': “À ' + direction + '.”';
    const safe = who === 'A' ? 'center' : who === 'S' ? dir : dir === 'left' ? 'right' : 'left';
    objective('Siga Sanidade. Contrarie Insanidade. Ambos: meio.');
    prompt(label, [{
      id: 'left',
      label: '← Esquerda'
    }, {
      id: 'center',
      label: '↑ Meio'
    }, {
      id: 'right',
      label: 'Direita →'
    }], settings.assist ? 5 : 2, answer => {
      if (answer !== safe) return deathScreen('A orientação não levou à saída.', () => mazeStart(0));
      if (index === 19) {
        setPhase('insaneChase');
        insaneChaseIntro();
      } else mazeStart(index + 1);
    });
  }
  function insaneChaseIntro() {
    resetScene();
    background(asset('/190000-pixels/08-saida.png'));
    say('insanidade', [{text:'Você escolheu as saídas certas.',pose:'escutar'}, {text:'E continuou entrando.',pose:'divertido'},{text:'Agora olhe para onde elas te trouxeram.',pose:'revelar'}], () => {
      const p = panel('Ainda não terminou', 'Agora é uma perseguição. Toque em Correr ou segure Shift e acompanhe as saídas sinalizadas. O labirinto concluído está salvo.');
      p.append(btn('Correr para a saída', () => chaseStart('insanidade')));
    });
  }
  function interrogation() {
    resetScene();
    background(asset('/190000-pixels/08-saida.png'));
    const lines = ['Você chegou sem ninguém que pudesse responder por você.', ['Você', 'Eu respondo por mim.'], 'Então diga o que queria acabar.', {
      choices: [{
        label: 'As inseguranças',
        reply: 'E por que procurou nos outros uma coisa que continuou levando?'
      }, {
        label: 'O que me fazia sofrer',
        reply: 'Você também destruiu o que aparecia quando não suportava.'
      }, {
        label: 'Os sentimentos',
        reply: 'Desta vez você não chamou por outro nome.'
      }]
    }];
    if (S.flags.sparedFear) lines.push('Você deixou que ele saísse. Isso aconteceu. Não vou dizer que escolheu o mesmo gesto de quem o matou ali.');
    if (S.flags.triedSugar) lines.push('Aquela escolha não foi deixada na sua mão.');
    lines.push(['Você', 'Eu ainda sinto.'], {text:'Você começou a perceber antes de chegar.',pose:'aprovar'});
    say('sanidade', lines, () => {
      setPhase('revelation');
      revelation();
    });
  }
  function revelation(frame = 0) {
    resetScene();
    setPhase('revelation');
    if(frame===0)S.flags.maskRemoved=false;
    background(asset('/190000-pixels/08-saida.png'));
    const frames = list('/03-Generais/insanidade/').filter(p => /rosto-[1-4]/.test(p));
    function next(i) {
      actor('insanidade');
      $('#actor').className = 'actor closeup';
      $('#actor').src = frames[i];
      if(i===3){S.flags.maskRemoved=true;save();}
      if (i < 3) return defer(settings.reduced ? 1.4 : 1, next.bind(null, i + 1));
      defer(1, () => {
        S.sanity = 0;
        actor('insanidade');
        actorTwo('amor', 'morreu');
        $('#actor-two').className = 'actor ghost';
        say('insanidade', ['Você está esperando por ela?', ['Jardim', 'Muito longe, a imagem escura de Sugar permanece imóvel. Não há voz, toque ou luz chegando.']], () => {
          actor('sanidade', 'orientar');
          $('#actor-two').hidden = true;
          startQTE(['back', 'right', 'cross'], () => {
            S.sanity = 25;
            setPhase('keys');
            generalKeys();
          }, () => {
            deathScreen('A aproximação fechou o espaço.', () => revelation());
            return false;
          });
        });
      });
    }
    next(frame);
  }
  // Os generais viram chaves. Eles não morrem como os sentimentos.
  function generalKeys() {
    resetScene();
    background(asset('/190000-pixels/08-saida.png'));
    say('sanidade', ['Eu não posso escolher o que você fará com aquilo que reconhecer.', ['Insanidade', 'E eu não posso continuar escondendo atrás de uma curva.'], {
      text: 'As duas partes ainda precisam estar aqui.',
      pose: 'forma-chave',
      effect:()=>actorTwo('insanidade','forma-chave')
    }, ['Insanidade', 'Até para abrir uma porta.']], () => {
      actor(null);
      $('#actor-two').hidden=true;
      const hand1 = asset('/10-Chaves-Na-Mao/sanidade.png') || asset('/chaves/01-sanidade.png'),
        hand2 = asset('/10-Chaves-Na-Mao/insanidade.png') || asset('/chaves/02-insanidade.png');
      say(null, [{
        who:'Jardim',text:'Você fecha os dedos em torno das hastes.',effect:()=>explorationHands('05-equipar-chave')
      }, {
        who: 'Jardim',
        text: 'Uma presença se torna uma chave. Você a segura pela haste.',
        image: hand1,
        effect: () => addItem('chave-sanidade')
      }, {
        who: 'Jardim',
        text: 'A outra também deixa de orientar. As duas chaves agora estão com você.',
        image: hand2,
        effect: () => addItem('chave-insanidade')
      }], () => {
        setPhase('gate');
        gate();
      });
    });
  }
  function gate() {
    resetScene();
    background(asset('/07-Portao-Final/01-portao-duas-chaves.png'));
    $('#location').textContent = 'O último portão';
    objective('Duas fechaduras. Duas chaves.');
    const p = panel('Duas fechaduras', 'A haste de cada chave entra numa fechadura comum. Atrás da porta, só há luz.');
    ['sanidade', 'insanidade'].forEach(id => {
      const b = btn(S.flags['lock' + id] ? 'Fechadura aberta' : 'Usar chave de ' + D.names[id], () => {
        if (!S.items.includes('chave-' + id)) return;
        S.flags['lock' + id] = true;
        save();
        gate();
      });
      b.disabled = S.flags['lock' + id] || !S.items.includes('chave-' + id);
      p.append(b);
    });
    if (S.flags.locksanidade && S.flags.lockinsanidade) p.append(btn('Empurrar a porta', door));
  }
  function door() {
    resetScene();
    const frames = list('/06-Saida-4-Quadros/');
    let i = 0;
    const next = () => {
      if (i === frames.length) {
        setPhase('ending');
        return ending();
      }
      background(frames[i]);
      if (i >= 2) {
        $('#fade').className = 'fade white';
        $('#fade').hidden = false;
      }
      i++;
      say(null, [['Jardim', ['A porta cede.', 'Você empurra.', 'A abertura é tomada pela luz.', 'Não há cenário atrás dela. Só luz.'][i - 1]]], next);
    };
    next();
  }
  // Neutralidade usa uma imagem só e lembra as escolhas reais da partida.
  function ending() {
    resetScene();
    background(null);
    $('#background').style.opacity = '.08';
    actor('neutralidade');
    const lines = ANATA.script(S);
    say('neutralidade', lines, () => {
      S.complete = true;
      setPhase('complete');
      $('#fade').className = 'fade';
      $('#fade').hidden = false;
      defer(1.2, () => location.href = 'index.html#home');
    });
  }
  function rescue(done) {
    if(!S.talks.A1 || dead('amor')) return done();
    resetScene();
    background(roomBg(S.room || 'amor', S.view));
    S.flags.rescues = (S.flags.rescues || 0) + 1;
    say('amor', [{
      text: 'Olha para mim. Só por um instante.',
      pose: 'acolher-bracos-abertos'
    }, ['Jardim', 'Sugar se aproxima e toca seus ombros. Ela espera sua respiração encontrar um intervalo.'], {
      text: 'Você ainda está aqui. Eu também.',
      pose: 'proteger-com-asas'
    }, ['Jardim', 'Ela se afasta. A presença se desfaz num feixe de luz.']], () => {
      S.sanity = 70;
      rescueCooldown = 10;
      save();
      done();
    });
  }
  function modal(content) {
    if(!$('#game-modal').open) modalReturnTarget=document.activeElement;
    paused = true;
    keysHeld = {};
    Arena.pause(true);
    window.AudioSentia?.pause();
    $('#modal-content').replaceChildren(content);
    const heading = content.querySelector('h1,h2');
    if (heading) {
      heading.id = 'game-modal-title';
      $('#game-modal').setAttribute('aria-labelledby', heading.id);
      $('#game-modal').removeAttribute('aria-label');
    } else {
      $('#game-modal').removeAttribute('aria-labelledby');
      $('#game-modal').setAttribute('aria-label', 'Jardim dos Ecos');
    }
    $('#game-modal').scrollTop = 0;
    if (!$('#game-modal').open) $('#game-modal').showModal();
    if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
  }
  function closeModal() {
    if ($('#game-modal').open) $('#game-modal').close();
    paused = false;
    Arena.pause(false);
    window.AudioSentia?.resume();
    loopLast = performance.now();
    updateGestureControl();
    if(modalReturnTarget?.isConnected)modalReturnTarget.focus({preventScroll:true});
    modalReturnTarget=null;
  }
  function saveSettings() {
    try {
      localStorage.setItem('sentia-game-settings', JSON.stringify(settings));
      localStorage.setItem('sentia-device', JSON.stringify(settings.device));
    } catch {}
    document.body.classList.toggle('mobile', settings.device === 'mobile');
    document.body.classList.toggle('reduced', settings.reduced);
    if (mode === 'arena') {
      if (settings.device === 'mobile') renderMobileArena();else $('#mobile-controls').hidden = true;
    }
  }
  // A pausa deixa trocar PC/celular, ampliar tempos e exportar a partida.
  function pauseMenu() {
    if (!S) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = '<p class="eyebrow">JARDIM DOS ECOS</p><h2>Um intervalo</h2><p>O tempo fica parado enquanto esta janela estiver aberta.</p><label for="device">Como você quer jogar?</label><select id="device"><option value="pc">PC · teclado e mouse</option><option value="mobile">Celular · botões de toque</option></select><label><input type="checkbox" id="assist"> Modo assistido: mais tempo para reagir</label><label><input type="checkbox" id="motion"> Reduzir movimentos e sustos animados</label><p class="hint">O save retoma o último ponto seguro. Conversas em andamento recomeçam. Nenhuma partida é enviada para fora do navegador.</p>';
    wrap.querySelector('#device').value = settings.device;
    wrap.querySelector('#assist').checked = settings.assist;
    wrap.querySelector('#motion').checked = settings.reduced;
    wrap.querySelectorAll('input,select').forEach(el => el.onchange = () => {
      settings.device = wrap.querySelector('#device').value;
      settings.assist = wrap.querySelector('#assist').checked;
      settings.reduced = wrap.querySelector('#motion').checked;
      saveSettings();
    });
    // A ajuda acompanha a cena, sem revelar o que vem depois na história.
    const controls = document.createElement('details');
    controls.className = 'scene-controls';
    const summary = document.createElement('summary');
    summary.textContent = 'Controles desta cena';
    const help = document.createElement('p');
    help.textContent = mode === 'arena'
      ? 'W/S avança e recua; A/D desloca; setas ou arrastar no cenário giram a câmera. F ataca, Espaço defende, Q usa a luz e E interage. No celular, use os botões e arraste para olhar.'
      : chase
      ? 'Segure Shift ou toque em Correr para ligar ou desligar a corrida. B ou Olhar para trás muda a visão. Nas passagens, use as setas, W/A/S/D ou os botões da tela.'
      : mode === 'prompt'
      ? 'Responda ao comando mostrado na tela usando a tecla indicada ou o botão correspondente. O prazo fica congelado durante a pausa.'
      : 'Converse com o morador antes de explorar. Use as setinhas e clique ou toque nos objetos. Um clique ou Enter revela a frase inteira; o seguinte avança. Tab percorre os botões. I abre a bolsa, J abre o registro e Esc pausa.';
    controls.append(summary, help);
    wrap.append(controls);
    const audio=window.AudioSentia;
    if(audio){
      const sound=document.createElement('fieldset');const legend=document.createElement('legend');legend.textContent='Áudio';sound.append(legend);
      const volumeLabel=document.createElement('label');volumeLabel.textContent='Volume da trilha ';const level=document.createElement('output');level.textContent=Math.round(audio.state().volume*100)+'%';const volume=document.createElement('input');volume.type='range';volume.min='0';volume.max='100';volume.value=String(Math.round(audio.state().volume*100));volume.setAttribute('aria-label','Volume da trilha');volume.oninput=()=>{audio.setVolume(Number(volume.value)/100);level.textContent=volume.value+'%';};volumeLabel.append(level,volume);
      const muteLabel=document.createElement('label');const mute=document.createElement('input');mute.type='checkbox';mute.checked=audio.state().muted;mute.onchange=()=>audio.setMuted(mute.checked);muteLabel.append(mute,' Silenciar todo o áudio');
      const credits=document.createElement('details');const title=document.createElement('summary');title.textContent='Trilha e créditos';credits.append(title);
      for(const track of audio.state().tracks){const p=document.createElement('p');p.textContent=track.title+' — '+track.author+' · '+track.license;credits.append(p);}
      const link=document.createElement('a');link.href='entrega-escolar/CREDITOS-AUDIO.txt';link.target='_blank';link.rel='noopener';link.textContent='Fontes e licença das quatro faixas';credits.append(link);
      const extras=[];
      for(const [key,title,setter] of [['voiceVolume','Volume das vozes','setVoiceVolume'],['effectsVolume','Volume dos efeitos','setEffectsVolume']]) {
        const label=document.createElement('label');label.append(title+' ');
        const output=document.createElement('output');output.textContent=Math.round((audio.state()[key]??.5)*100)+'%';
        const input=document.createElement('input');input.type='range';input.min='0';input.max='100';input.value=String(Math.round((audio.state()[key]??.5)*100));input.setAttribute('aria-label',title);
        input.oninput=()=>{audio[setter]?.(Number(input.value)/100);output.textContent=input.value+'%';};
        label.append(output,input);extras.push(label);
      }
      if(typeof audio.previewVoice==='function'){
        const previewName=D.names[currentEco]||D.names[S.room]||'Anata';
        const previewStatus=document.createElement('p');previewStatus.className='hint';previewStatus.setAttribute('role','status');
        const preview=btn('Testar voz de '+previewName,async()=>{
          if(audio.state().muted||audio.state().voiceVolume===0){previewStatus.textContent='Ative o áudio e aumente o volume das vozes para ouvir a amostra.';return;}
          preview.disabled=true;
          try{const played=await audio.previewVoice(previewName);previewStatus.textContent=played?'Amostra da voz. O jogo continua pausado.':'Toque novamente para liberar o som neste navegador.';}
          finally{preview.disabled=false;}
        });
        extras.push(preview,previewStatus);
      }
      sound.append(volumeLabel,...extras,muteLabel,credits);wrap.append(sound);
    }
    wrap.append(btn('Continuar', closeModal), btn('Exportar partida', () => {
      save();
      const a = document.createElement('a');
      const u = URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], {
        type: 'application/json'
      }));
      a.href = u;
      a.download = 'sentia-partida.json';
      a.click();
      setTimeout(() => URL.revokeObjectURL(u), 1000);
    }), btn('Salvar e voltar ao site', () => {
      save();
      location.href = 'index.html#jardim';
    }));
    modal(wrap);
  }
  function inventory() {
    if(mode==='menu')return;
    const wrap = document.createElement('div');
    const h = document.createElement('h2');
    h.textContent = 'O que ficou com você';
    wrap.append(h);
    const itemNames = {
      espada: ['Espada de fogo', 'Orgulho ofereceu proteção. A escolha de como usá-la continua sendo do protagonista.'],
      escudo: ['Escudo de fogo', 'Visto pelo lado interno. Segure Proteger para reduzir impactos na arena.'],
      luz: ['Luz de Sugar', dead('amor') ? 'Ela ofereceu algo que podia ser levado sem arrancar de alguém.' : 'Uma luz recebida de Sugar. Na arena, Q ou Luz dispara.'],
      faca: ['Faca vermelha', 'Retirada da moldura após a morte de Determinação. Os outros conhecem esse objeto.'],
      lanterna:['Lanterna','Recolhida junto à entrada de Hunger. Pode ser segurada durante a exploração.'],
      'chave-sanidade': ['Chave de Sanidade', 'Uma das duas chaves do último portão.'],
      'chave-insanidade': ['Chave de Insanidade', 'A outra orientação transformada em objeto.']
    };
    const bag = document.createElement('div');
    bag.className = 'bag-list';
    if (!S.items.length) {
      const p = document.createElement('p');
      p.textContent = 'Sua bolsa ainda está vazia.';
      bag.append(p);
    }
    S.items.forEach(id => {
      const item = document.createElement('article');
      item.className = 'bag-item';
      const t = document.createElement('div'),
        h3 = document.createElement('h3'),
        p = document.createElement('p');
      h3.textContent = itemNames[id]?.[0] || id;
      p.textContent = itemNames[id]?.[1] || 'Um objeto do Jardim.';
      t.append(h3, p);
      item.append(t);
      const icon={espada:'espada-fogo',escudo:'escudo-fogo',luz:'luz-amor',faca:'faca-vermelha'}[id]||id;
      const iconSource=asset('/01-Itens-64/'+icon+'.png')||asset('/03-Objetos-Extras-64/'+icon+'.png');
      if(iconSource){const image=document.createElement('img');image.src=iconSource;image.alt='';image.className='bag-icon';item.prepend(image);}
      const examine=btn('Observar',()=>{
        const content=ObservacaoSentia.itemPanel({id,name:itemNames[id]?.[0]||id,description:itemNames[id]?.[1]||'Um objeto do Jardim.',sprite:iconSource,
          sound:kind=>window.AudioSentia?.spatialCue?.(kind,{ui:true}),onBack:inventory,
          onObserve:(detail,text)=>{S.flags['item-inspected-'+id]=true;note('Detalhe: '+(itemNames[id]?.[0]||id)+' · '+detail,text,{item:id,source:'Inventário'});save();}});
        modal(content);window.AudioSentia?.spatialCue?.('inspect',{ui:true});
      });examine.dataset.inspectItem=id;item.append(examine);
      if(['espada','escudo','faca','luz','lanterna','chave-sanidade','chave-insanidade'].includes(id)) item.append(btn(S.flags.equipped===id?'Equipado':'Equipar',()=>{
        S.flags.equipped=id;save();if(mode==='explore') explorationHands();if(mode==='arena') Arena.equip(id);closeModal();
      }));
      bag.append(item);
    });
    wrap.append(bag, btn('Guardar equipamento',()=>{delete S.flags.equipped;save();if(mode==='explore') explorationHands();if(mode==='arena')Arena.equip(null);closeModal();}),btn('Voltar', closeModal));
    modal(wrap);
    window.AudioSentia?.spatialCue?.('bag',{ui:true});
  }
  function journal() {
    if(mode==='menu')return;
    const wrap = document.createElement('div');
    const h = document.createElement('h2');
    h.textContent = 'Registro de descobertas';
    wrap.append(h);
    const intro=document.createElement('p');intro.className='hint';intro.textContent='O protagonista escreve a própria interpretação. Abra uma anotação para conferir também o que realmente foi observado.';
    const filters=document.createElement('div');filters.className='journal-toolbar';
    const search=document.createElement('input');search.type='search';search.placeholder='Buscar uma lembrança…';search.setAttribute('aria-label','Buscar no registro');
    const onlyNew=btn('Mostrar apenas novas',()=>{newOnly=!newOnly;onlyNew.setAttribute('aria-pressed',String(newOnly));onlyNew.textContent=newOnly?'Mostrar todas':'Mostrar apenas novas';renderEntries();});onlyNew.setAttribute('aria-pressed','false');
    const markAll=btn('Marcar todas como lidas',()=>{S.flags.journalRead=S.log.map(entryId);save();renderEntries();window.AudioSentia?.spatialCue?.('page',{ui:true});});
    const list=document.createElement('div');list.className='journal-list';let newOnly=false;
    function renderEntries(){
      const query=search.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
      const readIds=journalReadIds();
      const entries=S.log.map((entry,index)=>({entry,id:entryId(entry,index)})).reverse().filter(({entry,id})=>(!newOnly||!readIds.includes(id))&&(entry.title+' '+entry.text+' '+(entry.voice||'')).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));
      list.replaceChildren();
      if(!entries.length){const empty=document.createElement('p');empty.textContent=S.log.length?'Nenhuma anotação neste filtro.':'Observe os lugares. O que encontrar será registrado aqui.';list.append(empty);}
      for(const {entry,id} of entries){
        const details=document.createElement('details');details.className='journal-entry';details.dataset.entryId=id;
        const summary=document.createElement('summary');summary.textContent=entry.title;
        const unread=!readIds.includes(id);details.classList.toggle('unread',unread);
        const tag=document.createElement('span');tag.className='journal-new';tag.textContent='NOVO';tag.hidden=!unread;summary.append(tag);details.append(summary);
        if(entry.voice){const label=document.createElement('p');label.className='journal-source';label.textContent='Escrito pelo protagonista';const voice=document.createElement('p');voice.className='journal-voice';voice.textContent=entry.voice;details.append(label,voice);}
        const evidence=document.createElement('div');evidence.className='journal-evidence';const label=document.createElement('strong');label.textContent=entry.voice?'O que foi observado':'Registro do acontecimento';const fact=document.createElement('p');fact.textContent=entry.text;evidence.append(label,fact);details.append(evidence);
        details.addEventListener('toggle',()=>{if(!details.open)return;if(!journalReadIds().includes(id)){S.flags.journalRead.push(id);save();tag.hidden=true;details.classList.remove('unread');}window.AudioSentia?.spatialCue?.('page',{ui:true});});
        list.append(details);
      }
      onlyNew.disabled=!S.log.length;markAll.disabled=!S.log.some((entry,index)=>!journalReadIds().includes(entryId(entry,index)));
    }
    search.oninput=renderEntries;filters.append(search,onlyNew,markAll);wrap.append(intro,filters);renderEntries();
    wrap.append(list, btn('Voltar', closeModal));
    modal(wrap);
    $('#journal-notice')?.setAttribute('hidden','');
    window.AudioSentia?.spatialCue?.('page',{ui:true});
  }
  $('#pause-button').onclick = pauseMenu;
  $('#inventory-button').onclick = inventory;
  $('#journal-button').onclick = journal;
  $('#game-modal').addEventListener('cancel', e => {
    e.preventDefault();
    if (mode !== 'menu') closeModal();
  });
  function resume() {
    window.AudioSentia?.setScene(S.phase);
    closeModal();
    const table = {
      explore: () => S.room ? renderRoom() : hub(),
      watch: watchStart,
      fearChase: () => chaseStart('medo', Math.min(7, S.checkpoint || 0)),
      fearRoom,
      ninfa: () => {
        ninfaErrors = 0;
        ninfaConsecutive = 0;
        ninfaStart(Math.min(5, S.checkpoint || 0));
      },
      odio: () => startArena(false),
      comics: () => comics(Math.min(2, S.checkpoint || 0)),
      arena: () => startArena(true),
      candy: candyFinal,
      stairs,
      maze: () => mazeStart(0),
      insaneChase: insaneChaseIntro,
      interrogation,
      revelation,
      keys: generalKeys,
      gate,
      ending,
      complete: () => location.href = 'index.html#home'
    };
    table[S.phase]();
  }
  function menu() {
    resetScene();
    mode = 'menu';
    background(asset('/01-Entrada/01-portal.png'));
    const stored = read('sentia-garden-v4', null);
    S = valid(stored) ? stored : fresh();
    updateJournalBadge();
    updateGestureControl();
    settings = {
      ...settings,
      ...read('sentia-game-settings', {}),
      device: read('sentia-device', 'pc')
    };
    if (!['pc', 'mobile'].includes(settings.device)) settings.device = 'pc';
    saveSettings();
    const wrap = document.createElement('div');
    wrap.innerHTML = '<p class="eyebrow">SENTIA APRESENTA</p><h1>Jardim<br>dos Ecos.</h1><p>Uma história sobre o que tentamos calar e o que continua aqui.</p><p class="hint">Terror psicológico, mortes e sustos. Você conduz o protagonista, mas pode não querer o mesmo que ele.</p><label for="start-device">Antes de entrar, escolha seus controles</label><select id="start-device"><option value="pc">PC · teclado e mouse</option><option value="mobile">Celular · toque</option></select>';
    wrap.querySelector('select').value = settings.device;
    wrap.querySelector('select').onchange = e => {
      settings.device = e.target.value;
      saveSettings();
    };
    const has = valid(stored);
    if (has && !S.complete) wrap.append(btn('Continuar partida', resume));
    wrap.append(btn(has ? 'Começar outra partida' : 'Começar', () => {
      if (has && !confirm('Começar outra partida substitui o progresso local. Exporte o save pela pausa se quiser guardá-lo.')) return;
      S = fresh();
      save();
      closeModal();
      intro();
    }));
    const imp = document.createElement('input');
    imp.type = 'file';
    imp.accept = '.json,application/json';
    imp.hidden = true;
    imp.onchange = async () => {
      try {
        const file = imp.files[0];
        if (!file || file.size > 2e6) throw Error();
        const parsed = JSON.parse(await file.text());
        if (!valid(parsed)) throw Error();
        S = parsed;
        save();
        resume();
      } catch {
        const p = document.createElement('p');
        p.textContent = 'Esse arquivo não é uma partida válida do SENTIA V4.';
        wrap.append(p);
      }
    };
    wrap.append(btn('Importar partida', () => imp.click()), imp);
    const back = document.createElement('a');
    back.href = 'index.html#jardim';
    back.textContent = ' Voltar ao SENTIA';
    wrap.append(back);
    modal(wrap);
  }
  function intro() {
    resetScene();
    background(asset('/01-Entrada/02-caminho.png'));
    say(null, [['Jardim', 'A passagem parece menor depois que você atravessa. O caminho continua, mesmo quando você olha para trás.'], ['Você', 'Se eu não precisasse disso, ninguém poderia usar contra mim.'], ['Jardim', 'Há vozes adiante. Antes de qualquer conclusão, há alguém para conhecer.']], () => {
      const p = panel('Explore no seu ritmo', 'Converse com cada morador antes de explorar o quarto. Depois, use as setinhas e toque nos objetos do cenário. Novas pistas abrem assuntos nas conversas; as indicações dos moradores liberam outros quartos. Sanidade sobe nos quartos positivos e cai nos negativos. Sugar só poderá ajudar depois que vocês se conhecerem.');
      p.append(btn('Conhecer o Jardim', hub));
    });
  }
  function keyAction(key) {
    if(qte?.expected==='hold'&&key===' ')return 'hold';
    if(qte?.expected==='push'&&['w','ArrowUp'].includes(key))return 'push';
    if (qte?.expected === 'back' && ['ArrowDown', 's'].includes(key)) return 'back';
    if (chase?.waiting && ['ArrowUp', 'w'].includes(key)) return 'up';
    const map = {
      ArrowLeft: 'left',
      a: 'left',
      ArrowRight: 'right',
      d: 'right',
      ArrowDown: 'down',
      s: 'down',
      ArrowUp: 'center',
      w: 'center',
      ' ': 'guard',
      e: ['intercept','cross'].includes(qte?.expected)?qte.expected:'cross'
    };
    return map[key];
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      if ($('#game-modal').open) {
        if (mode !== 'menu') closeModal();
      } else pauseMenu();
      return;
    }
    if (paused || e.repeat || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if(mode==='watch'&&/^[1-8]$/.test(key)){
      e.preventDefault();document.querySelector('[data-camera="'+(Number(key)-1)+'"]')?.click();return;
    }
    if (key === 'l') {e.preventDefault();makeL();return;}
    if (key === 'i') return inventory();
    if (key === 'j') return journal();
    if (mode === 'runTutorial' && key === 'Shift') {
      retry?.();
      return;
    }
    if (mode === 'arena') {
      const moves = {
        w: 'up',
        s: 'down',
        a: 'left',
        d: 'right',
        ArrowLeft: 'turnLeft',
        ArrowRight: 'turnRight',
        Shift: 'run',
        ' ': 'guard'
      };
      if (moves[key]) {
        e.preventDefault();
        keysHeld[moves[key]] = true;
        Arena.press(moves[key], true);
      }
      if (key === 'f') Arena.action('attack');
      if (key === 'q') Arena.action('light');
      if (key === 'e') Arena.action('interact');
      return;
    }
    if ((mode === 'chase'||chase?.waiting) && key === 'b') {chase.lookingBack=!chase.lookingBack;return;}
    if (mode === 'chase' && key === 'Shift') {
      keysHeld.run = true;
      return;
    }
    if (mode === 'dialogue' && key === 'Enter' && !$('#advance').hidden && !['BUTTON', 'A'].includes(e.target.tagName)) {
      e.preventDefault();
      nextLine();
      return;
    }
    if (mode === 'prompt' && timed) {
      const action = keyAction(key);
      const buttons = [...$('#prompt-actions').querySelectorAll('button')];
      const i = buttons.findIndex(b => b.textContent.includes({
        left: 'Esquerda',
        right: 'Direita',
        center: 'Meio',
        up: 'Frente',
        down: 'Abaixar'
      }[action] || '~') || b.textContent.toLowerCase().startsWith({
        left: 'esquivar à esquerda',
        right: 'esquivar à direita',
        down: 'abaixar',
        guard: 'proteger',
        intercept: 'interceptar',
        hold: 'segurar',
        push: 'empurrar',
        back: 'recuar',
        cross: 'atravessar'
      }[action] || '~'));
      if (i >= 0) {
        e.preventDefault();
        buttons[i].click();
      }
    }
  });
  document.addEventListener('keyup', e => {
    const key = e.key.toLowerCase();
    const map = {
      w: 'up',
      s: 'down',
      a: 'left',
      d: 'right',
      arrowleft: 'turnLeft',
      arrowright: 'turnRight',
      shift: 'run',
      ' ': 'guard'
    };
    if (map[key]) {
      keysHeld[map[key]] = false;
      Arena.press(map[key], false);
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && mode !== 'menu' && !paused) pauseMenu();
  });
  window.addEventListener('blur', () => {
    keysHeld = {};
    if (mode !== 'menu' && !paused) pauseMenu();
  });
  window.addEventListener('beforeunload', () => {
    if (S) save();
  });
  // O relógio central para na pausa e quando a aba fica escondida.
  function tick(now) {
    const dt = Math.max(0, Math.min(.1, (now - loopLast) / 1000));
    loopLast = now;
    if (!paused && S) {
      if (writing && mode === 'dialogue') {
        writing.elapsed += dt;
        if (writing.elapsed >= .03) {
          writing.elapsed = Math.max(0,writing.elapsed-.03);
          $('#speech').textContent += writing.letters[writing.index++];
          voiceLetter(writing.letters[writing.index-1]);
          if (writing.index >= writing.letters.length) {
            writing=null; $('#dialogue').classList.remove('is-writing'); $('#advance').setAttribute('aria-label','Continuar');
          }
        }
      }
      S.playSeconds += dt;
      rescueCooldown = Math.max(0, rescueCooldown - dt);
      if (timed) {
        timed.left -= dt;
        if (mode === 'dialogue') $('#status').textContent = 'Resposta · ' + Math.ceil(Math.max(0, timed.left)) + ' s';
        $('#timer-fill').style.transform = 'scaleX(' + Math.max(0, timed.left / timed.total) + ')';
        if (timed.left <= 0) {
          const fn = timed.done;
          timed = null;
          fn();
        }
      }
      if (clockTask) {
        clockTask.left -= dt;
        if (clockTask.left <= 0) {
          const fn = clockTask.done;
          clockTask = null;
          fn();
        }
      }
      if (mode === 'watch' && watch) tickWatch(dt);
      if ((mode === 'chase' || (mode==='prompt'&&chase?.waiting)) && chase) tickChase(dt);
      if (mode === 'explore' && S.room && !dead(S.room)) {
        S.sanity = Math.max(0, Math.min(100, S.sanity + dt * (['tristeza', 'odio', 'medo', 'ansiedade', 'culpa'].includes(S.room) ? -1 : 2)));
        if (S.sanity === 0 && S.talks.A1 && !dead('amor') && rescueCooldown === 0) rescue(renderRoom);
      }
      if(mode==='explore') {updateSanityHUD();if($('#hands').dataset.gesture==='00-repouso')explorationHands();}
    }
    requestAnimationFrame(tick);
  }
  menu();
  requestAnimationFrame(tick);
  return {
    state: () => structuredClone(S),
    mode: () => mode,
    settings: () => ({
      ...settings
    }),
    asset,
    baseSprite,
    valid,
    runtime:()=>({writing:!!writing,watch:watch?structuredClone(watch):null,chase:chase?structuredClone(chase):null,paused})
  };
})();
