'use strict';
// A câmera recorta as artes aprovadas; profundidade, curva e ameaça são efeitos do canvas.
window.Perseguicao = (() => {
  let canvas, ctx, image, previousImage, monster, resizeObserver, shadowMask, shadowSource;
  let time = 0, lastSource = '', lastMonster = '', lastState = null;
  let transitionAge = 1, previousZoom = 1, feedbackAge = 2, feedbackKey = '', feedback = '', lastFeedbackLeft = 0;
  let active = false, proximity = 0, tension = 0, surge = 0;
  let glimpseAge = 2, nextGlimpseAt = .5, glimpseSide = 1, glimpseCount = 0;
  let view = {zoom:1};
  const clamp = (value, min, max) => Math.max(min, Math.min(max, Number.isFinite(value) ? value : min));
  const smooth = value => {const x = clamp(value, 0, 1); return x*x*(3-2*x);};
  const follow = (value, target, dt, speed) => value + (target-value)*(1-Math.exp(-dt*speed));

  function start(source, presence) {
    const nextCanvas = document.querySelector('#chase-canvas');
    if (!nextCanvas) return;
    // Uma curva troca a arte, mas não reinicia a passada, a câmera ou a aproximação.
    const continuing = active && canvas === nextCanvas && !nextCanvas.hidden;
    canvas = nextCanvas;
    ctx = canvas.getContext('2d');
    canvas.hidden = false;
    if (!continuing) {
      time = 0; lastState = null; previousImage = null; image = null; monster = null;
      shadowMask = null; shadowSource = null;
      lastSource = ''; lastMonster = ''; transitionAge = 1; feedbackAge = 2; feedbackKey = ''; feedback = ''; lastFeedbackLeft = 0;
      proximity = 0; tension = 0; surge = 0; glimpseAge = 2; nextGlimpseAt = .5; glimpseSide = 1; glimpseCount = 0;
      view = {zoom:1};
    }
    active = true;
    setImages(source, presence);
    if (!resizeObserver && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(canvas);
    }
    resizeCanvas();
    ctx.imageSmoothingEnabled = false;
    if (!continuing) {
      ctx.fillStyle = '#080a0d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
  function resizeCanvas() {
    if (!canvas || canvas.hidden) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    const scale = Math.min(1, 640 / rect.width, 480 / rect.height);
    const width = Math.max(1, Math.round(rect.width * scale));
    const height = Math.max(1, Math.round(rect.height * scale));
    if (canvas.width === width && canvas.height === height) return;
    canvas.width = width; canvas.height = height;
    ctx.imageSmoothingEnabled = false;
    // Girar o celular redesenha a câmera, sem avançar o relógio do jogo.
    if (lastState) draw(0, lastState);
  }
  function setImages(source, presence) {
    if (source && source !== lastSource) {
      previousImage = image?.complete && image.naturalWidth ? image : previousImage;
      previousZoom = view.zoom || 1;
      image = new Image(); image.src = source; lastSource = source;
      transitionAge = previousImage ? 0 : 1;
    }
    if (presence && presence !== lastMonster) {
      monster = new Image(); monster.src = presence; lastMonster = presence;
      shadowMask = null; shadowSource = null;
    }
  }
  function drawScenery(source, zoom, width, height, options = {}) {
    if (!source?.complete || !source.naturalWidth) return;
    const iw = source.naturalWidth, ih = source.naturalHeight;
    // A margem mantém a imagem sob os pequenos movimentos, inclusive no celular deitado.
    const padX = Math.abs(options.shift || 0)+2, padY = Math.abs(options.bob || 0)+2;
    const renderWidth = width+padX*2, renderHeight = height+padY*2;
    const scale = Math.max(renderWidth / iw, renderHeight / ih) * zoom;
    const cw = renderWidth / scale, ch = renderHeight / scale;
    const vx = iw * clamp(.5 + (options.pan || 0), .25, .75), vy = ih * .45;
    const sx = clamp(vx - cw * .5, 0, Math.max(0, iw - cw));
    const sy = clamp(vy - ch * .46, 0, Math.max(0, ih - ch));
    ctx.save();
    ctx.globalAlpha = options.alpha ?? 1;
    ctx.translate(options.shift || 0, options.bob || 0);
    if (options.reverse) {ctx.translate(width, 0);ctx.scale(-1, 1);}
    ctx.drawImage(source, sx, sy, cw, ch, -padX, -padY, renderWidth, renderHeight);
    ctx.restore();
  }
  function presenceMask() {
    if (!monster?.complete || !monster.naturalWidth) return null;
    if (shadowSource === monster && shadowMask) return shadowMask;
    shadowMask = document.createElement('canvas');
    shadowMask.width = monster.naturalWidth; shadowMask.height = monster.naturalHeight;
    const mask = shadowMask.getContext('2d');
    mask.drawImage(monster, 0, 0);
    mask.globalCompositeOperation = 'source-in';
    mask.fillStyle = '#020308'; mask.fillRect(0, 0, shadowMask.width, shadowMask.height);
    shadowSource = monster;
    return shadowMask;
  }
  function drawForwardPresence(width, height, strength, glimpse, side, reduced) {
    const mask = presenceMask();
    if (!mask || strength < .04) return {shadow:false, periphery:false, reach:0};
    // A mesma silhueta se projeta a partir dos pés, achatada sobre o chão.
    // O ponto de fuga e os sinais de passagem ficam livres acima da sombra.
    const reach = .15 + strength*.34;
    const shadowHeight = height*reach/.38, shadowWidth = shadowHeight*mask.width/mask.height;
    ctx.save();
    ctx.globalAlpha = .22 + strength*.47;
    ctx.translate(width*(.5+side*.015), height*1.04);
    ctx.transform(1, 0, side*.09, .38, 0, 0);
    ctx.drawImage(mask, -shadowWidth*.5, -shadowHeight, shadowWidth, shadowHeight);
    ctx.restore();
    if (glimpse > .01) {
      // Só um recorte toca a borda: a presença alcança o ombro, sem virar um ator ao lado.
      const edgeWidth = width*(width < height ? .13 : .15);
      const bodyHeight = height*(.73+strength*.19);
      const bodyWidth = bodyHeight*monster.naturalWidth/monster.naturalHeight;
      const headX = side < 0 ? edgeWidth*.55 : width-edgeWidth*.55;
      const x = headX-bodyWidth*.68+(reduced?0:side*(1-glimpse)*edgeWidth*.4);
      ctx.save();
      ctx.beginPath();ctx.rect(side<0?0:width-edgeWidth, height*.12, edgeWidth, height*.69);ctx.clip();
      ctx.globalAlpha = glimpse*(.55+strength*.26);
      ctx.filter = 'brightness(1.7)';
      // A arte aprovada preserva as garras e o rosto; a borda escura integra o recorte à parede.
      ctx.drawImage(monster, x, height*.91-bodyHeight, bodyWidth, bodyHeight);
      ctx.restore();
    }
    return {shadow:true,periphery:glimpse>.01,reach};
  }
  function draw(dt, state = {}) {
    if (!ctx || canvas.hidden) return;
    dt = clamp(dt, 0, .1);
    const firstFrame = !lastState;
    lastState = {...state}; time += dt; feedbackAge += dt; glimpseAge += dt;
    const width = canvas.width, height = canvas.height;
    const progress = clamp((Number(state.progress) || 0) / Math.max(.01, Number(state.distance) || 1), 0, 1);
    const danger = clamp((Number(state.danger) || 0) / Math.max(.1, Number(state.dangerMax) || 8), 0, 1);
    const requestedSurge = clamp(Number(state.surge) || 0, 0, 1);
    const requestedProximity = Number.isFinite(state.proximity) ? clamp(state.proximity,0,1) : Math.max(smooth((danger-.3)/.7),state.catchingUp ? .66 : 0);
    const requestedTension = Math.max(danger, clamp(state.threatCue || 0, 0, 1),requestedProximity*.9);
    // A aproximação cresce e recua em centenas de milissegundos, sem piscar a tela.
    proximity = firstFrame ? requestedProximity : follow(proximity,requestedProximity,dt,requestedProximity>proximity?5:2.4);
    tension = firstFrame ? requestedTension : follow(tension,requestedTension,dt,requestedTension>tension?4:1.8);
    surge = firstFrame ? requestedSurge : follow(surge,requestedSurge,dt,requestedSurge>surge?5:2.5);
    const pressure = clamp(tension+surge*.08,0,1);
    const running = !!state.running && !state.waiting;
    const reduced = !!state.reduced;
    const back = !!state.lookingBack;
    const cue = state.turnFeedback || '';
    const key = [cue, state.feedbackId ?? '', state.index ?? '', lastSource].join('|');
    const feedbackLeft = clamp(Number(state.feedbackLeft) || 0, 0, 2);
    if (cue && (key !== feedbackKey || feedbackLeft > lastFeedbackLeft + .05)) {feedbackKey = key; feedback = cue; feedbackAge = 0;}
    lastFeedbackLeft = feedbackLeft;
    const direction = state.turn || (feedbackAge < .5 ? feedback : '');
    const turnSign = direction === 'left' ? -1 : direction === 'right' ? 1 : 0;
    if (image?.complete && image.naturalWidth) transitionAge += dt;
    const transition = smooth(transitionAge / (reduced ? .24 : .48));
    const turn = reduced ? 0 : turnSign * (1 - transition);
    const zoom = 1 + Math.pow(progress, .88) * 2.15;
    const bob = reduced || state.waiting ? 0 : Math.sin(time * (running ? 17 : 6)) * (running ? 2.2 : .45);
    const feedbackStrength = clamp(1 - feedbackAge / .45, 0, 1);
    const blocked = ['blocked', 'hit', 'wrong'].includes(feedback);
    const stumble = reduced || !blocked ? 0 : Math.sin(feedbackAge * 22) * feedbackStrength * 1.4;
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#080a0d'; ctx.fillRect(0, 0, width, height);
    if (back) {
      drawScenery(transition<1&&previousImage?previousImage:image, 1.12 + danger * .4, width, height, {reverse:true,bob:bob*.5});
      ctx.fillStyle = '#030407a8'; ctx.fillRect(0,0,width,height);
    } else {
      // A imagem anterior permanece opaca até a nova carregar e assumir a câmera.
      if (transition < 1 && previousImage) drawScenery(previousImage, previousZoom, width, height, {bob});
      drawScenery(image, zoom, width, height, {alpha:previousImage?transition:1,shift:turn*width*.16+stumble,bob,pan:turn*.07});
    }
    // Marcas de deslocamento ficam na periferia; o caminho e as saídas continuam legíveis.
    if (running && !reduced && !back) {
      ctx.strokeStyle = '#dcecff13'; ctx.lineWidth = 1;
      for (let i=0;i<10;i++) {
        const angle=i*Math.PI/5,phase=(time*1.65+i*.137)%1;
        ctx.beginPath();
        ctx.moveTo(width*.5+Math.cos(angle)*width*(.24+phase*.35),height*.45+Math.sin(angle)*height*(.24+phase*.35));
        ctx.lineTo(width*.5+Math.cos(angle)*width*(.36+phase*.35),height*.45+Math.sin(angle)*height*(.36+phase*.35));
        ctx.stroke();
      }
    }
    const readyMonster = !!(monster?.complete && monster.naturalWidth);
    if (!back && !state.waiting && proximity>.52 && time>=nextGlimpseAt && !reduced) {
      glimpseAge = 0; glimpseCount++;
      glimpseSide = ((Number(state.index)||0)+glimpseCount+(state.kind==='medo'?0:1))%2 ? -1 : 1;
      nextGlimpseAt = time+3.7-proximity*.7;
    }
    const glimpse = state.waiting || back ? 0 : reduced ? smooth((proximity-.76)/.24)*.6 : smooth(glimpseAge/.18)*(1-smooth((glimpseAge-.62)/.35));
    const forwardPresence = back ? {shadow:false,periphery:false,reach:0} : drawForwardPresence(width,height,clamp(proximity*.84+surge*.16,0,1),glimpse,glimpseSide,reduced);
    const visibleMonster = back && readyMonster;
    if (visibleMonster) {
      const monsterHeight = height * (.38 + proximity * .61 + surge*.08);
      const monsterWidth = monsterHeight * monster.naturalWidth / monster.naturalHeight;
      const sway = reduced ? 0 : Math.sin(time*4.7)*width*.004*(1+proximity);
      // A sombra encosta no piso: o perseguidor cresce no centro, em vez de flutuar ao lado.
      ctx.fillStyle='#000b';ctx.beginPath();ctx.ellipse(width*.5,height*.92,Math.min(width*.42,monsterWidth*.4),height*.045,0,0,Math.PI*2);ctx.fill();
      ctx.drawImage(monster,width*.5-monsterWidth*.5+sway,height*.94-monsterHeight,monsterWidth,monsterHeight);
    }
    const shade=ctx.createRadialGradient(width*.5,height*.44,height*.12,width*.5,height*.5,height*.78);
    shade.addColorStop(0,'#0000');shade.addColorStop(.65,'#01020624');shade.addColorStop(1,pressure>.68?'#180204ef':'#010206d9');
    ctx.fillStyle=shade;ctx.fillRect(0,0,width,height);
    if (pressure > .55) {
      const pulse = reduced ? .5 : .5+.5*Math.sin(time*1.35);
      const edge = ctx.createLinearGradient(0,0,width,0);
      const opacity = .06+pressure*.17+pulse*.025;
      edge.addColorStop(0,'rgba(116,14,20,'+opacity+')');edge.addColorStop(.22,'#0000');edge.addColorStop(.78,'#0000');edge.addColorStop(1,'rgba(116,14,20,'+opacity+')');
      ctx.fillStyle=edge;ctx.fillRect(0,0,width,height);
    }
    if (feedbackStrength > 0 && blocked) {ctx.fillStyle='rgba(115,20,22,'+(feedbackStrength*.13)+')';ctx.fillRect(0,0,width,height);}
    if (state.waiting) {ctx.fillStyle='#05070a36';ctx.fillRect(0,0,width,height);}
    // A lanterna falha de verdade: sem luz nem a saída do refúgio fica visível.
    if(state.kind==='medo') {
      if(state.lampOn===false){ctx.fillStyle='#000';ctx.fillRect(0,0,width,height);}
      else {
        const beam=ctx.createRadialGradient(width*.51,height*.44,height*.08,width*.51,height*.44,height*.62);
        beam.addColorStop(0,'#0000');beam.addColorStop(.5,'#00000018');beam.addColorStop(1,'#000000eb');
        ctx.fillStyle=beam;ctx.fillRect(0,0,width,height);
        if(Number(state.index)===Number(state.length)-1&&!back&&progress>.55){
          ctx.fillStyle='#a5d1a233';ctx.fillRect(width*.69,height*.24,width*.19,height*.49);
          ctx.strokeStyle='#d4edb8';ctx.lineWidth=2;ctx.strokeRect(width*.71,height*.27,width*.15,height*.44);
          ctx.fillStyle='#eaf3c8';ctx.font='bold '+Math.max(9,Math.floor(width*.02))+'px monospace';ctx.textAlign='center';
          ctx.fillText('PAX',width*.785,height*.36);ctx.fillText('REFÚGIO',width*.785,height*.41);
          ctx.textAlign='start';
        }
      }
    }
    view={zoom,progress,lookingBack:back,running:!!state.running,danger,pressure,reduced,monsterVisible:!!visibleMonster||forwardPresence.periphery,transition,feedback:feedbackStrength>0?feedback:null,
      proximity,surge,shadowVisible:forwardPresence.shadow,shadowReach:forwardPresence.reach,peripheryVisible:forwardPresence.periphery,peripherySide:forwardPresence.periphery?glimpseSide:0,
      lampOn:state.kind==='medo'?state.lampOn!==false:null,refugeVisible:state.kind==='medo'&&state.lampOn!==false&&Number(state.index)===Number(state.length)-1&&progress>.55&&!back,
      cameraTime:time,sceneTransition:transition<1&&!!previousImage,motion:reduced?0:Math.abs(bob)+Math.abs(stumble)};
  }
  function stop() {if(canvas)canvas.hidden=true;lastState=null;active=false;}
  return {start,setImages,draw,stop,state:()=>({...view,resolution:{width:canvas?.width||0,height:canvas?.height||0}})};
})();
