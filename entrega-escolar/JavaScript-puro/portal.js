 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                
 /* Atualiza window.Portal Sentia usando o resultado dessa chamada de função.
*/ window.PortalSentia =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa let para preparar entering, permitindo atualizar esses valores depois.
*/ let  /* Aqui entering recebe false.
*/ entering=false;
   /* Essa declaração usa const para preparar reduced, mantendo essas referências fixas.
*/ const  /* esse comando consulta as preferências de movimento do sistema e da página antes da passagem de luz.
*/ reduced= /* esse comando consulta as preferências de movimento do sistema e da página antes da passagem de luz. */ ()=> /* Consulta se o navegador atende à preferência ou condição de tela indicada. */ window.matchMedia('(prefers-reduced-motion: reduce)').matches|| /* Confere se esse elemento tem a classe indicada. */ document.documentElement.classList.contains('reduced')|| /* Confere se esse elemento tem a classe indicada. */ document.body.classList.contains('reduced');
   /* esse comando prepara a camada que cobre a passagem entre o site e o Jardim.
*/ function light(topLayer=false) {
     /* Essa declaração usa const para preparar overlay, mantendo essas referências fixas.
*/ const  /* Aqui overlay recebe o resultado de document.create Element.
*/ overlay= /* Cria um elemento HTML do tipo uma das duas alternativas, conforme o teste. */ document.createElement(topLayer?'dialog':'div'); /* Atualiza overlay.id usando portal light.
*/ overlay.id='portal-light'; /* Define o atributo aria hidden desse elemento.
*/ overlay.setAttribute('aria-hidden','true');
     /* Escuta o evento cancel e liga esse evento à função definida aqui.
*/ overlay.addEventListener('cancel', /* Essa função recebe event e devolve o resultado de event.prevent Default. */ event=> /* Impede a ação padrão desse evento do navegador. */ event.preventDefault());
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ overlay.classList.toggle('gentle', /* esse comando consulta as preferências de movimento do sistema e da página antes da passagem de luz. */ reduced()); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ document.body.append(overlay); /* Devolve overlay e encerra essa chamada da função.
*/ return overlay;
  }
   /* esse comando salva a chegada, fecha a janela e atravessa para o Jardim depois da transição de luz.
*/ function enter() {
     /* Esse teste confere se entering está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(entering) /* Encerra essa função sem devolver outro valor.
*/ return; /* Atualiza entering usando true.
*/ entering=true;
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('dialog[open]').forEach( /* Essa função recebe dialog e devolve o resultado de dialog.close. */ dialog=> /* Fecha essa janela ou recurso que estava aberto. */ dialog.close());
     /* Essa declaração usa const para preparar overlay, mantendo essas referências fixas.
*/ const  /* Aqui overlay recebe o resultado de light.
*/ overlay= /* esse comando prepara a camada que cobre a passagem entre o site e o Jardim. */ light();
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('[data-device]').forEach( /* Essa função recebe b e devolve o resultado dessa expressão. */ b=> /* Atualiza b.disabled usando true. */ b.disabled=true);
     /* Agenda a atualização visual para o próximo quadro do navegador.
*/ requestAnimationFrame( /* Essa função recebe nenhum parâmetro e devolve o resultado de request Animation Frame. */ ()=> /* Agenda a atualização visual para o próximo quadro do navegador. */ requestAnimationFrame( /* Essa função recebe nenhum parâmetro e devolve o resultado de overlay.class List.add. */ ()=> /* Acrescenta esse valor ao conjunto ou à lista de classes. */ overlay.classList.add('bright')));
     /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try{ /* Salva o valor usando a chave sentia portal arrival.
*/ sessionStorage.setItem('sentia-portal-arrival', /* Converte esse valor para texto. */ String( /* Lê o tempo atual para calcular os intervalos usados nessa execução. */ Date.now()));} /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch{}
       /* Atualiza location.href usando jardim.html.
*/ location.href='jardim.html';
    }, /* esse comando consulta as preferências de movimento do sistema e da página antes da passagem de luz. */ reduced()?220:520);
  }
   /* Esse teste confere se o resultado de jardim .html i.test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /\/jardim\.html$/i.test(location.pathname)){
     /* Essa declaração usa let para preparar arrival, permitindo atualizar esses valores depois.
*/ let  /* Aqui arrival recebe 0.
*/ arrival=0; /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try{ /* Atualiza arrival usando o resultado de Number.
*/ arrival= /* Converte esse valor para número. */ Number( /* Lê o valor salvo com a chave sentia portal arrival. */ sessionStorage.getItem('sentia-portal-arrival')); /* Apaga somente o valor guardado nessa chave.
*/ sessionStorage.removeItem('sentia-portal-arrival');} /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch{}
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(arrival>0&& /* Lê o tempo atual para calcular os intervalos usados nessa execução. */ Date.now()-arrival<15000){
       /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ document.documentElement.classList.add('portal-arriving');
       /* Essa declaração usa const para preparar overlay, mantendo essas referências fixas.
*/ const  /* Aqui overlay recebe o resultado de light.
*/ overlay= /* esse comando prepara a camada que cobre a passagem entre o site e o Jardim. */ light(true); /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ overlay.classList.add('bright'); /* Abre esse diálogo como uma janela modal.
*/ overlay.showModal();
       /* Essa declaração usa let para preparar ended, permitindo atualizar esses valores depois.
*/ let  /* Aqui ended recebe false.
*/ ended=false;
       /* Essa declaração usa const para preparar reveal, mantendo essas referências fixas.
*/ const  /* esse comando revela o menu do Jardim uma única vez depois que a página terminou de carregar.
*/ reveal= /* esse comando revela o menu do Jardim uma única vez depois que a página terminou de carregar. */ ()=>{ /* Esse teste confere se ended está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(ended) /* Encerra essa função sem devolver outro valor.
*/ return; /* Atualiza ended usando true.
*/ ended=true;
                                                                                    
         /* Esse teste confere se overlay.open está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(overlay.open) /* Fecha essa janela ou recurso que estava aberto.
*/ overlay.close(); /* Abre esse diálogo como uma janela modal.
*/ overlay.showModal();
         /* Retira esse elemento da página.
*/ document.documentElement.classList.remove('portal-arriving');
         /* Agenda a atualização visual para o próximo quadro do navegador.
*/ requestAnimationFrame( /* Essa função recebe nenhum parâmetro e devolve o resultado de request Animation Frame. */ ()=> /* Agenda a atualização visual para o próximo quadro do navegador. */ requestAnimationFrame( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
         /* Retira esse elemento da página.
*/ overlay.classList.remove('bright'); /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Fecha essa janela ou recurso que estava aberto.
*/ overlay.close(); /* Retira esse elemento da página.
*/ overlay.remove();}, /* esse comando consulta as preferências de movimento do sistema e da página antes da passagem de luz. */ reduced()?400:900);
      }));};
       /* Esse teste confere se document.ready State é igual a complete, e só entra nesse caminho quando a condição passa.
*/ if(document.readyState==='complete') /* esse comando revela o menu do Jardim uma única vez depois que a página terminou de carregar.
*/ reveal();else  /* Escuta o evento load e liga esse evento à função definida aqui.
*/ window.addEventListener('load',reveal,{ /* Esse campo guarda once com true.
*/ once:true});
       /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout(reveal,4000);
    }
  }
   /* Devolve o resultado de Object.freeze e encerra essa chamada da função.
*/ return  /* Impede a troca direta dos campos desse objeto. */ Object.freeze({ /* Aqui disponibiliza a operação enter para os outros módulos. esse comando salva a chegada, fecha a janela e atravessa para o Jardim depois da transição de luz.
*/ enter});
})();
