'use strict';
// A câmera recorta as artes aprovadas; profundidade, curva e ameaça são efeitos do canvas.
window.Perseguicao = (() => {
  let canvas, ctx, image, previousImage, monster, resizeObserver;
  let time = 0, lastSource = '', lastMonster = '', lastState = null;
  let transitionAge = 1, previousZoom = 1, feedbackAge = 2, feedbackKey = '', feedback = '', lastFeedbackLeft = 0;
  let view = {zoom:1};
  const clamp = (value, min, max) => Math.max(min, Math.min(max, Number.isFinite(value) ? value : min));

  function start(source, presence) {
    canvas = document.querySelector('#chase-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    canvas.hidden = false;
    time = 0; lastState = null; previousImage = null; image = null; monster = null;
    lastSource = ''; lastMonster = ''; transitionAge = 1; feedbackAge = 2; feedbackKey = ''; feedback = ''; lastFeedbackLeft = 0;
    view = {zoom:1};
    setImages(source, presence);
    if (!resizeObserver && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(canvas);
    }
    resizeCanvas();
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#080a0d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
      previousImage = image?.complete && image.naturalWidth ? image : null;
      previousZoom = view.zoom || 1;
      image = new Image(); image.src = source; lastSource = source;
      transitionAge = previousImage ? 0 : 1;
    }
    if (presence && presence !== lastMonster) {
      monster = new Image(); monster.src = presence; lastMonster = presence;
    }
  }
  function drawScenery(source, zoom, width, height, options = {}) {
    if (!source?.complete || !source.naturalWidth) return;
    const iw = source.naturalWidth, ih = source.naturalHeight;
    const scale = Math.max(width / iw, height / ih) * zoom;
    const cw = width / scale, ch = height / scale;
    const vx = iw * clamp(.5 + (options.pan || 0), .25, .75), vy = ih * .45;
    const sx = clamp(vx - cw * .5, 0, Math.max(0, iw - cw));
    const sy = clamp(vy - ch * .46, 0, Math.max(0, ih - ch));
    ctx.save();
    ctx.globalAlpha = options.alpha ?? 1;
    ctx.translate(options.shift || 0, options.bob || 0);
    if (options.reverse) {ctx.translate(width, 0);ctx.scale(-1, 1);}
    ctx.drawImage(source, sx, sy, cw, ch, 0, 0, width, height);
    ctx.restore();
  }
  function draw(dt, state = {}) {
    if (!ctx || canvas.hidden) return;
    dt = clamp(dt, 0, .1);
    lastState = {...state}; time += dt; feedbackAge += dt;
    const width = canvas.width, height = canvas.height;
    const progress = clamp((Number(state.progress) || 0) / Math.max(.01, Number(state.distance) || 1), 0, 1);
    const danger = clamp((Number(state.danger) || 0) / Math.max(.1, Number(state.dangerMax) || 8), 0, 1);
    const pressure = Math.max(danger, clamp(state.threatCue || 0, 0, 1));
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
    const transition = clamp(transitionAge / .38, 0, 1);
    const turn = reduced ? 0 : turnSign * (1 - transition);
    const zoom = 1 + Math.pow(progress, .88) * 2.15;
    const bob = reduced || state.waiting ? 0 : Math.sin(time * (running ? 17 : 6)) * (running ? 2.2 : .45);
    const feedbackStrength = clamp(1 - feedbackAge / .45, 0, 1);
    const blocked = ['blocked', 'hit', 'wrong'].includes(feedback);
    const stumble = reduced || !blocked ? 0 : Math.sin(feedbackAge * 38) * feedbackStrength * 3;
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#080a0d'; ctx.fillRect(0, 0, width, height);
    if (back) {
      drawScenery(previousImage || image, 1.12 + danger * .4, width, height, {reverse:true,bob:bob*.5});
      ctx.fillStyle = '#030407a8'; ctx.fillRect(0,0,width,height);
    } else {
      if (transition < 1 && previousImage) drawScenery(previousImage, previousZoom, width, height, {alpha:1-transition,bob});
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
    const visibleMonster = (back || !!state.catchingUp) && monster?.complete && monster.naturalWidth;
    if (visibleMonster) {
      const monsterHeight = height * (.38 + danger * .58 + (state.catchingUp ? .12 : 0));
      const monsterWidth = monsterHeight * monster.naturalWidth / monster.naturalHeight;
      const sway = reduced ? 0 : Math.sin(time*4.7)*width*.006*(1+danger);
      // A sombra encosta no piso: o perseguidor cresce no centro, em vez de flutuar ao lado.
      ctx.fillStyle='#000b';ctx.beginPath();ctx.ellipse(width*.5,height*.92,Math.min(width*.42,monsterWidth*.4),height*.045,0,0,Math.PI*2);ctx.fill();
      ctx.drawImage(monster,width*.5-monsterWidth*.5+sway,height*.94-monsterHeight,monsterWidth,monsterHeight);
    }
    const shade=ctx.createRadialGradient(width*.5,height*.44,height*.12,width*.5,height*.5,height*.78);
    shade.addColorStop(0,'#0000');shade.addColorStop(.65,'#01020624');shade.addColorStop(1,pressure>.68?'#180204ef':'#010206d9');
    ctx.fillStyle=shade;ctx.fillRect(0,0,width,height);
    if (pressure > .55) {
      const pulse = reduced ? .5 : .5+.5*Math.sin(time*(3+pressure*3));
      const edge = ctx.createLinearGradient(0,0,width,0);
      const opacity = .1+pressure*.22+pulse*.055;
      edge.addColorStop(0,'rgba(116,14,20,'+opacity+')');edge.addColorStop(.22,'#0000');edge.addColorStop(.78,'#0000');edge.addColorStop(1,'rgba(116,14,20,'+opacity+')');
      ctx.fillStyle=edge;ctx.fillRect(0,0,width,height);
    }
    if (feedbackStrength > 0 && blocked) {ctx.fillStyle='rgba(115,20,22,'+(feedbackStrength*.13)+')';ctx.fillRect(0,0,width,height);}
    if (state.waiting) {ctx.fillStyle='#05070a36';ctx.fillRect(0,0,width,height);}
    view={zoom,progress,lookingBack:back,running:!!state.running,danger,pressure,reduced,monsterVisible:!!visibleMonster,transition,feedback:feedbackStrength>0?feedback:null};
  }
  function stop() {if(canvas)canvas.hidden=true;lastState=null;}
  return {start,setImages,draw,stop,state:()=>({...view,resolution:{width:canvas?.width||0,height:canvas?.height||0}})};
})();
