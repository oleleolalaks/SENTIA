 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                             
                                                                     
 /* Atualiza window.Arena usando o resultado dessa chamada de função.
*/ window.Arena =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa let para preparar W e H, permitindo atualizar esses valores depois.
*/ let  /* Aqui W recebe 500.
*/ W = 500,  /* Aqui H recebe 380.
*/ H = 380;
   /* Essa declaração usa const para preparar fov, mantendo essas referências fixas.
*/ const  /* Aqui fov recebe o resultado dessa expressão.
*/ fov = Math.PI / 3;
   /* Essa declaração usa const para preparar map, mantendo essas referências fixas.
*/ const  /* Aqui map recebe o resultado de Array.from.
*/ map =  /* Cria uma lista a partir dos valores recebidos. */ Array.from({
     /* Esse campo guarda length com 20.
*/ length: 20
  },  /* Essa função recebe e y e devolve o resultado de Array.from. */ (_, y) =>  /* Cria uma lista a partir dos valores recebidos. */ Array.from({
     /* Esse campo guarda length com 22.
*/ length: 22
  },  /* Essa função recebe e x e devolve uma das duas alternativas, conforme o teste. */ (_, x) => x === 0 || y === 0 || x === 21 || y === 19 ? 1 : 0));
   /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 5.
*/ 5,  /* Essa posição da lista guarda 5.
*/ 5],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 16.
*/ 16,  /* Essa posição da lista guarda 5.
*/ 5],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 5.
*/ 5,  /* Essa posição da lista guarda 12.
*/ 12],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 16.
*/ 16,  /* Essa posição da lista guarda 12.
*/ 12],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 9.
*/ 9,  /* Essa posição da lista guarda 9.
*/ 9],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 12.
*/ 12,  /* Essa posição da lista guarda 9.
*/ 9]].forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ([x, y]) => {
     /* Atualiza map.y.x usando 1.
*/ map[y][x] = 1;
  });
   /* Essa declaração usa let para preparar canvas e ctx e active e paused e free Mode e player e enemy e keys e config e images e bullets e last e frame Id e hit e attack Age e attack Cooldown e light Cooldown e elapsed e warning e collected e triggered e floor Pixels e hurt Inv e guard Broken e stamina Delay e drag Pointer e drag X e resize Observer e rendered Hand e light Age e audio Times e tension At e impact Angle e impact Blocked e phase Age, permitindo atualizar esses valores depois.
*/ let  /* Aqui canvas recebe nenhum valor inicial.
*/ canvas,
     /* Aqui ctx recebe nenhum valor inicial.
*/ ctx,
     /* Aqui active recebe false.
*/ active = false,
     /* Aqui paused recebe false.
*/ paused = false,
     /* Aqui free Mode recebe false.
*/ freeMode = false,
     /* Aqui player recebe nenhum valor inicial.
*/ player,
     /* Aqui enemy recebe nenhum valor inicial.
*/ enemy,
     /* Aqui keys recebe um objeto com os campos dessa parte.
*/ keys = {},
     /* Aqui config recebe nenhum valor inicial.
*/ config,
     /* Aqui images recebe um objeto com os campos dessa parte.
*/ images = {},
     /* Aqui bullets recebe uma lista com 0 posições.
*/ bullets = [],
     /* Aqui last recebe 0.
*/ last = 0,
     /* Aqui frame Id recebe nenhum valor inicial.
*/ frameId,
     /* Aqui hit recebe 0.
*/ hit = 0,
     /* Aqui attack Age recebe 9.
*/ attackAge = 9,
     /* Aqui attack Cooldown recebe 0.
*/ attackCooldown = 0,
     /* Aqui light Cooldown recebe 0.
*/ lightCooldown = 0,
     /* Aqui elapsed recebe 0.
*/ elapsed = 0,
     /* Aqui warning recebe um texto vazio.
*/ warning = '',
     /* Aqui collected recebe false.
*/ collected = false,
     /* Aqui triggered recebe false.
*/ triggered = false,
     /* Aqui floor Pixels recebe um valor vazio.
*/ floorPixels = null,
     /* Aqui hurt Inv recebe 0.
*/ hurtInv = 0,
     /* Aqui guard Broken recebe 0.
*/ guardBroken = 0,
     /* Aqui stamina Delay recebe 0.
*/ staminaDelay = 0,
     /* Aqui drag Pointer recebe um valor vazio.
*/ dragPointer = null,
     /* Aqui drag X recebe 0.
*/ dragX = 0,
     /* Aqui resize Observer recebe um valor vazio.
*/ resizeObserver = null,
     /* Aqui rendered Hand recebe um valor vazio.
*/ renderedHand = null,
     /* Aqui light Age recebe 9.
*/ lightAge = 9,
     /* Aqui audio Times recebe um objeto com os campos dessa parte.
*/ audioTimes = {},
     /* Aqui tension At recebe 0.
*/ tensionAt = 0,
     /* Aqui impact Angle recebe 0.
*/ impactAngle = 0,
     /* Aqui impact Blocked recebe false.
*/ impactBlocked = false,
     /* Aqui phase Age recebe 9.
*/ phaseAge = 9;
   /* Essa declaração usa const para preparar angle Diff, mantendo essas referências fixas.
*/ const  /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção.
*/ angleDiff =  /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ (a,b) =>  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(a-b), /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(a-b));
   /* Essa declaração usa const para preparar clamp, mantendo essas referências fixas.
*/ const  /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena.
*/ clamp =  /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ (value,min=0,max=1) =>  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(min, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(max,value));
   /* esse comando confere a preferência de movimento antes de desenhar tremores e oscilações.
*/ function reducedMotion() {
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return !!config?.reduced || !! /* Confere se esse elemento tem a classe indicada. */ document.body?.classList?.contains('reduced') || !! /* Consulta se o navegador atende à preferência ou condição de tela indicada. */ window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }
                                                              
   /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ function sound(name, spacing=.14, options={}) {
     /* Esse teste confere se o resultado dessa expressão é menor que spacing, e só entra nesse caminho quando a condição passa.
*/ if(elapsed-(audioTimes[name]??-99)<spacing) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza audio Times.name usando elapsed.
*/ audioTimes[name]=elapsed;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.(name,options);
  }
   /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio.
*/ function soundPosition(source=enemy,intensity=1) {
     /* Essa declaração usa const para preparar angle, mantendo essas referências fixas.
*/ const  /* Aqui angle recebe o resultado de Math.atan2.
*/ angle= /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(source.y-player.y,source.x-player.x);
     /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda pan com o resultado de Math.sin.
*/ pan: /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin( /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ angleDiff(angle,player.a)), /* Esse campo guarda distance com o resultado de Math.max.
*/ distance: /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.5, /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(source.x-player.x,source.y-player.y)*.35), /* Esse campo guarda intensity com intensity.
*/ intensity};
  }
   /* Essa declaração usa const para preparar find, mantendo essas referências fixas.
*/ const  /* esse comando procura no catálogo o caminho da arte aprovada que a arena precisa.
*/ find =  /* esse comando procura no catálogo o caminho da arte aprovada que a arena precisa. */ part =>  /* Procura o primeiro item que passa na condição indicada. */ ASSETS.find( /* Essa função recebe p e devolve o resultado de p.includes. */ p =>  /* Confere se esse valor está presente na lista ou no texto. */ p.includes(part));
   /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ function image(id, part) {
     /* Essa declaração usa const para preparar i, mantendo essas referências fixas.
*/ const  /* Aqui i recebe uma instância de Image.
*/ i =  /* Cria uma instância de Image para usar nesse recurso. */ new Image();
     /* Escolhe o arquivo que esse elemento deve carregar.
*/ i.src =  /* esse comando procura no catálogo o caminho da arte aprovada que a arena precisa. */ find(part) || '';
     /* Atualiza images.id usando i.
*/ images[id] = i;
  }
   /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa.
