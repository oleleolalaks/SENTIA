 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                       
                                                                                 
                                                                                                    
 /* Essa declaração usa const para preparar atalho de seleção de elementos, mantendo essas referências fixas.
*/ const  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação.
*/ $ =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ selector =>  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector(selector);
 /* Essa declaração usa const para preparar active Alerts, mantendo essas referências fixas.
*/ const  /* Aqui active Alerts recebe uma lista com 0 posições.
*/ activeAlerts = [];
 /* Essa declaração usa const para preparar storage, mantendo essas referências fixas.
*/ const  /* Aqui storage recebe um objeto com os campos dessa parte.
*/ storage = {
   /* Esse campo guarda get com uma função para executar quando for chamada.
*/ get /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (key, fallback) {
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* Converte o texto JSON em dados que o programa consegue usar. */ JSON.parse( /* Lê o valor salvo com a chave key. */ localStorage.getItem(key)) ?? fallback;
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
       /* Devolve fallback e encerra essa chamada da função.
*/ return fallback;
    }
  },
   /* Esse campo guarda set com uma função para executar quando for chamada.
*/ set /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (key, value) {
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Salva o valor usando a chave key.
*/ localStorage.setItem(key,  /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(value));
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
       /* esse comando cria um aviso que pode ser dispensado e limita a pilha aos três mais recentes.
*/ alertBox('O navegador não conseguiu guardar os dados. Você pode continuar nesta sessão.');
    }
  }
};
 /* Essa declaração usa const para preparar emotions, mantendo essas referências fixas.
*/ const  /* Aqui emotions recebe uma lista com 10 posições.
*/ emotions = [ /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda felicidade.
*/ 'felicidade',  /* Essa posição da lista guarda Felicidade.
*/ 'Felicidade',  /* Essa posição da lista guarda Perceber e compartilhar o que faz bem.
*/ 'Perceber e compartilhar o que faz bem.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A felicidade pode aparecer em uma conquista, em companhia ou em um detalhe cotidiano. Ela não exige estar animado o tempo inteiro.',  /* Essa posição da lista guarda Que pequena coisa mereceu sua atenção hoje.
*/ 'Que pequena coisa mereceu sua atenção hoje?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda amor.
*/ 'amor',  /* Essa posição da lista guarda Amor.
*/ 'Amor',  /* Essa posição da lista guarda Cuidado vínculo e presença.
*/ 'Cuidado, vínculo e presença.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'O amor aparece em diferentes relações e gestos de cuidado. Cuidar também envolve ouvir limites e reconhecer os próprios.',  /* Essa posição da lista guarda Como você demonstra que se importa.
*/ 'Como você demonstra que se importa?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda tristeza.
*/ 'tristeza',  /* Essa posição da lista guarda Tristeza.
*/ 'Tristeza',  /* Essa posição da lista guarda Um espaço para reconhecer perdas.
*/ 'Um espaço para reconhecer perdas.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A tristeza pode acompanhar perdas, mudanças e frustrações. Não precisa ser escondida ou resolvida imediatamente. Companhia e tempo podem ajudar a acolhê-la.',  /* Essa posição da lista guarda O que você gostaria que alguém escutasse.
*/ 'O que você gostaria que alguém escutasse?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda orgulho.
*/ 'orgulho',  /* Essa posição da lista guarda Orgulho.
*/ 'Orgulho',  /* Essa posição da lista guarda Reconhecer o valor do seu caminho.
*/ 'Reconhecer o valor do seu caminho.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Orgulho pode ser reconhecer esforço e conquistas. Ele convive com admitir erros e aprender, sem precisar diminuir ninguém.',  /* Essa posição da lista guarda De qual esforço seu você se lembra com carinho.
*/ 'De qual esforço seu você se lembra com carinho?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda determinacao.
*/ 'determinacao',  /* Essa posição da lista guarda Determinação.
*/ 'Determinação',  /* Essa posição da lista guarda Persistir com espaço para ajustar.
*/ 'Persistir com espaço para ajustar.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Determinação é uma disposição para continuar em direção a algo importante. Mudar de estratégia ou descansar não apaga o que foi construído.',  /* Essa posição da lista guarda Qual próximo passo cabe no seu dia.
*/ 'Qual próximo passo cabe no seu dia?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda calma.
*/ 'calma',  /* Essa posição da lista guarda Calma.
*/ 'Calma',  /* Essa posição da lista guarda Encontrar um intervalo no movimento.
*/ 'Encontrar um intervalo no movimento.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Calma não significa ausência de problemas. Pode ser um momento em que há espaço para observar e decidir sem agir imediatamente.',  /* Essa posição da lista guarda Onde você encontra um pequeno intervalo.
*/ 'Onde você encontra um pequeno intervalo?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade',  /* Essa posição da lista guarda Ansiedade.
*/ 'Ansiedade',  /* Essa posição da lista guarda Antecipar o que ainda não aconteceu.
*/ 'Antecipar o que ainda não aconteceu.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A ansiedade pode acompanhar incertezas e expectativas. Reconhecer o que está acontecendo agora ajuda a separar uma possibilidade de um fato.',  /* Essa posição da lista guarda O que está ao seu alcance neste momento.
*/ 'O que está ao seu alcance neste momento?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda medo.
*/ 'medo',  /* Essa posição da lista guarda Medo.
*/ 'Medo',  /* Essa posição da lista guarda Perceber riscos e buscar proteção.
*/ 'Perceber riscos e buscar proteção.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'O medo chama atenção para ameaças percebidas. O contexto importa: nem todo alerta significa perigo imediato, e pedir apoio pode ajudar a avaliar uma situação.',  /* Essa posição da lista guarda O que faria você se sentir acompanhado.
*/ 'O que faria você se sentir acompanhado?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda culpa.
*/ 'culpa',  /* Essa posição da lista guarda Culpa.
*/ 'Culpa',  /* Essa posição da lista guarda Revisitar ações e responsabilidades.
*/ 'Revisitar ações e responsabilidades.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A culpa pode convidar a reconhecer um erro e reparar o que for possível. Ser responsável por uma ação não significa ser responsável por tudo.',  /* Essa posição da lista guarda Existe um reparo possível pequeno e concreto.
*/ 'Existe um reparo possível, pequeno e concreto?'],  /* Essa posição reúne 5 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda odio.
*/ 'odio',  /* Essa posição da lista guarda Ódio.
*/ 'Ódio',  /* Essa posição da lista guarda Reconhecer uma hostilidade intensa.
*/ 'Reconhecer uma hostilidade intensa.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'O ódio pode reunir hostilidade, dor e rejeição intensas. Sentir algo não torna qualquer ação inevitável: é possível buscar distância, cuidado e formas seguras de lidar com o conflito.',  /* Essa posição da lista guarda Qual limite precisa ser respeitado sem ferir ninguém.
*/ 'Qual limite precisa ser respeitado sem ferir ninguém?']];
 /* Essa declaração usa const para preparar find Asset, mantendo essas referências fixas.
*/ const  /* esse comando procura no catálogo o caminho da imagem aprovada que será mostrada.
*/ findAsset =  /* esse comando procura no catálogo o caminho da imagem aprovada que será mostrada. */ part =>  /* Procura o primeiro item que passa na condição indicada. */ ASSETS.find( /* Essa função recebe p e devolve o resultado de p.includes. */ p =>  /* Confere se esse valor está presente na lista ou no texto. */ p.includes(part));
 /* Essa declaração usa const para preparar sprite, mantendo essas referências fixas.
*/ const  /* esse comando encontra a representação pequena do sentimento usada no Atlas e nas lanternas.
*/ sprite =  /* esse comando encontra a representação pequena do sentimento usada no Atlas e nas lanternas. */ id =>  /* esse comando procura no catálogo o caminho da imagem aprovada que será mostrada. */ findAsset('/02-No-Cenario-64/' + id + '/00-base.png');
 /* Essa declaração usa const para preparar stored Discoveries, mantendo essas referências fixas.
*/ const  /* Aqui stored Discoveries recebe o resultado de storage.get.
*/ storedDiscoveries =  /* esse comando tenta ler um valor salvo e usa a alternativa recebida quando não consegue. */ storage.get('sentia-discoveries', []);
 /* Essa declaração usa let para preparar discoveries, permitindo atualizar esses valores depois.
*/ let  /* Aqui discoveries recebe uma instância de Set.
*/ discoveries =  /* Cria uma instância de Set para usar nesse recurso. */ new Set( /* Monta uma lista somente com os valores que passam no teste. */ ( /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedDiscoveries) ? storedDiscoveries : []).filter( /* Essa função recebe x e devolve o resultado dessa expressão. */ x =>  /* Confere se o valor é um número inteiro. */ Number.isInteger(x) && x >= 0 && x < 7));
 /* Essa declaração usa const para preparar lantern Ids, mantendo essas referências fixas.
*/ const  /* Aqui lantern Ids recebe uma lista com 6 posições.
*/ lanternIds = [ /* Essa posição da lista guarda medo.
*/ 'medo',  /* Essa posição da lista guarda calma.
*/ 'calma',  /* Essa posição da lista guarda orgulho.
*/ 'orgulho',  /* Essa posição da lista guarda amor.
*/ 'amor',  /* Essa posição da lista guarda tristeza.
*/ 'tristeza',  /* Essa posição da lista guarda determinacao.
*/ 'determinacao'];
 /* Essa declaração usa const para preparar lantern Clues, mantendo essas referências fixas.
*/ const  /* Aqui lantern Clues recebe um objeto com os campos dessa parte.
*/ lanternClues = {
   /* Esse campo guarda medo com uma lista com 2 posições.
*/ medo: [ /* Essa posição da lista guarda E.
*/ 'E',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Na fila numerada de 1 a 6, Medo fica antes de Calma. Não precisam ser vizinhos.'],
   /* Esse campo guarda calma com uma lista com 2 posições.
*/ calma: [ /* Essa posição da lista guarda S.
*/ 'S',  /* Essa posição da lista guarda Calma ocupa uma posição de número par 2 4 ou 6.
*/ 'Calma ocupa uma posição de número par: 2, 4 ou 6.'],
   /* Esse campo guarda orgulho com uma lista com 2 posições.
*/ orgulho: [ /* Essa posição da lista guarda T.
*/ 'T',  /* Essa posição da lista guarda Orgulho fica antes de Amor. Não precisam ser vizinhos.
*/ 'Orgulho fica antes de Amor. Não precisam ser vizinhos.'],
   /* Esse campo guarda amor com uma lista com 2 posições.
*/ amor: [ /* Essa posição da lista guarda U.
*/ 'U',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Amor vem exatamente duas posições antes de Determinação: há uma lanterna entre os dois.'],
   /* Esse campo guarda tristeza com uma lista com 2 posições.
*/ tristeza: [ /* Essa posição da lista guarda C.
*/ 'C',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Orgulho fica entre Medo e Tristeza, à mesma distância dos dois. Conte as posições da fila.'],
   /* Esse campo guarda determinacao com uma lista com 2 posições.
*/ determinacao: [ /* Essa posição da lista guarda A.
*/ 'A',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Use cada sentimento uma única vez. Para a palavra, siga os selos de 1 a 3: em cada par, leia primeiro a marca da lanterna em posição ímpar e depois a da posição par. A ordem dos campos do selo não muda essa leitura.']
};
 /* Essa declaração usa const para preparar seal Pairs, mantendo essas referências fixas.
*/ const  /* Aqui seal Pairs recebe uma lista com 3 posições.
*/ sealPairs = [ /* Essa posição da lista guarda calma medo.
*/ 'calma+medo',  /* Essa posição da lista guarda amor tristeza.
*/ 'amor+tristeza',  /* Essa posição da lista guarda determinacao orgulho.
*/ 'determinacao+orgulho'];
 /* Essa declaração usa const para preparar seal Verses, mantendo essas referências fixas.
*/ const  /* Aqui seal Verses recebe uma lista com 3 posições.
*/ sealVerses = [ /* Essa posição da lista guarda O aviso encontra espaço para respirar.
*/ 'O aviso encontra espaço para respirar.',  /* Essa posição da lista guarda A falta ainda guarda um vínculo.
*/ 'A falta ainda guarda um vínculo.',  /* Essa posição da lista guarda Reconhecer o caminho e dar o próximo passo.
*/ 'Reconhecer o caminho e dar o próximo passo.'];
 /* Essa declaração usa const para preparar trail Weights, mantendo essas referências fixas.
*/ const  /* Aqui trail Weights recebe uma lista com 16 posições.
*/ trailWeights = [ /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 3.
*/ 3,  /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 4.
*/ 4,  /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 2.
*/ 2,  /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 1.
*/ 1];
 /* Essa declaração usa const para preparar stored Puzzle, mantendo essas referências fixas.
*/ const  /* Aqui stored Puzzle recebe o resultado dessa expressão.
*/ storedPuzzle =  /* esse comando tenta ler um valor salvo e usa a alternativa recebida quando não consegue. */ storage.get('sentia-portal-puzzle-v2', {}) || {};
 /* Essa declaração usa const para preparar puzzle, mantendo essas referências fixas.
*/ const  /* Aqui puzzle recebe um objeto com os campos dessa parte.
*/ puzzle = {
   /* Identifica o formato dos dados para conferir a compatibilidade.
*/ version: 2,
   /* Esse campo guarda stage com uma das duas alternativas, conforme o teste.
*/ stage:  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda 1.
*/ 1,  /* Essa posição da lista guarda 2.
*/ 2,  /* Essa posição da lista guarda 3.
*/ 3,  /* Essa posição da lista guarda 4.
*/ 4,  /* Essa posição da lista guarda 5.
*/ 5].includes(storedPuzzle.stage) ? storedPuzzle.stage : 1,
   /* aqui fica a sequência de casas escolhidas no caminho do mosaico.
*/ trail:  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedPuzzle.trail) &&  /* esse comando verifica direção, quantidade de casas, paradas obrigatórias e soma do caminho no mosaico. */ validTrail(storedPuzzle.trail) ? [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...storedPuzzle.trail] : [],
   /* aqui ficam os fragmentos do Atlas que já foram guardados no caderno.
*/ clues:  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedPuzzle.clues) ? [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Cria uma instância de Set para usar nesse recurso. */ new Set( /* Monta uma lista somente com os valores que passam no teste. */ storedPuzzle.clues.filter( /* Essa função recebe x e devolve o resultado de lantern Ids.includes. */ x =>  /* Confere se esse valor está presente na lista ou no texto. */ lanternIds.includes(x)))] : [],
   /* aqui ficam os vínculos do enigma já encontrados na Convergência.
*/ combinations:  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedPuzzle.combinations) ? [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Cria uma instância de Set para usar nesse recurso. */ new Set( /* Monta uma lista somente com os valores que passam no teste. */ storedPuzzle.combinations.map( /* Essa função recebe x e devolve uma das duas alternativas, conforme o teste. */ x => typeof x==='string'? /* Junta as partes da lista em um texto. */ x.split('+').sort().join('+'):'').filter( /* Essa função recebe x e devolve o resultado de seal Pairs.includes. */ x =>  /* Confere se esse valor está presente na lista ou no texto. */ sealPairs.includes(x)))] : [],
   /* aqui fica a disposição escolhida para as seis lanternas.
*/ order:  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedPuzzle.order) && storedPuzzle.order.length === 6 ?  /* Monta uma nova lista transformando cada posição da lista original. */ storedPuzzle.order.map( /* Essa função recebe x e devolve uma das duas alternativas, conforme o teste. */ x =>  /* Confere se esse valor está presente na lista ou no texto. */ lanternIds.includes(x) ? x : '') :  /* Preenche o caminho ou as posições usando o valor indicado. */ Array(6).fill(''),
   /* aqui ficam os pares escolhidos nos três selos do enigma.
*/ seals:  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedPuzzle.seals??storedPuzzle.pairs) && (storedPuzzle.seals??storedPuzzle.pairs).length === 3 ?  /* Monta uma nova lista transformando cada posição da lista original. */ (storedPuzzle.seals??storedPuzzle.pairs).map( /* Essa função recebe pair e devolve uma das duas alternativas, conforme o teste. */ pair =>  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(pair) && pair.length === 2 ?  /* Monta uma nova lista transformando cada posição da lista original. */ pair.map( /* Essa função recebe x e devolve uma das duas alternativas, conforme o teste. */ x =>  /* Confere se esse valor está presente na lista ou no texto. */ lanternIds.includes(x) ? x : '') : [ /* Essa posição da lista guarda um texto vazio.
*/ '',  /* Essa posição da lista guarda um texto vazio.
*/ '']) :  /* Cria uma lista a partir dos valores recebidos. */ Array.from({ /* Esse campo guarda length com 3.
*/ length:3},  /* Essa função recebe nenhum parâmetro e devolve uma lista com 2 posições. */ () => [ /* Essa posição da lista guarda um texto vazio.
*/ '',  /* Essa posição da lista guarda um texto vazio.
*/ '']),
   /* aqui fica a quantidade de tentativas registradas no enigma.
*/ attempts:  /* Confere se o valor é um número inteiro. */ Number.isInteger(storedPuzzle.attempts) && storedPuzzle.attempts >= 0 ? storedPuzzle.attempts : 0,
   /* aqui fica a quantidade de dicas abertas na etapa atual.
*/ hints:  /* Confere se o valor é um número inteiro. */ Number.isInteger(storedPuzzle.hints) ?  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(3, storedPuzzle.hints)) : 0,
   /* aqui fica a indicação de que todas as etapas do portal já foram resolvidas.
*/ solved: storedPuzzle.solved === true
};
 /* Esse teste confere se puzzle.solved está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.solved)  /* Atualiza puzzle.stage usando 5.
*/ puzzle.stage = 5;
else  /* Esse teste confere se puzzle.stage é igual a 5, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.stage === 5)  /* Atualiza puzzle.stage usando 1.
*/ puzzle.stage = 1;
 /* Essa declaração usa const para preparar stored Collection, mantendo essas referências fixas.
*/ const  /* Aqui stored Collection recebe o resultado de storage.get.
*/ storedCollection =  /* esse comando tenta ler um valor salvo e usa a alternativa recebida quando não consegue. */ storage.get('sentia-collection', []);
 /* Essa declaração usa let para preparar collection, permitindo atualizar esses valores depois.
*/ let  /* Aqui collection recebe uma instância de Set.
*/ collection =  /* Cria uma instância de Set para usar nesse recurso. */ new Set( /* Monta uma lista somente com os valores que passam no teste. */ ( /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(storedCollection) ? storedCollection : []).filter( /* Essa função recebe x e devolve o resultado de emotions.some. */ x =>  /* Confere se pelo menos um item passa no teste. */ emotions.some( /* Essa função recebe e e devolve o resultado dessa expressão. */ e => e[0] === x)));
                                                                                     
 /* Percorre cada valor de lantern Ids usando id nesta repetição.
*/ for( /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe nenhum valor inicial.
*/ id of lanternIds) /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente no conjunto ou mapa. */ collection.has(id)&&! /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(id)) /* Acrescenta esse valor no fim da lista.
*/ puzzle.clues.push(id);
 /* Essa declaração usa let para preparar puzzle Restored, permitindo atualizar esses valores depois.
*/ let  /* Aqui puzzle Restored recebe false.
*/ puzzleRestored=false;
 /* Esse teste confere se puzzle.solved não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!puzzle.solved) {
   /* Essa declaração usa const para preparar valid Order, mantendo essas referências fixas.
*/ const  /* Aqui valid Order recebe o resultado dessa expressão.
*/ validOrder= /* Cria uma instância de Set para usar nesse recurso. */ new Set(puzzle.order).size===6&& /* Confere se todos os itens passam no teste. */ puzzle.order.every(Boolean)&& /* Confere se todos os itens passam no teste. */ orderRules(puzzle.order).every(Boolean);
   /* Essa declaração usa const para preparar valid Seals, mantendo essas referências fixas.
*/ const  /* Aqui valid Seals recebe o resultado de puzzle.seals.every.
*/ validSeals= /* Confere se todos os itens passam no teste. */ puzzle.seals.every( /* Essa função recebe pair e i e devolve o resultado dessa expressão. */ (pair,i)=>pair[0]&&pair[1]&& /* Junta as partes da lista em um texto. */ [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...pair].sort().join('+')===sealPairs[i]);
                                                                                          
   /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(puzzle.stage>1&&!validOrder){ /* Atualiza puzzle.stage usando 1.
*/ puzzle.stage=1; /* Atualiza puzzle Restored usando true.
*/ puzzleRestored=true;}
  else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(puzzle.stage>2&&!validSeals){ /* Atualiza puzzle.stage usando 2.
*/ puzzle.stage=2; /* Atualiza puzzle Restored usando true.
*/ puzzleRestored=true;}
}
 /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-portal-puzzle-v2',puzzle);
 /* Essa declaração usa let para preparar collection Only, permitindo atualizar esses valores depois.
*/ let  /* Aqui collection Only recebe false.
*/ collectionOnly = false;
                                                                                    
 /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ function savePuzzle() {
   /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-portal-puzzle-v2', puzzle);
   /* esse comando mostra quantos fragmentos foram encontrados e atualiza a situação de entrada do Jardim.
*/ renderDiscoveries();
}
 /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ function discover(id) {
   /* Esse teste confere se o resultado de discoveries.has não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente no conjunto ou mapa. */ discoveries.has(id)) {
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ discoveries.add(id);
     /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-discoveries', [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...discoveries]);
  }
   /* esse comando mostra quantos fragmentos foram encontrados e atualiza a situação de entrada do Jardim.
*/ renderDiscoveries();
}
 /* esse comando mostra quantos fragmentos foram encontrados e atualiza a situação de entrada do Jardim.
*/ function renderDiscoveries() {
                                                                      
   /* Essa declaração usa const para preparar dots, mantendo essas referências fixas.
*/ const  /* Aqui dots recebe uma lista com 0 posições.
*/ dots=[];
   /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<lanternIds.length; /* Aumenta i em um para atualizar o contador. */ i++){
     /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe lantern Ids.i.
*/ id=lanternIds[i];
     /* Essa declaração usa const para preparar dot, mantendo essas referências fixas.
*/ const  /* Aqui dot recebe o resultado de document.create Element.
*/ dot =  /* Cria um elemento HTML do tipo i. */ document.createElement('i');
     /* Essa declaração usa const para preparar found, mantendo essas referências fixas.
*/ const  /* Aqui found recebe o resultado de puzzle.clues.includes.
*/ found =  /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(id);
     /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe 1.
*/ label =  /* Procura o primeiro item que passa na condição indicada. */ emotions.find( /* Essa função recebe e e devolve o resultado dessa expressão. */ e => e[0] === id)[1];
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ dot.classList.toggle('found', found);
     /* Atualiza dot.title usando o resultado dessa expressão.
*/ dot.title = 'Pista de ' + label;
     /* Define o atributo role desse elemento.
*/ dot.setAttribute('role', 'img');
     /* Define o atributo aria label desse elemento.
*/ dot.setAttribute('aria-label', 'Pista de ' + label + (found ? ': encontrada' : ': por descobrir'));
     /* Acrescenta esse valor no fim da lista.
*/ dots.push(dot);
  }
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#discoveries').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...dots);
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#discovery-text').textContent = puzzle.solved ? 'O enigma foi resolvido. O caminho continua aberto neste navegador.' : puzzle.clues.length + ' de 6 pistas no caderno · ' + (puzzle.stage - 1) + ' de 4 etapas resolvidas. Visitar páginas não abre esta porta: as pistas precisam se conectar.';
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#garden-entry').textContent = puzzle.solved ? 'Entrar no Jardim ↗' : 'Resolver o enigma das lanternas ↓';
}
                                                                                        
 /* esse comando cria um aviso que pode ser dispensado e limita a pilha aos três mais recentes.
*/ function alertBox(text) {
   /* Essa declaração usa const para preparar box, mantendo essas referências fixas.
*/ const  /* Aqui box recebe o resultado de document.create Element.
*/ box= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ box.className='alert';
   /* Essa declaração usa const para preparar message, mantendo essas referências fixas.
*/ const  /* Aqui message recebe o resultado de document.create Element.
*/ message= /* Cria um elemento HTML do tipo span. */ document.createElement('span'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ message.textContent=text;
   /* Essa declaração usa const para preparar close, mantendo essas referências fixas.
*/ const  /* Aqui close recebe o resultado de document.create Element.
*/ close= /* Cria um elemento HTML do tipo button. */ document.createElement('button'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ close.textContent='×'; /* Define o atributo aria label desse elemento.
*/ close.setAttribute('aria-label','Dispensar aviso');
   /* Essa declaração usa const para preparar dismiss, mantendo essas referências fixas.
*/ const  /* esse comando remove o aviso da tela e da lista de notificações ativas.
*/ dismiss= /* esse comando remove o aviso da tela e da lista de notificações ativas. */ ()=>{ /* Retira esse elemento da página.
*/ box.remove(); /* Essa declaração usa const para preparar index, mantendo essas referências fixas.
*/ const  /* Aqui index recebe o resultado de active Alerts.index Of.
*/ index= /* Procura a posição desse valor na lista ou no texto. */ activeAlerts.indexOf(box); /* Esse teste confere se index é maior ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(index>=0) /* Retira ou coloca itens a partir da posição indicada.
*/ activeAlerts.splice(index,1);};
   /* Escuta o evento click e liga esse evento à função definida aqui.
*/ close.addEventListener('click',dismiss);
   /* Executa box.append Child com os valores definidos nessa parte.
*/ box.appendChild(message); /* Executa box.append Child com os valores definidos nessa parte.
*/ box.appendChild(close);
                                                                                 
   /* Acrescenta os elementos indicados ao começo desse conteúdo.
*/ document.getElementById('alerts').prepend(box); /* Coloca esse valor no começo da lista.
*/ activeAlerts.unshift(box);
   /* Repete essa parte enquanto active Alerts.length é maior que 3.
*/ while(activeAlerts.length>3){ /* Essa declaração usa const para preparar oldest, mantendo essas referências fixas.
*/ const  /* Aqui oldest recebe o resultado de active Alerts.pop.
*/ oldest= /* Retira e devolve o último valor da lista. */ activeAlerts.pop(); /* Retira esse elemento da página.
*/ oldest.remove();}
   /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout(dismiss,7000);
}
 /* Essa declaração usa let para preparar modal Return, permitindo atualizar esses valores depois.
*/ let  /* Aqui modal Return recebe um valor vazio.
*/ modalReturn = null;
                                                                                      
 /* esse comando abre a janela, define seu nome acessível e guarda o controle para devolver o foco ao fechar.
*/ function openModal(content) {
   /* Essa declaração usa const para preparar origin, mantendo essas referências fixas.
*/ const  /* Aqui origin recebe document.active Element.
*/ origin = document.activeElement;
   /* Atualiza modal Return usando um objeto com os campos dessa parte.
*/ modalReturn = {
     /* Esse campo guarda element com origin.
*/ element: origin,
     /* Esse campo guarda emotion com origin.dataset.emotion Id.
*/ emotion: origin?.dataset.emotionId,
     /* Esse campo guarda task com origin.dataset.task Edit.
*/ task: origin?.dataset.taskEdit
  };
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#modal-body').replaceChildren(content);
   /* Essa declaração usa const para preparar heading, mantendo essas referências fixas.
*/ const  /* Aqui heading recebe o resultado de content.query Selector.
*/ heading =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ content.querySelector('h2,h1,h3');
   /* Retira o atributo aria label desse elemento.
*/ $('#modal').removeAttribute('aria-label');
   /* Retira o atributo aria labelledby desse elemento.
*/ $('#modal').removeAttribute('aria-labelledby');
   /* Esse teste confere se heading está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (heading) {
     /* Atualiza heading.id usando modal title.
*/ heading.id = 'modal-title';
     /* Atualiza heading.tab Index usando o resultado dessa expressão.
*/ heading.tabIndex = -1;
     /* Define o atributo aria labelledby desse elemento.
*/ $('#modal').setAttribute('aria-labelledby', heading.id);
  } else  /* Define o atributo aria label desse elemento.
*/ $('#modal').setAttribute('aria-label',  /* Retira os espaços extras do começo e do fim do texto. */ content.querySelector('label')?.textContent.trim() || 'SENTIA');
   /* Abre esse diálogo como uma janela modal.
*/ $('#modal').showModal();
   /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ ( /* Procura o primeiro elemento da página que corresponde ao seletor. */ content.querySelector('input,textarea,select') || heading)?.focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
}
 /* Liga essa função ao clique desse controle.
*/ $('#modal .close').onclick =  /* Essa função recebe nenhum parâmetro e devolve o resultado de .close. */ () =>  /* Fecha essa janela ou recurso que estava aberto. */ $('#modal').close();
                                                                                                     
 /* Escuta o evento close e liga esse evento à função definida aqui.
*/ $('#modal').addEventListener('close',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Esse teste confere se modal Return não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!modalReturn)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Essa declaração usa const para preparar target, mantendo essas referências fixas.
*/ const  /* Aqui target recebe uma das duas alternativas, conforme o teste.
*/ target = modalReturn.emotion ?  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector('[data-emotion-id="' +  /* Prepara o valor para ser usado com segurança como parte de um seletor CSS. */ CSS.escape(modalReturn.emotion) + '"]') : modalReturn.task ?  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector('[data-task-edit="' +  /* Prepara o valor para ser usado com segurança como parte de um seletor CSS. */ CSS.escape(modalReturn.task) + '"]') : modalReturn.element;
   /* Leva o foco do teclado para esse elemento.
*/ (target?.isConnected &&  /* Executa target.get Client Rects com os valores definidos nessa parte. */ target.getClientRects().length ? target :  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#conteudo')).focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
   /* Atualiza modal Return usando um valor vazio.
*/ modalReturn = null;
});
 /* Escuta o evento click e liga esse evento à função definida aqui.
*/ $('#modal').addEventListener('click',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Esse teste confere se e.target é igual a o resultado de atalho de seleção de elementos, e só entra nesse caminho quando a condição passa.
*/ if (e.target ===  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#modal')) {
     /* Essa declaração usa const para preparar r, mantendo essas referências fixas.
*/ const  /* Aqui r recebe o resultado de e.target.get Bounding Client Rect.
*/ r =  /* Mede a posição e o tamanho real do elemento na tela. */ e.target.getBoundingClientRect();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)  /* Fecha essa janela ou recurso que estava aberto.
*/ e.target.close();
  }
});
                                                                                          
 /* esse comando filtra os sentimentos e prepara cartões com descrição, pergunta e descoberta para guardar.
*/ function renderAtlas() {
   /* Essa declaração usa const para preparar q, mantendo essas referências fixas.
*/ const  /* Aqui q recebe o resultado de .to Lower Case.
*/ q =  /* Converte o texto para minúsculas para facilitar a comparação. */ $('#busca').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
   /* Essa declaração usa const para preparar filtered, mantendo essas referências fixas.
*/ const  /* Aqui filtered recebe o resultado de emotions.filter.
*/ filtered =  /* Monta uma lista somente com os valores que passam no teste. */ emotions.filter( /* Essa função recebe e e devolve o resultado dessa expressão. */ e => (!collectionOnly ||  /* Confere se esse valor está presente no conjunto ou mapa. */ collection.has(e[0])) &&  /* Confere se esse valor está presente na lista ou no texto. */ e.join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(q));
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#emotion-grid').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ filtered.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
     /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de document.create Element.
*/ b =  /* Cria um elemento HTML do tipo button. */ document.createElement('button');
     /* Define as classes de aparência desse elemento.
*/ b.className = 'emotion-card';
     /* Atualiza b.dataset.emotion Id usando e.0.
*/ b.dataset.emotionId = e[0];
     /* Monta a marcação HTML interna desse elemento.
*/ b.innerHTML = '<span class="small">' + ( /* Confere se esse valor está presente no conjunto ou mapa. */ collection.has(e[0]) ? '✓ NA SUA COLEÇÃO' : 'SENTIR / ' +  /* Executa .pad Start com os valores definidos nessa parte. */ String( /* Procura a posição desse valor na lista ou no texto. */ emotions.indexOf(e) + 1).padStart(2, '0')) + '</span><img alt="" src="' +  /* esse comando encontra a representação pequena do sentimento usada no Atlas e nas lanternas. */ sprite(e[0]) + '"><h3>' + e[1] + '</h3><p>' + e[2] + '</p>';
     /* Liga essa função ao clique desse controle.
*/ b.onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(0);
       /* Essa declaração usa const para preparar article, mantendo essas referências fixas.
*/ const  /* Aqui article recebe o resultado de document.create Element.
*/ article =  /* Cria um elemento HTML do tipo article. */ document.createElement('article');
       /* Monta a marcação HTML interna desse elemento.
*/ article.innerHTML = '<img class="modal-sprite" alt="Representação de ' + e[1] + '" src="' +  /* esse comando encontra a representação pequena do sentimento usada no Atlas e nas lanternas. */ sprite(e[0]) + '"><p class="eyebrow">ATLAS EMOCIONAL</p><h2>' + e[1] + '</h2><p>' + e[3] + '</p><h3>Uma pergunta para levar</h3><p>' + e[4] + '</p><button class="button primary">Guardar esta descoberta ✦</button>';
       /* Esse teste confere se lantern Clues.e.0 está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (lanternClues[e[0]]) {
         /* Essa declaração usa const para preparar clue, mantendo essas referências fixas.
*/ const  /* Aqui clue recebe o resultado de document.create Element.
*/ clue =  /* Cria um elemento HTML do tipo aside. */ document.createElement('aside');
         /* Define as classes de aparência desse elemento.
*/ clue.className = 'atlas-clue';
         /* Essa declaração usa const para preparar title, mantendo essas referências fixas.
*/ const  /* Aqui title recebe o resultado de document.create Element.
*/ title =  /* Cria um elemento HTML do tipo strong. */ document.createElement('strong');
         /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ title.textContent = 'Fragmento das lanternas' + (puzzle.stage > 1 ? ' · marca ' + lanternClues[e[0]][0] : '');
         /* Essa declaração usa const para preparar text, mantendo essas referências fixas.
*/ const  /* Aqui text recebe o resultado de document.create Element.
*/ text =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
         /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ text.textContent = lanternClues[e[0]][1];
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ clue.append(title, text);
         /* Executa .before com os valores definidos nessa parte.
*/ article.querySelector('button').before(clue);
      }
       /* Liga essa função ao clique desse controle.
*/ article.querySelector('button').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ collection.add(e[0]);
         /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-collection', [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...collection]);
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (lanternClues[e[0]] && ! /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(e[0]))  /* Acrescenta esse valor no fim da lista.
*/ puzzle.clues.push(e[0]);
         /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle();
         /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(1);
         /* Fecha essa janela ou recurso que estava aberto.
*/ $('#modal').close();
         /* esse comando filtra os sentimentos e prepara cartões com descrição, pergunta e descoberta para guardar.
*/ renderAtlas();
         /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
         /* esse comando cria um aviso que pode ser dispensado e limita a pilha aos três mais recentes.
*/ alertBox(lanternClues[e[0]] ? 'Descoberta guardada. A pista foi copiada para o caderno das lanternas.' : 'Descoberta guardada na sua coleção.');
      };
       /* esse comando abre a janela, define seu nome acessível e guarda o controle para devolver o foco ao fechar.
*/ openModal(article);
    };
     /* Devolve b e encerra essa chamada da função.
*/ return b;
  }));
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#search-count').textContent = filtered.length ? filtered.length + ' sentimentos encontrados.' : collectionOnly && !collection.size ? 'Sua coleção ainda está vazia. Abra um sentimento e guarde uma descoberta.' : 'Nenhum resultado. Tente outra palavra ou limpe os filtros.';
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#collection-filter').textContent = collectionOnly ? 'Mostrar todos os sentimentos' : 'Minha coleção (' + collection.size + ')';
   /* Define o atributo aria pressed desse elemento.
*/ $('#collection-filter').setAttribute('aria-pressed',  /* Converte esse valor para texto. */ String(collectionOnly));
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#clear-atlas-filters').hidden = !q && !collectionOnly;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#atlas-empty').hidden = !!filtered.length;
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#atlas-empty p').textContent = collectionOnly && !collection.size ? 'Abra um sentimento no Atlas e toque em “Guardar esta descoberta” para montar sua coleção.' : 'Experimente outra palavra ou limpe os filtros para explorar o Atlas.';
}
 /* Liga essa função à digitação nesse campo.
*/ $('#busca').oninput = renderAtlas;
 /* Liga essa função ao clique desse controle.
*/ $('#clear-atlas-filters').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Atualiza o valor desse campo ou controle.
*/ $('#busca').value = '';
   /* Atualiza collection Only usando false.
*/ collectionOnly = false;
   /* esse comando filtra os sentimentos e prepara cartões com descrição, pergunta e descoberta para guardar.
*/ renderAtlas();
   /* Leva o foco do teclado para esse elemento.
*/ $('#busca').focus();
};
 /* Liga essa função ao clique desse controle.
*/ $('#collection-filter').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Atualiza collection Only usando a negação de collection Only.
*/ collectionOnly = !collectionOnly;
   /* esse comando filtra os sentimentos e prepara cartões com descrição, pergunta e descoberta para guardar.
*/ renderAtlas();
};
 /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição da lista guarda emocao a.
