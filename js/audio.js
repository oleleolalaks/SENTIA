 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                                  
                                                                                      
 /* Atualiza window.Audio Sentia usando o resultado dessa chamada de função.
*/ window.AudioSentia =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa const para preparar tracks, mantendo essas referências fixas.
*/ const  /* Aqui tracks recebe o resultado de Object.freeze.
*/ tracks =  /* Impede a troca direta dos campos desse objeto. */ Object.freeze( /* Monta uma nova lista transformando cada posição da lista original. */ [
    { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'garden',  /* Esse campo guarda title com Dreams Become Real.
*/ title:'Dreams Become Real',  /* Esse campo guarda file com dreams become real.mp3.
*/ file:'dreams-become-real.mp3',  /* Esse campo guarda source com o texto definido nessa parte.
*/ source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1500027',  /* Esse campo guarda gain com 0.56.
*/ gain:.56},
    { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'fear',  /* Esse campo guarda title com Zombie Chase.
*/ title:'Zombie Chase',  /* Esse campo guarda file com zombie chase.mp3.
*/ file:'zombie-chase.mp3',  /* Esse campo guarda source com o texto definido nessa parte.
*/ source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100005',  /* Esse campo guarda gain com 0.82.
*/ gain:.82},
    { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'insanity',  /* Esse campo guarda title com Feral Chase.
*/ title:'Feral Chase',  /* Esse campo guarda file com feral chase.mp3.
*/ file:'feral-chase.mp3',  /* Esse campo guarda source com o texto definido nessa parte.
*/ source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100229',  /* Esse campo guarda gain com 0.78.
*/ gain:.78},
    { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pulse',  /* Esse campo guarda title com Chase Pulse.
*/ title:'Chase Pulse',  /* Esse campo guarda file com chase pulse.mp3.
*/ file:'chase-pulse.mp3',  /* Esse campo guarda source com o texto definido nessa parte.
*/ source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100383',  /* Esse campo guarda gain com 0.8.
*/ gain:.8}
  ].map( /* Essa função recebe track e devolve o resultado de Object.freeze. */ track =>  /* Impede a troca direta dos campos desse objeto. */ Object.freeze({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...track,  /* Esse campo guarda author com Kevin Mac Leod incompetech.com.
*/ author:'Kevin MacLeod (incompetech.com)',  /* Esse campo guarda license com CC BY 4.0.
*/ license:'CC BY 4.0',  /* Esse campo guarda license URL com https creativecommons.org licenses by 4.0.
*/ licenseURL:'https://creativecommons.org/licenses/by/4.0/'})));
   /* Essa declaração usa const para preparar aliases, mantendo essas referências fixas.
*/ const  /* Aqui aliases recebe um objeto com os campos dessa parte.
*/ aliases = {
     /* Essa etapa usa a faixa identificada por garden.
*/ menu:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ explore:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ dialogue:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ normal:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ garden:'garden',
     /* Essa etapa usa a faixa identificada por garden.
*/ ending:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ complete:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ keys:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ gate:'garden',  /* Essa etapa usa a faixa identificada por garden.
*/ stairs:'garden',
     /* Essa etapa usa a faixa identificada por pulse.
*/ watch:'pulse',  /* Essa etapa usa a faixa identificada por fear.
*/ fearChase:'fear',  /* Essa etapa usa a faixa identificada por fear.
*/ medo:'fear',  /* Essa etapa usa a faixa identificada por fear.
*/ fear:'fear',  /* Essa etapa usa a faixa identificada por fear.
*/ chaseFear:'fear',
     /* Essa etapa usa a faixa identificada por insanity.
*/ insaneChase:'insanity',  /* Essa etapa usa a faixa identificada por insanity.
*/ insanidade:'insanity',  /* Essa etapa usa a faixa identificada por insanity.
*/ insanity:'insanity',  /* Essa etapa usa a faixa identificada por insanity.
*/ chaseInsanity:'insanity',
     /* Essa etapa usa a faixa identificada por insanity.
*/ maze:'insanity',  /* Essa etapa usa a faixa identificada por insanity.
*/ revelation:'insanity',  /* Essa etapa usa a faixa identificada por garden.
*/ interrogation:'garden',
     /* Essa etapa usa a faixa identificada por pulse.
*/ odio:'pulse',  /* Essa etapa usa a faixa identificada por pulse.
*/ boss:'pulse',  /* Essa etapa usa a faixa identificada por pulse.
*/ arena:'pulse',  /* Essa etapa usa a faixa identificada por pulse.
*/ battle:'pulse',  /* Essa etapa usa a faixa identificada por insanity.
*/ ninfa:'insanity',  /* Essa etapa usa a faixa identificada por insanity.
*/ tristeza:'insanity',
     /* Essa etapa usa a faixa identificada por pulse.
*/ comics:'pulse',  /* Essa etapa usa a faixa identificada por garden.
*/ candy:'garden',  /* Essa etapa deixa a trilha sem faixa selecionada.
*/ silence:null
  };
   /* Essa declaração usa let para preparar scene e selected e unlocked e paused, permitindo atualizar esses valores depois.
*/ let  /* Aqui scene recebe explore.
*/ scene = 'explore',  /* Aqui selected recebe garden.
*/ selected = 'garden',  /* Aqui unlocked recebe false.
*/ unlocked = false,  /* Aqui paused recebe false.
*/ paused = false;
   /* Essa declaração usa let para preparar volume e voice Volume e effects Volume e muted e fade e generation e error, permitindo atualizar esses valores depois.
*/ let  /* Aqui volume recebe 0.45.
*/ volume = .45,  /* Aqui voice Volume recebe 0.28.
*/ voiceVolume = .28,  /* Aqui effects Volume recebe 0.45.
*/ effectsVolume = .45,  /* Aqui muted recebe false.
*/ muted = false,  /* Aqui fade recebe um valor vazio.
*/ fade = null,  /* Aqui generation recebe 0.
*/ generation = 0,  /* Aqui error recebe um texto vazio.
*/ error = '';
   /* Essa declaração usa let para preparar context e voice Bus e effects Bus e ambient Bus e tension Bus e scare Bus e pulse Timer e duck Timer, permitindo atualizar esses valores depois.
*/ let  /* Aqui context recebe um valor vazio.
*/ context = null,  /* Aqui voice Bus recebe um valor vazio.
*/ voiceBus = null,  /* Aqui effects Bus recebe um valor vazio.
*/ effectsBus = null,  /* Aqui ambient Bus recebe um valor vazio.
*/ ambientBus = null,  /* Aqui tension Bus recebe um valor vazio.
*/ tensionBus = null,  /* Aqui scare Bus recebe um valor vazio.
*/ scareBus = null,  /* Aqui pulse Timer recebe um valor vazio.
*/ pulseTimer = null,  /* Aqui duck Timer recebe um valor vazio.
*/ duckTimer = null;
   /* Essa declaração usa let para preparar voice Duck Timer e preview Timer e speech Ducked e effect Ducked e previewing, permitindo atualizar esses valores depois.
*/ let  /* Aqui voice Duck Timer recebe um valor vazio.
*/ voiceDuckTimer = null,  /* Aqui preview Timer recebe um valor vazio.
*/ previewTimer = null,  /* Aqui speech Ducked recebe false.
*/ speechDucked = false,  /* Aqui effect Ducked recebe false.
*/ effectDucked = false,  /* Aqui previewing recebe false.
*/ previewing = false;
   /* Essa declaração usa let para preparar preview Generation, permitindo atualizar esses valores depois.
*/ let  /* Aqui preview Generation recebe 0.
*/ previewGeneration = 0;
   /* Essa declaração usa let para preparar ui Previewing e ui Timer e ui Generation, permitindo atualizar esses valores depois.
*/ let  /* Aqui ui Previewing recebe false.
*/ uiPreviewing = false,  /* Aqui ui Timer recebe um valor vazio.
*/ uiTimer = null,  /* Aqui ui Generation recebe 0.
*/ uiGeneration = 0;
   /* Essa declaração usa let para preparar page Hidden e room e room Timer e room Generation, permitindo atualizar esses valores depois.
*/ let  /* Aqui page Hidden recebe o resultado dessa expressão.
*/ pageHidden = document.visibilityState === 'hidden',  /* Aqui room recebe um valor vazio.
*/ room = null,  /* Aqui room Timer recebe um valor vazio.
*/ roomTimer = null,  /* Aqui room Generation recebe 0.
*/ roomGeneration = 0;
   /* Essa declaração usa let para preparar ambient Played e last Ambient e spatial Played, permitindo atualizar esses valores depois.
*/ let  /* Aqui ambient Played recebe 0.
*/ ambientPlayed = 0,  /* Aqui last Ambient recebe um texto vazio.
*/ lastAmbient = '',  /* Aqui spatial Played recebe 0.
*/ spatialPlayed = 0;
   /* Essa declaração usa let para preparar last Voice e voice Played e effects Played e last Voice Profile e step Side, permitindo atualizar esses valores depois.
*/ let  /* Aqui last Voice recebe o resultado dessa expressão.
*/ lastVoice = -Infinity,  /* Aqui voice Played recebe 0.
*/ voicePlayed = 0,  /* Aqui effects Played recebe 0.
*/ effectsPlayed = 0,  /* Aqui last Voice Profile recebe um valor vazio.
*/ lastVoiceProfile = null,  /* Aqui step Side recebe false.
*/ stepSide = false;
   /* Essa declaração usa let para preparar last Jumpscare e jumpscares Played, permitindo atualizar esses valores depois.
*/ let  /* Aqui last Jumpscare recebe um valor vazio.
*/ lastJumpscare = null,  /* Aqui jumpscares Played recebe 0.
*/ jumpscaresPlayed = 0;
   /* Essa declaração usa let para preparar scare Generation e scare Pending e scare Error e room Cues Played e last Room Cue, permitindo atualizar esses valores depois.
*/ let  /* Aqui scare Generation recebe 0.
*/ scareGeneration = 0,  /* Aqui scare Pending recebe false.
*/ scarePending = false,  /* Aqui scare Error recebe um texto vazio.
*/ scareError = '',  /* Aqui room Cues Played recebe 0.
*/ roomCuesPlayed = 0,  /* Aqui last Room Cue recebe o resultado dessa expressão.
*/ lastRoomCue = -Infinity;
   /* Essa declaração usa let para preparar presented Room e room Entry Pending, permitindo atualizar esses valores depois.
*/ let  /* Aqui presented Room recebe um valor vazio.
*/ presentedRoom = null,  /* Aqui room Entry Pending recebe um valor vazio.
*/ roomEntryPending = null;
   /* Essa declaração usa let para preparar tension e tension Level e legacy Pulse e pulse Generation e pulse Starts, permitindo atualizar esses valores depois.
*/ let  /* Aqui tension recebe um valor vazio.
*/ tension = null,  /* Aqui tension Level recebe 0.
*/ tensionLevel = 0,  /* Aqui legacy Pulse recebe false.
*/ legacyPulse = false,  /* Aqui pulse Generation recebe 0.
*/ pulseGeneration = 0,  /* Aqui pulse Starts recebe 0.
*/ pulseStarts = 0;
   /* Essa declaração usa let para preparar pulse Last Time e next Beat e next Breath e next Drone e rest Until e windup Pending, permitindo atualizar esses valores depois.
*/ let  /* Aqui pulse Last Time recebe 0.
*/ pulseLastTime = 0,  /* Aqui next Beat recebe 0.
*/ nextBeat = 0,  /* Aqui next Breath recebe 0.
*/ nextBreath = 0,  /* Aqui next Drone recebe 0.
*/ nextDrone = 0,  /* Aqui rest Until recebe 0.
*/ restUntil = 0,  /* Aqui windup Pending recebe false.
*/ windupPending = false;
   /* Essa declaração usa let para preparar pulse Played e tension Breaths e tension Drones e tension Windups e tension Pauses e tension Phase, permitindo atualizar esses valores depois.
*/ let  /* Aqui pulse Played recebe 0.
*/ pulsePlayed = 0,  /* Aqui tension Breaths recebe 0.
*/ tensionBreaths = 0,  /* Aqui tension Drones recebe 0.
*/ tensionDrones = 0,  /* Aqui tension Windups recebe 0.
*/ tensionWindups = 0,  /* Aqui tension Pauses recebe 0.
*/ tensionPauses = 0,  /* Aqui tension Phase recebe silent.
*/ tensionPhase = 'silent';
   /* Essa declaração usa const para preparar voices e effects e scares e tension Sources e ambience e ui Effects e ui Pending e last Effect, mantendo essas referências fixas.
*/ const  /* Aqui voices recebe uma instância de Set.
*/ voices =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui effects recebe uma instância de Set.
*/ effects =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui scares recebe uma instância de Set.
*/ scares =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui tension Sources recebe uma instância de Set.
*/ tensionSources =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui ambience recebe uma instância de Set.
*/ ambience =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui ui Effects recebe uma instância de Set.
*/ uiEffects =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui ui Pending recebe uma instância de Set.
*/ uiPending =  /* Cria uma instância de Set para usar nesse recurso. */ new Set(),  /* Aqui last Effect recebe uma instância de Map.
*/ lastEffect =  /* Cria uma instância de Map para usar nesse recurso. */ new Map();
   /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
     /* Essa declaração usa const para preparar settings, mantendo essas referências fixas.
*/ const  /* Aqui settings recebe o resultado de JSON.parse.
*/ settings =  /* Converte o texto JSON em dados que o programa consegue usar. */ JSON.parse( /* Lê o valor salvo com a chave sentia audio. */ localStorage.getItem('sentia-audio') || '{}');
     /* Esse teste confere se o resultado de Number.is Finite está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se o valor é um número finito. */ Number.isFinite(settings.volume))  /* Atualiza volume usando o resultado de Math.max.
*/ volume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, settings.volume));
     /* Atualiza muted usando o resultado dessa expressão.
*/ muted = settings.muted === true;
     /* Esse teste confere se o resultado de Number.is Finite está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se o valor é um número finito. */ Number.isFinite(settings.voiceVolume))  /* Atualiza voice Volume usando o resultado de Math.max.
*/ voiceVolume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, settings.voiceVolume));
     /* Esse teste confere se o resultado de Number.is Finite está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se o valor é um número finito. */ Number.isFinite(settings.effectsVolume))  /* Atualiza effects Volume usando o resultado de Math.max.
*/ effectsVolume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, settings.effectsVolume));
  }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {                                                                                          }
   /* Essa declaração usa const para preparar channels, mantendo essas referências fixas.
*/ const  /* Aqui channels recebe uma instância de Map.
*/ channels =  /* Cria uma instância de Map para usar nesse recurso. */ new Map();
   /* esse comando calcula o volume da música levando em conta a fala, os efeitos e a tensão da cena.
*/ function musicGain(track) {  /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return volume * track.gain * (speechDucked ? .3 : 1) * (effectDucked ? .35 : 1) * (1 - tensionLevel * .23); }
   /* esse comando aproxima o volume das músicas do nível certo sem interromper uma troca que já está acontecendo.
*/ function refreshMusicMix(amount=1) {
     /* Esse teste confere se fade é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (fade !== null)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Percorre os itens e executa a função indicada em cada um.
*/ channels.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (audio,id) => {
       /* Esse teste confere se audio.paused está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (audio.paused)  /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Essa declaração usa const para preparar target, mantendo essas referências fixas.
*/ const  /* Aqui target recebe uma das duas alternativas, conforme o teste.
*/ target = id === selected ?  /* esse comando calcula o volume da música levando em conta a fala, os efeitos e a tensão da cena. */ musicGain( /* Procura o primeiro item que passa na condição indicada. */ tracks.find( /* Essa função recebe track e devolve o resultado dessa expressão. */ track => track.id === id)) : 0;
       /* Atualiza audio.volume usando o resultado de Math.max.
*/ audio.volume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, audio.volume + (target - audio.volume) * amount));
    });
  }
   /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ function refreshTensionMix() {
     /* Esse teste confere se tension Bus está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (tensionBus)  /* Aproxima o parâmetro do valor de destino de forma suave.
*/ tensionBus.gain.setTargetAtTime(speechDucked ? .3 : effectDucked ? .55 : 1, context.currentTime, .025);
     /* Esse teste confere se ambient Bus está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (ambientBus)  /* Aproxima o parâmetro do valor de destino de forma suave.
*/ ambientBus.gain.setTargetAtTime(effectsVolume * 1.65 * (speechDucked ? .38 : 1), context.currentTime, .025);
  }
   /* esse comando guarda as preferências de música, voz, efeitos e silêncio neste navegador.
*/ function persist() {
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {  /* Salva o valor usando a chave sentia audio.
*/ localStorage.setItem('sentia-audio',  /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify({ /* Esse campo guarda volume com volume.
*/ volume,  /* aqui fica a preferência de volume dos bipes de diálogo.
*/ voiceVolume,  /* aqui fica a preferência de volume dos efeitos, ambientes e sustos.
*/ effectsVolume,  /* aqui fica a escolha de silenciar todos os sons sem alterar os volumes guardados.
*/ muted})); }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {}
  }
   /* esse comando cancela a transição de volume e invalida uma troca de faixa que ainda esteja esperando.
*/ function clearFade() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ generation++;
     /* Esse teste confere se fade é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (fade !== null)  /* Cancela essa repetição.
*/ clearInterval(fade);
     /* Atualiza fade usando um valor vazio.
*/ fade = null;
  }
   /* esse comando pausa as faixas e zera o volume dos canais de música.
*/ function stopChannels() {
     /* esse comando cancela a transição de volume e invalida uma troca de faixa que ainda esteja esperando.
*/ clearFade();
     /* Percorre os itens e executa a função indicada em cada um.
*/ channels.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ audio => {  /* Pausa a reprodução dessa mídia.
*/ audio.pause();  /* Atualiza audio.volume usando 0.
*/ audio.volume = 0; });
  }
   /* esse comando encontra ou prepara o arquivo local da faixa escolhida sem criar o mesmo canal duas vezes.
*/ function channel(id) {
     /* Esse teste confere se o resultado de channels.has não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente no conjunto ou mapa. */ channels.has(id)) {
       /* Essa declaração usa const para preparar track, mantendo essas referências fixas.
*/ const  /* Aqui track recebe o resultado de tracks.find.
*/ track =  /* Procura o primeiro item que passa na condição indicada. */ tracks.find( /* Essa função recebe item e devolve o resultado dessa expressão. */ item => item.id === id);
       /* Essa declaração usa const para preparar audio, mantendo essas referências fixas.
*/ const  /* Aqui audio recebe uma instância de Audio.
*/ audio =  /* Cria uma instância de Audio para usar nesse recurso. */ new Audio();
       /* Atualiza audio.preload usando none.
*/ audio.preload = 'none';
       /* Atualiza audio.loop usando true.
*/ audio.loop = true;
       /* Atualiza audio.volume usando 0.
*/ audio.volume = 0;
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ audio.src =  /* Cria uma instância de URL para usar nesse recurso. */ new URL('assets/audio/' + track.file, document.baseURI).href;
       /* Escuta o evento error e liga esse evento à função definida aqui.
*/ audio.addEventListener('error',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Atualiza error usando o resultado dessa expressão.
*/ error = 'Não foi possível carregar a faixa ' + track.title + '. Confira a pasta assets/audio.';
      });
       /* Guarda o valor associado a essa chave no mapa.
*/ channels.set(id, audio);
    }
     /* Devolve o resultado de channels.get e encerra essa chamada da função.
*/ return  /* Consulta o valor associado a essa chave no mapa. */ channels.get(id);
  }
                                                                                                          
   /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos.
