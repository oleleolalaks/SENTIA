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
    maze:'pulse', revelation:'insanity', interrogation:'garden',
    odio:'pulse', boss:'pulse', arena:'pulse', battle:'pulse', ninfa:'insanity', tristeza:'insanity',
    comics:'pulse', candy:'garden', silence:null
  };
  let scene = 'explore', selected = 'garden', unlocked = false, paused = false;
  let volume = .45, muted = false, fade = null, generation = 0, error = '';
  try {
    const settings = JSON.parse(localStorage.getItem('sentia-audio') || '{}');
    if (Number.isFinite(settings.volume)) volume = Math.max(0, Math.min(1, settings.volume));
    muted = settings.muted === true;
  } catch { /* Se o navegador impedir o armazenamento, o controle de volume continua funcionando. */ }
  const channels = new Map();
  function persist() {
    try { localStorage.setItem('sentia-audio', JSON.stringify({volume, muted})); } catch {}
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
      const target = volume * tracks.find(track => track.id === id).gain;
      const beginnings = new Map([...channels].map(([key, item]) => [key, item.volume]));
      const start = performance.now();
      fade = setInterval(() => {
        if (token !== generation) return;
        const progress = Math.min(1, Math.max(0, (performance.now() - start) / (duration * 1000)));
        channels.forEach((item, key) => {
          const final = key === id ? target : 0;
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
    return playSelected(.25);
  }
  function setScene(value) {
    const key = Object.prototype.hasOwnProperty.call(aliases, value) ? aliases[value] : 'garden';
    scene = value;
    if (selected === key) return;
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
    if (muted) stopChannels(); else void playSelected(.25);
  }
  function pause() {
    paused = true;
    stopChannels();
  }
  function resume() {
    paused = false;
    void playSelected(.25);
  }
  function state() {
    const current = tracks.find(track => track.id === selected) || null;
    return {
      scene, track:selected, title:current?.title || '', author:current?.author || '',
      source:current?.source || '', license:current?.license || '', licenseURL:current?.licenseURL || '',
      volume, muted, paused, unlocked, error,
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
  return Object.freeze({unlock, setScene, setVolume, setMuted, pause, resume, state});
})();