*/ function solid(x, y) {
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return !map[ /* Arredonda o número para baixo. */ Math.floor(y)] || map[ /* Arredonda o número para baixo. */ Math.floor(y)][ /* Arredonda o número para baixo. */ Math.floor(x)] !== 0;
  }
   /* esse comando move o participante nos eixos livres e impede atravessar paredes e pilares.
*/ function walk(obj, dx, dy) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(obj.x + dx + .22, obj.y) && ! /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(obj.x + dx - .22, obj.y))  /* Atualiza obj.x usando dx.
*/ obj.x += dx;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(obj.x, obj.y + dy + .22) && ! /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(obj.x, obj.y + dy - .22))  /* Atualiza obj.y usando dy.
*/ obj.y += dy;
  }
   /* esse comando verifica se existe passagem livre entre dois pontos antes de permitir visão ou impacto.
*/ function clearBetween(x1,y1,x2,y2) {
     /* Essa declaração usa const para preparar d, mantendo essas referências fixas.
*/ const  /* Aqui d recebe o resultado de Math.hypot.
*/ d =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(x2-x1,y2-y1);
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar t, permitindo atualizar esses valores depois.
*/ let  /* Aqui t recebe 0.08.
*/ t=.08;t<d; /* Atualiza t usando 0.1. */ t+=.1) /* Esse teste confere se o resultado de solid está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(x1+(x2-x1)*t/d,y1+(y2-y1)*t/d)) /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Devolve true e encerra essa chamada da função.
*/ return true;
  }
   /* Essa declaração usa const para preparar line Clear, mantendo essas referências fixas.
*/ const  /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho.
*/ lineClear =  /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ (x,y) =>  /* esse comando verifica se existe passagem livre entre dois pontos antes de permitir visão ou impacto. */ clearBetween(player.x,player.y,x,y);
                                                                                  
   /* esse comando aproxima Beerus e procura um caminho em volta dos pilares quando a visão fica bloqueada.
*/ function pursue(dt,speed) {
     /* Essa declaração usa let para preparar target, permitindo atualizar esses valores depois.
*/ let  /* Aqui target recebe player.
*/ target=player;
     /* Esse teste confere se o resultado de line Clear não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x,enemy.y)) {
       /* Atualiza enemy.route Timer usando dt.
*/ enemy.routeTimer-=dt;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enemy.routeTimer<=0||!enemy.route?.length) {
         /* Atualiza enemy.route Timer usando 0.4.
*/ enemy.routeTimer=.4;
         /* Essa declaração usa const para preparar sx e sy e tx e ty, mantendo essas referências fixas.
*/ const  /* Aqui sx recebe o resultado de Math.floor.
*/ sx= /* Arredonda o número para baixo. */ Math.floor(enemy.x), /* Aqui sy recebe o resultado de Math.floor.
*/ sy= /* Arredonda o número para baixo. */ Math.floor(enemy.y), /* Aqui tx recebe o resultado de Math.floor.
*/ tx= /* Arredonda o número para baixo. */ Math.floor(player.x), /* Aqui ty recebe o resultado de Math.floor.
*/ ty= /* Arredonda o número para baixo. */ Math.floor(player.y);
         /* Essa declaração usa const para preparar queue e parents, mantendo essas referências fixas.
*/ const  /* Aqui queue recebe uma lista com 1 posições.
*/ queue=[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [sx,sy]], /* Aqui parents recebe uma instância de Map.
*/ parents= /* Cria uma instância de Map para usar nesse recurso. */ new Map([ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [sx+','+sy, /* Essa posição da lista guarda um valor vazio.
*/ null]]);
         /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<queue.length; /* Aumenta i em um para atualizar o contador. */ i++) {
           /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe queue.i.
*/ [x,y]=queue[i];
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(x===tx&&y===ty) /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
           /* Percorre cada valor de uma lista com 4 posições usando valores separados da lista nesta repetição.
*/ for( /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe nenhum valor inicial.
*/ [dx,dy] of [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 0.
*/ 0], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [-1, /* Essa posição da lista guarda 0.
*/ 0], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 1.
*/ 1], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 0.
*/ 0,-1]]) {
             /* Essa declaração usa const para preparar nx e ny e key, mantendo essas referências fixas.
*/ const  /* Aqui nx recebe o resultado dessa expressão.
*/ nx=x+dx, /* Aqui ny recebe o resultado dessa expressão.
*/ ny=y+dy, /* Aqui key recebe o resultado dessa expressão.
*/ key=nx+','+ny;
             /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(nx+.5,ny+.5)|| /* Confere se esse valor está presente no conjunto ou mapa. */ parents.has(key)) /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
             /* Guarda o valor associado a essa chave no mapa.
*/ parents.set(key,[x,y]); /* Acrescenta esse valor no fim da lista.
*/ queue.push([nx,ny]);
          }
        }
         /* Essa declaração usa const para preparar route, mantendo essas referências fixas.
*/ const  /* Aqui route recebe uma lista com 0 posições.
*/ route=[]; /* Essa declaração usa let para preparar cell, permitindo atualizar esses valores depois.
*/ let  /* Aqui cell recebe uma lista com 2 posições.
*/ cell=[tx,ty];
         /* Esse teste confere se o resultado de parents.has está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente no conjunto ou mapa. */ parents.has( /* Junta as partes da lista em um texto. */ cell.join(','))) /* Repete essa parte enquanto os testes combinados dessa condição passam.
*/ while(cell&&(cell[0]!==sx||cell[1]!==sy)) {
           /* Coloca esse valor no começo da lista.
*/ route.unshift({ /* Guarda a posição horizontal desse elemento.
*/ x:cell[0]+.5, /* Guarda a posição vertical desse elemento.
*/ y:cell[1]+.5}); /* Atualiza cell usando o resultado de parents.get.
*/ cell= /* Consulta o valor associado a essa chave no mapa. */ parents.get( /* Junta as partes da lista em um texto. */ cell.join(','));
        }
         /* Atualiza enemy.route usando route.
*/ enemy.route=route;
      }
       /* Esse teste confere se enemy.route.length está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(enemy.route?.length) {
         /* Atualiza target usando enemy.route.0.
*/ target=enemy.route[0];
         /* Esse teste confere se o resultado de Math.hypot é menor que 0.25, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(target.x-enemy.x,target.y-enemy.y)<.25){ /* Retira e devolve o primeiro valor da lista.
*/ enemy.route.shift(); /* Atualiza target usando o resultado dessa expressão.
*/ target=enemy.route[0]||player;}
      }
    } else  /* Atualiza enemy.route usando uma lista com 0 posições.
*/ enemy.route=[];
     /* Essa declaração usa const para preparar a, mantendo essas referências fixas.
*/ const  /* Aqui a recebe o resultado de Math.atan2.
*/ a= /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(target.y-enemy.y,target.x-enemy.x);
     /* esse comando move o participante nos eixos livres e impede atravessar paredes e pilares.
*/ walk(enemy, /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(a)*dt*speed, /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(a)*dt*speed);
  }
   /* esse comando prepara as poses, equipamentos, ataques e texturas aprovadas usados na arena.
*/ function loadImages() {
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('enemy', '/01-Odio/01-prontidao.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('walk', '/01-Odio/02-caminhada-a.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('walk2', '/01-Odio/03-caminhada-b.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('charge', '/01-Odio/13-carregar-raio.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('strike', '/01-Odio/07-golpe-esquerda.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('corpse', '/01-Odio/21-derrotado.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('candy', 'amor-chorando-rosto-coberto.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('sword', '/04-Espada-Solta/espada-solta.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('fist', '/01-Gestos-Aprovados/02-punhos-fechados.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('punch', '/01-Gestos-Aprovados/03-soco.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('wall', 'parede-basaltica-64.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('sky', '/01-Arena-Odio/01-frente.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('floor', 'piso-basaltico-64.png');
     /* Atualiza floor Pixels usando o resultado de Uint8Clamped Array.from.
*/ floorPixels =  /* Cria uma lista a partir dos valores recebidos. */ Uint8ClampedArray.from( /* Executa atob com os valores definidos nessa parte. */ atob(window.SENTIA_FLOOR),  /* Essa função recebe character e devolve o resultado de character.char Code At. */ character =>  /* Executa character.char Code At com os valores definidos nessa parte. */ character.charCodeAt(0));
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('slash', '/04-Cortes-256/cortes/espada/02-corte.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('beam', '/03-Efeitos/01-raio-frontal.png');
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar n, permitindo atualizar esses valores depois.
*/ let  /* Aqui n recebe 1.
*/ n = 1; n <= 4;  /* Aumenta n em um para atualizar o contador. */ n++)  /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('swing' + n, '/espada/0' + n + '-' + [ /* Essa posição da lista guarda preparacao.
*/ 'preparacao',  /* Essa posição da lista guarda cruzar.
*/ 'cruzar',  /* Essa posição da lista guarda varrer.
*/ 'varrer',  /* Essa posição da lista guarda finalizar.
*/ 'finalizar'][n - 1] + '.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('shield', '/escudo/02-defesa-verso.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('shieldRest', '/escudo/01-pronto-verso.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('knife', '/faca/01-pronta.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('light', '/luz/01-segurar.png');
     /* Percorre os itens e executa a função indicada em cada um.
*/ ASSETS.filter( /* Essa função recebe p e devolve o resultado dessa expressão. */ p=> /* Confere se esse valor está presente na lista ou no texto. */ p.includes('/01-Sprites-128/01-Odio/')&& /* Confere se o texto termina com o trecho indicado. */ p.endsWith('.png')).forEach( /* Essa função recebe p e i e devolve o resultado de image. */ (p,i)=> /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso. */ image('odio'+(i+1),p));
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 1.
*/ i=1;i<=4; /* Aumenta i em um para atualizar o contador. */ i++)  /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('knife'+i,'/02-Equipamentos/faca/0'+i+'-'+[ /* Essa posição da lista guarda pronta.
*/ 'pronta', /* Essa posição da lista guarda preparar.
*/ 'preparar', /* Essa posição da lista guarda atacar.
*/ 'atacar', /* Essa posição da lista guarda guarda.
*/ 'guarda'][i-1]+'.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('paired','/escudo/04-espada-verso.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('shieldHit','/escudo/03-impacto-verso.png');
     /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('lightCast','/luz/03-liberar.png');
     /* Percorre cada valor de uma lista com 2 posições usando weapon nesta repetição.
*/ for( /* Essa declaração usa const para preparar weapon, mantendo essas referências fixas.
*/ const  /* Aqui weapon recebe nenhum valor inicial.
*/ weapon of [ /* Essa posição da lista guarda espada.
*/ 'espada', /* Essa posição da lista guarda faca.
*/ 'faca'])  /* Percorre os itens e executa a função indicada em cada um.
*/ ASSETS.filter( /* Essa função recebe p e devolve o resultado de p.includes. */ p=> /* Confere se esse valor está presente na lista ou no texto. */ p.includes('/04-Cortes-256/cortes/'+weapon+'/')).forEach( /* Essa função recebe p e i e devolve o resultado de image. */ (p,i)=> /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso. */ image(weapon+'Cut'+i,p));
     /* Percorre cada valor de o resultado de .entries usando valores separados da lista nesta repetição.
*/ for( /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe nenhum valor inicial.
*/ [i,file] of  /* Reúne os campos e seus valores em pares. */ [ /* Essa posição da lista guarda 01 raio frontal.
*/ '01-raio-frontal', /* Essa posição da lista guarda 02 raio varredura.
*/ '02-raio-varredura', /* Essa posição da lista guarda 03 rastro garra.
*/ '03-rastro-garra', /* Essa posição da lista guarda 04 impacto chao.
*/ '04-impacto-chao'].entries())  /* esse comando prepara uma imagem da arena e guarda sua referência pelo nome de uso.
*/ image('attackEffect'+i,'/03-Efeitos/'+file+'.png');
  }
   /* esse comando inicia a arena com jogador, inimigo, câmera e controles no estado esperado para a cena.
*/ function start(options) {
     /* esse comando encerra a arena, libera o arraste da câmera e interrompe a pressão sonora.
*/ stop();
     /* Atualiza config usando options.
*/ config = options;
     /* Atualiza canvas usando o resultado de document.query Selector.
*/ canvas =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector('#arena');
     /* Atualiza ctx usando o resultado de canvas.get Context.
*/ ctx =  /* Obtém o contexto usado para desenhar no canvas. */ canvas.getContext('2d');
     /* Atualiza ctx.image Smoothing Enabled usando false.
*/ ctx.imageSmoothingEnabled = false;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ canvas.hidden = false;
     /* Atualiza canvas.style.touch Action usando none.
*/ canvas.style.touchAction = 'none';
     /* Atualiza canvas.style.cursor usando grab.
*/ canvas.style.cursor = 'grab';
     /* Atualiza canvas.title usando o texto definido nessa parte.
*/ canvas.title = 'Clique e arraste, ou arraste com o dedo, para olhar em volta. Setas também giram.';
     /* esse comando prepara os eventos de arrastar para olhar ao redor com mouse ou toque.
*/ bindCamera();
     /* esse comando prepara as poses, equipamentos, ataques e texturas aprovadas usados na arena.
*/ loadImages();
     /* Atualiza player usando um objeto com os campos dessa parte.
*/ player = {
       /* Guarda a posição horizontal desse elemento.
*/ x: 10.5,
       /* Guarda a posição vertical desse elemento.
*/ y: 15.5,
       /* Esse campo guarda a com o resultado dessa expressão.
*/ a: -Math.PI / 2,
       /* Esse campo guarda hp com 100.
*/ hp: 100,
       /* aqui fica o fôlego disponível para correr, atacar, defender e usar luz.
*/ stamina: 100
    };
     /* Atualiza enemy usando um objeto com os campos dessa parte.
*/ enemy = {
       /* Guarda a posição horizontal desse elemento.
*/ x: 10.5,
       /* Guarda a posição vertical desse elemento.
*/ y: 4.5,
       /* Esse campo guarda hp com 350.
*/ hp: 350,
       /* aqui fica a vida máxima usada como referência da barra e da fase de fúria.
*/ maxHp: 350,
       /* Identifica a etapa atual dos movimentos e ataques do adversário.
*/ phase: 'approach',
       /* Esse campo guarda timer com 2.2.
*/ timer: 2.2,
       /* Esse campo guarda pattern com 0.
*/ pattern: 0,
       /* Esse campo guarda cycle com 0.
*/ cycle:0,
       /* Esse campo guarda route Timer com 0.
*/ routeTimer:0,
       /* aqui fica o caminho temporário usado por Beerus para contornar os pilares.
*/ route:[],
       /* Esse campo guarda volleys com 0.
*/ volleys:0,
       /* aqui fica o aviso de que a direção do golpe já foi travada.
*/ aimLocked:false,
       /* aqui fica a etapa da luta que controla a entrada na fase de fúria.
*/ phaseNumber:1
    };
     /* Atualiza free Mode usando a negação de a negação de options.free.
*/ freeMode = !!options.free;
     /* Atualiza collected usando a negação de a negação de options.collected.
*/ collected = !!options.collected;
     /* Atualiza triggered usando false.
*/ triggered = false;
     /* Atualiza bullets usando uma lista com 0 posições.
*/ bullets = [];
     /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys = {};
     /* Atualiza hit usando 0.
*/ hit = 0;
     /* Atualiza attack Age usando 9.
*/ attackAge = 9;
     /* Atualiza attack Cooldown usando 0.
*/ attackCooldown = 0;
     /* Atualiza elapsed usando 0.
*/ elapsed = 0;
     /* Atualiza light Cooldown usando 0.
*/ lightCooldown = 0;
     /* Atualiza warning usando um texto vazio.
*/ warning = '';
     /* Atualiza hurt Inv usando 0.
*/ hurtInv = 0;
     /* Atualiza guard Broken usando 0.
*/ guardBroken = 0;
     /* Atualiza stamina Delay usando 0.
*/ staminaDelay = 0;
     /* Atualiza light Age usando 9.
*/ lightAge = 9;
     /* Atualiza audio Times usando um objeto com os campos dessa parte.
*/ audioTimes = {};
     /* Atualiza tension At usando 0.
*/ tensionAt = 0;
     /* Atualiza impact Angle usando 0.
*/ impactAngle = 0;
     /* Atualiza impact Blocked usando false.
*/ impactBlocked = false;
     /* Atualiza phase Age usando 9.
*/ phaseAge = 9;
     /* Atualiza drag Pointer usando um valor vazio.
*/ dragPointer = null;
     /* Atualiza active usando true.
*/ active = true;
     /* Atualiza paused usando false.
*/ paused = false;
     /* esse comando adapta a resolução do desenho ao formato da tela sem esticar as mãos.
*/ resizeCanvas();
     /* Atualiza last usando o resultado de performance.now.
*/ last =  /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now();
     /* Atualiza frame Id usando o resultado de request Animation Frame.
*/ frameId =  /* Agenda a atualização visual para o próximo quadro do navegador. */ requestAnimationFrame(loop);
  }
   /* esse comando encerra a arena, libera o arraste da câmera e interrompe a pressão sonora.
*/ function stop() {
     /* Atualiza active usando false.
*/ active = false;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.clearTension?.();
     /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys = {};
     /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
     /* Executa cancel Animation Frame com os valores definidos nessa parte.
*/ cancelAnimationFrame(frameId);
     /* Esse teste confere se canvas está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (canvas)  /* Define se esse elemento fica escondido ou disponível na tela.
*/ canvas.hidden = true;
     /* Esse teste confere se document.pointer Lock Element é igual a canvas, e só entra nesse caminho quando a condição passa.
*/ if (document.pointerLockElement === canvas)  /* Executa document.exit Pointer Lock com os valores definidos nessa parte.
*/ document.exitPointerLock();
  }
   /* esse comando pausa ou libera a arena e limpa teclas e arrastes para não deixar um movimento preso.
*/ function setPause(value) {
     /* Atualiza paused usando value.
*/ paused = value;
     /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys = {};
     /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
     /* Atualiza last usando o resultado de performance.now.
*/ last =  /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now();
  }
   /* esse comando registra se uma ação de movimento ou defesa está sendo mantida.
*/ function press(key, value) {
     /* Atualiza keys.key usando value.
*/ keys[key] = value;
  }
   /* esse comando adapta a resolução do desenho ao formato da tela sem esticar as mãos.
*/ function resizeCanvas() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!canvas || canvas.hidden || !active)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar rect, mantendo essas referências fixas.
*/ const  /* Aqui rect recebe o resultado de canvas.get Bounding Client Rect.
*/ rect= /* Mede a posição e o tamanho real do elemento na tela. */ canvas.getBoundingClientRect();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(rect.width<1 || rect.height<1) /* Encerra essa função sem devolver outro valor.
*/ return;
                                                                                       
     /* Essa declaração usa const para preparar ratio, mantendo essas referências fixas.
*/ const  /* Aqui ratio recebe o resultado dessa expressão.
*/ ratio=rect.width/rect.height;
     /* Essa declaração usa const para preparar width, mantendo essas referências fixas.
*/ const  /* Aqui width recebe o resultado de Math.max.
*/ width= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(160, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(800, /* Arredonda o número para o inteiro mais próximo. */ Math.round(320*ratio)));
     /* Essa declaração usa const para preparar height, mantendo essas referências fixas.
*/ const  /* Aqui height recebe o resultado de Math.max.
*/ height= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(120, /* Arredonda o número para o inteiro mais próximo. */ Math.round((width/ratio)/2)*2);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(width===W&&height===H&&canvas.width===W&&canvas.height===H) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza W usando width.
*/ W=width; /* Atualiza H usando height.
*/ H=height; /* Atualiza canvas.width usando W.
*/ canvas.width=W; /* Atualiza canvas.height usando H.
*/ canvas.height=H;
     /* Atualiza ctx.image Smoothing Enabled usando false.
*/ ctx.imageSmoothingEnabled=false;
  }
   /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ function cancelDrag() {
     /* Essa declaração usa const para preparar pointer, mantendo essas referências fixas.
*/ const  /* Aqui pointer recebe drag Pointer.
*/ pointer=dragPointer;
                                                                                    
     /* Atualiza drag Pointer usando um valor vazio.
*/ dragPointer=null;
     /* Esse teste confere se canvas não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!canvas) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza canvas.style.cursor usando grab.
*/ canvas.style.cursor='grab';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(pointer!==null&& /* Executa canvas.has Pointer Capture com os valores definidos nessa parte. */ canvas.hasPointerCapture?.(pointer)) /* Executa canvas.release Pointer Capture com os valores definidos nessa parte.
*/ canvas.releasePointerCapture(pointer);
  }
   /* esse comando prepara os eventos de arrastar para olhar ao redor com mouse ou toque.
*/ function bindCamera() {
     /* Esse teste confere se canvas.dataset.arena Camera está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(canvas.dataset.arenaCamera) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza canvas.dataset.arena Camera usando drag.
*/ canvas.dataset.arenaCamera='drag';
                                                                                     
     /* Escuta o evento pointerdown e liga esse evento à função definida aqui.
*/ canvas.addEventListener('pointerdown', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ event=>{
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!active||paused||dragPointer!==null||(event.pointerType==='mouse'&&event.button!==0)) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Impede a ação padrão desse evento do navegador.
*/ event.preventDefault(); /* Atualiza drag Pointer usando event.pointer Id.
*/ dragPointer=event.pointerId; /* Atualiza drag X usando event.client X.
*/ dragX=event.clientX;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ canvas.setPointerCapture?.(event.pointerId); /* Atualiza canvas.style.cursor usando grabbing.
*/ canvas.style.cursor='grabbing';
    });
     /* Escuta o evento pointermove e liga esse evento à função definida aqui.
*/ canvas.addEventListener('pointermove', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ event=>{
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!active||paused||dragPointer!==event.pointerId) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Essa declaração usa const para preparar dx, mantendo essas referências fixas.
*/ const  /* Aqui dx recebe o resultado dessa expressão.
*/ dx=event.clientX-dragX; /* Atualiza drag X usando event.client X.
*/ dragX=event.clientX;
       /* Atualiza player.a usando o resultado de Math.atan2.
*/ player.a= /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a+dx*.006), /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a+dx*.006));
       /* Impede a ação padrão desse evento do navegador.
*/ event.preventDefault();
    });
     /* Essa declaração usa const para preparar release, mantendo essas referências fixas.
*/ const  /* Aqui release recebe uma função para executar quando for chamada.
*/ release= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ event=>{
       /* Esse teste confere se drag Pointer é diferente de event.pointer Id, e só entra nesse caminho quando a condição passa.
*/ if(dragPointer!==event.pointerId) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
    };
     /* Escuta o evento pointerup e liga esse evento à função definida aqui.
*/ canvas.addEventListener('pointerup',release);
     /* Escuta o evento pointercancel e liga esse evento à função definida aqui.
*/ canvas.addEventListener('pointercancel',release);
     /* Escuta o evento lostpointercapture e liga esse evento à função definida aqui.
*/ canvas.addEventListener('lostpointercapture',release);
     /* Esse teste confere se o resultado dessa expressão é diferente de undefined, e só entra nesse caminho quando a condição passa.
*/ if(typeof ResizeObserver!=='undefined'){ /* Atualiza resize Observer usando uma instância de Resize Observer.
*/ resizeObserver= /* Cria uma instância de Resize Observer para usar nesse recurso. */ new ResizeObserver(resizeCanvas); /* Começa a observar as mudanças desse elemento.
*/ resizeObserver.observe(canvas);}
  }
   /* esse comando resolve ataques, luz e coleta de objetos conforme equipamento, alcance, fôlego e fase da arena.
*/ function action(type) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!active || paused)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se type é igual a interact, e só entra nesse caminho quando a condição passa.
*/ if (type === 'interact') {
       /* Esse teste confere se free Mode não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!freeMode)  /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Essa declaração usa const para preparar d, mantendo essas referências fixas.
*/ const  /* Aqui d recebe o resultado de Math.hypot.
*/ d =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x - 10.5, player.y - 4.5);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!collected && d < 1.3) {
         /* Atualiza collected usando true.
*/ collected = true;
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ config.onCollect?.();
      } else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (collected &&  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x - 3.5, player.y - 4.5) < 1.5 && !triggered) {
         /* Atualiza triggered usando true.
*/ triggered = true;
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ config.onSugar?.();
      }
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (freeMode || attackCooldown > 0)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (type === 'attack' && config.equipped === 'luz')  /* Atualiza type usando light.
*/ type = 'light';
     /* Essa declaração usa const para preparar distance e angle, mantendo essas referências fixas.
*/ const  /* Aqui distance recebe o resultado de Math.hypot.
*/ distance =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x - enemy.x, player.y - enemy.y),
       /* Aqui angle recebe o resultado de Math.atan2.
*/ angle =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(enemy.y - player.y, enemy.x - player.x);
     /* Essa declaração usa const para preparar diff, mantendo essas referências fixas.
*/ const  /* Aqui diff recebe o resultado de Math.atan2.
*/ diff =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle - player.a),  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle - player.a));
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (type === 'light' &&  /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('luz') && lightCooldown <= 0) {
       /* Essa declaração usa const para preparar cost, mantendo essas referências fixas.
*/ const  /* Aqui cost recebe uma das duas alternativas, conforme o teste.
*/ cost=config.assist?17:30;
       /* Esse teste confere se player.stamina é menor que cost, e só entra nesse caminho quando a condição passa.
*/ if(player.stamina<cost){ /* Atualiza warning usando Sem fôlego para a luz. Solte a defesa e recupere se.
*/ warning='Sem fôlego para a luz. Solte a defesa e recupere-se.'; /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Atualiza player.stamina usando cost.
*/ player.stamina-=cost; /* Atualiza stamina Delay usando 1.15.
*/ staminaDelay=1.15; /* Atualiza light Age usando 0.
*/ lightAge=0;
       /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('projectile',.2,{ /* Esse campo guarda intensity com 0.55.
*/ intensity:.55});
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (distance<11 &&  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(diff) < (config.assist?.38:.22) &&  /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x, enemy.y)) {
         /* Atualiza enemy.hp usando uma das duas alternativas, conforme o teste.
*/ enemy.hp -= enemy.phase === 'recover' ? 30 : 10;
         /* Atualiza enemy.hit Until usando o resultado dessa expressão.
*/ enemy.hitUntil=elapsed+.35;
         /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('hit',.14, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(enemy,.35));
      }
       /* Atualiza light Cooldown usando uma das duas alternativas, conforme o teste.
*/ lightCooldown = config.assist?1.8:2.7;
       /* Atualiza attack Cooldown usando 0.65.
*/ attackCooldown = .65;
       /* Atualiza attack Age usando 0.
*/ attackAge = 0;
    } else  /* Esse teste confere se type é igual a attack, e só entra nesse caminho quando a condição passa.
*/ if (type === 'attack') {
       /* Essa declaração usa const para preparar cost, mantendo essas referências fixas.
*/ const  /* Aqui cost recebe uma das duas alternativas, conforme o teste.
*/ cost=config.assist?8:12;
       /* Esse teste confere se player.stamina é menor que cost, e só entra nesse caminho quando a condição passa.
*/ if (player.stamina < cost) {
         /* Atualiza warning usando Sem fôlego para atacar. Solte a defesa e recue.
*/ warning = 'Sem fôlego para atacar. Solte a defesa e recue.';
         /* Encerra essa função sem devolver outro valor.
*/ return;
      }
       /* Atualiza player.stamina usando cost.
*/ player.stamina -= cost;
       /* Atualiza stamina Delay usando 0.8.
*/ staminaDelay = .8;
       /* Atualiza attack Age usando 0.
*/ attackAge = 0;
       /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound(config.equipped==='faca'?'knife':'attack',.14,{ /* Esse campo guarda intensity com 0.65.
*/ intensity:.65});
       /* Atualiza attack Cooldown usando uma das duas alternativas, conforme o teste.
*/ attackCooldown = config.equipped === 'faca' ? .52 : .72;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (distance < (config.assist?2.8:2.5) &&  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(diff) < (config.assist?.7:.45) &&  /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x, enemy.y)) {
         /* Essa declaração usa const para preparar damage, mantendo essas referências fixas.
*/ const  /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage = config.equipped==='faca'&& /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('faca') ? 20 :  /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('espada') ? 27 : 13;
                                                                                                 
         /* Atualiza enemy.hp usando o resultado dessa expressão.
*/ enemy.hp -= damage * (enemy.phase==='recover'?1.4:config.assist?.7:enemy.phase==='approach'?.5:.22);
         /* Atualiza enemy.hit Until usando o resultado dessa expressão.
*/ enemy.hitUntil=elapsed+.35;
         /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('cut',.14, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(enemy,config.equipped==='faca'?.45:.7));
         /* Esse teste confere se enemy.phase é igual a recover, e só entra nesse caminho quando a condição passa.
*/ if(enemy.phase==='recover') /* esse comando move o participante nos eixos livres e impede atravessar paredes e pilares.
*/ walk(enemy,  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a) * .15,  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a) * .15);
      }
    }
     /* Esse teste confere se enemy.hp é menor ou igual a 10, e só entra nesse caminho quando a condição passa.
*/ if (enemy.hp <= 10) {
       /* Atualiza active usando false.
*/ active = false;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.clearTension?.();
       /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys={}; /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ config.onFinish?.();
    }
  }
   /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ function damage(n,source=enemy,blockable=true) {
     /* Esse teste confere se hurt Inv é maior que 0, e só entra nesse caminho quando a condição passa.
*/ if (hurtInv > 0)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza hurt Inv usando uma das duas alternativas, conforme o teste.
*/ hurtInv = config.assist?.6:.36;
     /* Essa declaração usa const para preparar angle, mantendo essas referências fixas.
*/ const  /* Aqui angle recebe o resultado dessa expressão.
*/ angle =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(source.y-player.y, source.x-player.x)-player.a;
     /* Essa declaração usa const para preparar facing, mantendo essas referências fixas.
*/ const  /* Aqui facing recebe o resultado dessa expressão.
*/ facing =  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs( /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle), /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle))) < 1.05;
     /* Essa declaração usa const para preparar guarding, mantendo essas referências fixas.
*/ const  /* Aqui guarding recebe o resultado dessa expressão.
*/ guarding = blockable && keys.guard && attackAge>.36 && lightAge>.65 && guardBroken <= 0 && player.stamina > 8 && (facing || config.assist);
     /* Atualiza impact Angle usando o resultado de Math.atan2.
*/ impactAngle =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(source.y-player.y,source.x-player.x);
     /* Atualiza impact Blocked usando a negação de a negação de guarding.
*/ impactBlocked = !!guarding;
     /* Atualiza n usando uma das duas alternativas, conforme o teste.
*/ n*=config.assist?.62:1;
     /* Esse teste confere se guarding está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(guarding) {
       /* Atualiza player.stamina usando o resultado de Math.max.
*/ player.stamina =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,player.stamina-n*1.15);
       /* Atualiza stamina Delay usando 0.9.
*/ staminaDelay = .9;
       /* Esse teste confere se player.stamina é menor que 8, e só entra nesse caminho quando a condição passa.
*/ if(player.stamina < 8) { /* Atualiza guard Broken usando 1.5.
*/ guardBroken = 1.5; /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('alert',.4);}
       /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('block',.14, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(source,.7));
    } else {
       /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('hit',.14, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(source,.65));
    }
     /* Atualiza player.hp usando uma das duas alternativas, conforme o teste.
*/ player.hp -= guarding ? n * ( /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('escudo') ? .22 : .75) : n;
     /* Atualiza hit usando 0.3.
*/ hit = .3;
     /* Esse teste confere se player.hp é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (player.hp <= 0) {
       /* Atualiza active usando false.
*/ active = false;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.clearTension?.();
       /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys={}; /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ config.onDeath?.();
    }
  }
   /* esse comando avança movimento, fôlego, projéteis e comportamento do inimigo pelo tempo passado.
*/ function tick(dt) {
     /* Atualiza elapsed usando dt.
*/ elapsed += dt;
     /* Atualiza phase Age usando dt.
*/ phaseAge += dt;
     /* Atualiza hurt Inv usando o resultado de Math.max.
*/ hurtInv =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, hurtInv - dt);
     /* Atualiza hit usando o resultado de Math.max.
*/ hit =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, hit - dt);
     /* Atualiza attack Age usando dt.
*/ attackAge += dt;
     /* Atualiza light Age usando dt.
*/ lightAge += dt;
     /* Atualiza attack Cooldown usando o resultado de Math.max.
*/ attackCooldown =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, attackCooldown - dt);
     /* Atualiza light Cooldown usando o resultado de Math.max.
*/ lightCooldown =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, lightCooldown - dt);
     /* Atualiza guard Broken usando o resultado de Math.max.
*/ guardBroken =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,guardBroken-dt);
     /* Atualiza stamina Delay usando o resultado de Math.max.
*/ staminaDelay =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,staminaDelay-dt);
     /* Essa declaração usa const para preparar guarding, mantendo essas referências fixas.
*/ const  /* Aqui guarding recebe o resultado dessa expressão.
*/ guarding = !freeMode && keys.guard && attackAge>.36 && lightAge>.65 && guardBroken<=0 && player.stamina>0;
     /* Essa declaração usa const para preparar moving, mantendo essas referências fixas.
*/ const  /* Aqui moving recebe o resultado dessa expressão.
*/ moving=keys.up||keys.down||keys.left||keys.right;
     /* Essa declaração usa const para preparar sprinting, mantendo essas referências fixas.
*/ const  /* Aqui sprinting recebe o resultado dessa expressão.
*/ sprinting = !guarding && moving && keys.run && player.stamina>8;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!freeMode && (guarding || sprinting)) {
       /* Atualiza player.stamina usando o resultado de Math.max.
*/ player.stamina= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,player.stamina-dt*(guarding?18:config.assist?10:17));
       /* Atualiza stamina Delay usando 0.35.
*/ staminaDelay=.35;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(guarding && player.stamina<=0) /* Atualiza guard Broken usando 1.2.
*/ guardBroken=1.2;
    } else  /* Esse teste confere se stamina Delay é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(staminaDelay<=0)  /* Atualiza player.stamina usando o resultado de Math.min.
*/ player.stamina= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(100,player.stamina+dt*(config.assist?27:23));
     /* Essa declaração usa let para preparar turn, permitindo atualizar esses valores depois.
*/ let  /* Aqui turn recebe o resultado dessa expressão.
*/ turn = (keys.turnRight ? 1 : 0) - (keys.turnLeft ? 1 : 0);
     /* Atualiza player.a usando o resultado de Math.atan2.
*/ player.a =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a+turn*dt*2.15), /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a+turn*dt*2.15));
     /* Essa declaração usa const para preparar forward e side, mantendo essas referências fixas.
*/ const  /* Aqui forward recebe o resultado dessa expressão.
*/ forward = (keys.up ? 1 : 0) - (keys.down ? 1 : 0),
       /* Aqui side recebe o resultado dessa expressão.
*/ side = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
     /* Essa declaração usa const para preparar norm, mantendo essas referências fixas.
*/ const  /* Aqui norm recebe o resultado dessa expressão.
*/ norm =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(forward, side) || 1;
     /* Essa declaração usa const para preparar speed, mantendo essas referências fixas.
*/ const  /* Aqui speed recebe o resultado dessa expressão.
*/ speed = (sprinting ? 3.6 : guarding ? 1.85 : 2.55) * dt;
     /* Essa declaração usa const para preparar previous X e previous Y, mantendo essas referências fixas.
*/ const  /* Aqui previous X recebe player.x.
*/ previousX=player.x, /* Aqui previous Y recebe player.y.
*/ previousY=player.y;
     /* esse comando move o participante nos eixos livres e impede atravessar paredes e pilares.
*/ walk(player, ( /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a) * forward -  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a) * side) * speed / norm, ( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a) * forward +  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a) * side) * speed / norm);
     /* Esse teste confere se o resultado de Math.hypot é maior que 0.001, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x-previousX,player.y-previousY)>.001) /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('step',sprinting?.29:.46,{ /* Esse campo guarda pace com uma das duas alternativas, conforme o teste.
*/ pace:sprinting?'run':'walk', /* Esse campo guarda surface com stone.
*/ surface:'stone', /* Esse campo guarda intensity com 0.45.
*/ intensity:.45});
     /* Esse teste confere se free Mode está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (freeMode) {
       /* Essa declaração usa const para preparar near Sword e near Sugar, mantendo essas referências fixas.
*/ const  /* Aqui near Sword recebe o resultado dessa expressão.
*/ nearSword =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x - 10.5, player.y - 4.5) < 1.3,
         /* Aqui near Sugar recebe o resultado dessa expressão.
*/ nearSugar =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x - 3.5, player.y - 4.5) < 1.5;
       /* Atualiza warning usando uma das duas alternativas, conforme o teste.
*/ warning = !collected ? nearSword ? 'E · Pegar a espada' : 'Pegue a espada — centro da arena' : nearSugar ? 'E · Aproximar-se de Candy' : 'Candy está do outro lado, à esquerda';
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ config.onHud?.({
         /* Esse campo guarda hp com player.hp.
*/ hp: player.hp,
         /* aqui ficam vida, posição, fase e próximo padrão de Beerus.
*/ enemy: 0,
         /* Esse campo guarda warning com warning.
*/ warning,
         /* aqui fica o fôlego disponível para correr, atacar, defender e usar luz.
*/ stamina: /* Arredonda o número para o inteiro mais próximo. */ Math.round(player.stamina),
         /* Esse campo guarda guard Broken com false.
*/ guardBroken:false,
         /* Esse campo guarda free com true.
*/ free: true
      });
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Atualiza enemy.timer usando dt.
*/ enemy.timer -= dt;
     /* Essa declaração usa const para preparar enraged, mantendo essas referências fixas.
*/ const  /* Aqui enraged recebe o resultado dessa expressão.
*/ enraged=enemy.hp<enemy.maxHp*.5;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enraged&&enemy.phaseNumber===1) { /* Atualiza enemy.phase Number usando 2.
*/ enemy.phaseNumber=2; /* Atualiza phase Age usando 0.
*/ phaseAge=0; /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('alert',.5);}
     /* Essa declaração usa const para preparar d e a e visible, mantendo essas referências fixas.
*/ const  /* Aqui d recebe o resultado de Math.hypot.
*/ d =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x - enemy.x, player.y - enemy.y),
       /* Aqui a recebe o resultado de Math.atan2.
*/ a =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(player.y - enemy.y, player.x - enemy.x),
       /* Aqui visible recebe o resultado de line Clear.
*/ visible= /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x,enemy.y);
     /* Esse teste confere se enemy.phase é igual a approach, e só entra nesse caminho quando a condição passa.
*/ if (enemy.phase === 'approach') {
       /* Esse teste confere se d é menor que 8, e só entra nesse caminho quando a condição passa.
*/ if(d<8) /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('approach',d<3?.8:1.25, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(enemy,.4));
       /* Atualiza warning usando Olhe para Beerus. Esquive espere o recuo e contra ataque.
*/ warning = 'Olhe para Beerus. Esquive, espere o recuo e contra-ataque.';
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (d > 1.8||!visible)  /* esse comando aproxima Beerus e procura um caminho em volta dos pilares quando a visão fica bloqueada.
*/ pursue(dt,config.assist?1.85:enraged?2.95:2.6);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (d < .8&&visible)  /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(18);
                                                                                 
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (enemy.timer <= 0 && visible) {
         /* Essa declaração usa const para preparar close e far, mantendo essas referências fixas.
*/ const  /* Aqui close recebe uma lista com 6 posições.
*/ close=[ /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 6.
*/ 6, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 5.
*/ 5], /* Aqui far recebe uma lista com 6 posições.
*/ far=[ /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 4.
*/ 4];
         /* Atualiza enemy.pattern usando o valor consultado nessa expressão.
*/ enemy.pattern=(d>4.3?far:close)[ /* Aumenta enemy.cycle em um para atualizar o contador. */ enemy.cycle++%6];
         /* Atualiza enemy.phase usando prepare.
*/ enemy.phase = 'prepare';
         /* Atualiza enemy.timer usando uma das duas alternativas, conforme o teste.
*/ enemy.timer = config.assist ? 1.55 : enraged ? .92 : 1.2;
         /* Atualiza enemy.windup usando enemy.timer.
*/ enemy.windup=enemy.timer; /* Atualiza enemy.aim usando a.
*/ enemy.aim=a; /* Atualiza enemy.aim Locked usando false.
*/ enemy.aimLocked=false;
         /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('charge',.35, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(enemy,.65));
      }
    } else  /* Esse teste confere se enemy.phase é igual a prepare, e só entra nesse caminho quando a condição passa.
*/ if (enemy.phase === 'prepare') {
       /* Essa declaração usa const para preparar tells, mantendo essas referências fixas.
*/ const  /* Aqui tells recebe uma lista com 7 posições.
*/ tells=[ /* Essa posição da lista guarda GARRA recue ou bloqueie.
*/ 'GARRA · recue ou bloqueie', /* Essa posição da lista guarda TRÊS DISPAROS mova se para o lado.
*/ 'TRÊS DISPAROS · mova-se para o lado', /* Essa posição da lista guarda INVESTIDA saia da linha.
*/ 'INVESTIDA · saia da linha', /* Essa posição da lista guarda MORDIDA recue.
*/ 'MORDIDA · recue', /* Essa posição da lista guarda LEQUE DE FOGO busque uma brecha ou cobertura.
*/ 'LEQUE DE FOGO · busque uma brecha ou cobertura', /* Essa posição da lista guarda GRITO saia do alcance escudo nn protege.
*/ 'GRITO · saia do alcance; escudo nn protege', /* Essa posição da lista guarda AGARRE recue nn tente bloquear.
*/ 'AGARRE · recue; nn tente bloquear'];
       /* Atualiza warning usando o resultado dessa expressão.
*/ warning=tells[enemy.pattern]+(enemy.aimLocked?' · MIRA TRAVADA':'');
                                                                                         
       /* Esse teste confere se enemy.timer é maior que uma das duas alternativas, conforme o teste, e só entra nesse caminho quando a condição passa.
*/ if(enemy.timer>(config.assist?.5:.32)) /* Atualiza enemy.aim usando a.
*/ enemy.aim=a;
      else  /* Atualiza enemy.aim Locked usando true.
*/ enemy.aimLocked=true;
       /* Esse teste confere se enemy.timer é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (enemy.timer <= 0) {
         /* Atualiza enemy.phase usando attack.
*/ enemy.phase = 'attack'; /* Atualiza enemy.timer usando uma das duas alternativas, conforme o teste.
*/ enemy.timer=enemy.pattern===2?.85:enemy.pattern===1?.95:.4;
         /* Atualiza enemy.volleys usando 0.
*/ enemy.volleys=0; /* Atualiza enemy.volley Timer usando 0.
*/ enemy.volleyTimer=0;
         /* Essa declaração usa const para preparar in Cone, mantendo essas referências fixas.
*/ const  /* Aqui in Cone recebe o resultado dessa expressão.
*/ inCone= /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs( /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ angleDiff(a,enemy.aim))<1.1;
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(visible&&inCone) {
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===0&&d<3) /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(32);
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===3&&d<2.4) /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(40);
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===5&&d<4.3) /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(28,enemy,false);
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===6&&d<2.8) /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(38,enemy,false);
        }
         /* Esse teste confere se enemy.pattern é igual a 4, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===4) /* esse comando cria os projéteis do disparo de Beerus seguindo a direção e a abertura do ataque.
*/ fireVolley(enraged,7,.22);
         /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound(enemy.pattern===2?'charge':'attack',.2, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(enemy,.65));
      }
    } else  /* Esse teste confere se enemy.phase é igual a attack, e só entra nesse caminho quando a condição passa.
*/ if (enemy.phase === 'attack') {
       /* Atualiza warning usando uma das duas alternativas, conforme o teste.
*/ warning=enemy.pattern===2?'INVESTIDA · continue a esquiva':enemy.pattern===1?'RAJADA · continue em movimento':'Espere o golpe terminar.';
       /* Esse teste confere se enemy.pattern é igual a 1, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===1) {
         /* Atualiza enemy.volley Timer usando dt.
*/ enemy.volleyTimer-=dt;
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(enemy.volleyTimer<=0&&enemy.volleys<3) {
           /* esse comando cria os projéteis do disparo de Beerus seguindo a direção e a abertura do ataque.
*/ fireVolley(enraged,config.assist?1:3,.14);
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ enemy.volleys++; /* Atualiza enemy.volley Timer usando 0.26.
*/ enemy.volleyTimer=.26;
        }
      }
       /* Esse teste confere se enemy.pattern é igual a 2, e só entra nesse caminho quando a condição passa.
*/ if (enemy.pattern === 2) {
         /* Essa declaração usa const para preparar before X e before Y, mantendo essas referências fixas.
*/ const  /* Aqui before X recebe enemy.x.
*/ beforeX=enemy.x, /* Aqui before Y recebe enemy.y.
*/ beforeY=enemy.y;
         /* esse comando move o participante nos eixos livres e impede atravessar paredes e pilares.
*/ walk(enemy,  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(enemy.aim) * dt * (config.assist?5.5:8),  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(enemy.aim) * dt * (config.assist?5.5:8));
         /* Essa declaração usa const para preparar charge Distance, mantendo essas referências fixas.
*/ const  /* Aqui charge Distance recebe o resultado de Math.hypot.
*/ chargeDistance= /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x-enemy.x,player.y-enemy.y);
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(chargeDistance<1.2&& /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x,enemy.y)) { /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(42); /* Atualiza enemy.timer usando 0.
*/ enemy.timer=0;}
         /* Esse teste confere se o resultado de Math.hypot é menor que dt, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(enemy.x-beforeX,enemy.y-beforeY)<dt) /* Atualiza enemy.timer usando 0.
*/ enemy.timer=0;
      }
       /* Esse teste confere se enemy.timer é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (enemy.timer <= 0) {
         /* Atualiza enemy.phase usando recover.
*/ enemy.phase = 'recover';
         /* Atualiza enemy.timer usando uma das duas alternativas, conforme o teste.
*/ enemy.timer=config.assist?2.15:enemy.pattern===2?1.65:enraged?1.15:1.45;
      }
    } else {
       /* Atualiza warning usando ABERTURA aproxime se e ataque depois recue.
*/ warning = 'ABERTURA · aproxime-se e ataque; depois recue.';
       /* Esse teste confere se enemy.timer é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (enemy.timer <= 0) {
         /* Atualiza enemy.phase usando approach.
*/ enemy.phase = 'approach'; /* Atualiza enemy.timer usando uma das duas alternativas, conforme o teste.
*/ enemy.timer=config.assist?1.8:enraged?.55:.9;
      }
    }
     /* Atualiza bullets usando o resultado de bullets.filter.
*/ bullets =  /* Monta uma lista somente com os valores que passam no teste. */ bullets.filter( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ b => {
       /* Atualiza b.life usando dt.
*/ b.life-=dt;
       /* Esse teste confere se o resultado de solid está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(b.x,b.y)) /* Devolve false e encerra essa chamada da função.
*/ return false;
                                                                                  
       /* Essa declaração usa const para preparar steps, mantendo essas referências fixas.
*/ const  /* Aqui steps recebe o resultado de Math.max.
*/ steps= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1, /* Arredonda o número para cima. */ Math.ceil( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(b.vx,b.vy)*dt/.1));
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<steps; /* Aumenta i em um para atualizar o contador. */ i++) {
         /* Essa declaração usa const para preparar source, mantendo essas referências fixas.
*/ const  /* Aqui source recebe um objeto com os campos dessa parte.
*/ source={ /* Guarda a posição horizontal desse elemento.
*/ x:b.x, /* Guarda a posição vertical desse elemento.
*/ y:b.y};
         /* Atualiza b.x usando o resultado dessa expressão.
*/ b.x+=b.vx*dt/steps; /* Atualiza b.y usando o resultado dessa expressão.
*/ b.y+=b.vy*dt/steps;
         /* Esse teste confere se o resultado de solid está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(b.x,b.y)) /* Devolve false e encerra essa chamada da função.
*/ return false;
         /* Esse teste confere se o resultado de Math.hypot é menor que 0.42, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(b.x-player.x,b.y-player.y)<.42) { /* esse comando calcula o impacto e considera a direção do escudo, a proteção temporária e a derrota.
*/ damage(24,source); /* Devolve false e encerra essa chamada da função.
*/ return false;}
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!b.whizzed&& /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(b.x-player.x,b.y-player.y)<1.15){ /* Atualiza b.whizzed usando true.
*/ b.whizzed=true; /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('nearMiss',.22, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(b,.5));}
      }
       /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return b.life>0;
    });
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(active&&elapsed>=tensionAt) {
       /* Atualiza tension At usando o resultado dessa expressão.
*/ tensionAt=elapsed+.12;
       /* Essa declaração usa const para preparar proximity e charge Progress, mantendo essas referências fixas.
*/ const  /* Aqui proximity recebe o resultado de clamp.
*/ proximity= /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(1-d/12), /* Aqui charge Progress recebe uma das duas alternativas, conforme o teste.
*/ chargeProgress=enemy.phase==='prepare'? /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(1-enemy.timer/enemy.windup):0;
       /* Essa declaração usa const para preparar pressure, mantendo essas referências fixas.
*/ const  /* Aqui pressure recebe uma das duas alternativas, conforme o teste.
*/ pressure=enemy.phase==='recover'?.14:enemy.phase==='prepare'?.48+chargeProgress*.24:enemy.phase==='attack'?.85:.24+proximity*.24;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setTension?.( /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(pressure+(enraged?.1:0)+(1-player.hp/100)*.12),{ /* Esse campo guarda kind com boss.
*/ kind:'boss', /* Esse campo guarda proximity com proximity.
*/ proximity, /* Esse campo guarda health com o resultado de clamp.
*/ health: /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(player.hp/100), /* Esse campo guarda charging com o resultado dessa expressão.
*/ charging:enemy.phase==='prepare'});
    }
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ config.onHud?.({
       /* Esse campo guarda hp com o resultado de Math.max.
*/ hp:  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Arredonda o número para cima. */ Math.ceil(player.hp)),
       /* aqui ficam vida, posição, fase e próximo padrão de Beerus.
*/ enemy:  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Arredonda o número para cima. */ Math.ceil(enemy.hp)),
       /* Esse campo guarda warning com uma das duas alternativas, conforme o teste.
*/ warning:guardBroken>0?'DEFESA ROMPIDA · solte o escudo e recue':(enraged?'FÚRIA · ':'')+warning,
       /* aqui fica o fôlego disponível para correr, atacar, defender e usar luz.
*/ stamina: /* Arredonda o número para o inteiro mais próximo. */ Math.round(player.stamina),
       /* Esse campo guarda guard Broken com o resultado dessa expressão.
*/ guardBroken:guardBroken>0,
       /* Informa o número da etapa de fúria da luta no indicador da arena.
*/ phase:enemy.phaseNumber,
       /* Esse campo guarda light Ready com o resultado dessa expressão.
*/ lightReady:lightCooldown<=0&&player.stamina>=(config.assist?17:30),
       /* Esse campo guarda free com false.
*/ free: false
    });
  }
   /* esse comando cria os projéteis do disparo de Beerus seguindo a direção e a abertura do ataque.
*/ function fireVolley(enraged,count,spread) {
     /* Essa declaração usa const para preparar speed, mantendo essas referências fixas.
*/ const  /* Aqui speed recebe uma das duas alternativas, conforme o teste.
*/ speed=config.assist?4.6:enraged?7.6:6.2;
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<count; /* Aumenta i em um para atualizar o contador. */ i++) {
       /* Essa declaração usa const para preparar a, mantendo essas referências fixas.
*/ const  /* Aqui a recebe o resultado dessa expressão.
*/ a=enemy.aim+(i-(count-1)/2)*spread;
       /* Acrescenta esse valor no fim da lista.
*/ bullets.push({ /* Guarda a posição horizontal desse elemento.
*/ x:enemy.x, /* Guarda a posição vertical desse elemento.
*/ y:enemy.y, /* Esse campo guarda vx com o resultado dessa expressão.
*/ vx: /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(a)*speed, /* Esse campo guarda vy com o resultado dessa expressão.
*/ vy: /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(a)*speed, /* Esse campo guarda life com 4.8.
*/ life:4.8});
    }
     /* esse comando toca o som da ação com uma pequena pausa entre repetições iguais.
*/ sound('projectile',.2, /* esse comando calcula de que lado e a que distância uma ameaça está para posicionar o áudio. */ soundPosition(enemy,.65));
  }
   /* esse comando escolhe a pose de Beerus de acordo com movimento, preparo, ataque ou recuperação.
*/ function enemyImage() {
     /* Essa declaração usa const para preparar alternate, mantendo essas referências fixas.
*/ const  /* Aqui alternate recebe o resultado dessa expressão.
*/ alternate= /* Arredonda o número para baixo. */ Math.floor(elapsed*5)%2;
     /* Essa declaração usa let para preparar index, permitindo atualizar esses valores depois.
*/ let  /* Aqui index recebe 1.
*/ index=1;
     /* Esse teste confere se enemy.hit Until é maior que elapsed, e só entra nesse caminho quando a condição passa.
*/ if(enemy.hitUntil>elapsed)  /* Atualiza index usando 17.
*/ index=17;
    else  /* Esse teste confere se enemy.phase é igual a prepare, e só entra nesse caminho quando a condição passa.
*/ if(enemy.phase==='prepare')  /* Atualiza index usando uma das duas alternativas, conforme o teste.
*/ index=enemy.pattern===6&&enemy.timer>.7?16:[ /* Essa posição da lista guarda 6.
*/ 6, /* Essa posição da lista guarda 13.
*/ 13, /* Essa posição da lista guarda 11.
*/ 11, /* Essa posição da lista guarda 9.
*/ 9, /* Essa posição da lista guarda 15.
*/ 15, /* Essa posição da lista guarda 12.
*/ 12, /* Essa posição da lista guarda 10.
*/ 10][enemy.pattern];
    else  /* Esse teste confere se enemy.phase é igual a attack, e só entra nesse caminho quando a condição passa.
*/ if(enemy.phase==='attack')  /* Atualiza index usando uma das duas alternativas, conforme o teste.
*/ index=enemy.pattern===0?(enemy.timer>.32?7:8):[ /* Essa posição da lista guarda 7.
*/ 7, /* Essa posição da lista guarda 14.
*/ 14, /* Essa posição da lista guarda 11.
*/ 11, /* Essa posição da lista guarda 9.
*/ 9, /* Essa posição da lista guarda 15.
*/ 15, /* Essa posição da lista guarda 12.
*/ 12, /* Essa posição da lista guarda 10.
*/ 10][enemy.pattern];
    else  /* Esse teste confere se enemy.phase é igual a recover, e só entra nesse caminho quando a condição passa.
*/ if(enemy.phase==='recover')  /* Atualiza index usando uma das duas alternativas, conforme o teste.
*/ index=enemy.timer>1.2?17:18;
    else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(keys.left||keys.right)  /* Atualiza index usando 19.
*/ index=19;
    else  /* Esse teste confere se o resultado de Math.hypot é maior que 6, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x-enemy.x,player.y-enemy.y)>6)  /* Atualiza index usando uma das duas alternativas, conforme o teste.
*/ index=alternate?4:5;
    else  /* Esse teste confere se o resultado de Math.hypot é maior que 1.7, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(player.x-enemy.x,player.y-enemy.y)>1.7)  /* Atualiza index usando uma das duas alternativas, conforme o teste.
*/ index=alternate?2:3;
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return images['odio'+index]||images.enemy;
  }
   /* esse comando escolhe a pose das mãos e mantém a espada no chão até ela ser recolhida na cena livre.
*/ function handImage() {
                                                                                                     
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(freeMode&&!collected) /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return  /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('escudo')?images.shieldRest:images.fist;
     /* Essa declaração usa const para preparar knife, mantendo essas referências fixas.
*/ const  /* Aqui knife recebe o resultado dessa expressão.
*/ knife=config.equipped==='faca'&& /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('faca');
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(keys.guard&&attackAge>.36&&lightAge>.65&&guardBroken<=0&&player.stamina>8&& /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('escudo')) /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return hit>0?images.shieldHit:images.shield;
     /* Esse teste confere se knife está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(knife) /* Devolve images e encerra essa chamada da função.
*/ return images['knife'+(keys.guard?4:attackAge<.12?2:attackAge<.3?3:1)];
     /* Esse teste confere se light Age é menor que 0.65, e só entra nesse caminho quando a condição passa.
*/ if(lightAge<.65) /* Devolve images.light Cast e encerra essa chamada da função.
*/ return images.lightCast;
     /* Esse teste confere se config.equipped é igual a luz, e só entra nesse caminho quando a condição passa.
*/ if(config.equipped==='luz') /* Devolve images.light e encerra essa chamada da função.
*/ return images.light;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('espada')||collected) /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return attackAge<.48?images['swing'+ /* Escolhe o menor valor entre os valores recebidos. */ Math.min(4, /* Arredonda o número para baixo. */ Math.floor(attackAge/.12)+1)]: /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('escudo')?images.paired:images.swing1;
     /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return attackAge<.3?images.punch:images.fist;
  }
                                                                    
                                                                                
   /* esse comando calcula o perigo do golpe usando o mesmo alcance e a mesma linha de visão da luta.
*/ function threatInfo() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(freeMode||!enemy) /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda danger com false.
*/ danger:false, /* Esse campo guarda locked com false.
*/ locked:false};
     /* Essa declaração usa const para preparar dx e dy e d, mantendo essas referências fixas.
*/ const  /* Aqui dx recebe o resultado dessa expressão.
*/ dx=player.x-enemy.x, /* Aqui dy recebe o resultado dessa expressão.
*/ dy=player.y-enemy.y, /* Aqui d recebe o resultado de Math.hypot.
*/ d= /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(dx,dy);
     /* Essa declaração usa const para preparar relative e visible, mantendo essas referências fixas.
*/ const  /* Aqui relative recebe o resultado de angle Diff.
*/ relative= /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ angleDiff( /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(dy,dx),enemy.aim??0), /* Aqui visible recebe o resultado de line Clear.
*/ visible= /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x,enemy.y);
     /* Essa declaração usa let para preparar danger, permitindo atualizar esses valores depois.
*/ let  /* Aqui danger recebe false.
*/ danger=false;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(visible&& /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda prepare.
*/ 'prepare', /* Essa posição da lista guarda attack.
*/ 'attack'].includes(enemy.phase)) {
       /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 5.
*/ 5, /* Essa posição da lista guarda 6.
*/ 6].includes(enemy.pattern))  /* Atualiza danger usando o resultado dessa expressão.
*/ danger=d<[ /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 2.4.
*/ 2.4, /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 4.3.
*/ 4.3, /* Essa posição da lista guarda 2.8.
*/ 2.8][enemy.pattern]&& /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(relative)<1.1;
      else  /* Esse teste confere se enemy.pattern é igual a 2, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===2)  /* Atualiza danger usando o resultado dessa expressão.
*/ danger= /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(relative)*d>0&& /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(relative)*d<(config.assist?4.9:7.2)&& /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(relative)*d)<1.2;
      else {
         /* Essa declaração usa const para preparar count e spread, mantendo essas referências fixas.
*/ const  /* Aqui count recebe uma das duas alternativas, conforme o teste.
*/ count=enemy.pattern===4?7:config.assist?1:3, /* Aqui spread recebe uma das duas alternativas, conforme o teste.
*/ spread=enemy.pattern===4?.22:.14;
         /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<count; /* Aumenta i em um para atualizar o contador. */ i++) {
           /* Essa declaração usa const para preparar angle, mantendo essas referências fixas.
*/ const  /* Aqui angle recebe o resultado dessa expressão.
*/ angle=relative-(i-(count-1)/2)*spread;
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)*d>0&& /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle)*d)<.65) /* Atualiza danger usando true.
*/ danger=true;
        }
      }
    }
     /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda danger com danger.
