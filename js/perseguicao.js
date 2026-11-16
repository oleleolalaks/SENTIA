 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';
                                                                                           
 /* Atualiza window.Perseguicao usando o resultado dessa chamada de função.
*/ window.Perseguicao =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa let para preparar canvas e ctx e image e previous Image e monster e resize Observer e shadow Mask e shadow Source, permitindo atualizar esses valores depois.
*/ let  /* Aqui canvas recebe nenhum valor inicial.
*/ canvas,  /* Aqui ctx recebe nenhum valor inicial.
*/ ctx,  /* Aqui image recebe nenhum valor inicial.
*/ image,  /* Aqui previous Image recebe nenhum valor inicial.
*/ previousImage,  /* Aqui monster recebe nenhum valor inicial.
*/ monster,  /* Aqui resize Observer recebe nenhum valor inicial.
*/ resizeObserver,  /* Aqui shadow Mask recebe nenhum valor inicial.
*/ shadowMask,  /* Aqui shadow Source recebe nenhum valor inicial.
*/ shadowSource;
   /* Essa declaração usa let para preparar time e last Source e last Monster e last State, permitindo atualizar esses valores depois.
*/ let  /* Aqui time recebe 0.
*/ time = 0,  /* Aqui last Source recebe um texto vazio.
*/ lastSource = '',  /* Aqui last Monster recebe um texto vazio.
*/ lastMonster = '',  /* Aqui last State recebe um valor vazio.
*/ lastState = null;
   /* Essa declaração usa let para preparar transition Age e previous Zoom e feedback Age e feedback Key e feedback e last Feedback Left, permitindo atualizar esses valores depois.
*/ let  /* Aqui transition Age recebe 1.
*/ transitionAge = 1,  /* Aqui previous Zoom recebe 1.
*/ previousZoom = 1,  /* Aqui feedback Age recebe 2.
*/ feedbackAge = 2,  /* Aqui feedback Key recebe um texto vazio.
*/ feedbackKey = '',  /* Aqui feedback recebe um texto vazio.
*/ feedback = '',  /* Aqui last Feedback Left recebe 0.
*/ lastFeedbackLeft = 0;
   /* Essa declaração usa let para preparar active e proximity e tension e surge, permitindo atualizar esses valores depois.
*/ let  /* Aqui active recebe false.
*/ active = false,  /* Aqui proximity recebe 0.
*/ proximity = 0,  /* Aqui tension recebe 0.
*/ tension = 0,  /* Aqui surge recebe 0.
*/ surge = 0;
   /* Essa declaração usa let para preparar glimpse Age e next Glimpse At e glimpse Side e glimpse Count, permitindo atualizar esses valores depois.
*/ let  /* Aqui glimpse Age recebe 2.
*/ glimpseAge = 2,  /* Aqui next Glimpse At recebe 0.5.
*/ nextGlimpseAt = .5,  /* Aqui glimpse Side recebe 1.
*/ glimpseSide = 1,  /* Aqui glimpse Count recebe 0.
*/ glimpseCount = 0;
   /* Essa declaração usa let para preparar view, permitindo atualizar esses valores depois.
*/ let  /* Aqui view recebe um objeto com os campos dessa parte.
*/ view = { /* Esse campo guarda zoom com 1.
*/ zoom:1};
   /* Essa declaração usa const para preparar clamp, mantendo essas referências fixas.
*/ const  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido.
*/ clamp =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ (value, min, max) =>  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(min,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(max,  /* Confere se o valor é um número finito. */ Number.isFinite(value) ? value : min));
   /* Essa declaração usa const para preparar smooth, mantendo essas referências fixas.
*/ const  /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves.
*/ smooth =  /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves. */ value => { /* Essa declaração usa const para preparar x, mantendo essas referências fixas.
*/ const  /* Aqui x recebe o resultado de clamp.
*/ x =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(value, 0, 1);  /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return x*x*(3-2*x);};
   /* Essa declaração usa const para preparar follow, mantendo essas referências fixas.
*/ const  /* esse comando aproxima um valor do destino de acordo com o tempo para evitar saltos entre quadros.
*/ follow =  /* esse comando aproxima um valor do destino de acordo com o tempo para evitar saltos entre quadros. */ (value, target, dt, speed) => value + (target-value)*(1- /* Calcula a exponencial usada nessa variação ou suavização. */ Math.exp(-dt*speed));

   /* esse comando prepara a câmera da perseguição e preserva o movimento quando só o corredor está mudando.
*/ function start(source, presence) {
     /* Essa declaração usa const para preparar next Canvas, mantendo essas referências fixas.
*/ const  /* Aqui next Canvas recebe o resultado de document.query Selector.
*/ nextCanvas =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector('#chase-canvas');
     /* Esse teste confere se next Canvas não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!nextCanvas)  /* Encerra essa função sem devolver outro valor.
*/ return;
                                                                                     
     /* Essa declaração usa const para preparar continuing, mantendo essas referências fixas.
*/ const  /* Aqui continuing recebe o resultado dessa expressão.
*/ continuing = active && canvas === nextCanvas && !nextCanvas.hidden;
     /* Atualiza canvas usando next Canvas.
*/ canvas = nextCanvas;
     /* Atualiza ctx usando o resultado de canvas.get Context.
*/ ctx =  /* Obtém o contexto usado para desenhar no canvas. */ canvas.getContext('2d');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ canvas.hidden = false;
     /* Esse teste confere se continuing não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!continuing) {
       /* Atualiza time usando 0.
*/ time = 0;  /* Atualiza last State usando um valor vazio.
*/ lastState = null;  /* Atualiza previous Image usando um valor vazio.
*/ previousImage = null;  /* Atualiza image usando um valor vazio.
*/ image = null;  /* Atualiza monster usando um valor vazio.
*/ monster = null;
       /* Atualiza shadow Mask usando um valor vazio.
*/ shadowMask = null;  /* Atualiza shadow Source usando um valor vazio.
*/ shadowSource = null;
       /* Atualiza last Source usando um texto vazio.
*/ lastSource = '';  /* Atualiza last Monster usando um texto vazio.
*/ lastMonster = '';  /* Atualiza transition Age usando 1.
*/ transitionAge = 1;  /* Atualiza feedback Age usando 2.
*/ feedbackAge = 2;  /* Atualiza feedback Key usando um texto vazio.
*/ feedbackKey = '';  /* Atualiza feedback usando um texto vazio.
*/ feedback = '';  /* Atualiza last Feedback Left usando 0.
*/ lastFeedbackLeft = 0;
       /* Atualiza proximity usando 0.
*/ proximity = 0;  /* Atualiza tension usando 0.
*/ tension = 0;  /* Atualiza surge usando 0.
*/ surge = 0;  /* Atualiza glimpse Age usando 2.
*/ glimpseAge = 2;  /* Atualiza next Glimpse At usando 0.5.
*/ nextGlimpseAt = .5;  /* Atualiza glimpse Side usando 1.
*/ glimpseSide = 1;  /* Atualiza glimpse Count usando 0.
*/ glimpseCount = 0;
       /* Atualiza view usando um objeto com os campos dessa parte.
*/ view = { /* Esse campo guarda zoom com 1.
*/ zoom:1};
    }
     /* Atualiza active usando true.
*/ active = true;
     /* esse comando troca o corredor e a presença enquanto mantém a imagem anterior durante a transição.
*/ setImages(source, presence);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!resizeObserver && typeof ResizeObserver !== 'undefined') {
       /* Atualiza resize Observer usando uma instância de Resize Observer.
*/ resizeObserver =  /* Cria uma instância de Resize Observer para usar nesse recurso. */ new ResizeObserver(resizeCanvas);
       /* Começa a observar as mudanças desse elemento.
*/ resizeObserver.observe(canvas);
    }
     /* esse comando adapta a resolução ao espaço disponível e redesenha a câmera sem avançar o jogo.
*/ resizeCanvas();
     /* Atualiza ctx.image Smoothing Enabled usando false.
*/ ctx.imageSmoothingEnabled = false;
     /* Esse teste confere se continuing não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!continuing) {
       /* Atualiza ctx.fill Style usando 080a0d.
*/ ctx.fillStyle = '#080a0d';
       /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
   /* esse comando adapta a resolução ao espaço disponível e redesenha a câmera sem avançar o jogo.
*/ function resizeCanvas() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!canvas || canvas.hidden)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar rect, mantendo essas referências fixas.
*/ const  /* Aqui rect recebe o resultado de canvas.get Bounding Client Rect.
*/ rect =  /* Mede a posição e o tamanho real do elemento na tela. */ canvas.getBoundingClientRect();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (rect.width < 1 || rect.height < 1)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar scale, mantendo essas referências fixas.
*/ const  /* Aqui scale recebe o resultado de Math.min.
*/ scale =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1, 640 / rect.width, 480 / rect.height);
     /* Essa declaração usa const para preparar width, mantendo essas referências fixas.
*/ const  /* Aqui width recebe o resultado de Math.max.
*/ width =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,  /* Arredonda o número para o inteiro mais próximo. */ Math.round(rect.width * scale));
     /* Essa declaração usa const para preparar height, mantendo essas referências fixas.
*/ const  /* Aqui height recebe o resultado de Math.max.
*/ height =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,  /* Arredonda o número para o inteiro mais próximo. */ Math.round(rect.height * scale));
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (canvas.width === width && canvas.height === height)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza canvas.width usando width.
*/ canvas.width = width;  /* Atualiza canvas.height usando height.
*/ canvas.height = height;
     /* Atualiza ctx.image Smoothing Enabled usando false.
*/ ctx.imageSmoothingEnabled = false;
                                                                         
     /* Esse teste confere se last State está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (lastState)  /* esse comando atualiza o desenho da corrida, da ameaça e da lanterna usando o estado da perseguição.
*/ draw(0, lastState);
  }
   /* esse comando troca o corredor e a presença enquanto mantém a imagem anterior durante a transição.
*/ function setImages(source, presence) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (source && source !== lastSource) {
       /* Atualiza previous Image usando uma das duas alternativas, conforme o teste.
*/ previousImage = image?.complete && image.naturalWidth ? image : previousImage;
       /* Atualiza previous Zoom usando o resultado dessa expressão.
*/ previousZoom = view.zoom || 1;
       /* Atualiza image usando uma instância de Image.
*/ image =  /* Cria uma instância de Image para usar nesse recurso. */ new Image();  /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src = source;  /* Atualiza last Source usando source.
*/ lastSource = source;
       /* Atualiza transition Age usando uma das duas alternativas, conforme o teste.
*/ transitionAge = previousImage ? 0 : 1;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (presence && presence !== lastMonster) {
       /* Atualiza monster usando uma instância de Image.
*/ monster =  /* Cria uma instância de Image para usar nesse recurso. */ new Image();  /* Escolhe o arquivo que esse elemento deve carregar.
*/ monster.src = presence;  /* Atualiza last Monster usando presence.
*/ lastMonster = presence;
       /* Atualiza shadow Mask usando um valor vazio.
*/ shadowMask = null;  /* Atualiza shadow Source usando um valor vazio.
*/ shadowSource = null;
    }
  }
   /* esse comando recorta e aproxima a arte do corredor para criar movimento e profundidade.
*/ function drawScenery(source, zoom, width, height, options = {}) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!source?.complete || !source.naturalWidth)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar iw e ih, mantendo essas referências fixas.
*/ const  /* Aqui iw recebe source.natural Width.
*/ iw = source.naturalWidth,  /* Aqui ih recebe source.natural Height.
*/ ih = source.naturalHeight;
                                                                                         
     /* Essa declaração usa const para preparar pad X e pad Y, mantendo essas referências fixas.
*/ const  /* Aqui pad X recebe o resultado dessa expressão.
*/ padX =  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(options.shift || 0)+2,  /* Aqui pad Y recebe o resultado dessa expressão.
*/ padY =  /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(options.bob || 0)+2;
     /* Essa declaração usa const para preparar render Width e render Height, mantendo essas referências fixas.
*/ const  /* Aqui render Width recebe o resultado dessa expressão.
*/ renderWidth = width+padX*2,  /* Aqui render Height recebe o resultado dessa expressão.
*/ renderHeight = height+padY*2;
     /* Essa declaração usa const para preparar scale, mantendo essas referências fixas.
*/ const  /* Aqui scale recebe o resultado dessa expressão.
*/ scale =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(renderWidth / iw, renderHeight / ih) * zoom;
     /* Essa declaração usa const para preparar cw e ch, mantendo essas referências fixas.
*/ const  /* Aqui cw recebe o resultado dessa expressão.
*/ cw = renderWidth / scale,  /* Aqui ch recebe o resultado dessa expressão.
*/ ch = renderHeight / scale;
     /* Essa declaração usa const para preparar vx e vy, mantendo essas referências fixas.
*/ const  /* Aqui vx recebe o resultado dessa expressão.
*/ vx = iw *  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(.5 + (options.pan || 0), .25, .75),  /* Aqui vy recebe o resultado dessa expressão.
*/ vy = ih * .45;
     /* Essa declaração usa const para preparar sx, mantendo essas referências fixas.
*/ const  /* Aqui sx recebe o resultado de clamp.
*/ sx =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(vx - cw * .5, 0,  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, iw - cw));
     /* Essa declaração usa const para preparar sy, mantendo essas referências fixas.
*/ const  /* Aqui sy recebe o resultado de clamp.
*/ sy =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(vy - ch * .46, 0,  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, ih - ch));
     /* Guarda o estado atual do desenho para restaurar depois.
*/ ctx.save();
     /* Atualiza ctx.global Alpha usando o resultado dessa expressão.
*/ ctx.globalAlpha = options.alpha ?? 1;
     /* Desloca a origem das coordenadas usadas pelos próximos desenhos.
*/ ctx.translate(options.shift || 0, options.bob || 0);
     /* Esse teste confere se options.reverse está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (options.reverse) { /* Desloca a origem das coordenadas usadas pelos próximos desenhos.
*/ ctx.translate(width, 0); /* Ajusta a escala usada pelos próximos desenhos.
*/ ctx.scale(-1, 1);}
     /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(source, sx, sy, cw, ch, -padX, -padY, renderWidth, renderHeight);
     /* Restaura o estado do desenho guardado anteriormente.
*/ ctx.restore();
  }
   /* esse comando cria uma silhueta escura a partir da arte aprovada para desenhar a sombra do perseguidor.
*/ function presenceMask() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!monster?.complete || !monster.naturalWidth)  /* Devolve um valor vazio e encerra essa chamada da função.
*/ return null;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (shadowSource === monster && shadowMask)  /* Devolve shadow Mask e encerra essa chamada da função.
*/ return shadowMask;
     /* Atualiza shadow Mask usando o resultado de document.create Element.
*/ shadowMask =  /* Cria um elemento HTML do tipo canvas. */ document.createElement('canvas');
     /* Atualiza shadow Mask.width usando monster.natural Width.
*/ shadowMask.width = monster.naturalWidth;  /* Atualiza shadow Mask.height usando monster.natural Height.
*/ shadowMask.height = monster.naturalHeight;
     /* Essa declaração usa const para preparar mask, mantendo essas referências fixas.
*/ const  /* Aqui mask recebe o resultado de shadow Mask.get Context.
*/ mask =  /* Obtém o contexto usado para desenhar no canvas. */ shadowMask.getContext('2d');
     /* Desenha a imagem ou o recorte indicado no canvas.
*/ mask.drawImage(monster, 0, 0);
     /* Atualiza mask.global Composite Operation usando source in.
*/ mask.globalCompositeOperation = 'source-in';
     /* Atualiza mask.fill Style usando 020308.
*/ mask.fillStyle = '#020308';  /* Preenche a área retangular com a cor atual do desenho.
*/ mask.fillRect(0, 0, shadowMask.width, shadowMask.height);
     /* Atualiza shadow Source usando monster.
*/ shadowSource = monster;
     /* Devolve shadow Mask e encerra essa chamada da função.
*/ return shadowMask;
  }
   /* esse comando desenha sombra e aparições na periferia sem bloquear o caminho à frente.
*/ function drawForwardPresence(width, height, strength, glimpse, side, reduced) {
     /* Essa declaração usa const para preparar mask, mantendo essas referências fixas.
*/ const  /* Aqui mask recebe o resultado de presence Mask.
*/ mask =  /* esse comando cria uma silhueta escura a partir da arte aprovada para desenhar a sombra do perseguidor. */ presenceMask();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!mask || strength < .04)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda shadow com false.
*/ shadow:false,  /* Esse campo guarda periphery com false.
*/ periphery:false,  /* Esse campo guarda reach com 0.
*/ reach:0};
                                                                           
                                                                            
     /* Essa declaração usa const para preparar reach, mantendo essas referências fixas.
*/ const  /* Aqui reach recebe o resultado dessa expressão.
*/ reach = .15 + strength*.34;
     /* Essa declaração usa const para preparar shadow Height e shadow Width, mantendo essas referências fixas.
*/ const  /* Aqui shadow Height recebe o resultado dessa expressão.
*/ shadowHeight = height*reach/.38,  /* Aqui shadow Width recebe o resultado dessa expressão.
*/ shadowWidth = shadowHeight*mask.width/mask.height;
     /* Guarda o estado atual do desenho para restaurar depois.
*/ ctx.save();
     /* Atualiza ctx.global Alpha usando o resultado dessa expressão.
*/ ctx.globalAlpha = .22 + strength*.47;
     /* Desloca a origem das coordenadas usadas pelos próximos desenhos.
*/ ctx.translate(width*(.5+side*.015), height*1.04);
     /* Executa ctx.transform com os valores definidos nessa parte.
*/ ctx.transform(1, 0, side*.09, .38, 0, 0);
     /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(mask, -shadowWidth*.5, -shadowHeight, shadowWidth, shadowHeight);
     /* Restaura o estado do desenho guardado anteriormente.
*/ ctx.restore();
     /* Esse teste confere se glimpse é maior que 0.01, e só entra nesse caminho quando a condição passa.
*/ if (glimpse > .01) {
                                                                                           
       /* Essa declaração usa const para preparar edge Width, mantendo essas referências fixas.
*/ const  /* Aqui edge Width recebe o resultado dessa expressão.
*/ edgeWidth = width*(width < height ? .13 : .15);
       /* Essa declaração usa const para preparar body Height, mantendo essas referências fixas.
*/ const  /* Aqui body Height recebe o resultado dessa expressão.
*/ bodyHeight = height*(.73+strength*.19);
       /* Essa declaração usa const para preparar body Width, mantendo essas referências fixas.
*/ const  /* Aqui body Width recebe o resultado dessa expressão.
*/ bodyWidth = bodyHeight*monster.naturalWidth/monster.naturalHeight;
       /* Essa declaração usa const para preparar head X, mantendo essas referências fixas.
*/ const  /* Aqui head X recebe uma das duas alternativas, conforme o teste.
*/ headX = side < 0 ? edgeWidth*.55 : width-edgeWidth*.55;
       /* Essa declaração usa const para preparar x, mantendo essas referências fixas.
*/ const  /* Aqui x recebe o resultado dessa expressão.
*/ x = headX-bodyWidth*.68+(reduced?0:side*(1-glimpse)*edgeWidth*.4);
       /* Guarda o estado atual do desenho para restaurar depois.
*/ ctx.save();
       /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath(); /* Executa ctx.rect com os valores definidos nessa parte.
*/ ctx.rect(side<0?0:width-edgeWidth, height*.12, edgeWidth, height*.69); /* Restringe os próximos desenhos à região definida por esse caminho.
*/ ctx.clip();
       /* Atualiza ctx.global Alpha usando o resultado dessa expressão.
*/ ctx.globalAlpha = glimpse*(.55+strength*.26);
       /* Atualiza ctx.filter usando brightness 1.7.
*/ ctx.filter = 'brightness(1.7)';
                                                                                                 
       /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(monster, x, height*.91-bodyHeight, bodyWidth, bodyHeight);
       /* Restaura o estado do desenho guardado anteriormente.
*/ ctx.restore();
    }
     /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda shadow com true.