*/ '#emocao-a',  /* Essa posição da lista guarda emocao b.
*/ '#emocao-b'].forEach( /* Essa função recebe s e devolve o resultado de emotions.for Each. */ s =>  /* Percorre os itens e executa a função indicada em cada um. */ emotions.forEach( /* Essa função recebe e e devolve o resultado de .add. */ e =>  /* Acrescenta esse valor ao conjunto ou à lista de classes. */ $(s).add( /* Cria uma instância de Option para usar nesse recurso. */ new Option(e[1], e[0]))));
 /* Atualiza o valor desse campo ou controle.
*/ $('#emocao-b').value = 'medo';
 /* Liga essa função ao clique desse controle.
*/ $('#combinar').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Essa declaração usa const para preparar a e b, mantendo essas referências fixas.
*/ const  /* Aqui a recebe o resultado de emotions.find.
*/ a =  /* Procura o primeiro item que passa na condição indicada. */ emotions.find( /* Essa função recebe e e devolve o resultado dessa expressão. */ e => e[0] ===  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#emocao-a').value),
     /* Aqui b recebe o resultado de emotions.find.
*/ b =  /* Procura o primeiro item que passa na condição indicada. */ emotions.find( /* Essa função recebe e e devolve o resultado dessa expressão. */ e => e[0] ===  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#emocao-b').value);
   /* Esse teste confere se a é igual a b, e só entra nesse caminho quando a condição passa.
*/ if (a === b) {
     /* esse comando cria um aviso que pode ser dispensado e limita a pilha aos três mais recentes.
*/ alertBox('Escolha dois sentimentos diferentes para ver uma conexão.');
     /* Encerra essa função sem devolver outro valor.
*/ return;
  }
   /* Essa declaração usa const para preparar pair, mantendo essas referências fixas.
*/ const  /* Aqui pair recebe o resultado de .join.
*/ pair =  /* Junta as partes da lista em um texto. */ [a[0], b[0]].sort().join('+');
   /* Essa declaração usa const para preparar texts, mantendo essas referências fixas.
*/ const  /* Aqui texts recebe um objeto com os campos dessa parte.
*/ texts = {
     /* Esse campo guarda felicidade medo com o texto definido nessa parte.
*/ 'felicidade+medo': 'Um começo pode trazer entusiasmo e receio. Você pode reconhecer a alegria da novidade e dar um passo pequeno enquanto conhece o caminho.',
     /* Esse campo guarda amor tristeza com o texto definido nessa parte.
*/ 'amor+tristeza': 'Sentir falta pode mostrar o valor de um vínculo. O carinho não elimina a tristeza; pode oferecer companhia enquanto ela existe.',
     /* Esse campo guarda ansiedade determinacao com o texto definido nessa parte.
*/ 'ansiedade+determinacao': 'Querer seguir em frente e se preocupar com o resultado podem acontecer juntos. Separar o próximo passo de todas as possibilidades ajuda a tornar a ação concreta.',
     /* Esse campo guarda culpa orgulho com o texto definido nessa parte.
*/ 'culpa+orgulho': 'É possível reconhecer uma conquista e também perceber um erro. Um sentimento não precisa apagar a responsabilidade ou o esforço que o outro revela.',
     /* Esse campo guarda calma medo com o texto definido nessa parte.
*/ 'calma+medo': 'O alerta do medo pode coexistir com um intervalo de calma. Ter apoio e informação pode abrir espaço para escolher como agir.',
     /* Esse campo guarda determinacao orgulho com o texto definido nessa parte.
*/ 'determinacao+orgulho': 'Reconhecer o esforço que já fez pode acompanhar a vontade de continuar. Orgulho dá nome ao caminho percorrido; determinação ajuda a escolher o próximo passo, inclusive quando ele precisa ser menor.'
  };
   /* Monta a marcação HTML interna desse elemento.
*/ $('#connection').innerHTML = '<p class="eyebrow">DOIS SENTIMENTOS, UM ENCONTRO</p><h2>' + a[1] + '<br>+ ' + b[1] + '</h2><p>' + (texts[pair] || a[1] + ' e ' + b[1] + ' podem aparecer na mesma experiência. Um lado pode dizer “' +  /* Converte o texto para minúsculas para facilitar a comparação. */ a[2].toLowerCase() + '” e o outro pedir atenção a algo diferente. Observe o contexto e o que cada um destaca, sem precisar escolher um único sentimento.') + '</p>';
   /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(2);
   /* Esse teste confere se o resultado de seal Pairs.includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse valor está presente na lista ou no texto. */ sealPairs.includes(pair)) {
     /* Esse teste confere se o resultado de puzzle.combinations.includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente na lista ou no texto. */ puzzle.combinations.includes(pair))  /* Acrescenta esse valor no fim da lista.
*/ puzzle.combinations.push(pair);
     /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle();
     /* Essa declaração usa const para preparar clue, mantendo essas referências fixas.
*/ const  /* Aqui clue recebe o resultado de document.create Element.
*/ clue =  /* Cria um elemento HTML do tipo aside. */ document.createElement('aside');
     /* Define as classes de aparência desse elemento.
*/ clue.className = 'connection-clue';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ clue.textContent = 'Verso encontrado para os selos: “' + sealVerses[ /* Procura a posição desse valor na lista ou no texto. */ sealPairs.indexOf(pair)] + '”';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#connection').append(clue);
     /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
  }
};
                                                                                     
                                                                
 /* esse comando conecta formulários, filtros, exportação e escolhas de armazenamento aos registros.
*/ RegistrosSentia.init({ /* Aqui disponibiliza a operação open Modal para os outros módulos. esse comando abre a janela, define seu nome acessível e guarda o controle para devolver o foco ao fechar.
*/ openModal, /* Esse campo guarda on Discover com uma função para executar quando for chamada.
*/ onDiscover: /* Essa função recebe nenhum parâmetro e devolve o resultado de discover. */ ()=> /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador. */ discover(4)});
 /* Liga essa função à mudança desse campo.
*/ $('#reflect-choice').onchange =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Esse teste confere se value está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#reflect-choice').value)  /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(5);
};
                                                                                               
 /* Essa declaração usa const para preparar reflections, mantendo essas referências fixas.
*/ const  /* Aqui reflections recebe uma lista com 5 posições.
*/ reflections = [ /* Essa posição da lista guarda Você pode reconhecer um esforço sem esperar um resultado perfeito.
*/ 'Você pode reconhecer um esforço sem esperar um resultado perfeito.',  /* Essa posição da lista guarda Qual coisa pequena pode esperar até amanhã.
*/ 'Qual coisa pequena pode esperar até amanhã?',  /* Essa posição da lista guarda Um limite também pode ser uma forma de cuidado.
*/ 'Um limite também pode ser uma forma de cuidado.',  /* Essa posição da lista guarda É possível pedir companhia sem ter uma explicação pronta.
*/ 'É possível pedir companhia sem ter uma explicação pronta.',  /* Essa posição da lista guarda Você não precisa resolver todo o dia de uma vez.
*/ 'Você não precisa resolver todo o dia de uma vez.'];
 /* Essa declaração usa let para preparar previous Reflection, permitindo atualizar esses valores depois.
*/ let  /* Aqui previous Reflection recebe o resultado dessa expressão.
*/ previousReflection = -1;
 /* Liga essa função ao clique desse controle.
*/ $('#reflection').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async () => {
   /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de atalho de seleção de elementos.
*/ b =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#reflection');
   /* Esse teste confere se b.disabled está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (b.disabled)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Atualiza b.disabled usando true.
*/ b.disabled = true;
   /* Define o atributo aria busy desse elemento.
*/ $('#reflection-result').setAttribute('aria-busy', 'true');
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ b.textContent = 'Preparando uma pausa…';
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#reflection-result').hidden=false;
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#reflection-text').textContent='Procurando uma pequena reflexão…';
   /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
     /* Essa declaração usa const para preparar choices, mantendo essas referências fixas.
*/ const  /* Aqui choices recebe o resultado de .filter.
*/ choices =  /* Monta uma lista somente com os valores que passam no teste. */ reflections.map( /* Essa função recebe e i e devolve i. */ (_, i) => i).filter( /* Essa função recebe i e devolve o resultado dessa expressão. */ i => i !== previousReflection);
     /* Essa declaração usa const para preparar next, mantendo essas referências fixas.
*/ const  /* Aqui next recebe choices.
*/ next = choices[ /* Arredonda o número para baixo. */ Math.floor( /* Gera um número aleatório entre zero e um sem incluir o limite final. */ Math.random() * choices.length)];
     /* Essa declaração usa const para preparar text, mantendo essas referências fixas.
*/ const  /* Aqui text recebe o resultado da operação assíncrona.
*/ text =  /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* Cria uma instância de Promise para usar nesse recurso. */ new Promise( /* Essa função recebe resolve e devolve o resultado de set Timeout. */ resolve =>  /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de resolve. */ () =>  /* Entrega esse resultado como uma operação resolvida. */ resolve(reflections[next]), 700));
     /* Atualiza previous Reflection usando next.
*/ previousReflection = next;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#reflection-text').textContent = text;
  }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#reflection-text').textContent = 'Não foi possível mostrar a reflexão agora. Tente novamente.';
  } finally {
     /* Atualiza b.disabled usando false.
*/ b.disabled = false;
     /* Define o atributo aria busy desse elemento.
*/ $('#reflection-result').setAttribute('aria-busy', 'false');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ b.textContent = 'Receber outra reflexão ✦';
  }
};
 /* Liga essa função ao envio desse formulário.
*/ $('#contact-form').onsubmit =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
   /* Essa declaração usa const para preparar name e email e message, mantendo essas referências fixas.
*/ const  /* Aqui name recebe o resultado de atalho de seleção de elementos.
*/ name =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#nome'),
     /* Aqui email recebe o resultado de atalho de seleção de elementos.
*/ email =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#email'),
     /* Aqui message recebe o resultado de atalho de seleção de elementos.
*/ message =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#mensagem');
   /* Esse teste confere se length é menor que 2, e só entra nesse caminho quando a condição passa.
*/ if ( /* Retira os espaços extras do começo e do fim do texto. */ name.value.trim().length < 2) {
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#form-status').textContent = 'Escreva um nome com pelo menos 2 letras.';
     /* Define o atributo aria invalid desse elemento.
*/ name.setAttribute('aria-invalid', 'true');
     /* Leva o foco do teclado para esse elemento.
*/ name.focus();
     /* Encerra essa função sem devolver outro valor.
*/ return;
  }
   /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!email.validity.valid || ! /* Retira os espaços extras do começo e do fim do texto. */ email.value.trim()) {
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#form-status').textContent = 'Confira o formato do e-mail.';
     /* Define o atributo aria invalid desse elemento.
*/ email.setAttribute('aria-invalid', 'true');
     /* Leva o foco do teclado para esse elemento.
*/ email.focus();
     /* Encerra essa função sem devolver outro valor.
*/ return;
  }
   /* Esse teste confere se length é menor que 10, e só entra nesse caminho quando a condição passa.
*/ if ( /* Retira os espaços extras do começo e do fim do texto. */ message.value.trim().length < 10) {
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#form-status').textContent = 'A sugestão precisa ter pelo menos 10 caracteres.';
     /* Define o atributo aria invalid desse elemento.
*/ message.setAttribute('aria-invalid', 'true');
     /* Leva o foco do teclado para esse elemento.
*/ message.focus();
     /* Encerra essa função sem devolver outro valor.
*/ return;
  }
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#form-status').textContent = 'Tudo certo com os campos. Esta demonstração não envia nem armazena a mensagem.';
   /* Essa declaração usa const para preparar summary e heading e description, mantendo essas referências fixas.
*/ const  /* Aqui summary recebe o resultado de document.create Element.
*/ summary= /* Cria um elemento HTML do tipo div. */ document.createElement('div'), /* Aqui heading recebe o resultado de document.create Element.
*/ heading= /* Cria um elemento HTML do tipo h2. */ document.createElement('h2'), /* Aqui description recebe o resultado de document.create Element.
*/ description= /* Cria um elemento HTML do tipo p. */ document.createElement('p');
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ heading.textContent='Sua ideia está conferida';
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ description.textContent=`${ /* Retira os espaços extras do começo e do fim do texto. */ name.value.trim()}, os campos estão válidos. Esta demonstração não envia nem guarda seu nome, e-mail ou mensagem.`;
   /* Essa declaração usa const para preparar finish, mantendo essas referências fixas.
*/ const  /* Aqui finish recebe o resultado de document.create Element.
*/ finish= /* Cria um elemento HTML do tipo button. */ document.createElement('button'); /* Define as classes de aparência desse elemento.
*/ finish.className='button primary'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ finish.textContent='Concluir conferência';
   /* Escuta o evento click e liga esse evento à função definida aqui.
*/ finish.addEventListener('click', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Executa .reset com os valores definidos nessa parte.
*/ $('#contact-form').reset(); /* Fecha essa janela ou recurso que estava aberto.
*/ $('#modal').close(); /* esse comando cria um aviso que pode ser dispensado e limita a pilha aos três mais recentes.
*/ alertBox('Campos conferidos. Nenhuma mensagem foi enviada.');});
   /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ summary.append(heading,description,finish); /* esse comando abre a janela, define seu nome acessível e guarda o controle para devolver o foco ao fechar.
*/ openModal(summary);
};
 /* Escuta o evento input e liga esse evento à função definida aqui.
*/ $('#contact-form').addEventListener('input',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Retira o atributo aria invalid desse elemento.
*/ e.target.removeAttribute('aria-invalid');
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#form-status').textContent = '';
});
 /* Escuta o evento reset e liga esse evento à função definida aqui.
*/ $('#contact-form').addEventListener('reset',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Percorre os itens e executa a função indicada em cada um.
*/ $('#contact-form').querySelectorAll('[aria-invalid]').forEach( /* Essa função recebe input e devolve o resultado de input.remove Attribute. */ input =>  /* Retira o atributo aria invalid desse elemento. */ input.removeAttribute('aria-invalid'));
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#form-status').textContent = '';
});
 /* Liga essa função ao clique desse controle.
*/ $('#garden-entry').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Esse teste confere se puzzle.solved não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!puzzle.solved) {
     /* Move a rolagem para deixar esse elemento visível.
*/ $('#portal-puzzle').scrollIntoView({ /* Esse campo guarda behavior com uma das duas alternativas, conforme o teste.
*/ behavior: /* esse comando confere se o sistema ou a escolha manual pede menos movimento no site. */ reducedMotionEnabled() ? 'auto' : 'smooth', /* Esse campo guarda block com start.
*/ block:'start'});
     /* Leva o foco do teclado para esse elemento.
*/ $('#puzzle-title').focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
     /* Encerra essa função sem devolver outro valor.
*/ return;
  }
   /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(6);
   /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
   /* Monta a marcação HTML interna desse elemento.
*/ wrap.innerHTML = '<p class="eyebrow">ANTES DE ATRAVESSAR</p><h2>Jardim dos Ecos</h2><p>Uma narrativa ficcional de terror psicológico, com violência sugerida, perdas e sustos. A história questiona a intenção do protagonista; não recomenda eliminar sentimentos.</p><p>Escolha como vai jogar. Você poderá mudar nas configurações.</p><div class="actions"><button class="button primary" data-device="pc">PC · teclado e mouse</button><button class="button secondary" data-device="mobile">Celular · toque</button></div>';
   /* Percorre os itens e executa a função indicada em cada um.
*/ wrap.querySelectorAll('[data-device]').forEach( /* Essa função recebe b e devolve o resultado dessa expressão. */ b =>  /* Liga essa função ao clique desse controle. */ b.onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-device', b.dataset.device);
     /* esse comando salva a chegada, fecha a janela e atravessa para o Jardim depois da transição de luz.
*/ PortalSentia.enter();
  });
   /* esse comando abre a janela, define seu nome acessível e guarda o controle para devolver o foco ao fechar.
*/ openModal(wrap);
};

                                                                                         
 /* esse comando encontra o nome exibido para o identificador de um sentimento.
*/ function emotionName(id) {  /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* Procura o primeiro item que passa na condição indicada. */ emotions.find( /* Essa função recebe e e devolve o resultado dessa expressão. */ e => e[0] === id)?.[1] || ''; }
 /* esse comando cria um seletor das lanternas e liga cada escolha à atualização do enigma.
*/ function lanternSelect(label, value, onChange) {
   /* Essa declaração usa const para preparar select, mantendo essas referências fixas.
*/ const  /* Aqui select recebe o resultado de document.create Element.
*/ select =  /* Cria um elemento HTML do tipo select. */ document.createElement('select');
   /* Define o atributo aria label desse elemento.
*/ select.setAttribute('aria-label', label);
   /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ select.add( /* Cria uma instância de Option para usar nesse recurso. */ new Option('Escolha…', ''));
   /* Percorre os itens e executa a função indicada em cada um.
*/ lanternIds.forEach( /* Essa função recebe id e devolve o resultado de select.add. */ id =>  /* Acrescenta esse valor ao conjunto ou à lista de classes. */ select.add( /* Cria uma instância de Option para usar nesse recurso. */ new Option( /* esse comando encontra o nome exibido para o identificador de um sentimento. */ emotionName(id), id)));
   /* Atualiza o valor desse campo ou controle.
*/ select.value = value;
   /* Liga essa função à mudança desse campo.
*/ select.onchange =  /* Essa função recebe nenhum parâmetro e devolve o resultado de on Change. */ () =>  /* Executa on Change com os valores definidos nessa parte. */ onChange(select.value);
   /* Devolve select e encerra essa chamada da função.
*/ return select;
}
 /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ function puzzleStatus(text, good = false) {
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#puzzle-feedback').textContent = text;
   /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#puzzle-feedback').classList.toggle('success', good);
   /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!good && location.hash === '#jardim')  /* Move a rolagem para deixar esse elemento visível.
*/ $('#puzzle-feedback').scrollIntoView({ /* Esse campo guarda block com nearest.
*/ block:'nearest', /* Esse campo guarda behavior com uma das duas alternativas, conforme o teste.
*/ behavior: /* esse comando confere se o sistema ou a escolha manual pede menos movimento no site. */ reducedMotionEnabled() ? 'auto' : 'smooth'});
}
 /* esse comando limpa o retorno anterior antes de uma nova tentativa no enigma.
*/ function clearPuzzleFeedback() {
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#puzzle-feedback').textContent = '';
   /* Retira esse elemento da página.
*/ $('#puzzle-feedback').classList.remove('success');
}
 /* esse comando confere juntas as cinco relações que determinam a ordem única das lanternas.
*/ function orderRules(order) {
   /* Essa declaração usa const para preparar at, mantendo essas referências fixas.
*/ const  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida.
*/ at =  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ id =>  /* Procura a posição desse valor na lista ou no texto. */ order.indexOf(id);
                                                                           
                                                                                      
   /* Devolve uma lista com 5 posições e encerra essa chamada da função.
*/ return [ /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('medo') <  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('calma'), ( /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('calma') + 1) % 2 === 0,  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('orgulho') <  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('amor'),  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('determinacao') ===  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('amor') + 2, 2 *  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('orgulho') ===  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('medo') +  /* esse comando encontra a posição de um sentimento na disposição que está sendo conferida. */ at('tristeza')];
}
 /* esse comando monta a palavra lendo os pares dos selos pela ordem das posições ímpares e pares.
*/ function portalWord() {
                                                                                       
   /* Devolve o resultado de .join e encerra essa chamada da função.
*/ return  /* Junta as partes da lista em um texto. */ puzzle.seals.map( /* Essa função recebe pair e devolve o resultado de .join. */ pair =>  /* Junta as partes da lista em um texto. */ [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...pair].sort( /* Essa função recebe a e b e devolve o resultado dessa expressão. */ (a, b) => ( /* Procura a posição desse valor na lista ou no texto. */ puzzle.order.indexOf(b) + 1) % 2 - ( /* Procura a posição desse valor na lista ou no texto. */ puzzle.order.indexOf(a) + 1) % 2).map( /* Essa função recebe id e devolve lantern Clues.id.0. */ id => lanternClues[id][0]).join('')).join('');
}
                                                                                              
 /* esse comando verifica direção, quantidade de casas, paradas obrigatórias e soma do caminho no mosaico.
*/ function validTrail(path, complete = false) {
   /* Essa declaração usa const para preparar connected, mantendo essas referências fixas.
*/ const  /* Aqui connected recebe o resultado dessa expressão.
*/ connected = path.length <= 7 &&  /* Confere se todos os itens passam no teste. */ path.every( /* Essa função recebe cell e i e devolve o resultado dessa expressão. */ (cell, i) =>  /* Confere se o valor é um número inteiro. */ Number.isInteger(cell) && cell >= 0 && cell < 16 && (i === 0 ? cell === 0 : cell === path[i-1] + 4 || (path[i-1] % 4 < 3 && cell === path[i-1] + 1)));
   /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return connected && (!complete || (path.length === 7 && path[6] === 15 &&  /* Confere se esse valor está presente na lista ou no texto. */ path.includes(5) &&  /* Confere se esse valor está presente na lista ou no texto. */ path.includes(10) &&  /* Executa path.reduce com os valores definidos nessa parte. */ path.reduce( /* Essa função recebe sum e cell e devolve o resultado dessa expressão. */ (sum, cell) => sum + trailWeights[cell], 0) === 16));
}
 /* esse comando desenha as dezesseis casas e deixa disponíveis apenas os próximos passos válidos.
*/ function renderTrail() {
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#trail-step').hidden = puzzle.stage !== 4;
   /* Essa declaração usa const para preparar focused Cell, mantendo essas referências fixas.
*/ const  /* Aqui focused Cell recebe dataset.cell.
*/ focusedCell =  /* Executa document.active Element.closest com os valores definidos nessa parte. */ document.activeElement?.closest('#trail-grid button')?.dataset.cell;
   /* Essa declaração usa const para preparar selected, mantendo essas referências fixas.
*/ const  /* Aqui selected recebe puzzle.trail.
*/ selected = puzzle.trail;
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#trail-grid').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ trailWeights.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (cost, cell) => {
     /* Essa declaração usa const para preparar button, mantendo essas referências fixas.
*/ const  /* Aqui button recebe o resultado de document.create Element.
*/ button =  /* Cria um elemento HTML do tipo button. */ document.createElement('button');
     /* Essa declaração usa const para preparar place, mantendo essas referências fixas.
*/ const  /* Aqui place recebe o resultado dessa expressão.
*/ place =  /* Executa String.from Char Code com os valores definidos nessa parte. */ String.fromCharCode(65 +  /* Arredonda o número para baixo. */ Math.floor(cell / 4)) + (cell % 4 + 1);
     /* Essa declaração usa const para preparar name, mantendo essas referências fixas.
*/ const  /* Aqui name recebe o resultado dessa expressão.
*/ name = ({ /* Esse campo guarda 0 com Semente.
*/ 0:'Semente', /* Esse campo guarda 5 com Folha.
*/ 5:'Folha', /* Esse campo guarda 10 com Lua.
*/ 10:'Lua', /* Esse campo guarda 15 com Portal.
*/ 15:'Portal'})[cell] || 'Pedra';
     /* Essa declaração usa const para preparar symbol, mantendo essas referências fixas.
*/ const  /* Aqui symbol recebe o resultado dessa expressão.
*/ symbol = ({ /* Esse campo guarda 0 com um texto vazio.
*/ 0:'✦', /* Esse campo guarda 5 com um texto vazio.
*/ 5:'♧', /* Esse campo guarda 10 com um texto vazio.
*/ 10:'☾', /* Esse campo guarda 15 com um texto vazio.
*/ 15:'◇'})[cell] || '·';
     /* Atualiza button.type usando button.
*/ button.type = 'button'; /* Atualiza button.dataset.cell usando cell.
*/ button.dataset.cell = cell;
     /* Esse teste confere se o resultado de selected.includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse valor está presente na lista ou no texto. */ selected.includes(cell))  /* Atualiza button.dataset.step usando o resultado dessa expressão.
*/ button.dataset.step =  /* Procura a posição desse valor na lista ou no texto. */ selected.indexOf(cell) + 1;
     /* Monta a marcação HTML interna desse elemento.
*/ button.innerHTML = '<small>' + place + '</small><span aria-hidden="true">' + symbol + '</span><b>' + cost + '</b>';
     /* Define o atributo aria label desse elemento.
*/ button.setAttribute('aria-label',place + ', ' + name + ', valor ' + cost + ( /* Confere se esse valor está presente na lista ou no texto. */ selected.includes(cell) ? ', passo ' + ( /* Procura a posição desse valor na lista ou no texto. */ selected.indexOf(cell) + 1) + ' do caminho' : ''));
     /* Define o atributo aria pressed desse elemento.
*/ button.setAttribute('aria-pressed',  /* Converte esse valor para texto. */ String( /* Confere se esse valor está presente na lista ou no texto. */ selected.includes(cell)));
     /* Atualiza button.disabled usando o resultado dessa expressão.
*/ button.disabled = puzzle.stage !== 4 || ! /* esse comando verifica direção, quantidade de casas, paradas obrigatórias e soma do caminho no mosaico. */ validTrail([ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...selected, cell]);
     /* Liga essa função ao clique desse controle.
*/ button.onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => { /* esse comando limpa o retorno anterior antes de uma nova tentativa no enigma.
*/ clearPuzzleFeedback(); /* Acrescenta esse valor no fim da lista.
*/ puzzle.trail.push(cell); /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando desenha as dezesseis casas e deixa disponíveis apenas os próximos passos válidos.
*/ renderTrail(); /* esse comando leva o teclado ao próximo passo possível ou à conferência do mosaico concluído.
*/ focusNextTrail();};
     /* Devolve button e encerra essa chamada da função.
*/ return button;
  }));
   /* Essa declaração usa const para preparar sum, mantendo essas referências fixas.
*/ const  /* Aqui sum recebe o resultado de selected.reduce.
*/ sum =  /* Executa selected.reduce com os valores definidos nessa parte. */ selected.reduce( /* Essa função recebe total e cell e devolve o resultado dessa expressão. */ (total, cell) => total + trailWeights[cell], 0);
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#trail-status').textContent = selected.length + '/7 pedras · soma ' + sum + '/16 · Folha ' + ( /* Confere se esse valor está presente na lista ou no texto. */ selected.includes(5)?'✓':'por visitar') + ' · Lua ' + ( /* Confere se esse valor está presente na lista ou no texto. */ selected.includes(10)?'✓':'por visitar');
   /* Atualiza .disabled usando a negação de selected.length.
*/ $('#trail-undo').disabled = !selected.length;
   /* Atualiza .disabled usando a negação de selected.length.
*/ $('#trail-clear').disabled = !selected.length;
   /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#trail-status').classList.toggle('trail-ready', selected.length === 7);
   /* Esse teste confere se focused Cell é diferente de undefined, e só entra nesse caminho quando a condição passa.
*/ if (focusedCell !== undefined) {
     /* Essa declaração usa const para preparar previous, mantendo essas referências fixas.
*/ const  /* Aqui previous recebe o resultado de atalho de seleção de elementos.
*/ previous =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#trail-grid button[data-cell="' + focusedCell + '"]');
     /* Leva o foco do teclado para esse elemento.
*/ (previous && !previous.disabled ? previous :  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#trail-grid button:not(:disabled)') ||  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#trail-check')).focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
  }
}
 /* esse comando leva o teclado ao próximo passo possível ou à conferência do mosaico concluído.
*/ function focusNextTrail() {
   /* Leva o foco do teclado para esse elemento.
*/ ( /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#trail-grid button:not(:disabled)') ||  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#trail-check')).focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
}
                                                                                     
 /* Escuta o evento keydown e liga esse evento à função definida aqui.
*/ $('#trail-grid').addEventListener('keydown',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Esse teste confere se o resultado de .includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda Arrow Right.
*/ 'ArrowRight', /* Essa posição da lista guarda Arrow Down.
*/ 'ArrowDown', /* Essa posição da lista guarda Arrow Left.
*/ 'ArrowLeft', /* Essa posição da lista guarda Arrow Up.
*/ 'ArrowUp', /* Essa posição da lista guarda Home.
*/ 'Home', /* Essa posição da lista guarda End.
*/ 'End'].includes(e.key))  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Essa declaração usa const para preparar choices, mantendo essas referências fixas.
*/ const  /* Aqui choices recebe uma lista com 1 posições.
*/ choices = [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Procura todos os elementos que correspondem ao seletor. */ $('#trail-grid').querySelectorAll('button:not(:disabled)')];
   /* Esse teste confere se choices.length não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!choices.length)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
   /* Essa declaração usa const para preparar current, mantendo essas referências fixas.
*/ const  /* Aqui current recebe o resultado de Math.max.
*/ current =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Procura a posição desse valor na lista ou no texto. */ choices.indexOf(document.activeElement));
   /* Essa declaração usa const para preparar next, mantendo essas referências fixas.
*/ const  /* Aqui next recebe uma das duas alternativas, conforme o teste.
*/ next = e.key === 'Home' ? 0 : e.key === 'End' ? choices.length - 1 : (current + ( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda Arrow Right.
*/ 'ArrowRight', /* Essa posição da lista guarda Arrow Down.
*/ 'ArrowDown'].includes(e.key) ? 1 : -1) + choices.length) % choices.length;
   /* Leva o foco do teclado para esse elemento.
*/ choices[next].focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
});
 /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ function renderPuzzle() {
   /* Essa declaração usa const para preparar focused Id, mantendo essas referências fixas.
*/ const  /* Aqui focused Id recebe id.
*/ focusedId =  /* Executa document.active Element.closest com os valores definidos nessa parte. */ document.activeElement?.closest('#lantern-slots select,#seal-slots select')?.id;
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#lantern-form > p:not(.eyebrow)').textContent='As posições formam uma única fila, de 1 a 6. No celular, siga a numeração e continue na próxima linha. “Antes” e “depois” se referem aos números, não à linha da tela. Use cada sentimento uma vez e respeite todas as pistas do caderno.';
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#puzzle-notebook-title').textContent = 'Meu caderno de pistas · ' + puzzle.clues.length + '/6 fragmentos';
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#puzzle-attempts').textContent = puzzle.attempts ? puzzle.attempts + (puzzle.attempts === 1 ? ' verificação feita' : ' verificações feitas') : 'Sem limite de tentativas';
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#puzzle-steps').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ [ /* Essa posição da lista guarda As lanternas.
*/ 'As lanternas',  /* Essa posição da lista guarda Os vínculos.
*/ 'Os vínculos',  /* Essa posição da lista guarda A palavra.
*/ 'A palavra',  /* Essa posição da lista guarda O mosaico.
*/ 'O mosaico'].map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (text, i) => {
     /* Essa declaração usa const para preparar item, mantendo essas referências fixas.
*/ const  /* Aqui item recebe o resultado de document.create Element.
*/ item =  /* Cria um elemento HTML do tipo li. */ document.createElement('li');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ item.textContent = (puzzle.stage > i + 1 ? '✓ ' : (i + 1) + ' · ') + text;
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ item.classList.toggle('complete', puzzle.stage > i + 1);
     /* Esse teste confere se puzzle.stage é igual a o resultado dessa expressão, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.stage === i + 1)  /* Define o atributo aria current desse elemento.
*/ item.setAttribute('aria-current', 'step');
     /* Devolve item e encerra essa chamada da função.
*/ return item;
  }));
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#clue-notebook').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ lanternIds.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ id => {
     /* Essa declaração usa const para preparar item, mantendo essas referências fixas.
*/ const  /* Aqui item recebe o resultado de document.create Element.
*/ item =  /* Cria um elemento HTML do tipo li. */ document.createElement('li');
     /* Essa declaração usa const para preparar name, mantendo essas referências fixas.
*/ const  /* Aqui name recebe o resultado de document.create Element.
*/ name =  /* Cria um elemento HTML do tipo strong. */ document.createElement('strong');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ name.textContent =  /* esse comando encontra o nome exibido para o identificador de um sentimento. */ emotionName(id) + ( /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(id) ? puzzle.stage > 1 ? ' · ' + lanternClues[id][0] : ' · pista guardada' : ' · falta encontrar');
     /* Essa declaração usa const para preparar text, mantendo essas referências fixas.
*/ const  /* Aqui text recebe o resultado de document.create Element.
*/ text =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ text.textContent =  /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(id) ? lanternClues[id][1] : 'Abra este sentimento no Atlas e guarde a descoberta para copiar a pista.';
     /* Essa declaração usa const para preparar link, mantendo essas referências fixas.
*/ const  /* Aqui link recebe o resultado de document.create Element.
*/ link =  /* Cria um elemento HTML do tipo button. */ document.createElement('button');
     /* Define as classes de aparência desse elemento.
*/ link.className = 'text-link';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ link.textContent = 'Consultar ' +  /* esse comando encontra o nome exibido para o identificador de um sentimento. */ emotionName(id) + ' no Atlas →';
     /* Liga essa função ao clique desse controle.
*/ link.onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza collection Only usando false.
*/ collectionOnly = false;
       /* Atualiza o valor desse campo ou controle.
*/ $('#busca').value =  /* esse comando encontra o nome exibido para o identificador de um sentimento. */ emotionName(id);
       /* esse comando filtra os sentimentos e prepara cartões com descrição, pergunta e descoberta para guardar.
*/ renderAtlas();
       /* Atualiza location.hash usando atlas.
*/ location.hash = 'atlas';
    };
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ item.append(name, text, link);
     /* Devolve item e encerra essa chamada da função.
*/ return item;
  }));
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#seal-notebook').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ sealPairs.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (pair,i) => {
     /* Essa declaração usa const para preparar li, mantendo essas referências fixas.
*/ const  /* Aqui li recebe o resultado de document.create Element.
*/ li =  /* Cria um elemento HTML do tipo li. */ document.createElement('li');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ li.textContent =  /* Confere se esse valor está presente na lista ou no texto. */ puzzle.combinations.includes(pair) ?  /* Junta as partes da lista em um texto. */ pair.split('+').map(emotionName).join(' + ') + ': “' + sealVerses[i] + '”' : 'Conexão ' + (i + 1) + ': procure pares na Convergência para descobrir este verso.';
     /* Devolve li e encerra essa chamada da função.
*/ return li;
  }));
   /* Essa declaração usa const para preparar field, mantendo essas referências fixas.
*/ const  /* Aqui field recebe o resultado de atalho de seleção de elementos.
*/ field =  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#lantern-slots');
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ field.replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ puzzle.order.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (id, i) => {
     /* Essa declaração usa const para preparar card, mantendo essas referências fixas.
*/ const  /* Aqui card recebe o resultado de document.create Element.
*/ card =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ card.className = 'lantern-slot';
     /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label =  /* Cria um elemento HTML do tipo label. */ document.createElement('label');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent = 'Posição ' + (i + 1);
     /* Essa declaração usa const para preparar portrait, mantendo essas referências fixas.
*/ const  /* Aqui portrait recebe o resultado de document.create Element.
*/ portrait =  /* Cria um elemento HTML do tipo img. */ document.createElement('img');
     /* Atualiza portrait.alt usando um texto vazio.
*/ portrait.alt = '';
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ portrait.hidden = !id;
     /* Esse teste confere se id está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (id)  /* Escolhe o arquivo que esse elemento deve carregar.
*/ portrait.src =  /* esse comando encontra a representação pequena do sentimento usada no Atlas e nas lanternas. */ sprite(id);
     /* Essa declaração usa const para preparar rune, mantendo essas referências fixas.
*/ const  /* Aqui rune recebe o resultado de document.create Element.
*/ rune =  /* Cria um elemento HTML do tipo span. */ document.createElement('span');
     /* Define as classes de aparência desse elemento.
*/ rune.className = 'lantern-rune';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ rune.textContent = id &&  /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(id) ? puzzle.stage > 1 ? lanternClues[id][0] : '✦' : '·';
     /* Essa declaração usa const para preparar select, mantendo essas referências fixas.
*/ const  /* Aqui select recebe o resultado de lantern Select.
*/ select =  /* esse comando cria um seletor das lanternas e liga cada escolha à atualização do enigma. */ lanternSelect('Lanterna da posição ' + (i + 1), id,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ value => {
       /* esse comando limpa o retorno anterior antes de uma nova tentativa no enigma.
*/ clearPuzzleFeedback();
       /* Atualiza puzzle.order.i usando value.
*/ puzzle.order[i] = value;
       /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle();
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ portrait.hidden = !value;
       /* Esse teste confere se value está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (value)  /* Escolhe o arquivo que esse elemento deve carregar.
*/ portrait.src =  /* esse comando encontra a representação pequena do sentimento usada no Atlas e nas lanternas. */ sprite(value);
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ rune.textContent = value &&  /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(value) ? puzzle.stage > 1 ? lanternClues[value][0] : '✦' : '·';
    });
     /* Atualiza select.id usando o resultado dessa expressão.
*/ select.id = 'lantern-' + i;
     /* Atualiza select.disabled usando o resultado dessa expressão.
*/ select.disabled = puzzle.stage > 1;
     /* Atualiza label.html For usando select.id.
*/ label.htmlFor = select.id;
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ card.append(label, portrait, rune, select);
     /* Devolve card e encerra essa chamada da função.
*/ return card;
  }));
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#lantern-submit').hidden = puzzle.stage > 1;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#seal-step').hidden = puzzle.stage < 2;
                                                                                       
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#seal-form').hidden = puzzle.stage < 2;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#seal-form button').hidden = puzzle.stage > 2;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#seal-solved').hidden = puzzle.stage < 3;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#word-step').hidden = puzzle.stage !== 3;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#portal-solved').hidden = !puzzle.solved;
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#portal-solved-entry').hidden = !puzzle.solved;
   /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#seal-slots').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ puzzle.seals.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (pair,i) => {
     /* Essa declaração usa const para preparar row, mantendo essas referências fixas.
*/ const  /* Aqui row recebe o resultado de document.create Element.
*/ row =  /* Cria um elemento HTML do tipo fieldset. */ document.createElement('fieldset');
     /* Essa declaração usa const para preparar legend, mantendo essas referências fixas.
*/ const  /* Aqui legend recebe o resultado de document.create Element.
*/ legend =  /* Cria um elemento HTML do tipo legend. */ document.createElement('legend');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ legend.textContent = 'Selo ' + (i + 1) + ' · ' + sealVerses[i];
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ row.append(legend);
     /* Percorre os itens e executa a função indicada em cada um.
*/ pair.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (id,j) => {
       /* Essa declaração usa const para preparar select, mantendo essas referências fixas.
*/ const  /* Aqui select recebe o resultado de lantern Select.
*/ select =  /* esse comando cria um seletor das lanternas e liga cada escolha à atualização do enigma. */ lanternSelect('Selo ' + (i + 1) + ', sentimento ' + (j + 1), id,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ value => {
         /* esse comando limpa o retorno anterior antes de uma nova tentativa no enigma.
*/ clearPuzzleFeedback();
         /* Atualiza puzzle.seals.i.j usando value.
*/ puzzle.seals[i][j] = value;
         /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle();
      });
       /* Atualiza select.id usando o resultado dessa expressão.
*/ select.id = 'seal-' + i + '-' + j;
       /* Atualiza select.disabled usando o resultado dessa expressão.
*/ select.disabled = puzzle.stage > 2;
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ row.append(select);
    });
     /* Devolve row e encerra essa chamada da função.
*/ return row;
  }));
   /* Essa declaração usa const para preparar hints, mantendo essas referências fixas.
*/ const  /* Aqui hints recebe um objeto com os campos dessa parte.
*/ hints = {
     /* Esse campo guarda 1 com uma lista com 3 posições.
*/ 1: [
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Cruze as pistas: Orgulho precisa vir antes de Amor, e Determinação fica duas posições depois de Amor. Reserve espaço também dos dois lados de Orgulho.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Experimente Amor em 3: Determinação iria para 5 e Orgulho precisaria ficar em 2. O equilíbrio de Orgulho exigiria Medo ou Tristeza em 3, já ocupada. Essa hipótese não funciona.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Amor fica em 4 e Determinação em 6. Se Orgulho estivesse em 2, não sobraria posição par para Calma. Teste Orgulho em 3 e complete usando as outras pistas.'
    ],
     /* Esse campo guarda 2 com uma lista com 3 posições.
*/ 2: [
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Cada verso junta duas ideias presentes nos textos do Atlas. Procure quais sentimentos representam essas duas ideias, sem repetir nenhum nos outros selos.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'No primeiro verso, pense em quem avisa sobre um risco e em quem oferece um intervalo. Na Convergência, compare o verso encontrado com o selo.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Para os outros versos, relacione vínculo com falta; depois, reconhecer o esforço com continuar. O caderno guarda as conexões já encontradas.'
    ],
     /* Esse campo guarda 3 com uma lista com 3 posições.
*/ 3: [
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A fila não é a ordem de leitura da palavra. Os três selos juntam as marcas em pares: consulte o fragmento de Determinação.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Siga os selos de 1 a 3. Em cada par, leia primeiro a marca em posição ímpar (1, 3 ou 5), depois a de posição par (2, 4 ou 6).',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'No selo 2, a lanterna da posição 5 deve ser lida antes da posição 4. Use o mesmo critério nos outros dois selos e junte os três pares de letras.'
    ],
     /* Esse campo guarda 4 com uma lista com 3 posições.
*/ 4: [
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Conte também os valores da Semente e do Portal. São sete pedras no total, avançando só para a direita ou para baixo.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Planeje o caminho em dois trechos: chegar à Folha B2 e depois à Lua C3. Compare a soma das alternativas antes de continuar.',
       /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Os dois caminhos até B2 somam 8 ou 6. Entre B2 e C3, as alternativas acrescentam 5 ou 8. Depois de C3, faltam 3 ou 4. Qual combinação chega a 16?'
    ]
  };
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#puzzle-hint-text').textContent = puzzle.hints && hints[puzzle.stage] ? hints[puzzle.stage][puzzle.hints - 1] : '';
   /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#puzzle-hint').hidden = puzzle.solved;
   /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#puzzle-hint').textContent = puzzle.hints < 3 ? 'Pedir uma pista de raciocínio (' + (puzzle.hints + 1) + '/3)' : 'Rever a última pista';
   /* esse comando desenha as dezesseis casas e deixa disponíveis apenas os próximos passos válidos.
*/ renderTrail();
   /* Esse teste confere se focused Id está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (focusedId) {
     /* Essa declaração usa const para preparar current, mantendo essas referências fixas.
*/ const  /* Aqui current recebe o resultado de document.get Element By Id.
*/ current =  /* Procura o elemento pelo identificador focused Id. */ document.getElementById(focusedId);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (current && !current.disabled)  /* Leva o foco do teclado para esse elemento.
*/ current.focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
  }
}
 /* Liga essa função ao envio desse formulário.
*/ $('#lantern-form').onsubmit =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
   /* Esse teste confere se puzzle.stage é maior que 1, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.stage > 1)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Esse teste confere se puzzle.clues.length é menor que 6, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.clues.length < 6) {
     /* Atualiza .open usando true.
*/ $('.puzzle-notebook').open=true;
     /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('Faltam os fragmentos de '+ /* Junta as partes da lista em um texto. */ lanternIds.filter( /* Essa função recebe id e devolve a negação de o resultado de puzzle.clues.includes. */ id=>! /* Confere se esse valor está presente na lista ou no texto. */ puzzle.clues.includes(id)).map(emotionName).join(', ')+'. Abra cada um pelos links do caderno e toque em “Guardar esta descoberta”. Sua disposição continua salva.');
  }
   /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ puzzle.attempts++;
   /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se pelo menos um item passa no teste. */ puzzle.order.some( /* Essa função recebe x e devolve a negação de x. */ x => !x) ||  /* Cria uma instância de Set para usar nesse recurso. */ new Set(puzzle.order).size !== 6) {
     /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle();
     /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
     /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('Use as seis lanternas, sem repetir nenhum sentimento.');
  }
   /* Essa declaração usa const para preparar rules, mantendo essas referências fixas.
*/ const  /* Aqui rules recebe o resultado de order Rules.
*/ rules =  /* esse comando confere juntas as cinco relações que determinam a ordem única das lanternas. */ orderRules(puzzle.order);
   /* Esse teste confere se o resultado de rules.every está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se todos os itens passam no teste. */ rules.every(Boolean)) {
     /* Atualiza puzzle.stage usando 2.
*/ puzzle.stage = 2;
     /* Atualiza puzzle.hints usando 0.
*/ puzzle.hints = 0;
     /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle();
     /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
     /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('As seis marcas acenderam. Agora associe os vínculos aos três selos.', true);
     /* Leva o foco do teclado para esse elemento.
*/ $('#seal-title').focus();
  } else {
     /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
     /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('A disposição ainda contradiz as pistas. Cruze as relações do caderno: uma posição precisa funcionar para todas elas ao mesmo tempo. Se precisar, peça uma pista de raciocínio.');
  }
};
 /* Liga essa função ao envio desse formulário.
*/ $('#seal-form').onsubmit =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
   /* Esse teste confere se puzzle.stage é diferente de 2, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.stage !== 2)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ puzzle.attempts++;
   /* Essa declaração usa const para preparar chosen, mantendo essas referências fixas.
*/ const  /* Aqui chosen recebe o resultado de puzzle.seals.flat.
*/ chosen =  /* Executa puzzle.seals.flat com os valores definidos nessa parte. */ puzzle.seals.flat();
   /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se pelo menos um item passa no teste. */ chosen.some( /* Essa função recebe id e devolve a negação de id. */ id => !id) ||  /* Cria uma instância de Set para usar nesse recurso. */ new Set(chosen).size !== 6) {
     /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
     /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('Preencha os três selos usando cada sentimento uma única vez, sem repetir. A ordem dos dois campos de um selo não importa.');
  }
   /* Essa declaração usa const para preparar correct, mantendo essas referências fixas.
*/ const  /* Aqui correct recebe o resultado de puzzle.seals.map.
*/ correct =  /* Monta uma nova lista transformando cada posição da lista original. */ puzzle.seals.map( /* Essa função recebe pair e i e devolve o resultado dessa expressão. */ (pair,i) => pair[0] && pair[1] && pair[0] !== pair[1] &&  /* Junta as partes da lista em um texto. */ [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...pair].sort().join('+') === sealPairs[i]);
   /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
   /* Esse teste confere se o resultado de correct.every não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se todos os itens passam no teste. */ correct.every(Boolean))  /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('Os vínculos ainda não correspondem aos versos. Teste suas hipóteses na Convergência e compare os versos encontrados com os títulos dos selos. A ordem dos dois campos de um selo não importa.');
   /* Esse teste confere se puzzle.combinations.length é menor que 3, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.combinations.length < 3) {
     /* Atualiza .open usando true.
*/ $('.puzzle-notebook').open=true;
     /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('Os pares dos selos estão corretos. Ainda falta registrar '+(3-puzzle.combinations.length)+' conexão(ões) na Convergência. Suas escolhas continuam salvas; confira no caderno quais versos faltam encontrar.');
  }
   /* Atualiza puzzle.stage usando 3.
*/ puzzle.stage = 3; /* Atualiza puzzle.hints usando 0.
*/ puzzle.hints = 0; /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
   /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('Os três vínculos se fecharam. Siga os selos de 1 a 3: em cada par, leia a marca da posição ímpar antes da posição par.', true);
   /* Leva o foco do teclado para esse elemento.
*/ $('#portal-word').focus();
};
 /* Liga essa função ao envio desse formulário.
*/ $('#word-form').onsubmit =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
   /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
   /* Esse teste confere se puzzle.stage é diferente de 3, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.stage !== 3)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ puzzle.attempts++;
   /* Essa declaração usa const para preparar word, mantendo essas referências fixas.
*/ const  /* Aqui word recebe o resultado de .to Locale Upper Case.
*/ word =  /* Executa .to Locale Upper Case com os valores definidos nessa parte. */ $('#portal-word').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleUpperCase('pt-BR');
   /* Esse teste confere se word é diferente de o resultado de portal Word, e só entra nesse caminho quando a condição passa.
*/ if (word !==  /* esse comando monta a palavra lendo os pares dos selos pela ordem das posições ímpares e pares. */ portalWord()) { /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle(); /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('Releia os selos de 1 a 3: em cada par, a marca da posição ímpar vem antes da posição par. Junte esses três pares, em vez de copiar a fila inteira.');}
   /* Atualiza puzzle.stage usando 4.
*/ puzzle.stage = 4; /* Atualiza puzzle.hints usando 0.
*/ puzzle.hints = 0; /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
   /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('A palavra acendeu o mosaico. Falta traçar uma passagem que respeite as quatro regras.', true);
   /* Leva o foco do teclado para esse elemento.
*/ $('#trail-title').focus();
};
 /* Escuta o evento input e liga esse evento à função definida aqui.
*/ $('#portal-word').addEventListener('input', clearPuzzleFeedback);
 /* Liga essa função ao clique desse controle.
*/ $('#trail-undo').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => { /* esse comando limpa o retorno anterior antes de uma nova tentativa no enigma.
*/ clearPuzzleFeedback(); /* Retira e devolve o último valor da lista.
*/ puzzle.trail.pop(); /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando desenha as dezesseis casas e deixa disponíveis apenas os próximos passos válidos.
*/ renderTrail(); /* esse comando leva o teclado ao próximo passo possível ou à conferência do mosaico concluído.
*/ focusNextTrail();};
 /* Liga essa função ao clique desse controle.
*/ $('#trail-clear').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => { /* esse comando limpa o retorno anterior antes de uma nova tentativa no enigma.
*/ clearPuzzleFeedback(); /* Atualiza puzzle.trail usando uma lista com 0 posições.
*/ puzzle.trail = []; /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando desenha as dezesseis casas e deixa disponíveis apenas os próximos passos válidos.
*/ renderTrail(); /* esse comando leva o teclado ao próximo passo possível ou à conferência do mosaico concluído.
*/ focusNextTrail();};
 /* Liga essa função ao clique desse controle.
*/ $('#trail-check').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Esse teste confere se puzzle.stage é diferente de 4, e só entra nesse caminho quando a condição passa.
*/ if (puzzle.stage !== 4)  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ puzzle.attempts++;
   /* Esse teste confere se o resultado de valid Trail não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* esse comando verifica direção, quantidade de casas, paradas obrigatórias e soma do caminho no mosaico. */ validTrail(puzzle.trail, true)) {
     /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
     /* Devolve o resultado de puzzle Status e encerra essa chamada da função.
*/ return  /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir. */ puzzleStatus('O mosaico ainda não fecha. Confira a passagem por Folha e Lua, as sete pedras e a soma 16. Você pode desfazer passos sem perder as etapas anteriores.');
  }
   /* Atualiza puzzle.solved usando true.
*/ puzzle.solved = true; /* Atualiza puzzle.stage usando 5.
*/ puzzle.stage = 5; /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(6); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
   /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('O caminho está aberto. Você pode escolher os controles antes de entrar.', true);
   /* Leva o foco do teclado para esse elemento.
*/ $('#portal-solved-entry').focus();
};
 /* Liga essa função ao clique desse controle.
*/ $('#puzzle-hint').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Atualiza puzzle.hints usando o resultado de Math.min.
*/ puzzle.hints =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(3, puzzle.hints + 1); /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
};
 /* Liga essa função ao clique desse controle.
*/ $('#puzzle-reset').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Esse teste confere se o resultado de confirm não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Executa confirm com os valores definidos nessa parte. */ confirm('Recomeçar apenas o enigma? Suas pistas, tarefas e a partida do Jardim serão preservadas.'))  /* Encerra essa função sem devolver outro valor.
*/ return;
   /* Copia os campos indicados para o objeto de destino.
*/ Object.assign(puzzle,{ /* Esse campo guarda stage com 1.
*/ stage:1, /* aqui fica a disposição escolhida para as seis lanternas.
*/ order: /* Preenche o caminho ou as posições usando o valor indicado. */ Array(6).fill(''), /* aqui ficam os pares escolhidos nos três selos do enigma.
*/ seals: /* Cria uma lista a partir dos valores recebidos. */ Array.from({ /* Esse campo guarda length com 3.
*/ length:3}, /* Essa função recebe nenhum parâmetro e devolve uma lista com 2 posições. */ ()=>[ /* Essa posição da lista guarda um texto vazio.
*/ '', /* Essa posição da lista guarda um texto vazio.
*/ '']), /* aqui fica a sequência de casas escolhidas no caminho do mosaico.
*/ trail:[], /* aqui fica a indicação de que todas as etapas do portal já foram resolvidas.
*/ solved:false, /* aqui fica a quantidade de dicas abertas na etapa atual.
*/ hints:0});
   /* esse comando guarda o progresso do enigma e atualiza os indicadores de descoberta.
*/ savePuzzle(); /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle(); /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('As lanternas voltaram às posições vazias. As pistas continuam no caderno.');
};
 /* Liga essa função ao clique desse controle.
*/ $('#portal-solved-entry').onclick =  /* Essa função recebe nenhum parâmetro e devolve o resultado de .click. */ () =>  /* Aciona o clique programado nesse controle. */ $('#garden-entry').click();
                                                                                              
 /* Liga essa função ao clique desse controle.
*/ $('#reset-site').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap =  /* Cria um elemento HTML do tipo section. */ document.createElement('section');
   /* Monta a marcação HTML interna desse elemento.
*/ wrap.innerHTML = '<h2>Reiniciar o SENTIA?</h2><p>Sua coleção do Atlas, as descobertas, as pistas, o enigma e as ações do plano pessoal serão apagados deste navegador. O site voltará ao início, com o plano pessoal vazio.</p><p>A partida do Jardim, os registros compartilhados do MySQL e suas preferências de tema e movimento serão mantidos.</p><p class="small">Essa ação não pode ser desfeita. Se quiser guardar seu plano pessoal, baixe o registro antes.</p><div class="actions"><button type="button" class="button secondary" id="cancel-reset-site">Cancelar</button><button type="button" class="button primary" id="confirm-reset-site">Sim, reiniciar o SENTIA</button></div><p id="reset-site-status" role="status"></p>';
   /* Liga essa função ao clique desse controle.
*/ wrap.querySelector('#cancel-reset-site').onclick =  /* Essa função recebe nenhum parâmetro e devolve o resultado de .close. */ () =>  /* Fecha essa janela ou recurso que estava aberto. */ $('#modal').close();
   /* Liga essa função ao clique desse controle.
*/ wrap.querySelector('#confirm-reset-site').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Essa declaração usa const para preparar keys, mantendo essas referências fixas.
*/ const  /* Aqui keys recebe uma lista com 6 posições.
*/ keys = [ /* Essa posição da lista guarda sentia discoveries.
*/ 'sentia-discoveries',  /* Essa posição da lista guarda sentia collection.
*/ 'sentia-collection',  /* Essa posição da lista guarda sentia portal puzzle v2.
*/ 'sentia-portal-puzzle-v2',  /* Essa posição da lista guarda sentia personal tasks.
*/ 'sentia-personal-tasks',  /* Essa posição da lista guarda sentia tasks.
*/ 'sentia-tasks',  /* Essa posição da lista guarda sentia record mode.
*/ 'sentia-record-mode'];
     /* Essa declaração usa const para preparar backup, mantendo essas referências fixas.
*/ const  /* Aqui backup recebe uma instância de Map.
*/ backup =  /* Cria uma instância de Map para usar nesse recurso. */ new Map();
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
                                                                                         
       /* Percorre cada valor de keys usando key nesta repetição.
*/ for ( /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe nenhum valor inicial.
*/ key of keys)  /* Guarda o valor associado a essa chave no mapa.
*/ backup.set(key,  /* Lê o valor salvo com a chave key. */ localStorage.getItem(key));
       /* Percorre cada valor de keys usando key nesta repetição.
*/ for ( /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe nenhum valor inicial.
*/ key of keys)  /* Apaga somente o valor guardado nessa chave.
*/ localStorage.removeItem(key);
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
       /* Percorre cada valor de backup usando valores separados da lista nesta repetição.
*/ for ( /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe nenhum valor inicial.
*/ [key, value] of backup) {
         /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {  /* Esse teste confere se value é igual a um valor vazio, e só entra nesse caminho quando a condição passa.
*/ if (value === null)  /* Apaga somente o valor guardado nessa chave.
*/ localStorage.removeItem(key); else  /* Salva o valor usando a chave key.
*/ localStorage.setItem(key, value); }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {}
      }
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#reset-site-status').textContent = 'O navegador não permitiu reiniciar os dados. Confira a permissão de armazenamento e tente novamente.';
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
                                                                                                
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('form').forEach( /* Essa função recebe form e devolve o resultado de form.reset. */ form =>  /* Executa form.reset com os valores definidos nessa parte. */ form.reset());
     /* Atualiza location.hash usando home.
*/ location.hash = 'home';
     /* Executa location.reload com os valores definidos nessa parte.
*/ location.reload();
  };
   /* esse comando abre a janela, define seu nome acessível e guarda o controle para devolver o foco ao fechar.
*/ openModal(wrap);
};
 /* esse comando aplica a preferência de tema claro ou escuro e atualiza o nome do botão de troca.
*/ function theme() {
   /* Essa declaração usa const para preparar dark, mantendo essas referências fixas.
*/ const  /* Aqui dark recebe o resultado de storage.get.
*/ dark =  /* esse comando tenta ler um valor salvo e usa a alternativa recebida quando não consegue. */ storage.get('sentia-dark', false);
                                                                                          
   /* Esse teste confere se dark está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(dark) /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ document.body.classList.add('dark');else  /* Retira esse elemento da página.
*/ document.body.classList.remove('dark');
   /* Define o atributo aria label desse elemento.
*/ $('#tema').setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
}
 /* Liga essa função ao clique desse controle.
*/ $('#tema').onclick =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-dark', ! /* Confere se esse elemento tem a classe indicada. */ document.body.classList.contains('dark'));
   /* esse comando aplica a preferência de tema claro ou escuro e atualiza o nome do botão de troca.
*/ theme();
};
 /* Atualiza .checked usando o resultado de storage.get.
*/ $('#reduce-motion').checked =  /* esse comando tenta ler um valor salvo e usa a alternativa recebida quando não consegue. */ storage.get('sentia-reduced', false);
 /* Essa declaração usa const para preparar motion Preference, mantendo essas referências fixas.
*/ const  /* Aqui motion Preference recebe o resultado de window.match Media.
*/ motionPreference =  /* Consulta se o navegador atende à preferência ou condição de tela indicada. */ window.matchMedia('(prefers-reduced-motion: reduce)');
 /* esse comando confere se o sistema ou a escolha manual pede menos movimento no site.
*/ function reducedMotionEnabled() {
   /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#reduce-motion').checked || motionPreference.matches;
}
 /* esse comando aplica a preferência de movimento ao documento inteiro.
*/ function applyMotionPreference() {
   /* Essa declaração usa const para preparar reduced, mantendo essas referências fixas.
*/ const  /* Aqui reduced recebe o resultado de reduced Motion Enabled.
*/ reduced =  /* esse comando confere se o sistema ou a escolha manual pede menos movimento no site. */ reducedMotionEnabled();
   /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ document.body.classList.toggle('reduced', reduced);
   /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ document.documentElement.classList.toggle('reduced', reduced);
}
 /* esse comando aplica a preferência de movimento ao documento inteiro.
*/ applyMotionPreference();
 /* Liga essa função à mudança desse campo.
*/ $('#reduce-motion').onchange =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
   /* esse comando tenta guardar um valor e avisa se o navegador impedir o salvamento.
*/ storage.set('sentia-reduced',  /* esse comando encontra um elemento do site para atualizar seu conteúdo ou preparar uma interação. */ $('#reduce-motion').checked);
   /* esse comando aplica a preferência de movimento ao documento inteiro.
*/ applyMotionPreference();
};
 /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ motionPreference.addEventListener?.('change', applyMotionPreference);
                                                                                  
 /* esse comando mostra a seção pedida pelo endereço, atualiza o título e marca a navegação atual.
*/ function route() {
   /* Essa declaração usa const para preparar requested, mantendo essas referências fixas.
*/ const  /* Aqui requested recebe o resultado dessa expressão.
*/ requested =  /* Obtém a parte indicada sem mudar o conteúdo original. */ location.hash.slice(1) || 'home';
   /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe uma das duas alternativas, conforme o teste.
*/ id =  /* Confere se esse elemento tem a classe indicada. */ document.getElementById(requested)?.classList.contains('page') ? requested : 'home';
   /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('.page').forEach( /* Essa função recebe p e devolve o resultado dessa expressão. */ p =>  /* Define se esse elemento fica escondido ou disponível na tela. */ p.hidden = p.id !== id);
   /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('nav a').forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ a => {
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ a.classList.toggle('active', a.hash === '#' + id);
     /* Esse teste confere se a.hash é igual a o resultado dessa expressão, e só entra nesse caminho quando a condição passa.
*/ if (a.hash === '#' + id)  /* Define o atributo aria current desse elemento.
*/ a.setAttribute('aria-current', 'page');else  /* Retira o atributo aria current desse elemento.
*/ a.removeAttribute('aria-current');
  });
                                                                                 
   /* Essa declaração usa let para preparar title, permitindo atualizar esses valores depois.
*/ let  /* Aqui title recebe nenhum valor inicial.
*/ title;
   /* Escolhe o caminho de acordo com id.
*/ switch(id){
     /* Esse caminho trata o valor atlas.
*/ case 'atlas': /* Atualiza title usando Atlas emocional.
*/ title='Atlas emocional'; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
     /* Esse caminho trata o valor convergencia.
*/ case 'convergencia': /* Atualiza title usando Convergência.
*/ title='Convergência'; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
     /* Esse caminho trata o valor praticas.
*/ case 'praticas': /* Atualiza title usando Práticas e registro.
*/ title='Práticas e registro'; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
     /* Esse caminho trata o valor jardim.
*/ case 'jardim': /* Atualiza title usando Jardim dos Ecos.
*/ title='Jardim dos Ecos'; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
     /* Esse caminho trata o valor sobre.
*/ case 'sobre': /* Atualiza title usando Sobre.
*/ title='Sobre'; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
     /* Esse caminho trata o valor creditos.
*/ case 'creditos': /* Atualiza title usando Créditos.
*/ title='Créditos'; /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
     /* Esse caminho trata os valores que não combinaram com as opções anteriores.
*/ default: /* Atualiza title usando um lugar para sentir.
*/ title='um lugar para sentir';
  }
   /* Atualiza document.title usando um texto montado com os valores atuais.
*/ document.title=`SENTIA · ${title}`;
   /* Esse teste confere se id é igual a sobre, e só entra nesse caminho quando a condição passa.
*/ if (id === 'sobre')  /* esse comando registra uma descoberta ainda não vista sem repetir o mesmo identificador.
*/ discover(3);
   /* Move a rolagem até a posição indicada.
*/ window.scrollTo(0, 0);
   /* Leva o foco do teclado para esse elemento.
*/ $('#conteudo').focus({
     /* Esse campo guarda prevent Scroll com true.
*/ preventScroll: true
  });
}
                                                                        
 /* Escuta o evento click e liga esse evento à função definida aqui.
*/ $('.skip').addEventListener('click',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => { /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Leva o foco do teclado para esse elemento.
*/ $('#conteudo').focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true}); /* Move a rolagem para deixar esse elemento visível.
*/ $('#conteudo').scrollIntoView({ /* Esse campo guarda block com start.
*/ block:'start', /* Esse campo guarda behavior com uma das duas alternativas, conforme o teste.
*/ behavior: /* esse comando confere se o sistema ou a escolha manual pede menos movimento no site. */ reducedMotionEnabled() ? 'auto' : 'smooth'});});
 /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#hero-image').src =  /* esse comando procura no catálogo o caminho da imagem aprovada que será mostrada. */ findAsset('/01-Entrada/03-praca-central.png');
 /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#garden-image').src =  /* esse comando procura no catálogo o caminho da imagem aprovada que será mostrada. */ findAsset('/01-Entrada/01-portal.png');
 /* Escuta o evento hashchange e liga esse evento à função definida aqui.
*/ window.addEventListener('hashchange', route);
 /* esse comando aplica a preferência de tema claro ou escuro e atualiza o nome do botão de troca.
*/ theme();
 /* esse comando filtra os sentimentos e prepara cartões com descrição, pergunta e descoberta para guardar.
*/ renderAtlas();
 /* esse comando apresenta a etapa atual do enigma preservando as escolhas e as pistas já guardadas.
*/ renderPuzzle();
 /* Esse teste confere se puzzle Restored está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(puzzleRestored) /* esse comando mostra o retorno da tentativa e destaca o aviso quando existe algo para corrigir.
*/ puzzleStatus('Recuperamos seu enigma anterior. A primeira etapa incompleta voltou a ser editável; suas pistas e escolhas foram preservadas.');
 /* esse comando mostra quantos fragmentos foram encontrados e atualiza a situação de entrada do Jardim.
*/ renderDiscoveries();
 /* esse comando mostra a seção pedida pelo endereço, atualiza o título e marca a navegação atual.
*/ route();