*/ danger, /* Esse campo guarda locked com a negação de a negação de enemy.aim Locked.
*/ locked:!!enemy.aimLocked, /* Esse campo guarda visible com visible.
*/ visible, /* Esse campo guarda distance com d.
*/ distance:d};
  }
   /* esse comando projeta uma posição do chão na tela a partir da câmera em primeira pessoa.
*/ function floorPoint(x,y) {
     /* Essa declaração usa const para preparar dx e dy e z, mantendo essas referências fixas.
*/ const  /* Aqui dx recebe o resultado dessa expressão.
*/ dx=x-player.x, /* Aqui dy recebe o resultado dessa expressão.
*/ dy=y-player.y, /* Aqui z recebe o resultado dessa expressão.
*/ z=dx* /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a)+dy* /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a);
     /* Esse teste confere se z é menor que 0.14, e só entra nesse caminho quando a condição passa.
*/ if(z<.14) /* Devolve um valor vazio e encerra essa chamada da função.
*/ return null;
     /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Guarda a posição horizontal desse elemento.
*/ x:W/2+(-dx* /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a)+dy* /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a))/z/ /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov/2)*W/2, /* Guarda a posição vertical desse elemento.
*/ y:H/2+H*.5/z, /* Esse campo guarda z com z.
*/ z};
  }
   /* esse comando desenha um aviso no chão respeitando paredes, pilares e profundidade.
*/ function floorLine(x1,y1,x2,y2,depth,color,width=1.5) {
     /* Essa declaração usa const para preparar steps, mantendo essas referências fixas.
*/ const  /* Aqui steps recebe o resultado de Math.max.
*/ steps= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1, /* Arredonda o número para cima. */ Math.ceil( /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(x2-x1,y2-y1)/.14));
     /* Atualiza ctx.stroke Style usando color.
*/ ctx.strokeStyle=color; /* Atualiza ctx.line Width usando width.
*/ ctx.lineWidth=width; /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath();
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<steps; /* Aumenta i em um para atualizar o contador. */ i++) {
       /* Essa declaração usa const para preparar t e x e y, mantendo essas referências fixas.
*/ const  /* Aqui t recebe o resultado dessa expressão.
*/ t=(i+.5)/steps, /* Aqui x recebe o resultado dessa expressão.
*/ x=x1+(x2-x1)*t, /* Aqui y recebe o resultado dessa expressão.
*/ y=y1+(y2-y1)*t;
       /* Esse teste confere se o resultado de solid está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(x,y)) /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
       /* Essa declaração usa const para preparar p e q, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de floor Point.
*/ p= /* esse comando projeta uma posição do chão na tela a partir da câmera em primeira pessoa. */ floorPoint(x1+(x2-x1)*i/steps,y1+(y2-y1)*i/steps), /* Aqui q recebe o resultado de floor Point.
*/ q= /* esse comando projeta uma posição do chão na tela a partir da câmera em primeira pessoa. */ floorPoint(x1+(x2-x1)*(i+1)/steps,y1+(y2-y1)*(i+1)/steps);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!p||!q) /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
       /* Essa declaração usa const para preparar sx e sy, mantendo essas referências fixas.
*/ const  /* Aqui sx recebe o resultado dessa expressão.
*/ sx=(p.x+q.x)/2, /* Aqui sy recebe o resultado dessa expressão.
*/ sy=(p.y+q.y)/2;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(sx<0||sx>=W||sy>H||depth[sx|0]<(p.z+q.z)/2-.08) /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
       /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(p.x,p.y); /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(q.x,q.y);
    }
     /* Desenha o contorno do caminho usando o estilo atual.
*/ ctx.stroke();
  }
   /* esse comando mostra o alcance do ataque em preparação sem revelar sinais através das paredes.
*/ function threatFloor(depth,cue) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(freeMode||enemy.phase!=='prepare'||!cue.visible) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar color e width, mantendo essas referências fixas.
*/ const  /* Aqui color recebe uma das duas alternativas, conforme o teste.
*/ color=enemy.aimLocked?'#ee715cc4':'#dbb87999', /* Aqui width recebe o resultado de Math.max.
*/ width= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,H*.004);
     /* Essa declaração usa const para preparar ray, mantendo essas referências fixas.
*/ const  /* Aqui ray recebe uma função para executar quando for chamada.
*/ ray= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (angle,length,offset=0)=>{
       /* Essa declaração usa const para preparar x e y, mantendo essas referências fixas.
*/ const  /* Aqui x recebe o resultado dessa expressão.
*/ x=enemy.x- /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle)*offset, /* Aqui y recebe o resultado dessa expressão.
*/ y=enemy.y+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)*offset;
       /* Essa declaração usa let para preparar end, permitindo atualizar esses valores depois.
*/ let  /* Aqui end recebe length.
*/ end=length;
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar d, permitindo atualizar esses valores depois.
*/ let  /* Aqui d recebe 0.1.
*/ d=.1;d<length; /* Atualiza d usando 0.12. */ d+=.12) /* Esse teste confere se o resultado de solid está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(x+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)*d,y+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle)*d)){ /* Atualiza end usando d.
*/ end=d; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;}
       /* esse comando desenha um aviso no chão respeitando paredes, pilares e profundidade.
*/ floorLine(x,y,x+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)*end,y+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle)*end,depth,color,width);
    };
     /* Esse teste confere se enemy.pattern é igual a 2, e só entra nesse caminho quando a condição passa.
*/ if(enemy.pattern===2) {
       /* esse comando projeta uma linha de aviso e encerra seu alcance quando encontra uma parede.
*/ ray(enemy.aim,config.assist?4.9:7.2,-1.15); /* esse comando projeta uma linha de aviso e encerra seu alcance quando encontra uma parede.
*/ ray(enemy.aim,config.assist?4.9:7.2,1.15);
       /* esse comando projeta uma linha de aviso e encerra seu alcance quando encontra uma parede.
*/ ray(enemy.aim,config.assist?4.9:7.2);
    } else  /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 4.