*/ async function playSelected(duration = .75) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!unlocked || paused || muted || pageHidden || volume === 0 || !selected) {
       /* esse comando pausa as faixas e zera o volume dos canais de música.
*/ stopChannels();
       /* Devolve false e encerra essa chamada da função.
*/ return false;
    }
     /* esse comando cancela a transição de volume e invalida uma troca de faixa que ainda esteja esperando.
*/ clearFade();
     /* Essa declaração usa const para preparar token e id e audio, mantendo essas referências fixas.
*/ const  /* Aqui token recebe generation.
*/ token = generation,  /* Aqui id recebe selected.
*/ id = selected,  /* Aqui audio recebe o resultado de channel.
*/ audio =  /* esse comando encontra ou prepara o arquivo local da faixa escolhida sem criar o mesmo canal duas vezes. */ channel(id);
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* Pede para a mídia começar ou continuar a tocar. */ audio.play();
       /* Esse teste confere se token é diferente de generation, e só entra nesse caminho quando a condição passa.
*/ if (token !== generation) {
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (selected !== id || paused || muted || pageHidden || volume === 0)  /* Pausa a reprodução dessa mídia.
*/ audio.pause();
         /* Devolve false e encerra essa chamada da função.
*/ return false;
      }
       /* Atualiza error usando um texto vazio.
*/ error = '';
       /* Atualiza audio.playback Rate usando o resultado de scene Rate.
*/ audio.playbackRate =  /* esse comando escolhe a velocidade da música do labirinto e da perseguição de Mizzery. */ sceneRate();
       /* Esse teste confere se preserves Pitch existe em audio, e só entra nesse caminho quando a condição passa.
*/ if ('preservesPitch' in audio)  /* Atualiza audio.preserves Pitch usando true.
*/ audio.preservesPitch = true;
       /* Essa declaração usa const para preparar beginnings, mantendo essas referências fixas.
*/ const  /* Aqui beginnings recebe uma instância de Map.
*/ beginnings =  /* Cria uma instância de Map para usar nesse recurso. */ new Map( /* Monta uma nova lista transformando cada posição da lista original. */ [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...channels].map( /* Essa função recebe valores separados da lista e devolve uma lista com 2 posições. */ ([key, item]) => [key, item.volume]));
       /* Essa declaração usa const para preparar start, mantendo essas referências fixas.
*/ const  /* Aqui start recebe o resultado de performance.now.
*/ start =  /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now();
       /* Atualiza fade usando o resultado de set Interval.
*/ fade =  /* Repete essa função no intervalo indicado. */ setInterval( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Esse teste confere se token é diferente de generation, e só entra nesse caminho quando a condição passa.
*/ if (token !== generation)  /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Essa declaração usa const para preparar progress, mantendo essas referências fixas.
*/ const  /* Aqui progress recebe o resultado de Math.min.
*/ progress =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1,  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, ( /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now() - start) / (duration * 1000)));
         /* Percorre os itens e executa a função indicada em cada um.
*/ channels.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (item, key) => {
           /* Essa declaração usa const para preparar final, mantendo essas referências fixas.
*/ const  /* Aqui final recebe uma das duas alternativas, conforme o teste.
*/ final = key === id ?  /* esse comando calcula o volume da música levando em conta a fala, os efeitos e a tensão da cena. */ musicGain( /* Procura o primeiro item que passa na condição indicada. */ tracks.find( /* Essa função recebe track e devolve o resultado dessa expressão. */ track => track.id === id)) : 0;
           /* Atualiza item.volume usando o resultado de Math.max.
*/ item.volume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1,  /* Consulta o valor associado a essa chave no mapa. */ beginnings.get(key) + (final -  /* Consulta o valor associado a essa chave no mapa. */ beginnings.get(key)) * progress));
        });
         /* Esse teste confere se progress é igual a 1, e só entra nesse caminho quando a condição passa.
*/ if (progress === 1) {
           /* Cancela essa repetição.
*/ clearInterval(fade);  /* Atualiza fade usando um valor vazio.
*/ fade = null;
           /* Percorre os itens e executa a função indicada em cada um.
*/ channels.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (item, key) => {  /* Esse teste confere se key é diferente de id, e só entra nesse caminho quando a condição passa.
*/ if (key !== id)  /* Pausa a reprodução dessa mídia.
*/ item.pause(); });
        }
      }, 25);
       /* Devolve true e encerra essa chamada da função.
*/ return true;
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch (exception) {
       /* Esse teste confere se token é igual a generation, e só entra nesse caminho quando a condição passa.
*/ if (token === generation)  /* Atualiza error usando uma das duas alternativas, conforme o teste.
*/ error = exception.name === 'NotAllowedError'
        ? 'Toque em um controle do jogo para iniciar o áudio.'
        : 'A faixa não pôde começar. Confira os arquivos de áudio.';
       /* Devolve false e encerra essa chamada da função.
*/ return false;
    }
  }
   /* esse comando prepara o áudio depois de uma interação e tenta retomar o contexto quando o navegador permite.
*/ async function unlock() {
     /* Atualiza unlocked usando true.
*/ unlocked = true;
     /* esse comando prepara os canais de voz, ambiente, sustos e efeitos com um limitador de volume na saída.
*/ ensureSynth();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!pageHidden && !muted && context &&  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda suspended.
*/ 'suspended', /* Essa posição da lista guarda interrupted.
*/ 'interrupted'].includes(context.state)) {  /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* Pede que esse contexto retome a execução. */ context.resume(); }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {} }
     /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();
     /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ startRoom();
     /* Devolve o resultado de play Selected e encerra essa chamada da função.
*/ return  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected(.25);
  }
   /* esse comando escolhe a trilha da cena atual e ajusta o pulso usado no labirinto.
*/ function setScene(value) {
     /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe uma das duas alternativas, conforme o teste.
*/ key =  /* Confere se esse campo pertence diretamente ao objeto consultado. */ Object.prototype.hasOwnProperty.call(aliases, value) ? aliases[value] : 'garden';
     /* Essa declaração usa const para preparar previous, mantendo essas referências fixas.
*/ const  /* Aqui previous recebe scene.
*/ previous = scene;
     /* Atualiza scene usando value.
*/ scene = value;
     /* Esse teste confere se previous é diferente de scene, e só entra nesse caminho quando a condição passa.
*/ if (previous !== scene) {  /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice();  /* Atualiza legacy Pulse usando o resultado dessa expressão.
*/ legacyPulse = scene === 'maze' && !tension;  /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse(); }
     /* Esse teste confere se selected é igual a key, e só entra nesse caminho quando a condição passa.
*/ if (selected === key) {  /* Essa declaração usa const para preparar current, mantendo essas referências fixas.
*/ const  /* Aqui current recebe o resultado de channels.get.
*/ current =  /* Consulta o valor associado a essa chave no mapa. */ channels.get(key);  /* Esse teste confere se current está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (current)  /* Atualiza current.playback Rate usando o resultado de scene Rate.
*/ current.playbackRate =  /* esse comando escolhe a velocidade da música do labirinto e da perseguição de Mizzery. */ sceneRate();  /* Encerra essa função sem devolver outro valor.
*/ return; }
     /* Atualiza selected usando key.
*/ selected = key;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected();
  }
   /* esse comando limita e salva o volume da música antes de atualizar a reprodução.
*/ function setVolume(value) {
     /* Essa declaração usa const para preparar parsed, mantendo essas referências fixas.
*/ const  /* Aqui parsed recebe o resultado de Number.
*/ parsed =  /* Converte esse valor para número. */ Number(value);
     /* Esse teste confere se o resultado de Number.is Finite não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se o valor é um número finito. */ Number.isFinite(parsed))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza volume usando o resultado de Math.max.
*/ volume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, parsed));
     /* esse comando guarda as preferências de música, voz, efeitos e silêncio neste navegador.
*/ persist();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected(.15);
  }
   /* esse comando aplica a escolha de silenciar todos os sons e limpa as fontes que estavam tocando.
*/ function setMuted(value) {
     /* Atualiza muted usando o resultado de Boolean.
*/ muted =  /* Converte esse valor para verdadeiro ou falso. */ Boolean(value);
     /* esse comando guarda as preferências de música, voz, efeitos e silêncio neste navegador.
*/ persist();
     /* Esse teste confere se muted está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (muted) {  /* esse comando pausa as faixas e zera o volume dos canais de música.
*/ stopChannels();  /* esse comando cancela as fontes de voz, efeitos, ambiente e tensão antes de suspender o áudio.
*/ stopSynth(); }
    else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (unlocked && !paused && !pageHidden)  /* esse comando retoma o áudio permitido sem recuperar vozes ou efeitos antigos.
*/ resume();
    else {  /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();  /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ startRoom();  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected(.25); }
  }
   /* esse comando pausa o áudio e suspende o contexto enquanto a partida fica parada.
*/ function pause() {
     /* Atualiza paused usando true.
*/ paused = true;
     /* esse comando pausa as faixas e zera o volume dos canais de música.
*/ stopChannels();
     /* esse comando cancela as fontes de voz, efeitos, ambiente e tensão antes de suspender o áudio.
*/ stopSynth();
     /* Esse teste confere se context.state é igual a running, e só entra nesse caminho quando a condição passa.
*/ if (context?.state === 'running')  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.suspend().then( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!paused && !muted && !pageHidden)  /* esse comando retoma o áudio permitido sem recuperar vozes ou efeitos antigos.
*/ resume();
    }).catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
  }
   /* esse comando retoma o áudio permitido sem recuperar vozes ou efeitos antigos.
*/ function resume() {
     /* Atualiza paused usando false.
*/ paused = false;
     /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice();  /* esse comando cancela sons e esperas das janelas de interface sem retomar o jogo.
*/ stopUi();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (unlocked && !muted && !pageHidden && context &&  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda suspended.
*/ 'suspended', /* Essa posição da lista guarda interrupted.
*/ 'interrupted'].includes(context.state))  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.resume().then( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!paused&&!muted&&!pageHidden){ /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();  /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ startRoom();} }).catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
    else {  /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();  /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ startRoom(); }
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected(.25);
  }

                                                                                                    
   /* esse comando escolhe a velocidade da música do labirinto e da perseguição de Mizzery.
*/ function sceneRate() {  /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return scene === 'maze' ? 1.16 : scene === 'insaneChase' ? 1.07 : 1; }
   /* esse comando prepara os canais de voz, ambiente, sustos e efeitos com um limitador de volume na saída.
*/ function ensureSynth() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (context || !unlocked)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar Audio Context Class, mantendo essas referências fixas.
*/ const  /* Aqui Audio Context Class recebe o resultado dessa expressão.
*/ AudioContextClass = window.AudioContext || window.webkitAudioContext;
     /* Esse teste confere se Audio Context Class não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!AudioContextClass)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Atualiza context usando uma instância de Audio Context Class.
*/ context =  /* Cria uma instância de Audio Context Class para usar nesse recurso. */ new AudioContextClass();
       /* Essa declaração usa const para preparar master, mantendo essas referências fixas.
*/ const  /* Aqui master recebe o resultado de context.create Gain.
*/ master =  /* Cria um controle de volume para essa camada sonora. */ context.createGain();  /* Atualiza o valor desse campo ou controle.
*/ master.gain.value = .45;
       /* Essa declaração usa const para preparar limiter, mantendo essas referências fixas.
*/ const  /* Aqui limiter recebe o resultado de context.create Dynamics Compressor.
*/ limiter =  /* Executa context.create Dynamics Compressor com os valores definidos nessa parte. */ context.createDynamicsCompressor();
       /* Atualiza o valor desse campo ou controle.
*/ limiter.threshold.value = -15;  /* Atualiza o valor desse campo ou controle.
*/ limiter.knee.value = 12;  /* Atualiza o valor desse campo ou controle.
*/ limiter.ratio.value = 8;
       /* Atualiza o valor desse campo ou controle.
*/ limiter.attack.value = .003;  /* Atualiza o valor desse campo ou controle.
*/ limiter.release.value = .12;
       /* Atualiza voice Bus usando o resultado de context.create Gain.
*/ voiceBus =  /* Cria um controle de volume para essa camada sonora. */ context.createGain();  /* Atualiza effects Bus usando o resultado de context.create Gain.
*/ effectsBus =  /* Cria um controle de volume para essa camada sonora. */ context.createGain();  /* Atualiza ambient Bus usando o resultado de context.create Gain.
*/ ambientBus =  /* Cria um controle de volume para essa camada sonora. */ context.createGain();  /* Atualiza tension Bus usando o resultado de context.create Gain.
*/ tensionBus =  /* Cria um controle de volume para essa camada sonora. */ context.createGain();  /* Atualiza scare Bus usando o resultado de context.create Gain.
*/ scareBus =  /* Cria um controle de volume para essa camada sonora. */ context.createGain();
       /* Atualiza o valor desse campo ou controle.
*/ voiceBus.gain.value = voiceVolume;  /* Atualiza o valor desse campo ou controle.
*/ effectsBus.gain.value = effectsVolume;
       /* Atualiza o valor desse campo ou controle.
*/ ambientBus.gain.value = effectsVolume * 1.65;
       /* Atualiza o valor desse campo ou controle.
*/ scareBus.gain.value = effectsVolume * 2.2;
       /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ voiceBus.connect(master);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ effectsBus.connect(master);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ ambientBus.connect(master);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ scareBus.connect(master);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ tensionBus.connect(effectsBus);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ master.connect(limiter);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ limiter.connect(context.destination);
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {  /* Atualiza context usando um valor vazio.
*/ context = null; }
  }
   /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador.
