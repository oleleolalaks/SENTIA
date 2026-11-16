 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                                      
 /* Executa imediatamente a função que prepara e isola as operações deste módulo.
*/ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa const para preparar failures, mantendo essas referências fixas.
*/ const  /* Aqui failures recebe uma lista com 0 posições.
*/ failures = [];
   /* Escuta o evento error e liga esse evento à função definida aqui.
*/ window.addEventListener('error',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ event => {
     /* Essa declaração usa const para preparar resource, mantendo essas referências fixas.
*/ const  /* Aqui resource recebe event.target.
*/ resource = event.target;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (resource instanceof HTMLScriptElement || resource instanceof HTMLLinkElement) {
       /* Acrescenta esse valor no fim da lista.
*/ failures.push( /* Lê o atributo src desse elemento. */ resource.getAttribute('src') ||  /* Lê o atributo href desse elemento. */ resource.getAttribute('href'));
    }
  }, true);
   /* Escuta o evento load e liga esse evento à função definida aqui.
*/ window.addEventListener('load',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Essa declaração usa const para preparar notice, mantendo essas referências fixas.
*/ const  /* Aqui notice recebe o resultado de document.get Element By Id.
*/ notice =  /* Procura o elemento pelo identificador loading help. */ document.getElementById('loading-help');
     /* Esse teste confere se notice não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!notice)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('link[rel="stylesheet"]').forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ link => {
       /* Esse teste confere se link.sheet não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!link.sheet)  /* Acrescenta esse valor no fim da lista.
*/ failures.push( /* Lê o atributo href desse elemento. */ link.getAttribute('href'));
    });
     /* Esse teste confere se o resultado de Array.is Array não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(window.ASSETS))  /* Acrescenta esse valor no fim da lista.
*/ failures.push('js/assets.js');
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('img[src]').forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ img => {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ( /* Lê o atributo src desse elemento. */ img.getAttribute('src') && !img.naturalWidth)  /* Acrescenta esse valor no fim da lista.
*/ failures.push( /* Lê o atributo src desse elemento. */ img.getAttribute('src'));
    });
     /* Esse teste confere se failures.length não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!failures.length) {
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ notice.hidden = true;
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ notice.replaceChildren();
     /* Essa declaração usa const para preparar title, mantendo essas referências fixas.
*/ const  /* Aqui title recebe o resultado de document.create Element.
*/ title =  /* Cria um elemento HTML do tipo strong. */ document.createElement('strong');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ title.textContent = 'Alguns arquivos do SENTIA não carregaram.';
     /* Essa declaração usa const para preparar instructions, mantendo essas referências fixas.
*/ const  /* Aqui instructions recebe o resultado de document.create Element.
*/ instructions =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ instructions.textContent = 'Extraia o ZIP inteiro antes de abrir. Use o index.html da pasta Sentia junto das pastas css, js e assets. Abra essa pasta no VS Code para editar; o site e o Jardim funcionam diretamente. Só o modo compartilhado do registro precisa de Apache/MySQL em http://localhost/Sentia/. Não use o HTML-puro de avaliação para executar o site.';
     /* Essa declaração usa const para preparar detail, mantendo essas referências fixas.
*/ const  /* Aqui detail recebe o resultado de document.create Element.
*/ detail =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ detail.textContent = 'Confira estes arquivos: ' +  /* Junta as partes da lista em um texto. */ [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Cria uma instância de Set para usar nesse recurso. */ new Set(failures)].join(', ');
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ notice.append(title, instructions, detail);
  });
})();
