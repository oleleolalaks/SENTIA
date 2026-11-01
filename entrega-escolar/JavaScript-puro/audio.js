'use strict';

// As faixas ficam locais: depois de extrair o projeto, o jogo não depende da internet para tocar.
// Os créditos e a licença de cada música estão em documentacao/CREDITOS-AUDIO.txt.
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
  let context = null, voiceBus = null, effectsBus = null, pulseTimer = null, duckTimer = null;
  let voiceDuckTimer = null, previewTimer = null, speechDucked = false, effectDucked = false, previewing = false;
  let previewGeneration = 0;
  let lastVoice = -Infinity, voicePlayed = 0, effectsPlayed = 0, lastVoiceProfile = null, stepSide = false;
  const voices = new Set(), effects = new Set(), lastEffect = new Map();
  try {
    const settings = JSON.parse(localStorage.getItem('sentia-audio') || '{}');
    if (Number.isFinite(settings.volume)) volume = Math.max(0, Math.min(1, settings.volume));
    muted = settings.muted === true;
    if (Number.isFinite(settings.voiceVolume)) voiceVolume = Math.max(0, Math.min(1, settings.voiceVolume));
    if (Number.isFinite(settings.effectsVolume)) effectsVolume = Math.max(0, Math.min(1, settings.effectsVolume));
  } catch { /* Se o navegador impedir o armazenamento, o controle de volume continua funcionando. */ }
  const channels = new Map();
  function musicGain(track) { return volume * track.gain * (speechDucked ? .3 : 1) * (effectDucked ? .35 : 1); }
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
    if (!unlocked || paused || muted || volume === 0 || !selected) {
      stopChannels();
      return false;
    }
    clearFade();
    const token = generation, id = selected, audio = channel(id);
    try {
      await audio.play();
      if (token !== generation) {
        if (selected !== id) audio.pause();
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
    if (context?.state === 'suspended') { try { await context.resume(); } catch {} }
    startPulse();
    return playSelected(.25);
  }
  function setScene(value) {
    const key = Object.prototype.hasOwnProperty.call(aliases, value) ? aliases[value] : 'garden';
    const previous = scene;
    scene = value;
    if (previous !== scene) { stopVoice(); startPulse(); }
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
    if (muted) { stopChannels(); stopSynth(); } else { startPulse(); void playSelected(.25); }
  }
  function pause() {
    paused = true;
    stopChannels();
    stopSynth();
    if (context?.state === 'running') void context.suspend().catch(() => {});
  }
  function resume() {
    paused = false;
    stopVoice();
    if (unlocked && context?.state === 'suspended') void context.resume().then(startPulse).catch(() => {});
    else startPulse();
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
      voiceBus = context.createGain(); effectsBus = context.createGain();
      voiceBus.gain.value = voiceVolume; effectsBus.gain.value = effectsVolume;
      voiceBus.connect(master); effectsBus.connect(master); master.connect(limiter); limiter.connect(context.destination);
    } catch { context = null; }
  }
  function allowed(group) {
    return unlocked && (!paused || (group === 'voice' && previewing)) && !muted && context?.state === 'running' && (group === 'voice' ? voiceVolume > 0 : effectsVolume > 0);
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
    if (wasDucked && !paused && !muted) void playSelected(.18);
  }
  function duckForVoice() {
    speechDucked = true;
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
    if (wasPreviewing && paused && context?.state === 'running') void context.suspend().catch(() => {});
  }
  function stopSynth() {
    stopVoice(); stopGroup(effects);
    if (pulseTimer !== null) clearInterval(pulseTimer);
    if (duckTimer !== null) clearTimeout(duckTimer);
    pulseTimer = null; duckTimer = null; effectDucked = false;
  }
  function emit({frequency=180, end=frequency, duration=.1, delay=0, amplitude=.08, wave='sine', group='effects', cutoff=1100, noise=false, pan=0}) {
    if (!allowed(group)) return false;
    const pool = group === 'voice' ? voices : effects;
    if (pool.size >= (group === 'voice' ? 3 : 8) || voices.size + effects.size >= 8) return false;
    const now = context.currentTime + Math.max(0, Math.min(.4, delay));
    const length = Math.max(group==='voice'?.018:.025, Math.min(.65, duration));
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
    const peak = Math.max(0, Math.min(.18, amplitude));
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(peak, now + Math.min(.006, length / 4));
    if (group === 'voice') gain.gain.setValueAtTime(peak * .85, now + length * .42);
    gain.gain.exponentialRampToValueAtTime(.0001, now + length);
    source.connect(filter); filter.connect(gain);
    const bus = group === 'voice' ? voiceBus : effectsBus;
    let panner = null;
    if (pan && context.createStereoPanner) {
      panner = context.createStereoPanner(); panner.pan.value = Math.max(-.4, Math.min(.4, pan));
      gain.connect(panner); panner.connect(bus);
    } else gain.connect(bus);
    const entry = {source, gain, filter, panner}; pool.add(entry);
    source.addEventListener('ended', () => removeNode(entry, pool), {once:true});
    source.start(now); source.stop(now + length + (group==='voice'?.01:.015));
    return true;
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
    const done = emit({group:'voice',frequency,end:frequency*.98,duration:.034,delay:scheduled-now,amplitude:.16,wave:profile[1],cutoff:profile[1]==='sawtooth'?650:1300});
    if (done) { lastVoice = scheduled; voicePlayed++; lastVoiceProfile = {speaker:String(speaker),frequency:Math.round(frequency),wave:profile[1]}; if (!previewing) duckForVoice(); }
    return done;
  }
  async function previewVoice(speaker='Anata') {
    stopVoice();
    const token = previewGeneration;
    if (muted || voiceVolume === 0) return false;
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
    if (effectsVolume === 0) { stopGroup(effects); if (pulseTimer !== null) clearInterval(pulseTimer); pulseTimer = null; }
    else startPulse();
  }
  function startPulse() {
    if (pulseTimer !== null) clearInterval(pulseTimer);
    pulseTimer = null;
    if (scene !== 'maze' || !allowed('effects')) return;
    pulseTimer = setInterval(() => {
      if (!allowed('effects') || scene !== 'maze') return;
      emit({frequency:65,end:43,duration:.12,amplitude:.095,cutoff:240});
      emit({frequency:75,end:50,duration:.1,delay:.14,amplitude:.055,cutoff:260});
    }, 545);
  }
  function sfx(kind) {
    if (!allowed('effects')) return false;
    const key = String(kind), now = context.currentTime;
    const intervals = {step:.14,turn:.12,hit:.08,attack:.1,guard:.1,alert:.25,discovery:.5,death:.8,jumpscare:.9};
    if (!(key in intervals) || now - (lastEffect.get(key) ?? -Infinity) < intervals[key]) return false;
    lastEffect.set(key, now);
    let result = false;
    const tone = options => { result = emit(options) || result; };
    if (key === 'step') {
      stepSide = !stepSide;
      tone({noise:true,duration:.075,amplitude:.13,cutoff:stepSide?360:450,pan:stepSide?-.15:.15});
      tone({frequency:stepSide?85:100,end:55,duration:.08,amplitude:.06,cutoff:220});
    } else if (key === 'turn') tone({frequency:200,end:290,duration:.065,amplitude:.07,cutoff:600});
    else if (key === 'attack') { tone({noise:true,duration:.12,amplitude:.15,cutoff:1250}); tone({frequency:130,end:60,duration:.16,amplitude:.1,cutoff:400}); }
    else if (key === 'hit') { tone({noise:true,duration:.13,amplitude:.18,cutoff:650}); tone({frequency:85,end:40,duration:.2,amplitude:.14,cutoff:240}); }
    else if (key === 'guard') { tone({frequency:220,end:180,duration:.16,amplitude:.1,wave:'triangle',cutoff:900}); tone({frequency:330,end:280,duration:.1,amplitude:.05,wave:'sine',cutoff:950}); }
    else if (key === 'alert') { tone({frequency:420,end:350,duration:.12,amplitude:.1,cutoff:900}); tone({frequency:300,end:260,duration:.14,delay:.14,amplitude:.09,cutoff:700}); }
    else if (key === 'discovery') [261.63,329.63,392].forEach((frequency,index)=>tone({frequency,duration:.2,delay:index*.08,amplitude:.075,cutoff:1200}));
    else if (key === 'death') { tone({frequency:145,end:38,duration:.6,amplitude:.16,wave:'triangle',cutoff:500}); tone({noise:true,duration:.4,amplitude:.11,cutoff:400}); }
    else if (key === 'jumpscare') {
      stopVoice();
      tone({noise:true,duration:.38,amplitude:.18,cutoff:1100});
      tone({frequency:65,end:42,duration:.55,amplitude:.16,wave:'triangle',cutoff:350});
      tone({frequency:230,end:155,duration:.4,amplitude:.1,wave:'sawtooth',cutoff:800});
      tone({frequency:247,end:170,duration:.35,amplitude:.07,wave:'triangle',cutoff:850});
      clearFade();
      effectDucked = true;
      channels.forEach((audio,id) => { audio.volume = Math.min(audio.volume, musicGain(tracks.find(track => track.id === id))); });
      if (duckTimer !== null) clearTimeout(duckTimer);
      duckTimer = setTimeout(() => { duckTimer = null; effectDucked = false; if (!paused && !muted) void playSelected(.3); }, 750);
    }
    if (result) effectsPlayed++;
    return result;
  }
  function state() {
    const current = tracks.find(track => track.id === selected) || null;
    return {
      scene, track:selected, title:current?.title || '', author:current?.author || '',
      source:current?.source || '', license:current?.license || '', licenseURL:current?.licenseURL || '',
      volume, musicVolume:volume, voiceVolume, effectsVolume, muted, paused, unlocked, error,
      contextState:context?.state || 'uncreated', voicesActive:voices.size, effectsActive:effects.size,
      voicePlayed, effectsPlayed, lastVoiceProfile, pulseActive:pulseTimer !== null, playbackRate:sceneRate(),
      speechDucked, previewing, musicLevel:channels.get(selected)?.volume || 0,
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
  return Object.freeze({unlock, setScene, setVolume, setVoiceVolume, setEffectsVolume, setMuted, pause, resume, state, voice, stopVoice, previewVoice, sfx});
})();