*/ shadow:true, /* Esse campo guarda periphery com o resultado dessa expressão.
*/ periphery:glimpse>.01, /* Esse campo guarda reach com reach.
*/ reach};
  }
   /* esse comando atualiza o desenho da corrida, da ameaça e da lanterna usando o estado da perseguição.
*/ function draw(dt, state = {}) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!ctx || canvas.hidden)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza dt usando o resultado de clamp.
*/ dt =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(dt, 0, .1);
     /* Essa declaração usa const para preparar first Frame, mantendo essas referências fixas.
*/ const  /* Aqui first Frame recebe a negação de last State.
*/ firstFrame = !lastState;
     /* Atualiza last State usando um objeto com os campos dessa parte.
*/ lastState = { /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...state};  /* Atualiza time usando dt.
*/ time += dt;  /* Atualiza feedback Age usando dt.
*/ feedbackAge += dt;  /* Atualiza glimpse Age usando dt.
*/ glimpseAge += dt;
     /* Essa declaração usa const para preparar width e height, mantendo essas referências fixas.
*/ const  /* Aqui width recebe canvas.width.
*/ width = canvas.width,  /* Aqui height recebe canvas.height.
*/ height = canvas.height;
     /* Essa declaração usa const para preparar progress, mantendo essas referências fixas.
*/ const  /* Aqui progress recebe o resultado de clamp.
*/ progress =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(( /* Converte esse valor para número. */ Number(state.progress) || 0) /  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.01,  /* Converte esse valor para número. */ Number(state.distance) || 1), 0, 1);
     /* Essa declaração usa const para preparar danger, mantendo essas referências fixas.
*/ const  /* Aqui danger recebe o resultado de clamp.
*/ danger =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(( /* Converte esse valor para número. */ Number(state.danger) || 0) /  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.1,  /* Converte esse valor para número. */ Number(state.dangerMax) || 8), 0, 1);
     /* Essa declaração usa const para preparar requested Surge, mantendo essas referências fixas.
*/ const  /* Aqui requested Surge recebe o resultado de clamp.
*/ requestedSurge =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp( /* Converte esse valor para número. */ Number(state.surge) || 0, 0, 1);
     /* Essa declaração usa const para preparar requested Proximity, mantendo essas referências fixas.
*/ const  /* Aqui requested Proximity recebe uma das duas alternativas, conforme o teste.
*/ requestedProximity =  /* Confere se o valor é um número finito. */ Number.isFinite(state.proximity) ?  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(state.proximity,0,1) :  /* Escolhe o maior valor entre os valores recebidos. */ Math.max( /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves. */ smooth((danger-.3)/.7),state.catchingUp ? .66 : 0);
     /* Essa declaração usa const para preparar requested Tension, mantendo essas referências fixas.
*/ const  /* Aqui requested Tension recebe o resultado de Math.max.
*/ requestedTension =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(danger,  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(state.threatCue || 0, 0, 1),requestedProximity*.9);
                                                                                    
     /* Atualiza proximity usando uma das duas alternativas, conforme o teste.
*/ proximity = firstFrame ? requestedProximity :  /* esse comando aproxima um valor do destino de acordo com o tempo para evitar saltos entre quadros. */ follow(proximity,requestedProximity,dt,requestedProximity>proximity?5:2.4);
     /* Atualiza tension usando uma das duas alternativas, conforme o teste.
*/ tension = firstFrame ? requestedTension :  /* esse comando aproxima um valor do destino de acordo com o tempo para evitar saltos entre quadros. */ follow(tension,requestedTension,dt,requestedTension>tension?4:1.8);
     /* Atualiza surge usando uma das duas alternativas, conforme o teste.
*/ surge = firstFrame ? requestedSurge :  /* esse comando aproxima um valor do destino de acordo com o tempo para evitar saltos entre quadros. */ follow(surge,requestedSurge,dt,requestedSurge>surge?5:2.5);
     /* Essa declaração usa const para preparar pressure, mantendo essas referências fixas.
*/ const  /* Aqui pressure recebe o resultado de clamp.
*/ pressure =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(tension+surge*.08,0,1);
     /* Essa declaração usa const para preparar running, mantendo essas referências fixas.
*/ const  /* Aqui running recebe o resultado dessa expressão.
*/ running = !!state.running && !state.waiting;
     /* Essa declaração usa const para preparar reduced, mantendo essas referências fixas.
*/ const  /* Aqui reduced recebe a negação de a negação de state.reduced.
*/ reduced = !!state.reduced;
     /* Essa declaração usa const para preparar back, mantendo essas referências fixas.
*/ const  /* Aqui back recebe a negação de a negação de state.looking Back.
*/ back = !!state.lookingBack;
     /* Essa declaração usa const para preparar cue, mantendo essas referências fixas.
*/ const  /* Aqui cue recebe o resultado dessa expressão.
*/ cue = state.turnFeedback || '';
     /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe o resultado de .join.