*/ function allowed(group) {
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return unlocked && !pageHidden && (!paused || (group === 'voice' && previewing) || (group === 'ui' && uiPreviewing)) && !muted && context?.state === 'running' && (group === 'voice' ? voiceVolume > 0 : effectsVolume > 0);
  }
   /* esse comando remove a fonte encerrada do grupo e desconecta as peças de áudio que ela usou.
*/ function removeNode(entry, group) {
     /* Retira esse valor do conjunto ou mapa.
*/ group.delete(entry);
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {  /* Desliga essa etapa do caminho do áudio.
*/ entry.source.disconnect();  /* Desliga essa etapa do caminho do áudio.
*/ entry.gain.disconnect();  /* Desliga essa etapa do caminho do áudio.
*/ entry.filter.disconnect();  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ entry.panner?.disconnect(); }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {}
  }
   /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ function stopGroup(group) {
     /* Percorre cada valor de uma lista com 1 posições usando entry nesta repetição.
*/ for ( /* Essa declaração usa const para preparar entry, mantendo essas referências fixas.
*/ const  /* Aqui entry recebe nenhum valor inicial.
*/ entry of [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...group]) {
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {  /* Encerra essa fonte ou tarefa no momento indicado.
*/ entry.source.stop(); }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {}
       /* esse comando remove a fonte encerrada do grupo e desconecta as peças de áudio que ela usou.
*/ removeNode(entry, group);
    }
  }
   /* esse comando encerra o intervalo de fala e devolve espaço para a música e o ambiente.
*/ function releaseVoiceDuck() {
     /* Esse teste confere se voice Duck Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (voiceDuckTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(voiceDuckTimer);
     /* Atualiza voice Duck Timer usando um valor vazio.
*/ voiceDuckTimer = null;
     /* Essa declaração usa const para preparar was Ducked, mantendo essas referências fixas.
*/ const  /* Aqui was Ducked recebe speech Ducked.
*/ wasDucked = speechDucked;
     /* Atualiza speech Ducked usando false.
*/ speechDucked = false;
     /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ refreshTensionMix();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (wasDucked && !paused && !muted)  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected(.18);
  }
   /* esse comando baixa a música e o ambiente por um instante para os bipes do diálogo ficarem claros.
*/ function duckForVoice() {
     /* Atualiza speech Ducked usando true.
*/ speechDucked = true;
     /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ refreshTensionMix();
     /* Percorre os itens e executa a função indicada em cada um.
*/ channels.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (audio,id) => {  /* Atualiza audio.volume usando o resultado de Math.min.
*/ audio.volume =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(audio.volume,  /* esse comando calcula o volume da música levando em conta a fala, os efeitos e a tensão da cena. */ musicGain( /* Procura o primeiro item que passa na condição indicada. */ tracks.find( /* Essa função recebe track e devolve o resultado dessa expressão. */ track => track.id === id))); });
     /* Esse teste confere se voice Duck Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (voiceDuckTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(voiceDuckTimer);
     /* Atualiza voice Duck Timer usando o resultado de set Timeout.
*/ voiceDuckTimer =  /* Agenda essa função para depois do intervalo indicado. */ setTimeout(releaseVoiceDuck, 150);
  }
   /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ function stopVoice() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ previewGeneration++;
     /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(voices);  /* Atualiza last Voice usando o resultado dessa expressão.
*/ lastVoice = -Infinity;
     /* Esse teste confere se preview Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (previewTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(previewTimer);
     /* Atualiza preview Timer usando um valor vazio.
*/ previewTimer = null;
     /* Essa declaração usa const para preparar was Previewing, mantendo essas referências fixas.
*/ const  /* Aqui was Previewing recebe previewing.
*/ wasPreviewing = previewing;  /* Atualiza previewing usando false.
*/ previewing = false;
     /* esse comando encerra o intervalo de fala e devolve espaço para a música e o ambiente.
*/ releaseVoiceDuck();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (wasPreviewing && paused && !uiPreviewing && context?.state === 'running')  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.suspend().catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
  }
   /* esse comando cancela sons e esperas das janelas de interface sem retomar o jogo.
*/ function stopUi(suspend=false) {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ uiGeneration++;  /* Esvazia esse conjunto ou mapa.
*/ uiPending.clear();
     /* Esse teste confere se ui Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (uiTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(uiTimer);
     /* Atualiza ui Timer usando um valor vazio.
*/ uiTimer = null;  /* Atualiza ui Previewing usando false.
*/ uiPreviewing = false;
     /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(uiEffects);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (suspend && paused && !previewing && context?.state === 'running')  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.suspend().catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
  }
   /* esse comando cancela as fontes de voz, efeitos, ambiente e tensão antes de suspender o áudio.
*/ function stopSynth() {
     /* esse comando interrompe o susto e invalida qualquer retomada de áudio que ainda esteja esperando.
*/ cancelScare();  /* esse comando cancela sons e esperas das janelas de interface sem retomar o jogo.
*/ stopUi();  /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice();  /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(effects);
     /* esse comando cancela o próximo som do quarto e encerra as fontes de ambiente atuais.
*/ stopRoom();
     /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ stopPulse();
     /* Esse teste confere se duck Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (duckTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(duckTimer);
     /* Atualiza pulse Timer usando um valor vazio.
*/ pulseTimer = null;  /* Atualiza duck Timer usando um valor vazio.
*/ duckTimer = null;  /* Atualiza effect Ducked usando false.
*/ effectDucked = false;
     /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ refreshTensionMix();
  }
   /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo.
