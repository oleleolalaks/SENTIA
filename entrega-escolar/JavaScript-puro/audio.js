'use strict';

// As faixas ficam locais: depois de extrair o projeto, o jogo não depende da internet para tocar.
// Os créditos e a licença de cada música estão em entrega-escolar/CREDITOS-AUDIO.txt.
window.AudioSentia = (() => {
  const tracks = Object.freeze([
    {id:'garden', title:'Dreams Become Real', file:'dreams-become-real.mp3', source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1500027', gain:.56},
    {id:'fear', title:'Zombie Chase', file:'zombie-chase.mp3', source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100005', gain:.82},
    {id:'insanity', title:'Feral Chase', file:'feral-chase.mp3', source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100229', gain:.78},
    {id:'pulse', title:'Chase Pulse', file:'chase-pulse.mp3', source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100383', gain:.8}
  ].map(track => Object.freeze({...track, author:'Kevin MacLeod (incompetech.com)', license:'CC BY 4.0', licenseURL:'https://creativecommons.org/licenses/by/4.0/'})));
  const aliases = {
    menu:'garden', explore:'garden', dialogue:'garden', normal:'garden', garden:'garden',
    ending:'garden', complete:'garden', keys:'garden', gate:'garden', stairs:'garden',
    watch:'pulse', fearChase:'fear', medo:'fear', fear:'fear', chaseFear:'fear',
    insaneChase:'insanity', insanidade:'insanity', insanity:'insanity', chaseInsanity:'insanity',
    maze:'insanity', revelation:'insanity', interrogation:'garden',
    odio:'pulse', boss:'pulse', arena:'pulse', battle:'pulse', ninfa:'insanity', tristeza:'insanity',
    comics:'pulse', candy:'garden', silence:null
  };
  let scene = 'explore', selected = 'garden', unlocked = false, paused = false;
  let volume = .45, voiceVolume = .28, effectsVolume = .45, muted = false, fade = null, generation = 0, error = '';
  let context = null, voiceBus = null, effectsBus = null, tensionBus = null, pulseTimer = null, duckTimer = null;
  let voiceDuckTimer = null, previewTimer = null, speechDucked = false, effectDucked = false, previewing = false;
  let previewGeneration = 0;
  let uiPreviewing = false, uiTimer = null, uiGeneration = 0;
  let pageHidden = document.visibilityState === 'hidden', room = null, roomTimer = null, roomGeneration = 0;
  let ambientPlayed = 0, lastAmbient = '', spatialPlayed = 0;
  let lastVoice = -Infinity, voicePlayed = 0, effectsPlayed = 0, lastVoiceProfile = null, stepSide = false;
  let tension = null, tensionLevel = 0, legacyPulse = false, pulseGeneration = 0, pulseStarts = 0;
  let pulseLastTime = 0, nextBeat = 0, nextBreath = 0, nextDrone = 0, restUntil = 0, windupPending = false;
  let pulsePlayed = 0, tensionBreaths = 0, tensionDrones = 0, tensionWindups = 0, tensionPauses = 0, tensionPhase = 'silent';
  const voices = new Set(), effects = new Set(), tensionSources = new Set(), ambience = new Set(), uiEffects = new Set(), uiPending = new Set(), lastEffect = new Map();
  try {
    const settings = JSON.parse(localStorage.getItem('sentia-audio') || '{}');
    if (Number.isFinite(settings.volume)) volume = Math.max(0, Math.min(1, settings.volume));
    muted = settings.muted === true;
    if (Number.isFinite(settings.voiceVolume)) voiceVolume = Math.max(0, Math.min(1, settings.voiceVolume));
    if (Number.isFinite(settings.effectsVolume)) effectsVolume = Math.max(0, Math.min(1, settings.effectsVolume));
  } catch { /* Se o navegador impedir o armazenamento, o controle de volume continua funcionando. */ }
  const channels = new Map();
  function musicGain(track) { return volume * track.gain * (speechDucked ? .3 : 1) * (effectDucked ? .35 : 1) * (1 - tensionLevel * .23); }
  function refreshMusicMix(amount=1) {
    if (fade !== null) return;
    channels.forEach((audio,id) => {
      if (audio.paused) return;
      const target = id === selected ? musicGain(tracks.find(track => track.id === id)) : 0;
      audio.volume = Math.max(0, Math.min(1, audio.volume + (target - audio.volume) * amount));
    });
  }
  function refreshTensionMix() {
    if (tensionBus) tensionBus.gain.setTargetAtTime(speechDucked ? .3 : effectDucked ? .55 : 1, context.currentTime, .025);
  }
  function persist() {
    try { localStorage.setItem('sentia-audio', JSON.stringify({volume, voiceVolume, effectsVolume, muted})); } catch {}
  }
  function clearFade() {
    generation++;
    if (fade !== null) clearInterval(fade);
    fade = null;
  }
  function stopChannels() {
    clearFade();
    channels.forEach(audio => { audio.pause(); audio.volume = 0; });
  }
  function channel(id) {
    if (!channels.has(id)) {
      const track = tracks.find(item => item.id === id);
      const audio = new Audio();
      audio.preload = 'none';
      audio.loop = true;
      audio.volume = 0;
      audio.src = new URL('assets/audio/' + track.file, document.baseURI).href;
      audio.addEventListener('error', () => {
        error = 'Não foi possível carregar a faixa ' + track.title + '. Confira a pasta assets/audio.';
      });
      channels.set(id, audio);
    }
    return channels.get(id);
  }
  // A música anterior baixa enquanto a próxima entra. A troca não reinicia uma faixa que já está tocando.
  async function playSelected(duration = .75) {
    if (!unlocked || paused || muted || pageHidden || volume === 0 || !selected) {
      stopChannels();
      return false;
    }
    clearFade();
    const token = generation, id = selected, audio = channel(id);
    try {
      await audio.play();
      if (token !== generation) {
        if (selected !== id || paused || muted || pageHidden || volume === 0) audio.pause();
        return false;
      }
      error = '';
      audio.playbackRate = sceneRate();
      if ('preservesPitch' in audio) audio.preservesPitch = true;
      const beginnings = new Map([...channels].map(([key, item]) => [key, item.volume]));
      const start = performance.now();
      fade = setInterval(() => {
        if (token !== generation) return;
        const progress = Math.min(1, Math.max(0, (performance.now() - start) / (duration * 1000)));
        channels.forEach((item, key) => {
          const final = key === id ? musicGain(tracks.find(track => track.id === id)) : 0;
          item.volume = Math.max(0, Math.min(1, beginnings.get(key) + (final - beginnings.get(key)) * progress));
        });
        if (progress === 1) {
          clearInterval(fade); fade = null;
          channels.forEach((item, key) => { if (key !== id) item.pause(); });
        }
      }, 25);
      return true;
    } catch (exception) {
      if (token === generation) error = exception.name === 'NotAllowedError'
        ? 'Toque em um controle do jogo para iniciar o áudio.'
        : 'A faixa não pôde começar. Confira os arquivos de áudio.';
      return false;
    }
  }
  async function unlock() {
    unlocked = true;
    ensureSynth();
    if (!pageHidden && context?.state === 'suspended') { try { await context.resume(); } catch {} }
    startPulse();
    startRoom();
    return playSelected(.25);
  }
  function setScene(value) {
    const key = Object.prototype.hasOwnProperty.call(aliases, value) ? aliases[value] : 'garden';
    const previous = scene;
    scene = value;
    if (previous !== scene) { stopVoice(); legacyPulse = scene === 'maze' && !tension; startPulse(); }
    if (selected === key) { const current = channels.get(key); if (current) current.playbackRate = sceneRate(); return; }
    selected = key;
    void playSelected();
  }
  function setVolume(value) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return;
    volume = Math.max(0, Math.min(1, parsed));
    persist();
    void playSelected(.15);
  }
  function setMuted(value) {
    muted = Boolean(value);
    persist();
    if (muted) { stopChannels(); stopSynth(); }
    else if (unlocked && !paused && !pageHidden) resume();
    else { startPulse(); startRoom(); void playSelected(.25); }
  }
  function pause() {
    paused = true;
    stopChannels();
    stopSynth();
    if (context?.state === 'running') void context.suspend().then(() => {
      if (!paused && !muted && !pageHidden) resume();
    }).catch(() => {});
  }
  function resume() {
    paused = false;
    stopVoice(); stopUi();
    if (unlocked && !pageHidden && context?.state === 'suspended') void context.resume().then(() => { startPulse(); startRoom(); }).catch(() => {});
    else { startPulse(); startRoom(); }
    void playSelected(.25);
  }

  // Vozes e efeitos são síntese original do jogo. Não usam gravações de fala nem arquivos externos.
  function sceneRate() { return scene === 'maze' ? 1.16 : scene === 'insaneChase' ? 1.07 : 1; }
  function ensureSynth() {
    if (context || !unlocked) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    try {
      context = new AudioContextClass();
      const master = context.createGain(); master.gain.value = .45;
      const limiter = context.createDynamicsCompressor();
      limiter.threshold.value = -15; limiter.knee.value = 12; limiter.ratio.value = 8;
      limiter.attack.value = .003; limiter.release.value = .12;
      voiceBus = context.createGain(); effectsBus = context.createGain(); tensionBus = context.createGain();
      voiceBus.gain.value = voiceVolume; effectsBus.gain.value = effectsVolume;
      voiceBus.connect(master); effectsBus.connect(master); tensionBus.connect(effectsBus); master.connect(limiter); limiter.connect(context.destination);
    } catch { context = null; }
  }
  function allowed(group) {
    return unlocked && !pageHidden && (!paused || (group === 'voice' && previewing) || (group === 'ui' && uiPreviewing)) && !muted && context?.state === 'running' && (group === 'voice' ? voiceVolume > 0 : effectsVolume > 0);
  }
  function removeNode(entry, group) {
    group.delete(entry);
    try { entry.source.disconnect(); entry.gain.disconnect(); entry.filter.disconnect(); entry.panner?.disconnect(); } catch {}
  }
  function stopGroup(group) {
    for (const entry of [...group]) {
      try { entry.source.stop(); } catch {}
      removeNode(entry, group);
    }
  }
  function releaseVoiceDuck() {
    if (voiceDuckTimer !== null) clearTimeout(voiceDuckTimer);
    voiceDuckTimer = null;
    const wasDucked = speechDucked;
    speechDucked = false;
    refreshTensionMix();
    if (wasDucked && !paused && !muted) void playSelected(.18);
  }
  function duckForVoice() {
    speechDucked = true;
    refreshTensionMix();
    channels.forEach((audio,id) => { audio.volume = Math.min(audio.volume, musicGain(tracks.find(track => track.id === id))); });
    if (voiceDuckTimer !== null) clearTimeout(voiceDuckTimer);
    voiceDuckTimer = setTimeout(releaseVoiceDuck, 150);
  }
  function stopVoice() {
    previewGeneration++;
    stopGroup(voices); lastVoice = -Infinity;
    if (previewTimer !== null) clearTimeout(previewTimer);
    previewTimer = null;
    const wasPreviewing = previewing; previewing = false;
    releaseVoiceDuck();
    if (wasPreviewing && paused && !uiPreviewing && context?.state === 'running') void context.suspend().catch(() => {});
  }
  function stopUi(suspend=false) {
    uiGeneration++; uiPending.clear();
    if (uiTimer !== null) clearTimeout(uiTimer);
    uiTimer = null; uiPreviewing = false;
    stopGroup(uiEffects);
    if (suspend && paused && !previewing && context?.state === 'running') void context.suspend().catch(() => {});
  }
  function stopSynth() {
    stopUi(); stopVoice(); stopGroup(effects);
    stopRoom();
    stopPulse();
    if (duckTimer !== null) clearTimeout(duckTimer);
    pulseTimer = null; duckTimer = null; effectDucked = false;
    refreshTensionMix();
  }
  function emit({frequency=180, end=frequency, duration=.1, delay=0, amplitude=.08, wave='sine', group='effects', cutoff=1100, noise=false, pan=0, distance=1, attack=.006}) {
    if (!allowed(group)) return false;
    const pool = group === 'voice' ? voices : group === 'ambient' ? ambience : group === 'ui' ? uiEffects : group === 'tension' ? tensionSources : effects;
    const active = voices.size + effects.size + uiEffects.size + tensionSources.size;
    // A camada contínua reserva espaço para a fala e para os avisos de combate.
    if (pool.size >= (group === 'voice' ? 3 : group === 'ambient' ? 3 : group === 'ui' || group === 'tension' ? 4 : 8) || active >= 8 || (group === 'tension' && active >= 5)) return false;
    const now = context.currentTime + Math.max(0, Math.min(.4, delay));
    const length = Math.max(group==='voice'?.018:.025, Math.min(group==='ambient'?2.4:group==='tension'?1.3:.65, duration));
    const gain = context.createGain(), filter = context.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = Math.max(100, Math.min(1800, cutoff)); filter.Q.value = .6;
    let source;
    if (noise) {
      source = context.createBufferSource();
      const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * length), context.sampleRate);
      const values = buffer.getChannelData(0);
      for (let i = 0; i < values.length; i++) values[i] = (Math.random() * 2 - 1) * (1 - i / values.length);
      source.buffer = buffer;
    } else {
      source = context.createOscillator(); source.type = wave;
      source.frequency.setValueAtTime(Math.max(35, Math.min(800, frequency)), now);
      source.frequency.exponentialRampToValueAtTime(Math.max(35, Math.min(800, end)), now + length);
    }
    const depth = Math.max(1, Math.min(8, Number(distance) || 1));
    const peak = Math.max(0, Math.min(group==='ambient'?.07:.18, amplitude)) / (1 + (depth - 1) * .55);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(peak, now + Math.min(Math.max(.003, attack), length / 3));
    if (group === 'voice') gain.gain.setValueAtTime(peak * .85, now + length * .42);
    gain.gain.exponentialRampToValueAtTime(.0001, now + length);
    source.connect(filter); filter.connect(gain);
    const bus = group === 'voice' ? voiceBus : group === 'tension' ? tensionBus : effectsBus;
    let panner = null;
    if (pan && context.createStereoPanner) {
      panner = context.createStereoPanner(); panner.pan.value = Math.max(-.4, Math.min(.4, pan));
      gain.connect(panner); panner.connect(bus);
    } else if (pan && context.createPanner) {
      // Mesmo volume no fallback; só a direção muda entre os canais.
      panner = context.createPanner(); panner.panningModel = 'equalpower'; panner.rolloffFactor = 0;
      const angle = Math.max(-.4, Math.min(.4, pan)) * Math.PI / 2;
      if (panner.positionX) {
        panner.positionX.value = Math.sin(angle); panner.positionY.value = 0; panner.positionZ.value = -Math.cos(angle);
      } else panner.setPosition(Math.sin(angle), 0, -Math.cos(angle));
      gain.connect(panner); panner.connect(bus);
    } else gain.connect(bus);
    const entry = {source, gain, filter, panner}; pool.add(entry);
    source.addEventListener('ended', () => removeNode(entry, pool), {once:true});
    source.start(now); source.stop(now + length + (group==='voice'?.01:.015));
    return true;
  }
  // Pequenos acontecimentos espaçados dão presença aos cômodos sem criar outra trilha em loop.
  const roomSounds = {
    felicidade:['pollen','air'], amor:['pollen','air'], tristeza:['water','creaks'],
    orgulho:['embers','creaks'], determinacao:['air','distantsteps'], calma:['water','air'],
    ansiedade:['distantsteps','air'], culpa:['creaks','water'], medo:['air','distantsteps'],
    odio:['embers','creaks'], jardim:['pollen','air'], praca:['water','air'],
    sanidade:['air','water'], insanidade:['creaks','distantsteps']
  };
  function stopRoom() {
    roomGeneration++;
    if (roomTimer !== null) clearTimeout(roomTimer);
    roomTimer = null;
    stopGroup(ambience);
  }
  function clearRoom() { stopRoom(); room = null; lastAmbient = ''; }
  function setRoom(id, view=0, options={}) {
    if (id === null || id === undefined || id === '') { clearRoom(); return; }
    const next = {id:String(id), view:((Math.trunc(Number(view) || 0) % 4) + 4) % 4, dead:options.dead === true, reduced:options.reduced === true};
    if (room && Object.keys(next).every(key => room[key] === next[key])) return;
    room = next;
    startRoom();
  }
  function roomSound(kind, pan, distance) {
    const softness = room?.reduced ? .65 : 1;
    let result = false;
    const tone = options => { result = emit({...options, amplitude:(options.amplitude || .04) * softness, group:'ambient', pan, distance}) || result; };
    if (kind === 'air') tone({noise:true,duration:1.7,attack:.35,amplitude:.06,cutoff:490});
    else if (kind === 'pollen') {
      tone({noise:true,duration:1.1,attack:.25,amplitude:.035,cutoff:720});
      tone({frequency:245 + Math.random()*45,end:230,duration:.46,delay:.18,attack:.06,amplitude:.022,cutoff:650});
    } else if (kind === 'water') {
      const pitch = 270 + Math.random()*90;
      tone({frequency:pitch,end:pitch*.7,duration:.19,attack:.008,amplitude:.058,cutoff:900});
      tone({noise:true,duration:.4,delay:.14,attack:.06,amplitude:.032,cutoff:780});
    } else if (kind === 'embers') {
      tone({noise:true,duration:.12,attack:.008,amplitude:.044,cutoff:670});
      tone({frequency:75,end:54,duration:.38,attack:.04,amplitude:.035,cutoff:240});
    } else if (kind === 'creaks') {
      tone({frequency:135 + Math.random()*25,end:96,duration:.46,attack:.09,amplitude:.046,wave:'triangle',cutoff:420});
      tone({noise:true,duration:.35,delay:.08,attack:.08,amplitude:.023,cutoff:400});
    } else if (kind === 'distantsteps') {
      tone({noise:true,duration:.095,amplitude:.06,cutoff:330});
      tone({frequency:84,end:58,duration:.13,amplitude:.045,cutoff:190});
      tone({noise:true,duration:.1,delay:.29,amplitude:.043,cutoff:350});
    }
    if (result) { ambientPlayed++; lastAmbient = kind; }
  }
  function startRoom() {
    stopRoom();
    if (!room || !allowed('ambient')) return;
    const token = roomGeneration;
    const schedule = initial => {
      const spacing = (room.reduced ? 4700 : 2900) + Math.random()*2500 + (room.dead ? 900 : 0);
      roomTimer = setTimeout(() => {
        roomTimer = null;
        if (token !== roomGeneration || !room || !allowed('ambient')) return;
        const choices = room.dead ? ['air','creaks'] : roomSounds[room.id] || ['air','creaks'];
        const kind = choices[Math.floor(Math.random()*choices.length)];
        const sourceAngle = (choices.indexOf(kind) ? 1.1 : -.8) - room.view*Math.PI/2;
        roomSound(kind, Math.sin(sourceAngle)*.34, kind==='distantsteps'?3.4:1.5);
        schedule(false);
      }, initial ? 900 + Math.random()*500 : spacing);
    };
    schedule(true);
  }
  function spatialCue(kind, options={}) {
    if (kind && typeof kind === 'object') { options = kind; kind = options.kind; }
    const isUi = options.ui === true && paused;
    if (!allowed('effects') && !(isUi && unlocked && !muted && !pageHidden && effectsVolume > 0 && context)) return false;
    const key = String(kind);
    const intervals = {inspect:.28,item:.55,notification:.6,page:.18,bag:.24,turn:.12,door:.6,enter:.8};
    if (!Object.prototype.hasOwnProperty.call(intervals,key)) return false;
    const now = context.currentTime, timerKey = 'spatial:' + key;
    if (now - (lastEffect.get(timerKey) ?? -Infinity) < intervals[key]) return false;
    lastEffect.set(timerKey, now);
    const pan = Number(options.pan) || 0, distance = Number(options.distance) || 1;
    const closing = options.variant === 'close';
    const token = uiGeneration;
    const play = () => {
    if (isUi) {
      if (token !== uiGeneration || !paused || muted || pageHidden || effectsVolume === 0) return false;
      uiPreviewing = true;
    }
    let result = false;
    const tone = values => { result = emit({...values,pan,distance,group:isUi?'ui':'effects'}) || result; };
    if (key === 'item') {
      [261.63,329.63,392].forEach((frequency,index) => tone({frequency,end:frequency*.99,duration:.17,delay:index*.065,amplitude:.065,cutoff:1000}));
    } else if (key === 'notification') {
      tone({frequency:369.99,end:349.23,duration:.14,amplitude:.055,cutoff:850});
      tone({frequency:293.66,end:277.18,duration:.18,delay:.13,amplitude:.045,cutoff:750});
    } else if (key === 'inspect') {
      tone({frequency:196,end:220,duration:.09,amplitude:.05,cutoff:750});
      tone({frequency:261.63,end:246.94,duration:.13,delay:.07,amplitude:.04,cutoff:850});
    } else if (key === 'page') {
      tone({noise:true,duration:.13,attack:.018,amplitude:.085,cutoff:950});
      tone({noise:true,duration:.09,delay:.09,amplitude:.045,cutoff:650});
    } else if (key === 'bag') {
      tone({noise:true,duration:.16,attack:.022,amplitude:.075,cutoff:closing?520:700});
      tone({frequency:closing?145:120,end:closing?105:155,duration:.12,delay:.05,amplitude:.04,cutoff:420});
    } else if (key === 'turn') tone({noise:true,duration:.09,attack:.012,amplitude:.055,cutoff:650});
    else if (key === 'door') {
      tone({frequency:closing?135:115,end:closing?90:155,duration:.3,attack:.045,amplitude:.07,wave:'triangle',cutoff:420});
      tone({noise:true,duration:.13,delay:closing?.2:0,amplitude:.07,cutoff:430});
    } else if (key === 'enter') tone({noise:true,duration:.55,attack:.1,amplitude:.055,cutoff:600});
    if (result) { effectsPlayed++; spatialPlayed++; }
    if (isUi) {
      if (uiTimer !== null) clearTimeout(uiTimer);
      uiTimer = setTimeout(() => stopUi(true), 750);
    }
    return result;
    };
    if (isUi && context.state === 'suspended') {
      if (uiPending.size >= 3) return false;
      const pending = {}; uiPending.add(pending);
      void context.resume().then(() => {
        uiPending.delete(pending);
        const played = play();
        if (!played && (paused || pageHidden || muted) && !uiPreviewing && !previewing && uiPending.size === 0 && context.state === 'running') void context.suspend().catch(() => {});
      }).catch(() => { uiPending.delete(pending); });
      return true;
    }
    return play();
  }
  const profiles = {
    sunny:[380,'triangle'], felicidade:[380,'triangle'], sugar:[550,'sine'], candy:[550,'sine'], amor:[550,'sine'],
    ninfa:[290,'sine'], tristeza:[290,'sine'], aurea:[430,'triangle'], orgulho:[430,'triangle'],
    friska:[230,'triangle'], determinacao:[230,'triangle'], pax:[205,'sine'], calma:[205,'sine'],
    hermes:[490,'triangle'], ansiedade:[490,'triangle'], lumen:[325,'sine'], culpa:[325,'sine'],
    hunger:[125,'sawtooth'], medo:[125,'sawtooth'], beerus:[105,'triangle'], odio:[105,'triangle'],
    cassidy:[410,'sine'], sanidade:[410,'sine'], mizzery:[160,'sawtooth'], insanidade:[160,'sawtooth'],
    anata:[250,'triangle'], neutralidade:[250,'triangle'], jardim:[255,'sine'], voce:[300,'triangle']
  };
  function voice(letter, speaker='Jardim') {
    const character = String(letter || '').charAt(0);
    if (!/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/u.test(character) || !allowed('voice')) return false;
    const now = context.currentTime;
    // Agenda até dois caracteres de um mesmo frame sem perder os bipes, mas não acumula fala ao pular texto.
    const scheduled = Math.max(now, lastVoice + .03);
    if (scheduled - now > .075) return false;
    const name = String(speaker).normalize('NFD').replace(/[̀-ͯ]/g, '').toLocaleLowerCase('pt-BR');
    const profile = profiles[name] || [280,'sine'];
    const semitones = ((character.toLocaleLowerCase('pt-BR').charCodeAt(0) % 7) - 3) * .45;
    const frequency = profile[0] * Math.pow(2, semitones / 12);
    // A fala precisa sobressair à música; a trilha baixa só enquanto há letras sendo escritas.
    const done = emit({group:'voice',frequency,end:frequency*.98,duration:.034,delay:scheduled-now,amplitude:profile[1]==='sawtooth'?.14:.16,wave:profile[1],cutoff:profile[1]==='sawtooth'?600:profile[1]==='triangle'?1050:1200});
    if (done) { lastVoice = scheduled; voicePlayed++; lastVoiceProfile = {speaker:String(speaker),frequency:Math.round(frequency),wave:profile[1]}; if (!previewing) duckForVoice(); }
    return done;
  }
  async function previewVoice(speaker='Anata') {
    stopVoice();
    const token = previewGeneration;
    if (muted || pageHidden || voiceVolume === 0) return false;
    await unlock();
    if (token !== previewGeneration || muted || voiceVolume === 0 || context?.state !== 'running') return false;
    previewing = true;
    const accepted = voice('a',speaker);
    // Três bipes curtos permitem conferir o volume sem tirar o jogo da pausa.
    if (accepted) {
      const profile = lastVoiceProfile;
      emit({group:'voice',frequency:profile.frequency*1.06,duration:.055,delay:.085,amplitude:.16,wave:profile.wave});
      emit({group:'voice',frequency:profile.frequency*.97,duration:.055,delay:.18,amplitude:.16,wave:profile.wave});
    }
    previewTimer = setTimeout(stopVoice, 280);
    return accepted;
  }
  function setVoiceVolume(value) {
    const number = Number(value); if (!Number.isFinite(number)) return;
    voiceVolume = Math.max(0, Math.min(1, number)); persist();
    if (voiceBus) voiceBus.gain.setTargetAtTime(voiceVolume, context.currentTime, .015);
    if (voiceVolume === 0) stopVoice();
  }
  function setEffectsVolume(value) {
    const number = Number(value); if (!Number.isFinite(number)) return;
    effectsVolume = Math.max(0, Math.min(1, number)); persist();
    if (effectsBus) effectsBus.gain.setTargetAtTime(effectsVolume, context.currentTime, .015);
    if (effectsVolume === 0) {
      stopGroup(effects); stopUi(true); stopRoom(); stopPulse();
      if (duckTimer !== null) clearTimeout(duckTimer);
      duckTimer = null; effectDucked = false; refreshTensionMix(); refreshMusicMix();
    }
    else { startPulse(); startRoom(); }
  }
  function unit(value, fallback=0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.max(0, Math.min(1, parsed)) : fallback;
  }
  function pulseProfile() {
    return tension || (legacyPulse && scene === 'maze' ? {value:.65,kind:'chase',proximity:.55,health:1,charging:false} : null);
  }
  function stopPulse() {
    pulseGeneration++;
    if (pulseTimer !== null) clearInterval(pulseTimer);
    pulseTimer = null;
    stopGroup(tensionSources);
    tensionLevel = 0; tensionPhase = 'silent';
    restUntil = 0; windupPending = false;
    refreshMusicMix();
  }
  // O motor só fornece perigo/distância/vida. Um único relógio cria o ritmo, sem reiniciar a cada quadro.
  function setTension(value, options={}) {
    const amount = unit(value);
    if (!amount) { clearTension(); return; }
    if (!options || typeof options !== 'object') options = {};
    const next = {
      value:amount, kind:['boss','chase','ninfa'].includes(options.kind) ? options.kind : 'chase',
      proximity:unit(options.proximity), health:unit(options.health, 1), charging:options.charging === true
    };
    const previous = tension;
    if (previous && Object.keys(next).every(key => next[key] === previous[key])) { startPulse(); return; }
    tension = next; legacyPulse = false;
    if (previous && previous.kind !== next.kind) stopPulse();
    if (next.charging && !previous?.charging && allowed('tension')) {
      // A respiração prende por um instante; o aviso do golpe tem espaço antes do grave subir.
      stopGroup(tensionSources); restUntil = context.currentTime + .28; windupPending = true;
      nextBeat = restUntil + .32;
    } else if (previous?.charging && !next.charging) {
      restUntil = 0; windupPending = false;
      if (context) { nextBeat = context.currentTime + .12; nextBreath = context.currentTime + .9; }
    }
    startPulse();
  }
  function clearTension() {
    tension = null; legacyPulse = false;
    stopPulse();
  }
  function startPulse() {
    if (!pulseProfile() || !allowed('tension')) { stopPulse(); return; }
    if (pulseTimer !== null) return;
    const token = pulseGeneration;
    pulseStarts++;
    pulseLastTime = context.currentTime;
    nextBeat = pulseLastTime + .2; nextBreath = pulseLastTime + 1.1; nextDrone = pulseLastTime + .4;
    if (pulseProfile().charging) { restUntil = pulseLastTime + .28; windupPending = true; }
    pulseTimer = setInterval(() => {
      if (token !== pulseGeneration) return;
      const profile = pulseProfile();
      if (!profile || !allowed('tension')) { stopPulse(); return; }
      const now = context.currentTime, dt = Math.min(.25, Math.max(0, now - pulseLastTime));
      pulseLastTime = now;
      const target = Math.min(1, profile.value * (.68 + profile.proximity * .27 + (1 - profile.health) * .15));
      // O perigo aproxima em cerca de um segundo e dá alívio mais devagar, sem saltos de volume.
      tensionLevel += (target - tensionLevel) * (1 - Math.exp(-dt / (target > tensionLevel ? .62 : 1.45)));
      refreshMusicMix(.2);
      if (now < restUntil) { tensionPhase = 'pause'; return; }
      const level = tensionLevel, close = profile.proximity, fragile = 1 - profile.health;
      const softness = profile.kind === 'ninfa' ? .8 : 1;
      const tone = values => emit({...values,amplitude:values.amplitude * softness,group:'tension'});
      if (profile.charging) {
        tensionPhase = 'windup';
        if (windupPending) {
          if (tone({frequency:46,end:83,duration:.58,attack:.15,amplitude:.026 + level*.014,cutoff:220})) tensionWindups++;
          windupPending = false;
        }
        return;
      }
      tensionPhase = 'breathing';
      if (now >= nextBeat) {
        const pitch = profile.kind === 'ninfa' ? 72 : profile.kind === 'boss' ? 57 : 64;
        const weight = .028 + level*.035 + close*.009 + fragile*.006;
        const first = tone({frequency:pitch,end:40,duration:.13,attack:.012,amplitude:weight,cutoff:180 + close*90});
        tone({frequency:pitch*1.08,end:44,duration:.1,delay:.14 + (1-level)*.035,amplitude:weight*.56,cutoff:210});
        if (first) pulsePlayed++;
        const pace = (profile.kind === 'ninfa' ? 1.18 : profile.kind === 'boss' ? 1.04 : .98) - level*.39;
        nextBeat = now + pace * (.95 + Math.random()*.1);
        // Uma pausa curta a cada frase evita que o pulso vire um metrônomo constante.
        if (first && pulsePlayed % 7 === 0) {
          restUntil = now + pace + .38; nextBeat = restUntil + .12;
          nextBreath = Math.max(nextBreath, restUntil + .3); nextDrone = Math.max(nextDrone, restUntil + .7);
          tensionPauses++;
        }
      }
      if (now >= nextBreath) {
        if (tone({noise:true,duration:.88 - level*.18,attack:.18,amplitude:.023 + level*.012,cutoff:300 + close*170})) tensionBreaths++;
        nextBreath = now + 3.5 - level*.85 + Math.random()*.35;
      }
      if (now >= nextDrone) {
        if (tone({frequency:profile.kind === 'ninfa'?58:43,end:profile.kind === 'ninfa'?47:38,duration:1.1,attack:.3,amplitude:.018 + level*.012,cutoff:150})) tensionDrones++;
        nextDrone = now + 4.2 - level*.8 + Math.random()*.45;
      }
    }, 100);
  }
  function duckForEffect(duration=420) {
    effectDucked = true;
    refreshTensionMix();
    channels.forEach((audio,id) => { audio.volume = Math.min(audio.volume, musicGain(tracks.find(track => track.id === id))); });
    if (duckTimer !== null) clearTimeout(duckTimer);
    duckTimer = setTimeout(() => {
      duckTimer = null; effectDucked = false; refreshTensionMix();
      if (!paused && !muted && !pageHidden) void playSelected(.3);
    }, duration);
  }
  function sfx(kind, options={}) {
    if (['inspect','item','notification','page','bag','door','enter'].includes(String(kind))) return spatialCue(kind, options);
    if (!allowed('effects')) return false;
    const key = ({slash:'cut',shield:'block',projectilePass:'projectile',enemyApproach:'approach'})[String(kind)] || String(kind), now = context.currentTime;
    const intensity = Number.isFinite(Number(options.intensity)) ? Math.max(0,Math.min(1,Number(options.intensity))) : 1;
    if (!intensity) return false;
    const stepInterval = options.pace === 'run' ? .12 : options.pace === 'sneak' ? .3 : .18;
    const intervals = {step:stepInterval,turn:.12,hit:.08,attack:.1,guard:.1,alert:.25,discovery:.5,death:.8,jumpscare:.9,cut:.09,knife:.09,block:.12,charge:.4,projectile:.13,nearMiss:.25,approach:.55,wave:.3,grab:.22};
    if (!(key in intervals) || now - (lastEffect.get(key) ?? -Infinity) < intervals[key]) return false;
    lastEffect.set(key, now);
    let result = false;
    const tone = values => {
      result = emit({...values, amplitude:(values.amplitude ?? .08)*intensity, pan:options.pan ?? values.pan ?? 0, distance:options.distance ?? 1}) || result;
    };
    if (key === 'step') {
      stepSide = !stepSide;
      const sneaking = options.pace === 'sneak', running = options.pace === 'run', water = options.surface === 'water', wood = options.surface === 'wood';
      const weight = sneaking ? .5 : running ? .9 : .75;
      tone({noise:true,duration:water?.13:running?.065:.085,amplitude:.12*weight,cutoff:water?700:wood?530:stepSide?360:450,pan:stepSide?-.15:.15});
      tone({frequency:(stepSide?85:100)*(wood?1.12:1),end:55,duration:.09,amplitude:.065*weight,cutoff:240});
    } else if (key === 'turn') tone({frequency:200,end:290,duration:.065,amplitude:.07,cutoff:600});
    else if (key === 'attack') { tone({noise:true,duration:.105,attack:.016,amplitude:.085,cutoff:1050}); tone({frequency:145,end:65,duration:.13,amplitude:.075,cutoff:400}); }
    else if (key === 'cut' || key === 'knife') {
      const quick = key === 'knife';
      tone({noise:true,duration:quick?.065:.095,attack:.012,amplitude:quick?.065:.085,cutoff:quick?1050:1200});
      tone({frequency:quick?245:210,end:quick?160:110,duration:quick?.065:.11,amplitude:.04,wave:'triangle',cutoff:650});
    } else if (key === 'hit') { tone({noise:true,duration:.1,amplitude:.12,cutoff:550}); tone({frequency:85,end:43,duration:.17,amplitude:.1,cutoff:240}); }
    else if (key === 'guard') { tone({frequency:220,end:180,duration:.16,amplitude:.1,wave:'triangle',cutoff:900}); tone({frequency:330,end:280,duration:.1,amplitude:.05,wave:'sine',cutoff:950}); }
    else if (key === 'block') {
      tone({frequency:255,end:205,duration:.12,amplitude:.075,wave:'triangle',cutoff:780});
      tone({frequency:340,end:285,duration:.16,delay:.025,amplitude:.035,cutoff:800});
      tone({noise:true,duration:.055,amplitude:.05,cutoff:550});
    } else if (key === 'charge') {
      tone({frequency:80,end:145,duration:.4,attack:.07,amplitude:.085,cutoff:410});
      tone({noise:true,duration:.32,attack:.07,amplitude:.035,cutoff:510});
    } else if (key === 'wave') {
      tone({noise:true,duration:.38,attack:.08,amplitude:.075,cutoff:650});
      tone({frequency:185,end:125,duration:.34,attack:.05,amplitude:.05,cutoff:480});
      tone({frequency:280,end:210,duration:.18,delay:.16,attack:.025,amplitude:.025,cutoff:720});
    } else if (key === 'grab') {
      tone({noise:true,duration:.14,attack:.023,amplitude:.08,cutoff:480});
      tone({frequency:96,end:59,duration:.17,attack:.018,amplitude:.075,cutoff:260});
    } else if (key === 'projectile') {
      tone({noise:true,duration:.11,attack:.016,amplitude:.06,cutoff:930});
      tone({frequency:280,end:155,duration:.14,amplitude:.04,cutoff:750});
    } else if (key === 'nearMiss') tone({noise:true,duration:.16,attack:.027,amplitude:.07,cutoff:780,pan:.3});
    else if (key === 'approach') {
      tone({noise:true,duration:.075,amplitude:.07,cutoff:330});
      tone({frequency:80,end:52,duration:.12,amplitude:.055,cutoff:210});
      tone({noise:true,duration:.08,delay:.23,amplitude:.052,cutoff:360});
    }
    else if (key === 'alert') { tone({frequency:420,end:350,duration:.12,amplitude:.1,cutoff:900}); tone({frequency:300,end:260,duration:.14,delay:.14,amplitude:.09,cutoff:700}); }
    else if (key === 'discovery') [261.63,329.63,392].forEach((frequency,index)=>tone({frequency,duration:.2,delay:index*.08,amplitude:.075,cutoff:1200}));
    else if (key === 'death') { tone({frequency:145,end:38,duration:.6,amplitude:.16,wave:'triangle',cutoff:500}); tone({noise:true,duration:.4,amplitude:.11,cutoff:400}); }
    else if (key === 'jumpscare') {
      stopVoice();
      tone({noise:true,duration:.33,attack:.012,amplitude:.13,cutoff:900});
      tone({frequency:65,end:42,duration:.5,amplitude:.13,wave:'triangle',cutoff:350});
      tone({frequency:230,end:155,duration:.35,amplitude:.065,wave:'sawtooth',cutoff:650});
      tone({frequency:247,end:170,duration:.3,amplitude:.045,wave:'triangle',cutoff:750});
      clearFade();
    }
    if (result) {
      effectsPlayed++;
      if (['jumpscare','hit','charge','grab','nearMiss'].includes(key)) duckForEffect(key === 'jumpscare' ? 750 : key === 'charge' ? 550 : 360);
    }
    return result;
  }
  function state() {
    const current = tracks.find(track => track.id === selected) || null;
    return {
      scene, track:selected, title:current?.title || '', author:current?.author || '',
      source:current?.source || '', license:current?.license || '', licenseURL:current?.licenseURL || '',
      volume, musicVolume:volume, voiceVolume, effectsVolume, muted, paused, unlocked, error,
      contextState:context?.state || 'uncreated', voicesActive:voices.size, effectsActive:effects.size + uiEffects.size + tensionSources.size,
      voicePlayed, effectsPlayed, lastVoiceProfile, pulseActive:pulseTimer !== null, playbackRate:sceneRate(),
      tension:tension ? {...tension} : null, tensionLevel, tensionSourcesActive:tensionSources.size,
      tensionTimerActive:tension !== null && pulseTimer !== null, pulseMode:pulseTimer === null ? null : tension ? 'tension' : 'maze',
      pulsePlayed, pulseStarts, tensionBreaths, tensionDrones, tensionWindups, tensionPauses, tensionPhase,
      pageHidden, room:room ? {...room} : null, ambientActive:ambience.size, ambientTimerActive:roomTimer !== null,
      ambientPlayed, lastAmbient, spatialPlayed,
      uiEffectsActive:uiEffects.size, uiPreviewing,
      speechDucked, effectDucked, previewing, musicLevel:channels.get(selected)?.volume || 0,
      playing: [...channels.values()].some(audio => !audio.paused && audio.volume > 0),
      tracks:tracks.map(track => ({...track}))
    };
  }
  // O navegador só recebe play depois de um gesto real: abrir a página sozinho não dispara som.
  const firstGesture = event => {
    if (!event.isTrusted || unlocked) return;
    void unlock();
  };
  document.addEventListener('pointerdown', firstGesture, {passive:true});
  document.addEventListener('keydown', firstGesture);
  document.addEventListener('visibilitychange', () => {
    pageHidden = document.visibilityState === 'hidden';
    if (pageHidden) {
      stopChannels(); stopSynth();
      if (context?.state === 'running') void context.suspend().then(() => {
        // Uma troca de aba muito rápida também precisa desfazer uma suspensão que terminou atrasada.
        if (!pageHidden && !paused && !muted) resume();
      }).catch(() => {});
    } else if (unlocked && !paused && !muted) resume();
  });
  return Object.freeze({unlock, setScene, setVolume, setVoiceVolume, setEffectsVolume, setMuted, pause, resume, state, voice, stopVoice, previewVoice, sfx, setRoom, clearRoom, spatialCue, setTension, clearTension});
})();