*/ key =  /* Junta as partes da lista em um texto. */ [cue, state.feedbackId ?? '', state.index ?? '', lastSource].join('|');
     /* Essa declaração usa const para preparar feedback Left, mantendo essas referências fixas.
*/ const  /* Aqui feedback Left recebe o resultado de clamp.
*/ feedbackLeft =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp( /* Converte esse valor para número. */ Number(state.feedbackLeft) || 0, 0, 2);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (cue && (key !== feedbackKey || feedbackLeft > lastFeedbackLeft + .05)) { /* Atualiza feedback Key usando key.
*/ feedbackKey = key;  /* Atualiza feedback usando cue.
*/ feedback = cue;  /* Atualiza feedback Age usando 0.
*/ feedbackAge = 0;}
     /* Atualiza last Feedback Left usando feedback Left.
*/ lastFeedbackLeft = feedbackLeft;
     /* Essa declaração usa const para preparar direction, mantendo essas referências fixas.
*/ const  /* Aqui direction recebe o resultado dessa expressão.
*/ direction = state.turn || (feedbackAge < .5 ? feedback : '');
     /* Essa declaração usa const para preparar turn Sign, mantendo essas referências fixas.
*/ const  /* Aqui turn Sign recebe uma das duas alternativas, conforme o teste.
*/ turnSign = direction === 'left' ? -1 : direction === 'right' ? 1 : 0;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (image?.complete && image.naturalWidth)  /* Atualiza transition Age usando dt.
*/ transitionAge += dt;
     /* Essa declaração usa const para preparar transition, mantendo essas referências fixas.
*/ const  /* Aqui transition recebe o resultado de smooth.
*/ transition =  /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves. */ smooth(transitionAge / (reduced ? .24 : .48));
     /* Essa declaração usa const para preparar turn, mantendo essas referências fixas.
*/ const  /* Aqui turn recebe uma das duas alternativas, conforme o teste.
*/ turn = reduced ? 0 : turnSign * (1 - transition);
     /* Essa declaração usa const para preparar zoom, mantendo essas referências fixas.
*/ const  /* Aqui zoom recebe o resultado dessa expressão.
*/ zoom = 1 +  /* Eleva a base ao expoente indicado. */ Math.pow(progress, .88) * 2.15;
     /* Essa declaração usa const para preparar bob, mantendo essas referências fixas.
*/ const  /* Aqui bob recebe uma das duas alternativas, conforme o teste.
*/ bob = reduced || state.waiting ? 0 :  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(time * (running ? 17 : 6)) * (running ? 2.2 : .45);
     /* Essa declaração usa const para preparar feedback Strength, mantendo essas referências fixas.
*/ const  /* Aqui feedback Strength recebe o resultado de clamp.
*/ feedbackStrength =  /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(1 - feedbackAge / .45, 0, 1);
     /* Essa declaração usa const para preparar blocked, mantendo essas referências fixas.
*/ const  /* Aqui blocked recebe o resultado de .includes.
*/ blocked =  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda blocked.
*/ 'blocked',  /* Essa posição da lista guarda hit.
*/ 'hit',  /* Essa posição da lista guarda wrong.
*/ 'wrong'].includes(feedback);
     /* Essa declaração usa const para preparar stumble, mantendo essas referências fixas.
*/ const  /* Aqui stumble recebe uma das duas alternativas, conforme o teste.
*/ stumble = reduced || !blocked ? 0 :  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(feedbackAge * 22) * feedbackStrength * 1.4;
     /* Atualiza ctx.image Smoothing Enabled usando false.
*/ ctx.imageSmoothingEnabled = false;
     /* Atualiza ctx.fill Style usando 080a0d.
*/ ctx.fillStyle = '#080a0d';  /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0, 0, width, height);
     /* Esse teste confere se back está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (back) {
       /* esse comando recorta e aproxima a arte do corredor para criar movimento e profundidade.
*/ drawScenery(transition<1&&previousImage?previousImage:image, 1.12 + danger * .4, width, height, { /* Esse campo guarda reverse com true.
*/ reverse:true, /* Esse campo guarda bob com o resultado dessa expressão.
*/ bob:bob*.5});
       /* Atualiza ctx.fill Style usando 030407a8.
*/ ctx.fillStyle = '#030407a8';  /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);
    } else {
                                                                                  
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (transition < 1 && previousImage)  /* esse comando recorta e aproxima a arte do corredor para criar movimento e profundidade.
*/ drawScenery(previousImage, previousZoom, width, height, { /* Esse campo guarda bob com bob.
*/ bob});
       /* esse comando recorta e aproxima a arte do corredor para criar movimento e profundidade.
*/ drawScenery(image, zoom, width, height, { /* Esse campo guarda alpha com uma das duas alternativas, conforme o teste.
*/ alpha:previousImage?transition:1, /* Esse campo guarda shift com o resultado dessa expressão.
*/ shift:turn*width*.16+stumble, /* Esse campo guarda bob com bob.
*/ bob, /* Esse campo guarda pan com o resultado dessa expressão.
*/ pan:turn*.07});
    }
                                                                                           
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (running && !reduced && !back) {
       /* Atualiza ctx.stroke Style usando dcecff13.
*/ ctx.strokeStyle = '#dcecff13';  /* Atualiza ctx.line Width usando 1.
*/ ctx.lineWidth = 1;
       /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for ( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<10; /* Aumenta i em um para atualizar o contador. */ i++) {
         /* Essa declaração usa const para preparar angle e phase, mantendo essas referências fixas.
*/ const  /* Aqui angle recebe o resultado dessa expressão.
*/ angle=i*Math.PI/5, /* Aqui phase recebe o resultado dessa expressão.
*/ phase=(time*1.65+i*.137)%1;
         /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath();
         /* Escolhe o ponto inicial desse trecho do desenho.
*/ ctx.moveTo(width*.5+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)*width*(.24+phase*.35),height*.45+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle)*height*(.24+phase*.35));
         /* Acrescenta uma linha até a coordenada indicada.
*/ ctx.lineTo(width*.5+ /* Calcula a componente da onda ou do movimento pelo cosseno do ângulo. */ Math.cos(angle)*width*(.36+phase*.35),height*.45+ /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(angle)*height*(.36+phase*.35));
         /* Desenha o contorno do caminho usando o estilo atual.
*/ ctx.stroke();
      }
    }
     /* Essa declaração usa const para preparar ready Monster, mantendo essas referências fixas.
*/ const  /* Aqui ready Monster recebe a negação de a negação de o resultado dessa expressão.
*/ readyMonster = !!(monster?.complete && monster.naturalWidth);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!back && !state.waiting && proximity>.52 && time>=nextGlimpseAt && !reduced) {
       /* Atualiza glimpse Age usando 0.
*/ glimpseAge = 0;  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ glimpseCount++;
       /* Atualiza glimpse Side usando uma das duas alternativas, conforme o teste.
*/ glimpseSide = (( /* Converte esse valor para número. */ Number(state.index)||0)+glimpseCount+(state.kind==='medo'?0:1))%2 ? -1 : 1;
       /* Atualiza next Glimpse At usando o resultado dessa expressão.
*/ nextGlimpseAt = time+3.7-proximity*.7;
    }
     /* Essa declaração usa const para preparar glimpse, mantendo essas referências fixas.
*/ const  /* Aqui glimpse recebe uma das duas alternativas, conforme o teste.
*/ glimpse = state.waiting || back ? 0 : reduced ?  /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves. */ smooth((proximity-.76)/.24)*.6 :  /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves. */ smooth(glimpseAge/.18)*(1- /* esse comando transforma uma progressão reta em uma transição com começo e fim mais suaves. */ smooth((glimpseAge-.62)/.35));
     /* Essa declaração usa const para preparar forward Presence, mantendo essas referências fixas.
*/ const  /* Aqui forward Presence recebe uma das duas alternativas, conforme o teste.
*/ forwardPresence = back ? { /* Esse campo guarda shadow com false.
*/ shadow:false, /* Esse campo guarda periphery com false.
*/ periphery:false, /* Esse campo guarda reach com 0.
*/ reach:0} :  /* esse comando desenha sombra e aparições na periferia sem bloquear o caminho à frente. */ drawForwardPresence(width,height, /* esse comando limita os valores recebidos e usa o menor limite se o número não for válido. */ clamp(proximity*.84+surge*.16,0,1),glimpse,glimpseSide,reduced);
     /* Essa declaração usa const para preparar visible Monster, mantendo essas referências fixas.
*/ const  /* Aqui visible Monster recebe o resultado dessa expressão.
*/ visibleMonster = back && readyMonster;
     /* Esse teste confere se visible Monster está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (visibleMonster) {
       /* Essa declaração usa const para preparar monster Height, mantendo essas referências fixas.
*/ const  /* Aqui monster Height recebe o resultado dessa expressão.
*/ monsterHeight = height * (.38 + proximity * .61 + surge*.08);
       /* Essa declaração usa const para preparar monster Width, mantendo essas referências fixas.
*/ const  /* Aqui monster Width recebe o resultado dessa expressão.
*/ monsterWidth = monsterHeight * monster.naturalWidth / monster.naturalHeight;
       /* Essa declaração usa const para preparar sway, mantendo essas referências fixas.
*/ const  /* Aqui sway recebe uma das duas alternativas, conforme o teste.
*/ sway = reduced ? 0 :  /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(time*4.7)*width*.004*(1+proximity);
                                                                                             
       /* Atualiza ctx.fill Style usando 000b.
*/ ctx.fillStyle='#000b'; /* Inicia um caminho novo de desenho no canvas.
*/ ctx.beginPath(); /* Acrescenta uma elipse ao caminho do canvas.
*/ ctx.ellipse(width*.5,height*.92, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(width*.42,monsterWidth*.4),height*.045,0,0,Math.PI*2); /* Preenche o caminho ou as posições usando o valor indicado.
*/ ctx.fill();
       /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(monster,width*.5-monsterWidth*.5+sway,height*.94-monsterHeight,monsterWidth,monsterHeight);
    }
     /* Essa declaração usa const para preparar shade, mantendo essas referências fixas.
*/ const  /* Aqui shade recebe o resultado de ctx.create Radial Gradient.
*/ shade= /* Prepara um degradê circular para a luz ou sombra da cena. */ ctx.createRadialGradient(width*.5,height*.44,height*.12,width*.5,height*.5,height*.78);
     /* Acrescenta essa cor na posição indicada do degradê.
*/ shade.addColorStop(0,'#0000'); /* Acrescenta essa cor na posição indicada do degradê.
*/ shade.addColorStop(.65,'#01020624'); /* Acrescenta essa cor na posição indicada do degradê.
*/ shade.addColorStop(1,pressure>.68?'#180204ef':'#010206d9');
     /* Atualiza ctx.fill Style usando shade.
*/ ctx.fillStyle=shade; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);
     /* Esse teste confere se pressure é maior que 0.55, e só entra nesse caminho quando a condição passa.
*/ if (pressure > .55) {
       /* Essa declaração usa const para preparar pulse, mantendo essas referências fixas.
*/ const  /* Aqui pulse recebe uma das duas alternativas, conforme o teste.
*/ pulse = reduced ? .5 : .5+.5* /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(time*1.35);
       /* Essa declaração usa const para preparar edge, mantendo essas referências fixas.
*/ const  /* Aqui edge recebe o resultado de ctx.create Linear Gradient.
*/ edge =  /* Prepara um degradê entre os pontos indicados. */ ctx.createLinearGradient(0,0,width,0);
       /* Essa declaração usa const para preparar opacity, mantendo essas referências fixas.
*/ const  /* Aqui opacity recebe o resultado dessa expressão.
*/ opacity = .06+pressure*.17+pulse*.025;
       /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(0,'rgba(116,14,20,'+opacity+')'); /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(.22,'#0000'); /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(.78,'#0000'); /* Acrescenta essa cor na posição indicada do degradê.
*/ edge.addColorStop(1,'rgba(116,14,20,'+opacity+')');
       /* Atualiza ctx.fill Style usando edge.
*/ ctx.fillStyle=edge; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (feedbackStrength > 0 && blocked) { /* Atualiza ctx.fill Style usando o resultado dessa expressão.
*/ ctx.fillStyle='rgba(115,20,22,'+(feedbackStrength*.13)+')'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);}
     /* Esse teste confere se state.waiting está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (state.waiting) { /* Atualiza ctx.fill Style usando 05070a36.
*/ ctx.fillStyle='#05070a36'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);}
                                                                                
     /* Esse teste confere se state.kind é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if(state.kind==='medo') {
       /* Esse teste confere se state.lamp On é igual a false, e só entra nesse caminho quando a condição passa.
*/ if(state.lampOn===false){ /* Atualiza ctx.fill Style usando 000.
*/ ctx.fillStyle='#000'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);}
      else {
         /* Essa declaração usa const para preparar beam, mantendo essas referências fixas.
*/ const  /* Aqui beam recebe o resultado de ctx.create Radial Gradient.
*/ beam= /* Prepara um degradê circular para a luz ou sombra da cena. */ ctx.createRadialGradient(width*.51,height*.44,height*.08,width*.51,height*.44,height*.62);
         /* Acrescenta essa cor na posição indicada do degradê.
*/ beam.addColorStop(0,'#0000'); /* Acrescenta essa cor na posição indicada do degradê.
*/ beam.addColorStop(.5,'#00000018'); /* Acrescenta essa cor na posição indicada do degradê.
*/ beam.addColorStop(1,'#000000eb');
         /* Atualiza ctx.fill Style usando beam.
*/ ctx.fillStyle=beam; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,width,height);
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Converte esse valor para número. */ Number(state.index)=== /* Converte esse valor para número. */ Number(state.length)-1&&!back&&progress>.55){
           /* Atualiza ctx.fill Style usando a5d1a233.
*/ ctx.fillStyle='#a5d1a233'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(width*.69,height*.24,width*.19,height*.49);
           /* Atualiza ctx.stroke Style usando d4edb8.
*/ ctx.strokeStyle='#d4edb8'; /* Atualiza ctx.line Width usando 2.
*/ ctx.lineWidth=2; /* Desenha o contorno desse retângulo no canvas.
*/ ctx.strokeRect(width*.71,height*.27,width*.15,height*.44);
           /* Atualiza ctx.fill Style usando eaf3c8.
*/ ctx.fillStyle='#eaf3c8'; /* Atualiza ctx.font usando o resultado dessa expressão.
*/ ctx.font='bold '+ /* Escolhe o maior valor entre os valores recebidos. */ Math.max(9, /* Arredonda o número para baixo. */ Math.floor(width*.02))+'px monospace'; /* Atualiza ctx.text Align usando center.
*/ ctx.textAlign='center';
           /* Escreve esse texto preenchido na posição indicada do canvas.
*/ ctx.fillText('PAX',width*.785,height*.36); /* Escreve esse texto preenchido na posição indicada do canvas.
*/ ctx.fillText('REFÚGIO',width*.785,height*.41);
           /* Atualiza ctx.text Align usando start.
*/ ctx.textAlign='start';
        }
      }
    }
     /* Atualiza view usando um objeto com os campos dessa parte.
*/ view={ /* Esse campo guarda zoom com zoom.
*/ zoom, /* Esse campo guarda progress com progress.
*/ progress, /* aqui fica a escolha de olhar para trás durante a corrida.
*/ lookingBack:back, /* Esse campo guarda running com a negação de a negação de state.running.
*/ running:!!state.running, /* Esse campo guarda danger com danger.
*/ danger, /* Esse campo guarda pressure com pressure.
*/ pressure, /* Esse campo guarda reduced com reduced.
*/ reduced, /* Esse campo guarda monster Visible com o resultado dessa expressão.
*/ monsterVisible:!!visibleMonster||forwardPresence.periphery, /* aqui fica o progresso da troca entre o corredor anterior e o atual.
*/ transition, /* Esse campo guarda feedback com uma das duas alternativas, conforme o teste.
*/ feedback:feedbackStrength>0?feedback:null,
       /* aqui fica a aproximação visual do perseguidor sem mudar a regra da perseguição.
*/ proximity, /* Esse campo guarda surge com surge.
*/ surge, /* Esse campo guarda shadow Visible com forward Presence.shadow.
*/ shadowVisible:forwardPresence.shadow, /* aqui fica o alcance visual da sombra projetada sobre o chão.
*/ shadowReach:forwardPresence.reach, /* Esse campo guarda periphery Visible com forward Presence.periphery.
*/ peripheryVisible:forwardPresence.periphery, /* Esse campo guarda periphery Side com uma das duas alternativas, conforme o teste.
*/ peripherySide:forwardPresence.periphery?glimpseSide:0,
       /* aqui fica a informação usada para escurecer a visão quando a lanterna apaga.
*/ lampOn:state.kind==='medo'?state.lampOn!==false:null, /* aqui fica a indicação de que o quarto seguro pode ser visto com a lanterna acesa.
*/ refugeVisible:state.kind==='medo'&&state.lampOn!==false&& /* Converte esse valor para número. */ Number(state.index)=== /* Converte esse valor para número. */ Number(state.length)-1&&progress>.55&&!back,
       /* Esse campo guarda camera Time com time.
*/ cameraTime:time, /* Esse campo guarda scene Transition com o resultado dessa expressão.
*/ sceneTransition:transition<1&&!!previousImage, /* Esse campo guarda motion com uma das duas alternativas, conforme o teste.
*/ motion:reduced?0: /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(bob)+ /* Usa a distância do número até zero, sem sinal negativo. */ Math.abs(stumble)};
  }
   /* esse comando esconde o desenho e encerra a referência do último quadro da perseguição.
*/ function stop() { /* Esse teste confere se canvas está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(canvas) /* Define se esse elemento fica escondido ou disponível na tela.
*/ canvas.hidden=true; /* Atualiza last State usando um valor vazio.
*/ lastState=null; /* Atualiza active usando false.
*/ active=false;}
   /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Aqui disponibiliza a operação start para os outros módulos. esse comando prepara a câmera da perseguição e preserva o movimento quando só o corredor está mudando.
*/ start, /* Aqui disponibiliza a operação set Images para os outros módulos. esse comando troca o corredor e a presença enquanto mantém a imagem anterior durante a transição.
*/ setImages, /* Aqui disponibiliza a operação draw para os outros módulos. esse comando atualiza o desenho da corrida, da ameaça e da lanterna usando o estado da perseguição.
*/ draw, /* Aqui disponibiliza a operação stop para os outros módulos. esse comando esconde o desenho e encerra a referência do último quadro da perseguição.
*/ stop, /* Esse campo guarda state com uma função para executar quando for chamada.
*/ state: /* esse comando fornece os dados visuais da câmera, da lanterna e da ameaça para conferência. */ ()=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...view, /* Esse campo guarda resolution com um objeto com os campos dessa parte.
*/ resolution:{ /* Define a largura usada nesse cálculo ou desenho.
*/ width:canvas?.width||0, /* Define a altura usada nesse cálculo ou desenho.
*/ height:canvas?.height||0}})};
})();