*/ 4].includes(enemy.pattern)) {
       /* Essa declaração usa const para preparar count e spread, mantendo essas referências fixas.
*/ const  /* Aqui count recebe uma das duas alternativas, conforme o teste.
*/ count=enemy.pattern===4?7:config.assist?1:3, /* Aqui spread recebe uma das duas alternativas, conforme o teste.
*/ spread=enemy.pattern===4?.22:.14;
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<count; /* Aumenta i em um para atualizar o contador. */ i++) /* esse comando projeta uma linha de aviso e encerra seu alcance quando encontra uma parede.
*/ ray(enemy.aim+(i-(count-1)/2)*spread,14);
    } else {
       /* Essa declaração usa const para preparar radius, mantendo essas referências fixas.
*/ const  /* Aqui radius recebe enemy.pattern.
*/ radius=[ /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 2.4.
*/ 2.4, /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 4.3.
*/ 4.3, /* Essa posição da lista guarda 2.8.
*/ 2.8][enemy.pattern];
       /* esse comando projeta uma linha de aviso e encerra seu alcance quando encontra uma parede.
*/ ray(enemy.aim-1.1,radius); /* esse comando projeta uma linha de aviso e encerra seu alcance quando encontra uma parede.
*/ ray(enemy.aim+1.1,radius);
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<24; /* Aumenta i em um para atualizar o contador. */ i++) {
         /* Essa declaração usa const para preparar a e b, mantendo essas referências fixas.
*/ const  /* Aqui a recebe o resultado dessa expressão.
*/ a=enemy.aim-1.1+i*2.2/24, /* Aqui b recebe o resultado dessa expressão.
*/ b=a+2.2/24;
         /* Essa declaração usa const para preparar x e y, mantendo essas referências fixas.
*/ const  /* Aqui x recebe o resultado dessa expressão.
*/ x=enemy.x+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(a)*radius, /* Aqui y recebe o resultado dessa expressão.
*/ y=enemy.y+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(a)*radius;
         /* Essa declaração usa const para preparar x2 e y2, mantendo essas referências fixas.
*/ const  /* Aqui x2 recebe o resultado dessa expressão.
*/ x2=enemy.x+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(b)*radius, /* Aqui y2 recebe o resultado dessa expressão.
*/ y2=enemy.y+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(b)*radius;
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* esse comando verifica se existe passagem livre entre dois pontos antes de permitir visão ou impacto. */ clearBetween(enemy.x,enemy.y,x,y)&& /* esse comando verifica se existe passagem livre entre dois pontos antes de permitir visão ou impacto. */ clearBetween(enemy.x,enemy.y,x2,y2)) /* esse comando desenha um aviso no chão respeitando paredes, pilares e profundidade.
*/ floorLine(x,y,x2,y2,depth,color,width);
      }
    }
  }
   /* esse comando desenha os sinais de impacto, perigo e recuperação para orientar a luta.
*/ function combatFeedback(cue) {
     /* Esse teste confere se free Mode está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(freeMode) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar reduced e enraged, mantendo essas referências fixas.
*/ const  /* Aqui reduced recebe o resultado de reduced Motion.
*/ reduced= /* esse comando confere a preferência de movimento antes de desenhar tremores e oscilações. */ reducedMotion(), /* Aqui enraged recebe o resultado dessa expressão.
*/ enraged=enemy.phaseNumber===2;
     /* Essa declaração usa const para preparar low e impact, mantendo essas referências fixas.
*/ const  /* Aqui low recebe o resultado de clamp.
*/ low= /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp((42-player.hp)/42), /* Aqui impact recebe o resultado dessa expressão.
*/ impact=hit/.3;
                                                                                
     /* Essa declaração usa const para preparar edge, mantendo essas referências fixas.
*/ const  /* Aqui edge recebe o resultado de ctx.create Radial Gradient.
*/ edge= /* Prepara um degradê circular para a luz ou sombra da cena. */ ctx.createRadialGradient(W/2,H*.48,H*.2,W/2,H*.48, /* Escolhe o maior valor entre os valores recebidos. */ Math.max(W,H)*.62);
     /* Essa declaração usa const para preparar breath, mantendo essas referências fixas.
*/ const  /* Aqui breath recebe uma das duas alternativas, conforme o teste.
*/ breath=reduced?0:low*(.015+.015* /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(elapsed*2.1));
     /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(0,'rgba(28,8,19,0)');
     /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(.62,'rgba(44,10,23,0)');
     /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(1,`rgba(${enraged?'105,24,38':'105,14,26'},${ /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(low*.3+breath+(enraged?.13:0)+impact*.08,0,.48)})`);
     /* Atualiza ctx.fill Style usando edge.
*/ ctx.fillStyle=edge; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,W,H);
     /* Esse teste confere se hit é maior que 0, e só entra nesse caminho quando a condição passa.
*/ if(hit>0) {
       /* Essa declaração usa const para preparar direction, mantendo essas referências fixas.
*/ const  /* Aqui direction recebe o resultado de angle Diff.
*/ direction= /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ angleDiff(impactAngle,player.a);
       /* Atualiza ctx.stroke Style usando uma das duas alternativas, conforme o teste.
*/ ctx.strokeStyle=impactBlocked?`rgba(244,210,153,${impact*.9})`:`rgba(248,99,79,${impact*.9})`;
       /* Atualiza ctx.line Width usando o resultado de Math.max.
*/ ctx.lineWidth= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(3,H*.014); /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath();
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<=12; /* Aumenta i em um para atualizar o contador. */ i++) {
         /* Essa declaração usa const para preparar a e x e y, mantendo essas referências fixas.
*/ const  /* Aqui a recebe o resultado dessa expressão.
*/ a=direction-.25+i*.5/12, /* Aqui x recebe o resultado dessa expressão.
*/ x=W/2+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(a)*W*.43, /* Aqui y recebe o resultado dessa expressão.
*/ y=H/2- /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(a)*H*.41;
         /* Esse teste confere se i é igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(i===0) /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(x,y);else  /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(x,y);
      }
       /* Desenha o contorno do caminho usando o estilo atual.
*/ ctx.stroke();
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda prepare.
*/ 'prepare', /* Essa posição da lista guarda attack.
*/ 'attack', /* Essa posição da lista guarda recover.
*/ 'recover'].includes(enemy.phase)&&phaseAge>2.4) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar preparing e recovering, mantendo essas referências fixas.
*/ const  /* Aqui preparing recebe o resultado dessa expressão.
*/ preparing=enemy.phase==='prepare', /* Aqui recovering recebe o resultado dessa expressão.
*/ recovering=enemy.phase==='recover';
     /* Essa declaração usa const para preparar text, mantendo essas referências fixas.
*/ const  /* Aqui text recebe uma das duas alternativas, conforme o teste.
*/ text=recovering?'ABERTURA · CONTRA-ATAQUE':preparing?(enemy.aimLocked?(cue.danger?'MIRA TRAVADA · ESQUIVE':'MIRA TRAVADA'):'PREPARANDO O GOLPE'):enemy.phase==='approach'?'FASE II · FÚRIA':'GOLPE · MANTENHA DISTÂNCIA';
     /* Essa declaração usa const para preparar color, mantendo essas referências fixas.
*/ const  /* Aqui color recebe uma das duas alternativas, conforme o teste.
*/ color=recovering?'#ead8af':preparing&&enemy.aimLocked?'#ff9a7c':'#e0c591';
     /* Essa declaração usa let para preparar font Size, permitindo atualizar esses valores depois.
*/ let  /* Aqui font Size recebe o resultado de Math.max.
*/ fontSize= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(9, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(13,H*.034));
     /* Atualiza ctx.font usando um texto montado com os valores atuais.
*/ ctx.font=`600 ${fontSize}px sans-serif`;
     /* Esse teste confere se width é maior que o resultado dessa expressão, e só entra nesse caminho quando a condição passa.
*/ if( /* Mede a largura que esse texto ocupa com a fonte atual. */ ctx.measureText(text).width>W*.86) {
       /* Atualiza font Size usando o resultado de Math.max.
*/ fontSize= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(8,fontSize*W*.86/ /* Mede a largura que esse texto ocupa com a fonte atual. */ ctx.measureText(text).width); /* Atualiza ctx.font usando um texto montado com os valores atuais.
*/ ctx.font=`600 ${fontSize}px sans-serif`;
    }
     /* Atualiza ctx.text Align usando center.
*/ ctx.textAlign='center';
     /* Essa declaração usa const para preparar text Width e panel Width e top, mantendo essas referências fixas.
*/ const  /* Aqui text Width recebe width.
*/ textWidth= /* Mede a largura que esse texto ocupa com a fonte atual. */ ctx.measureText(text).width, /* Aqui panel Width recebe o resultado de Math.min.
*/ panelWidth= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(W*.94,textWidth+20), /* Aqui top recebe o resultado dessa expressão.
*/ top=H*.205;
     /* Atualiza ctx.fill Style usando rgba 17 11 19 .76.
*/ ctx.fillStyle='rgba(17,11,19,.76)'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect((W-panelWidth)/2,top,panelWidth,H*.072+8);
     /* Atualiza ctx.fill Style usando color.
*/ ctx.fillStyle=color; /* Escreve esse texto preenchido na posição indicada do canvas.
*/ ctx.fillText(text,W/2,top+H*.046+2);
     /* Essa declaração usa const para preparar remaining, mantendo essas referências fixas.
*/ const  /* Aqui remaining recebe uma das duas alternativas, conforme o teste.
*/ remaining=preparing? /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(enemy.timer/(enemy.windup||1)):recovering? /* esse comando mantém o valor dentro dos limites usados nos cálculos da arena. */ clamp(enemy.timer/(config.assist?2.15:enemy.pattern===2?1.65:enraged?1.15:1.45)):0;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(preparing||recovering) {
       /* Atualiza ctx.fill Style usando ffffff24.
*/ ctx.fillStyle='#ffffff24'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(W*.34,top+H*.064+5,W*.32,2);
       /* Atualiza ctx.fill Style usando color.
*/ ctx.fillStyle=color; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(W*.34,top+H*.064+5,W*.32*remaining,2);
    }
                                                                             
     /* Essa declaração usa const para preparar bearing, mantendo essas referências fixas.
*/ const  /* Aqui bearing recebe o resultado de angle Diff.
*/ bearing= /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ angleDiff( /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(enemy.y-player.y,enemy.x-player.x),player.a);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(bearing)>fov*.48&&!recovering) {
       /* Essa declaração usa const para preparar side e x e y, mantendo essas referências fixas.
*/ const  /* Aqui side recebe uma das duas alternativas, conforme o teste.
*/ side= /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(bearing)>=0?1:-1, /* Aqui x recebe uma das duas alternativas, conforme o teste.
*/ x=side>0?W*.95:W*.05, /* Aqui y recebe o resultado dessa expressão.
*/ y=H*.38;
       /* Atualiza ctx.stroke Style usando color.
*/ ctx.strokeStyle=color; /* Atualiza ctx.line Width usando 2.
*/ ctx.lineWidth=2; /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath(); /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(x-side*6,y-6); /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(x,y); /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(x-side*6,y+6); /* Desenha o contorno do caminho usando o estilo atual.
*/ ctx.stroke();
    }
     /* Atualiza ctx.text Align usando start.
*/ ctx.textAlign='start';
  }
   /* esse comando desenha cenário, profundidade, inimigo, objetos, mãos e avisos da arena em cada quadro.
*/ function draw() {
     /* Essa declaração usa const para preparar cue, mantendo essas referências fixas.
*/ const  /* Aqui cue recebe o resultado de threat Info.
*/ cue= /* esse comando calcula o perigo do golpe usando o mesmo alcance e a mesma linha de visão da luta. */ threatInfo();
     /* Atualiza ctx.fill Style usando 24151c.
*/ ctx.fillStyle = '#24151c';
     /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0, 0, W, H / 2);
     /* Essa declaração usa const para preparar floor, mantendo essas referências fixas.
*/ const  /* Aqui floor recebe o resultado de ctx.create Linear Gradient.
*/ floor =  /* Prepara um degradê entre os pontos indicados. */ ctx.createLinearGradient(0, H / 2, 0, H);
     /* Acrescenta essa cor na posição indicada do degradê.
*/ floor.addColorStop(0, '#19161b');
     /* Acrescenta essa cor na posição indicada do degradê.
*/ floor.addColorStop(1, '#595051');
     /* Atualiza ctx.fill Style usando floor.
*/ ctx.fillStyle = floor;
     /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0, H / 2, W, H / 2);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (images.sky?.complete && images.sky.naturalWidth) {
       /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(images.sky, 0, 0, images.sky.naturalWidth, images.sky.naturalHeight * .4, 0, 0, W, H / 2);
       /* Atualiza ctx.fill Style usando 190d18aa.
*/ ctx.fillStyle = '#190d18aa';
       /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0, 0, W, H / 2);
    }
     /* Esse teste confere se floor Pixels está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (floorPixels) {
       /* Essa declaração usa const para preparar pixels e left X e left Y e step Ray X e step Ray Y, mantendo essas referências fixas.
*/ const  /* Aqui pixels recebe o resultado de ctx.create Image Data.
*/ pixels =  /* Executa ctx.create Image Data com os valores definidos nessa parte. */ ctx.createImageData(W, H / 2),
         /* Aqui left X recebe o resultado dessa expressão.
*/ leftX =  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a) -  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a) *  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov / 2),
         /* Aqui left Y recebe o resultado dessa expressão.
*/ leftY =  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a) +  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a) *  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov / 2),
         /* Aqui step Ray X recebe o resultado dessa expressão.
*/ stepRayX = 2 *  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a) *  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov / 2) / W,
         /* Aqui step Ray Y recebe o resultado dessa expressão.
*/ stepRayY = -2 *  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a) *  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov / 2) / W;
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar y, permitindo atualizar esses valores depois.
*/ let  /* Aqui y recebe 1.
*/ y = 1; y < H / 2;  /* Aumenta y em um para atualizar o contador. */ y++) {
         /* Essa declaração usa const para preparar dist, mantendo essas referências fixas.
*/ const  /* Aqui dist recebe o resultado dessa expressão.
*/ dist = H * .5 / y;
         /* Essa declaração usa let para preparar wx e wy, permitindo atualizar esses valores depois.
*/ let  /* Aqui wx recebe o resultado dessa expressão.
*/ wx = player.x + dist * leftX,
           /* Aqui wy recebe o resultado dessa expressão.
*/ wy = player.y + dist * leftY;
         /* Essa declaração usa const para preparar shade, mantendo essas referências fixas.
*/ const  /* Aqui shade recebe o resultado de Math.max.
*/ shade =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.15, 1 - dist / 30);
         /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar x, permitindo atualizar esses valores depois.
