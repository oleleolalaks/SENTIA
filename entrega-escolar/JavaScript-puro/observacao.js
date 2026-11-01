'use strict';

// A observação amplia as artes aprovadas. O texto do registro separa o que foi visto da interpretação.
window.ObservacaoSentia = (() => {
  const details = {
    espada: ['A lâmina', 'O fogo acompanha o contorno da espada. A oferta de Aurea não dizia quem deveria ser atingido.'],
    escudo: ['O apoio do braço', 'A proteção precisa ser segurada pelo lado de dentro. As marcas de uso não desapareceram quando ela mudou de mãos.'],
    faca: ['O cabo', 'A faca é reconhecível. Tirar o objeto da moldura não apagou a recusa de Friska em entregá-lo.'],
    luz: ['A claridade', 'A luz continua pequena o suficiente para caber na mão. Sugar a ofereceu; não foi preciso arrancá-la de alguém.'],
    lanterna: ['A pega', 'A pega mantém a luz à frente da mão. Iluminar uma passagem não mostra o que está do outro lado das paredes.'],
    'chave-sanidade': ['Os dentes', 'Há dentes e uma haste para uma fechadura comum. A forma de Cassidy agora cabe entre os dedos.'],
    'chave-insanidade': ['A haste', 'A segunda chave tem o próprio contorno. A porta adiante pede as duas, sem que uma substitua a outra.']
  };
  const voices = {
    felicidade:'Ele estava esperando aprovação. Acho que toda aquela alegria precisava de alguém olhando.',
    amor:'Ela sempre volta. Talvez eu nem precise perguntar por que continua fazendo isso.',
    tristeza:'Agora sei quais lembranças fazem a conversa mudar. Vou chamar isso de compreender.',
    orgulho:'Ela entregou os equipamentos. O que eu fizer com eles pode parecer apenas o próximo passo.',
    determinacao:'Ela disse não. Mas a faca continua ali, como se a decisão ainda estivesse em aberto.',
    calma:'Ele deixa espaço para todo mundo. Deve conseguir lidar com uma ausência a mais.',
    ansiedade:'Se ele calculasse direito, nada disso surpreenderia ninguém. É confortável pensar assim.',
    culpa:'Ele procura um erro em cada lembrança. Se a pergunta partir dele, talvez eu nem precise acusar.',
    medo:'A distância dele parece uma resposta. Prefiro não escrever a pergunta que levei até a porta.',
    odio:'Encontrei hostilidade. Por um instante, isso parece suficiente para dispensar todo o resto.'
  };
  function interpretation(title, text, {eco, deaths=0, item}={}) {
    if(title.startsWith('Uma ausência:'))return 'O quarto ficou em silêncio. Escrevi que o caminho ficou mais simples. A frase não explica por que ainda não consigo descansar.';
    if(item==='faca')return 'Agora está comigo. Essa é uma frase mais curta do que contar como saiu da moldura.';
    if(item==='espada'||item==='escudo')return 'Foi uma ferramenta que encontrei pelo caminho. "Recebi de alguém" exigiria guardar outra parte da lembrança.';
    if(title==='Uma confidência de Ninfa')return 'Se ele se preocupa em perceber tarde demais, talvez a pergunta certa faça o resto. Não vou chamar de teste.';
    if(eco&&voices[eco])return voices[eco];
    if(deaths>0&&/Conversa|Encontro|Memória/.test(title))return 'Eu me lembro de ter escutado. É mais fácil escrever isso do que conferir o que fiz com a resposta.';
    return null;
  }
  function itemPanel({id,name,description,sprite,onBack,onObserve,sound}) {
    const wrap=document.createElement('section');wrap.className='item-observation';
    const heading=document.createElement('h2');heading.textContent=name;
    const hint=document.createElement('p');hint.className='hint';hint.textContent='Amplie e gire a imagem. Arraste o objeto ampliado ou use as setas com a imagem em foco. Você continua com o mesmo objeto na bolsa.';
    const viewport=document.createElement('div');viewport.className='object-viewer';
    const image=document.createElement('img');if(sprite)image.src=sprite;else image.hidden=true;image.alt=name;image.draggable=false;viewport.append(image);
    const descriptionNode=document.createElement('p');descriptionNode.textContent=description;
    let zoom=1,angle=0,x=0,y=0,drag=null;
    viewport.tabIndex=0;viewport.setAttribute('role','group');viewport.setAttribute('aria-label','Imagem do objeto: setas movem, Home centraliza');
    const zoomLabel=document.createElement('label');zoomLabel.textContent='Ampliação ';
    const output=document.createElement('output');output.textContent='100%';
    const input=document.createElement('input');input.type='range';input.min='1';input.max='2.5';input.step='.25';input.value='1';input.setAttribute('aria-label','Ampliação do objeto');zoomLabel.append(output,input);
    const update=()=>{image.style.transform=`translate(${x}px,${y}px) scale(${zoom}) rotate(${angle}deg)`;viewport.style.touchAction=zoom>1?'none':'pan-y';output.textContent=Math.round(zoom*100)+'%';};
    const move=(dx,dy)=>{x=Math.max(-90,Math.min(90,x+dx));y=Math.max(-90,Math.min(90,y+dy));update();};
    viewport.onpointerdown=e=>{if(zoom<=1||e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};viewport.setPointerCapture(e.pointerId);};
    viewport.onpointermove=e=>{if(!drag||drag.id!==e.pointerId)return;move(e.clientX-drag.x,e.clientY-drag.y);drag.x=e.clientX;drag.y=e.clientY;};
    viewport.onpointerup=viewport.onpointercancel=viewport.onlostpointercapture=()=>{drag=null;};
    viewport.onkeydown=e=>{const d={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]}[e.key];if(d){e.preventDefault();move(...d);}else if(e.key==='Home'){e.preventDefault();x=y=0;update();}};
    input.oninput=()=>{zoom=Number(input.value);update();};input.onchange=()=>sound('inspect');
    const controls=document.createElement('div');controls.className='observation-controls';
    const button=(label,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=fn;return b;};
    controls.append(button('Girar à esquerda',()=>{angle-=15;update();sound('turn');}),button('Girar à direita',()=>{angle+=15;update();sound('turn');}),button('Centralizar',()=>{angle=0;zoom=1;x=y=0;input.value='1';update();}));
    const extra=details[id]||['O objeto','Você examina os detalhes sem alterar o objeto.'];
    const findings=document.createElement('p');findings.className='observation-finding';findings.setAttribute('role','status');
    const examine=button('Observar: '+extra[0],()=>{findings.textContent=extra[1];onObserve(extra[0],extra[1]);sound('inspect');examine.textContent='Detalhe registrado ✓';});examine.dataset.observeItem=id;
    wrap.append(heading,hint,viewport,descriptionNode,zoomLabel,controls,examine,findings,button('Voltar à bolsa',onBack));
    return wrap;
  }
  return Object.freeze({interpretation,itemPanel});
})();