*/ function emit({ /* Aqui retira o campo frequency do objeto e o recebe na variável frequency.
*/ frequency=180,  /* Aqui retira o campo end do objeto e o recebe na variável end.
*/ end=frequency,  /* Aqui retira o campo duration do objeto e o recebe na variável duration.
*/ duration=.1,  /* Aqui retira o campo delay do objeto e o recebe na variável delay.
*/ delay=0,  /* Aqui retira o campo amplitude do objeto e o recebe na variável amplitude.
*/ amplitude=.08,  /* Aqui retira o campo wave do objeto e o recebe na variável wave.
*/ wave='sine',  /* Aqui retira o campo group do objeto e o recebe na variável group.
*/ group='effects',  /* Aqui retira o campo cutoff do objeto e o recebe na variável cutoff.
*/ cutoff=1100,  /* Aqui retira o campo noise do objeto e o recebe na variável noise.
*/ noise=false,  /* Aqui retira o campo pan do objeto e o recebe na variável pan.
*/ pan=0,  /* Aqui retira o campo distance do objeto e o recebe na variável distance.
*/ distance=1,  /* Aqui retira o campo attack do objeto e o recebe na variável attack.
*/ attack=.006,  /* Aqui retira o campo hold do objeto e o recebe na variável hold.
*/ hold=0}) {
     /* Esse teste confere se o resultado de allowed não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed(group))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar pool, mantendo essas referências fixas.
*/ const  /* Aqui pool recebe uma das duas alternativas, conforme o teste.
*/ pool = group === 'voice' ? voices : group === 'scare' ? scares : group === 'ambient' ? ambience : group === 'ui' ? uiEffects : group === 'tension' ? tensionSources : effects;
     /* Essa declaração usa const para preparar active, mantendo essas referências fixas.
*/ const  /* Aqui active recebe o resultado dessa expressão.
*/ active = voices.size + effects.size + scares.size + ambience.size + uiEffects.size + tensionSources.size;
                                                                                
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (pool.size >= (group === 'voice' ? 3 : group === 'ambient' ? 3 : group === 'ui' || group === 'tension' ? 4 : 8) || active >= 8 || (group === 'tension' && active >= 5))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar now, mantendo essas referências fixas.
*/ const  /* Aqui now recebe o resultado dessa expressão.
*/ now = context.currentTime +  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.4, delay));
     /* Essa declaração usa const para preparar length, mantendo essas referências fixas.
*/ const  /* Aqui length recebe o resultado de Math.max.
*/ length =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(group==='voice'?.018:.025,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(group==='ambient'?2.4:group==='tension'?1.3:group==='scare'?1.2:.65, duration));
     /* Essa declaração usa const para preparar gain e filter, mantendo essas referências fixas.
*/ const  /* Aqui gain recebe o resultado de context.create Gain.
*/ gain =  /* Cria um controle de volume para essa camada sonora. */ context.createGain(),  /* Aqui filter recebe o resultado de context.create Biquad Filter.
*/ filter =  /* Executa context.create Biquad Filter com os valores definidos nessa parte. */ context.createBiquadFilter();
     /* Atualiza filter.type usando lowpass.
*/ filter.type = 'lowpass';  /* Atualiza o valor desse campo ou controle.
*/ filter.frequency.value =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(100,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1800, cutoff));  /* Atualiza o valor desse campo ou controle.
*/ filter.Q.value = .6;
     /* Essa declaração usa let para preparar source, permitindo atualizar esses valores depois.
*/ let  /* Aqui source recebe nenhum valor inicial.
*/ source;
     /* Esse teste confere se noise está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (noise) {
       /* Atualiza source usando o resultado de context.create Buffer Source.
*/ source =  /* Cria uma fonte para tocar os dados de áudio preparados. */ context.createBufferSource();
       /* Essa declaração usa const para preparar buffer, mantendo essas referências fixas.
*/ const  /* Aqui buffer recebe o resultado de context.create Buffer.
*/ buffer =  /* Prepara um bloco de amostras de áudio. */ context.createBuffer(1,  /* Arredonda o número para cima. */ Math.ceil(context.sampleRate * length), context.sampleRate);
       /* Essa declaração usa const para preparar values, mantendo essas referências fixas.
*/ const  /* Aqui values recebe o resultado de buffer.get Channel Data.
*/ values =  /* Obtém as amostras de um canal para preencher ou medir o som. */ buffer.getChannelData(0);
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i = 0; i < values.length;  /* Aumenta i em um para atualizar o contador. */ i++)  /* Atualiza values.i usando o resultado dessa expressão.
*/ values[i] = ( /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random() * 2 - 1) * (1 - i / values.length);
       /* Atualiza source.buffer usando buffer.
*/ source.buffer = buffer;
    } else {
       /* Atualiza source usando o resultado de context.create Oscillator.
*/ source =  /* Cria uma fonte de onda para gerar um som. */ context.createOscillator();  /* Atualiza source.type usando wave.
*/ source.type = wave;
       /* Agenda o valor desse parâmetro de áudio no instante indicado.
*/ source.frequency.setValueAtTime( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(35,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(800, frequency)), now);
       /* Faz o parâmetro chegar ao valor indicado por uma transição exponencial.
*/ source.frequency.exponentialRampToValueAtTime( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(35,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(800, end)), now + length);
    }
     /* Essa declaração usa const para preparar depth, mantendo essas referências fixas.
*/ const  /* Aqui depth recebe o resultado de Math.max.
*/ depth =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(8,  /* Converte esse valor para número. */ Number(distance) || 1));
     /* Essa declaração usa const para preparar peak, mantendo essas referências fixas.
*/ const  /* Aqui peak recebe o resultado dessa expressão.
*/ peak =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(group==='ambient'?.1:.18, amplitude)) / (1 + (depth - 1) * .55);
     /* Agenda o valor desse parâmetro de áudio no instante indicado.
*/ gain.gain.setValueAtTime(0, now);
     /* Faz o parâmetro chegar ao valor indicado por uma transição linear.
*/ gain.gain.linearRampToValueAtTime(peak, now +  /* Escolhe o menor valor entre os valores recebidos. */ Math.min( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.003, attack), length / 3));
     /* Esse teste confere se group é igual a voice, e só entra nesse caminho quando a condição passa.
*/ if (group === 'voice')  /* Agenda o valor desse parâmetro de áudio no instante indicado.
*/ gain.gain.setValueAtTime(peak * .85, now + length * .42);
     /* Esse teste confere se hold é maior que 0, e só entra nesse caminho quando a condição passa.
*/ if (hold > 0)  /* Agenda o valor desse parâmetro de áudio no instante indicado.
*/ gain.gain.setValueAtTime(peak * .88, now +  /* Escolhe o maior valor entre os valores recebidos. */ Math.max( /* Escolhe o menor valor entre os valores recebidos. */ Math.min( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.003, attack),length/3), /* Escolhe o menor valor entre os valores recebidos. */ Math.min(length-.025,hold)));
     /* Faz o parâmetro chegar ao valor indicado por uma transição exponencial.
*/ gain.gain.exponentialRampToValueAtTime(.0001, now + length);
     /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ source.connect(filter);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ filter.connect(gain);
     /* Essa declaração usa const para preparar bus, mantendo essas referências fixas.
*/ const  /* Aqui bus recebe uma das duas alternativas, conforme o teste.
*/ bus = group === 'voice' ? voiceBus : group === 'scare' ? scareBus : group === 'ambient' ? ambientBus : group === 'tension' ? tensionBus : effectsBus;
     /* Essa declaração usa let para preparar panner, permitindo atualizar esses valores depois.
*/ let  /* Aqui panner recebe um valor vazio.
*/ panner = null;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (pan && context.createStereoPanner) {
       /* Atualiza panner usando o resultado de context.create Stereo Panner.
*/ panner =  /* Executa context.create Stereo Panner com os valores definidos nessa parte. */ context.createStereoPanner();  /* Atualiza o valor desse campo ou controle.
*/ panner.pan.value =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(-.4,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.4, pan));
       /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ gain.connect(panner);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ panner.connect(bus);
    } else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (pan && context.createPanner) {
                                                                     
       /* Atualiza panner usando o resultado de context.create Panner.
*/ panner =  /* Executa context.create Panner com os valores definidos nessa parte. */ context.createPanner();  /* Atualiza panner.panning Model usando equalpower.
*/ panner.panningModel = 'equalpower';  /* Atualiza panner.rolloff Factor usando 0.
*/ panner.rolloffFactor = 0;
       /* Essa declaração usa const para preparar angle, mantendo essas referências fixas.
*/ const  /* Aqui angle recebe o resultado dessa expressão.
*/ angle =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(-.4,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.4, pan)) * Math.PI / 2;
       /* Esse teste confere se panner.position X está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (panner.positionX) {
         /* Atualiza o valor desse campo ou controle.
*/ panner.positionX.value =  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle);  /* Atualiza o valor desse campo ou controle.
*/ panner.positionY.value = 0;  /* Atualiza o valor desse campo ou controle.
*/ panner.positionZ.value = - /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle);
      } else  /* Executa panner.set Position com os valores definidos nessa parte.
*/ panner.setPosition( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle), 0, - /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle));
       /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ gain.connect(panner);  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ panner.connect(bus);
    } else  /* Liga essa etapa à próxima etapa do caminho do áudio.
*/ gain.connect(bus);
     /* Essa declaração usa const para preparar entry, mantendo essas referências fixas.
*/ const  /* Aqui entry recebe um objeto com os campos dessa parte.
*/ entry = { /* Esse campo guarda source com source.
*/ source,  /* Esse campo guarda gain com gain.
*/ gain,  /* Esse campo guarda filter com filter.
*/ filter,  /* Esse campo guarda panner com panner.
*/ panner};  /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ pool.add(entry);
     /* Escuta o evento ended e liga esse evento à função definida aqui.
*/ source.addEventListener('ended',  /* Essa função recebe nenhum parâmetro e devolve o resultado de remove Node. */ () =>  /* esse comando remove a fonte encerrada do grupo e desconecta as peças de áudio que ela usou. */ removeNode(entry, pool), { /* Esse campo guarda once com true.
*/ once:true});
     /* Agenda o começo dessa fonte no instante definido.
*/ source.start(now);  /* Encerra essa fonte ou tarefa no momento indicado.
*/ source.stop(now + length + (group==='voice'?.01:.015));
     /* Devolve true e encerra essa chamada da função.
*/ return true;
  }
                                                                                               
   /* Essa declaração usa const para preparar room Sounds, mantendo essas referências fixas.
*/ const  /* Aqui room Sounds recebe um objeto com os campos dessa parte.
*/ roomSounds = {
     /* Esse campo guarda felicidade com uma lista com 2 posições.
*/ felicidade:[ /* Essa posição da lista guarda pollen.
*/ 'pollen', /* Essa posição da lista guarda air.
*/ 'air'],  /* Esse campo guarda amor com uma lista com 2 posições.
*/ amor:[ /* Essa posição da lista guarda pollen.
*/ 'pollen', /* Essa posição da lista guarda air.
*/ 'air'],  /* Esse campo guarda tristeza com uma lista com 2 posições.
*/ tristeza:[ /* Essa posição da lista guarda water.
*/ 'water', /* Essa posição da lista guarda creaks.
*/ 'creaks'],
     /* Esse campo guarda orgulho com uma lista com 2 posições.
*/ orgulho:[ /* Essa posição da lista guarda embers.
*/ 'embers', /* Essa posição da lista guarda creaks.
*/ 'creaks'],  /* Esse campo guarda determinacao com uma lista com 2 posições.
*/ determinacao:[ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda distantsteps.
*/ 'distantsteps'],  /* Esse campo guarda calma com uma lista com 2 posições.
*/ calma:[ /* Essa posição da lista guarda water.
*/ 'water', /* Essa posição da lista guarda air.
*/ 'air'],
     /* Esse campo guarda ansiedade com uma lista com 2 posições.
*/ ansiedade:[ /* Essa posição da lista guarda distantsteps.
*/ 'distantsteps', /* Essa posição da lista guarda air.
*/ 'air'],  /* Esse campo guarda culpa com uma lista com 2 posições.
*/ culpa:[ /* Essa posição da lista guarda creaks.
*/ 'creaks', /* Essa posição da lista guarda water.
*/ 'water'],  /* Esse campo guarda medo com uma lista com 2 posições.
*/ medo:[ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda distantsteps.
*/ 'distantsteps'],
     /* Esse campo guarda odio com uma lista com 2 posições.
*/ odio:[ /* Essa posição da lista guarda embers.
*/ 'embers', /* Essa posição da lista guarda creaks.
*/ 'creaks'],  /* Esse campo guarda jardim com uma lista com 2 posições.
*/ jardim:[ /* Essa posição da lista guarda pollen.
*/ 'pollen', /* Essa posição da lista guarda air.
*/ 'air'],  /* Esse campo guarda praca com uma lista com 2 posições.
*/ praca:[ /* Essa posição da lista guarda water.
*/ 'water', /* Essa posição da lista guarda air.
*/ 'air'],
     /* Esse campo guarda sanidade com uma lista com 2 posições.
*/ sanidade:[ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda water.
*/ 'water'],  /* Esse campo guarda insanidade com uma lista com 2 posições.
*/ insanidade:[ /* Essa posição da lista guarda creaks.
*/ 'creaks', /* Essa posição da lista guarda distantsteps.
*/ 'distantsteps']
  };
   /* esse comando cancela o próximo som do quarto e encerra as fontes de ambiente atuais.
*/ function stopRoom() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ roomGeneration++;
     /* Esse teste confere se room Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (roomTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(roomTimer);
     /* Atualiza room Timer usando um valor vazio.
*/ roomTimer = null;
     /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(ambience);
  }
   /* esse comando limpa a referência do ambiente quando a cena deixa de representar um quarto.
*/ function clearRoom() {  /* esse comando cancela o próximo som do quarto e encerra as fontes de ambiente atuais.
*/ stopRoom();  /* Atualiza room usando um valor vazio.
*/ room = null;  /* Atualiza room Entry Pending usando um valor vazio.
*/ roomEntryPending = null;  /* Atualiza last Ambient usando um texto vazio.
*/ lastAmbient = ''; }
   /* esse comando informa qual quarto e direção estão na tela e identifica uma entrada ou uma mudança de vista.
*/ function setRoom(id, view=0, options={}) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === null || id === undefined || id === '') {  /* esse comando limpa a referência do ambiente quando a cena deixa de representar um quarto.
*/ clearRoom();  /* Encerra essa função sem devolver outro valor.
*/ return; }
     /* Essa declaração usa const para preparar next, mantendo essas referências fixas.
*/ const  /* Aqui next recebe um objeto com os campos dessa parte.
*/ next = { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: /* Converte esse valor para texto. */ String(id),  /* Indica qual das quatro direções do quarto usa esse conteúdo.
*/ view:(( /* Retira a parte decimal desse número sem arredondar para outro inteiro. */ Math.trunc( /* Converte esse valor para número. */ Number(view) || 0) % 4) + 4) % 4,  /* Relaciona as ausências que mudam essa parte da história.
*/ dead:options.dead === true,  /* Esse campo guarda reduced com o resultado dessa expressão.
*/ reduced:options.reduced === true};
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (room &&  /* Confere se todos os itens passam no teste. */ Object.keys(next).every( /* Essa função recebe key e devolve o resultado dessa expressão. */ key => room[key] === next[key]))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza room Entry Pending usando uma das duas alternativas, conforme o teste.
*/ roomEntryPending = !presentedRoom || presentedRoom.id !== next.id ? 'enter' : presentedRoom.view !== next.view ? 'turn' : null;
     /* Atualiza presented Room usando um objeto com os campos dessa parte.
*/ presentedRoom = { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:next.id, /* Indica qual das quatro direções do quarto usa esse conteúdo.
*/ view:next.view};
     /* Atualiza room usando next.
*/ room = next;
     /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ startRoom();
  }
   /* esse comando monta sons de água, vento, brasas, rangidos e passos com as características do ambiente.
*/ function roomSound(kind, pan, distance, level=1) {
     /* Essa declaração usa let para preparar result, permitindo atualizar esses valores depois.
*/ let  /* Aqui result recebe false.
*/ result = false;
     /* Essa declaração usa const para preparar tone, mantendo essas referências fixas.
*/ const  /* Aqui tone recebe uma função para executar quando for chamada.
*/ tone =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ options => {  /* Atualiza result usando o resultado dessa expressão.
*/ result =  /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo. */ emit({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...options,  /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:level>1.5? /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.18,(options.duration||.1)*.45):0,  /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:(options.amplitude || .04) * level,  /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:'ambient',  /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan,  /* aqui fica a distância usada para reduzir um som que parece estar longe.
*/ distance}) || result; };
     /* Esse teste confere se kind é igual a air, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'air')  /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:1.7, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.35, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.06, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:490});
    else  /* Esse teste confere se kind é igual a pollen, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'pollen') {
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:1.1, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.25, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.035, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:720});
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:245 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*45, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:230, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.46, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.18, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.06, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.022, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:650});
    } else  /* Esse teste confere se kind é igual a water, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'water') {
       /* Essa declaração usa const para preparar pitch, mantendo essas referências fixas.
*/ const  /* Aqui pitch recebe o resultado dessa expressão.
*/ pitch = 270 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*90;
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:pitch, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:pitch*.7, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.19, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.008, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.058, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:900});
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.4, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.14, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.06, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.032, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:780});
    } else  /* Esse teste confere se kind é igual a embers, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'embers') {
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.12, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.008, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.044, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:670});
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:75, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:54, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.38, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.04, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.035, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:240});
    } else  /* Esse teste confere se kind é igual a creaks, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'creaks') {
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:135 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*25, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:96, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.46, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.09, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.046, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:420});
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.35, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.08, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.08, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.023, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:400});
    } else  /* Esse teste confere se kind é igual a distantsteps, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'distantsteps') {
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.095, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.06, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:330});
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:84, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:58, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.13, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.045, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:190});
       /* esse comando envia uma camada do ambiente com intensidade, posição e sustentação ajustadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.1, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.29, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.043, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:350});
    }
     /* Esse teste confere se result está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (result) {  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ ambientPlayed++;  /* Atualiza last Ambient usando kind.
*/ lastAmbient = kind; }
     /* Devolve result e encerra essa chamada da função.
*/ return result;
  }
                                                                                                               
   /* esse comando dá um retorno sonoro ao entrar, virar ou observar um objeto no quarto sem repetir tudo a cada desenho.
*/ function roomCue(action='inspect', options={}) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!room || ! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('ambient') || scares.size || ! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda enter.
*/ 'enter', /* Essa posição da lista guarda turn.
*/ 'turn', /* Essa posição da lista guarda inspect.
*/ 'inspect'].includes(action))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar now, mantendo essas referências fixas.
*/ const  /* Aqui now recebe context.current Time.
*/ now=context.currentTime;
     /* Esse teste confere se o resultado dessa expressão é menor que uma das duas alternativas, conforme o teste, e só entra nesse caminho quando a condição passa.
*/ if(now-lastRoomCue<(action==='inspect'?.35:.6)) /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar choices, mantendo essas referências fixas.
*/ const  /* Aqui choices recebe uma das duas alternativas, conforme o teste.
*/ choices=room.dead?[ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda creaks.
*/ 'creaks']:roomSounds[room.id]||[ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda creaks.
*/ 'creaks'];
     /* Essa declaração usa const para preparar kind, mantendo essas referências fixas.
*/ const  /* Aqui kind recebe uma das duas alternativas, conforme o teste.
*/ kind= /* Confere se esse valor está presente na lista ou no texto. */ choices.includes(options.kind)?options.kind:choices[room.view%choices.length];
     /* Essa declaração usa const para preparar pan, mantendo essas referências fixas.
*/ const  /* Aqui pan recebe uma das duas alternativas, conforme o teste.
*/ pan= /* Confere se o valor é um número finito. */ Number.isFinite(options.pan)?options.pan: /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(room.view*Math.PI/2)*.3;
     /* Essa declaração usa const para preparar played, mantendo essas referências fixas.
*/ const  /* Aqui played recebe o resultado de room Sound.
*/ played= /* esse comando monta sons de água, vento, brasas, rangidos e passos com as características do ambiente. */ roomSound(kind,pan,1,action==='turn'?1.65:2.25);
     /* Esse teste confere se played está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(played){ /* Atualiza last Room Cue usando now.
*/ lastRoomCue=now; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ roomCuesPlayed++; /* esse comando baixa a trilha por um intervalo curto para um efeito importante não se perder na música.
*/ duckForEffect(action==='inspect'?330:420);}
     /* Devolve played e encerra essa chamada da função.
*/ return played;
  }
   /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ function startRoom() {
     /* esse comando cancela o próximo som do quarto e encerra as fontes de ambiente atuais.
*/ stopRoom();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!room || ! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('ambient'))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(roomEntryPending&& /* esse comando dá um retorno sonoro ao entrar, virar ou observar um objeto no quarto sem repetir tudo a cada desenho. */ roomCue(roomEntryPending)) /* Atualiza room Entry Pending usando um valor vazio.
*/ roomEntryPending=null;
     /* Essa declaração usa const para preparar token, mantendo essas referências fixas.
*/ const  /* Aqui token recebe room Generation.
*/ token = roomGeneration;
     /* Essa declaração usa const para preparar schedule, mantendo essas referências fixas.
*/ const  /* Aqui schedule recebe uma função para executar quando for chamada.
*/ schedule =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ initial => {
       /* Essa declaração usa const para preparar spacing, mantendo essas referências fixas.
*/ const  /* Aqui spacing recebe o resultado dessa expressão.
*/ spacing = 2400 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*1400 + (room.dead ? 700 : 0);
       /* Atualiza room Timer usando o resultado de set Timeout.
*/ roomTimer =  /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Atualiza room Timer usando um valor vazio.
*/ roomTimer = null;
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (token !== roomGeneration || !room || ! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('ambient'))  /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Esse teste confere se room Entry Pending está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(roomEntryPending){ /* Esse teste confere se o resultado de room Cue está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando dá um retorno sonoro ao entrar, virar ou observar um objeto no quarto sem repetir tudo a cada desenho. */ roomCue(roomEntryPending)) /* Atualiza room Entry Pending usando um valor vazio.
*/ roomEntryPending=null; /* Executa schedule com os valores definidos nessa parte.
*/ schedule(true); /* Encerra essa função sem devolver outro valor.
*/ return;}
         /* Essa declaração usa const para preparar choices, mantendo essas referências fixas.
*/ const  /* Aqui choices recebe uma das duas alternativas, conforme o teste.
*/ choices = room.dead ? [ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda creaks.
*/ 'creaks'] : roomSounds[room.id] || [ /* Essa posição da lista guarda air.
*/ 'air', /* Essa posição da lista guarda creaks.
*/ 'creaks'];
         /* Essa declaração usa const para preparar kind, mantendo essas referências fixas.
*/ const  /* Aqui kind recebe choices.
*/ kind = choices[ /* Arredonda o número para baixo. */ Math.floor( /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*choices.length)];
         /* Essa declaração usa const para preparar source Angle, mantendo essas referências fixas.
*/ const  /* Aqui source Angle recebe o resultado dessa expressão.
*/ sourceAngle = ( /* Procura a posição desse valor na lista ou no texto. */ choices.indexOf(kind) ? 1.1 : -.8) - room.view*Math.PI/2;
         /* Esse teste confere se scares.size não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!scares.size) /* esse comando monta sons de água, vento, brasas, rangidos e passos com as características do ambiente.
*/ roomSound(kind,  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(sourceAngle)*.34, kind==='distantsteps'?2.2:1.1,1.35);
         /* Executa schedule com os valores definidos nessa parte.
*/ schedule(false);
      }, roomEntryPending ? 120 : initial ? 1600 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*500 : spacing);
    };
     /* esse comando espera o intervalo do ambiente e confere se o quarto ainda é o mesmo antes de tocar.
*/ schedule(true);
  }
   /* esse comando toca os pequenos sons de objetos e interface com direção e distância controladas.
*/ function spatialCue(kind, options={}) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (kind && typeof kind === 'object') {  /* Atualiza options usando kind.
*/ options = kind;  /* Atualiza kind usando options.kind.
*/ kind = options.kind; }
     /* Essa declaração usa const para preparar is Ui, mantendo essas referências fixas.
*/ const  /* Aqui is Ui recebe o resultado dessa expressão.
*/ isUi = options.ui === true && paused;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('effects') && !(isUi && unlocked && !muted && !pageHidden && effectsVolume > 0 && context))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe o resultado de String.
*/ key =  /* Converte esse valor para texto. */ String(kind);
     /* Essa declaração usa const para preparar intervals, mantendo essas referências fixas.
*/ const  /* Aqui intervals recebe um objeto com os campos dessa parte.
*/ intervals = { /* Esse campo guarda inspect com 0.28.
*/ inspect:.28, /* Esse campo guarda item com 0.55.
*/ item:.55, /* Esse campo guarda notification com 0.6.
*/ notification:.6, /* Esse campo guarda page com 0.18.
*/ page:.18, /* Esse campo guarda bag com 0.24.
*/ bag:.24, /* Esse campo guarda turn com 0.12.
*/ turn:.12, /* Esse campo guarda door com 0.6.
*/ door:.6, /* Esse campo guarda enter com 0.8.
*/ enter:.8};
     /* Esse teste confere se o resultado de Object.prototype.has Own Property.call não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse campo pertence diretamente ao objeto consultado. */ Object.prototype.hasOwnProperty.call(intervals,key))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar now e timer Key, mantendo essas referências fixas.
