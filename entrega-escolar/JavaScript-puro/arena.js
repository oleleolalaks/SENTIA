'use strict';

// Esse código aq desenha a arena em primeira pessoa. As paredes têm colisão;
// o Ódio e os objetos continuam sendo sprites, como num jogo antigo.
window.Arena = (() => {
  const W = 500,
    H = 380,
    fov = Math.PI / 3;
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
    hurtInv = 0;
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
  function lineClear(x, y) {
    const d = Math.hypot(x - player.x, y - player.y);
    for (let t = .2; t < d; t += .15) if (solid(player.x + (x - player.x) * t / d, player.y + (y - player.y) * t / d)) return false;
    return true;
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
    loadImages();
    player = {
      x: 10.5,
      y: 15.5,
      a: -Math.PI / 2,
      hp: 100
    };
    enemy = {
      x: 10.5,
      y: 4.5,
      hp: 240,
      phase: 'approach',
      timer: 4,
      pattern: 0
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
    active = true;
    paused = false;
    last = performance.now();
    frameId = requestAnimationFrame(loop);
  }
  function stop() {
    active = false;
    keys = {};
    cancelAnimationFrame(frameId);
    if (canvas) canvas.hidden = true;
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }
  function setPause(value) {
    paused = value;
    keys = {};
    last = performance.now();
  }
  function press(key, value) {
    keys[key] = value;
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
    const distance = Math.hypot(player.x - enemy.x, player.y - enemy.y),
      angle = Math.atan2(enemy.y - player.y, enemy.x - player.x);
    const diff = Math.atan2(Math.sin(angle - player.a), Math.cos(angle - player.a));
    if (type === 'light' && config.items.includes('luz') && lightCooldown <= 0) {
      if (Math.abs(diff) < .3 && lineClear(enemy.x, enemy.y)) {
        enemy.hp -= 22;
        enemy.hitUntil=elapsed+.35;
        hit = .08;
      }
      lightCooldown = 1.5;
      attackCooldown = .3;
      attackAge = 0;
    } else if (type === 'attack') {
      attackAge = 0;
      attackCooldown = .65;
      if (distance < 2.7 && Math.abs(diff) < .8 && lineClear(enemy.x, enemy.y)) {
        enemy.hp -= config.equipped==='faca'&&config.items.includes('faca') ? 26 : config.items.includes('espada') ? 32 : 23;
        enemy.hitUntil=elapsed+.35;
        walk(enemy, Math.cos(player.a) * .3, Math.sin(player.a) * .3);
      }
    }
    if (enemy.hp <= 20) {
      active = false;
      config.onFinish?.();
    }
  }
  function damage(n) {
    if (hurtInv > 0) return;
    hurtInv = .45;
    const guarding = keys.guard;
    player.hp -= guarding ? n * (config.items.includes('escudo') ? .2 : .55) : n;
    hit = .3;
    if (player.hp <= 0) {
      active = false;
      config.onDeath?.();
    }
  }
  function tick(dt) {
    elapsed += dt;
    hurtInv = Math.max(0, hurtInv - dt);
    hit = Math.max(0, hit - dt);
    attackAge += dt;
    attackCooldown = Math.max(0, attackCooldown - dt);
    lightCooldown = Math.max(0, lightCooldown - dt);
    let turn = (keys.turnRight ? 1 : 0) - (keys.turnLeft ? 1 : 0);
    player.a += turn * dt * 1.9;
    const forward = (keys.up ? 1 : 0) - (keys.down ? 1 : 0),
      side = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    const norm = Math.hypot(forward, side) || 1;
    const speed = (keys.run ? 3.4 : 2.4) * dt;
    walk(player, (Math.cos(player.a) * forward - Math.sin(player.a) * side) * speed / norm, (Math.sin(player.a) * forward + Math.cos(player.a) * side) * speed / norm);
    if (freeMode) {
      const nearSword = Math.hypot(player.x - 10.5, player.y - 4.5) < 1.3,
        nearSugar = Math.hypot(player.x - 3.5, player.y - 4.5) < 1.5;
      warning = !collected ? nearSword ? 'E · Pegar a espada' : 'Pegue a espada — centro da arena' : nearSugar ? 'E · Aproximar-se de Sugar' : 'Sugar está do outro lado, à esquerda';
      config.onHud?.({
        hp: player.hp,
        enemy: 0,
        warning,
        free: true
      });
      return;
    }
    enemy.timer -= dt;
    const d = Math.hypot(player.x - enemy.x, player.y - enemy.y),
      a = Math.atan2(player.y - enemy.y, player.x - enemy.x);
    if (enemy.phase === 'approach') {
      warning = 'Mantenha distância. Aproxime-se para atacar e recue.';
      if (d > 1.7) walk(enemy, Math.cos(a) * dt * 1.05, Math.sin(a) * dt * 1.05);
      if (enemy.timer <= 0) {
        enemy.phase = 'prepare';
        enemy.timer = 1.4;
        enemy.pattern = (enemy.pattern + 1) % 7;
        enemy.aim = a;
      }
    } else if (enemy.phase === 'prepare') {
      warning = ['GARRA · recue ou proteja-se', 'DISPARO · saia da linha de fogo', 'INVESTIDA · esquive para o lado', 'MORDIDA · mantenha distância', 'VARREDURA · proteja-se ou saia da linha', 'GRITO · afaste-se', 'AGARRE · recue antes que alcance'][enemy.pattern];
      if (enemy.timer <= 0) {
        enemy.phase = 'attack';
        enemy.timer = .65;
        if (enemy.pattern === 0 && d < 2.8) damage(24);
        if (enemy.pattern === 3 && d < 2.1) damage(28);
        if (enemy.pattern === 5 && d < 4) damage(16);
        if (enemy.pattern === 6 && d < 2.5) damage(26);
        if (enemy.pattern === 1 || enemy.pattern === 4) {
          for (let offset = enemy.pattern === 4 ? -3 : -1; offset <= (enemy.pattern === 4 ? 3 : 1); offset++) {
            let angle = a + offset * .18;
            bullets.push({
              x: enemy.x,
              y: enemy.y,
              vx: Math.cos(angle) * 4,
              vy: Math.sin(angle) * 4,
              life: 5
            });
          }
        }
      }
    } else if (enemy.phase === 'attack') {
      if (enemy.pattern === 2) {
        walk(enemy, Math.cos(enemy.aim) * dt * 6, Math.sin(enemy.aim) * dt * 6);
        if (d < 1.2) {
          damage(30);
          enemy.phase = 'recover';
          enemy.timer = 1.5;
        }
      }
      if (enemy.timer <= 0) {
        enemy.phase = 'recover';
        enemy.timer = 1.8;
      }
    } else {
      warning = 'Ele está se recuperando. Essa é uma abertura.';
      if (enemy.timer <= 0) {
        enemy.phase = 'approach';
        enemy.timer = 3;
      }
    }
    bullets = bullets.filter(b => {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.life -= dt;
      if (Math.hypot(b.x - player.x, b.y - player.y) < .45) {
        damage(18);
        return false;
      }
      return b.life > 0 && !solid(b.x, b.y);
    });
    config.onHud?.({
      hp: Math.max(0, Math.ceil(player.hp)),
      enemy: Math.max(0, Math.ceil(enemy.hp)),
      warning,
      free: false
    });
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
  function draw() {
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
          ctx.fillStyle = '#ff624e';
          ctx.fillRect(cx - size / 2, cy - size / 2, size, size);
          ctx.fillStyle = '#ffe5af';
          ctx.fillRect(cx - size / 4, cy - size / 4, size / 2, size / 2);
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
    ctx.strokeStyle = '#ffffff9a';
    ctx.beginPath();
    ctx.moveTo(W / 2 - 4, H / 2);
    ctx.lineTo(W / 2 + 4, H / 2);
    ctx.moveTo(W / 2, H / 2 - 4);
    ctx.lineTo(W / 2, H / 2 + 4);
    ctx.stroke();
    const knife=config.equipped==='faca' && config.items.includes('faca');
    const hand = keys.guard && config.items.includes('escudo') ? (hit>0?images.shieldHit:images.shield) : knife ? images['knife'+(keys.guard?4:attackAge<.12?2:attackAge<.3?3:1)] : lightCooldown>1.15 ? images.lightCast : config.equipped==='luz' ? images.light : (config.items.includes('espada') || collected) ? (attackAge<.48?images['swing'+Math.min(4,Math.floor(attackAge/.12)+1)]:config.items.includes('escudo')?images.paired:images.swing1) : attackAge<.3?images.punch:images.fist;
    if (hand?.complete && hand.naturalWidth) {
      const h = H * .57;
      ctx.drawImage(hand, W * .24, H - h + Math.sin(elapsed * 3) * (keys.up ? 3 : 0), W * .65, h);
    }
    const cut=images[(knife?'faca':'espada')+'Cut'+Math.min(2,Math.floor(attackAge/.1))];
    if (attackAge < .3 && cut?.complete && cut.naturalWidth && (knife||config.items.includes('espada'))) {
      ctx.globalAlpha = 1 - attackAge / .3;
      ctx.drawImage(cut, W * .2, H * .2, W * .6, H * .5);
      ctx.globalAlpha = 1;
    }
    if(!freeMode&&enemy.phase==='attack') {
      const index=({0:2,1:0,2:3,4:1})[enemy.pattern], fx=images['attackEffect'+index];
      if(fx?.complete&&fx.naturalWidth){ctx.globalAlpha=.45;ctx.drawImage(fx,W*.15,H*.1,W*.7,H*.7);ctx.globalAlpha=1;}
    }
    if (hit > 0) {
      ctx.fillStyle = 'rgba(170,20,25,' + hit * .8 + ')';
      ctx.fillRect(0, 0, W, H);
    }
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
  document.addEventListener('visibilitychange', () => {
    keys = {};
  });
  window.addEventListener('blur', () => {
    keys = {};
  });
  return {
    start,
    stop,
    pause: setPause,
    press,
    action,
    equip(id) { if(config) config.equipped=id; },
    look(dx) {
      if (active && !paused) player.a += dx * .006;
    },
    isActive: () => active,
    state: () => ({
      player,
      enemy,
      freeMode,
      collected,
      paused,
      enemySprite:enemy&&player?enemyImage()?.src:null,
      equipped:config?.equipped
    }),
    getMap: () => map
  };
})();