*/ let  /* Aqui x recebe 0.
*/ x = 0; x < W;  /* Aumenta x em um para atualizar o contador. */ x++) {
           /* Essa declaração usa const para preparar tx e ty e src e dst, mantendo essas referências fixas.
*/ const  /* Aqui tx recebe o resultado dessa expressão.
*/ tx = ( /* Arredonda o número para baixo. */ Math.floor(wx * 64) % 64 + 64) % 64,
             /* Aqui ty recebe o resultado dessa expressão.
*/ ty = ( /* Arredonda o número para baixo. */ Math.floor(wy * 64) % 64 + 64) % 64,
             /* Aqui src recebe o resultado dessa expressão.
*/ src = (ty * 64 + tx) * 4,
             /* Aqui dst recebe o resultado dessa expressão.
*/ dst = (y * W + x) * 4;
           /* Atualiza pixels.data.dst usando o resultado dessa expressão.
*/ pixels.data[dst] = floorPixels[src] * shade;
           /* Atualiza pixels.data. usando o resultado dessa expressão.
*/ pixels.data[dst + 1] = floorPixels[src + 1] * shade;
           /* Atualiza pixels.data. usando o resultado dessa expressão.
*/ pixels.data[dst + 2] = floorPixels[src + 2] * shade;
           /* Atualiza pixels.data. usando 255.
*/ pixels.data[dst + 3] = 255;
           /* Atualiza wx usando o resultado dessa expressão.
*/ wx += dist * stepRayX;
           /* Atualiza wy usando o resultado dessa expressão.
*/ wy += dist * stepRayY;
        }
      }
       /* Executa ctx.put Image Data com os valores definidos nessa parte.
*/ ctx.putImageData(pixels, 0, H / 2);
    }
     /* Essa declaração usa const para preparar depth, mantendo essas referências fixas.
*/ const  /* Aqui depth recebe uma instância de Float32Array.
*/ depth =  /* Cria uma instância de Float32Array para usar nesse recurso. */ new Float32Array(W);
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar x, permitindo atualizar esses valores depois.
*/ let  /* Aqui x recebe 0.
*/ x = 0; x < W;  /* Atualiza x usando 2. */ x += 2) {
       /* Essa declaração usa const para preparar angle, mantendo essas referências fixas.
*/ const  /* Aqui angle recebe o resultado dessa expressão.
*/ angle = player.a +  /* Executa Math.atan com os valores definidos nessa parte. */ Math.atan((x / W - .5) * 2 *  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov / 2));
       /* Essa declaração usa let para preparar dist e rx e ry, permitindo atualizar esses valores depois.
*/ let  /* Aqui dist recebe 0.05.
*/ dist = .05,
         /* Aqui rx recebe nenhum valor inicial.
*/ rx,
         /* Aqui ry recebe nenhum valor inicial.
*/ ry;
       /* Repete essa parte enquanto dist é menor que 32.
*/ while (dist < 32) {
         /* Atualiza rx usando o resultado dessa expressão.
*/ rx = player.x +  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle) * dist;
         /* Atualiza ry usando o resultado dessa expressão.
*/ ry = player.y +  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle) * dist;
         /* Esse teste confere se o resultado de solid está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* esse comando confere se a posição consultada encontra uma parede ou fica fora do mapa. */ solid(rx, ry))  /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
         /* Atualiza dist usando 0.04.
*/ dist += .04;
      }
       /* Atualiza dist usando o resultado de Math.cos.
*/ dist *=  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle - player.a);
       /* Atualiza depth.x usando o resultado dessa expressão.
*/ depth[x] =  /* Atualiza depth. usando dist. */ depth[x + 1] = dist;
       /* Essa declaração usa const para preparar h e top, mantendo essas referências fixas.
*/ const  /* Aqui h recebe o resultado de Math.min.
*/ h =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(H * 4, H / dist),
         /* Aqui top recebe o resultado dessa expressão.
*/ top = H / 2 - h / 2;
       /* Essa declaração usa const para preparar shade e edge, mantendo essas referências fixas.
*/ const  /* Aqui shade recebe o resultado de Math.max.
*/ shade =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(18, 105 - dist * 5),
         /* Aqui edge recebe o resultado dessa expressão.
*/ edge =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(rx % 1, ry % 1, 1 - rx % 1, 1 - ry % 1) < .05;
       /* Atualiza ctx.fill Style usando o resultado dessa expressão.
*/ ctx.fillStyle = 'rgb(' +  /* Arredonda o número para o inteiro mais próximo. */ Math.round(shade) + ',' +  /* Arredonda o número para o inteiro mais próximo. */ Math.round(shade * .75) + ',' +  /* Arredonda o número para o inteiro mais próximo. */ Math.round(shade * .8) + ')';
       /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(x, top, 2, h);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (images.wall?.complete && images.wall.naturalWidth) {
         /* Essa declaração usa const para preparar tex, mantendo essas referências fixas.
*/ const  /* Aqui tex recebe o resultado de Math.abs.
*/ tex =  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(( /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(rx -  /* Arredonda o número para o inteiro mais próximo. */ Math.round(rx)) < .06 ? ry : rx) % 1);
         /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(images.wall,  /* Arredonda o número para baixo. */ Math.floor(tex * 64), 0, 1, 64, x, top, 2, h);
         /* Atualiza ctx.fill Style usando o resultado dessa expressão.
*/ ctx.fillStyle = 'rgba(0,0,0,' +  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.8, dist / 22) + ')';
         /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(x, top, 2, h);
      }
       /* Atualiza ctx.fill Style usando 14101866.
*/ ctx.fillStyle = '#14101866';
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar r, permitindo atualizar esses valores depois.
*/ let  /* Aqui r recebe 0.
*/ r = 0; r < 8;  /* Aumenta r em um para atualizar o contador. */ r++)  /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(x, top + r * h / 8, 2,  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1, h / 100));
       /* Esse teste confere se edge está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (edge) {
         /* Atualiza ctx.fill Style usando 100c1555.
*/ ctx.fillStyle = '#100c1555';
         /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(x, top, 2, h);
      }
    }
     /* esse comando mostra o alcance do ataque em preparação sem revelar sinais através das paredes.
*/ threatFloor(depth,cue);
     /* Essa declaração usa const para preparar objects, mantendo essas referências fixas.
*/ const  /* Aqui objects recebe uma das duas alternativas, conforme o teste.
*/ objects = freeMode ? [{
       /* Guarda a posição horizontal desse elemento.
*/ x: 3.5,
       /* Guarda a posição vertical desse elemento.
*/ y: 4.5,
       /* Esse campo guarda img com images.candy.
*/ img: images.candy,
       /* Esse campo guarda size com 1.8.
*/ size: 1.8
    }, {
       /* Guarda a posição horizontal desse elemento.
*/ x: 17.5,
       /* Guarda a posição vertical desse elemento.
*/ y: 8.5,
       /* Esse campo guarda img com images.corpse.
*/ img: images.corpse,
       /* Esse campo guarda size com 1.8.
*/ size: 1.8
    },  /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...(!collected ? [{
       /* Guarda a posição horizontal desse elemento.
*/ x: 10.5,
       /* Guarda a posição vertical desse elemento.
*/ y: 4.5,
       /* Esse campo guarda img com images.sword.
*/ img: images.sword,
       /* Esse campo guarda size com 0.8.
*/ size: .8,
       /* Esse campo guarda low com true.
*/ low: true
    }] : [])] : [{
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...enemy,
       /* Esse campo guarda img com o resultado de enemy Image.
*/ img:  /* esse comando escolhe a pose de Beerus de acordo com movimento, preparo, ataque ou recuperação. */ enemyImage(),
       /* Esse campo guarda size com 2.7.
*/ size: 2.7
    },  /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ bullets.map( /* Essa função recebe b e devolve um objeto com os campos dessa parte. */ b => ({
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...b,
       /* Esse campo guarda orb com true.
*/ orb: true,
       /* Esse campo guarda size com 0.22.
*/ size: .22
    }))];
     /* Organiza a ordem dessa lista usando a comparação indicada.
*/ objects.sort( /* Essa função recebe a e b e devolve o resultado dessa expressão. */ (a, b) =>  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(b.x - player.x, b.y - player.y) -  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(a.x - player.x, a.y - player.y));
     /* Percorre cada valor de objects usando o nesta repetição.
*/ for ( /* Essa declaração usa const para preparar o, mantendo essas referências fixas.
*/ const  /* Aqui o recebe nenhum valor inicial.
*/ o of objects) {
       /* Essa declaração usa const para preparar dx e dy e angle, mantendo essas referências fixas.
*/ const  /* Aqui dx recebe o resultado dessa expressão.
*/ dx = o.x - player.x,
         /* Aqui dy recebe o resultado dessa expressão.
*/ dy = o.y - player.y,
         /* Aqui angle recebe o resultado dessa expressão.
*/ angle =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(dy, dx) - player.a;
       /* Essa declaração usa const para preparar da e distance e z, mantendo essas referências fixas.
*/ const  /* Aqui da recebe o resultado de Math.atan2.
*/ da =  /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle),  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)),
         /* Aqui distance recebe o resultado de Math.hypot.
*/ distance =  /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(dx, dy),
         /* Aqui z recebe o resultado dessa expressão.
*/ z = distance *  /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(da);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (z < .1 ||  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(da) > 1.1)  /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
       /* Essa declaração usa const para preparar size e cx, mantendo essas referências fixas.
*/ const  /* Aqui size recebe o resultado dessa expressão.
*/ size = H / z * o.size,
         /* Aqui cx recebe o resultado dessa expressão.
*/ cx = W / 2 +  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(da) /  /* Calcula a tangente do ângulo usada na projeção da cena. */ Math.tan(fov / 2) * W / 2;
       /* Essa declaração usa const para preparar cy, mantendo essas referências fixas.
*/ const  /* Aqui cy recebe o resultado dessa expressão.
*/ cy = H / 2 + H / z / 2 - (o.low ? size * .3 : size * .5);
       /* Esse teste confere se o.orb está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (o.orb) {
         /* Esse teste confere se depth é maior que z, e só entra nesse caminho quando a condição passa.
*/ if (depth[ /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(W - 1, cx | 0))] > z) {
           /* Essa declaração usa const para preparar orb Y e orb Size, mantendo essas referências fixas.
*/ const  /* Aqui orb Y recebe o resultado dessa expressão.
*/ orbY=H/2-H*.4/z, /* Aqui orb Size recebe o resultado de Math.max.
*/ orbSize= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(3,size);
           /* Essa declaração usa const para preparar tail, mantendo essas referências fixas.
*/ const  /* Aqui tail recebe o resultado de floor Point.
*/ tail= /* esse comando projeta uma posição do chão na tela a partir da câmera em primeira pessoa. */ floorPoint(o.x-o.vx*.085,o.y-o.vy*.085);
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(tail&&depth[ /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(W-1,tail.x|0))]>tail.z) {
             /* Atualiza ctx.stroke Style usando fa9e6e99.
*/ ctx.strokeStyle='#fa9e6e99'; /* Atualiza ctx.line Width usando o resultado de Math.max.
*/ ctx.lineWidth= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,orbSize*.28);
             /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath(); /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(tail.x,tail.y-H*.9/tail.z); /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(cx,orbY); /* Desenha o contorno do caminho usando o estilo atual.
*/ ctx.stroke();
          }
           /* Atualiza ctx.fill Style usando f46c5044.
*/ ctx.fillStyle = '#f46c5044';
           /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(cx-orbSize,orbY-orbSize,orbSize*2,orbSize*2);
           /* Atualiza ctx.fill Style usando ff7958.
*/ ctx.fillStyle = '#ff7958';
           /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(cx-orbSize/2,orbY-orbSize/2,orbSize,orbSize);
           /* Atualiza ctx.fill Style usando fff1cd.
*/ ctx.fillStyle = '#fff1cd';
           /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(cx-orbSize/4,orbY-orbSize/4,orbSize/2,orbSize/2);
        }
         /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
      }
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!o.img?.complete || !o.img.naturalWidth)  /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
       /* Essa declaração usa const para preparar width, mantendo essas referências fixas.
*/ const  /* Aqui width recebe o resultado dessa expressão.
*/ width = size * o.img.naturalWidth / o.img.naturalHeight;
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar sx, permitindo atualizar esses valores depois.
*/ let  /* Aqui sx recebe o resultado de Math.max.
*/ sx =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Arredonda o número para baixo. */ Math.floor(cx - width / 2)); sx <  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(W, cx + width / 2);  /* Aumenta sx em um para atualizar o contador. */ sx++) {
         /* Esse teste confere se depth.sx é menor que z, e só entra nesse caminho quando a condição passa.
*/ if (depth[sx] < z)  /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
         /* Essa declaração usa const para preparar source X, mantendo essas referências fixas.
*/ const  /* Aqui source X recebe o resultado dessa expressão.
*/ sourceX = (sx - (cx - width / 2)) / width * o.img.naturalWidth;
         /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(o.img, sourceX, 0, 1, o.img.naturalHeight, sx, cy - size / 2, 1, size);
      }
    }
     /* Atualiza ctx.line Width usando 1.
*/ ctx.lineWidth=1;
     /* Atualiza ctx.stroke Style usando ffffff9a.
*/ ctx.strokeStyle = '#ffffff9a';
     /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath();
     /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(W / 2 - 4, H / 2);
     /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(W / 2 + 4, H / 2);
     /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(W / 2, H / 2 - 4);
     /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(W / 2, H / 2 + 4);
     /* Desenha o contorno do caminho usando o estilo atual.
*/ ctx.stroke();
     /* Essa declaração usa const para preparar knife, mantendo essas referências fixas.
*/ const  /* Aqui knife recebe o resultado dessa expressão.
*/ knife=config.equipped==='faca' &&  /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('faca');
     /* Essa declaração usa const para preparar hand, mantendo essas referências fixas.
*/ const  /* Aqui hand recebe o resultado de hand Image.
*/ hand =  /* esse comando escolhe a pose das mãos e mantém a espada no chão até ela ser recolhida na cena livre. */ handImage();
     /* Atualiza rendered Hand usando o resultado dessa expressão.
*/ renderedHand=hand?.src||null;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (hand?.complete && hand.naturalWidth) {
                                                                              
       /* Essa declaração usa const para preparar scale, mantendo essas referências fixas.
*/ const  /* Aqui scale recebe o resultado de Math.min.
*/ scale= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(W*.96/hand.naturalWidth,H*.64/hand.naturalHeight);
       /* Essa declaração usa const para preparar width e height, mantendo essas referências fixas.
*/ const  /* Aqui width recebe o resultado dessa expressão.
*/ width=hand.naturalWidth*scale, /* Aqui height recebe o resultado dessa expressão.
*/ height=hand.naturalHeight*scale;
       /* Essa declaração usa const para preparar moving, mantendo essas referências fixas.
*/ const  /* Aqui moving recebe o resultado dessa expressão.
*/ moving=keys.up||keys.down||keys.left||keys.right;
       /* Essa declaração usa const para preparar bob, mantendo essas referências fixas.
*/ const  /* Aqui bob recebe uma das duas alternativas, conforme o teste.
*/ bob=moving&&! /* esse comando confere a preferência de movimento antes de desenhar tremores e oscilações. */ reducedMotion()? /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(elapsed*(keys.run?11:7))*H*.006:0;
       /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(hand,(W-width)/2,H-height+H*.015+bob,width,height);
    }
     /* Essa declaração usa const para preparar cut, mantendo essas referências fixas.
*/ const  /* Aqui cut recebe images.
*/ cut=images[(knife?'faca':'espada')+'Cut'+ /* Escolhe o menor valor entre os valores recebidos. */ Math.min(2, /* Arredonda o número para baixo. */ Math.floor(attackAge/.1))];
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!freeMode && attackAge < .3 && cut?.complete && cut.naturalWidth && (knife|| /* Confere se esse valor está presente na lista ou no texto. */ config.items.includes('espada'))) {
       /* Atualiza ctx.global Alpha usando o resultado dessa expressão.
*/ ctx.globalAlpha = 1 - attackAge / .3;
       /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(cut, W * .2, H * .2, W * .6, H * .5);
       /* Atualiza ctx.global Alpha usando 1.
*/ ctx.globalAlpha = 1;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!freeMode&&enemy.phase==='attack'&& /* Calcula a distância a partir dos deslocamentos recebidos. */ Math.hypot(enemy.x-player.x,enemy.y-player.y)<4&& /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs( /* esse comando calcula a diferença entre dois ângulos sem dar uma volta desnecessária na direção. */ angleDiff( /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2(enemy.y-player.y,enemy.x-player.x),player.a))<.6&& /* esse comando confere se o protagonista consegue ver o ponto consultado sem uma parede no caminho. */ lineClear(enemy.x,enemy.y)) {
       /* Essa declaração usa const para preparar index e fx, mantendo essas referências fixas.
*/ const  /* Aqui index recebe enemy.pattern.
*/ index=({ /* Esse campo guarda 0 com 2.
*/ 0:2, /* Esse campo guarda 1 com 0.
*/ 1:0, /* Esse campo guarda 2 com 3.
*/ 2:3, /* Esse campo guarda 4 com 1.
*/ 4:1})[enemy.pattern],  /* Aqui fx recebe images.
*/ fx=images['attackEffect'+index];
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(fx?.complete&&fx.naturalWidth){ /* Atualiza ctx.global Alpha usando 0.45.
*/ ctx.globalAlpha=.45; /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(fx,W*.15,H*.1,W*.7,H*.7); /* Atualiza ctx.global Alpha usando 1.
*/ ctx.globalAlpha=1;}
    }
     /* esse comando desenha os sinais de impacto, perigo e recuperação para orientar a luta.
*/ combatFeedback(cue);
  }
   /* esse comando mede o tempo entre quadros e atualiza a arena somente enquanto a luta estiver ativa e sem pausa.
*/ function loop(now) {
     /* Esse teste confere se active não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!active)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar dt, mantendo essas referências fixas.
*/ const  /* Aqui dt recebe o resultado de Math.max.
*/ dt =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.04, (now - last) / 1000));
     /* Atualiza last usando now.
*/ last = now;
     /* Esse teste confere se paused não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!paused) {
       /* esse comando avança movimento, fôlego, projéteis e comportamento do inimigo pelo tempo passado.
*/ tick(dt);
       /* esse comando desenha cenário, profundidade, inimigo, objetos, mãos e avisos da arena em cada quadro.
*/ draw();
    }
     /* Esse teste confere se active está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (active)  /* Atualiza frame Id usando o resultado de request Animation Frame.
*/ frameId =  /* Agenda a atualização visual para o próximo quadro do navegador. */ requestAnimationFrame(loop);
  }
   /* Escuta o evento mousemove e liga esse evento à função definida aqui.
*/ document.addEventListener('mousemove',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (active && !paused && document.pointerLockElement === canvas)  /* Atualiza player.a usando o resultado dessa expressão.
*/ player.a += e.movementX * .003;
  });
   /* Escuta o evento keydown e liga esse evento à função definida aqui.
*/ document.addEventListener('keydown', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ event=>{
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!active||paused||! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda Arrow Left.
*/ 'ArrowLeft', /* Essa posição da lista guarda Arrow Right.
*/ 'ArrowRight'].includes(event.key)) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza keys. usando true.
*/ keys[event.key==='ArrowLeft'?'turnLeft':'turnRight']=true;
     /* Impede a ação padrão desse evento do navegador.
*/ event.preventDefault();
  });
   /* Escuta o evento keyup e liga esse evento à função definida aqui.
*/ document.addEventListener('keyup', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ event=>{
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(event.key==='ArrowLeft'||event.key==='ArrowRight') /* Atualiza keys. usando false.
*/ keys[event.key==='ArrowLeft'?'turnLeft':'turnRight']=false;
  });
   /* Escuta o evento visibilitychange e liga esse evento à função definida aqui.
*/ document.addEventListener('visibilitychange',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys = {};
     /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
  });
   /* Escuta o evento blur e liga esse evento à função definida aqui.
*/ window.addEventListener('blur',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Atualiza keys usando um objeto com os campos dessa parte.
*/ keys = {};
     /* esse comando encerra o arraste atual e libera a captura do ponteiro quando necessário.
*/ cancelDrag();
  });
   /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return {
     /* Aqui disponibiliza a operação start para os outros módulos. esse comando inicia a arena com jogador, inimigo, câmera e controles no estado esperado para a cena.
*/ start,
     /* Aqui disponibiliza a operação stop para os outros módulos. esse comando encerra a arena, libera o arraste da câmera e interrompe a pressão sonora.
*/ stop,
     /* Esse campo guarda pause com set Pause.
*/ pause: setPause,
     /* Aqui disponibiliza a operação press para os outros módulos. esse comando registra se uma ação de movimento ou defesa está sendo mantida.
*/ press,
     /* Aqui disponibiliza a operação action para os outros módulos. esse comando resolve ataques, luz e coleta de objetos conforme equipamento, alcance, fôlego e fase da arena.
*/ action,
     /* esse comando troca o equipamento selecionado na configuração atual da arena.
*/ equip /* esse comando troca o equipamento selecionado na configuração atual da arena. */ (id) {  /* Esse teste confere se config está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(config)  /* Atualiza config.equipped usando id.
*/ config.equipped=id; },
     /* esse comando gira a câmera horizontalmente quando a arena está ativa e sem pausa.
*/ look /* esse comando gira a câmera horizontalmente quando a arena está ativa e sem pausa. */ (dx) {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (active && !paused)  /* Atualiza player.a usando o resultado de Math.atan2.
*/ player.a= /* Calcula o ângulo usando as diferenças vertical e horizontal. */ Math.atan2( /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(player.a+dx*.006), /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(player.a+dx*.006));
    },
     /* Esse campo guarda is Active com uma função para executar quando for chamada.
*/ isActive:  /* esse comando informa se o motor da arena ainda está funcionando. */ () => active,
     /* Esse campo guarda state com uma função para executar quando for chamada.
*/ state:  /* esse comando fornece as informações atuais de jogador, inimigo, equipamento, perigos e resolução. */ () => ({
       /* aqui ficam posição, direção, vida e fôlego do protagonista na arena.
*/ player,
       /* aqui ficam vida, posição, fase e próximo padrão de Beerus.
*/ enemy,
       /* Esse campo guarda free Mode com free Mode.
*/ freeMode,
       /* Esse campo guarda collected com collected.
*/ collected,
       /* Esse campo guarda paused com paused.
*/ paused,
       /* Esse campo guarda enemy Sprite com uma das duas alternativas, conforme o teste.
*/ enemySprite:enemy&&player? /* esse comando escolhe a pose de Beerus de acordo com movimento, preparo, ataque ou recuperação. */ enemyImage()?.src:null,
       /* aqui fica o equipamento selecionado para a próxima ação do protagonista.
*/ equipped:config?.equipped,
       /* aqui fica a imagem das mãos que acabou de ser desenhada na arena.
*/ handSprite:renderedHand,
       /* Esse campo guarda guard Broken com o resultado dessa expressão.
*/ guardBroken:guardBroken>0,
       /* Esse campo guarda stamina Delay com stamina Delay.
*/ staminaDelay,
       /* Esse campo guarda light Cooldown com light Cooldown.
*/ lightCooldown,
       /* Esse campo guarda attack Cooldown com attack Cooldown.
*/ attackCooldown,
       /* Esse campo guarda elapsed com elapsed.
*/ elapsed,
       /* Esse campo guarda threat com uma das duas alternativas, conforme o teste.
*/ threat:enemy&&player? /* esse comando calcula o perigo do golpe usando o mesmo alcance e a mesma linha de visão da luta. */ threatInfo():null,
       /* Esse campo guarda feedback com um objeto com os campos dessa parte.
*/ feedback:{ /* Esse campo guarda angle com impact Angle.
*/ angle:impactAngle, /* Esse campo guarda blocked com impact Blocked.
*/ blocked:impactBlocked, /* Esse campo guarda remaining com hit.
*/ remaining:hit},
       /* Esse campo guarda reduced com o resultado de reduced Motion.
*/ reduced: /* esse comando confere a preferência de movimento antes de desenhar tremores e oscilações. */ reducedMotion(),
       /* aqui ficam os projéteis ativos que ainda precisam se mover e verificar impacto.
*/ bullets: /* Monta uma nova lista transformando cada posição da lista original. */ bullets.map( /* Essa função recebe b e devolve um objeto com os campos dessa parte. */ b=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...b})),
       /* Esse campo guarda dragging com o resultado dessa expressão.
*/ dragging:dragPointer!==null,
       /* aqui ficam a largura e a altura usadas no desenho do canvas.
*/ resolution:{ /* Define a largura usada nesse cálculo ou desenho.
*/ width:W, /* Define a altura usada nesse cálculo ou desenho.
*/ height:H}
    }),
     /* Esse campo guarda get Map com uma função para executar quando for chamada.
*/ getMap:  /* esse comando entrega a grade de paredes e espaços livres usada pela arena. */ () => map
  };
})();