*/ const  /* Aqui now recebe context.current Time.
*/ now = context.currentTime,  /* Aqui timer Key recebe o resultado dessa expressão.
*/ timerKey = 'spatial:' + key;
     /* Esse teste confere se o resultado dessa expressão é menor que intervals.key, e só entra nesse caminho quando a condição passa.
*/ if (now - ( /* Consulta o valor associado a essa chave no mapa. */ lastEffect.get(timerKey) ?? -Infinity) < intervals[key])  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Guarda o valor associado a essa chave no mapa.
*/ lastEffect.set(timerKey, now);
     /* Essa declaração usa const para preparar pan e distance, mantendo essas referências fixas.
*/ const  /* Aqui pan recebe o resultado dessa expressão.
*/ pan =  /* Converte esse valor para número. */ Number(options.pan) || 0,  /* Aqui distance recebe o resultado dessa expressão.
*/ distance =  /* Converte esse valor para número. */ Number(options.distance) || 1;
     /* Essa declaração usa const para preparar closing, mantendo essas referências fixas.
*/ const  /* Aqui closing recebe o resultado dessa expressão.
*/ closing = options.variant === 'close';
     /* Essa declaração usa const para preparar token, mantendo essas referências fixas.
*/ const  /* Aqui token recebe ui Generation.
*/ token = uiGeneration;
     /* Essa declaração usa const para preparar play, mantendo essas referências fixas.
*/ const  /* Aqui play recebe uma função para executar quando for chamada.
*/ play =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Esse teste confere se is Ui está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (isUi) {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (token !== uiGeneration || !paused || muted || pageHidden || effectsVolume === 0)  /* Devolve false e encerra essa chamada da função.
*/ return false;
       /* Atualiza ui Previewing usando true.
*/ uiPreviewing = true;
    }
     /* Essa declaração usa let para preparar result, permitindo atualizar esses valores depois.
*/ let  /* Aqui result recebe false.
*/ result = false;
     /* Essa declaração usa const para preparar tone, mantendo essas referências fixas.
*/ const  /* Aqui tone recebe uma função para executar quando for chamada.
*/ tone =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ values => {  /* Atualiza result usando o resultado dessa expressão.
*/ result =  /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo. */ emit({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...values, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan, /* aqui fica a distância usada para reduzir um som que parece estar longe.
*/ distance, /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:isUi?'ui':'effects'}) || result; };
     /* Esse teste confere se key é igual a item, e só entra nesse caminho quando a condição passa.
*/ if (key === 'item') {
       /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição da lista guarda 261.63.
*/ 261.63, /* Essa posição da lista guarda 329.63.
*/ 329.63, /* Essa posição da lista guarda 392.
*/ 392].forEach( /* Essa função recebe frequency e index e devolve o resultado de tone. */ (frequency,index) =>  /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas. */ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:frequency*.99, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.17, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:index*.065, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.065, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1000}));
    } else  /* Esse teste confere se key é igual a notification, e só entra nesse caminho quando a condição passa.
*/ if (key === 'notification') {
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:369.99, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:349.23, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.14, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.055, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:850});
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:293.66, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:277.18, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.18, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.13, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.045, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:750});
    } else  /* Esse teste confere se key é igual a inspect, e só entra nesse caminho quando a condição passa.
*/ if (key === 'inspect') {
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:196, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:220, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.09, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.05, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:750});
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:261.63, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:246.94, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.13, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.07, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.04, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:850});
    } else  /* Esse teste confere se key é igual a page, e só entra nesse caminho quando a condição passa.
*/ if (key === 'page') {
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.13, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.018, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.085, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:950});
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.09, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.09, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.045, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:650});
    } else  /* Esse teste confere se key é igual a bag, e só entra nesse caminho quando a condição passa.
*/ if (key === 'bag') {
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.16, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.022, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.075, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:closing?520:700});
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:closing?145:120, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:closing?105:155, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.12, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.05, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.04, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:420});
    } else  /* Esse teste confere se key é igual a turn, e só entra nesse caminho quando a condição passa.
*/ if (key === 'turn')  /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.09, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.012, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.055, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:650});
    else  /* Esse teste confere se key é igual a door, e só entra nesse caminho quando a condição passa.
*/ if (key === 'door') {
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:closing?135:115, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:closing?90:155, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.3, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.045, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.07, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:420});
       /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.13, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:closing?.2:0, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.07, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:430});
    } else  /* Esse teste confere se key é igual a enter, e só entra nesse caminho quando a condição passa.
*/ if (key === 'enter')  /* Envia essa camada de som sintetizado com as opções de tom, volume e duração indicadas.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.55, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.1, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.055, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:600});
     /* Esse teste confere se result está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (result) {  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ effectsPlayed++;  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ spatialPlayed++; }
     /* Esse teste confere se is Ui está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (isUi) {
       /* Esse teste confere se ui Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (uiTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(uiTimer);
       /* Atualiza ui Timer usando o resultado de set Timeout.
*/ uiTimer =  /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de stop Ui. */ () =>  /* esse comando cancela sons e esperas das janelas de interface sem retomar o jogo. */ stopUi(true), 750);
    }
     /* Devolve result e encerra essa chamada da função.
*/ return result;
    };
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (isUi && context.state === 'suspended') {
       /* Esse teste confere se ui Pending.size é maior ou igual a 3, e só entra nesse caminho quando a condição passa.
*/ if (uiPending.size >= 3)  /* Devolve false e encerra essa chamada da função.
*/ return false;
       /* Essa declaração usa const para preparar pending, mantendo essas referências fixas.
*/ const  /* Aqui pending recebe um objeto com os campos dessa parte.
*/ pending = {};  /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ uiPending.add(pending);
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.resume().then( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Retira esse valor do conjunto ou mapa.
*/ uiPending.delete(pending);
         /* Essa declaração usa const para preparar played, mantendo essas referências fixas.
*/ const  /* Aqui played recebe o resultado de play.
*/ played =  /* esse comando toca o efeito de interface somente se a janela e a autorização de áudio ainda estiverem válidas. */ play();
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!played && (paused || pageHidden || muted) && !uiPreviewing && !previewing && uiPending.size === 0 && context.state === 'running')  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.suspend().catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
      }).catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {  /* Retira esse valor do conjunto ou mapa.
*/ uiPending.delete(pending); });
       /* Devolve true e encerra essa chamada da função.
*/ return true;
    }
     /* Devolve o resultado de play e encerra essa chamada da função.
*/ return  /* esse comando toca o efeito de interface somente se a janela e a autorização de áudio ainda estiverem válidas. */ play();
  }
   /* Essa declaração usa const para preparar profiles, mantendo essas referências fixas.
*/ const  /* Aqui profiles recebe um objeto com os campos dessa parte.
*/ profiles = {
     /* Esse campo guarda sunny com uma lista com 2 posições.
*/ sunny:[ /* Essa posição da lista guarda 380.
*/ 380, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda felicidade com uma lista com 2 posições.
*/ felicidade:[ /* Essa posição da lista guarda 380.
*/ 380, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda sugar com uma lista com 2 posições.
*/ sugar:[ /* Essa posição da lista guarda 550.
*/ 550, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda candy com uma lista com 2 posições.
*/ candy:[ /* Essa posição da lista guarda 550.
*/ 550, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda amor com uma lista com 2 posições.
*/ amor:[ /* Essa posição da lista guarda 550.
*/ 550, /* Essa posição da lista guarda sine.
*/ 'sine'],
     /* Esse campo guarda ninfa com uma lista com 2 posições.
*/ ninfa:[ /* Essa posição da lista guarda 290.
*/ 290, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda tristeza com uma lista com 2 posições.
*/ tristeza:[ /* Essa posição da lista guarda 290.
*/ 290, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda aurea com uma lista com 2 posições.
*/ aurea:[ /* Essa posição da lista guarda 430.
*/ 430, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda orgulho com uma lista com 2 posições.
*/ orgulho:[ /* Essa posição da lista guarda 430.
*/ 430, /* Essa posição da lista guarda triangle.
*/ 'triangle'],
     /* Esse campo guarda friska com uma lista com 2 posições.
*/ friska:[ /* Essa posição da lista guarda 230.
*/ 230, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda determinacao com uma lista com 2 posições.
*/ determinacao:[ /* Essa posição da lista guarda 230.
*/ 230, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda pax com uma lista com 2 posições.
*/ pax:[ /* Essa posição da lista guarda 205.
*/ 205, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda calma com uma lista com 2 posições.
*/ calma:[ /* Essa posição da lista guarda 205.
*/ 205, /* Essa posição da lista guarda sine.
*/ 'sine'],
     /* Esse campo guarda hermes com uma lista com 2 posições.
*/ hermes:[ /* Essa posição da lista guarda 490.
*/ 490, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda ansiedade com uma lista com 2 posições.
*/ ansiedade:[ /* Essa posição da lista guarda 490.
*/ 490, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda lumen com uma lista com 2 posições.
*/ lumen:[ /* Essa posição da lista guarda 325.
*/ 325, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda culpa com uma lista com 2 posições.
*/ culpa:[ /* Essa posição da lista guarda 325.
*/ 325, /* Essa posição da lista guarda sine.
*/ 'sine'],
     /* Esse campo guarda hunger com uma lista com 2 posições.
*/ hunger:[ /* Essa posição da lista guarda 125.
*/ 125, /* Essa posição da lista guarda sawtooth.
*/ 'sawtooth'],  /* Esse campo guarda medo com uma lista com 2 posições.
*/ medo:[ /* Essa posição da lista guarda 125.
*/ 125, /* Essa posição da lista guarda sawtooth.
*/ 'sawtooth'],  /* Esse campo guarda beerus com uma lista com 2 posições.
*/ beerus:[ /* Essa posição da lista guarda 105.
*/ 105, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda odio com uma lista com 2 posições.
*/ odio:[ /* Essa posição da lista guarda 105.
*/ 105, /* Essa posição da lista guarda triangle.
*/ 'triangle'],
     /* Esse campo guarda cassidy com uma lista com 2 posições.
*/ cassidy:[ /* Essa posição da lista guarda 410.
*/ 410, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda sanidade com uma lista com 2 posições.
*/ sanidade:[ /* Essa posição da lista guarda 410.
*/ 410, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda mizzery com uma lista com 2 posições.
*/ mizzery:[ /* Essa posição da lista guarda 160.
*/ 160, /* Essa posição da lista guarda sawtooth.
*/ 'sawtooth'],  /* Esse campo guarda insanidade com uma lista com 2 posições.
*/ insanidade:[ /* Essa posição da lista guarda 160.
*/ 160, /* Essa posição da lista guarda sawtooth.
*/ 'sawtooth'],
     /* Esse campo guarda anata com uma lista com 2 posições.
*/ anata:[ /* Essa posição da lista guarda 250.
*/ 250, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda neutralidade com uma lista com 2 posições.
*/ neutralidade:[ /* Essa posição da lista guarda 250.
*/ 250, /* Essa posição da lista guarda triangle.
*/ 'triangle'],  /* Esse campo guarda jardim com uma lista com 2 posições.
*/ jardim:[ /* Essa posição da lista guarda 255.
*/ 255, /* Essa posição da lista guarda sine.
*/ 'sine'],  /* Esse campo guarda voce com uma lista com 2 posições.
*/ voce:[ /* Essa posição da lista guarda 300.
*/ 300, /* Essa posição da lista guarda triangle.
*/ 'triangle']
  };
   /* esse comando transforma cada caractere permitido em um bipe curto com o timbre do personagem.
*/ function voice(letter, speaker='Jardim') {
     /* Essa declaração usa const para preparar character, mantendo essas referências fixas.
*/ const  /* Aqui character recebe o resultado de .char At.
*/ character =  /* Executa .char At com os valores definidos nessa parte. */ String(letter || '').charAt(0);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se o texto corresponde a esse padrão de expressão regular. */ /[A-Za-zÀ-ÖØ-öø-ÿ0-9]/u.test(character) || ! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('voice'))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar now, mantendo essas referências fixas.
*/ const  /* Aqui now recebe context.current Time.
*/ now = context.currentTime;
                                                                                                             
     /* Essa declaração usa const para preparar scheduled, mantendo essas referências fixas.
*/ const  /* Aqui scheduled recebe o resultado de Math.max.
*/ scheduled =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(now, lastVoice + .03);
     /* Esse teste confere se o resultado dessa expressão é maior que 0.075, e só entra nesse caminho quando a condição passa.
*/ if (scheduled - now > .075)  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar name, mantendo essas referências fixas.
*/ const  /* Aqui name recebe o resultado de .to Locale Lower Case.
*/ name =  /* Converte o texto para minúsculas respeitando o idioma indicado. */ String(speaker).normalize('NFD').replace(/[̀-ͯ]/g, '').toLocaleLowerCase('pt-BR');
     /* Essa declaração usa const para preparar profile, mantendo essas referências fixas.
*/ const  /* Aqui profile recebe o resultado dessa expressão.
*/ profile = profiles[name] || [ /* Essa posição da lista guarda 280.
*/ 280, /* Essa posição da lista guarda sine.
*/ 'sine'];
     /* Essa declaração usa const para preparar semitones, mantendo essas referências fixas.
*/ const  /* Aqui semitones recebe o resultado dessa expressão.
*/ semitones = (( /* Executa .char Code At com os valores definidos nessa parte. */ character.toLocaleLowerCase('pt-BR').charCodeAt(0) % 7) - 3) * .45;
     /* Essa declaração usa const para preparar frequency, mantendo essas referências fixas.
*/ const  /* Aqui frequency recebe o resultado dessa expressão.
*/ frequency = profile[0] *  /* Eleva a base ao expoente indicado. */ Math.pow(2, semitones / 12);
                                                                                               
     /* Essa declaração usa const para preparar done, mantendo essas referências fixas.
*/ const  /* Aqui done recebe o resultado de emit.
*/ done =  /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo. */ emit({ /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:'voice', /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:frequency*.98, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.034, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:scheduled-now, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:profile[1]==='sawtooth'?.14:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:profile[1], /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:profile[1]==='sawtooth'?600:profile[1]==='triangle'?1050:1200});
     /* Esse teste confere se done está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (done) {  /* Atualiza last Voice usando scheduled.
*/ lastVoice = scheduled;  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ voicePlayed++;  /* Atualiza last Voice Profile usando um objeto com os campos dessa parte.
*/ lastVoiceProfile = { /* Esse campo guarda speaker com o resultado de String.
*/ speaker: /* Converte esse valor para texto. */ String(speaker), /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency: /* Arredonda o número para o inteiro mais próximo. */ Math.round(frequency), /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:profile[1]};  /* Esse teste confere se previewing não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!previewing)  /* esse comando baixa a música e o ambiente por um instante para os bipes do diálogo ficarem claros.
*/ duckForVoice(); }
     /* Devolve done e encerra essa chamada da função.
*/ return done;
  }
   /* esse comando toca uma amostra curta da voz escolhida para conferir o volume nas configurações.
*/ async function previewVoice(speaker='Anata') {
     /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice();
     /* Essa declaração usa const para preparar token, mantendo essas referências fixas.
*/ const  /* Aqui token recebe preview Generation.
*/ token = previewGeneration;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (muted || pageHidden || voiceVolume === 0)  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando prepara o áudio depois de uma interação e tenta retomar o contexto quando o navegador permite. */ unlock();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (token !== previewGeneration || muted || voiceVolume === 0 || context?.state !== 'running')  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Atualiza previewing usando true.
*/ previewing = true;
     /* Essa declaração usa const para preparar accepted, mantendo essas referências fixas.
*/ const  /* Aqui accepted recebe o resultado de voice.
*/ accepted =  /* esse comando transforma cada caractere permitido em um bipe curto com o timbre do personagem. */ voice('a',speaker);
                                                                              
     /* Esse teste confere se accepted está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (accepted) {
       /* Essa declaração usa const para preparar profile, mantendo essas referências fixas.
*/ const  /* Aqui profile recebe last Voice Profile.
*/ profile = lastVoiceProfile;
       /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo.
*/ emit({ /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:'voice', /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:profile.frequency*1.06, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.055, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.085, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:profile.wave});
       /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo.
*/ emit({ /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:'voice', /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:profile.frequency*.97, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.055, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.18, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:profile.wave});
    }
     /* Atualiza preview Timer usando o resultado de set Timeout.
*/ previewTimer =  /* Agenda essa função para depois do intervalo indicado. */ setTimeout(stopVoice, 280);
     /* Devolve accepted e encerra essa chamada da função.
*/ return accepted;
  }
   /* esse comando ajusta e salva o volume dos bipes e encerra a fala quando ele fica em zero.
*/ function setVoiceVolume(value) {
     /* Essa declaração usa const para preparar number, mantendo essas referências fixas.
*/ const  /* Aqui number recebe o resultado de Number.
*/ number =  /* Converte esse valor para número. */ Number(value);  /* Esse teste confere se o resultado de Number.is Finite não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se o valor é um número finito. */ Number.isFinite(number))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza voice Volume usando o resultado de Math.max.
*/ voiceVolume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, number));  /* esse comando guarda as preferências de música, voz, efeitos e silêncio neste navegador.
*/ persist();
     /* Esse teste confere se voice Bus está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (voiceBus)  /* Aproxima o parâmetro do valor de destino de forma suave.
*/ voiceBus.gain.setTargetAtTime(voiceVolume, context.currentTime, .015);
     /* Esse teste confere se voice Volume é igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (voiceVolume === 0)  /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice();
  }
   /* esse comando atualiza os canais de efeitos, ambientes e sustos respeitando a escolha de volume zero.
*/ function setEffectsVolume(value) {
     /* Essa declaração usa const para preparar number, mantendo essas referências fixas.
*/ const  /* Aqui number recebe o resultado de Number.
*/ number =  /* Converte esse valor para número. */ Number(value);  /* Esse teste confere se o resultado de Number.is Finite não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se o valor é um número finito. */ Number.isFinite(number))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza effects Volume usando o resultado de Math.max.
*/ effectsVolume =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, number));  /* esse comando guarda as preferências de música, voz, efeitos e silêncio neste navegador.
*/ persist();
     /* Esse teste confere se effects Bus está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (effectsBus)  /* Aproxima o parâmetro do valor de destino de forma suave.
*/ effectsBus.gain.setTargetAtTime(effectsVolume, context.currentTime, .015);
     /* Esse teste confere se ambient Bus está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (ambientBus)  /* Aproxima o parâmetro do valor de destino de forma suave.
*/ ambientBus.gain.setTargetAtTime(effectsVolume * 1.65 * (speechDucked ? .38 : 1), context.currentTime, .015);
     /* Esse teste confere se scare Bus está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (scareBus)  /* Aproxima o parâmetro do valor de destino de forma suave.
*/ scareBus.gain.setTargetAtTime(effectsVolume * 2.2, context.currentTime, .015);
     /* Esse teste confere se effects Volume é igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (effectsVolume === 0) {
       /* esse comando interrompe o susto e invalida qualquer retomada de áudio que ainda esteja esperando.
*/ cancelScare();  /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(effects);  /* esse comando cancela sons e esperas das janelas de interface sem retomar o jogo.
*/ stopUi(true);  /* esse comando cancela o próximo som do quarto e encerra as fontes de ambiente atuais.
*/ stopRoom();  /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ stopPulse();
       /* Esse teste confere se duck Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (duckTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(duckTimer);
       /* Atualiza duck Timer usando um valor vazio.
*/ duckTimer = null;  /* Atualiza effect Ducked usando false.
*/ effectDucked = false;  /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ refreshTensionMix();  /* esse comando aproxima o volume das músicas do nível certo sem interromper uma troca que já está acontecendo.
*/ refreshMusicMix();
    }
    else {  /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();  /* esse comando agenda os próximos sons do ambiente e tenta novamente uma entrada que precisou esperar.
*/ startRoom(); }
  }
   /* esse comando transforma o valor recebido em um número entre zero e um usando uma alternativa quando necessário.
*/ function unit(value, fallback=0) {
     /* Essa declaração usa const para preparar parsed, mantendo essas referências fixas.
*/ const  /* Aqui parsed recebe o resultado de Number.
*/ parsed =  /* Converte esse valor para número. */ Number(value);
     /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return  /* Confere se o valor é um número finito. */ Number.isFinite(parsed) ?  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, parsed)) : fallback;
  }
   /* esse comando encontra o perfil de tensão ativo ou o pulso simples do labirinto.
*/ function pulseProfile() {
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return tension || (legacyPulse && scene === 'maze' ? { /* Esse campo guarda value com 0.65.
*/ value:.65, /* Esse campo guarda kind com chase.
*/ kind:'chase', /* aqui fica a proximidade da ameaça usada para intensificar o pulso.
*/ proximity:.55, /* aqui fica a fração de vida usada para representar a fragilidade do protagonista no áudio.
*/ health:1, /* aqui fica o aviso de que o inimigo está preparando um golpe.
*/ charging:false} : null);
  }
   /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ function stopPulse() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ pulseGeneration++;
     /* Esse teste confere se pulse Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (pulseTimer !== null)  /* Cancela essa repetição.
*/ clearInterval(pulseTimer);
     /* Atualiza pulse Timer usando um valor vazio.
*/ pulseTimer = null;
     /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(tensionSources);
     /* Atualiza tension Level usando 0.
*/ tensionLevel = 0;  /* Atualiza tension Phase usando silent.
*/ tensionPhase = 'silent';
     /* Atualiza rest Until usando 0.
*/ restUntil = 0;  /* Atualiza windup Pending usando false.
*/ windupPending = false;
     /* esse comando aproxima o volume das músicas do nível certo sem interromper uma troca que já está acontecendo.
*/ refreshMusicMix();
  }
                                                                                                          
   /* esse comando recebe o perigo da cena e atualiza o ritmo sem reiniciar o relógio a cada quadro.
*/ function setTension(value, options={}) {
     /* Essa declaração usa const para preparar amount, mantendo essas referências fixas.
*/ const  /* Aqui amount recebe o resultado de unit.
*/ amount =  /* esse comando transforma o valor recebido em um número entre zero e um usando uma alternativa quando necessário. */ unit(value);
     /* Esse teste confere se amount não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!amount) {  /* esse comando remove o perfil de perigo e deixa a trilha livre do pulso de combate.
*/ clearTension();  /* Encerra essa função sem devolver outro valor.
*/ return; }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!options || typeof options !== 'object')  /* Atualiza options usando um objeto com os campos dessa parte.
*/ options = {};
     /* Essa declaração usa const para preparar next, mantendo essas referências fixas.
*/ const  /* Aqui next recebe um objeto com os campos dessa parte.
*/ next = {
       /* Esse campo guarda value com amount.
*/ value:amount,  /* Esse campo guarda kind com uma das duas alternativas, conforme o teste.
*/ kind: /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda boss.
*/ 'boss', /* Essa posição da lista guarda chase.
*/ 'chase', /* Essa posição da lista guarda ninfa.
*/ 'ninfa'].includes(options.kind) ? options.kind : 'chase',
       /* aqui fica a proximidade da ameaça usada para intensificar o pulso.
*/ proximity: /* esse comando transforma o valor recebido em um número entre zero e um usando uma alternativa quando necessário. */ unit(options.proximity),  /* aqui fica a fração de vida usada para representar a fragilidade do protagonista no áudio.
*/ health: /* esse comando transforma o valor recebido em um número entre zero e um usando uma alternativa quando necessário. */ unit(options.health, 1),  /* aqui fica o aviso de que o inimigo está preparando um golpe.
*/ charging:options.charging === true
    };
     /* Essa declaração usa const para preparar previous, mantendo essas referências fixas.
*/ const  /* Aqui previous recebe tension.
*/ previous = tension;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (previous &&  /* Confere se todos os itens passam no teste. */ Object.keys(next).every( /* Essa função recebe key e devolve o resultado dessa expressão. */ key => next[key] === previous[key])) {  /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();  /* Encerra essa função sem devolver outro valor.
*/ return; }
     /* Atualiza tension usando next.
*/ tension = next;  /* Atualiza legacy Pulse usando false.
*/ legacyPulse = false;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (previous && previous.kind !== next.kind)  /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ stopPulse();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (next.charging && !previous?.charging &&  /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('tension')) {
                                                                                               
       /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(tensionSources);  /* Atualiza rest Until usando o resultado dessa expressão.
*/ restUntil = context.currentTime + .28;  /* Atualiza windup Pending usando true.
*/ windupPending = true;
       /* Atualiza next Beat usando o resultado dessa expressão.
*/ nextBeat = restUntil + .32;
    } else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (previous?.charging && !next.charging) {
       /* Atualiza rest Until usando 0.
*/ restUntil = 0;  /* Atualiza windup Pending usando false.
*/ windupPending = false;
       /* Esse teste confere se context está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (context) {  /* Atualiza next Beat usando o resultado dessa expressão.
*/ nextBeat = context.currentTime + .12;  /* Atualiza next Breath usando o resultado dessa expressão.
*/ nextBreath = context.currentTime + .9; }
    }
     /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ startPulse();
  }
   /* esse comando remove o perfil de perigo e deixa a trilha livre do pulso de combate.
*/ function clearTension() {
     /* Atualiza tension usando um valor vazio.
*/ tension = null;  /* Atualiza legacy Pulse usando false.
*/ legacyPulse = false;
     /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ stopPulse();
  }
   /* esse comando organiza batimentos, respiração, graves e pequenas pausas conforme o perigo aumenta.
*/ function startPulse() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando encontra o perfil de tensão ativo ou o pulso simples do labirinto. */ pulseProfile() || ! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('tension')) {  /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ stopPulse();  /* Encerra essa função sem devolver outro valor.
*/ return; }
     /* Esse teste confere se pulse Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (pulseTimer !== null)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar token, mantendo essas referências fixas.
*/ const  /* Aqui token recebe pulse Generation.
*/ token = pulseGeneration;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ pulseStarts++;
     /* Atualiza pulse Last Time usando context.current Time.
*/ pulseLastTime = context.currentTime;
     /* Atualiza next Beat usando o resultado dessa expressão.
*/ nextBeat = pulseLastTime + .2;  /* Atualiza next Breath usando o resultado dessa expressão.
*/ nextBreath = pulseLastTime + 1.1;  /* Atualiza next Drone usando o resultado dessa expressão.
*/ nextDrone = pulseLastTime + .4;
     /* Esse teste confere se charging está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* esse comando encontra o perfil de tensão ativo ou o pulso simples do labirinto. */ pulseProfile().charging) {  /* Atualiza rest Until usando o resultado dessa expressão.
*/ restUntil = pulseLastTime + .28;  /* Atualiza windup Pending usando true.
*/ windupPending = true; }
     /* Atualiza pulse Timer usando o resultado de set Interval.
*/ pulseTimer =  /* Repete essa função no intervalo indicado. */ setInterval( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Esse teste confere se token é diferente de pulse Generation, e só entra nesse caminho quando a condição passa.
*/ if (token !== pulseGeneration)  /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Essa declaração usa const para preparar profile, mantendo essas referências fixas.
*/ const  /* Aqui profile recebe o resultado de pulse Profile.
*/ profile =  /* esse comando encontra o perfil de tensão ativo ou o pulso simples do labirinto. */ pulseProfile();
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!profile || ! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('tension')) {  /* esse comando encerra o relógio de tensão e remove os sons de batimento e respiração que estavam ativos.
*/ stopPulse();  /* Encerra essa função sem devolver outro valor.
*/ return; }
       /* Essa declaração usa const para preparar now e dt, mantendo essas referências fixas.
*/ const  /* Aqui now recebe context.current Time.
*/ now = context.currentTime,  /* Aqui dt recebe o resultado de Math.min.
*/ dt =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.25,  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, now - pulseLastTime));
       /* Atualiza pulse Last Time usando now.
*/ pulseLastTime = now;
       /* Essa declaração usa const para preparar target, mantendo essas referências fixas.
*/ const  /* Aqui target recebe o resultado de Math.min.
*/ target =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, profile.value * (.68 + profile.proximity * .27 + (1 - profile.health) * .15));
                                                                                                 
       /* Atualiza tension Level usando o resultado dessa expressão.
*/ tensionLevel += (target - tensionLevel) * (1 -  /* Calcula a exponencial usada nessa variação ou suavização. */ Math.exp(-dt / (target > tensionLevel ? .62 : 1.45)));
       /* esse comando aproxima o volume das músicas do nível certo sem interromper uma troca que já está acontecendo.
*/ refreshMusicMix(.2);
       /* Esse teste confere se now é menor que rest Until, e só entra nesse caminho quando a condição passa.
*/ if (now < restUntil) {  /* Atualiza tension Phase usando pause.
*/ tensionPhase = 'pause';  /* Encerra essa função sem devolver outro valor.
*/ return; }
       /* Essa declaração usa const para preparar level e close e fragile, mantendo essas referências fixas.
*/ const  /* Aqui level recebe tension Level.
*/ level = tensionLevel,  /* Aqui close recebe profile.proximity.
*/ close = profile.proximity,  /* Aqui fragile recebe o resultado dessa expressão.
*/ fragile = 1 - profile.health;
       /* Essa declaração usa const para preparar softness, mantendo essas referências fixas.
*/ const  /* Aqui softness recebe uma das duas alternativas, conforme o teste.
*/ softness = profile.kind === 'ninfa' ? .8 : 1;
       /* Essa declaração usa const para preparar tone, mantendo essas referências fixas.
*/ const  /* Aqui tone recebe uma função para executar quando for chamada.
*/ tone =  /* Essa função recebe values e devolve o resultado de emit. */ values =>  /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo. */ emit({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...values, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:values.amplitude * softness, /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:'tension'});
       /* Esse teste confere se profile.charging está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (profile.charging) {
         /* Atualiza tension Phase usando windup.
*/ tensionPhase = 'windup';
         /* Esse teste confere se windup Pending está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (windupPending) {
           /* Esse teste confere se o resultado de tone está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* esse comando envia uma camada do pulso com a suavidade adequada à cena de tensão. */ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:46, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:83, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.58, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.15, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.026 + level*.014, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:220}))  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ tensionWindups++;
           /* Atualiza windup Pending usando false.
*/ windupPending = false;
        }
         /* Encerra essa função sem devolver outro valor.
*/ return;
      }
       /* Atualiza tension Phase usando breathing.
*/ tensionPhase = 'breathing';
       /* Esse teste confere se now é maior ou igual a next Beat, e só entra nesse caminho quando a condição passa.
*/ if (now >= nextBeat) {
         /* Essa declaração usa const para preparar pitch, mantendo essas referências fixas.
*/ const  /* Aqui pitch recebe uma das duas alternativas, conforme o teste.
*/ pitch = profile.kind === 'ninfa' ? 72 : profile.kind === 'boss' ? 57 : 64;
         /* Essa declaração usa const para preparar weight, mantendo essas referências fixas.
*/ const  /* Aqui weight recebe o resultado dessa expressão.
*/ weight = .028 + level*.035 + close*.009 + fragile*.006;
         /* Essa declaração usa const para preparar first, mantendo essas referências fixas.
*/ const  /* Aqui first recebe o resultado de tone.
*/ first =  /* esse comando envia uma camada do pulso com a suavidade adequada à cena de tensão. */ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:pitch, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:40, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.13, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.012, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:weight, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:180 + close*90});
         /* esse comando envia uma camada do pulso com a suavidade adequada à cena de tensão.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:pitch*1.08, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:44, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.1, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.14 + (1-level)*.035, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:weight*.56, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:210});
         /* Esse teste confere se first está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (first)  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ pulsePlayed++;
         /* Essa declaração usa const para preparar pace, mantendo essas referências fixas.
*/ const  /* Aqui pace recebe o resultado dessa expressão.
*/ pace = (profile.kind === 'ninfa' ? 1.18 : profile.kind === 'boss' ? 1.04 : .98) - level*.39;
         /* Atualiza next Beat usando o resultado dessa expressão.
*/ nextBeat = now + pace * (.95 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*.1);
                                                                                      
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (first && pulsePlayed % 7 === 0) {
           /* Atualiza rest Until usando o resultado dessa expressão.
*/ restUntil = now + pace + .38;  /* Atualiza next Beat usando o resultado dessa expressão.
*/ nextBeat = restUntil + .12;
           /* Atualiza next Breath usando o resultado de Math.max.
*/ nextBreath =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(nextBreath, restUntil + .3);  /* Atualiza next Drone usando o resultado de Math.max.
*/ nextDrone =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(nextDrone, restUntil + .7);
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ tensionPauses++;
        }
      }
       /* Esse teste confere se now é maior ou igual a next Breath, e só entra nesse caminho quando a condição passa.
*/ if (now >= nextBreath) {
         /* Esse teste confere se o resultado de tone está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* esse comando envia uma camada do pulso com a suavidade adequada à cena de tensão. */ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.88 - level*.18, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.18, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.023 + level*.012, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:300 + close*170}))  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ tensionBreaths++;
         /* Atualiza next Breath usando o resultado dessa expressão.
*/ nextBreath = now + 3.5 - level*.85 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*.35;
      }
       /* Esse teste confere se now é maior ou igual a next Drone, e só entra nesse caminho quando a condição passa.
*/ if (now >= nextDrone) {
         /* Esse teste confere se o resultado de tone está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* esse comando envia uma camada do pulso com a suavidade adequada à cena de tensão. */ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:profile.kind === 'ninfa'?58:43, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:profile.kind === 'ninfa'?47:38, /* aqui fica o tempo de duração do som em segundos.
*/ duration:1.1, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.3, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.018 + level*.012, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:150}))  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ tensionDrones++;
         /* Atualiza next Drone usando o resultado dessa expressão.
*/ nextDrone = now + 4.2 - level*.8 +  /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random()*.45;
      }
    }, 100);
  }
   /* esse comando baixa a trilha por um intervalo curto para um efeito importante não se perder na música.
*/ function duckForEffect(duration=420) {
     /* Atualiza effect Ducked usando true.
*/ effectDucked = true;
     /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ refreshTensionMix();
     /* Percorre os itens e executa a função indicada em cada um.
*/ channels.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (audio,id) => {  /* Atualiza audio.volume usando o resultado de Math.min.
*/ audio.volume =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(audio.volume,  /* esse comando calcula o volume da música levando em conta a fala, os efeitos e a tensão da cena. */ musicGain( /* Procura o primeiro item que passa na condição indicada. */ tracks.find( /* Essa função recebe track e devolve o resultado dessa expressão. */ track => track.id === id))); });
     /* Esse teste confere se duck Timer é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (duckTimer !== null)  /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(duckTimer);
     /* Atualiza duck Timer usando o resultado de set Timeout.
*/ duckTimer =  /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza duck Timer usando um valor vazio.
*/ duckTimer = null;  /* Atualiza effect Ducked usando false.
*/ effectDucked = false;  /* esse comando abaixa o ambiente e o pulso enquanto os bipes de diálogo precisam aparecer.
*/ refreshTensionMix();
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!paused && !muted && !pageHidden)  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando inicia a música escolhida e faz a faixa anterior sair aos poucos. */ playSelected(.3);
    }, duration);
  }
   /* esse comando interrompe o susto e invalida qualquer retomada de áudio que ainda esteja esperando.
*/ function cancelScare() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ scareGeneration++;
     /* Atualiza scare Pending usando false.
*/ scarePending=false;
     /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(scares);
     /* Retira esse valor do conjunto ou mapa.
*/ lastEffect.delete('jumpscare');
  }
                                                                                                   
                                                                                           
   /* esse comando espera o contexto de áudio ficar pronto antes de tocar o susto e respeita pausa, silêncio e cancelamento.
*/ async function playScare(kind='insanidade') {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!unlocked||paused||muted||pageHidden||effectsVolume===0) /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* esse comando prepara os canais de voz, ambiente, sustos e efeitos com um limitador de volume na saída.
*/ ensureSynth();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!context||context.state==='closed'){ /* Atualiza scare Error usando Áudio indisponível neste navegador.
*/ scareError='Áudio indisponível neste navegador.'; /* Devolve false e encerra essa chamada da função.
*/ return false;}
     /* Essa declaração usa const para preparar ticket, mantendo essas referências fixas.
*/ const  /* Aqui ticket recebe o resultado dessa expressão.
*/ ticket= /* Aumenta scare Generation em um para atualizar o contador. */ ++scareGeneration;
     /* Atualiza scare Pending usando true.
*/ scarePending=true; /* Atualiza scare Error usando um texto vazio.
*/ scareError='';
     /* Essa declaração usa let para preparar timeout, permitindo atualizar esses valores depois.
*/ let  /* Aqui timeout recebe um valor vazio.
*/ timeout=null;
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Esse teste confere se context.state é diferente de running, e só entra nesse caminho quando a condição passa.
*/ if(context.state!=='running'){
         /* Essa declaração usa const para preparar resumed, mantendo essas referências fixas.
*/ const  /* Aqui resumed recebe o resultado da operação assíncrona.
*/ resumed= /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* Executa Promise.race com os valores definidos nessa parte. */ Promise.race([
           /* Executa essa continuação depois que a operação termina com sucesso. */ Promise.resolve( /* Pede que esse contexto retome a execução. */ context.resume()).then( /* Essa função recebe nenhum parâmetro e devolve true. */ ()=>true),
           /* Cria uma instância de Promise para usar nesse recurso. */ new Promise( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ resolve=>{ /* Atualiza timeout usando o resultado de set Timeout.
*/ timeout= /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de resolve. */ ()=> /* Entrega esse resultado como uma operação resolvida. */ resolve(false),900);})
        ]);
         /* Esse teste confere se resumed não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!resumed){ /* Atualiza scare Error usando O navegador não retomou o áudio a tempo.
*/ scareError='O navegador não retomou o áudio a tempo.'; /* Devolve false e encerra essa chamada da função.
*/ return false;}
      }
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(ticket!==scareGeneration||! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('scare')) /* Devolve false e encerra essa chamada da função.
*/ return false;
       /* Devolve o resultado de sfx e encerra essa chamada da função.
*/ return  /* esse comando escolhe e monta o efeito sonoro da ação com um intervalo mínimo para impedir repetição excessiva. */ sfx(kind==='medo'||kind==='fear'?'jumpscareFear':kind==='insanidade'||kind==='insanity'?'jumpscareInsanity':'jumpscare');
    } /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch{ /* Atualiza scare Error usando Não foi possível retomar o áudio do susto.
*/ scareError='Não foi possível retomar o áudio do susto.'; /* Devolve false e encerra essa chamada da função.
*/ return false;}
    finally{ /* Esse teste confere se timeout é diferente de um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if(timeout!==null) /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(timeout); /* Esse teste confere se ticket é igual a scare Generation, e só entra nesse caminho quando a condição passa.
*/ if(ticket===scareGeneration) /* Atualiza scare Pending usando false.
*/ scarePending=false;}
  }
   /* esse comando escolhe e monta o efeito sonoro da ação com um intervalo mínimo para impedir repetição excessiva.
*/ function sfx(kind, options={}) {
     /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda inspect.
*/ 'inspect', /* Essa posição da lista guarda item.
*/ 'item', /* Essa posição da lista guarda notification.
*/ 'notification', /* Essa posição da lista guarda page.
*/ 'page', /* Essa posição da lista guarda bag.
*/ 'bag', /* Essa posição da lista guarda door.
*/ 'door', /* Essa posição da lista guarda enter.
*/ 'enter'].includes( /* Converte esse valor para texto. */ String(kind)))  /* Devolve o resultado de spatial Cue e encerra essa chamada da função.
*/ return  /* esse comando toca os pequenos sons de objetos e interface com direção e distância controladas. */ spatialCue(kind, options);
     /* Esse teste confere se o resultado de allowed não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando confere se um grupo de sons pode tocar com as preferências e o estado atual do navegador. */ allowed('effects'))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar key e now, mantendo essas referências fixas.
