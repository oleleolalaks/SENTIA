'use strict';

// Esse código aq desenha a arena em primeira pessoa. As paredes têm colisão;
// o Ódio e os objetos continuam sendo sprites, como num jogo antigo.
window.Arena = (() => {
  let W = 500, H = 380;
  const fov = Math.PI / 3;
  const map = Array.from({
    length: 20
  }, (_, y) => Array.from({
    length: 22
  }, (_, x) => x === 0 || y === 0 || x === 21 || y === 19 ? 1 : 0));
  [[5, 5], [16, 5], [5, 12], [16, 12], [9, 9], [12, 9]].forEach(([x, y]) => {
    map[y][x] = 1;
  });
  let canvas,
    ctx,
    active = false,
    paused = false,
    freeMode = false,
    player,
    enemy,
    keys = {},
    config,
    images = {},
    bullets = [],
    last = 0,
    frameId,
    hit = 0,
    attackAge = 9,
    attackCooldown = 0,
    lightCooldown = 0,
    elapsed = 0,
    warning = '',
    collected = false,
    triggered = false,
    floorPixels = null,
    hurtInv = 0,
    guardBroken = 0,
    staminaDelay = 0,
    dragPointer = null,
    dragX = 0,
    resizeObserver = null,
    renderedHand = null,
    lightAge = 9,
    audioTimes = {},
    tensionAt = 0,
    impactAngle = 0,
    impactBlocked = false,
    phaseAge = 9;
  const angleDiff = (a,b) => Math.atan2(Math.sin(a-b),Math.cos(a-b));
  const clamp = (value,min=0,max=1) => Math.max(min,Math.min(max,value));
  function reducedMotion() {
    return !!config?.reduced || !!document.body?.classList?.contains('reduced') || !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }
  // Os sons acontecem nas ações, nn a cada quadro do desenho.
  function sound(name, spacing=.14, options={}) {
    if(elapsed-(audioTimes[name]??-99)<spacing)return;
    audioTimes[name]=elapsed;
    window.AudioSentia?.sfx?.(name,options);
  }
  function soundPosition(source=enemy,intensity=1) {
    const angle=Math.atan2(source.y-player.y,source.x-player.x);
    return {pan:Math.sin(angleDiff(angle,player.a)),distance:Math.max(.5,Math.hypot(source.x-player.x,source.y-player.y)*.35),intensity};
  }
  const find = part => ASSETS.find(p => p.includes(part));
  function image(id, part) {
    const i = new Image();
    i.src = find(part) || '';
    images[id] = i;
  }
  function solid(x, y) {
    return !map[Math.floor(y)] || map[Math.floor(y)][Math.floor(x)] !== 0;
  }
  function walk(obj, dx, dy) {
    if (!solid(obj.x + dx + .22, obj.y) && !solid(obj.x + dx - .22, obj.y)) obj.x += dx;
    if (!solid(obj.x, obj.y + dy + .22) && !solid(obj.x, obj.y + dy - .22)) obj.y += dy;
  }
  function clearBetween(x1,y1,x2,y2) {
    const d = Math.hypot(x2-x1,y2-y1);
    for(let t=.08;t<d;t+=.1)if(solid(x1+(x2-x1)*t/d,y1+(y2-y1)*t/d))return false;
    return true;
  }
  const lineClear = (x,y) => clearBetween(player.x,player.y,x,y);
  // Um pilar serve de cobertura, mas nn prende Beerus eternamente no mesmo lugar.
  function pursue(dt,speed) {
    let target=player;
    if(!lineClear(enemy.x,enemy.y)) {
      enemy.routeTimer-=dt;
      if(enemy.routeTimer<=0||!enemy.route?.length) {
        enemy.routeTimer=.4;
        const sx=Math.floor(enemy.x),sy=Math.floor(enemy.y),tx=Math.floor(player.x),ty=Math.floor(player.y);
        const queue=[[sx,sy]],parents=new Map([[sx+','+sy,null]]);
        for(let i=0;i<queue.length;i++) {
          const [x,y]=queue[i];
          if(x===tx&&y===ty)break;
          for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
            const nx=x+dx,ny=y+dy,key=nx+','+ny;
            if(solid(nx+.5,ny+.5)||parents.has(key))continue;
            parents.set(key,[x,y]);queue.push([nx,ny]);
          }
        }
        const route=[];let cell=[tx,ty];
        if(parents.has(cell.join(',')))while(cell&&(cell[0]!==sx||cell[1]!==sy)) {
          route.unshift({x:cell[0]+.5,y:cell[1]+.5});cell=parents.get(cell.join(','));
        }
        enemy.route=route;
      }
      if(enemy.route?.length) {
        target=enemy.route[0];
        if(Math.hypot(target.x-enemy.x,target.y-enemy.y)<.25){enemy.route.shift();target=enemy.route[0]||player;}
      }
    } else enemy.route=[];
    const a=Math.atan2(target.y-enemy.y,target.x-enemy.x);
    walk(enemy,Math.cos(a)*dt*speed,Math.sin(a)*dt*speed);
  }
  function loadImages() {
    image('enemy', '/01-Odio/01-prontidao.png');
    image('walk', '/01-Odio/02-caminhada-a.png');
    image('walk2', '/01-Odio/03-caminhada-b.png');
    image('charge', '/01-Odio/13-carregar-raio.png');
    image('strike', '/01-Odio/07-golpe-esquerda.png');
    image('corpse', '/01-Odio/21-derrotado.png');
    image('candy', 'amor-chorando-rosto-coberto.png');
    image('sword', '/04-Espada-Solta/espada-solta.png');
    image('fist', '/01-Gestos-Aprovados/02-punhos-fechados.png');
    image('punch', '/01-Gestos-Aprovados/03-soco.png');
    image('wall', 'parede-basaltica-64.png');
    image('sky', '/01-Arena-Odio/01-frente.png');
    image('floor', 'piso-basaltico-64.png');
    floorPixels = Uint8ClampedArray.from(atob(window.SENTIA_FLOOR), character => character.charCodeAt(0));
    image('slash', '/04-Cortes-256/cortes/espada/02-corte.png');
    image('beam', '/03-Efeitos/01-raio-frontal.png');
    for (let n = 1; n <= 4; n++) image('swing' + n, '/espada/0' + n + '-' + ['preparacao', 'cruzar', 'varrer', 'finalizar'][n - 1] + '.png');
    image('shield', '/escudo/02-defesa-verso.png');
    image('shieldRest', '/escudo/01-pronto-verso.png');
    image('knife', '/faca/01-pronta.png');
    image('light', '/luz/01-segurar.png');
    ASSETS.filter(p=>p.includes('/01-Sprites-128/01-Odio/')&&p.endsWith('.png')).forEach((p,i)=>image('odio'+(i+1),p));
    for(let i=1;i<=4;i++) image('knife'+i,'/02-Equipamentos/faca/0'+i+'-'+['pronta','preparar','atacar','guarda'][i-1]+'.png');
    image('paired','/escudo/04-espada-verso.png');
    image('shieldHit','/escudo/03-impacto-verso.png');
    image('lightCast','/luz/03-liberar.png');
    for(const weapon of ['espada','faca']) ASSETS.filter(p=>p.includes('/04-Cortes-256/cortes/'+weapon+'/')).forEach((p,i)=>image(weapon+'Cut'+i,p));
    for(const [i,file] of ['01-raio-frontal','02-raio-varredura','03-rastro-garra','04-impacto-chao'].entries()) image('attackEffect'+i,'/03-Efeitos/'+file+'.png');
  }
  function start(options) {
    stop();
    config = options;
    canvas = document.querySelector('#arena');
    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    canvas.hidden = false;
    canvas.style.touchAction = 'none';
    canvas.style.cursor = 'grab';
    canvas.title = 'Clique e arraste, ou arraste com o dedo, para olhar em volta. Setas também giram.';
    bindCamera();
    loadImages();
    player = {
      x: 10.5,
      y: 15.5,
      a: -Math.PI / 2,
      hp: 100,
      stamina: 100
    };
    enemy = {
      x: 10.5,
      y: 4.5,
      hp: 350,
      maxHp: 350,
      phase: 'approach',
      timer: 2.2,
      pattern: 0,
      cycle:0,
      routeTimer:0,
      route:[],
      volleys:0,
      aimLocked:false,
      phaseNumber:1
    };
    freeMode = !!options.free;
    collected = !!options.collected;
    triggered = false;
    bullets = [];
    keys = {};
    hit = 0;
    attackAge = 9;
    attackCooldown = 0;
    elapsed = 0;
    lightCooldown = 0;
    warning = '';
    hurtInv = 0;
    guardBroken = 0;
    staminaDelay = 0;
    lightAge = 9;
    audioTimes = {};
    tensionAt = 0;
    impactAngle = 0;
    impactBlocked = false;
    phaseAge = 9;
    dragPointer = null;
    active = true;
    paused = false;
    resizeCanvas();
    last = performance.now();
    frameId = requestAnimationFrame(loop);
  }
  function stop() {
    active = false;
    window.AudioSentia?.clearTension?.();
    keys = {};
    cancelDrag();
    cancelAnimationFrame(frameId);
    if (canvas) canvas.hidden = true;
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }
  function setPause(value) {
    paused = value;
    keys = {};
    cancelDrag();
    last = performance.now();
  }
  function press(key, value) {
    keys[key] = value;
  }
  function resizeCanvas() {
    if(!canvas || canvas.hidden || !active) return;
    const rect=canvas.getBoundingClientRect();
    if(rect.width<1 || rect.height<1)return;
    // A resolução acompanha a tela. Isso evita esticar as mãos e o cenário no celular.
    const ratio=rect.width/rect.height;
    const width=Math.max(160,Math.min(800,Math.round(320*ratio)));
    const height=Math.max(120,Math.round((width/ratio)/2)*2);
    if(width===W&&height===H&&canvas.width===W&&canvas.height===H)return;
    W=width;H=height;canvas.width=W;canvas.height=H;
    ctx.imageSmoothingEnabled=false;
  }
  function cancelDrag() {
    const pointer=dragPointer;
    // Zera antes de liberar: lostpointercapture também passa pelo mesmo tratamento.
    dragPointer=null;
    if(!canvas)return;
    canvas.style.cursor='grab';
    if(pointer!==null&&canvas.hasPointerCapture?.(pointer))canvas.releasePointerCapture(pointer);
  }
  function bindCamera() {
    if(canvas.dataset.arenaCamera)return;
    canvas.dataset.arenaCamera='drag';
    // Arrastar funciona sem depender de pointer lock nem de permissões do navegador.
    canvas.addEventListener('pointerdown',event=>{
      if(!active||paused||dragPointer!==null||(event.pointerType==='mouse'&&event.button!==0))return;
      event.preventDefault();dragPointer=event.pointerId;dragX=event.clientX;
      canvas.setPointerCapture?.(event.pointerId);canvas.style.cursor='grabbing';
    });
    canvas.addEventListener('pointermove',event=>{
      if(!active||paused||dragPointer!==event.pointerId)return;
      const dx=event.clientX-dragX;dragX=event.clientX;
      player.a=Math.atan2(Math.sin(player.a+dx*.006),Math.cos(player.a+dx*.006));
      event.preventDefault();
    });
    const release=event=>{
      if(dragPointer!==event.pointerId)return;
      cancelDrag();
    };
    canvas.addEventListener('pointerup',release);
    canvas.addEventListener('pointercancel',release);
    canvas.addEventListener('lostpointercapture',release);
    if(typeof ResizeObserver!=='undefined'){resizeObserver=new ResizeObserver(resizeCanvas);resizeObserver.observe(canvas);}
  }
  function action(type) {
    if (!active || paused) return;
    if (type === 'interact') {
      if (!freeMode) return;
      const d = Math.hypot(player.x - 10.5, player.y - 4.5);
      if (!collected && d < 1.3) {
        collected = true;
        config.onCollect?.();
      } else if (collected && Math.hypot(player.x - 3.5, player.y - 4.5) < 1.5 && !triggered) {
        triggered = true;
        config.onSugar?.();
      }
      return;
    }
    if (freeMode || attackCooldown > 0) return;
    if (type === 'attack' && config.equipped === 'luz') type = 'light';
    const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y),
      angle = Math.atan2(enemy.y - player.y, enemy.x - player.x);
    const diff = Math.atan2(Math.sin(angle - player.a), Math.cos(angle - player.a));
    if (type === 'light' && config.items.includes('luz') && lightCooldown <= 0) {
      const cost=config.assist?17:30;
      if(player.stamina<cost){warning='Sem fôlego para a luz. Solte a defesa e recupere-se.';return;}
      player.stamina-=cost;staminaDelay=1.15;lightAge=0;
      sound('projectile',.2,{intensity:.55});
      if (distance<11 && Math.abs(diff) < (config.assist?.38:.22) && lineClear(enemy.x, enemy.y)) {
        enemy.hp -= enemy.phase === 'recover' ? 30 : 10;
        enemy.hitUntil=elapsed+.35;
        sound('hit',.14,soundPosition(enemy,.35));
      }
      lightCooldown = config.assist?1.8:2.7;
      attackCooldown = .65;
      attackAge = 0;
    } else if (type === 'attack') {
      const cost=config.assist?8:12;
      if (player.stamina < cost) {
        warning = 'Sem fôlego para atacar. Solte a defesa e recue.';
        return;
      }
      player.stamina -= cost;
      staminaDelay = .8;
      attackAge = 0;
      sound(config.equipped==='faca'?'knife':'attack',.14,{intensity:.65});
      attackCooldown = config.equipped === 'faca' ? .52 : .72;
      if (distance < (config.assist?2.8:2.5) && Math.abs(diff) < (config.assist?.7:.45) && lineClear(enemy.x, enemy.y)) {
        const damage = config.equipped==='faca'&&config.items.includes('faca') ? 20 : config.items.includes('espada') ? 27 : 13;
        // Golpear durante o preparo encontra resistência. O recuo dele é a abertura mais segura.
        enemy.hp -= damage * (enemy.phase==='recover'?1.4:config.assist?.7:enemy.phase==='approach'?.5:.22);
        enemy.hitUntil=elapsed+.35;
        sound('cut',.14,soundPosition(enemy,config.equipped==='faca'?.45:.7));
        if(enemy.phase==='recover')walk(enemy, Math.cos(player.a) * .15, Math.sin(player.a) * .15);
      }
    }
    if (enemy.hp <= 10) {
      active = false;
      window.AudioSentia?.clearTension?.();
      keys={};cancelDrag();
      config.onFinish?.();
    }
  }
  function damage(n,source=enemy,blockable=true) {
    if (hurtInv > 0) return;
    hurtInv = config.assist?.6:.36;
    const angle = Math.atan2(source.y-player.y, source.x-player.x)-player.a;
    const facing = Math.abs(Math.atan2(Math.sin(angle),Math.cos(angle))) < 1.05;
    const guarding = blockable && keys.guard && attackAge>.36 && lightAge>.65 && guardBroken <= 0 && player.stamina > 8 && (facing || config.assist);
    impactAngle = Math.atan2(source.y-player.y,source.x-player.x);
    impactBlocked = !!guarding;
    n*=config.assist?.62:1;
    if(guarding) {
      player.stamina = Math.max(0,player.stamina-n*1.15);
      staminaDelay = .9;
      if(player.stamina < 8) {guardBroken = 1.5;sound('alert',.4);}
      sound('block',.14,soundPosition(source,.7));
    } else {
      sound('hit',.14,soundPosition(source,.65));
    }
    player.hp -= guarding ? n * (config.items.includes('escudo') ? .22 : .75) : n;
    hit = .3;
    if (player.hp <= 0) {
      active = false;
      window.AudioSentia?.clearTension?.();
      keys={};cancelDrag();
      config.onDeath?.();
    }
  }
  function tick(dt) {
    elapsed += dt;
    phaseAge += dt;
    hurtInv = Math.max(0, hurtInv - dt);
    hit = Math.max(0, hit - dt);
    attackAge += dt;
    lightAge += dt;
    attackCooldown = Math.max(0, attackCooldown - dt);
    lightCooldown = Math.max(0, lightCooldown - dt);
    guardBroken = Math.max(0,guardBroken-dt);
    staminaDelay = Math.max(0,staminaDelay-dt);
    const guarding = !freeMode && keys.guard && attackAge>.36 && lightAge>.65 && guardBroken<=0 && player.stamina>0;
    const moving=keys.up||keys.down||keys.left||keys.right;
    const sprinting = !guarding && moving && keys.run && player.stamina>8;
    if(!freeMode && (guarding || sprinting)) {
      player.stamina=Math.max(0,player.stamina-dt*(guarding?18:config.assist?10:17));
      staminaDelay=.35;
      if(guarding && player.stamina<=0)guardBroken=1.2;
    } else if(staminaDelay<=0) player.stamina=Math.min(100,player.stamina+dt*(config.assist?27:23));
    let turn = (keys.turnRight ? 1 : 0) - (keys.turnLeft ? 1 : 0);
    player.a = Math.atan2(Math.sin(player.a+turn*dt*2.15),Math.cos(player.a+turn*dt*2.15));
    const forward = (keys.up ? 1 : 0) - (keys.down ? 1 : 0),
      side = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    const norm = Math.hypot(forward, side) || 1;
    const speed = (sprinting ? 3.6 : guarding ? 1.85 : 2.55) * dt;
    const previousX=player.x,previousY=player.y;
    walk(player, (Math.cos(player.a) * forward - Math.sin(player.a) * side) * speed / norm, (Math.sin(player.a) * forward + Math.cos(player.a) * side) * speed / norm);
    if(Math.hypot(player.x-previousX,player.y-previousY)>.001)sound('step',sprinting?.29:.46,{pace:sprinting?'run':'walk',surface:'stone',intensity:.45});
    if (freeMode) {
      const nearSword = Math.hypot(player.x - 10.5, player.y - 4.5) < 1.3,
        nearSugar = Math.hypot(player.x - 3.5, player.y - 4.5) < 1.5;
      warning = !collected ? nearSword ? 'E · Pegar a espada' : 'Pegue a espada — centro da arena' : nearSugar ? 'E · Aproximar-se de Sugar' : 'Sugar está do outro lado, à esquerda';
      config.onHud?.({
        hp: player.hp,
        enemy: 0,
        warning,
        stamina:Math.round(player.stamina),
        guardBroken:false,
        free: true
      });
      return;
    }
    enemy.timer -= dt;
    const enraged=enemy.hp<enemy.maxHp*.5;
    if(enraged&&enemy.phaseNumber===1) {enemy.phaseNumber=2;phaseAge=0;sound('alert',.5);}
    const d = Math.hypot(player.x - enemy.x, player.y - enemy.y),
      a = Math.atan2(player.y - enemy.y, player.x - enemy.x),
      visible=lineClear(enemy.x,enemy.y);
    if (enemy.phase === 'approach') {
      if(d<8)sound('approach',d<3?.8:1.25,soundPosition(enemy,.4));
      warning = 'Olhe para Beerus. Esquive, espere o recuo e contra-ataque.';
      if (d > 1.8||!visible) pursue(dt,config.assist?1.85:enraged?2.95:2.6);
      if (d < .8&&visible) damage(18);
      // Longe ele pressiona com disparos; perto alterna golpes, grito e agarrão.
      if (enemy.timer <= 0 && visible) {
        const close=[0,3,4,6,2,5],far=[1,2,4,1,2,4];
        enemy.pattern=(d>4.3?far:close)[enemy.cycle++%6];
        enemy.phase = 'prepare';
        enemy.timer = config.assist ? 1.55 : enraged ? .92 : 1.2;
        enemy.windup=enemy.timer;enemy.aim=a;enemy.aimLocked=false;
        sound('charge',.35,soundPosition(enemy,.65));
      }
    } else if (enemy.phase === 'prepare') {
      const tells=['GARRA · recue ou bloqueie','TRÊS DISPAROS · mova-se para o lado','INVESTIDA · saia da linha','MORDIDA · recue','LEQUE DE FOGO · busque uma brecha ou cobertura','GRITO · saia do alcance; escudo nn protege','AGARRE · recue; nn tente bloquear'];
      warning=tells[enemy.pattern]+(enemy.aimLocked?' · MIRA TRAVADA':'');
      // A mira para de seguir antes do ataque. Dá para ler o aviso e escapar de verdade.
      if(enemy.timer>(config.assist?.5:.32))enemy.aim=a;
      else enemy.aimLocked=true;
      if (enemy.timer <= 0) {
        enemy.phase = 'attack';enemy.timer=enemy.pattern===2?.85:enemy.pattern===1?.95:.4;
        enemy.volleys=0;enemy.volleyTimer=0;
        const inCone=Math.abs(angleDiff(a,enemy.aim))<1.1;
        if(visible&&inCone) {
          if(enemy.pattern===0&&d<3)damage(32);
          if(enemy.pattern===3&&d<2.4)damage(40);
          if(enemy.pattern===5&&d<4.3)damage(28,enemy,false);
          if(enemy.pattern===6&&d<2.8)damage(38,enemy,false);
        }
        if(enemy.pattern===4)fireVolley(enraged,7,.22);
        sound(enemy.pattern===2?'charge':'attack',.2,soundPosition(enemy,.65));
      }
    } else if (enemy.phase === 'attack') {
      warning=enemy.pattern===2?'INVESTIDA · continue a esquiva':enemy.pattern===1?'RAJADA · continue em movimento':'Espere o golpe terminar.';
      if(enemy.pattern===1) {
        enemy.volleyTimer-=dt;
        if(enemy.volleyTimer<=0&&enemy.volleys<3) {
          fireVolley(enraged,config.assist?1:3,.14);
          enemy.volleys++;enemy.volleyTimer=.26;
        }
      }
      if (enemy.pattern === 2) {
        const beforeX=enemy.x,beforeY=enemy.y;
        walk(enemy, Math.cos(enemy.aim) * dt * (config.assist?5.5:8), Math.sin(enemy.aim) * dt * (config.assist?5.5:8));
        const chargeDistance=Math.hypot(player.x-enemy.x,player.y-enemy.y);
        if(chargeDistance<1.2&&lineClear(enemy.x,enemy.y)) {damage(42);enemy.timer=0;}
        if(Math.hypot(enemy.x-beforeX,enemy.y-beforeY)<dt)enemy.timer=0;
      }
      if (enemy.timer <= 0) {
        enemy.phase = 'recover';
        enemy.timer=config.assist?2.15:enemy.pattern===2?1.65:enraged?1.15:1.45;
      }
    } else {
      warning = 'ABERTURA · aproxime-se e ataque; depois recue.';
      if (enemy.timer <= 0) {
        enemy.phase = 'approach';enemy.timer=config.assist?1.8:enraged?.55:.9;
      }
    }
    bullets = bullets.filter(b => {
      b.life-=dt;
      if(solid(b.x,b.y))return false;
      // Passos curtos testam a parede antes de acertar alguém do outro lado dela.
      const steps=Math.max(1,Math.ceil(Math.hypot(b.vx,b.vy)*dt/.1));
      for(let i=0;i<steps;i++) {
        const source={x:b.x,y:b.y};
        b.x+=b.vx*dt/steps;b.y+=b.vy*dt/steps;
        if(solid(b.x,b.y))return false;
        if(Math.hypot(b.x-player.x,b.y-player.y)<.42) {damage(24,source);return false;}
        if(!b.whizzed&&Math.hypot(b.x-player.x,b.y-player.y)<1.15){b.whizzed=true;sound('nearMiss',.22,soundPosition(b,.5));}
      }
      return b.life>0;
    });
    if(active&&elapsed>=tensionAt) {
      tensionAt=elapsed+.12;
      const proximity=clamp(1-d/12),chargeProgress=enemy.phase==='prepare'?clamp(1-enemy.timer/enemy.windup):0;
      const pressure=enemy.phase==='recover'?.14:enemy.phase==='prepare'?.48+chargeProgress*.24:enemy.phase==='attack'?.85:.24+proximity*.24;
      window.AudioSentia?.setTension?.(clamp(pressure+(enraged?.1:0)+(1-player.hp/100)*.12),{kind:'boss',proximity,health:clamp(player.hp/100),charging:enemy.phase==='prepare'});
    }
    config.onHud?.({
      hp: Math.max(0, Math.ceil(player.hp)),
      enemy: Math.max(0, Math.ceil(enemy.hp)),
      warning:guardBroken>0?'DEFESA ROMPIDA · solte o escudo e recue':(enraged?'FÚRIA · ':'')+warning,
      stamina:Math.round(player.stamina),
      guardBroken:guardBroken>0,
      phase:enemy.phaseNumber,
      lightReady:lightCooldown<=0&&player.stamina>=(config.assist?17:30),
      free: false
    });
  }
  function fireVolley(enraged,count,spread) {
    const speed=config.assist?4.6:enraged?7.6:6.2;
    for(let i=0;i<count;i++) {
      const a=enemy.aim+(i-(count-1)/2)*spread;
      bullets.push({x:enemy.x,y:enemy.y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life:4.8});
    }
    sound('projectile',.2,soundPosition(enemy,.65));
  }
  function enemyImage() {
    const alternate=Math.floor(elapsed*5)%2;
    let index=1;
    if(enemy.hitUntil>elapsed) index=17;
    else if(enemy.phase==='prepare') index=enemy.pattern===6&&enemy.timer>.7?16:[6,13,11,9,15,12,10][enemy.pattern];
    else if(enemy.phase==='attack') index=enemy.pattern===0?(enemy.timer>.32?7:8):[7,14,11,9,15,12,10][enemy.pattern];
    else if(enemy.phase==='recover') index=enemy.timer>1.2?17:18;
    else if(keys.left||keys.right) index=19;
    else if(Math.hypot(player.x-enemy.x,player.y-enemy.y)>6) index=alternate?4:5;
    else if(Math.hypot(player.x-enemy.x,player.y-enemy.y)>1.7) index=alternate?2:3;
    return images['odio'+index]||images.enemy;
  }
  function handImage() {
    // A espada pertence ao chão desta cena até E recolher. Ter o item no histórico não a põe na mão.
    if(freeMode&&!collected)return config.items.includes('escudo')?images.shieldRest:images.fist;
    const knife=config.equipped==='faca'&&config.items.includes('faca');
    if(keys.guard&&attackAge>.36&&lightAge>.65&&guardBroken<=0&&player.stamina>8&&config.items.includes('escudo'))return hit>0?images.shieldHit:images.shield;
    if(knife)return images['knife'+(keys.guard?4:attackAge<.12?2:attackAge<.3?3:1)];
    if(lightAge<.65)return images.lightCast;
    if(config.equipped==='luz')return images.light;
    if(config.items.includes('espada')||collected)return attackAge<.48?images['swing'+Math.min(4,Math.floor(attackAge/.12)+1)]:config.items.includes('escudo')?images.paired:images.swing1;
    return attackAge<.3?images.punch:images.fist;
  }
  // O aviso usa a mesma direção e os mesmos alcances do golpe real.
  // A marca no chão para nos pilares; nn revela um ataque através da cobertura.
  function threatInfo() {
    if(freeMode||!enemy)return {danger:false,locked:false};
    const dx=player.x-enemy.x,dy=player.y-enemy.y,d=Math.hypot(dx,dy);
    const relative=angleDiff(Math.atan2(dy,dx),enemy.aim??0),visible=lineClear(enemy.x,enemy.y);
    let danger=false;
    if(visible&&['prepare','attack'].includes(enemy.phase)) {
      if([0,3,5,6].includes(enemy.pattern)) danger=d<[3,0,0,2.4,0,4.3,2.8][enemy.pattern]&&Math.abs(relative)<1.1;
      else if(enemy.pattern===2) danger=Math.cos(relative)*d>0&&Math.cos(relative)*d<(config.assist?4.9:7.2)&&Math.abs(Math.sin(relative)*d)<1.2;
      else {
        const count=enemy.pattern===4?7:config.assist?1:3,spread=enemy.pattern===4?.22:.14;
        for(let i=0;i<count;i++) {
          const angle=relative-(i-(count-1)/2)*spread;
          if(Math.cos(angle)*d>0&&Math.abs(Math.sin(angle)*d)<.65)danger=true;
        }
      }
    }
    return {danger,locked:!!enemy.aimLocked,visible,distance:d};
  }
  function floorPoint(x,y) {
    const dx=x-player.x,dy=y-player.y,z=dx*Math.cos(player.a)+dy*Math.sin(player.a);
    if(z<.14)return null;
    return {x:W/2+(-dx*Math.sin(player.a)+dy*Math.cos(player.a))/z/Math.tan(fov/2)*W/2,y:H/2+H*.5/z,z};
  }
  function floorLine(x1,y1,x2,y2,depth,color,width=1.5) {
    const steps=Math.max(1,Math.ceil(Math.hypot(x2-x1,y2-y1)/.14));
    ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();
    for(let i=0;i<steps;i++) {
      const t=(i+.5)/steps,x=x1+(x2-x1)*t,y=y1+(y2-y1)*t;
      if(solid(x,y))continue;
      const p=floorPoint(x1+(x2-x1)*i/steps,y1+(y2-y1)*i/steps),q=floorPoint(x1+(x2-x1)*(i+1)/steps,y1+(y2-y1)*(i+1)/steps);
      if(!p||!q)continue;
      const sx=(p.x+q.x)/2,sy=(p.y+q.y)/2;
      if(sx<0||sx>=W||sy>H||depth[sx|0]<(p.z+q.z)/2-.08)continue;
      ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
    }
    ctx.stroke();
  }
  function threatFloor(depth,cue) {
    if(freeMode||enemy.phase!=='prepare'||!cue.visible)return;
    const color=enemy.aimLocked?'#ee715cc4':'#dbb87999',width=Math.max(1,H*.004);
    const ray=(angle,length,offset=0)=>{
      const x=enemy.x-Math.sin(angle)*offset,y=enemy.y+Math.cos(angle)*offset;
      let end=length;
      for(let d=.1;d<length;d+=.12)if(solid(x+Math.cos(angle)*d,y+Math.sin(angle)*d)){end=d;break;}
      floorLine(x,y,x+Math.cos(angle)*end,y+Math.sin(angle)*end,depth,color,width);
    };
    if(enemy.pattern===2) {
      ray(enemy.aim,config.assist?4.9:7.2,-1.15);ray(enemy.aim,config.assist?4.9:7.2,1.15);
      ray(enemy.aim,config.assist?4.9:7.2);
    } else if([1,4].includes(enemy.pattern)) {
      const count=enemy.pattern===4?7:config.assist?1:3,spread=enemy.pattern===4?.22:.14;
      for(let i=0;i<count;i++)ray(enemy.aim+(i-(count-1)/2)*spread,14);
    } else {
      const radius=[3,0,0,2.4,0,4.3,2.8][enemy.pattern];
      ray(enemy.aim-1.1,radius);ray(enemy.aim+1.1,radius);
      for(let i=0;i<24;i++) {
        const a=enemy.aim-1.1+i*2.2/24,b=a+2.2/24;
        const x=enemy.x+Math.cos(a)*radius,y=enemy.y+Math.sin(a)*radius;
        const x2=enemy.x+Math.cos(b)*radius,y2=enemy.y+Math.sin(b)*radius;
        if(clearBetween(enemy.x,enemy.y,x,y)&&clearBetween(enemy.x,enemy.y,x2,y2))floorLine(x,y,x2,y2,depth,color,width);
      }
    }
  }
  function combatFeedback(cue) {
    if(freeMode)return;
    const reduced=reducedMotion(),enraged=enemy.phaseNumber===2;
    const low=clamp((42-player.hp)/42),impact=hit/.3;
    // Só as bordas escurecem. O centro, os projéteis e a câmera ficam estáveis.
    const edge=ctx.createRadialGradient(W/2,H*.48,H*.2,W/2,H*.48,Math.max(W,H)*.62);
    const breath=reduced?0:low*(.015+.015*Math.sin(elapsed*2.1));
    edge.addColorStop(0,'rgba(28,8,19,0)');
    edge.addColorStop(.62,'rgba(44,10,23,0)');
    edge.addColorStop(1,`rgba(${enraged?'105,24,38':'105,14,26'},${clamp(low*.3+breath+(enraged?.13:0)+impact*.08,0,.48)})`);
    ctx.fillStyle=edge;ctx.fillRect(0,0,W,H);
    if(hit>0) {
      const direction=angleDiff(impactAngle,player.a);
      ctx.strokeStyle=impactBlocked?`rgba(244,210,153,${impact*.9})`:`rgba(248,99,79,${impact*.9})`;
      ctx.lineWidth=Math.max(3,H*.014);ctx.beginPath();
      for(let i=0;i<=12;i++) {
        const a=direction-.25+i*.5/12,x=W/2+Math.sin(a)*W*.43,y=H/2-Math.cos(a)*H*.41;
        if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    if(!['prepare','attack','recover'].includes(enemy.phase)&&phaseAge>2.4)return;
    const preparing=enemy.phase==='prepare',recovering=enemy.phase==='recover';
    const text=recovering?'ABERTURA · CONTRA-ATAQUE':preparing?(enemy.aimLocked?(cue.danger?'MIRA TRAVADA · ESQUIVE':'MIRA TRAVADA'):'PREPARANDO O GOLPE'):enemy.phase==='approach'?'FASE II · FÚRIA':'GOLPE · MANTENHA DISTÂNCIA';
    const color=recovering?'#ead8af':preparing&&enemy.aimLocked?'#ff9a7c':'#e0c591';
    let fontSize=Math.max(9,Math.min(13,H*.034));
    ctx.font=`600 ${fontSize}px sans-serif`;
    if(ctx.measureText(text).width>W*.86) {
      fontSize=Math.max(8,fontSize*W*.86/ctx.measureText(text).width);ctx.font=`600 ${fontSize}px sans-serif`;
    }
    ctx.textAlign='center';
    const textWidth=ctx.measureText(text).width,panelWidth=Math.min(W*.94,textWidth+20),top=H*.205;
    ctx.fillStyle='rgba(17,11,19,.76)';ctx.fillRect((W-panelWidth)/2,top,panelWidth,H*.072+8);
    ctx.fillStyle=color;ctx.fillText(text,W/2,top+H*.046+2);
    const remaining=preparing?clamp(enemy.timer/(enemy.windup||1)):recovering?clamp(enemy.timer/(config.assist?2.15:enemy.pattern===2?1.65:enraged?1.15:1.45)):0;
    if(preparing||recovering) {
      ctx.fillStyle='#ffffff24';ctx.fillRect(W*.34,top+H*.064+5,W*.32,2);
      ctx.fillStyle=color;ctx.fillRect(W*.34,top+H*.064+5,W*.32*remaining,2);
    }
    // Um sinal lateral permite reencontrar Beerus sem mover a visão à força.
    const bearing=angleDiff(Math.atan2(enemy.y-player.y,enemy.x-player.x),player.a);
    if(Math.abs(bearing)>fov*.48&&!recovering) {
      const side=Math.sin(bearing)>=0?1:-1,x=side>0?W*.95:W*.05,y=H*.38;
      ctx.strokeStyle=color;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x-side*6,y-6);ctx.lineTo(x,y);ctx.lineTo(x-side*6,y+6);ctx.stroke();
    }
    ctx.textAlign='start';
  }
  function draw() {
    const cue=threatInfo();
    ctx.fillStyle = '#24151c';
    ctx.fillRect(0, 0, W, H / 2);
    const floor = ctx.createLinearGradient(0, H / 2, 0, H);
    floor.addColorStop(0, '#19161b');
    floor.addColorStop(1, '#595051');
    ctx.fillStyle = floor;
    ctx.fillRect(0, H / 2, W, H / 2);
    if (images.sky?.complete && images.sky.naturalWidth) {
      ctx.drawImage(images.sky, 0, 0, images.sky.naturalWidth, images.sky.naturalHeight * .4, 0, 0, W, H / 2);
      ctx.fillStyle = '#190d18aa';
      ctx.fillRect(0, 0, W, H / 2);
    }
    if (floorPixels) {
      const pixels = ctx.createImageData(W, H / 2),
        leftX = Math.cos(player.a) - Math.sin(player.a) * Math.tan(fov / 2),
        leftY = Math.sin(player.a) + Math.cos(player.a) * Math.tan(fov / 2),
        stepRayX = 2 * Math.sin(player.a) * Math.tan(fov / 2) / W,
        stepRayY = -2 * Math.cos(player.a) * Math.tan(fov / 2) / W;
      for (let y = 1; y < H / 2; y++) {
        const dist = H * .5 / y;
        let wx = player.x + dist * leftX,
          wy = player.y + dist * leftY;
        const shade = Math.max(.15, 1 - dist / 30);
        for (let x = 0; x < W; x++) {
          const tx = (Math.floor(wx * 64) % 64 + 64) % 64,
            ty = (Math.floor(wy * 64) % 64 + 64) % 64,
            src = (ty * 64 + tx) * 4,
            dst = (y * W + x) * 4;
          pixels.data[dst] = floorPixels[src] * shade;
          pixels.data[dst + 1] = floorPixels[src + 1] * shade;
          pixels.data[dst + 2] = floorPixels[src + 2] * shade;
          pixels.data[dst + 3] = 255;
          wx += dist * stepRayX;
          wy += dist * stepRayY;
        }
      }
      ctx.putImageData(pixels, 0, H / 2);
    }
    const depth = new Float32Array(W);
    for (let x = 0; x < W; x += 2) {
      const angle = player.a + Math.atan((x / W - .5) * 2 * Math.tan(fov / 2));
      let dist = .05,
        rx,
        ry;
      while (dist < 32) {
        rx = player.x + Math.cos(angle) * dist;
        ry = player.y + Math.sin(angle) * dist;
        if (solid(rx, ry)) break;
        dist += .04;
      }
      dist *= Math.cos(angle - player.a);
      depth[x] = depth[x + 1] = dist;
      const h = Math.min(H * 4, H / dist),
        top = H / 2 - h / 2;
      const shade = Math.max(18, 105 - dist * 5),
        edge = Math.min(rx % 1, ry % 1, 1 - rx % 1, 1 - ry % 1) < .05;
      ctx.fillStyle = 'rgb(' + Math.round(shade) + ',' + Math.round(shade * .75) + ',' + Math.round(shade * .8) + ')';
      ctx.fillRect(x, top, 2, h);
      if (images.wall?.complete && images.wall.naturalWidth) {
        const tex = Math.abs((Math.abs(rx - Math.round(rx)) < .06 ? ry : rx) % 1);
        ctx.drawImage(images.wall, Math.floor(tex * 64), 0, 1, 64, x, top, 2, h);
        ctx.fillStyle = 'rgba(0,0,0,' + Math.min(.8, dist / 22) + ')';
        ctx.fillRect(x, top, 2, h);
      }
      ctx.fillStyle = '#14101866';
      for (let r = 0; r < 8; r++) ctx.fillRect(x, top + r * h / 8, 2, Math.max(1, h / 100));
      if (edge) {
        ctx.fillStyle = '#100c1555';
        ctx.fillRect(x, top, 2, h);
      }
    }
    threatFloor(depth,cue);
    const objects = freeMode ? [{
      x: 3.5,
      y: 4.5,
      img: images.candy,
      size: 1.8
    }, {
      x: 17.5,
      y: 8.5,
      img: images.corpse,
      size: 1.8
    }, ...(!collected ? [{
      x: 10.5,
      y: 4.5,
      img: images.sword,
      size: .8,
      low: true
    }] : [])] : [{
      ...enemy,
      img: enemyImage(),
      size: 2.7
    }, ...bullets.map(b => ({
      ...b,
      orb: true,
      size: .22
    }))];
    objects.sort((a, b) => Math.hypot(b.x - player.x, b.y - player.y) - Math.hypot(a.x - player.x, a.y - player.y));
    for (const o of objects) {
      const dx = o.x - player.x,
        dy = o.y - player.y,
        angle = Math.atan2(dy, dx) - player.a;
      const da = Math.atan2(Math.sin(angle), Math.cos(angle)),
        distance = Math.hypot(dx, dy),
        z = distance * Math.cos(da);
      if (z < .1 || Math.abs(da) > 1.1) continue;
      const size = H / z * o.size,
        cx = W / 2 + Math.tan(da) / Math.tan(fov / 2) * W / 2;
      const cy = H / 2 + H / z / 2 - (o.low ? size * .3 : size * .5);
      if (o.orb) {
        if (depth[Math.max(0, Math.min(W - 1, cx | 0))] > z) {
          const orbY=H/2-H*.4/z,orbSize=Math.max(3,size);
          const tail=floorPoint(o.x-o.vx*.085,o.y-o.vy*.085);
          if(tail&&depth[Math.max(0,Math.min(W-1,tail.x|0))]>tail.z) {
            ctx.strokeStyle='#fa9e6e99';ctx.lineWidth=Math.max(1,orbSize*.28);
            ctx.beginPath();ctx.moveTo(tail.x,tail.y-H*.9/tail.z);ctx.lineTo(cx,orbY);ctx.stroke();
          }
          ctx.fillStyle = '#f46c5044';
          ctx.fillRect(cx-orbSize,orbY-orbSize,orbSize*2,orbSize*2);
          ctx.fillStyle = '#ff7958';
          ctx.fillRect(cx-orbSize/2,orbY-orbSize/2,orbSize,orbSize);
          ctx.fillStyle = '#fff1cd';
          ctx.fillRect(cx-orbSize/4,orbY-orbSize/4,orbSize/2,orbSize/2);
        }
        continue;
      }
      if (!o.img?.complete || !o.img.naturalWidth) continue;
      const width = size * o.img.naturalWidth / o.img.naturalHeight;
      for (let sx = Math.max(0, Math.floor(cx - width / 2)); sx < Math.min(W, cx + width / 2); sx++) {
        if (depth[sx] < z) continue;
        const sourceX = (sx - (cx - width / 2)) / width * o.img.naturalWidth;
        ctx.drawImage(o.img, sourceX, 0, 1, o.img.naturalHeight, sx, cy - size / 2, 1, size);
      }
    }
    ctx.lineWidth=1;
    ctx.strokeStyle = '#ffffff9a';
    ctx.beginPath();
    ctx.moveTo(W / 2 - 4, H / 2);
    ctx.lineTo(W / 2 + 4, H / 2);
    ctx.moveTo(W / 2, H / 2 - 4);
    ctx.lineTo(W / 2, H / 2 + 4);
    ctx.stroke();
    const knife=config.equipped==='faca' && config.items.includes('faca');
    const hand = handImage();
    renderedHand=hand?.src||null;
    if (hand?.complete && hand.naturalWidth) {
      // O PNG mantém a proporção: a borda inferior prende os punhos à câmera.
      const scale=Math.min(W*.96/hand.naturalWidth,H*.64/hand.naturalHeight);
      const width=hand.naturalWidth*scale,height=hand.naturalHeight*scale;
      const moving=keys.up||keys.down||keys.left||keys.right;
      const bob=moving&&!reducedMotion()?Math.sin(elapsed*(keys.run?11:7))*H*.006:0;
      ctx.drawImage(hand,(W-width)/2,H-height+H*.015+bob,width,height);
    }
    const cut=images[(knife?'faca':'espada')+'Cut'+Math.min(2,Math.floor(attackAge/.1))];
    if (!freeMode && attackAge < .3 && cut?.complete && cut.naturalWidth && (knife||config.items.includes('espada'))) {
      ctx.globalAlpha = 1 - attackAge / .3;
      ctx.drawImage(cut, W * .2, H * .2, W * .6, H * .5);
      ctx.globalAlpha = 1;
    }
    if(!freeMode&&enemy.phase==='attack'&&Math.hypot(enemy.x-player.x,enemy.y-player.y)<4&&Math.abs(angleDiff(Math.atan2(enemy.y-player.y,enemy.x-player.x),player.a))<.6&&lineClear(enemy.x,enemy.y)) {
      const index=({0:2,1:0,2:3,4:1})[enemy.pattern], fx=images['attackEffect'+index];
      if(fx?.complete&&fx.naturalWidth){ctx.globalAlpha=.45;ctx.drawImage(fx,W*.15,H*.1,W*.7,H*.7);ctx.globalAlpha=1;}
    }
    combatFeedback(cue);
  }
  function loop(now) {
    if (!active) return;
    const dt = Math.max(0, Math.min(.04, (now - last) / 1000));
    last = now;
    if (!paused) {
      tick(dt);
      draw();
    }
    if (active) frameId = requestAnimationFrame(loop);
  }
  document.addEventListener('mousemove', e => {
    if (active && !paused && document.pointerLockElement === canvas) player.a += e.movementX * .003;
  });
  document.addEventListener('keydown',event=>{
    if(!active||paused||!['ArrowLeft','ArrowRight'].includes(event.key))return;
    keys[event.key==='ArrowLeft'?'turnLeft':'turnRight']=true;
    event.preventDefault();
  });
  document.addEventListener('keyup',event=>{
    if(event.key==='ArrowLeft'||event.key==='ArrowRight')keys[event.key==='ArrowLeft'?'turnLeft':'turnRight']=false;
  });
  document.addEventListener('visibilitychange', () => {
    keys = {};
    cancelDrag();
  });
  window.addEventListener('blur', () => {
    keys = {};
    cancelDrag();
  });
  return {
    start,
    stop,
    pause: setPause,
    press,
    action,
    equip(id) { if(config) config.equipped=id; },
    look(dx) {
      if (active && !paused) player.a=Math.atan2(Math.sin(player.a+dx*.006),Math.cos(player.a+dx*.006));
    },
    isActive: () => active,
    state: () => ({
      player,
      enemy,
      freeMode,
      collected,
      paused,
      enemySprite:enemy&&player?enemyImage()?.src:null,
      equipped:config?.equipped,
      handSprite:renderedHand,
      guardBroken:guardBroken>0,
      staminaDelay,
      lightCooldown,
      attackCooldown,
      elapsed,
      threat:enemy&&player?threatInfo():null,
      feedback:{angle:impactAngle,blocked:impactBlocked,remaining:hit},
      reduced:reducedMotion(),
      bullets:bullets.map(b=>({...b})),
      dragging:dragPointer!==null,
      resolution:{width:W,height:H}
    }),
    getMap: () => map
  };
})();
