 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                                       
 /* Atualiza window.Observacao Sentia usando o resultado dessa chamada de função.
*/ window.ObservacaoSentia =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa const para preparar details, mantendo essas referências fixas.
*/ const  /* Aqui details recebe um objeto com os campos dessa parte.
*/ details = {
     /* Esse campo guarda espada com uma lista com 2 posições.
*/ espada: [ /* Essa posição da lista guarda A lâmina.
*/ 'A lâmina',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'O fogo acompanha o contorno da espada. A oferta de Aurea não dizia quem deveria ser atingido.'],
     /* Esse campo guarda escudo com uma lista com 2 posições.
*/ escudo: [ /* Essa posição da lista guarda O apoio do braço.
*/ 'O apoio do braço',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A proteção precisa ser segurada pelo lado de dentro. As marcas de uso não desapareceram quando ela mudou de mãos.'],
     /* Esse campo guarda faca com uma lista com 2 posições.
*/ faca: [ /* Essa posição da lista guarda O cabo.
*/ 'O cabo',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A faca é reconhecível. Tirar o objeto da moldura não apagou a recusa de Friska em entregá-lo.'],
     /* Esse campo guarda luz com uma lista com 2 posições.
*/ luz: [ /* Essa posição da lista guarda A claridade.
*/ 'A claridade',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A luz continua pequena o suficiente para caber na mão. Candy a ofereceu; não foi preciso arrancá-la de alguém.'],
     /* Esse campo guarda lanterna com uma lista com 2 posições.
*/ lanterna: [ /* Essa posição da lista guarda A pega.
*/ 'A pega',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A pega mantém a luz à frente da mão. Iluminar uma passagem não mostra o que está do outro lado das paredes.'],
     /* Esse campo guarda chave sanidade com uma lista com 2 posições.
*/ 'chave-sanidade': [ /* Essa posição da lista guarda Os dentes.
*/ 'Os dentes',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Há dentes e uma haste para uma fechadura comum. A forma de Cassidy agora cabe entre os dedos.'],
     /* Esse campo guarda chave insanidade com uma lista com 2 posições.
*/ 'chave-insanidade': [ /* Essa posição da lista guarda A haste.
*/ 'A haste',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A segunda chave tem o próprio contorno. A porta adiante pede as duas, sem que uma substitua a outra.']
  };
   /* Essa declaração usa const para preparar voices, mantendo essas referências fixas.
*/ const  /* Aqui voices recebe um objeto com os campos dessa parte.
*/ voices = {
     /* Esse campo guarda felicidade com o texto definido nessa parte.
*/ felicidade:'Ele estava esperando aprovação. Acho que toda aquela alegria precisava de alguém olhando.',
     /* Esse campo guarda amor com o texto definido nessa parte.
*/ amor:'Ela sempre volta. Talvez eu nem precise perguntar por que continua fazendo isso.',
     /* Esse campo guarda tristeza com o texto definido nessa parte.
*/ tristeza:'Agora sei quais lembranças fazem a conversa mudar. Vou chamar isso de compreender.',
     /* Esse campo guarda orgulho com o texto definido nessa parte.
*/ orgulho:'Ela entregou os equipamentos. O que eu fizer com eles pode parecer apenas o próximo passo.',
     /* Esse campo guarda determinacao com o texto definido nessa parte.
*/ determinacao:'Ela disse não. Mas a faca continua ali, como se a decisão ainda estivesse em aberto.',
     /* Esse campo guarda calma com o texto definido nessa parte.
*/ calma:'Ele deixa espaço para todo mundo. Deve conseguir lidar com uma ausência a mais.',
     /* Esse campo guarda ansiedade com o texto definido nessa parte.
*/ ansiedade:'Se ele calculasse direito, nada disso surpreenderia ninguém. É confortável pensar assim.',
     /* Esse campo guarda culpa com o texto definido nessa parte.
*/ culpa:'Ele procura um erro em cada lembrança. Se a pergunta partir dele, talvez eu nem precise acusar.',
     /* Esse campo guarda medo com o texto definido nessa parte.
*/ medo:'A distância dele parece uma resposta. Prefiro não escrever a pergunta que levei até a porta.',
     /* Esse campo guarda odio com o texto definido nessa parte.
*/ odio:'Encontrei hostilidade. Por um instante, isso parece suficiente para dispensar todo o resto.'
  };
   /* esse comando escolhe a interpretação pouco confiável do protagonista para acompanhar o fato registrado.
*/ function interpretation(title, text, { /* Aqui retira o campo eco do objeto e o recebe na variável eco.
*/ eco,  /* Aqui retira o campo deaths do objeto e o recebe na variável deaths.
*/ deaths=0,  /* Aqui retira o campo item do objeto e o recebe na variável item.
*/ item}={}) {
     /* Esse teste confere se o resultado de title.starts With está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto começa com o trecho indicado. */ title.startsWith('Uma ausência:')) /* Devolve o texto definido nessa parte e encerra essa chamada da função.
*/ return 'O quarto ficou em silêncio. Escrevi que o caminho ficou mais simples. A frase não explica por que ainda não consigo descansar.';
     /* Esse teste confere se item é igual a faca, e só entra nesse caminho quando a condição passa.
*/ if(item==='faca') /* Devolve o texto definido nessa parte e encerra essa chamada da função.
*/ return 'Agora está comigo. Essa é uma frase mais curta do que contar como saiu da moldura.';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(item==='espada'||item==='escudo') /* Devolve o texto definido nessa parte e encerra essa chamada da função.
*/ return 'Foi uma ferramenta que encontrei pelo caminho. "Recebi de alguém" exigiria guardar outra parte da lembrança.';
     /* Esse teste confere se title é igual a Uma confidência de Ninfa, e só entra nesse caminho quando a condição passa.
*/ if(title==='Uma confidência de Ninfa') /* Devolve o texto definido nessa parte e encerra essa chamada da função.
*/ return 'Se ele se preocupa em perceber tarde demais, talvez a pergunta certa faça o resto. Não vou chamar de teste.';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(eco&&voices[eco]) /* Devolve voices.eco e encerra essa chamada da função.
*/ return voices[eco];
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(deaths>0&& /* Confere se o texto corresponde a esse padrão de expressão regular. */ /Conversa|Encontro|Memória/.test(title)) /* Devolve o texto definido nessa parte e encerra essa chamada da função.
*/ return 'Eu me lembro de ter escutado. É mais fácil escrever isso do que conferir o que fiz com a resposta.';
     /* Devolve um valor vazio e encerra essa chamada da função.
*/ return null;
  }
   /* esse comando monta a janela de observação do objeto com ampliação, rotação, detalhe e volta à bolsa.
*/ function itemPanel({ /* Aqui retira o campo id do objeto e o recebe na variável id.
*/ id, /* Aqui retira o campo name do objeto e o recebe na variável name.
*/ name, /* Aqui retira o campo description do objeto e o recebe na variável description.
*/ description, /* Aqui retira o campo sprite do objeto e o recebe na variável sprite.
*/ sprite, /* Aqui retira o campo on Back do objeto e o recebe na variável on Back.
*/ onBack, /* Aqui retira o campo on Observe do objeto e o recebe na variável on Observe.
*/ onObserve, /* Aqui retira o campo sound do objeto e o recebe na variável sound.
*/ sound}) {
     /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap= /* Cria um elemento HTML do tipo section. */ document.createElement('section'); /* Define as classes de aparência desse elemento.
*/ wrap.className='item-observation';
     /* Essa declaração usa const para preparar heading, mantendo essas referências fixas.
*/ const  /* Aqui heading recebe o resultado de document.create Element.
*/ heading= /* Cria um elemento HTML do tipo h2. */ document.createElement('h2'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ heading.textContent=name;
     /* Essa declaração usa const para preparar hint, mantendo essas referências fixas.
*/ const  /* Aqui hint recebe o resultado de document.create Element.
*/ hint= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define as classes de aparência desse elemento.
*/ hint.className='hint'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ hint.textContent='Amplie e gire a imagem. Arraste o objeto ampliado ou use as setas com a imagem em foco. Você continua com o mesmo objeto na bolsa.';
     /* Essa declaração usa const para preparar viewport, mantendo essas referências fixas.
*/ const  /* Aqui viewport recebe o resultado de document.create Element.
*/ viewport= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ viewport.className='object-viewer';
     /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de document.create Element.
*/ image= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Esse teste confere se sprite está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(sprite) /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src=sprite;else  /* Define se esse elemento fica escondido ou disponível na tela.
*/ image.hidden=true; /* Atualiza image.alt usando name.
*/ image.alt=name; /* Atualiza image.draggable usando false.
*/ image.draggable=false; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ viewport.append(image);
     /* Essa declaração usa const para preparar description Node, mantendo essas referências fixas.
*/ const  /* Aqui description Node recebe o resultado de document.create Element.
*/ descriptionNode= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ descriptionNode.textContent=description;
     /* Essa declaração usa let para preparar zoom e angle e x e y e drag, permitindo atualizar esses valores depois.
*/ let  /* Aqui zoom recebe 1.
*/ zoom=1, /* Aqui angle recebe 0.
*/ angle=0, /* Aqui x recebe 0.
*/ x=0, /* Aqui y recebe 0.
*/ y=0, /* Aqui drag recebe um valor vazio.
*/ drag=null;
     /* Atualiza viewport.tab Index usando 0.
*/ viewport.tabIndex=0; /* Define o atributo role desse elemento.
*/ viewport.setAttribute('role','group'); /* Define o atributo aria label desse elemento.
*/ viewport.setAttribute('aria-label','Imagem do objeto: setas movem, Home centraliza');
     /* Essa declaração usa const para preparar zoom Label, mantendo essas referências fixas.
*/ const  /* Aqui zoom Label recebe o resultado de document.create Element.
*/ zoomLabel= /* Cria um elemento HTML do tipo label. */ document.createElement('label'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ zoomLabel.textContent='Ampliação ';
     /* Essa declaração usa const para preparar output, mantendo essas referências fixas.
*/ const  /* Aqui output recebe o resultado de document.create Element.
*/ output= /* Cria um elemento HTML do tipo output. */ document.createElement('output'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ output.textContent='100%';
     /* Essa declaração usa const para preparar input, mantendo essas referências fixas.
*/ const  /* Aqui input recebe o resultado de document.create Element.
*/ input= /* Cria um elemento HTML do tipo input. */ document.createElement('input'); /* Atualiza input.type usando range.
*/ input.type='range'; /* Atualiza input.min usando 1.
*/ input.min='1'; /* Atualiza input.max usando 2.5.
*/ input.max='2.5'; /* Atualiza input.step usando .25.
*/ input.step='.25'; /* Atualiza o valor desse campo ou controle.
*/ input.value='1'; /* Define o atributo aria label desse elemento.
*/ input.setAttribute('aria-label','Ampliação do objeto'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ zoomLabel.append(output,input);
     /* Essa declaração usa const para preparar update, mantendo essas referências fixas.
*/ const  /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update= /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada. */ ()=>{ /* Atualiza image.style.transform usando um texto montado com os valores atuais.
*/ image.style.transform=`translate(${x}px,${y}px) scale(${zoom}) rotate(${angle}deg)`; /* Atualiza viewport.style.touch Action usando uma das duas alternativas, conforme o teste.
*/ viewport.style.touchAction=zoom>1?'none':'pan-y'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ output.textContent= /* Arredonda o número para o inteiro mais próximo. */ Math.round(zoom*100)+'%';};
     /* Essa declaração usa const para preparar move, mantendo essas referências fixas.
*/ const  /* esse comando desloca a imagem dentro dos limites da observação e atualiza seu desenho.
*/ move= /* esse comando desloca a imagem dentro dos limites da observação e atualiza seu desenho. */ (dx,dy)=>{ /* Atualiza x usando o resultado de Math.max.
*/ x= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(-90, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(90,x+dx)); /* Atualiza y usando o resultado de Math.max.
*/ y= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(-90, /* Escolhe o menor valor entre os valores recebidos. */ Math.min(90,y+dy)); /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update();};
     /* Atualiza viewport.onpointerdown usando uma função para executar quando for chamada.
*/ viewport.onpointerdown= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{ /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(zoom<=1||e.button!==0) /* Encerra essa função sem devolver outro valor.
*/ return; /* Atualiza drag usando um objeto com os campos dessa parte.
*/ drag={ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:e.pointerId, /* Guarda a posição horizontal desse elemento.
*/ x:e.clientX, /* Guarda a posição vertical desse elemento.
*/ y:e.clientY}; /* Executa viewport.set Pointer Capture com os valores definidos nessa parte.
*/ viewport.setPointerCapture(e.pointerId);};
     /* Atualiza viewport.onpointermove usando uma função para executar quando for chamada.
*/ viewport.onpointermove= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{ /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!drag||drag.id!==e.pointerId) /* Encerra essa função sem devolver outro valor.
*/ return; /* esse comando desloca a imagem dentro dos limites da observação e atualiza seu desenho.
*/ move(e.clientX-drag.x,e.clientY-drag.y); /* Atualiza drag.x usando e.client X.
*/ drag.x=e.clientX; /* Atualiza drag.y usando e.client Y.
*/ drag.y=e.clientY;};
     /* Atualiza viewport.onpointerup usando o resultado dessa expressão.
*/ viewport.onpointerup= /* Atualiza viewport.onpointercancel usando o resultado dessa expressão. */ viewport.onpointercancel= /* Atualiza viewport.onlostpointercapture usando uma função para executar quando for chamada. */ viewport.onlostpointercapture= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza drag usando um valor vazio.
*/ drag=null;};
     /* Atualiza viewport.onkeydown usando uma função para executar quando for chamada.
*/ viewport.onkeydown= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{ /* Essa declaração usa const para preparar d, mantendo essas referências fixas.
*/ const  /* Aqui d recebe e.key.
*/ d={ /* Esse campo guarda Arrow Left com uma lista com 2 posições.
*/ ArrowLeft:[-12, /* Essa posição da lista guarda 0.
*/ 0], /* Esse campo guarda Arrow Right com uma lista com 2 posições.
*/ ArrowRight:[ /* Essa posição da lista guarda 12.
*/ 12, /* Essa posição da lista guarda 0.
*/ 0], /* Esse campo guarda Arrow Up com uma lista com 2 posições.
*/ ArrowUp:[ /* Essa posição da lista guarda 0.
*/ 0,-12], /* Esse campo guarda Arrow Down com uma lista com 2 posições.
*/ ArrowDown:[ /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 12.
*/ 12]}[e.key]; /* Esse teste confere se d está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(d){ /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* esse comando desloca a imagem dentro dos limites da observação e atualiza seu desenho.
*/ move( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...d);}else  /* Esse teste confere se e.key é igual a Home, e só entra nesse caminho quando a condição passa.
*/ if(e.key==='Home'){ /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Atualiza x usando o resultado dessa expressão.
*/ x= /* Atualiza y usando 0. */ y=0; /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update();}};
     /* Liga essa função à digitação nesse campo.
*/ input.oninput= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza zoom usando o resultado de Number.
*/ zoom= /* Converte esse valor para número. */ Number(input.value); /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update();}; /* Liga essa função à mudança desse campo.
*/ input.onchange= /* Essa função recebe nenhum parâmetro e devolve o resultado de sound. */ ()=> /* Executa sound com os valores definidos nessa parte. */ sound('inspect');
     /* Essa declaração usa const para preparar controls, mantendo essas referências fixas.
*/ const  /* Aqui controls recebe o resultado de document.create Element.
*/ controls= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ controls.className='observation-controls';
     /* Essa declaração usa const para preparar button, mantendo essas referências fixas.
*/ const  /* esse comando cria um botão da observação e liga o toque à ação recebida.
*/ button= /* esse comando cria um botão da observação e liga o toque à ação recebida. */ (label,fn)=>{ /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de document.create Element.
*/ b= /* Cria um elemento HTML do tipo button. */ document.createElement('button'); /* Atualiza b.type usando button.
*/ b.type='button'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ b.textContent=label; /* Liga essa função ao clique desse controle.
*/ b.onclick=fn; /* Devolve b e encerra essa chamada da função.
*/ return b;};
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ controls.append( /* esse comando cria um botão da observação e liga o toque à ação recebida. */ button('Girar à esquerda', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza angle usando 15.
*/ angle-=15; /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update(); /* Executa sound com os valores definidos nessa parte.
*/ sound('turn');}), /* esse comando cria um botão da observação e liga o toque à ação recebida. */ button('Girar à direita', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza angle usando 15.
*/ angle+=15; /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update(); /* Executa sound com os valores definidos nessa parte.
*/ sound('turn');}), /* esse comando cria um botão da observação e liga o toque à ação recebida. */ button('Centralizar', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza angle usando 0.
*/ angle=0; /* Atualiza zoom usando 1.
*/ zoom=1; /* Atualiza x usando o resultado dessa expressão.
*/ x= /* Atualiza y usando 0. */ y=0; /* Atualiza o valor desse campo ou controle.
*/ input.value='1'; /* esse comando aplica posição, ampliação e rotação à imagem e atualiza a porcentagem mostrada.
*/ update();}));
     /* Essa declaração usa const para preparar extra, mantendo essas referências fixas.
*/ const  /* Aqui extra recebe o resultado dessa expressão.
*/ extra=details[id]||[ /* Essa posição da lista guarda O objeto.
*/ 'O objeto', /* Essa posição da lista guarda Você examina os detalhes sem alterar o objeto.
*/ 'Você examina os detalhes sem alterar o objeto.'];
     /* Essa declaração usa const para preparar findings, mantendo essas referências fixas.
*/ const  /* Aqui findings recebe o resultado de document.create Element.
*/ findings= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define as classes de aparência desse elemento.
*/ findings.className='observation-finding'; /* Define o atributo role desse elemento.
*/ findings.setAttribute('role','status');
     /* Essa declaração usa const para preparar examine, mantendo essas referências fixas.
*/ const  /* Aqui examine recebe o resultado de button.
*/ examine= /* esse comando cria um botão da observação e liga o toque à ação recebida. */ button('Observar: '+extra[0], /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ findings.textContent=extra[1]; /* aqui fica a ação que registra um detalhe quando a observação é confirmada.
*/ onObserve(extra[0],extra[1]); /* Executa sound com os valores definidos nessa parte.
*/ sound('inspect'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ examine.textContent='Detalhe registrado ✓';}); /* Atualiza examine.dataset.observe Item usando id.
*/ examine.dataset.observeItem=id;
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(heading,hint,viewport,descriptionNode,zoomLabel,controls,examine,findings, /* esse comando cria um botão da observação e liga o toque à ação recebida. */ button('Voltar à bolsa',onBack));
     /* Devolve wrap e encerra essa chamada da função.
*/ return wrap;
  }
   /* Devolve o resultado de Object.freeze e encerra essa chamada da função.
*/ return  /* Impede a troca direta dos campos desse objeto. */ Object.freeze({ /* Aqui disponibiliza a operação interpretation para os outros módulos. esse comando escolhe a interpretação pouco confiável do protagonista para acompanhar o fato registrado.
*/ interpretation, /* Aqui disponibiliza a operação item Panel para os outros módulos. esse comando monta a janela de observação do objeto com ampliação, rotação, detalhe e volta à bolsa.
*/ itemPanel});
})();