*/ const  /* Aqui key recebe o resultado dessa expressão.
*/ key = ({ /* Esse campo guarda slash com cut.
*/ slash:'cut', /* Esse campo guarda shield com block.
*/ shield:'block', /* Esse campo guarda projectile Pass com projectile.
*/ projectilePass:'projectile', /* Esse campo guarda enemy Approach com approach.
*/ enemyApproach:'approach'})[ /* Converte esse valor para texto. */ String(kind)] ||  /* Converte esse valor para texto. */ String(kind),  /* Aqui now recebe context.current Time.
*/ now = context.currentTime;
     /* Essa declaração usa const para preparar intensity, mantendo essas referências fixas.
*/ const  /* Aqui intensity recebe uma das duas alternativas, conforme o teste.
*/ intensity =  /* Confere se o valor é um número finito. */ Number.isFinite( /* Converte esse valor para número. */ Number(options.intensity)) ?  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, /* Converte esse valor para número. */ Number(options.intensity))) : 1;
     /* Esse teste confere se intensity não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!intensity)  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar step Interval, mantendo essas referências fixas.
*/ const  /* Aqui step Interval recebe uma das duas alternativas, conforme o teste.
*/ stepInterval = options.pace === 'run' ? .12 : options.pace === 'sneak' ? .3 : .18;
     /* Essa declaração usa const para preparar intervals, mantendo essas referências fixas.
*/ const  /* Aqui intervals recebe um objeto com os campos dessa parte.
*/ intervals = { /* Esse campo guarda step com step Interval.
*/ step:stepInterval, /* Esse campo guarda turn com 0.12.
*/ turn:.12, /* Esse campo guarda hit com 0.08.
*/ hit:.08, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.1, /* Esse campo guarda guard com 0.1.
*/ guard:.1, /* Esse campo guarda alert com 0.25.
*/ alert:.25, /* Esse campo guarda discovery com 0.5.
*/ discovery:.5, /* Esse campo guarda death com 0.8.
*/ death:.8, /* Esse campo guarda glitch com 0.5.
*/ glitch:.5, /* Esse campo guarda jumpscare com 0.9.
*/ jumpscare:.9, /* Esse campo guarda jumpscare Fear com 0.9.
*/ jumpscareFear:.9, /* Esse campo guarda jumpscare Insanity com 0.9.
*/ jumpscareInsanity:.9, /* Esse campo guarda cut com 0.09.
*/ cut:.09, /* Esse campo guarda knife com 0.09.
*/ knife:.09, /* Esse campo guarda block com 0.12.
*/ block:.12, /* Esse campo guarda charge com 0.4.
*/ charge:.4, /* Esse campo guarda projectile com 0.13.
*/ projectile:.13, /* Esse campo guarda near Miss com 0.25.
*/ nearMiss:.25, /* Esse campo guarda approach com 0.55.
*/ approach:.55, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:.3, /* Esse campo guarda grab com 0.22.
*/ grab:.22};
     /* Essa declaração usa const para preparar scare, mantendo essas referências fixas.
*/ const  /* Aqui scare recebe o resultado de .includes.
*/ scare =  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda jumpscare.
*/ 'jumpscare', /* Essa posição da lista guarda jumpscare Fear.
*/ 'jumpscareFear', /* Essa posição da lista guarda jumpscare Insanity.
*/ 'jumpscareInsanity'].includes(key);
     /* Essa declaração usa const para preparar timer Key, mantendo essas referências fixas.
*/ const  /* Aqui timer Key recebe uma das duas alternativas, conforme o teste.
*/ timerKey = scare ? 'jumpscare' : key;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!(key in intervals) || now - ( /* Consulta o valor associado a essa chave no mapa. */ lastEffect.get(timerKey) ?? -Infinity) < intervals[key])  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Guarda o valor associado a essa chave no mapa.
*/ lastEffect.set(timerKey, now);
     /* Essa declaração usa let para preparar result, permitindo atualizar esses valores depois.
*/ let  /* Aqui result recebe false.
*/ result = false;
     /* Essa declaração usa const para preparar tone, mantendo essas referências fixas.
*/ const  /* Aqui tone recebe uma função para executar quando for chamada.
*/ tone =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ values => {
       /* Atualiza result usando o resultado dessa expressão.
*/ result =  /* esse comando cria um som com altura, duração, envelope e posição limitados antes de enviá-lo ao canal certo. */ emit({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...values,  /* aqui fica o canal de voz, ambiente, tensão, interface ou susto que recebe a fonte.
*/ group:scare?'scare':'effects',  /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:(values.amplitude ?? .08)*intensity,  /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:options.pan ?? values.pan ?? 0,  /* aqui fica a distância usada para reduzir um som que parece estar longe.
*/ distance:options.distance ?? 1}) || result;
    };
     /* Esse teste confere se key é igual a step, e só entra nesse caminho quando a condição passa.
*/ if (key === 'step') {
       /* Atualiza step Side usando a negação de step Side.
*/ stepSide = !stepSide;
       /* Essa declaração usa const para preparar sneaking e running e water e wood, mantendo essas referências fixas.
*/ const  /* Aqui sneaking recebe o resultado dessa expressão.
*/ sneaking = options.pace === 'sneak',  /* Aqui running recebe o resultado dessa expressão.
*/ running = options.pace === 'run',  /* Aqui water recebe o resultado dessa expressão.
*/ water = options.surface === 'water',  /* Aqui wood recebe o resultado dessa expressão.
*/ wood = options.surface === 'wood';
       /* Essa declaração usa const para preparar weight, mantendo essas referências fixas.
*/ const  /* Aqui weight recebe uma das duas alternativas, conforme o teste.
*/ weight = sneaking ? .5 : running ? .9 : .75;
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:water?.13:running?.065:.085, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.12*weight, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:water?700:wood?530:stepSide?360:450, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:stepSide?-.15:.15});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:(stepSide?85:100)*(wood?1.12:1), /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:55, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.09, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.065*weight, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:240});
    } else  /* Esse teste confere se key é igual a turn, e só entra nesse caminho quando a condição passa.
*/ if (key === 'turn')  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:200, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:290, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.065, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.07, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:600});
    else  /* Esse teste confere se key é igual a attack, e só entra nesse caminho quando a condição passa.
*/ if (key === 'attack') {  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.105, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.016, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.085, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1050});  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:145, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:65, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.13, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.075, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:400}); }
    else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (key === 'cut' || key === 'knife') {
       /* Essa declaração usa const para preparar quick, mantendo essas referências fixas.
*/ const  /* Aqui quick recebe o resultado dessa expressão.
*/ quick = key === 'knife';
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:quick?.065:.095, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.012, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:quick?.065:.085, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:quick?1050:1200});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:quick?245:210, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:quick?160:110, /* aqui fica o tempo de duração do som em segundos.
*/ duration:quick?.065:.11, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.04, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:650});
    } else  /* Esse teste confere se key é igual a hit, e só entra nesse caminho quando a condição passa.
*/ if (key === 'hit') {  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.1, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.12, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:550});  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:85, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:43, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.17, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.1, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:240}); }
    else  /* Esse teste confere se key é igual a guard, e só entra nesse caminho quando a condição passa.
*/ if (key === 'guard') {  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:220, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:180, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.16, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.1, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:900});  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:330, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:280, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.1, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.05, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'sine', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:950}); }
    else  /* Esse teste confere se key é igual a block, e só entra nesse caminho quando a condição passa.
*/ if (key === 'block') {
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:255, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:205, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.12, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.075, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:780});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:340, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:285, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.16, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.025, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.035, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:800});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.055, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.05, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:550});
    } else  /* Esse teste confere se key é igual a charge, e só entra nesse caminho quando a condição passa.
*/ if (key === 'charge') {
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:80, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:145, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.4, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.07, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.085, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:410});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.32, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.07, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.035, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:510});
    } else  /* Esse teste confere se key é igual a wave, e só entra nesse caminho quando a condição passa.
*/ if (key === 'wave') {
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.38, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.08, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.075, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:650});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:185, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:125, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.34, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.05, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.05, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:480});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:280, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:210, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.18, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.16, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.025, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.025, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:720});
    } else  /* Esse teste confere se key é igual a grab, e só entra nesse caminho quando a condição passa.
*/ if (key === 'grab') {
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.14, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.023, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.08, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:480});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:96, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:59, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.17, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.018, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.075, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:260});
    } else  /* Esse teste confere se key é igual a projectile, e só entra nesse caminho quando a condição passa.
*/ if (key === 'projectile') {
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.11, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.016, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.06, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:930});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:280, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:155, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.14, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.04, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:750});
    } else  /* Esse teste confere se key é igual a near Miss, e só entra nesse caminho quando a condição passa.
*/ if (key === 'nearMiss')  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.16, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.027, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.07, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:780, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:.3});
    else  /* Esse teste confere se key é igual a approach, e só entra nesse caminho quando a condição passa.
*/ if (key === 'approach') {
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.075, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.07, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:330});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:80, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:52, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.12, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.055, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:210});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.08, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.23, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.052, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:360});
    }
    else  /* Esse teste confere se key é igual a alert, e só entra nesse caminho quando a condição passa.
*/ if (key === 'alert') {  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:420, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:350, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.12, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.1, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:900});  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:300, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:260, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.14, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.14, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.09, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:700}); }
    else  /* Esse teste confere se key é igual a discovery, e só entra nesse caminho quando a condição passa.
*/ if (key === 'discovery')  /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição da lista guarda 261.63.
*/ 261.63, /* Essa posição da lista guarda 329.63.
*/ 329.63, /* Essa posição da lista guarda 392.
*/ 392].forEach( /* Essa função recebe frequency e index e devolve o resultado de tone. */ (frequency,index)=> /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar. */ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.2, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:index*.08, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.075, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1200}));
    else  /* Esse teste confere se key é igual a glitch, e só entra nesse caminho quando a condição passa.
*/ if (key === 'glitch') {
                                                                                  
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.1, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.006, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.045, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1050, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:-.15});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.07, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.13, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.004, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.035, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:750, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:.15});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.15, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.3, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.008, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.03, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:900});
       /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:310, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:275, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.34, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.01, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.014, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:540});
    }
    else  /* Esse teste confere se key é igual a death, e só entra nesse caminho quando a condição passa.
*/ if (key === 'death') {  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:145, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:38, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.6, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:500});  /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.4, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.11, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:400}); }
    else  /* Esse teste confere se scare está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (scare) {
                                                                                                          
       /* Essa declaração usa const para preparar profile, mantendo essas referências fixas.
*/ const  /* Aqui profile recebe uma das duas alternativas, conforme o teste.
*/ profile = key === 'jumpscareFear' ||  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda medo.
*/ 'medo', /* Essa posição da lista guarda fear.
*/ 'fear'].includes(options.variant) ? 'medo'
        : key === 'jumpscareInsanity' ||  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda insanidade.
*/ 'insanidade', /* Essa posição da lista guarda insanity.
*/ 'insanity'].includes(options.variant) ? 'insanidade'
        :  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda watch.
*/ 'watch', /* Essa posição da lista guarda fear Chase.
*/ 'fearChase', /* Essa posição da lista guarda medo.
*/ 'medo', /* Essa posição da lista guarda fear.
*/ 'fear', /* Essa posição da lista guarda chase Fear.
*/ 'chaseFear'].includes(scene) ? 'medo'
        :  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda maze.
*/ 'maze', /* Essa posição da lista guarda revelation.
*/ 'revelation', /* Essa posição da lista guarda insane Chase.
*/ 'insaneChase', /* Essa posição da lista guarda insanidade.
*/ 'insanidade', /* Essa posição da lista guarda insanity.
*/ 'insanity', /* Essa posição da lista guarda chase Insanity.
*/ 'chaseInsanity'].includes(scene) ? 'insanidade' : 'outro';
       /* esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice();
                                                                                                      
       /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(effects);  /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(scares);  /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(ambience);  /* esse comando interrompe todas as fontes de um grupo e libera suas conexões.
*/ stopGroup(tensionSources);  /* esse comando cancela sons e esperas das janelas de interface sem retomar o jogo.
*/ stopUi();
       /* Atualiza rest Until usando o resultado dessa expressão.
*/ restUntil = now + 1.3;
       /* Esse teste confere se profile é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if (profile === 'medo') {
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.24, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.005, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.07, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.18, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1750});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:88, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:48, /* aqui fica o tempo de duração do som em segundos.
*/ duration:1.08, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.008, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.32, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:500});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:220, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:70, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.94, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.012, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.3, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.18, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'sawtooth', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1050});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.68, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.14, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.025, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.22, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.12, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1150, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:-.3});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:390, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:135, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.65, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.1, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.17, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.1, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1400, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:.3});
      } else  /* Esse teste confere se profile é igual a insanidade, e só entra nesse caminho quando a condição passa.
*/ if (profile === 'insanidade') {
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:590, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:183, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.9, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.005, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.28, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'sawtooth', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1750, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:-.25});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:631, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:245, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.78, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.008, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.22, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.14, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1650, /* aqui fica a posição do som entre os lados esquerdo e direito.
*/ pan:.25});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.25, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.005, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.06, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.17, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1500});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:135, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:59, /* aqui fica o tempo de duração do som em segundos.
*/ duration:1.1, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.32, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.16, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:500});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:266, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:690, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.38, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.24, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.006, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.12, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.1, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'sawtooth', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1600});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.48, /* aqui fica o pequeno intervalo antes de uma camada do som começar.
*/ delay:.38, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.008, /* aqui fica o intervalo de sustentação antes de o som desaparecer.
*/ hold:.14, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.12, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:1350});
      } else {
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a escolha entre gerar ruído e gerar um tom musical.
*/ noise:true, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.33, /* aqui fica o tempo curto que o som leva para chegar à intensidade inicial.
*/ attack:.012, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.13, /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:900});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:65, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:42, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.5, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.13, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:350});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:230, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:155, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.35, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.065, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'sawtooth', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:650});
         /* esse comando envia uma camada do efeito e registra se alguma fonte conseguiu começar.
*/ tone({ /* aqui fica a altura inicial do tom que será sintetizado.
*/ frequency:247, /* aqui fica a altura que o tom deve alcançar no fim do efeito.
*/ end:170, /* aqui fica o tempo de duração do som em segundos.
*/ duration:.3, /* aqui fica a intensidade da camada antes dos canais de volume e do limitador.
*/ amplitude:.045, /* aqui fica o formato de onda usado para dar timbre ao tom.
*/ wave:'triangle', /* aqui fica o limite do filtro que suaviza as frequências mais altas.
*/ cutoff:750});
      }
       /* Esse teste confere se result está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (result) {  /* Atualiza last Jumpscare usando profile.
*/ lastJumpscare = profile;  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ jumpscaresPlayed++; }
       /* esse comando cancela a transição de volume e invalida uma troca de faixa que ainda esteja esperando.
*/ clearFade();
    }
     /* Esse teste confere se result está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (result) {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ effectsPlayed++;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (scare ||  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda hit.
*/ 'hit', /* Essa posição da lista guarda charge.
*/ 'charge', /* Essa posição da lista guarda grab.
*/ 'grab', /* Essa posição da lista guarda near Miss.
*/ 'nearMiss'].includes(key))  /* esse comando baixa a trilha por um intervalo curto para um efeito importante não se perder na música.
*/ duckForEffect(scare ? 1400 : key === 'charge' ? 550 : 360);
    }
     /* Devolve result e encerra essa chamada da função.
*/ return result;
  }
   /* esse comando fornece uma leitura do estado do áudio para a interface e para as verificações.
*/ function state() {
     /* Essa declaração usa const para preparar current, mantendo essas referências fixas.
*/ const  /* Aqui current recebe o resultado dessa expressão.
*/ current =  /* Procura o primeiro item que passa na condição indicada. */ tracks.find( /* Essa função recebe track e devolve o resultado dessa expressão. */ track => track.id === selected) || null;
     /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return {
       /* Esse campo guarda scene com scene.
*/ scene,  /* Esse campo guarda track com selected.
*/ track:selected,  /* Esse campo guarda title com o resultado dessa expressão.
*/ title:current?.title || '',  /* Esse campo guarda author com o resultado dessa expressão.
*/ author:current?.author || '',
       /* Esse campo guarda source com o resultado dessa expressão.
*/ source:current?.source || '',  /* Esse campo guarda license com o resultado dessa expressão.
*/ license:current?.license || '',  /* Esse campo guarda license URL com o resultado dessa expressão.
*/ licenseURL:current?.licenseURL || '',
       /* Esse campo guarda volume com volume.
*/ volume,  /* Esse campo guarda music Volume com volume.
*/ musicVolume:volume,  /* aqui fica a preferência de volume dos bipes de diálogo.
*/ voiceVolume,  /* aqui fica a preferência de volume dos efeitos, ambientes e sustos.
*/ effectsVolume,  /* aqui fica a escolha de silenciar todos os sons sem alterar os volumes guardados.
*/ muted,  /* Esse campo guarda paused com paused.
*/ paused,  /* Esse campo guarda unlocked com unlocked.
*/ unlocked,  /* Esse campo guarda error com error.
*/ error,
       /* Esse campo guarda context State com o resultado dessa expressão.
*/ contextState:context?.state || 'uncreated',  /* Esse campo guarda voices Active com voices.size.
*/ voicesActive:voices.size,  /* Esse campo guarda effects Active com o resultado dessa expressão.
*/ effectsActive:effects.size + scares.size + uiEffects.size + tensionSources.size,
       /* Esse campo guarda voice Played com voice Played.
*/ voicePlayed,  /* Esse campo guarda effects Played com effects Played.
*/ effectsPlayed,  /* Esse campo guarda last Voice Profile com last Voice Profile.
*/ lastVoiceProfile,  /* Esse campo guarda last Jumpscare com last Jumpscare.
*/ lastJumpscare,  /* Esse campo guarda jumpscares Played com jumpscares Played.
*/ jumpscaresPlayed,  /* Esse campo guarda scare Pending com scare Pending.
*/ scarePending,  /* Esse campo guarda scare Error com scare Error.
*/ scareError,  /* Esse campo guarda scare Sources Active com scares.size.
*/ scareSourcesActive:scares.size,  /* Esse campo guarda pulse Active com o resultado dessa expressão.
*/ pulseActive:pulseTimer !== null,  /* Esse campo guarda playback Rate com o resultado de scene Rate.
*/ playbackRate: /* esse comando escolhe a velocidade da música do labirinto e da perseguição de Mizzery. */ sceneRate(),
       /* Esse campo guarda tension com uma das duas alternativas, conforme o teste.
*/ tension:tension ? { /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...tension} : null,  /* Esse campo guarda tension Level com tension Level.
*/ tensionLevel,  /* Esse campo guarda tension Sources Active com tension Sources.size.
*/ tensionSourcesActive:tensionSources.size,
       /* Esse campo guarda tension Timer Active com o resultado dessa expressão.
*/ tensionTimerActive:tension !== null && pulseTimer !== null,  /* Esse campo guarda pulse Mode com uma das duas alternativas, conforme o teste.
*/ pulseMode:pulseTimer === null ? null : tension ? 'tension' : 'maze',
       /* Esse campo guarda pulse Played com pulse Played.
*/ pulsePlayed,  /* Esse campo guarda pulse Starts com pulse Starts.
*/ pulseStarts,  /* Esse campo guarda tension Breaths com tension Breaths.
*/ tensionBreaths,  /* Esse campo guarda tension Drones com tension Drones.
*/ tensionDrones,  /* Esse campo guarda tension Windups com tension Windups.
*/ tensionWindups,  /* Esse campo guarda tension Pauses com tension Pauses.
*/ tensionPauses,  /* Esse campo guarda tension Phase com tension Phase.
*/ tensionPhase,
       /* Esse campo guarda page Hidden com page Hidden.
*/ pageHidden,  /* Identifica o quarto atual ou o quarto associado a esse dado.
*/ room:room ? { /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...room} : null,  /* Esse campo guarda ambient Active com ambience.size.
*/ ambientActive:ambience.size,  /* Esse campo guarda ambient Timer Active com o resultado dessa expressão.
*/ ambientTimerActive:roomTimer !== null,
       /* Esse campo guarda ambient Played com ambient Played.
*/ ambientPlayed,  /* Esse campo guarda last Ambient com last Ambient.
*/ lastAmbient,  /* Esse campo guarda spatial Played com spatial Played.
*/ spatialPlayed,  /* Esse campo guarda room Cues Played com room Cues Played.
*/ roomCuesPlayed,
       /* Esse campo guarda ui Effects Active com ui Effects.size.
*/ uiEffectsActive:uiEffects.size,  /* Esse campo guarda ui Previewing com ui Previewing.
*/ uiPreviewing,
       /* Esse campo guarda speech Ducked com speech Ducked.
*/ speechDucked,  /* Esse campo guarda effect Ducked com effect Ducked.
*/ effectDucked,  /* Esse campo guarda previewing com previewing.
*/ previewing,  /* Esse campo guarda music Level com o resultado dessa expressão.
*/ musicLevel: /* Consulta o valor associado a essa chave no mapa. */ channels.get(selected)?.volume || 0,
       /* Esse campo guarda playing com o resultado de .some.
*/ playing:  /* Confere se pelo menos um item passa no teste. */ [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Reúne os valores dos campos desse objeto. */ channels.values()].some( /* Essa função recebe audio e devolve o resultado dessa expressão. */ audio => !audio.paused && audio.volume > 0),
       /* aqui ficam os arquivos locais, nomes, autoria e licença das quatro músicas do Jardim.
*/ tracks: /* Monta uma nova lista transformando cada posição da lista original. */ tracks.map( /* Essa função recebe track e devolve um objeto com os campos dessa parte. */ track => ({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...track}))
    };
  }
                                                                                                
   /* Essa declaração usa const para preparar first Gesture, mantendo essas referências fixas.
*/ const  /* esse comando usa uma interação real para liberar ou recuperar o áudio bloqueado pelo navegador.
*/ firstGesture =  /* esse comando usa uma interação real para liberar ou recuperar o áudio bloqueado pelo navegador. */ event => {
     /* Esse teste confere se event.is Trusted não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!event.isTrusted)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!unlocked||(!paused&&!muted&&context&& /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda suspended.
*/ 'suspended', /* Essa posição da lista guarda interrupted.
*/ 'interrupted'].includes(context.state))) /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando prepara o áudio depois de uma interação e tenta retomar o contexto quando o navegador permite. */ unlock();
  };
   /* Escuta o evento pointerdown e liga esse evento à função definida aqui.
*/ document.addEventListener('pointerdown', firstGesture, { /* Esse campo guarda passive com true.
*/ passive:true});
   /* Escuta o evento keydown e liga esse evento à função definida aqui.
*/ document.addEventListener('keydown', firstGesture);
   /* Escuta o evento visibilitychange e liga esse evento à função definida aqui.
*/ document.addEventListener('visibilitychange',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Atualiza page Hidden usando o resultado dessa expressão.
*/ pageHidden = document.visibilityState === 'hidden';
     /* Esse teste confere se page Hidden está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (pageHidden) {
       /* esse comando pausa as faixas e zera o volume dos canais de música.
*/ stopChannels();  /* esse comando cancela as fontes de voz, efeitos, ambiente e tensão antes de suspender o áudio.
*/ stopSynth();
       /* Esse teste confere se context.state é igual a running, e só entra nesse caminho quando a condição passa.
*/ if (context?.state === 'running')  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Trata a falha dessa operação assíncrona. */ context.suspend().then( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
                                                                                                     
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!pageHidden && !paused && !muted)  /* esse comando retoma o áudio permitido sem recuperar vozes ou efeitos antigos.
*/ resume();
      }).catch( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
    } else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (unlocked && !paused && !muted)  /* esse comando retoma o áudio permitido sem recuperar vozes ou efeitos antigos.
*/ resume();
  });
   /* Devolve o resultado de Object.freeze e encerra essa chamada da função.
*/ return  /* Impede a troca direta dos campos desse objeto. */ Object.freeze({ /* Aqui disponibiliza a operação unlock para os outros módulos. esse comando prepara o áudio depois de uma interação e tenta retomar o contexto quando o navegador permite.
*/ unlock,  /* Aqui disponibiliza a operação set Scene para os outros módulos. esse comando escolhe a trilha da cena atual e ajusta o pulso usado no labirinto.
*/ setScene,  /* Aqui disponibiliza a operação set Volume para os outros módulos. esse comando limita e salva o volume da música antes de atualizar a reprodução.
*/ setVolume,  /* Aqui disponibiliza a operação set Voice Volume para os outros módulos. esse comando ajusta e salva o volume dos bipes e encerra a fala quando ele fica em zero.
*/ setVoiceVolume,  /* Aqui disponibiliza a operação set Effects Volume para os outros módulos. esse comando atualiza os canais de efeitos, ambientes e sustos respeitando a escolha de volume zero.
*/ setEffectsVolume,  /* Aqui disponibiliza a operação set Muted para os outros módulos. esse comando aplica a escolha de silenciar todos os sons e limpa as fontes que estavam tocando.
*/ setMuted,  /* Aqui disponibiliza a operação pause para os outros módulos. esse comando pausa o áudio e suspende o contexto enquanto a partida fica parada.
*/ pause,  /* Aqui disponibiliza a operação resume para os outros módulos. esse comando retoma o áudio permitido sem recuperar vozes ou efeitos antigos.
*/ resume,  /* Aqui disponibiliza a operação state para os outros módulos. esse comando fornece uma leitura do estado do áudio para a interface e para as verificações.
*/ state,  /* Aqui disponibiliza a operação voice para os outros módulos. esse comando transforma cada caractere permitido em um bipe curto com o timbre do personagem.
*/ voice,  /* Aqui disponibiliza a operação stop Voice para os outros módulos. esse comando corta os bipes pendentes e encerra a amostra de voz quando a frase é pulada.
*/ stopVoice,  /* Aqui disponibiliza a operação preview Voice para os outros módulos. esse comando toca uma amostra curta da voz escolhida para conferir o volume nas configurações.
*/ previewVoice,  /* Aqui disponibiliza a operação sfx para os outros módulos. esse comando escolhe e monta o efeito sonoro da ação com um intervalo mínimo para impedir repetição excessiva.
*/ sfx,  /* Aqui disponibiliza a operação play Scare para os outros módulos. esse comando espera o contexto de áudio ficar pronto antes de tocar o susto e respeita pausa, silêncio e cancelamento.
*/ playScare,  /* Aqui disponibiliza a operação cancel Scare para os outros módulos. esse comando interrompe o susto e invalida qualquer retomada de áudio que ainda esteja esperando.
*/ cancelScare,  /* Aqui disponibiliza a operação set Room para os outros módulos. esse comando informa qual quarto e direção estão na tela e identifica uma entrada ou uma mudança de vista.
*/ setRoom,  /* Aqui disponibiliza a operação clear Room para os outros módulos. esse comando limpa a referência do ambiente quando a cena deixa de representar um quarto.
*/ clearRoom,  /* Aqui disponibiliza a operação room Cue para os outros módulos. esse comando dá um retorno sonoro ao entrar, virar ou observar um objeto no quarto sem repetir tudo a cada desenho.
*/ roomCue,  /* Aqui disponibiliza a operação spatial Cue para os outros módulos. esse comando toca os pequenos sons de objetos e interface com direção e distância controladas.
*/ spatialCue,  /* Aqui disponibiliza a operação set Tension para os outros módulos. esse comando recebe o perigo da cena e atualiza o ritmo sem reiniciar o relógio a cada quadro.
*/ setTension,  /* Aqui disponibiliza a operação clear Tension para os outros módulos. esse comando remove o perfil de perigo e deixa a trilha livre do pulso de combate.
*/ clearTension});
})();
