 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                               
 /* Essa declaração usa const para preparar G, mantendo essas referências fixas.
*/ const  /* Aqui G recebe o resultado dessa chamada de função.
*/ G =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa const para preparar atalho de seleção de elementos e D e ids, mantendo essas referências fixas.
*/ const  /* Aqui atalho de seleção de elementos recebe uma função para executar quando for chamada.
*/ $ =  /* Essa função recebe s e devolve o resultado de document.query Selector. */ s =>  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector(s),
     /* Aqui D recebe ROTEIRO.
*/ D = ROTEIRO,
     /* Aqui ids recebe uma lista com 10 posições.
*/ ids = [ /* Essa posição da lista guarda felicidade.
*/ 'felicidade',  /* Essa posição da lista guarda amor.
*/ 'amor',  /* Essa posição da lista guarda tristeza.
*/ 'tristeza',  /* Essa posição da lista guarda orgulho.
*/ 'orgulho',  /* Essa posição da lista guarda determinacao.
*/ 'determinacao',  /* Essa posição da lista guarda calma.
*/ 'calma',  /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade',  /* Essa posição da lista guarda culpa.
*/ 'culpa',  /* Essa posição da lista guarda medo.
*/ 'medo',  /* Essa posição da lista guarda odio.
*/ 'odio'];
   /* Essa declaração usa const para preparar first, mantendo essas referências fixas.
*/ const  /* Aqui first recebe um objeto com os campos dessa parte.
*/ first = {
     /* Esse campo guarda felicidade com F1.
*/ felicidade: 'F1',
     /* Esse campo guarda amor com A1.
*/ amor: 'A1',
     /* Esse campo guarda tristeza com N1.
*/ tristeza: 'N1',
     /* Esse campo guarda orgulho com O1.
*/ orgulho: 'O1',
     /* Esse campo guarda determinacao com D1.
*/ determinacao: 'D1',
     /* Esse campo guarda calma com P1.
*/ calma: 'P1',
     /* Esse campo guarda ansiedade com H1.
*/ ansiedade: 'H1',
     /* Esse campo guarda culpa com C1.
*/ culpa: 'C1',
     /* Esse campo guarda medo com M1.
*/ medo: 'M1',
     /* Esse campo guarda odio com ODG1.
*/ odio: 'ODG1'
  };
   /* Essa declaração usa const para preparar second, mantendo essas referências fixas.
*/ const  /* Aqui second recebe um objeto com os campos dessa parte.
*/ second = {
     /* Esse campo guarda felicidade com F2.
*/ felicidade: 'F2',
     /* Esse campo guarda amor com A2.
*/ amor: 'A2',
     /* Esse campo guarda tristeza com N2.
*/ tristeza: 'N2',
     /* Esse campo guarda orgulho com O2.
*/ orgulho: 'O2',
     /* Esse campo guarda calma com P2.
*/ calma: 'P2',
     /* Esse campo guarda ansiedade com H2.
*/ ansiedade: 'H2',
     /* Esse campo guarda culpa com C2.
*/ culpa: 'C2',
     /* Esse campo guarda medo com M2.
*/ medo: 'M2'
  };
   /* Essa declaração usa const para preparar palette, mantendo essas referências fixas.
*/ const  /* Aqui palette recebe um objeto com os campos dessa parte.
*/ palette = {
     /* Guarda a cor de interface associada ao Eco felicidade.
*/ felicidade: '#ffc653',
     /* Guarda a cor de interface associada ao Eco amor.
*/ amor: '#f6a1d7',
     /* Guarda a cor de interface associada ao Eco orgulho.
*/ orgulho: '#ffd971',
     /* Guarda a cor de interface associada ao Eco determinacao.
*/ determinacao: '#f24459',
     /* Guarda a cor de interface associada ao Eco calma.
*/ calma: '#b4d6b1',
     /* Guarda a cor de interface associada ao Eco tristeza.
*/ tristeza: '#89dfff',
     /* Guarda a cor de interface associada ao Eco odio.
*/ odio: '#ff6c60',
     /* Guarda a cor de interface associada ao Eco medo.
*/ medo: '#bfafe8',
     /* Guarda a cor de interface associada ao Eco ansiedade.
*/ ansiedade: '#81e0e9',
     /* Guarda a cor de interface associada ao Eco culpa.
*/ culpa: '#b0c8fb',
     /* Guarda a cor de interface associada ao Eco sanidade.
*/ sanidade: '#f2e7b0',
     /* Guarda a cor de interface associada ao Eco insanidade.
*/ insanidade: '#e7dfd2',
     /* Guarda a cor de interface associada ao Eco neutralidade.
*/ neutralidade: '#c6c9d0'
  };
   /* Essa declaração usa let para preparar S e settings e paused e mode e queue e after Dialogue e current Eco e timed e clock Task e loop Last e retry e watch e qte e chase e maze Index e ninfa Errors e ninfa Consecutive e keys Held e rescue Cooldown e prompt Keyboard Input e scene Serial, permitindo atualizar esses valores depois.
*/ let  /* Aqui S recebe nenhum valor inicial.
*/ S,
     /* Aqui settings recebe um objeto com os campos dessa parte.
*/ settings = {
       /* Esse campo guarda device com pc.
*/ device: 'pc',
       /* Esse campo guarda assist com false.
*/ assist: false,
       /* Esse campo guarda reduced com matches.
*/ reduced:  /* Consulta se o navegador atende à preferência ou condição de tela indicada. */ window.matchMedia('(prefers-reduced-motion: reduce)').matches
    },
     /* Aqui paused recebe false.
*/ paused = false,
     /* Aqui mode recebe menu.
*/ mode = 'menu',
     /* Aqui queue recebe uma lista com 0 posições.
*/ queue = [],
     /* Aqui after Dialogue recebe um valor vazio.
*/ afterDialogue = null,
     /* Aqui current Eco recebe um valor vazio.
*/ currentEco = null,
     /* Aqui timed recebe um valor vazio.
*/ timed = null,
     /* Aqui clock Task recebe um valor vazio.
*/ clockTask = null,
     /* Aqui loop Last recebe o resultado de performance.now.
*/ loopLast =  /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now(),
     /* Aqui retry recebe um valor vazio.
*/ retry = null,
     /* Aqui watch recebe um valor vazio.
*/ watch = null,
     /* Aqui qte recebe um valor vazio.
*/ qte = null,
     /* Aqui chase recebe um valor vazio.
*/ chase = null,
     /* Aqui maze Index recebe 0.
*/ mazeIndex = 0,
     /* Aqui ninfa Errors recebe 0.
*/ ninfaErrors = 0,
     /* Aqui ninfa Consecutive recebe 0.
*/ ninfaConsecutive = 0,
     /* Aqui keys Held recebe um objeto com os campos dessa parte.
*/ keysHeld = {},
     /* Aqui rescue Cooldown recebe 0.
*/ rescueCooldown = 0,
     /* Aqui prompt Keyboard Input recebe false.
*/ promptKeyboardInput = false,
     /* Aqui scene Serial recebe 0.
*/ sceneSerial = 0;
   /* Essa declaração usa const para preparar asset, mantendo essas referências fixas.
*/ const  /* Procura o caminho do recurso aprovado no catálogo de imagens.
*/ asset =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ part =>  /* Procura o primeiro item que passa na condição indicada. */ ASSETS.find( /* Essa função recebe p e devolve o resultado de p.includes. */ p =>  /* Confere se esse valor está presente na lista ou no texto. */ p.includes(part));
   /* Essa declaração usa const para preparar fear Jumpscare, mantendo essas referências fixas.
*/ const  /* Aqui fear Jumpscare recebe uma instância de Image.
*/ fearJumpscare= /* Cria uma instância de Image para usar nesse recurso. */ new Image();
   /* Escolhe o arquivo que esse elemento deve carregar.
*/ fearJumpscare.src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/04-Jumpscare-Medo/medo-jumpscare-7-quadros.png');
   /* Essa declaração usa const para preparar list, mantendo essas referências fixas.
*/ const  /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta.
*/ list =  /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ part =>  /* Monta uma lista somente com os valores que passam no teste. */ ASSETS.filter( /* Essa função recebe p e devolve o resultado dessa expressão. */ p =>  /* Confere se esse valor está presente na lista ou no texto. */ p.includes(part) &&  /* Confere se o texto termina com o trecho indicado. */ p.endsWith('.png') && ! /* Confere se o texto corresponde a esse padrão de expressão regular. */ /PREVIA|PRANCHA|ATLAS/.test(p));
   /* Essa declaração usa const para preparar starting Rooms, mantendo essas referências fixas.
*/ const  /* Aqui starting Rooms recebe uma lista com 4 posições.
*/ startingRooms = [ /* Essa posição da lista guarda amor.
*/ 'amor',  /* Essa posição da lista guarda calma.
*/ 'calma',  /* Essa posição da lista guarda felicidade.
*/ 'felicidade',  /* Essa posição da lista guarda determinacao.
*/ 'determinacao'];
   /* Reúne os quartos que a história e as descobertas já liberaram.
*/ function unlockedRooms() {
     /* Devolve uma lista com 1 posições e encerra essa chamada da função.
*/ return [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Cria uma instância de Set para usar nesse recurso. */ new Set([ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...startingRooms,  /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...(S.flags.rooms || []),  /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma lista somente com os valores que passam no teste. */ ids.filter( /* Essa função recebe id e devolve o resultado dessa expressão. */ id=>S.talks[first[id]] ||  /* Confere se pelo menos um item passa no teste. */ D.points.some( /* Essa função recebe p e devolve o resultado dessa expressão. */ p=>p.eco===id&&S.seen[p.id]))])];
  }
   /* Libera um quarto novo e guarda o aviso de descoberta.
*/ function unlockRoom(id, reason) {
     /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ unlockedRooms().includes(id))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza S.flags.rooms usando uma lista com 2 posições.
*/ S.flags.rooms = [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...(S.flags.rooms || []), id];
     /* Essa declaração usa const para preparar message, mantendo essas referências fixas.
*/ const  /* Aqui message recebe o resultado dessa expressão.
*/ message = 'Quarto desbloqueado: ' + D.names[id] + '. ' + reason;
     /* Atualiza S.flags.room Notice usando o resultado dessa expressão.
*/ S.flags.roomNotice = (S.flags.roomNotice ? S.flags.roomNotice + '\n' : '') + message;
     /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Um novo caminho: ' + D.names[id], reason);
     /* Essa declaração usa const para preparar notice, mantendo essas referências fixas.
*/ const  /* Aqui notice recebe o resultado de atalho de seleção de elementos.
*/ notice =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#room-notice');
     /* Mostra os avisos de novos quartos durante a exploração.
*/ showRoomNotice();
                                                                                      
     /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
  }
   /* Mostra os avisos de novos quartos durante a exploração.
*/ function showRoomNotice() {
     /* Essa declaração usa const para preparar notice, mantendo essas referências fixas.
*/ const  /* Aqui notice recebe o resultado de atalho de seleção de elementos.
*/ notice= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#room-notice');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ notice.hidden=mode!=='explore'||!S?.flags.roomNotice;
     /* Esse teste confere se notice.hidden está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(notice.hidden)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ notice.replaceChildren( /* Executa document.create Text Node com os valores definidos nessa parte. */ document.createTextNode(S.flags.roomNotice));
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ notice.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Entendi', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza S.flags.room Notice usando um texto vazio.
*/ S.flags.roomNotice=''; /* Define se esse elemento fica escondido ou disponível na tela.
*/ notice.hidden=true; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();}));
  }
   /* Confere as condições da história que abrem a passagem de Hunger.
*/ function checkHungerDoor() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(S.talks.P1 &&  /* Confere se esse Eco já está na lista de mortos. */ dead('calma') &&  /* Confere se esse Eco já está na lista de mortos. */ dead('determinacao'))  /* Libera um quarto novo e guarda o aviso de descoberta.
*/ unlockRoom('medo','A passagem indicada por Pax está aberta na praça.');
  }
                                                                       
   /* Cria uma partida nova, com os quartos, itens e descobertas ainda vazios.
*/ function fresh() {
     /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return {
       /* Identifica o formato dos dados para conferir a compatibilidade.
*/ version: 4,
       /* Identifica a etapa atual da história.
*/ phase: 'explore',
       /* Identifica o quarto atual ou o quarto associado a esse dado.
*/ room: null,
       /* Indica qual das quatro direções do quarto usa esse conteúdo.
*/ view: 0,
       /* Conta as interações importantes para a progressão.
*/ activity: 0,
       /* Guarda quais pontos do cenário já foram observados.
*/ seen: {},
       /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks: {},
       /* Guarda quando ocorreu a última conversa com cada personagem.
*/ lastTalk: {},
       /* Relaciona as ausências que mudam essa parte da história.
*/ dead: [],
       /* Guarda consequências que ficaram para uma visita posterior.
*/ pending: {},
       /* Relaciona os objetos da bolsa usados nessa parte.
*/ items: [],
       /* Guarda ou confere marcações específicas do progresso.
*/ flags: {},
       /* Reúne as descobertas e acontecimentos registrados.
*/ log: [],
       /* Reúne as respostas que o jogador pode escolher.
*/ choices: [],
       /* Guarda o valor de sanidade da partida.
*/ sanity: 70,
       /* Guarda o ponto seguro usado ao retomar a tentativa.
*/ checkpoint: 0,
       /* Acumula o tempo de partida sem usar isso como substituto do conteúdo.
*/ playSeconds: 0,
       /* Marca se a história já foi concluída.
*/ complete: false
    };
  }
   /* Lê um valor salvo no navegador e usa a alternativa quando a leitura falha.
*/ function read(key, fallback) {
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* Converte o texto JSON em dados que o programa consegue usar. */ JSON.parse( /* Lê o valor salvo com a chave key. */ localStorage.getItem(key)) ?? fallback;
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
       /* Devolve fallback e encerra essa chamada da função.
*/ return fallback;
    }
  }
   /* Confere a estrutura da partida antes de aceitar os dados salvos.
*/ function valid(s) {
     /* Essa declaração usa const para preparar record, mantendo essas referências fixas.
*/ const  /* Confere se esse valor tem o formato de objeto esperado.
*/ record= /* Confere se esse valor tem o formato de objeto esperado. */ value=>value!==null&&typeof value==='object'&&! /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(value);
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* Confere se esse valor tem o formato de objeto esperado. */ record(s) && (s.room === null ||  /* Confere se esse valor está presente na lista ou no texto. */ ids.includes(s.room)) &&  /* Confere se o valor é um número inteiro. */ Number.isInteger(s.view) && s.view >= 0 && s.view <= 3 && s.version === 4 &&  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(s.dead) &&  /* Confere se todos os itens passam no teste. */ s.dead.every( /* Essa função recebe x e devolve o resultado de ids.includes. */ x =>  /* Confere se esse valor está presente na lista ou no texto. */ ids.includes(x)) &&  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(s.items) &&  /* Confere se todos os itens passam no teste. */ s.items.every( /* Essa função recebe x e devolve o resultado dessa expressão. */ x=>typeof x==='string'&&x.length<120) &&  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(s.log) &&  /* Confere se todos os itens passam no teste. */ s.log.every( /* Essa função recebe n e devolve o resultado dessa expressão. */ n=> /* Confere se esse valor tem o formato de objeto esperado. */ record(n)&&typeof n.title==='string'&&typeof n.text==='string') &&  /* Confere se todos os itens passam no teste. */ [s.seen,s.talks,s.flags,s.pending,s.lastTalk].every(record) &&  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(s.choices) &&  /* Confere se o valor é um número finito. */ Number.isFinite(s.activity) &&  /* Confere se o valor é um número finito. */ Number.isFinite(s.sanity) &&  /* Confere se o valor é um número finito. */ Number.isFinite(s.playSeconds) &&  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda explore.
*/ 'explore',  /* Essa posição da lista guarda watch.
*/ 'watch',  /* Essa posição da lista guarda fear Chase.
*/ 'fearChase',  /* Essa posição da lista guarda fear Room.
*/ 'fearRoom',  /* Essa posição da lista guarda ninfa.
*/ 'ninfa',  /* Essa posição da lista guarda odio.
*/ 'odio',  /* Essa posição da lista guarda comics.
*/ 'comics',  /* Essa posição da lista guarda arena.
*/ 'arena',  /* Essa posição da lista guarda candy.
*/ 'candy',  /* Essa posição da lista guarda stairs.
*/ 'stairs',  /* Essa posição da lista guarda maze.
*/ 'maze',  /* Essa posição da lista guarda insane Chase.
*/ 'insaneChase',  /* Essa posição da lista guarda interrogation.
*/ 'interrogation',  /* Essa posição da lista guarda revelation.
*/ 'revelation',  /* Essa posição da lista guarda keys.
*/ 'keys',  /* Essa posição da lista guarda gate.
*/ 'gate',  /* Essa posição da lista guarda ending.
*/ 'ending',  /* Essa posição da lista guarda complete.
*/ 'complete'].includes(s.phase);
  }
                                                                                         
   /* Atualiza os nomes nos textos antigos sem trocar as decisões nem as chaves do save.
*/ function currentNames(state) {
     /* Essa declaração usa const para preparar rename, mantendo essas referências fixas.
*/ const  /* Atualiza o nome antigo nos textos da partida.
*/ rename= /* Atualiza o nome antigo nos textos da partida. */ text=>typeof text==='string'? /* Troca as partes do texto que correspondem ao padrão indicado. */ text.replace(/\bSugar\b/gi,'Candy'):text;
     /* Percorre os itens e executa a função indicada em cada um.
*/ state.log.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ entry=>{ /* Percorre cada valor de uma lista com 4 posições usando key nesta repetição.
*/ for( /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe nenhum valor inicial.
*/ key of [ /* Essa posição da lista guarda title.
*/ 'title', /* Essa posição da lista guarda text.
*/ 'text', /* Essa posição da lista guarda voice.
*/ 'voice', /* Essa posição da lista guarda source.
*/ 'source']) /* Esse teste confere se key existe em entry, e só entra nesse caminho quando a condição passa.
*/ if(key in entry) /* Atualiza entry.key usando o resultado de rename.
*/ entry[key]= /* Atualiza o nome antigo nos textos da partida. */ rename(entry[key]);});
     /* Percorre os itens e executa a função indicada em cada um.
*/ state.choices.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ choice=>{ /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(choice&&typeof choice==='object') /* Percorre cada valor de uma lista com 4 posições usando key nesta repetição.
*/ for( /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe nenhum valor inicial.
*/ key of [ /* Essa posição da lista guarda label.
*/ 'label', /* Essa posição da lista guarda text.
*/ 'text', /* Essa posição da lista guarda reply.
*/ 'reply', /* Essa posição da lista guarda who.
*/ 'who']) /* Esse teste confere se key existe em choice, e só entra nesse caminho quando a condição passa.
*/ if(key in choice) /* Atualiza choice.key usando o resultado de rename.
*/ choice[key]= /* Atualiza o nome antigo nos textos da partida. */ rename(choice[key]);});
     /* Esse teste confere se state.flags.room Notice está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(state.flags.roomNotice) /* Atualiza state.flags.room Notice usando o resultado de rename.
*/ state.flags.roomNotice= /* Atualiza o nome antigo nos textos da partida. */ rename(state.flags.roomNotice);
     /* Devolve state e encerra essa chamada da função.
*/ return state;
  }
                                                                  
   /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ function save() {
     /* Atualiza a quantidade de anotações novas no botão do registro.
*/ updateJournalBadge();
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Salva o valor usando a chave sentia garden v4.
*/ localStorage.setItem('sentia-garden-v4',  /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(S));
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#save-status').textContent = 'Progresso salvo neste navegador.';
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#save-status').textContent = 'Não foi possível salvar. Exporte a partida na pausa.';
    }
  }
   /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ function setPhase(phase, checkpoint = 0) {
     /* Atualiza S.phase usando phase.
*/ S.phase = phase;
     /* Atualiza S.checkpoint usando checkpoint.
*/ S.checkpoint = checkpoint;
     /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setScene(phase);
  }
   /* Essa declaração usa let para preparar journal Toast Timer e last Journal Sound e modal Return Target, permitindo atualizar esses valores depois.
*/ let  /* Aqui journal Toast Timer recebe um valor vazio.
*/ journalToastTimer = null,  /* Aqui last Journal Sound recebe o resultado dessa expressão.
*/ lastJournalSound = -Infinity,  /* Aqui modal Return Target recebe um valor vazio.
*/ modalReturnTarget = null;
   /* Essa declaração usa const para preparar entry Id, mantendo essas referências fixas.
*/ const  /* Usa o identificador da anotação ou monta um pelo índice.
*/ entryId =  /* Usa o identificador da anotação ou monta um pelo índice. */ (entry, index) => entry.id || 'entry-' + index;
   /* Prepara a lista de anotações lidas sem transformar saves antigos em avisos repetidos.
*/ function journalReadIds() {
     /* Esse teste confere se S não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!S)  /* Devolve uma lista com 0 posições e encerra essa chamada da função.
*/ return [];
                                                                                                
     /* Esse teste confere se o resultado de Array.is Array não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(S.flags.journalRead))  /* Atualiza S.flags.journal Read usando o resultado de S.log.map.
*/ S.flags.journalRead =  /* Monta uma nova lista transformando cada posição da lista original. */ S.log.map(entryId);
     /* Devolve S.flags.journal Read e encerra essa chamada da função.
*/ return S.flags.journalRead;
  }
   /* Atualiza a quantidade de anotações novas no botão do registro.
*/ function updateJournalBadge() {
     /* Essa declaração usa const para preparar button, mantendo essas referências fixas.
*/ const  /* Aqui button recebe o resultado de atalho de seleção de elementos.
*/ button =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#journal-button');
     /* Esse teste confere se button não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!button)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar read Ids, mantendo essas referências fixas.
*/ const  /* Aqui read Ids recebe o resultado de journal Read Ids.
*/ readIds =  /* Prepara a lista de anotações lidas sem transformar saves antigos em avisos repetidos. */ journalReadIds();
     /* Essa declaração usa const para preparar count, mantendo essas referências fixas.
*/ const  /* Aqui count recebe uma das duas alternativas, conforme o teste.
*/ count = S ?  /* Monta uma lista somente com os valores que passam no teste. */ S.log.filter( /* Essa função recebe entry e index e devolve a negação de o resultado de read Ids.includes. */ (entry,index) => ! /* Confere se esse valor está presente na lista ou no texto. */ readIds.includes( /* Usa o identificador da anotação ou monta um pelo índice. */ entryId(entry,index))).length : 0;
     /* Essa declaração usa let para preparar badge, permitindo atualizar esses valores depois.
*/ let  /* Aqui badge recebe o resultado de atalho de seleção de elementos.
*/ badge =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#journal-count');
     /* Esse teste confere se badge não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!badge) { /* Atualiza badge usando o resultado de document.create Element.
*/ badge= /* Cria um elemento HTML do tipo span. */ document.createElement('span'); /* Atualiza badge.id usando journal count.
*/ badge.id='journal-count'; /* Define as classes de aparência desse elemento.
*/ badge.className='journal-count'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ button.append(badge);}
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ badge.textContent= /* Converte esse valor para texto. */ String(count); /* Define se esse elemento fica escondido ou disponível na tela.
*/ badge.hidden=count===0;
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ button.classList.toggle('has-new',count>0);
     /* Define o atributo aria label desse elemento.
*/ button.setAttribute('aria-label','Registro de descobertas'+(count?' · '+count+' nova(s) anotação(ões)':''));
     /* Atualiza button.disabled usando o resultado dessa expressão.
*/ button.disabled=mode==='menu';
     /* Atualiza .disabled usando o resultado dessa expressão.
*/ $('#inventory-button').disabled=mode==='menu';
  }
   /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ function note(title, text, meta = {}) {
     /* Esse teste confere se o resultado de S.log.some está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se pelo menos um item passa no teste. */ S.log.some( /* Essa função recebe n e devolve o resultado dessa expressão. */ n => n.title === title && n.text === text))  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Prepara a lista de anotações lidas sem transformar saves antigos em avisos repetidos.
*/ journalReadIds();
     /* Essa declaração usa const para preparar point, mantendo essas referências fixas.
*/ const  /* Aqui point recebe o resultado de D.points.find.
*/ point= /* Procura o primeiro item que passa na condição indicada. */ D.points.find( /* Essa função recebe p e devolve o resultado dessa expressão. */ p=>p.name===title);
     /* Essa declaração usa const para preparar eco, mantendo essas referências fixas.
*/ const  /* Aqui eco recebe o resultado dessa expressão.
*/ eco=meta.eco||point?.eco;
     /* Essa declaração usa const para preparar voice, mantendo essas referências fixas.
*/ const  /* Aqui voice recebe o resultado de window.Observacao Sentia.interpretation.
*/ voice= /* esse comando escolhe a interpretação pouco confiável do protagonista para acompanhar o fato registrado. */ window.ObservacaoSentia?.interpretation(title,text,{ /* Liga esse conteúdo ao Eco correspondente.
*/ eco, /* Esse campo guarda deaths com S.dead.length.
*/ deaths:S.dead.length, /* Esse campo guarda item com meta.item.
*/ item:meta.item});
     /* Acrescenta esse valor no fim da lista.
*/ S.log.push({ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'entry-'+S.log.length, /* Esse campo guarda title com title.
*/ title, /* Guarda o texto que essa parte vai mostrar.
*/ text, /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...(voice?{ /* Guarda a fala ou interpretação ligada à descoberta.
*/ voice}:{}), /* Esse campo guarda source com o resultado dessa expressão.
*/ source:meta.source||(point?'Observação':'Acontecimento')});
     /* Atualiza a quantidade de anotações novas no botão do registro.
*/ updateJournalBadge();
     /* Essa declaração usa let para preparar notice, permitindo atualizar esses valores depois.
*/ let  /* Aqui notice recebe o resultado de atalho de seleção de elementos.
*/ notice= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#journal-notice');
     /* Esse teste confere se notice não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!notice){ /* Atualiza notice usando o resultado de document.create Element.
*/ notice= /* Cria um elemento HTML do tipo button. */ document.createElement('button'); /* Atualiza notice.id usando journal notice.
*/ notice.id='journal-notice'; /* Atualiza notice.type usando button.
*/ notice.type='button'; /* Define as classes de aparência desse elemento.
*/ notice.className='journal-notice'; /* Define o atributo aria live desse elemento.
*/ notice.setAttribute('aria-live','polite'); /* Liga essa função ao clique desse controle.
*/ notice.onclick=journal; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ document.querySelector('.game-footer').append(notice);}
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ notice.textContent='Nova anotação no registro · J'; /* Define se esse elemento fica escondido ou disponível na tela.
*/ notice.hidden=false;
     /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(journalToastTimer); /* Atualiza journal Toast Timer usando o resultado de set Timeout.
*/ journalToastTimer= /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Define se esse elemento fica escondido ou disponível na tela.
*/ notice.hidden=true;},6500);
     /* Esse teste confere se o resultado dessa expressão é maior que 1200, e só entra nesse caminho quando a condição passa.
*/ if( /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now()-lastJournalSound>1200){ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('notification'); /* Atualiza last Journal Sound usando o resultado de performance.now.
*/ lastJournalSound= /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now();}
     /* Devolve true e encerra essa chamada da função.
*/ return true;
  }
   /* Conta uma interação importante e salva a mudança.
*/ function significant() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ S.activity++;
     /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
  }
   /* Confere se esse Eco já está na lista de mortos.
*/ function dead(id) {
     /* Devolve o resultado de S.dead.includes e encerra essa chamada da função.
*/ return  /* Confere se esse valor está presente na lista ou no texto. */ S.dead.includes(id);
  }
   /* Registra a morte do Eco uma única vez e atualiza suas consequências na história.
*/ function kill(id, cause) {
     /* Esse teste confere se o resultado de dead está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse Eco já está na lista de mortos. */ dead(id))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Acrescenta esse valor no fim da lista.
*/ S.dead.push(id);
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ delete S.pending[id];
     /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Uma ausência: ' + D.names[id], cause);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(S.room===id&&mode==='explore') /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('room-empty');
     /* Conta uma interação importante e salva a mudança.
*/ significant();
     /* Confere as condições da história que abrem a passagem de Hunger.
*/ checkHungerDoor();
  }
   /* Coloca o objeto na bolsa e registra como ele foi recebido.
*/ function addItem(id) {
     /* Esse teste confere se o resultado de S.items.includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes(id))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Acrescenta esse valor no fim da lista.
*/ S.items.push(id);
     /* Essa declaração usa const para preparar name, mantendo essas referências fixas.
*/ const  /* Aqui name recebe o resultado dessa expressão.
*/ name=({ /* Esse campo guarda espada com Espada de fogo.
*/ espada:'Espada de fogo', /* Esse campo guarda escudo com Escudo de fogo.
*/ escudo:'Escudo de fogo', /* Esse campo guarda luz com Luz de Candy.
*/ luz:'Luz de Candy', /* Esse campo guarda faca com Faca vermelha.
*/ faca:'Faca vermelha', /* Esse campo guarda lanterna com Lanterna.
*/ lanterna:'Lanterna', /* Esse campo guarda chave sanidade com Chave de Cassidy.
*/ 'chave-sanidade':'Chave de Cassidy', /* Esse campo guarda chave insanidade com Chave de Mizzery.
*/ 'chave-insanidade':'Chave de Mizzery'})[id]||id;
     /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Na bolsa: '+name,'O objeto passou para a sua bolsa e pode ser examinado sem ser equipado.',{ /* Esse campo guarda item com id.
*/ item:id, /* Esse campo guarda source com Inventário.
*/ source:'Inventário'});
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('item');
     /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
  }
                                                                  
   /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável.
*/ function baseSprite(id, pose = 'base') {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='insanidade'&&S?.flags.maskRemoved&&pose!=='forma-chave')  /* Devolve o resultado de asset e encerra essa chamada da função.
*/ return  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/insanidade/11-rosto-4-desprendido.png');
     /* Essa declaração usa let para preparar part, permitindo atualizar esses valores depois.
*/ let  /* Aqui part recebe uma das duas alternativas, conforme o teste.
*/ part = id === 'neutralidade' ? '/04-Neutralidade/neutralidade.png' :  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda sanidade.
*/ 'sanidade',  /* Essa posição da lista guarda insanidade.
*/ 'insanidade'].includes(id) ? '/03-Generais/' + id + '/' : '/01-Ecos/' + id + '/01-Dialogo/';
     /* Esse teste confere se id é igual a neutralidade, e só entra nesse caminho quando a condição passa.
*/ if (id === 'neutralidade')  /* Devolve o resultado de asset e encerra essa chamada da função.
*/ return  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset(part);
     /* Essa declaração usa const para preparar matches, mantendo essas referências fixas.
*/ const  /* Aqui matches recebe o resultado de list.
*/ matches =  /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list(part);
     /* Essa declaração usa let para preparar normalized, permitindo atualizar esses valores depois.
*/ let  /* Aqui normalized recebe o resultado dessa expressão.
*/ normalized = {
       /* Esse campo guarda abalada com abalado.
*/ 'abalada': 'abalado',
       /* Esse campo guarda quebrado com quebrou.
*/ 'quebrado': 'quebrou',
       /* Esse campo guarda vulnerável com quebrou.
*/ 'vulnerável': 'quebrou',
       /* Esse campo guarda único com base.
*/ 'único': 'base',
       /* Esse campo guarda pensamento com base.
*/ 'pensamento': 'base',
       /* Esse campo guarda entregar espada escudo com entregar espada e escudo.
*/ 'entregar-espada/escudo': 'entregar-espada-e-escudo'
    }[pose] || ( /* Confere se o texto começa com o trecho indicado. */ pose.startsWith('quebrando') ? 'quebrando' :  /* Separa esse texto em partes usando o separador indicado. */ pose.split(',')[0]);
     /* Esse teste confere se id é igual a tristeza, e só entra nesse caminho quando a condição passa.
*/ if(id==='tristeza')  /* Atualiza normalized usando o resultado dessa expressão.
*/ normalized=({ /* Esse campo guarda abalado com abalada.
*/ abalado:'abalada', /* Esse campo guarda acolhido com acolhida.
*/ acolhido:'acolhida'})[normalized]||normalized;
     /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda sanidade.
*/ 'sanidade', /* Essa posição da lista guarda insanidade.
*/ 'insanidade'].includes(id))  /* Atualiza normalized usando o resultado dessa expressão.
*/ normalized=({ /* Esse campo guarda gostou com uma das duas alternativas, conforme o teste.
*/ gostou:id==='sanidade'?'aprovar':'divertido', /* Esse campo guarda nao gostou com discordar.
*/ 'nao-gostou':'discordar', /* Esse campo guarda abalado com escutar.
*/ abalado:'escutar', /* Esse campo guarda acolhido com uma das duas alternativas, conforme o teste.
*/ acolhido:id==='sanidade'?'aprovar':'divertido'})[normalized]||normalized;
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* Procura o primeiro item que passa na condição indicada. */ matches.find( /* Essa função recebe p e devolve o resultado de p.ends With. */ p =>  /* Confere se o texto termina com o trecho indicado. */ p.endsWith('-' + normalized + '.png')) ||  /* Procura o primeiro item que passa na condição indicada. */ matches.find( /* Essa função recebe p e devolve o resultado de p.includes. */ p =>  /* Confere se esse valor está presente na lista ou no texto. */ p.includes(normalized)) ||  /* Procura o primeiro item que passa na condição indicada. */ matches.find( /* Essa função recebe p e devolve o resultado de p.ends With. */ p =>  /* Confere se o texto termina com o trecho indicado. */ p.endsWith('00-base.png'));
  }
   /* Escolhe a imagem que fica no fundo da cena.
*/ function background(src) {
     /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#background').src = src ||  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Entrada/03-praca-central.png');
  }
   /* Remove as partes extras da pose para não deixar asas ou água da cena anterior.
*/ function clearIdle() {  /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('.idle-layer').forEach( /* Essa função recebe layer e devolve o resultado de layer.remove. */ layer =>  /* Retira esse elemento da página. */ layer.remove()); }
   /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ function actor(id, pose = 'base', extra = '') {
     /* Remove as partes extras da pose para não deixar asas ou água da cena anterior.
*/ clearIdle();
     /* Essa declaração usa const para preparar el, mantendo essas referências fixas.
*/ const  /* Aqui el recebe o resultado de atalho de seleção de elementos.
*/ el =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#actor');
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='tristeza'&&S?.phase==='ninfa'&&!S.flags.ninfaDefeated)  /* Atualiza extra usando o resultado de .trim.
*/ extra= /* Retira os espaços extras do começo e do fim do texto. */ (extra+' combat').trim();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='insanidade'&&S?.phase==='revelation')  /* Atualiza extra usando o resultado de .trim.
*/ extra= /* Retira os espaços extras do começo e do fim do texto. */ (extra+' closeup').trim();
     /* Esse teste confere se id não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!id) {
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ el.hidden = true;
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Escolhe o arquivo que esse elemento deve carregar.
*/ el.src = id==='amor' && S?.phase==='candy' && pose==='quebrou' ?  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('amor-chorando-rosto-coberto.png') :  /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável. */ baseSprite(id, pose);
     /* Atualiza el.dataset.pose usando pose.
*/ el.dataset.pose = pose;
     /* Atualiza el.dataset.eco usando id.
*/ el.dataset.eco = id;
     /* Atualiza el.alt usando o resultado dessa expressão.
*/ el.alt = D.names[id] || id;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ el.hidden = false;
     /* Define as classes de aparência desse elemento.
*/ el.className = 'actor ' + extra + ( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda amor.
*/ 'amor',  /* Essa posição da lista guarda calma.
*/ 'calma'].includes(id) && !settings.reduced ? ' floating' : '');
     /* Atualiza current Eco usando id.
*/ currentEco = id;
     /* Define o valor da propriedade de estilo accent.
*/ document.documentElement.style.setProperty('--accent', palette[id] || '#d6c395');
     /* Define o valor da propriedade de estilo dialogue art.
*/ document.documentElement.style.setProperty('--dialogue-art', 'url("' +  /* Cria uma instância de URL para usar nesse recurso. */ new URL( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Caixas-Dialogo/PNG/' + id + '.png'), document.baseURI).href + '")');
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (pose === 'base' && !extra) {
       /* Essa declaração usa const para preparar folder, mantendo essas referências fixas.
*/ const  /* Aqui folder recebe o resultado dessa expressão.
*/ folder='/05-Idle-e-Camadas/'+id+'/';
       /* Essa declaração usa const para preparar complete, mantendo essas referências fixas.
*/ const  /* Aqui complete recebe o resultado de asset.
*/ complete= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset(folder+'00-forma-base.png');
       /* Essa declaração usa const para preparar body, mantendo essas referências fixas.
*/ const  /* Aqui body recebe o resultado de asset.
*/ body= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset(folder+'01-camada-corpo.png');
       /* Essa declaração usa const para preparar parts, mantendo essas referências fixas.
*/ const  /* Aqui parts recebe o resultado de .sort.
*/ parts= /* Organiza a ordem dessa lista usando a comparação indicada. */ list(folder).filter( /* Essa função recebe src e devolve o resultado de 0 2 9 camada .test. */ src=> /* Confere se o texto corresponde a esse padrão de expressão regular. */ /\/0[2-9]-camada-/.test(src)).sort();
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(settings.reduced || !body || !parts.length) {
         /* Esse teste confere se complete está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(complete) /* Escolhe o arquivo que esse elemento deve carregar.
*/ el.src=complete;
      } else {
                                                                                                
         /* Escolhe o arquivo que esse elemento deve carregar.
*/ el.src=body;
         /* Essa declaração usa const para preparar paired, mantendo essas referências fixas.
*/ const  /* Aqui paired recebe o resultado de .class List.contains.
*/ paired= /* Confere se esse elemento tem a classe indicada. */ $('#stage').classList.contains('shared-scene');
         /* Esse teste confere se paired está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(paired) /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ el.classList.add('paired');
         /* Percorre os itens e executa a função indicada em cada um.
*/ parts.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (src,index)=>{
           /* Essa declaração usa const para preparar layer, mantendo essas referências fixas.
*/ const  /* Aqui layer recebe o resultado de document.create Element.
*/ layer= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Escolhe o arquivo que esse elemento deve carregar.
*/ layer.src=src; /* Atualiza layer.alt usando um texto vazio.
*/ layer.alt='';
           /* Essa declaração usa const para preparar motion, mantendo essas referências fixas.
*/ const  /* Aqui motion recebe uma das duas alternativas, conforme o teste.
*/ motion= /* Confere se o texto corresponde a esse padrão de expressão regular. */ /asa/.test(src)?'wing': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /agua|gotas/.test(src)?'water': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /nucleo|halo/.test(src)?'glow':'sway';
           /* Essa declaração usa const para preparar side, mantendo essas referências fixas.
*/ const  /* Aqui side recebe uma das duas alternativas, conforme o teste.
*/ side= /* Confere se o texto corresponde a esse padrão de expressão regular. */ /direit/.test(src)?'right': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /esquerd/.test(src)?'left':'';
           /* Define as classes de aparência desse elemento.
*/ layer.className='actor idle-layer '+motion+' '+side+(paired?' paired':'');
           /* Atualiza layer.dataset.layer usando o resultado de .pop.
*/ layer.dataset.layer= /* Retira e devolve o último valor da lista. */ src.split('/').pop(); /* Atualiza layer.dataset.layer Order usando o resultado de String.
*/ layer.dataset.layerOrder= /* Converte esse valor para texto. */ String(index+1); /* Atualiza layer.style.z Index usando 2.
*/ layer.style.zIndex='2';
           /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#stage').append(layer);
        });
      }
    }
  }
   /* Coloca o segundo Eco na conversa compartilhada e ajusta a posição dos dois.
*/ function actorTwo(id, pose = 'base') {
     /* Essa declaração usa const para preparar el, mantendo essas referências fixas.
*/ const  /* Aqui el recebe o resultado de atalho de seleção de elementos.
*/ el =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#actor-two');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ el.hidden = !id;
     /* Esse teste confere se id está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (id) {
       /* Define as classes de aparência desse elemento.
*/ el.className = 'actor two';
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ el.src =  /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável. */ baseSprite(id, pose);
       /* Atualiza el.alt usando D.names.id.
*/ el.alt = D.names[id];
       /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#actor').classList.add('paired');
    }
  }
   /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ function resetScene() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ sceneSerial++;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.cancelScare?.();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ roomAtmosphere.cleanup?.();
     /* Atualiza writing usando um valor vazio.
*/ writing = null;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.stopVoice?.();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.clearRoom?.();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.clearTension?.();
     /* Retira esse elemento da página.
*/ $('#dialogue').classList.remove('is-writing');
     /* Remove as partes extras da pose para não deixar asas ou água da cena anterior.
*/ clearIdle();
     /* esse comando encerra a arena, libera o arraste da câmera e interrompe a pressão sonora.
*/ Arena.stop();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.Perseguicao?.stop();
     /* Atualiza mode usando scene.
*/ mode = 'scene';
     /* Atualiza timed usando um valor vazio.
*/ timed = null;
     /* Atualiza clock Task usando um valor vazio.
*/ clockTask = null;
     /* Atualiza watch usando um valor vazio.
*/ watch = null;
     /* Atualiza qte usando um valor vazio.
*/ qte = null;
     /* Atualiza chase usando um valor vazio.
*/ chase = null;
     /* Atualiza keys Held usando um objeto com os campos dessa parte.
*/ keysHeld = {};
     /* Atualiza queue usando uma lista com 0 posições.
*/ queue = [];
     /* Atualiza after Dialogue usando um valor vazio.
*/ afterDialogue = null;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#actor').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#actor-two').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#hands').hidden = true;
     /* Define as classes de aparência desse elemento.
*/ $('#hands').className = 'hands';
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ delete  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#hands').dataset.layout;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#jumpscare-frame')?.remove();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#held-object')?.remove();
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#dialogue').hidden = true;
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#choices').replaceChildren();
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speaker').textContent = '';
     /* Retira o atributo title desse elemento.
*/ $('#speaker').removeAttribute('title');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speech').textContent = '';
     /* Retira o atributo aria label desse elemento.
*/ $('#speech').removeAttribute('aria-label');
     /* Atualiza .scroll Top usando 0.
*/ $('.dialogue-body').scrollTop = 0;
     /* Escolhe a moldura da fala e uma moldura neutra para a narração.
*/ setDialogueTheme(null);
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#prompt').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#action-panel').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#mobile-controls').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#fade').hidden = true;
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#world-controls').replaceChildren();
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent = '';
     /* Define as classes de aparência desse elemento.
*/ $('#action-panel').className = 'action-panel';
     /* Atualiza .style.opacity usando 1.
*/ $('#background').style.opacity = '1';
     /* Retira esse elemento da página.
*/ $('#stage').classList.remove('light');
     /* Retira esse elemento da página.
*/ $('#stage').classList.remove('exploring','in-room','room-empty','chasing','impact','ninfa-pressure','cinematic-closeup','shared-scene','choice-glitch','sugar-finale','loss-scene','lamp-out');
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ delete  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#stage').dataset.urgency;
     /* Retira o valor específico dessa propriedade de estilo.
*/ $('#stage').style.removeProperty('--wave-pressure');
     /* Retira o valor específico dessa propriedade de estilo.
*/ $('#stage').style.removeProperty('--orb-scale');
     /* Define as classes de aparência desse elemento.
*/ $('#prompt').className='prompt';
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#sanity-hud').hidden = true;
     /* Mostra os avisos de novos quartos durante a exploração.
*/ showRoomNotice();
     /* Mostra ou desativa o botão do gesto conforme o desbloqueio e a cena atual.
*/ updateGestureControl();
     /* Atualiza a quantidade de anotações novas no botão do registro.
*/ updateJournalBadge();
  }
   /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ function objective(text) {
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#objective').textContent = text;
  }
   /* Cria um botão com o texto, a ação e a aparência indicados.
*/ function btn(text, fn, cls = '') {
     /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de document.create Element.
*/ b =  /* Cria um elemento HTML do tipo button. */ document.createElement('button');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ b.textContent = text;
     /* Define as classes de aparência desse elemento.
*/ b.className = cls;
     /* Liga essa função ao clique desse controle.
*/ b.onclick = fn;
     /* Escolhe o desenho aprovado que corresponde à ação desse botão.
*/ decorateControl(b,text);
     /* Devolve b e encerra essa chamada da função.
*/ return b;
  }
   /* Escolhe o desenho aprovado que corresponde à ação desse botão.
*/ function decorateControl(button,text) {
     /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe uma das duas alternativas, conforme o teste.
*/ key= /* Confere se o texto corresponde a esse padrão de expressão regular. */ /bolsa/i.test(text)?'inventario': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /registro/i.test(text)?'diario': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /pausa/i.test(text)?'pausa': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /atacar|lutar/i.test(text)?'atacar': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /proteger|defender/i.test(text)?'defender': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /^luz/i.test(text)?'luz': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /equipar/i.test(text)?'equipar': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /correr/i.test(text)?'correr': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /esquerda/i.test(text)?'esquerda': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /direita/i.test(text)?'direita': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /abaixar|baixo/i.test(text)?'baixo': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /frente|avançar/i.test(text)?'avancar': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /examinar|observar/i.test(text)?'examinar': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /interagir|pegar/i.test(text)?'interagir': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /fechar/i.test(text)?'fechar': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /voltar|continuar/i.test(text)?'voltar':null;
     /* Esse teste confere se key não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!key) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ button.classList.add('sprite-control');
     /* Percorre cada valor de uma lista com 3 posições usando valores separados da lista nesta repetição.
*/ for( /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe nenhum valor inicial.
*/ [state,suffix] of [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda normal.
*/ 'normal', /* Essa posição da lista guarda normal.
*/ 'normal'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda pressed.
*/ 'pressed', /* Essa posição da lista guarda pressionado.
*/ 'pressionado'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda disabled.
*/ 'disabled', /* Essa posição da lista guarda desativado.
*/ 'desativado']]) {
       /* Essa declaração usa const para preparar src, mantendo essas referências fixas.
*/ const  /* Aqui src recebe o resultado de asset.
*/ src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/04-Botoes-4x/'+key+'-'+suffix+'.png');
       /* Esse teste confere se src está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(src) /* Define o valor da propriedade de estilo o resultado dessa expressão.
*/ button.style.setProperty('--control-'+state,'url("'+ /* Cria uma instância de URL para usar nesse recurso. */ new URL(src,document.baseURI).href+'")');
    }
  }
   /* Monta o painel de instruções e ações da cena.
*/ function panel(title, text) {
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de atalho de seleção de elementos.
*/ p =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#action-panel');
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ p.replaceChildren();
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ p.hidden = false;
     /* Essa declaração usa const para preparar h, mantendo essas referências fixas.
*/ const  /* Aqui h recebe o resultado de document.create Element.
*/ h =  /* Cria um elemento HTML do tipo h1. */ document.createElement('h1');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ h.textContent = title;
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(h);
     /* Esse teste confere se text está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (text) {
       /* Essa declaração usa const para preparar t, mantendo essas referências fixas.
*/ const  /* Aqui t recebe o resultado de document.create Element.
*/ t =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ t.textContent = text;
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(t);
    }
     /* Devolve p e encerra essa chamada da função.
*/ return p;
  }
                                                                                 
   /* Escolhe a moldura da fala e uma moldura neutra para a narração.
*/ function setDialogueTheme(eco) {
     /* Essa declaração usa const para preparar theme e box, mantendo essas referências fixas.
*/ const  /* Aqui theme recebe uma das duas alternativas, conforme o teste.
*/ theme=eco&&D.names[eco]?eco:'neutralidade', /* Aqui box recebe o resultado de atalho de seleção de elementos.
*/ box= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#dialogue');
     /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de asset.
*/ image= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Caixas-Dialogo/PNG/'+theme+'.png');
     /* Atualiza box.dataset.theme usando theme.
*/ box.dataset.theme=theme;
     /* Define o valor da propriedade de estilo accent.
*/ box.style.setProperty('--accent',palette[theme]||'#d6c395');
     /* Define o valor da propriedade de estilo dialogue art.
*/ box.style.setProperty('--dialogue-art',image?'url("'+ /* Cria uma instância de URL para usar nesse recurso. */ new URL(image,document.baseURI).href+'")':'none');
  }
                                                                                
   /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ function say(eco, lines, done) {
     /* Atualiza writing usando um valor vazio.
*/ writing = null;
     /* Atualiza timed usando um valor vazio.
*/ timed = null;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.stopVoice?.();
     /* Atualiza mode usando dialogue.
*/ mode = 'dialogue';
     /* Mostra ou desativa o botão do gesto conforme o desbloqueio e a cena atual.
*/ updateGestureControl();
     /* Atualiza current Eco usando eco.
*/ currentEco = eco;
     /* Atualiza queue usando o resultado de lines.map.
*/ queue =  /* Monta uma nova lista transformando cada posição da lista original. */ lines.map( /* Essa função recebe l e devolve uma das duas alternativas, conforme o teste. */ l => typeof l === 'string' ? {
       /* Guarda o texto que essa parte vai mostrar.
*/ text: l,
       /* Indica quem está falando nessa linha.
*/ who: eco ? D.names[eco] : 'Jardim'
    } :  /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(l) ? {
       /* Indica quem está falando nessa linha.
*/ who: l[0],
       /* Guarda o texto que essa parte vai mostrar.
*/ text: l[1]
    } : l);
     /* Atualiza after Dialogue usando done.
*/ afterDialogue = done;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#action-panel').hidden = true;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#prompt').hidden = true;
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#world-controls').replaceChildren();
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#dialogue').hidden = false;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#room-notice').hidden = true;
     /* Esse teste confere se o resultado de Resposta s .test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /^Resposta\s*·/.test( /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#status').textContent)) /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent='';
     /* Escolhe a moldura da fala e uma moldura neutra para a narração.
*/ setDialogueTheme(eco);
     /* Retira esse elemento da página.
*/ $('#stage').classList.remove('exploring','chasing');
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.Perseguicao?.stop();
                                                                              
     /* Esse teste confere se eco está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (eco) {
       /* Essa declaração usa const para preparar visible, mantendo essas referências fixas.
*/ const  /* Aqui visible recebe o resultado de atalho de seleção de elementos.
*/ visible= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#actor');
       /* Essa declaração usa const para preparar opening, mantendo essas referências fixas.
*/ const  /* Aqui opening recebe queue.0.pose.
*/ opening=queue[0]?.pose;
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(eco, /* Confere se esse Eco já está na lista de mortos. */ dead(eco)?'morreu':opening||(visible.dataset.eco===eco&&!visible.hidden?visible.dataset.pose:'base'));
    }
     /* Completa a frase atual ou passa para a próxima fala e suas escolhas.
*/ nextLine();
  }
   /* Essa declaração usa let para preparar writing, permitindo atualizar esses valores depois.
*/ let  /* Aqui writing recebe um valor vazio.
*/ writing = null;
                                                                             
   /* Prepara as letras que vão aparecer aos poucos junto dos bipes.
*/ function revealSpeech(text) {
     /* Essa declaração usa const para preparar letters, mantendo essas referências fixas.
*/ const  /* Aqui letters recebe o resultado de Array.from.
*/ letters =  /* Cria uma lista a partir dos valores recebidos. */ Array.from(text || '');
     /* Atualiza writing usando uma das duas alternativas, conforme o teste.
*/ writing = letters.length ? { /* Esse campo guarda letters com letters.
*/ letters,  /* Guarda a posição atual dentro dessa sequência.
*/ index:0,  /* Esse campo guarda elapsed com 0.
*/ elapsed:0} : null;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speech').textContent = '';
     /* Define o atributo aria label desse elemento.
*/ $('#speech').setAttribute('aria-label', text || '');
     /* Define o atributo aria live desse elemento.
*/ $('#speech').setAttribute('aria-live','off');
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#dialogue').classList.toggle('is-writing',!!writing);
     /* Define o atributo aria label desse elemento.
*/ $('#advance').setAttribute('aria-label', 'Mostrar frase inteira');
  }
   /* Pede o bipe correspondente à letra e à pessoa que está falando.
*/ function voiceLetter(letter) {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.voice?.(letter, /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#speaker').textContent);
  }
   /* Completa a frase de uma vez quando o jogador pede para pular a escrita.
*/ function finishWriting() {
     /* Esse teste confere se writing não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!writing)  /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speech').textContent= /* Junta as partes da lista em um texto. */ writing.letters.join('');
     /* Atualiza writing usando um valor vazio.
*/ writing=null;
     /* Retira esse elemento da página.
*/ $('#dialogue').classList.remove('is-writing');
     /* Define o atributo aria label desse elemento.
*/ $('#advance').setAttribute('aria-label','Continuar');
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.stopVoice?.();
     /* Devolve true e encerra essa chamada da função.
*/ return true;
  }
   /* Completa a frase atual ou passa para a próxima fala e suas escolhas.
*/ function nextLine() {
     /* Esse teste confere se paused está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (paused)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se o resultado de finish Writing está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Completa a frase de uma vez quando o jogador pede para pular a escrita. */ finishWriting())  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza .scroll Top usando 0.
*/ $('.dialogue-body').scrollTop=0;
     /* Atualiza timed usando um valor vazio.
*/ timed = null;
     /* Esse teste confere se o resultado de Resposta s .test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /^Resposta\s*·/.test( /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#status').textContent)) /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent='';
     /* Essa declaração usa const para preparar line, mantendo essas referências fixas.
*/ const  /* Aqui line recebe o resultado de queue.shift.
*/ line =  /* Retira e devolve o primeiro valor da lista. */ queue.shift();
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (line?.requiresItem && ! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes(line.requiresItem))  /* Devolve o resultado de next Line e encerra essa chamada da função.
*/ return  /* Completa a frase atual ou passa para a próxima fala e suas escolhas. */ nextLine();
     /* Esse teste confere se line não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!line) {
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#dialogue').hidden = true;
       /* Essa declaração usa const para preparar fn, mantendo essas referências fixas.
*/ const  /* Aqui fn recebe after Dialogue.
*/ fn = afterDialogue;
       /* Atualiza after Dialogue usando um valor vazio.
*/ afterDialogue = null;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ fn?.();
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#choices').replaceChildren();
     /* Retira esse elemento da página.
*/ $('#dialogue').classList.remove('is-writing');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#advance').hidden = false;
                                                                    
     /* Esse teste confere se line.image está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(line.image){ /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#effect').src=line.image; /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden=false;}else  /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden=true;
     /* Esse teste confere se line.choices está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (line.choices) {
       /* Essa declaração usa let para preparar choice Made, permitindo atualizar esses valores depois.
*/ let  /* Aqui choice Made recebe false.
*/ choiceMade=false;
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#advance').hidden = true;
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speech').textContent = line.text || 'O que você quer dizer?';
       /* Define o atributo aria label desse elemento.
*/ $('#speech').setAttribute('aria-label',line.text || 'O que você quer dizer?');
       /* Define o atributo aria live desse elemento.
*/ $('#speech').setAttribute('aria-live','polite');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speaker').textContent = line.who || 'Você';
       /* Atualiza .title usando o resultado dessa expressão.
*/ $('#speaker').title = line.who || 'Sua resposta';
       /* Escolhe a moldura da fala e uma moldura neutra para a narração.
*/ setDialogueTheme(currentEco);
       /* Percorre cada valor de line.choices usando c nesta repetição.
*/ for ( /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe nenhum valor inicial.
*/ c of line.choices)  /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#choices').append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(c.label,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Esse teste confere se paused está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (paused)  /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Esse teste confere se choice Made está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(choiceMade) /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Atualiza choice Made usando true.
*/ choiceMade=true;
         /* Percorre os itens e executa a função indicada em cada um.
*/ $('#choices').querySelectorAll('button').forEach( /* Essa função recebe button e devolve o resultado dessa expressão. */ button=> /* Atualiza button.disabled usando true. */ button.disabled=true);
         /* Acrescenta esse valor no fim da lista.
*/ S.choices.push({
           /* Esse campo guarda scene com o resultado dessa expressão.
*/ scene: line.id || S.phase,
           /* Liga esse conteúdo ao Eco correspondente.
*/ eco: currentEco,
           /* Define o texto mostrado na opção ou no controle.
*/ label: c.label
        });
         /* Esse teste confere se c.effect está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (c.effect)  /* Executa c.effect com os valores definidos nessa parte.
*/ c.effect();
         /* Esse teste confere se c.reply está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (c.reply)  /* Coloca esse valor no começo da lista.
*/ queue.unshift({
           /* Indica quem está falando nessa linha.
*/ who: c.who || ( /* Confere se esse Eco já está na lista de mortos. */ dead(currentEco)?'Jardim':D.names[currentEco] || 'Jardim'),
           /* Guarda o texto que essa parte vai mostrar.
*/ text: c.reply,
           /* Escolhe a pose do personagem para essa fala.
*/ pose: c.pose
        });
         /* Esse teste confere se c.go está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (c.go) {
           /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#dialogue').hidden = true;
           /* Atualiza queue usando uma lista com 0 posições.
*/ queue = [];
           /* Executa c.go com os valores definidos nessa parte.
*/ c.go();
        } else  /* Completa a frase atual ou passa para a próxima fala e suas escolhas.
*/ nextLine();
      }));
       /* Esse teste confere se line.seconds está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (line.seconds)  /* Atualiza timed usando um objeto com os campos dessa parte.
*/ timed = {
         /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: line.seconds,
         /* Esse campo guarda total com line.seconds.
*/ total: line.seconds,
         /* Esse campo guarda done com uma função para executar quando for chamada.
*/ done:  /* Executa a continuação recebida para seguir depois desta etapa. */ () => {
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ line.onTimeout?.();
           /* Coloca esse valor no começo da lista.
*/ queue.unshift({
             /* Indica quem está falando nessa linha.
*/ who: D.names[currentEco],
             /* Guarda o texto que essa parte vai mostrar.
*/ text: line.silence || '…'
          });
           /* Completa a frase atual ou passa para a próxima fala e suas escolhas.
*/ nextLine();
        }
      };
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Essa declaração usa const para preparar nomes Antigos, mantendo essas referências fixas.
*/ const  /* Aqui nomes Antigos recebe um objeto com os campos dessa parte.
*/ nomesAntigos = { /* Esse campo guarda Felicidade com Sunny.
*/ "Felicidade":"Sunny", /* Esse campo guarda Orgulho com Aurea.
*/ "Orgulho":"Aurea", /* Esse campo guarda Determinação com Friska.
*/ "Determinação":"Friska", /* Esse campo guarda Medo com Hunger.
*/ "Medo":"Hunger", /* Esse campo guarda Culpa com Lúmen.
*/ "Culpa":"Lúmen", /* Esse campo guarda Ódio com Beerus.
*/ "Ódio":"Beerus", /* Esse campo guarda Sanidade com Cassidy.
*/ "Sanidade":"Cassidy", /* Esse campo guarda Insanidade com Mizzery.
*/ "Insanidade":"Mizzery"};
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speaker').textContent = nomesAntigos[line.who] || line.who || D.names[currentEco] || 'Jardim';
     /* Atualiza .title usando text Content.
*/ $('#speaker').title= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#speaker').textContent;
     /* Prepara as letras que vão aparecer aos poucos junto dos bipes.
*/ revealSpeech(line.text);
     /* Essa declaração usa const para preparar eco Speaking, mantendo essas referências fixas.
*/ const  /* Aqui eco Speaking recebe o resultado dessa expressão.
*/ ecoSpeaking=currentEco && (!line.who || (nomesAntigos[line.who]||line.who)===D.names[currentEco]);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (currentEco && (line.pose || ecoSpeaking) && ! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Protagonista.
*/ 'Protagonista'].includes(line.who)) {
       /* Essa declaração usa let para preparar pose, permitindo atualizar esses valores depois.
*/ let  /* Aqui pose recebe o resultado dessa expressão.
*/ pose = line.pose || 'base';
       /* Esse teste confere se pose é igual a base, e só entra nesse caminho quando a condição passa.
*/ if(pose==='base') {
         /* Esse teste confere se o resultado de não foi confunda use fala pare perigo mentiu ferir machuca i.test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /não (foi|confunda|use|fala)|pare|perigo|mentiu|ferir|machuca/i.test(line.text))  /* Atualiza pose usando nao gostou.
*/ pose='nao-gostou';
        else  /* Esse teste confere se o resultado de não consigo medo esque perdi sozinh não sei difícil demais i.test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /não consigo|medo|esque|perdi|sozinh|não sei|difícil|demais/i.test(line.text))  /* Atualiza pose usando abalado.
*/ pose='abalado';
        else  /* Esse teste confere se o resultado de obrigad pode ficar comigo ajud gost junto companhia i.test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /obrigad|pode ficar|comigo|ajud|gost|junto|companhia/i.test(line.text))  /* Atualiza pose usando gostou.
*/ pose='gostou';
      }
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(currentEco, /* Confere se esse Eco já está na lista de mortos. */ dead(currentEco)?'morreu':pose);
    }
     /* Essa declaração usa const para preparar speaker Eco, mantendo essas referências fixas.
*/ const  /* Aqui speaker Eco recebe o resultado de .find.
*/ speakerEco= /* Procura o primeiro item que passa na condição indicada. */ Object.keys(D.names).find( /* Essa função recebe id e devolve o resultado dessa expressão. */ id=>D.names[id]=== /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#speaker').textContent);
     /* Escolhe a moldura da fala e uma moldura neutra para a narração.
*/ setDialogueTheme(speakerEco||currentEco);
     /* Esse teste confere se line.effect está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (line.effect)  /* Executa line.effect com os valores definidos nessa parte.
*/ line.effect();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse elemento tem a classe indicada. */ $('#stage').classList.contains('shared-scene')&&! /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#actor-two').hidden) /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#actor').classList.add('paired');
  }
   /* Liga essa função ao clique desse controle.
*/ $('#advance').onclick = nextLine;
   /* Escuta o evento click e liga esse evento à função definida aqui.
*/ $('#dialogue').addEventListener('click', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Executa e.target.closest com os valores definidos nessa parte. */ e.target.closest('button,a,input,select,textarea')||paused||mode!=='dialogue') /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se writing está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(writing) /* Completa a frase de uma vez quando o jogador pede para pular a escrita.
*/ finishWriting();else  /* Esse teste confere se hidden não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#advance').hidden) /* Completa a frase atual ou passa para a próxima fala e suas escolhas.
*/ nextLine();
  });
   /* Escolhe o fundo correspondente ao quarto e à direção da câmera.
*/ function roomBg(id, view = 0) {
     /* Devolve view e encerra essa chamada da função.
*/ return  /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/02-Ecos/' + id + '/')[view];
  }
   /* Procura a pose pequena usada durante a exploração do cenário.
*/ function worldSprite(id, variant=0) {
     /* Essa declaração usa const para preparar poses, mantendo essas referências fixas.
*/ const  /* Aqui poses recebe uma lista com 4 posições.
*/ poses=[ /* Essa posição da lista guarda 00 base.
*/ '00-base', /* Essa posição da lista guarda 01 recolhido.
*/ '01-recolhido', /* Essa posição da lista guarda 02 lateral.
*/ '02-lateral', /* Essa posição da lista guarda 03 costas.
*/ '03-costas'];
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-No-Cenario-64/' + id + '/'+poses[variant%4]+'.png') ||  /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável. */ baseSprite(id);
  }
   /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ function explorationHands(gesture = '00-repouso') {
     /* Essa declaração usa const para preparar hands, mantendo essas referências fixas.
*/ const  /* Aqui hands recebe o resultado de atalho de seleção de elementos.
*/ hands= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#hands');
     /* Essa declaração usa const para preparar equipped, mantendo essas referências fixas.
*/ const  /* Aqui equipped recebe um objeto com os campos dessa parte.
*/ equipped={ /* Esse campo guarda espada com 02 Equipamentos espada 01 preparacao.png.
*/ espada:'/02-Equipamentos/espada/01-preparacao.png', /* Esse campo guarda escudo com 02 Equipamentos escudo 01 pronto verso.png.
*/ escudo:'/02-Equipamentos/escudo/01-pronto-verso.png', /* Esse campo guarda faca com 02 Equipamentos faca 01 pronta.png.
*/ faca:'/02-Equipamentos/faca/01-pronta.png', /* Esse campo guarda luz com 02 Equipamentos luz 01 segurar.png.
*/ luz:'/02-Equipamentos/luz/01-segurar.png', /* Esse campo guarda lanterna com 01 Gestos Aprovados 12 carregar lanterna.png.
*/ lanterna:'/01-Gestos-Aprovados/12-carregar-lanterna.png', /* Esse campo guarda chave sanidade com 02 Equipamentos chaves 01 sanidade.png.
*/ 'chave-sanidade':'/02-Equipamentos/chaves/01-sanidade.png', /* Esse campo guarda chave insanidade com 02 Equipamentos chaves 02 insanidade.png.
*/ 'chave-insanidade':'/02-Equipamentos/chaves/02-insanidade.png'};
     /* Essa declaração usa const para preparar equipped Source, mantendo essas referências fixas.
*/ const  /* Aqui equipped Source recebe uma das duas alternativas, conforme o teste.
*/ equippedSource=gesture==='00-repouso'&& /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes(S.flags.equipped)?equipped[S.flags.equipped]:null;
     /* Essa declaração usa const para preparar source, mantendo essas referências fixas.
*/ const  /* Aqui source recebe uma das duas alternativas, conforme o teste.
*/ source=equippedSource? /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset(equippedSource): /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Gestos-Aprovados/'+gesture+'.png');
     /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ showHands(source,gesture);
     /* Atualiza hands.dataset.gesture usando gesture.
*/ hands.dataset.gesture=gesture;
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ hands.classList.add('exploration-hands');
  }
                                                                               
   /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ function showHands(source,gesture='00-repouso') {
     /* Essa declaração usa const para preparar hands, mantendo essas referências fixas.
*/ const  /* Aqui hands recebe o resultado de atalho de seleção de elementos.
*/ hands= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#hands');
     /* Esse teste confere se source não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!source){ /* Define se esse elemento fica escondido ou disponível na tela.
*/ hands.hidden=true; /* Encerra essa função sem devolver outro valor.
*/ return;}
     /* Esse teste confere se o resultado de hands.get Attribute é diferente de source, e só entra nesse caminho quando a condição passa.
*/ if( /* Lê o atributo src desse elemento. */ hands.getAttribute('src')!==source) /* Escolhe o arquivo que esse elemento deve carregar.
*/ hands.src=source;
     /* Atualiza hands.dataset.layout usando uma das duas alternativas, conforme o teste.
*/ hands.dataset.layout= /* Confere se o texto corresponde a esse padrão de expressão regular. */ /02-Equipamentos/.test(source)?'equipment': /* Confere se o texto corresponde a esse padrão de expressão regular. */ /04-segurar-papel|05-equipar-chave|11-segurar-flor|06-oferecer-semente/.test(gesture)?'holding':gesture==='00-repouso'?'rest':'gesture';
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ hands.hidden=false;
  }
   /* Atualiza a barra de sanidade e a indicação do efeito daquele quarto.
*/ function updateSanityHUD() {
     /* Essa declaração usa const para preparar hud, mantendo essas referências fixas.
*/ const  /* Aqui hud recebe o resultado de atalho de seleção de elementos.
*/ hud= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#sanity-hud');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ hud.hidden=!S || (!S.room && mode!=='explore');
     /* Atualiza o valor desse campo ou controle.
*/ $('#sanity-meter').value=S?.sanity ?? 70;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#sanity-value').textContent= /* Arredonda o número para o inteiro mais próximo. */ Math.round(S?.sanity ?? 70);
     /* Essa declaração usa const para preparar negative, mantendo essas referências fixas.
*/ const  /* Aqui negative recebe o resultado de .includes.
*/ negative= /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda tristeza.
*/ 'tristeza', /* Essa posição da lista guarda odio.
*/ 'odio', /* Essa posição da lista guarda medo.
*/ 'medo', /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade', /* Essa posição da lista guarda culpa.
*/ 'culpa'].includes(S?.room);
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#sanity-trend').textContent=S?.room ? ( /* Confere se esse Eco já está na lista de mortos. */ dead(S.room)?'Quarto vazio · sanidade estável':negative?'Este quarto drena sua sanidade':'Este quarto recupera sua sanidade') : 'Na praça, estável';
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ hud.classList.toggle('draining',negative);
  }
                                                                                
   /* Procura uma conversa importante que já pode continuar.
*/ function ready() {
     /* Devolve o resultado de .some e encerra essa chamada da função.
*/ return  /* Confere se pelo menos um item passa no teste. */ unlockedRooms().some( /* Essa função recebe id e devolve o resultado dessa expressão. */ id=>! /* Confere se esse Eco já está na lista de mortos. */ dead(id)&&S.talks[first[id]]&& /* Procura a próxima interação importante que as pistas já liberaram. */ storyAction(id));
  }
   /* Confere os sete desfechos que antecedem as últimas etapas.
*/ function sevenClosed() {
     /* Devolve o resultado de .every e encerra essa chamada da função.
*/ return  /* Confere se todos os itens passam no teste. */ [ /* Essa posição da lista guarda felicidade.
*/ 'felicidade',  /* Essa posição da lista guarda orgulho.
*/ 'orgulho',  /* Essa posição da lista guarda determinacao.
*/ 'determinacao',  /* Essa posição da lista guarda calma.
*/ 'calma',  /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade',  /* Essa posição da lista guarda culpa.
*/ 'culpa',  /* Essa posição da lista guarda medo.
*/ 'medo'].every(dead);
  }
   /* Escolhe uma indicação curta de progresso para esse quarto.
*/ function hint(id) {
     /* Esse teste confere se o resultado de dead está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse Eco já está na lista de mortos. */ dead(id))  /* Devolve O quarto permaneceu. e encerra essa chamada da função.
*/ return 'O quarto permaneceu.';
     /* Esse teste confere se S.pending.id está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (S.pending[id])  /* Devolve Uma visita ficou em aberto. e encerra essa chamada da função.
*/ return 'Uma visita ficou em aberto.';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'medo' && (! /* Confere se esse Eco já está na lista de mortos. */ dead('calma') || ! /* Confere se esse Eco já está na lista de mortos. */ dead('determinacao')))  /* Devolve A porta está fechada. e encerra essa chamada da função.
*/ return 'A porta está fechada.';
     /* Esse teste confere se S.talks.first.id não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!S.talks[first[id]])  /* Devolve Há alguém para conhecer. e encerra essa chamada da função.
*/ return 'Há alguém para conhecer.';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'determinacao' && !S.flags.knifeKnown)  /* Devolve A moldura guarda uma história. e encerra essa chamada da função.
*/ return 'A moldura guarda uma história.';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'tristeza' &&  /* Confere os sete desfechos que antecedem as últimas etapas. */ sevenClosed())  /* Devolve Ninfa quer falar com você. e encerra essa chamada da função.
*/ return 'Ninfa quer falar com você.';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'odio' && S.dead.length === 8)  /* Devolve A última passagem. e encerra essa chamada da função.
*/ return 'A última passagem.';
     /* Esse teste confere se length é menor que 6, e só entra nesse caminho quando a condição passa.
*/ if ( /* Monta uma lista somente com os valores que passam no teste. */ Object.keys(S.seen).filter( /* Essa função recebe k e devolve o resultado de k.starts With. */ k =>  /* Confere se o texto começa com o trecho indicado. */ k.startsWith(id + '.')).length < 6)  /* Devolve Ainda há detalhes para observar. e encerra essa chamada da função.
*/ return 'Ainda há detalhes para observar.';
     /* Devolve Voltar também é uma escolha. e encerra essa chamada da função.
*/ return 'Voltar também é uma escolha.';
  }
                                                                              
   /* Monta a praça e os cartões dos quartos já disponíveis.
*/ function hub() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza mode usando explore.
*/ mode = 'explore';
     /* Atualiza S.room usando um valor vazio.
*/ S.room = null;
     /* Atualiza S.view usando 0.
*/ S.view = 0;
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('explore');
     /* Confere as condições da história que abrem a passagem de Hunger.
*/ checkHungerDoor();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background();
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands();
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent = 'Praça central';
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Conheça os moradores. Volte aos lugares que mudaram.');
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('O Jardim dos Ecos', 'Os caminhos levam a lugares diferentes. Cada morador tem seu próprio tempo.');
     /* Essa declaração usa const para preparar grid, mantendo essas referências fixas.
*/ const  /* Aqui grid recebe o resultado de document.create Element.
*/ grid =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ grid.className = 'rooms';
     /* Percorre cada valor de ids usando id nesta repetição.
*/ for ( /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe nenhum valor inicial.
*/ id of ids) {
       /* Esse teste confere se o resultado de .includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se esse valor está presente na lista ou no texto. */ unlockedRooms().includes(id))  /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue;
       /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de btn.
*/ b =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('',  /* Essa função recebe nenhum parâmetro e devolve o resultado de enter Room. */ () =>  /* Entra no quarto escolhido e confere se existe uma consequência pendente. */ enterRoom(id), 'room-card' + ( /* Confere se esse Eco já está na lista de mortos. */ dead(id) ? ' dead' : ''));
       /* Essa declaração usa const para preparar img, mantendo essas referências fixas.
*/ const  /* Aqui img recebe o resultado de document.create Element.
*/ img =  /* Cria um elemento HTML do tipo img. */ document.createElement('img');
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ img.src =  /* Procura a pose pequena usada durante a exploração do cenário. */ worldSprite(id);
       /* Atualiza img.alt usando um texto vazio.
*/ img.alt = '';
       /* Essa declaração usa const para preparar name, mantendo essas referências fixas.
*/ const  /* Aqui name recebe o resultado de document.create Element.
*/ name =  /* Cria um elemento HTML do tipo span. */ document.createElement('span');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ name.textContent = D.names[id];
       /* Essa declaração usa const para preparar status, mantendo essas referências fixas.
*/ const  /* Aqui status recebe o resultado de document.create Element.
*/ status =  /* Cria um elemento HTML do tipo small. */ document.createElement('small');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ status.textContent =  /* Escolhe uma indicação curta de progresso para esse quarto. */ hint(id);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ b.append(img, name, status);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'medo' && (! /* Confere se esse Eco já está na lista de mortos. */ dead('calma') || ! /* Confere se esse Eco já está na lista de mortos. */ dead('determinacao')))  /* Atualiza b.disabled usando true.
*/ b.disabled = true;
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ grid.append(b);
    }
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(grid);
     /* Essa declaração usa const para preparar small, mantendo essas referências fixas.
*/ const  /* Aqui small recebe o resultado de document.create Element.
*/ small =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
     /* Define as classes de aparência desse elemento.
*/ small.className = 'hint';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ small.textContent =  /* Procura uma conversa importante que já pode continuar. */ ready() ? 'Algumas conversas mudaram. Há detalhes novos nos lugares conhecidos.' : 'Observe os lugares e converse antes de insistir em assuntos delicados. Ninfa e Hermes podem ajudar você a conhecer o Jardim.';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(small);
     /* Mostra os avisos de novos quartos durante a exploração.
*/ showRoomNotice();
  }
   /* Entra no quarto escolhido e confere se existe uma consequência pendente.
*/ function enterRoom(id) {
     /* Esse teste confere se o resultado de ids.includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente na lista ou no texto. */ ids.includes(id))  /* Devolve o resultado de hub e encerra essa chamada da função.
*/ return  /* Monta a praça e os cartões dos quartos já disponíveis. */ hub();
     /* Esse teste confere se o resultado de .includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente na lista ou no texto. */ unlockedRooms().includes(id))  /* Devolve o resultado de hub e encerra essa chamada da função.
*/ return  /* Monta a praça e os cartões dos quartos já disponíveis. */ hub();
     /* Essa declaração usa const para preparar was, mantendo essas referências fixas.
*/ const  /* Aqui was recebe S.room.
*/ was = S.room;
     /* Atualiza S.room usando id.
*/ S.room = id;
     /* Atualiza S.view usando 0.
*/ S.view = 0;
     /* Atualiza S.flags.visits usando o resultado dessa expressão.
*/ S.flags.visits=S.flags.visits||{};
     /* Atualiza S.flags.visits.id usando o resultado dessa expressão.
*/ S.flags.visits[id]=(S.flags.visits[id]||0)+1;
     /* Esse teste confere se was é diferente de id, e só entra nesse caminho quando a condição passa.
*/ if (was !== id) { /* Atualiza S.flags.last Room usando id.
*/ S.flags.lastRoom = id; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('door',{ /* Esse campo guarda intensity com 0.45.
*/ intensity:.45});}
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.pending[id] != null && S.activity > S.pending[id])  /* Devolve o resultado de later Death e encerra essa chamada da função.
*/ return  /* Mostra uma consequência posterior sem confundir isso com a decisão anterior de parar. */ laterDeath(id);
     /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
  }
                                                                          
                                                                                
   /* Monta a luz, as partículas e os materiais visuais próprios desse quarto.
*/ function roomAtmosphere(scene, id) {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ roomAtmosphere.cleanup?.();
     /* Essa declaração usa const para preparar layer, mantendo essas referências fixas.
*/ const  /* Aqui layer recebe o resultado de document.create Element.
*/ layer= /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Essa declaração usa const para preparar kind, mantendo essas referências fixas.
*/ const  /* Aqui kind recebe o resultado dessa expressão.
*/ kind=({ /* Esse campo guarda tristeza com rain.
*/ tristeza:'rain', /* Esse campo guarda orgulho com embers.
*/ orgulho:'embers', /* Esse campo guarda odio com embers.
*/ odio:'embers', /* Esse campo guarda calma com leaves.
*/ calma:'leaves', /* Esse campo guarda amor com petals.
*/ amor:'petals', /* Esse campo guarda ansiedade com electric.
*/ ansiedade:'electric', /* Esse campo guarda medo com mist.
*/ medo:'mist'})[id]||'dust';
     /* Define as classes de aparência desse elemento.
*/ layer.className='room-atmosphere room-'+id+' '+kind+( /* Confere se esse Eco já está na lista de mortos. */ dead(id)?' spent':'');
     /* Atualiza layer.dataset.room usando id.
*/ layer.dataset.room=id; /* Atualiza layer.dataset.view usando o resultado de String.
*/ layer.dataset.view= /* Converte esse valor para texto. */ String(S.view); /* Define o atributo aria hidden desse elemento.
*/ layer.setAttribute('aria-hidden','true');
     /* Define o valor da propriedade de estilo room color.
*/ layer.style.setProperty('--room-color',palette[id]||'#c2d3b5');
     /* Define o valor da propriedade de estilo view offset.
*/ layer.style.setProperty('--view-offset', /* Converte esse valor para texto. */ String((S.view-1.5)*4)+'%');
     /* Essa declaração usa const para preparar light, mantendo essas referências fixas.
*/ const  /* Aqui light recebe o resultado de document.create Element.
*/ light= /* Cria um elemento HTML do tipo i. */ document.createElement('i'); /* Define as classes de aparência desse elemento.
*/ light.className='ambient-light'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ layer.append(light);
     /* Essa declaração usa const para preparar materials, mantendo essas referências fixas.
*/ const  /* Aqui materials recebe o resultado dessa expressão.
*/ materials={
       /* Esse campo guarda felicidade com uma lista com 5 posições.
*/ felicidade:[ /* Essa posição da lista guarda sun shaft.
*/ 'sun-shaft', /* Essa posição da lista guarda sun shaft.
*/ 'sun-shaft', /* Essa posição da lista guarda sun shaft.
*/ 'sun-shaft', /* Essa posição da lista guarda sun floor.
*/ 'sun-floor', /* Essa posição da lista guarda canopy light.
*/ 'canopy-light'],
       /* Esse campo guarda amor com uma lista com 4 posições.
*/ amor:[ /* Essa posição da lista guarda feather light.
*/ 'feather-light', /* Essa posição da lista guarda feather light.
*/ 'feather-light', /* Essa posição da lista guarda rose halo.
*/ 'rose-halo', /* Essa posição da lista guarda rose floor.
*/ 'rose-floor'],
       /* Esse campo guarda tristeza com uma lista com 6 posições.
*/ tristeza:[ /* Essa posição da lista guarda water light.
*/ 'water-light', /* Essa posição da lista guarda water floor.
*/ 'water-floor', /* Essa posição da lista guarda water ripple.
*/ 'water-ripple', /* Essa posição da lista guarda water ripple.
*/ 'water-ripple', /* Essa posição da lista guarda water ripple.
*/ 'water-ripple', /* Essa posição da lista guarda rain sheet.
*/ 'rain-sheet'],
       /* Esse campo guarda orgulho com uma lista com 6 posições.
*/ orgulho:[ /* Essa posição da lista guarda gold column.
*/ 'gold-column', /* Essa posição da lista guarda gold column.
*/ 'gold-column', /* Essa posição da lista guarda solar ring.
*/ 'solar-ring', /* Essa posição da lista guarda gold floor.
*/ 'gold-floor', /* Essa posição da lista guarda brazier.
*/ 'brazier', /* Essa posição da lista guarda brazier.
*/ 'brazier'],
       /* Esse campo guarda determinacao com uma lista com 4 posições.
*/ determinacao:[ /* Essa posição da lista guarda scarlet thread.
*/ 'scarlet-thread', /* Essa posição da lista guarda scarlet thread.
*/ 'scarlet-thread', /* Essa posição da lista guarda scarlet glow.
*/ 'scarlet-glow', /* Essa posição da lista guarda scarlet floor.
*/ 'scarlet-floor'],
       /* Esse campo guarda calma com uma lista com 5 posições.
*/ calma:[ /* Essa posição da lista guarda moon shaft.
*/ 'moon-shaft', /* Essa posição da lista guarda moon halo.
*/ 'moon-halo', /* Essa posição da lista guarda breeze band.
*/ 'breeze-band', /* Essa posição da lista guarda breeze band.
*/ 'breeze-band', /* Essa posição da lista guarda calm floor.
*/ 'calm-floor'],
       /* Esse campo guarda ansiedade com uma lista com 6 posições.
*/ ansiedade:[ /* Essa posição da lista guarda electric core.
*/ 'electric-core', /* Essa posição da lista guarda electric wire.
*/ 'electric-wire', /* Essa posição da lista guarda electric wire.
*/ 'electric-wire', /* Essa posição da lista guarda electric wire.
*/ 'electric-wire', /* Essa posição da lista guarda electric wire.
*/ 'electric-wire', /* Essa posição da lista guarda electric floor.
*/ 'electric-floor'],
       /* Esse campo guarda culpa com uma lista com 5 posições.
*/ culpa:[ /* Essa posição da lista guarda star window.
*/ 'star-window', /* Essa posição da lista guarda star ray.
*/ 'star-ray', /* Essa posição da lista guarda star ray.
*/ 'star-ray', /* Essa posição da lista guarda constellation.
*/ 'constellation', /* Essa posição da lista guarda star floor.
*/ 'star-floor'],
       /* Esse campo guarda medo com uma lista com 5 posições.
*/ medo:[ /* Essa posição da lista guarda fog bank.
*/ 'fog-bank', /* Essa posição da lista guarda fog bank.
*/ 'fog-bank', /* Essa posição da lista guarda watching shadow.
*/ 'watching-shadow', /* Essa posição da lista guarda watching shadow.
*/ 'watching-shadow', /* Essa posição da lista guarda violet depth.
*/ 'violet-depth'],
       /* Esse campo guarda odio com uma lista com 6 posições.
*/ odio:[ /* Essa posição da lista guarda heat column.
*/ 'heat-column', /* Essa posição da lista guarda heat column.
*/ 'heat-column', /* Essa posição da lista guarda heat column.
*/ 'heat-column', /* Essa posição da lista guarda ember floor.
*/ 'ember-floor', /* Essa posição da lista guarda red vein.
*/ 'red-vein', /* Essa posição da lista guarda red vein.
*/ 'red-vein']
    }[id]||[];
     /* Essa declaração usa const para preparar counts, mantendo essas referências fixas.
*/ const  /* Aqui counts recebe um objeto com os campos dessa parte.
*/ counts={};
     /* Percorre os itens e executa a função indicada em cada um.
*/ materials.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ type=>{ /* Essa declaração usa const para preparar node, mantendo essas referências fixas.
*/ const  /* Aqui node recebe o resultado de document.create Element.
*/ node= /* Cria um elemento HTML do tipo i. */ document.createElement('i'); /* Define as classes de aparência desse elemento.
*/ node.className='room-feature '+type; /* Atualiza node.dataset.part usando o resultado de String.
*/ node.dataset.part= /* Converte esse valor para texto. */ String(counts[type]||0); /* Atualiza counts.type usando o resultado dessa expressão.
*/ counts[type]=(counts[type]||0)+1; /* Define o valor da propriedade de estilo part.
*/ node.style.setProperty('--part',node.dataset.part); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ layer.append(node);});
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<10; /* Aumenta i em um para atualizar o contador. */ i++){
       /* Essa declaração usa const para preparar particle, mantendo essas referências fixas.
*/ const  /* Aqui particle recebe o resultado de document.create Element.
*/ particle= /* Cria um elemento HTML do tipo i. */ document.createElement('i'); /* Define as classes de aparência desse elemento.
*/ particle.className='ambient-pixel';
       /* Atualiza particle.style.left usando o resultado dessa expressão.
*/ particle.style.left=(7+(i*31+S.view*13)%86)+'%'; /* Atualiza particle.style.top usando o resultado dessa expressão.
*/ particle.style.top=(12+i*19%67)+'%';
       /* Define o valor da propriedade de estilo drift.
*/ particle.style.setProperty('--drift',(i%2?16:-13)+'px'); /* Define o valor da propriedade de estilo part.
*/ particle.style.setProperty('--part', /* Converte esse valor para texto. */ String(i));
       /* Atualiza particle.style.animation Delay usando o resultado dessa expressão.
*/ particle.style.animationDelay=(-i*2.7)+'s'; /* Atualiza particle.style.animation Duration usando o resultado dessa expressão.
*/ particle.style.animationDuration=(10+i%4*3)+'s'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ layer.append(particle);
    }
     /* Essa declaração usa const para preparar stage e bg, mantendo essas referências fixas.
*/ const  /* Aqui stage recebe o resultado de atalho de seleção de elementos.
*/ stage= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#stage'), /* Aqui bg recebe o resultado de atalho de seleção de elementos.
*/ bg= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#background'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ stage.append(layer);
                                                                                         
     /* Essa declaração usa const para preparar fit, mantendo essas referências fixas.
*/ const  /* Aqui fit recebe uma função para executar quando for chamada.
*/ fit= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
       /* Esse teste confere se layer.is Connected não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!layer.isConnected) /* Devolve o resultado de cleanup e encerra essa chamada da função.
*/ return  /* Executa cleanup com os valores definidos nessa parte. */ cleanup();
       /* Essa declaração usa const para preparar ratio, mantendo essas referências fixas.
*/ const  /* Aqui ratio recebe uma das duas alternativas, conforme o teste.
*/ ratio=bg.naturalWidth&&bg.naturalHeight?bg.naturalWidth/bg.naturalHeight:1.7;
       /* Essa declaração usa const para preparar w e h, mantendo essas referências fixas.
*/ const  /* Aqui w recebe o resultado de Math.min.
*/ w= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(stage.clientWidth,stage.clientHeight*ratio), /* Aqui h recebe o resultado dessa expressão.
*/ h=w/ratio;
       /* Copia os campos indicados para o objeto de destino.
*/ Object.assign(layer.style,{ /* Define a largura usada nesse cálculo ou desenho.
*/ width:w+'px', /* Define a altura usada nesse cálculo ou desenho.
*/ height:h+'px', /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left:(stage.clientWidth-w)/2+'px', /* Define a distância até a parte de cima.
*/ top:(stage.clientHeight-h)/2+'px'});
    };
     /* Essa declaração usa const para preparar resize, mantendo essas referências fixas.
*/ const  /* Aqui resize recebe uma instância de Resize Observer.
*/ resize= /* Cria uma instância de Resize Observer para usar nesse recurso. */ new ResizeObserver(fit);
     /* Essa declaração usa const para preparar cleanup, mantendo essas referências fixas.
*/ const  /* Aqui cleanup recebe uma função para executar quando for chamada.
*/ cleanup= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Desliga essa etapa do caminho do áudio.
*/ resize.disconnect(); /* Desliga o evento load para não manter uma ação de uma cena anterior.
*/ bg.removeEventListener('load',fit); /* Retira esse elemento da página.
*/ layer.remove(); /* Esse teste confere se room Atmosphere.cleanup é igual a cleanup, e só entra nesse caminho quando a condição passa.
*/ if(roomAtmosphere.cleanup===cleanup) /* Atualiza room Atmosphere.cleanup usando um valor vazio.
*/ roomAtmosphere.cleanup=null;};
     /* Atualiza room Atmosphere.cleanup usando cleanup.
*/ roomAtmosphere.cleanup=cleanup; /* Começa a observar as mudanças desse elemento.
*/ resize.observe(stage); /* Escuta o evento load e liga esse evento à função definida aqui.
*/ bg.addEventListener('load',fit); /* Executa fit com os valores definidos nessa parte.
*/ fit();
  }
   /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ function renderRoom() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza mode usando explore.
*/ mode = 'explore';
     /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe S.room.
*/ id = S.room;
     /* Esse teste confere se id não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!id)  /* Devolve o resultado de hub e encerra essa chamada da função.
*/ return  /* Monta a praça e os cartões dos quartos já disponíveis. */ hub();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!S.talks[first[id]] && ! /* Confere se esse Eco já está na lista de mortos. */ dead(id))  /* Atualiza S.view usando 0.
*/ S.view = 0;
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg(id, S.view));
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('exploring','in-room');
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#stage').classList.toggle('room-empty', /* Confere se esse Eco já está na lista de mortos. */ dead(id));
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setRoom?.(id,S.view,{ /* Relaciona as ausências que mudam essa parte da história.
*/ dead: /* Confere se esse Eco já está na lista de mortos. */ dead(id), /* Esse campo guarda reduced com settings.reduced.
*/ reduced:settings.reduced});
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent = D.names[id] + ' · ' + [ /* Essa posição da lista guarda Frente.
*/ 'Frente',  /* Essa posição da lista guarda Direita.
*/ 'Direita',  /* Essa posição da lista guarda Atrás.
*/ 'Atrás',  /* Essa posição da lista guarda Esquerda.
*/ 'Esquerda'][S.view];
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective( /* Escolhe uma indicação curta de progresso para esse quarto. */ hint(id));
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('explore');
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands();
     /* Atualiza a barra de sanidade e a indicação do efeito daquele quarto.
*/ updateSanityHUD();
     /* Essa declaração usa const para preparar scene, mantendo essas referências fixas.
*/ const  /* Aqui scene recebe o resultado de document.create Element.
*/ scene =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ scene.className = 'room-scene';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#world-controls').append(scene);
     /* Monta a luz, as partículas e os materiais visuais próprios desse quarto.
*/ roomAtmosphere(scene, id);
                                                                               
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse Eco já está na lista de mortos. */ dead(id) && S.view === 0) {
       /* Essa declaração usa const para preparar resident, mantendo essas referências fixas.
*/ const  /* Aqui resident recebe o resultado de btn.
*/ resident =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('',  /* Essa função recebe nenhum parâmetro e devolve o resultado de talk. */ () =>  /* Abre a apresentação do Eco ou os assuntos disponíveis quando ele já foi conhecido. */ talk(id), 'talk-button world-eco');
       /* Define o atributo aria label desse elemento.
*/ resident.setAttribute('aria-label', 'Conversar com ' + D.names[id]);
       /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de document.create Element.
*/ image =  /* Cria um elemento HTML do tipo img. */ document.createElement('img');
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src =  /* Procura a pose pequena usada durante a exploração do cenário. */ worldSprite(id, /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,(S.flags.visits?.[id]||1)-1));
       /* Atualiza image.alt usando um texto vazio.
*/ image.alt = '';
       /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label =  /* Cria um elemento HTML do tipo span. */ document.createElement('span');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent = 'Conversar com ' + D.names[id];
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ resident.append(image, label);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ scene.append(resident);
    }
     /* Essa declaração usa const para preparar inspect, mantendo essas referências fixas.
*/ const  /* Aqui inspect recebe o resultado de document.create Element.
*/ inspect =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ inspect.className = 'inspect-list';
     /* Percorre os itens e executa a função indicada em cada um.
*/ D.points.filter( /* Essa função recebe p e devolve o resultado dessa expressão. */ p => p.eco === id && p.view === S.view && S.talks[first[id]]).forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ p => {
       /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de btn.
*/ b =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('',  /* Essa função recebe nenhum parâmetro e devolve o resultado de inspect Point. */ () =>  /* Confere a descoberta, mostra o objeto e abre as falas ligadas à observação. */ inspectPoint(p), 'scene-hotspot' + (S.seen[p.id] ? ' visited' : ''));
       /* Atualiza b.dataset.point usando p.id.
*/ b.dataset.point = p.id;
       /* Define o atributo aria label desse elemento.
*/ b.setAttribute('aria-label', (S.seen[p.id] ? 'Reler: ' : 'Observar: ') + p.name);
       /* Essa declaração usa const para preparar n, mantendo essas referências fixas.
*/ const  /* Aqui n recebe o resultado dessa expressão.
*/ n =  /* Converte esse valor para número. */ Number( /* Separa esse texto em partes usando o separador indicado. */ p.id.split('.p')[1]) - 1;
       /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe room Points.id.n.
*/ [x, y] = roomPoints[id][n];
       /* Atualiza b.style.left usando o resultado dessa expressão.
*/ b.style.left = x + '%';
       /* Atualiza b.style.top usando o resultado dessa expressão.
*/ b.style.top = y + '%';
       /* Essa declaração usa const para preparar item, mantendo essas referências fixas.
*/ const  /* Aqui item recebe o resultado de point Sprite.
*/ item =  /* Escolhe uma imagem de objeto conforme o ponto observado. */ pointSprite(p.name);
       /* Esse teste confere se item está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (item) {
         /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de document.create Element.
*/ image =  /* Cria um elemento HTML do tipo img. */ document.createElement('img');
         /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src = item;
         /* Atualiza image.alt usando um texto vazio.
*/ image.alt = '';
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ b.append(image);
         /* Esse teste confere se p.id é igual a orgulho.p1, e só entra nesse caminho quando a condição passa.
*/ if(p.id==='orgulho.p1') {
           /* Define as classes de aparência desse elemento.
*/ image.className='pedestal-sword';
           /* Essa declaração usa const para preparar shield, mantendo essas referências fixas.
*/ const  /* Aqui shield recebe o resultado de document.create Element.
*/ shield= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Escolhe o arquivo que esse elemento deve carregar.
*/ shield.src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Objetos-Extras-64/escudo-fogo.png'); /* Atualiza shield.alt usando um texto vazio.
*/ shield.alt=''; /* Define as classes de aparência desse elemento.
*/ shield.className='pedestal-shield'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ b.append(shield);
        }
      }
       /* Essa declaração usa const para preparar marker, mantendo essas referências fixas.
*/ const  /* Aqui marker recebe o resultado de document.create Element.
*/ marker =  /* Cria um elemento HTML do tipo span. */ document.createElement('span');
       /* Define as classes de aparência desse elemento.
*/ marker.className = 'hotspot-marker';
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ marker.textContent = S.seen[p.id] ? '✓' : '✦';
       /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label =  /* Cria um elemento HTML do tipo span. */ document.createElement('span');
       /* Define as classes de aparência desse elemento.
*/ label.className = 'hotspot-label';
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent = p.name;
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ b.append(marker, label);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ inspect.append(b);
    });
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ scene.append(inspect);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='amor' && S.view===0 && !S.flags.gestureL) {
       /* Essa declaração usa const para preparar point, mantendo essas referências fixas.
*/ const  /* Aqui point recebe o resultado de btn.
*/ point= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('',openQuietInteraction,'quiet-interaction');
       /* Define o atributo aria label desse elemento.
*/ point.setAttribute('aria-label','Interagir');
       /* Essa declaração usa const para preparar scrap, mantendo essas referências fixas.
*/ const  /* Aqui scrap recebe o resultado de document.create Element.
*/ scrap= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Escolhe o arquivo que esse elemento deve carregar.
*/ scrap.src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Objetos-Extras-64/fragmento-papel.png'); /* Atualiza scrap.alt usando um texto vazio.
*/ scrap.alt=''; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ point.append(scrap);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ scene.append(point);
    }
     /* Coloca o visitante na vista correta do quarto.
*/ renderGuest(scene,id);
     /* Alinha os alvos e as mãos à área real da imagem, inclusive no celular.
*/ alignRoomScene();
     /* Essa declaração usa const para preparar nav, mantendo essas referências fixas.
*/ const  /* Aqui nav recebe o resultado de document.create Element.
*/ nav =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ nav.className = 'room-nav';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ nav.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('← Olhar à esquerda',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('turn',{ /* Esse campo guarda pan com o resultado dessa expressão.
*/ pan:-.5, /* Esse campo guarda intensity com 0.4.
*/ intensity:.4});
       /* Atualiza S.view usando o resultado dessa expressão.
*/ S.view = (S.view + 3) % 4;
       /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
    }),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Voltar à praça', hub),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Olhar à direita →',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('turn',{ /* Esse campo guarda pan com 0.5.
*/ pan:.5, /* Esse campo guarda intensity com 0.4.
*/ intensity:.4});
       /* Atualiza S.view usando o resultado dessa expressão.
*/ S.view = (S.view + 1) % 4;
       /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
    }));
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#world-controls').append(nav);
     /* Esse teste confere se S.talks.first.id não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!S.talks[first[id]]) {
       /* Percorre os itens e executa a função indicada em cada um.
*/ nav.querySelectorAll('button').forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (b,i)=>{ /* Esse teste confere se i é diferente de 1, e só entra nesse caminho quando a condição passa.
*/ if(i!==1){ /* Atualiza b.disabled usando true.
*/ b.disabled=true; /* Atualiza b.title usando o resultado dessa expressão.
*/ b.title='Converse com '+D.names[id]+' antes de explorar.';}});
       /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Converse com '+D.names[id]+' antes de olhar o quarto.');
    } else  /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='determinacao' && S.flags.knifeKnown && ! /* Confere se esse Eco já está na lista de mortos. */ dead(id))  /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('A faca continua na moldura. Você pode voltar a falar sobre ela.');
    else  /* Esse teste confere se o resultado de story Action está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Procura a próxima interação importante que as pistas já liberaram. */ storyAction(id))  /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Há uma nova conversa com '+D.names[id]+'.');
     /* Mostra ou desativa o botão do gesto conforme o desbloqueio e a cena atual.
*/ updateGestureControl();
     /* Mostra os avisos de novos quartos durante a exploração.
*/ showRoomNotice();
  }
   /* Mostra ou desativa o botão do gesto conforme o desbloqueio e a cena atual.
*/ function updateGestureControl() {
     /* Essa declaração usa const para preparar control, mantendo essas referências fixas.
*/ const  /* Aqui control recebe o resultado de atalho de seleção de elementos.
*/ control= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#gesture-l-button');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ control.hidden=!S?.flags.gestureL;
     /* Atualiza control.disabled usando o resultado dessa expressão.
*/ control.disabled=paused || mode!=='explore' || !S?.room || S.view!==0 ||  /* Confere se esse Eco já está na lista de mortos. */ dead(S.room);
  }
   /* Essa declaração usa const para preparar visits, mantendo essas referências fixas.
*/ const  /* Aqui visits recebe uma lista com 4 posições.
*/ visits = [
    { /* Identifica essa opção ou marcação.
*/ key:'acolhimento', /* Lista os quartos que podem receber essa visita.
*/ hosts:[ /* Essa posição da lista guarda calma.
*/ 'calma', /* Essa posição da lista guarda felicidade.
*/ 'felicidade'], /* Lista os personagens que participam desse encontro.
*/ people:[ /* Essa posição da lista guarda calma.
*/ 'calma', /* Essa posição da lista guarda felicidade.
*/ 'felicidade'], /* Relaciona as condições necessárias para essa parte aparecer.
*/ requires:[ /* Essa posição da lista guarda P1.
*/ 'P1', /* Essa posição da lista guarda F1.
*/ 'F1'], /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda Eu achei que ia só deixar a fita e sair.
*/ 'Eu achei que ia só deixar a fita e sair.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda Você não precisa inventar uma entrega para sentar.
*/ 'Você não precisa inventar uma entrega para sentar.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Vocês fazem isso sempre.
*/ 'Vocês fazem isso sempre?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda Ele deixa o lugar livre até quando eu não tenho assunto.
*/ 'Ele deixa o lugar livre até quando eu não tenho assunto.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda Ninfa também aparece. Cada um sabe que pode ir embora e voltar.
*/ 'Ninfa também aparece. Cada um sabe que pode ir embora e voltar.'],{ /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Ficar e escutar os dois', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'A conversa continua sem pedir que você justifique a visita.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se Pax se sente responsável por todos', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'Receber alguém não me dá o controle do que essa pessoa escolhe.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}]}, /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda Era só isso que eu queria que você visse.
*/ 'Era só isso que eu queria que você visse.']]},
    { /* Identifica essa opção ou marcação.
*/ key:'melodia', /* Lista os quartos que podem receber essa visita.
*/ hosts:[ /* Essa posição da lista guarda tristeza.
*/ 'tristeza', /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade'], /* Lista os personagens que participam desse encontro.
*/ people:[ /* Essa posição da lista guarda tristeza.
*/ 'tristeza', /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade'], /* Relaciona as condições necessárias para essa parte aparecer.
*/ requires:[ /* Essa posição da lista guarda N1.
*/ 'N1', /* Essa posição da lista guarda H1.
*/ 'H1'], /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda Trouxe a caixa para você ouvir. Não para calcular.
*/ 'Trouxe a caixa para você ouvir. Não para calcular.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda Eu calculei o intervalo em que ela parava. Depois parei de contar.
*/ 'Eu calculei o intervalo em que ela parava. Depois parei de contar.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você guardou uma coisa sem utilidade.
*/ 'Você guardou uma coisa sem utilidade?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda Sem uma utilidade que eu pudesse nomear. São afirmações diferentes.
*/ 'Sem uma utilidade que eu pudesse nomear. São afirmações diferentes.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'As coisas que contamos aqui não precisam virar uma maneira de nos medir.'],{ /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Pedir para ouvir a música', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'Por um momento, os dois deixam a conversa parar nas notas.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar o que Hermes não consegue prever', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'Uma intenção omitida continua fora da conta. Inclusive a sua.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}]}, /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Você pode voltar e perguntar. Só não finja que não sabe de onde veio o que ouviu.']]},
    { /* Identifica essa opção ou marcação.
*/ key:'protecao', /* Lista os quartos que podem receber essa visita.
*/ hosts:[ /* Essa posição da lista guarda amor.
*/ 'amor', /* Essa posição da lista guarda orgulho.
*/ 'orgulho'], /* Lista os personagens que participam desse encontro.
*/ people:[ /* Essa posição da lista guarda amor.
*/ 'amor', /* Essa posição da lista guarda orgulho.
*/ 'orgulho'], /* Relaciona as condições necessárias para essa parte aparecer.
*/ requires:[ /* Essa posição da lista guarda A1.
*/ 'A1', /* Essa posição da lista guarda O1.
*/ 'O1'], /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda O apoio está machucando o braço dele.
*/ 'O apoio está machucando o braço dele.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Aurea.
*/ 'Aurea', /* Essa posição da lista guarda Então ajustamos o apoio. Uma oferta não termina quando sai da mão.
*/ 'Então ajustamos o apoio. Uma oferta não termina quando sai da mão.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Vocês ainda estão conferindo isso.
*/ 'Vocês ainda estão conferindo isso?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda Sim. Cuidado também é voltar para perguntar.
*/ 'Sim. Cuidado também é voltar para perguntar.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Aurea.
*/ 'Aurea', /* Essa posição da lista guarda Escute o que ela está dizendo antes de chamar isso de fraqueza.
*/ 'Escute o que ela está dizendo antes de chamar isso de fraqueza.'],{ /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Deixar que ajustem a proteção', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'A alça fica firme sem apertar. Ninguém pede uma promessa em troca.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Dizer que não precisa de ninguém', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'Você pode escolher seguir. Só não reescreva quem esteve aqui para tornar isso mais fácil.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}]}, /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda Se o caminho mudar eu tento encontrar você.
*/ 'Se o caminho mudar, eu tento encontrar você.']]},
    { /* Identifica essa opção ou marcação.
*/ key:'bilhete', /* Lista os quartos que podem receber essa visita.
*/ hosts:[ /* Essa posição da lista guarda medo.
*/ 'medo'], /* Lista os personagens que participam desse encontro.
*/ people:[ /* Essa posição da lista guarda medo.
*/ 'medo', /* Essa posição da lista guarda culpa.
*/ 'culpa'], /* Relaciona as condições necessárias para essa parte aparecer.
*/ requires:[ /* Essa posição da lista guarda M1.
*/ 'M1'], /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Lúmen.
*/ 'Lúmen', /* Essa posição da lista guarda Eu só vim ver se você tinha recebido a mensagem.
*/ 'Eu só vim ver se você tinha recebido a mensagem.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hunger.
*/ 'Hunger', /* Essa posição da lista guarda Recebi. Você não precisava atravessar tudo sozinho.
*/ 'Recebi. Você não precisava atravessar tudo sozinho.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Vocês já estavam se procurando antes de eu chegar.
*/ 'Vocês já estavam se procurando antes de eu chegar?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Lúmen.
*/ 'Lúmen', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'As visitas não começaram com você. Eu queria que ele soubesse que podia voltar.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hunger.
*/ 'Hunger', /* Essa posição da lista guarda Não vá atrás de outra pessoa para usar uma resposta contra ela.
*/ 'Não vá atrás de outra pessoa para usar uma resposta contra ela.'],{ /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pela passagem adiante', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'O observatório fica depois deste quarto. Eu continuo de olho nesse caminho.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Ouvir a preocupação de Lúmen', /* Guarda a resposta que aparece depois dessa escolha.
*/ reply:'Eu queria conseguir perguntar uma coisa sem ensaiar todas as respostas antes.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}]}, /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Lúmen.
*/ 'Lúmen', /* Essa posição da lista guarda Eu vou deixar vocês conversarem. Depois eu passo outra vez.
*/ 'Eu vou deixar vocês conversarem. Depois eu passo outra vez.']]}
  ];
   /* Procura uma visita que já foi liberada e ainda pode acontecer.
*/ function guestFor(host) {
     /* Devolve o resultado de visits.find e encerra essa chamada da função.
*/ return  /* Procura o primeiro item que passa na condição indicada. */ visits.find( /* Essa função recebe v e devolve o resultado dessa expressão. */ v=> /* Confere se esse valor está presente na lista ou no texto. */ v.hosts.includes(host)&&!S.flags['visit-'+v.key]&& /* Confere se todos os itens passam no teste. */ v.requires.every( /* Essa função recebe x e devolve S.talks.x. */ x=>S.talks[x])&& /* Confere se todos os itens passam no teste. */ v.people.every( /* Essa função recebe x e devolve a negação de o resultado de dead. */ x=>! /* Confere se esse Eco já está na lista de mortos. */ dead(x)));
  }
   /* Coloca o visitante na vista correta do quarto.
*/ function renderGuest(scene,host) {
     /* Essa declaração usa const para preparar visit, mantendo essas referências fixas.
*/ const  /* Aqui visit recebe o resultado de guest For.
*/ visit= /* Procura uma visita que já foi liberada e ainda pode acontecer. */ guestFor(host); /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!visit||S.view!==1) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar guest, mantendo essas referências fixas.
*/ const  /* Aqui guest recebe o resultado de visit.people.find.
*/ guest= /* Procura o primeiro item que passa na condição indicada. */ visit.people.find( /* Essa função recebe x e devolve o resultado dessa expressão. */ x=>x!==host);
     /* Essa declaração usa const para preparar target, mantendo essas referências fixas.
*/ const  /* Aqui target recebe o resultado de btn.
*/ target= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('', /* Essa função recebe nenhum parâmetro e devolve o resultado de shared Visit. */ ()=> /* Monta uma conversa dos dois moradores e registra que o encontro aconteceu. */ sharedVisit(visit),'guest-eco'); /* Define o atributo aria label desse elemento.
*/ target.setAttribute('aria-label','Conversar com '+D.names[guest]+' em visita');
     /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de document.create Element.
*/ image= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src= /* Procura a pose pequena usada durante a exploração do cenário. */ worldSprite(guest,2); /* Atualiza image.alt usando um texto vazio.
*/ image.alt=''; /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label= /* Cria um elemento HTML do tipo span. */ document.createElement('span'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent=D.names[guest]+' está em visita'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ target.append(image,label); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ scene.append(target);
  }
   /* Monta uma conversa dos dois moradores e registra que o encontro aconteceu.
*/ function sharedVisit(visit,done=renderRoom) {
     /* Essa declaração usa const para preparar host e guest, mantendo essas referências fixas.
*/ const  /* Aqui host recebe S.room.
*/ host=S.room, /* Aqui guest recebe o resultado de visit.people.find.
*/ guest= /* Procura o primeiro item que passa na condição indicada. */ visit.people.find( /* Essa função recebe x e devolve o resultado dessa expressão. */ x=>x!==host); /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene(); /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg(host,1)); /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('shared-scene');
     /* Essa declaração usa const para preparar lines, mantendo essas referências fixas.
*/ const  /* Aqui lines recebe o resultado de structured Clone.
*/ lines= /* Copia os dados sem compartilhar os objetos internos com a versão original. */ structuredClone(visit.lines); /* Percorre os itens e executa a função indicada em cada um.
*/ lines.forEach( /* Essa função recebe l e devolve o resultado de l.choices.for Each. */ l=> /* Percorre os itens e executa a função indicada em cada um. */ l.choices?.forEach( /* Essa função recebe c e devolve o resultado dessa expressão. */ c=> /* Atualiza c.who usando Jardim. */ c.who='Jardim')); /* Atualiza lines.0 usando uma das duas alternativas, conforme o teste.
*/ lines[0]= /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(lines[0])?{ /* Indica quem está falando nessa linha.
*/ who:lines[0][0], /* Guarda o texto que essa parte vai mostrar.
*/ text:lines[0][1], /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de actor Two. */ ()=> /* Coloca o segundo Eco na conversa compartilhada e ajusta a posição dos dois. */ actorTwo(guest)}:lines[0];
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(host,lines, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza S.flags. usando true.
*/ S.flags['visit-'+visit.key]=true; /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(guest==='culpa'&&!S.talks.C1) /* Marca a conversa como concluída e libera os caminhos relacionados.
*/ finishConversation('C1','culpa'); /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Encontro: '+ /* Junta as partes da lista em um texto. */ visit.people.map( /* Essa função recebe x e devolve D.names.x. */ x=>D.names[x]).join(' e '),'Você ouviu os dois juntos. Novos assuntos podem ser retomados em seus quartos.'); /* Conta uma interação importante e salva a mudança.
*/ significant(); /* Executa a continuação recebida para seguir depois desta etapa.
*/ done();});
  }
   /* Abre a interação discreta do quarto e confere o texto digitado localmente.
*/ function openQuietInteraction() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(mode!=='explore' || S.room!=='amor' || S.view!==0)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar form, mantendo essas referências fixas.
*/ const  /* Aqui form recebe o resultado de document.create Element.
*/ form= /* Cria um elemento HTML do tipo form. */ document.createElement('form');
     /* Essa declaração usa const para preparar input, mantendo essas referências fixas.
*/ const  /* Aqui input recebe o resultado de document.create Element.
*/ input= /* Cria um elemento HTML do tipo input. */ document.createElement('input');
     /* Atualiza input.type usando text.
*/ input.type='text'; /* Atualiza input.max Length usando 120.
*/ input.maxLength=120; /* Atualiza input.autocomplete usando off.
*/ input.autocomplete='off'; /* Define o atributo aria label desse elemento.
*/ input.setAttribute('aria-label','Texto');
     /* Essa declaração usa const para preparar status, mantendo essas referências fixas.
*/ const  /* Aqui status recebe o resultado de document.create Element.
*/ status= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define o atributo role desse elemento.
*/ status.setAttribute('role','status'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ status.textContent='…';
     /* Essa declaração usa const para preparar submit, mantendo essas referências fixas.
*/ const  /* Aqui submit recebe o resultado de btn.
*/ submit= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Confirmar', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{}); /* Atualiza submit.type usando submit.
*/ submit.type='submit';
     /* Essa declaração usa const para preparar close, mantendo essas referências fixas.
*/ const  /* Aqui close recebe o resultado de btn.
*/ close= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Voltar',closeModal); /* Atualiza close.type usando button.
*/ close.type='button';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ form.append(input,submit,close,status);
     /* Liga essa função ao envio desse formulário.
*/ form.onsubmit= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
       /* Esse teste confere se o resultado de GESTO.accepts não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* esse comando normaliza o texto informado e compara seu resumo numérico com a referência do segredo local. */ GESTO.accepts(input.value)){ /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ status.textContent='…'; /* Executa input.select com os valores definidos nessa parte.
*/ input.select(); /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Atualiza S.flags.gesture L usando true.
*/ S.flags.gestureL=true; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save(); /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal(); /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
    };
     /* Abre a janela e pausa o relógio e os controles do jogo.
*/ modal(form); /* Leva o foco do teclado para esse elemento.
*/ input.focus();
  }
   /* Mostra o gesto desbloqueado e a reação curta do Eco presente.
*/ function makeL() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!S.flags.gestureL || paused || mode!=='explore' || !S.room || S.view!==0 ||  /* Confere se esse Eco já está na lista de mortos. */ dead(S.room))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe S.room.
*/ id=S.room;
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands('07-fazendo-L');
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#hands').classList.add('gesture-hands');
     /* Essa declaração usa const para preparar reply, mantendo essas referências fixas.
*/ const  /* Aqui reply recebe uma das duas alternativas, conforme o teste.
*/ reply=id==='odio'?'AQUI É 22 PORRA.':id==='amor'?'Você estava guardando esse gesto para agora?':id==='felicidade'?'Tá. Essa eu não estava esperando.':'…';
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id,[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:reply, /* Escolhe a pose do personagem para essa fala.
*/ pose:id==='odio'?'nao-gostou':id==='felicidade'?'gostou':'base'}],renderRoom);
                                                                              
     /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(id==='odio'?1.8:2.4,renderRoom);
  }
   /* Liga essa função ao clique desse controle.
*/ $('#gesture-l-button').onclick=makeL;
                                                                                       
   /* Essa declaração usa const para preparar room Points, mantendo essas referências fixas.
*/ const  /* Aqui room Points recebe um objeto com os campos dessa parte.
*/ roomPoints = {
     /* Esse campo guarda felicidade com uma lista com 6 posições.
*/ felicidade: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 42.
*/ 42], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 32.
*/ 32, /* Essa posição da lista guarda 64.
*/ 64], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 71.
*/ 71, /* Essa posição da lista guarda 69.
*/ 69], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 29.
*/ 29, /* Essa posição da lista guarda 64.
*/ 64], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 63.
*/ 63, /* Essa posição da lista guarda 68.
*/ 68], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 73.
*/ 73, /* Essa posição da lista guarda 50.
*/ 50]],
     /* Esse campo guarda amor com uma lista com 6 posições.
*/ amor: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 65.
*/ 65], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 37.
*/ 37, /* Essa posição da lista guarda 64.
*/ 64], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 68.
*/ 68, /* Essa posição da lista guarda 46.
*/ 46], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 76.
*/ 76], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 70.
*/ 70, /* Essa posição da lista guarda 73.
*/ 73], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 69.
*/ 69, /* Essa posição da lista guarda 66.
*/ 66]],
     /* Esse campo guarda tristeza com uma lista com 6 posições.
*/ tristeza: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 72.
*/ 72, /* Essa posição da lista guarda 52.
*/ 52], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 30.
*/ 30, /* Essa posição da lista guarda 65.
*/ 65], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 74.
*/ 74, /* Essa posição da lista guarda 64.
*/ 64], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 22.
*/ 22, /* Essa posição da lista guarda 74.
*/ 74], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 66.
*/ 66, /* Essa posição da lista guarda 62.
*/ 62], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 75.
*/ 75, /* Essa posição da lista guarda 67.
*/ 67]],
     /* Esse campo guarda orgulho com uma lista com 6 posições.
*/ orgulho: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 65.
*/ 65], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 31.
*/ 31, /* Essa posição da lista guarda 55.
*/ 55], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 70.
*/ 70, /* Essa posição da lista guarda 65.
*/ 65], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 36.
*/ 36, /* Essa posição da lista guarda 55.
*/ 55], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 70.
*/ 70, /* Essa posição da lista guarda 69.
*/ 69], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 77.
*/ 77, /* Essa posição da lista guarda 52.
*/ 52]],
     /* Esse campo guarda determinacao com uma lista com 6 posições.
*/ determinacao: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 68.
*/ 68, /* Essa posição da lista guarda 50.
*/ 50], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 28.
*/ 28, /* Essa posição da lista guarda 69.
*/ 69], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 69.
*/ 69, /* Essa posição da lista guarda 62.
*/ 62], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 30.
*/ 30, /* Essa posição da lista guarda 70.
*/ 70], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 73.
*/ 73, /* Essa posição da lista guarda 64.
*/ 64], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 30.
*/ 30, /* Essa posição da lista guarda 52.
*/ 52]],
     /* Esse campo guarda calma com uma lista com 6 posições.
*/ calma: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 25.
*/ 25, /* Essa posição da lista guarda 70.
*/ 70], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 35.
*/ 35], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 66.
*/ 66, /* Essa posição da lista guarda 68.
*/ 68], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 44.
*/ 44, /* Essa posição da lista guarda 64.
*/ 64], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 75.
*/ 75, /* Essa posição da lista guarda 73.
*/ 73], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 65.
*/ 65, /* Essa posição da lista guarda 46.
*/ 46]],
     /* Esse campo guarda ansiedade com uma lista com 6 posições.
*/ ansiedade: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 28.
*/ 28, /* Essa posição da lista guarda 68.
*/ 68], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 66.
*/ 66, /* Essa posição da lista guarda 41.
*/ 41], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 28.
*/ 28, /* Essa posição da lista guarda 70.
*/ 70], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 29.
*/ 29, /* Essa posição da lista guarda 60.
*/ 60], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 69.
*/ 69, /* Essa posição da lista guarda 70.
*/ 70], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 68.
*/ 68, /* Essa posição da lista guarda 48.
*/ 48]],
     /* Esse campo guarda culpa com uma lista com 6 posições.
*/ culpa: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 69.
*/ 69], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 30.
*/ 30, /* Essa posição da lista guarda 68.
*/ 68], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 69.
*/ 69, /* Essa posição da lista guarda 69.
*/ 69], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 28.
*/ 28, /* Essa posição da lista guarda 67.
*/ 67], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 68.
*/ 68, /* Essa posição da lista guarda 65.
*/ 65], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 53.
*/ 53, /* Essa posição da lista guarda 55.
*/ 55]],
     /* Esse campo guarda medo com uma lista com 6 posições.
*/ medo: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 29.
*/ 29, /* Essa posição da lista guarda 63.
*/ 63], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 28.
*/ 28, /* Essa posição da lista guarda 45.
*/ 45], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 72.
*/ 72, /* Essa posição da lista guarda 65.
*/ 65], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 28.
*/ 28, /* Essa posição da lista guarda 51.
*/ 51], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 72.
*/ 72, /* Essa posição da lista guarda 69.
*/ 69], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 46.
*/ 46, /* Essa posição da lista guarda 52.
*/ 52]],
     /* Esse campo guarda odio com uma lista com 6 posições.
*/ odio: [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 67.
*/ 67], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 30.
*/ 30, /* Essa posição da lista guarda 53.
*/ 53], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 70.
*/ 70, /* Essa posição da lista guarda 68.
*/ 68], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 27.
*/ 27, /* Essa posição da lista guarda 74.
*/ 74], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 69.
*/ 69, /* Essa posição da lista guarda 63.
*/ 63], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 48.
*/ 48, /* Essa posição da lista guarda 51.
*/ 51]]
  };
   /* Escolhe uma imagem de objeto conforme o ponto observado.
*/ function pointSprite(name) {
     /* Essa declaração usa const para preparar match, mantendo essas referências fixas.
*/ const  /* Aqui match recebe uma das duas alternativas, conforme o teste.
*/ match =  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /pedestal de equipamentos/i.test(name) ? 'espada-fogo' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /faca|moldura/i.test(name) ? 'faca-vermelha' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /bilhete|carta|anotações|lista|registro|cálculo/i.test(name) ? 'bilhete' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /diário|desenhos|projetos/i.test(name) ? 'caderno' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /semente/i.test(name) ? 'semente' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /flores/i.test(name) ? 'flor' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /luz guardada/i.test(name) ? 'luz-amor' :  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /escudo/i.test(name) ? 'escudo-fogo' : null;
     /* Devolve uma das duas alternativas, conforme o teste e encerra essa chamada da função.
*/ return match ?  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Objetos-Extras-64/' + match + '.png') : null;
  }
                                                                            
   /* Alinha os alvos e as mãos à área real da imagem, inclusive no celular.
*/ function alignRoomScene() {
     /* Essa declaração usa const para preparar scene, mantendo essas referências fixas.
*/ const  /* Aqui scene recebe o resultado de document.query Selector.
*/ scene =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector('.room-scene');
     /* Esse teste confere se scene não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!scene)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar image e stage, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de atalho de seleção de elementos.
*/ image =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#background'),  /* Aqui stage recebe o resultado de atalho de seleção de elementos.
*/ stage =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#stage');
     /* Esse teste confere se image.natural Width não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!image.naturalWidth)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar scale, mantendo essas referências fixas.
*/ const  /* Aqui scale recebe o resultado de Math.min.
*/ scale =  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(stage.clientWidth / image.naturalWidth, stage.clientHeight / image.naturalHeight);
     /* Essa declaração usa const para preparar width e height, mantendo essas referências fixas.
*/ const  /* Aqui width recebe o resultado dessa expressão.
*/ width = image.naturalWidth * scale,  /* Aqui height recebe o resultado dessa expressão.
*/ height = image.naturalHeight * scale;
     /* Copia os campos indicados para o objeto de destino.
*/ Object.assign(scene.style, { /* Define a largura usada nesse cálculo ou desenho.
*/ width: width + 'px',  /* Define a altura usada nesse cálculo ou desenho.
*/ height: height + 'px',  /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: (stage.clientWidth-width)/2 + 'px',  /* Define a distância até a parte de cima.
*/ top: (stage.clientHeight-height)/2 + 'px'});
                                                                                             
     /* Essa declaração usa const para preparar horizontal e vertical, mantendo essas referências fixas.
*/ const  /* Aqui horizontal recebe o resultado dessa expressão.
*/ horizontal=(stage.clientWidth-width)/2, /* Aqui vertical recebe o resultado dessa expressão.
*/ vertical=(stage.clientHeight-height)/2;
     /* Percorre cada valor de o resultado de Object.entries usando valores separados da lista nesta repetição.
*/ for( /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe nenhum valor inicial.
*/ [key,value] of  /* Reúne os campos e seus valores em pares. */ Object.entries({ /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left:horizontal, /* Define a posição ou o estado ligado ao lado direito.
*/ right:horizontal, /* Define a distância até a parte de cima.
*/ top:vertical, /* Define a distância até a parte de baixo.
*/ bottom:vertical, /* Define a largura usada nesse cálculo ou desenho.
*/ width, /* Define a altura usada nesse cálculo ou desenho.
*/ height})) /* Define o valor da propriedade de estilo o resultado dessa expressão.
*/ stage.style.setProperty('--room-'+key,value+'px');
     /* Define o valor da propriedade de estilo room backdrop.
*/ stage.style.setProperty('--room-backdrop','url("'+image.src+'")');
  }
   /* Escuta o evento load e liga esse evento à função definida aqui.
*/ $('#background').addEventListener('load', alignRoomScene);
   /* Começa a observar as mudanças desse elemento.
*/ new ResizeObserver(alignRoomScene).observe( /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#stage'));
                                                                                    
   /* Confere a descoberta, mostra o objeto e abre as falas ligadas à observação.
*/ function inspectPoint(p, replay = false) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!S.talks[first[p.eco]] && ! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco))  /* Devolve o resultado de talk e encerra essa chamada da função.
*/ return  /* Abre a apresentação do Eco ou os assuntos disponíveis quando ele já foi conhecido. */ talk(p.eco);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(S.seen[p.id]&&!replay&&(! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco)||S.flags['absence-'+p.id]))  /* Devolve o resultado de say e encerra essa chamada da função.
*/ return  /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say(null,[{ /* Indica quem está falando nessa linha.
*/ who:p.name, /* Guarda o texto que essa parte vai mostrar.
*/ text:'Esta descoberta já está no registro.', /* Reúne as respostas que o jogador pode escolher.
*/ choices:[
      { /* Define o texto mostrado na opção ou no controle.
*/ label:'Reler a descoberta', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de inspect Point. */ ()=> /* Confere a descoberta, mostra o objeto e abre as falas ligadas à observação. */ inspectPoint(p,true)},
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...(! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco)?[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Conversar com '+D.names[p.eco], /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de talk. */ ()=> /* Abre a apresentação do Eco ou os assuntos disponíveis quando ele já foi conhecido. */ talk(p.eco)}]:[]),
      { /* Define o texto mostrado na opção ou no controle.
*/ label:'Voltar ao quarto', /* Define a ação executada quando essa opção é escolhida.
*/ go:renderRoom}
    ]}],renderRoom);
     /* Essa declaração usa const para preparar visit, mantendo essas referências fixas.
*/ const  /* Aqui visit recebe o resultado de guest For.
*/ visit= /* Procura uma visita que já foi liberada e ainda pode acontecer. */ guestFor(p.eco); /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(visit&&S.view===1&&!S.flags['visit-'+visit.key]) /* Devolve o resultado de shared Visit e encerra essa chamada da função.
*/ return  /* Monta uma conversa dos dois moradores e registra que o encontro aconteceu. */ sharedVisit(visit, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom(); /* Confere a descoberta, mostra o objeto e abre as falas ligadas à observação.
*/ inspectPoint(p);});
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.roomCue?.('inspect');
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /bilhete|carta|diário|anotações|desenhos/i.test(p.name)?'04-segurar-papel':'01-alcancar');
     /* Essa declaração usa const para preparar was Seen, mantendo essas referências fixas.
*/ const  /* Aqui was Seen recebe S.seen.p.id.
*/ wasSeen = S.seen[p.id];
     /* Atualiza S.seen.p.id usando true.
*/ S.seen[p.id] = true;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco)&&!S.flags['absence-'+p.id]){
       /* Atualiza S.flags. usando true.
*/ S.flags['absence-'+p.id]=true;
       /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note(p.name+' · depois da ausência',p.after); /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
    }
     /* Esse teste confere se was Seen não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!wasSeen) {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('discovery');
       /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note(p.name, p.description);
       /* Conta uma interação importante e salva a mudança.
*/ significant();
    } else  /* Esse teste confere se S.flags.last Investigation é diferente de p.id, e só entra nesse caminho quando a condição passa.
*/ if (S.flags.lastInvestigation !== p.id) {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ S.activity++;
       /* Atualiza S.flags.last Investigation usando p.id.
*/ S.flags.lastInvestigation = p.id;
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
    }
     /* Essa declaração usa const para preparar entries, mantendo essas referências fixas.
*/ const  /* Aqui entries recebe uma lista com 2 posições.
*/ entries = [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Prepara as poses de alcançar e segurar usadas ao pegar ou observar um objeto. */ investigationAction(p), {
       /* Indica quem está falando nessa linha.
*/ who: p.name,
       /* Guarda o texto que essa parte vai mostrar.
*/ text:  /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco) ? p.after : p.description
    }];
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco) && p.voice)  /* Acrescenta esse valor no fim da lista.
*/ entries.push({
       /* Indica quem está falando nessa linha.
*/ who: D.names[p.eco],
       /* Guarda o texto que essa parte vai mostrar.
*/ text: p.voice,
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#held-object')?.remove(); /* Retira esse elemento da página.
*/ $('#hands').classList.remove('inspecting-hands'); /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands();}
    });
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se o texto termina com o trecho indicado. */ p.id.endsWith('.p6') && (!wasSeen||replay) && window.MEMORIAS?.[p.eco]) {
       /* Essa declaração usa const para preparar memory, mantendo essas referências fixas.
*/ const  /* Aqui memory recebe MEMORIAS.p.eco.
*/ memory = MEMORIAS[p.eco];
       /* Acrescenta esse valor no fim da lista.
*/ entries.push( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ memory.paragraphs.map( /* Essa função recebe text e devolve um objeto com os campos dessa parte. */ text => ({
         /* Indica quem está falando nessa linha.
*/ who: memory.title,
         /* Guarda o texto que essa parte vai mostrar.
*/ text
      })));
       /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note(memory.title,  /* Junta as partes da lista em um texto. */ memory.paragraphs.join('\n\n'));
       /* Esse teste confere se o resultado de dead não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco))  /* Acrescenta esse valor no fim da lista.
*/ entries.push( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ memory.replies.map( /* Essa função recebe text e devolve um objeto com os campos dessa parte. */ text => ({
         /* Indica quem está falando nessa linha.
*/ who: D.names[p.eco],
         /* Guarda o texto que essa parte vai mostrar.
*/ text
      })));
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (p.eco === 'determinacao' &&  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /faca|moldura/i.test(p.name) && !S.flags.knifeKnown && ! /* Confere se esse Eco já está na lista de mortos. */ dead('determinacao'))  /* Devolve o resultado de knife Introduction e encerra essa chamada da função.
*/ return  /* Apresenta a faca emoldurada e a recusa de Friska antes do confronto. */ knifeIntroduction();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(p.id==='determinacao.p1' && ! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco))  /* Acrescenta esse valor no fim da lista.
*/ entries.push({ /* Guarda o texto que essa parte vai mostrar.
*/ text:'A faca ainda está presa à moldura.', /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Tentar tomar a faca', /* Define a ação executada quando essa opção é escolhida.
*/ go:determination},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Deixar onde está', /* Define a ação executada quando essa opção é escolhida.
*/ go:renderRoom}]});
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(p.id==='orgulho.p1' && ! /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco) && (! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('espada')||! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('escudo')))  /* Acrescenta esse valor no fim da lista.
*/ entries.push({ /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Pedir a espada e o escudo', /* Define a ação executada quando essa opção é escolhida.
*/ go:aureaGifts},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Continuar olhando', /* Define a ação executada quando essa opção é escolhida.
*/ go:renderRoom}]});
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(p.id==='medo.p1'&&! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('lanterna'))  /* Acrescenta esse valor no fim da lista.
*/ entries.push({ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Uma lanterna foi deixada junto à entrada.', /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Pegar a lanterna', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ ()=> /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say(null,[{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você recolhe a lanterna e testa o apoio na luva.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Coloca o objeto na bolsa e registra como ele foi recebido.
*/ addItem('lanterna'); /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands('12-carregar-lanterna');}}],renderRoom)},{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Deixar a lanterna', /* Define a ação executada quando essa opção é escolhida.
*/ go:renderRoom}]});
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say( /* Confere se esse Eco já está na lista de mortos. */ dead(p.eco) ? null : p.eco, entries, renderRoom);
  }
   /* Mostra o objeto perto das mãos enquanto o jogador o examina.
*/ function holdObject(sprite,gesture) {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('inspect',{ /* Esse campo guarda intensity com 0.4.
*/ intensity:.4});
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(gesture);
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#hands').classList.add('inspecting-hands');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#actor').hidden=true; /* Remove as partes extras da pose para não deixar asas ou água da cena anterior.
*/ clearIdle();
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#held-object')?.remove();
     /* Esse teste confere se sprite não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!sprite)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar item, mantendo essas referências fixas.
*/ const  /* Aqui item recebe o resultado de document.create Element.
*/ item= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Atualiza item.id usando held object.
*/ item.id='held-object'; /* Define as classes de aparência desse elemento.
*/ item.className='held-object'; /* Escolhe o arquivo que esse elemento deve carregar.
*/ item.src=sprite; /* Atualiza item.alt usando um texto vazio.
*/ item.alt=''; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#stage').append(item);
  }
   /* Prepara as poses de alcançar e segurar usadas ao pegar ou observar um objeto.
*/ function investigationAction(p) {
     /* Essa declaração usa const para preparar small, mantendo essas referências fixas.
*/ const  /* Aqui small recebe o resultado de bilhete carta anotações lista registro desenhos diário semente flores presente lembrança caixa i.test.
*/ small= /* Confere se o texto corresponde a esse padrão de expressão regular. */ /bilhete|carta|anotações|lista|registro|desenhos|diário|semente|flores|presente|lembrança|caixa/i.test(p.name);
     /* Esse teste confere se small não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!small)  /* Devolve uma lista com 1 posições e encerra essa chamada da função.
*/ return [{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você se aproxima para examinar '+ /* Converte o texto para minúsculas respeitando o idioma indicado. */ p.name.toLocaleLowerCase('pt-BR')+'.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de hold Object. */ ()=> /* Mostra o objeto perto das mãos enquanto o jogador o examina. */ holdObject(null,'01-alcancar')}];
     /* Essa declaração usa const para preparar paper, mantendo essas referências fixas.
*/ const  /* Aqui paper recebe o resultado de bilhete carta anotações lista registro desenhos diário i.test.
*/ paper= /* Confere se o texto corresponde a esse padrão de expressão regular. */ /bilhete|carta|anotações|lista|registro|desenhos|diário/i.test(p.name);
     /* Essa declaração usa const para preparar sprite, mantendo essas referências fixas.
*/ const  /* Aqui sprite recebe o resultado de point Sprite.
*/ sprite= /* Escolhe uma imagem de objeto conforme o ponto observado. */ pointSprite(p.name);
     /* Devolve uma lista com 2 posições e encerra essa chamada da função.
*/ return [
      { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você estende a mão até '+ /* Converte o texto para minúsculas respeitando o idioma indicado. */ p.name.toLocaleLowerCase('pt-BR')+'.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de hold Object. */ ()=> /* Mostra o objeto perto das mãos enquanto o jogador o examina. */ holdObject(null,'01-alcancar')},
      { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você pega o objeto com cuidado e o traz para perto dos olhos.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
         /* Mostra o objeto perto das mãos enquanto o jogador o examina.
*/ holdObject(paper?null:sprite,'04-segurar-papel');
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(paper &&  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /diário|anotações/.test(p.name))  /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ showHands( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Equipamentos/investigacao/01-caderno-aberto.png'));
        else  /* Esse teste confere se paper não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!paper)  /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ showHands( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Equipamentos/investigacao/02-recolher.png'));
         /* Esse teste confere se o resultado de flores i.test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /flores/i.test(p.name)){ /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands('11-segurar-flor'); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#held-object')?.remove();}
         /* Esse teste confere se o resultado de semente i.test está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se o texto corresponde a esse padrão de expressão regular. */ /semente/i.test(p.name)){ /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands('06-oferecer-semente'); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#held-object')?.remove();}
      }}
    ];
  }
   /* Marca a conversa como concluída e libera os caminhos relacionados.
*/ function finishConversation(id, eco) {
     /* Atualiza S.talks.id usando true.
*/ S.talks[id] = true;
     /* Conta uma interação importante e salva a mudança.
*/ significant();
     /* Atualiza S.last Talk.eco usando S.activity.
*/ S.lastTalk[eco] = S.activity;
     /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
     /* Essa declaração usa const para preparar links, mantendo essas referências fixas.
*/ const  /* Aqui links recebe um objeto com os campos dessa parte.
*/ links={ /* Esse campo guarda F1 com uma lista com 2 posições.
*/ F1:[ /* Essa posição da lista guarda tristeza.
*/ 'tristeza', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Sunny indicou o caminho das flores azuis, onde Ninfa guarda suas lembranças.'], /* Esse campo guarda P1 com uma lista com 2 posições.
*/ P1:[ /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Pax indicou o caminho dos fios e das luzes azuis para encontrar Hermes.'], /* Esse campo guarda D1 com uma lista com 2 posições.
*/ D1:[ /* Essa posição da lista guarda orgulho.
*/ 'orgulho', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Friska apontou os arcos dourados. Aurea guarda os equipamentos naquele lugar.']};
     /* Esse teste confere se links.id está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(links[id])  /* Libera um quarto novo e guarda o aviso de descoberta.
*/ unlockRoom( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...links[id]);
     /* Esse teste confere se id é igual a A1, e só entra nesse caminho quando a condição passa.
*/ if(id==='A1') { /* Libera um quarto novo e guarda o aviso de descoberta.
*/ unlockRoom('culpa','Candy indicou o caminho coberto de estrelas para encontrar Lúmen.'); /* Libera um quarto novo e guarda o aviso de descoberta.
*/ unlockRoom('odio','Candy indicou os arcos vermelhos, no caminho de Beerus.');}
     /* Confere as condições da história que abrem a passagem de Hunger.
*/ checkHungerDoor();
  }
   /* Prepara o roteiro da conversa e suas entregas de itens.
*/ function conversation(id, done = renderRoom) {
     /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe D.conversations.id.
*/ c = D.conversations[id];
     /* Esse teste confere se c não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!c)  /* Devolve o resultado de done e encerra essa chamada da função.
*/ return  /* Executa a continuação recebida para seguir depois desta etapa. */ done();
     /* Essa declaração usa const para preparar script, mantendo essas referências fixas.
*/ const  /* Aqui script recebe o resultado de structured Clone.
*/ script =  /* Copia os dados sem compartilhar os objetos internos com a versão original. */ structuredClone(c.script);
     /* Percorre os itens e executa a função indicada em cada um.
*/ script.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ line => {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'O1' && (line.pose === 'entregar-espada/escudo' || line.text === 'Ela quer acreditar que ofereceu proteção.'))  /* Atualiza line.requires Item usando espada.
*/ line.requiresItem = 'espada';
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'A1' && line.pose === 'entregar-luz')  /* Atualiza line.requires Item usando luz.
*/ line.requiresItem = 'luz';
    });
     /* Esse teste confere se id é igual a O1, e só entra nesse caminho quando a condição passa.
*/ if(id==='O1') {
       /* Essa declaração usa const para preparar gift, mantendo essas referências fixas.
*/ const  /* Aqui gift recebe o resultado de script.find Index.
*/ gift= /* Procura a posição do primeiro item que passa nessa condição. */ script.findIndex( /* Essa função recebe l e devolve o resultado dessa expressão. */ l=>l.pose==='entregar-espada/escudo');
       /* Esse teste confere se gift é maior ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(gift>=0)  /* Retira ou coloca itens a partir da posição indicada.
*/ script.splice(gift,1,{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pegue a espada pelo cabo. Não confunda força com invulnerabilidade.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-espada-fogo', /* Só mostra esse trecho quando o objeto exigido já está na bolsa.
*/ requiresItem:'espada'},{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'O escudo fica apoiado no seu braço, pelo lado de dentro.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-escudo-fogo', /* Só mostra esse trecho quando o objeto exigido já está na bolsa.
*/ requiresItem:'escudo'});
       /* Acrescenta esse valor no fim da lista.
*/ script.push({ /* Indica quem está falando nessa linha.
*/ who:D.names.orgulho, /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você recebe as duas peças. Ela espera até você ajustar o apoio do braço.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-espada-e-escudo', /* Só mostra esse trecho quando o objeto exigido já está na bolsa.
*/ requiresItem:'escudo', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(); /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ showHands( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Equipamentos/escudo/04-espada-verso.png'));}});
    }
     /* Esse teste confere se id é igual a N1, e só entra nesse caminho quando a condição passa.
*/ if(id==='N1') { /* Atualiza script.0.pose usando esconder nas nuvens.
*/ script[0].pose='esconder-nas-nuvens'; /* Acrescenta esse valor no fim da lista.
*/ script.push({ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pode chegar mais perto. Eu deixei um espaço.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'estender-a-mao'});}
     /* Esse teste confere se id é igual a N3, e só entra nesse caminho quando a condição passa.
*/ if(id==='N3')  /* Acrescenta esse valor no fim da lista.
*/ script.push({ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu não queria ter que desconfiar de quem vinha ficar comigo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'choro-intenso'});
     /* Esse teste confere se id é igual a N4, e só entra nesse caminho quando a condição passa.
*/ if(id==='N4')  /* Atualiza script.0.pose usando choro intenso.
*/ script[0].pose='choro-intenso';
     /* Percorre os itens e executa a função indicada em cada um.
*/ script.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ line=>{
       /* Essa declaração usa const para preparar hands, mantendo essas referências fixas.
*/ const  /* Aqui hands recebe line.pose.
*/ hands={ /* Esse campo guarda entregar espada fogo com 02 Equipamentos espada 01 preparacao.png.
*/ 'entregar-espada-fogo':'/02-Equipamentos/espada/01-preparacao.png', /* Esse campo guarda entregar escudo fogo com 02 Equipamentos escudo 01 pronto verso.png.
*/ 'entregar-escudo-fogo':'/02-Equipamentos/escudo/01-pronto-verso.png', /* Esse campo guarda entregar luz com 02 Equipamentos luz 02 oferecer.png.
*/ 'entregar-luz':'/02-Equipamentos/luz/02-oferecer.png'}[line.pose];
       /* Esse teste confere se hands está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(hands)  /* Atualiza line.effect usando uma função para executar quando for chamada.
*/ line.effect= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(); /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ showHands( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset(hands));};
    });
     /* Essa declaração usa const para preparar directions, mantendo essas referências fixas.
*/ const  /* Aqui directions recebe um objeto com os campos dessa parte.
*/ directions={ /* Esse campo guarda F1 com o texto definido nessa parte.
*/ F1:'Ninfa mora no caminho das flores azuis. Ela não recebe muitas visitas, então avise que chegou.', /* Esse campo guarda P1 com o texto definido nessa parte.
*/ P1:'Este quarto é um refúgio seguro. Se uma perseguição começar, procure a porta com a xícara e entre aqui. Mesmo quando eu não estiver, esta passagem continua levando ao abrigo. Procure Hermes pelo caminho dos fios e das luzes azuis. Ele pode ensinar a correr. Hunger também vem aqui; a passagem dele permanece fechada por enquanto.', /* Esse campo guarda D1 com o texto definido nessa parte.
*/ D1:'Se quer equipamentos, procure Aurea nos arcos dourados. Não toque nas minhas coisas sem perguntar.', /* Esse campo guarda A1 com o texto definido nessa parte.
*/ A1:'Lúmen está no caminho coberto de estrelas. Beerus fica depois dos arcos vermelhos. Eu passo pelos dois quando consigo.'};
     /* Esse teste confere se directions.id está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(directions[id])  /* Acrescenta esse valor no fim da lista.
*/ script.push({ /* Guarda o texto que essa parte vai mostrar.
*/ text:directions[id], /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'});
                                                                                     
     /* Esse teste confere se id é igual a N2, e só entra nesse caminho quando a condição passa.
*/ if (id === 'N2')  /* Acrescenta esse valor no fim da lista.
*/ script.push({ /* Indica quem está falando nessa linha.
*/ who: 'Ninfa',  /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Pax não gosta de perceber tarde que alguém ficou desconfortável. Se precisar ir, diga. Não suma para testar isso.',  /* Escolhe a pose do personagem para essa fala.
*/ pose: 'base'});
     /* Percorre os itens e executa a função indicada em cada um.
*/ script.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ l => {
       /* Esse teste confere se l.choices está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (l.choices) {
         /* Atualiza l.id usando id.
*/ l.id = id;
         /* Percorre os itens e executa a função indicada em cada um.
*/ l.choices.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ch => {
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'O1' && ch.pose !== 'nao-gostou')  /* Atualiza ch.effect usando uma função para executar quando for chamada.
*/ ch.effect =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Coloca o objeto na bolsa e registra como ele foi recebido.
*/ addItem('espada');
             /* Coloca o objeto na bolsa e registra como ele foi recebido.
*/ addItem('escudo');
          };
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'A1' && ch.pose !== 'abalado')  /* Atualiza ch.effect usando uma função para executar quando for chamada.
*/ ch.effect =  /* Essa função recebe nenhum parâmetro e devolve o resultado de add Item. */ () =>  /* Coloca o objeto na bolsa e registra como ele foi recebido. */ addItem('luz');
        });
      }
    });
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(c.eco, script,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Marca a conversa como concluída e libera os caminhos relacionados.
*/ finishConversation(id, c.eco);
       /* Esse teste confere se id é igual a H1, e só entra nesse caminho quando a condição passa.
*/ if (id === 'H1')  /* Devolve o resultado de run Tutorial e encerra essa chamada da função.
*/ return  /* Apresenta o comando de correr em uma demonstração sem risco. */ runTutorial(done);
       /* Esse teste confere se id é igual a N2, e só entra nesse caminho quando a condição passa.
*/ if (id === 'N2') {
         /* Atualiza S.flags.confidence Pax usando true.
*/ S.flags.confidencePax = true;
         /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Uma confidência de Ninfa', 'Pax não gosta de perceber tarde que alguém ficou desconfortável. Ninfa pediu que eu não sumisse para testá-lo.');
      }
       /* Executa a continuação recebida para seguir depois desta etapa.
*/ done();
    });
  }
                                                                                        
   /* Procura a próxima interação importante que as pistas já liberaram.
*/ function storyAction(id) {
     /* Essa declaração usa const para preparar n, mantendo essas referências fixas.
*/ const  /* Aqui n recebe length.
*/ n =  /* Monta uma lista somente com os valores que passam no teste. */ D.points.filter( /* Essa função recebe p e devolve o resultado dessa expressão. */ p => p.eco === id && S.seen[p.id]).length;
     /* Esse teste confere se id é igual a determinacao, e só entra nesse caminho quando a condição passa.
*/ if (id === 'determinacao') {
       /* Esse teste confere se S.flags.knife Known não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!S.flags.knifeKnown)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar sobre a faca emoldurada',  /* Define a ação executada quando essa opção é escolhida.
*/ go:knifeIntroduction};
       /* Esse teste confere se n é maior ou igual a 4, e só entra nesse caminho quando a condição passa.
*/ if (n >= 4)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Tentar tomar a faca',  /* Define a ação executada quando essa opção é escolhida.
*/ go:determination};
       /* Devolve um valor vazio e encerra essa chamada da função.
*/ return null;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'odio' && S.dead.length > 0 && S.dead.length < 8 && !S.flags.odioWarning)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Ouvir o que Beerus percebeu', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de conversation. */ ()=> /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation('ODG1', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza S.flags.odio Warning usando true.
*/ S.flags.odioWarning=true; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save(); /* Monta as opções de conversa sem impedir que o jogador volte ao quarto.
*/ talkMenu(id);})};
     /* Essa declaração usa const para preparar sec, mantendo essas referências fixas.
*/ const  /* Aqui sec recebe second.id.
*/ sec = second[id];
     /* Essa declaração usa const para preparar clue, mantendo essas referências fixas.
*/ const  /* Aqui clue recebe uma das duas alternativas, conforme o teste.
*/ clue = id === 'felicidade' ? S.seen['felicidade.p6'] : n >= 2;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (sec && !S.talks[sec] && clue && (! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda H2.
*/ 'H2', /* Essa posição da lista guarda O2.
*/ 'O2', /* Essa posição da lista guarda C2.
*/ 'C2'].includes(sec) || S.dead.length > 0))  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Retomar nossa conversa', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de conversation. */ ()=> /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation(sec, /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu(id))};
     /* Esse teste confere se id é igual a amor, e só entra nesse caminho quando a condição passa.
*/ if (id === 'amor') {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.talks.A2 && !S.talks.A3 && S.dead.length)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Falar sobre quem não voltou', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de conversation. */ ()=> /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation('A3', /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu(id))};
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.talks.A3 && !S.talks.A4 &&  /* Confere os sete desfechos que antecedem as últimas etapas. */ sevenClosed())  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar sobre a passagem de Beerus', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de conversation. */ ()=> /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation('A4', /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu(id))};
    }
     /* Esse teste confere se id é igual a tristeza, e só entra nesse caminho quando a condição passa.
*/ if (id === 'tristeza') {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.talks.N2 && !S.talks.N3 && S.dead.length)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Ouvir a preocupação de Ninfa', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de conversation. */ ()=> /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation('N3', /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu(id))};
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.talks.N3 &&  /* Confere os sete desfechos que antecedem as últimas etapas. */ sevenClosed())  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Responder à acusação de Ninfa', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de conversation. */ ()=> /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation('N4', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('ninfa'); /* Prepara a fala e a sequência de água da etapa atual de Ninfa.
*/ ninfaStart(0,true);})};
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id==='medo'&&S.talks.M2&&!S.flags['visit-bilhete']) { /* Essa declaração usa const para preparar visit, mantendo essas referências fixas.
*/ const  /* Aqui visit recebe o resultado de guest For.
*/ visit= /* Procura uma visita que já foi liberada e ainda pode acontecer. */ guestFor(id); /* Esse teste confere se visit está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(visit) /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Ouvir Lúmen no corredor', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de shared Visit. */ ()=> /* Monta uma conversa dos dois moradores e registra que o encontro aconteceu. */ sharedVisit(visit)};}
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'medo' && S.talks.M2)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Seguir Hunger até o observatório', /* Define a ação executada quando essa opção é escolhida.
*/ go:watchIntro};
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (id === 'odio' && S.dead.length === 8 && S.talks.A4)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:'Atravessar a passagem de Beerus', /* Define a ação executada quando essa opção é escolhida.
*/ go:odioIntro};
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (minor[id] && S.talks[sec] && n >= 4)  /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Define o texto mostrado na opção ou no controle.
*/ label:S.flags[id+'Confront']?'Retomar a conversa que ficou ferida':'Falar sobre o que aconteceu entre nós', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve uma das duas alternativas, conforme o teste. */ ()=>S.flags[id+'Confront']? /* Mantém o Eco vivo enquanto está quebrado e pede uma nova decisão antes da morte. */ minorEnd(id): /* Retoma as vulnerabilidades que foram descobertas na convivência com esse Eco. */ minorConfront(id)};
     /* Devolve um valor vazio e encerra essa chamada da função.
*/ return null;
  }
   /* Filtra os assuntos pelas pistas, pessoas vivas, itens e conversas já conhecidos.
*/ function availableTopics(id) {
     /* Devolve o resultado de .filter e encerra essa chamada da função.
*/ return  /* Monta uma lista somente com os valores que passam no teste. */ (window.CONVIVENCIA || []).filter( /* Essa função recebe t e devolve o resultado dessa expressão. */ t=>t.eco===id && ! /* Confere se esse Eco já está na lista de mortos. */ dead(id) && (!t.clues|| /* Confere se pelo menos um item passa no teste. */ t.clues.some( /* Essa função recebe x e devolve S.seen.x. */ x=>S.seen[x])) && (!t.allClues|| /* Confere se todos os itens passam no teste. */ t.allClues.every( /* Essa função recebe x e devolve S.seen.x. */ x=>S.seen[x])) && (!t.alive|| /* Confere se todos os itens passam no teste. */ t.alive.every( /* Essa função recebe x e devolve a negação de o resultado de dead. */ x=>! /* Confere se esse Eco já está na lista de mortos. */ dead(x))) && (!t.dead|| /* Confere se todos os itens passam no teste. */ t.dead.every( /* Essa função recebe x e devolve o resultado de dead. */ x=> /* Confere se esse Eco já está na lista de mortos. */ dead(x))) && (!t.talks|| /* Confere se todos os itens passam no teste. */ t.talks.every( /* Essa função recebe x e devolve S.talks.x. */ x=>S.talks[x])) && (!t.items|| /* Confere se todos os itens passam no teste. */ t.items.every( /* Essa função recebe x e devolve o resultado de S.items.includes. */ x=> /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes(x))) && (!t.flags|| /* Confere se todos os itens passam no teste. */ t.flags.every( /* Essa função recebe x e devolve S.flags.x. */ x=>S.flags[x])));
  }
   /* Abre a apresentação do Eco ou os assuntos disponíveis quando ele já foi conhecido.
*/ function talk(id) {
     /* Esse teste confere se o resultado de dead está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Confere se esse Eco já está na lista de mortos. */ dead(id))  /* Devolve o resultado de render Room e encerra essa chamada da função.
*/ return  /* Monta cenário, morador, objetos e setas da vista atual do quarto. */ renderRoom();
     /* Esse teste confere se S.talks.first.id não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!S.talks[first[id]]) {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='odio' && !S.dead.length)  /* Devolve o resultado de say e encerra essa chamada da função.
*/ return  /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say('odio',[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se você veio visitar, pergunte antes de entrar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'}, /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Candy falou do seu caminho.
*/ 'Candy falou do seu caminho.'],{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Então não bloqueie a passagem dela. E olhe para quem mora aqui antes de atravessar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}], /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Marca a conversa como concluída e libera os caminhos relacionados.
*/ finishConversation(first[id],id); /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();});
       /* Devolve o resultado de conversation e encerra essa chamada da função.
*/ return  /* Prepara o roteiro da conversa e suas entregas de itens. */ conversation(first[id]);
    }
     /* Monta as opções de conversa sem impedir que o jogador volte ao quarto.
*/ talkMenu(id);
  }
   /* Monta as opções de conversa sem impedir que o jogador volte ao quarto.
*/ function talkMenu(id) {
     /* Esse teste confere se o resultado de dead está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse Eco já está na lista de mortos. */ dead(id))  /* Devolve o resultado de render Room e encerra essa chamada da função.
*/ return  /* Monta cenário, morador, objetos e setas da vista atual do quarto. */ renderRoom();
     /* Essa declaração usa const para preparar options e main, mantendo essas referências fixas.
*/ const  /* Aqui options recebe uma lista com 0 posições.
*/ options = [],  /* Aqui main recebe o resultado de story Action.
*/ main= /* Procura a próxima interação importante que as pistas já liberaram. */ storyAction(id);
     /* Esse teste confere se main está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(main)  /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:main.label, /* Define a ação executada quando essa opção é escolhida.
*/ go:main.go});
     /* Essa declaração usa const para preparar topics, mantendo essas referências fixas.
*/ const  /* Aqui topics recebe o resultado de available Topics.
*/ topics= /* Filtra os assuntos pelas pistas, pessoas vivas, itens e conversas já conhecidos. */ availableTopics(id);
     /* Essa declaração usa const para preparar visitor, mantendo essas referências fixas.
*/ const  /* Aqui visitor recebe o resultado de guest For.
*/ visitor= /* Procura uma visita que já foi liberada e ainda pode acontecer. */ guestFor(id); /* Esse teste confere se visitor está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(visitor) /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Conversar com '+D.names[ /* Procura o primeiro item que passa na condição indicada. */ visitor.people.find( /* Essa função recebe x e devolve o resultado dessa expressão. */ x=>x!==id)]+' em visita', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de shared Visit. */ ()=> /* Monta uma conversa dos dois moradores e registra que o encontro aconteceu. */ sharedVisit(visitor)});
     /* Essa declaração usa const para preparar topic Menu, mantendo essas referências fixas.
*/ const  /* Monta os assuntos de conversa novos ou já conhecidos desse Eco.
*/ topicMenu= /* Monta os assuntos de conversa novos ou já conhecidos desse Eco. */ (selected,revisit)=> /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say(id,[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:revisit?'Qual conversa você quer relembrar?':'Qual descoberta você quer comentar?', /* Reúne as respostas que o jogador pode escolher.
*/ choices:[
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ selected.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Define o texto mostrado na opção ou no controle.
*/ label:t.label, /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ ()=> /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say(id,t.lines, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
         /* Esse teste confere se S.flags não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!S.flags['topic-'+t.id]){
           /* Atualiza S.flags. usando true.
*/ S.flags['topic-'+t.id]=true;
           /* Essa declaração usa const para preparar remembered, mantendo essas referências fixas.
*/ const  /* Aqui remembered recebe o resultado de .join.
*/ remembered= /* Junta as partes da lista em um texto. */ t.lines.map( /* Essa função recebe line e devolve uma das duas alternativas, conforme o teste. */ line=> /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(line)?{ /* Indica quem está falando nessa linha.
*/ who:line[0], /* Guarda o texto que essa parte vai mostrar.
*/ text:line[1]}:line).filter( /* Essa função recebe line e devolve o resultado dessa expressão. */ line=>line.text&&line.who!=='Você').slice(-2).map( /* Essa função recebe line e devolve o resultado dessa expressão. */ line=>(line.who||D.names[id])+': '+line.text).join('\n');
           /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Conversa com '+D.names[id]+' · '+t.label,remembered||t.label,{ /* Liga esse conteúdo ao Eco correspondente.
*/ eco:id, /* Esse campo guarda source com Conversa.
*/ source:'Conversa'}); /* Conta uma interação importante e salva a mudança.
*/ significant();
        }
         /* Monta as opções de conversa sem impedir que o jogador volte ao quarto.
*/ talkMenu(id);
      })})),{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Voltar aos assuntos', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu(id)}
    ]}],renderRoom);
     /* Essa declaração usa const para preparar unread e revisited, mantendo essas referências fixas.
*/ const  /* Aqui unread recebe o resultado de topics.filter.
*/ unread= /* Monta uma lista somente com os valores que passam no teste. */ topics.filter( /* Essa função recebe t e devolve a negação de S.flags. */ t=>!S.flags['topic-'+t.id]), /* Aqui revisited recebe o resultado de topics.filter.
*/ revisited= /* Monta uma lista somente com os valores que passam no teste. */ topics.filter( /* Essa função recebe t e devolve S.flags. */ t=>S.flags['topic-'+t.id]);
     /* Esse teste confere se unread.length está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(unread.length) /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Falar de novas descobertas ('+unread.length+')', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de topic Menu. */ ()=> /* Monta os assuntos de conversa novos ou já conhecidos desse Eco. */ topicMenu(unread,false)});
     /* Esse teste confere se revisited.length está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(revisited.length) /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Relembrar conversas anteriores ('+revisited.length+')', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de topic Menu. */ ()=> /* Monta os assuntos de conversa novos ou já conhecidos desse Eco. */ topicMenu(revisited,true)});
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='orgulho' && (! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('espada')||! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('escudo')))  /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Pedir a espada e o escudo oferecidos', /* Define a ação executada quando essa opção é escolhida.
*/ go:aureaGifts});
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(id==='amor' && ! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('luz'))  /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Aceitar a luz que você ofereceu', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ ()=> /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say('amor',[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pode aceitar agora. Não é uma dívida.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'segurar-luz'},{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Segure com cuidado.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-luz', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de add Item. */ ()=> /* Coloca o objeto na bolsa e registra como ele foi recebido. */ addItem('luz')}], /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu(id))});
     /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Ficar e conversar um pouco', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ ()=> /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say(id, /* Monta uma nova lista transformando cada posição da lista original. */ smallTalk[id].map( /* Essa função recebe text e i e devolve um objeto com os campos dessa parte. */ (text,i)=>({ /* Guarda o texto que essa parte vai mostrar.
*/ text, /* Escolhe a pose do personagem para essa fala.
*/ pose:i===0?'gostou':i===1?'abalado':'acolhido'})), /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Conta uma interação importante e salva a mudança.
*/ significant(); /* Monta as opções de conversa sem impedir que o jogador volte ao quarto.
*/ talkMenu(id);})});
     /* Acrescenta esse valor no fim da lista.
*/ options.push({ /* Define o texto mostrado na opção ou no controle.
*/ label:'Voltar a olhar o quarto', /* Define a ação executada quando essa opção é escolhida.
*/ go:renderRoom});
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id,[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você pode retomar uma conversa ou perguntar sobre o que descobriu.', /* Reúne as respostas que o jogador pode escolher.
*/ choices:options}],renderRoom);
  }
   /* Essa declaração usa const para preparar small Talk, mantendo essas referências fixas.
*/ const  /* Aqui small Talk recebe um objeto com os campos dessa parte.
*/ smallTalk = {
     /* Esse campo guarda felicidade com uma lista com 3 posições.
*/ felicidade:[ /* Essa posição da lista guarda Você pode voltar sem trazer uma pergunta difícil.
*/ 'Você pode voltar sem trazer uma pergunta difícil.', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu ainda fico achando que preciso inventar alguma coisa antes de você chegar.', /* Essa posição da lista guarda Mas você está aqui agora. A gente pode começar por isso.
*/ 'Mas você está aqui agora. A gente pode começar por isso.'],
     /* Esse campo guarda amor com uma lista com 3 posições.
*/ amor:[ /* Essa posição da lista guarda Você não precisa explicar cada pausa.
*/ 'Você não precisa explicar cada pausa.', /* Essa posição da lista guarda Às vezes eu também fico sem saber como continuar uma conversa.
*/ 'Às vezes eu também fico sem saber como continuar uma conversa.', /* Essa posição da lista guarda A gente pode ficar um pouco.
*/ 'A gente pode ficar um pouco.'],
     /* Esse campo guarda tristeza com uma lista com 3 posições.
*/ tristeza:[ /* Essa posição da lista guarda Hoje eu consegui lembrar o fim daquela música.
*/ 'Hoje eu consegui lembrar o fim daquela música.', /* Essa posição da lista guarda Fiquei com medo de esquecer de novo se tentasse explicar.
*/ 'Fiquei com medo de esquecer de novo se tentasse explicar.', /* Essa posição da lista guarda Se quiser depois eu tento tocar para você.
*/ 'Se quiser, depois eu tento tocar para você.'],
     /* Esse campo guarda orgulho com uma lista com 3 posições.
*/ orgulho:[ /* Essa posição da lista guarda Reconhecer um limite também exige firmeza.
*/ 'Reconhecer um limite também exige firmeza.', /* Essa posição da lista guarda Eu não acerto tudo só porque tento parecer segura.
*/ 'Eu não acerto tudo só porque tento parecer segura.', /* Essa posição da lista guarda Você pode perguntar de novo sem transformar isso numa disputa.
*/ 'Você pode perguntar de novo sem transformar isso numa disputa.'],
     /* Esse campo guarda determinacao com uma lista com 3 posições.
*/ determinacao:[ /* Essa posição da lista guarda A peça ainda não encaixou. Eu tentei pelo outro lado.
*/ 'A peça ainda não encaixou. Eu tentei pelo outro lado.', /* Essa posição da lista guarda Não precisa dizer que vai dar certo. Você não sabe.
*/ 'Não precisa dizer que vai dar certo. Você não sabe.', /* Essa posição da lista guarda Pode só ficar aqui enquanto eu tento.
*/ 'Pode só ficar aqui enquanto eu tento.'],
     /* Esse campo guarda calma com uma lista com 3 posições.
*/ calma:[ /* Essa posição da lista guarda A outra xícara continua livre.
*/ 'A outra xícara continua livre.', /* Essa posição da lista guarda Às vezes o silêncio parece uma pergunta. Não precisa responder.
*/ 'Às vezes o silêncio parece uma pergunta. Não precisa responder.', /* Essa posição da lista guarda Você pode ficar.
*/ 'Você pode ficar.'],
     /* Esse campo guarda ansiedade com uma lista com 3 posições.
*/ ansiedade:[ /* Essa posição da lista guarda O trajeto de volta é o mesmo. O tempo da visita mudou.
*/ 'O trajeto de volta é o mesmo. O tempo da visita mudou.', /* Essa posição da lista guarda Não estou pedindo uma justificativa. Estou distinguindo as coisas.
*/ 'Não estou pedindo uma justificativa. Estou distinguindo as coisas.', /* Essa posição da lista guarda Ainda posso mostrar o caminho quando você quiser sair.
*/ 'Ainda posso mostrar o caminho quando você quiser sair.'],
     /* Esse campo guarda culpa com uma lista com 3 posições.
*/ culpa:[ /* Essa posição da lista guarda Consegui deixar o presente onde estava.
*/ 'Consegui deixar o presente onde estava.', /* Essa posição da lista guarda Depois voltei para ver se tinha ficado torto. Eu sei.
*/ 'Depois voltei para ver se tinha ficado torto. Eu sei.', /* Essa posição da lista guarda Mas não tirei. Hoje isso já foi alguma coisa.
*/ 'Mas não tirei. Hoje isso já foi alguma coisa.'],
     /* Esse campo guarda medo com uma lista com 3 posições.
*/ medo:[ /* Essa posição da lista guarda Eu sei que você está aí.
*/ 'Eu sei que você está aí.', /* Essa posição da lista guarda Não se aproxime pelas costas. Você pode falar desse lugar.
*/ 'Não se aproxime pelas costas. Você pode falar desse lugar.', /* Essa posição da lista guarda Estou ouvindo.
*/ 'Estou ouvindo.'],
     /* Esse campo guarda odio com uma lista com 3 posições.
*/ odio:[ /* Essa posição da lista guarda Se veio perguntar espere a resposta.
*/ 'Se veio perguntar, espere a resposta.', /* Essa posição da lista guarda Nem tudo que fica aqui precisa ser retirado ou consertado.
*/ 'Nem tudo que fica aqui precisa ser retirado ou consertado.', /* Essa posição da lista guarda Candy entende isso. Eu queria que você também entendesse.
*/ 'Candy entende isso. Eu queria que você também entendesse.']
  };
   /* Essa função reúne as operações de aurea Gifts para executar quando for chamada.
*/ function aureaGifts() {
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('orgulho',[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'A espada fica neste pedestal. Pegue pelo cabo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-espada-fogo', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de add Item. */ ()=> /* Coloca o objeto na bolsa e registra como ele foi recebido. */ addItem('espada')},{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'E este é o escudo. O apoio fica virado para o seu braço.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-escudo-fogo', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de add Item. */ ()=> /* Coloca o objeto na bolsa e registra como ele foi recebido. */ addItem('escudo')},{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Proteção não decide por você. Eu espero que se lembre disso.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'entregar-espada-e-escudo'}], /* Essa função recebe nenhum parâmetro e devolve o resultado de talk Menu. */ ()=> /* Monta as opções de conversa sem impedir que o jogador volte ao quarto. */ talkMenu('orgulho'));
  }
   /* Apresenta a faca emoldurada e a recusa de Friska antes do confronto.
*/ function knifeIntroduction() {
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('determinacao', [{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você aproxima a mão da moldura. Friska acompanha o gesto antes de você tocar na faca.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de exploration Hands. */ ()=> /* Escolhe a mão comum ou o equipamento que está realmente na bolsa. */ explorationHands('01-alcancar')},  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda O que é aquela faca.
*/ 'O que é aquela faca?'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Determinação.
*/ 'Determinação',  /* Essa posição da lista guarda Ah aquilo Usei muito há um tempo atrás.
*/ 'Ah, aquilo? Usei muito há um tempo atrás.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Posso pegar emprestada.
*/ 'Posso pegar emprestada?'], {
       /* Indica quem está falando nessa linha.
*/ who: 'Determinação',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Não.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'nao-gostou'
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Nem por um instante.
*/ 'Nem por um instante?'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Determinação.
*/ 'Determinação',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Independentemente de quem fosse, só conseguiria aquela faca se me matasse primeiro.']],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza S.flags.knife Known usando true.
*/ S.flags.knifeKnown = true;
       /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('A faca emoldurada', 'Determinação recusou emprestar a faca. Ela disse que só a conseguiriam se a matassem primeiro.');
       /* Conta uma interação importante e salva a mudança.
*/ significant();
       /* Atualiza S.last Talk.determinacao usando S.activity.
*/ S.lastTalk.determinacao = S.activity;
       /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
    });
  }
   /* Apresenta o comando de correr em uma demonstração sem risco.
*/ function runTutorial(done) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg('ansiedade'));
     /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('ansiedade');
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Um caminho mais rápido', 'Nos quartos você usa setinhas. Nas perseguições, pressione Correr no celular ou Shift no PC. Experimente agora, sem risco.');
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Correr · Shift',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza S.flags.running usando true.
*/ S.flags.running = true;
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
       /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('ansiedade', [ /* Essa posição da lista guarda Preparação para um evento não é desejo de que ele aconteça.
*/ 'Preparação para um evento não é desejo de que ele aconteça.'], done);
    }));
     /* Atualiza mode usando run Tutorial.
*/ mode = 'runTutorial';
     /* Atualiza retry usando uma função para executar quando for chamada.
*/ retry =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza S.flags.running usando true.
*/ S.flags.running = true;
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
       /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('ansiedade', [ /* Essa posição da lista guarda Preparação para um evento não é desejo de que ele aconteça.
*/ 'Preparação para um evento não é desejo de que ele aconteça.'], done);
    };
  }
                                                                           
   /* Confere a investigação e abre a falsa batalha quando o protagonista tenta tomar a faca.
*/ function determination() {
     /* Esse teste confere se S.talks.D1 não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!S.talks.D1)  /* Devolve o resultado de talk e encerra essa chamada da função.
*/ return  /* Abre a apresentação do Eco ou os assuntos disponíveis quando ele já foi conhecido. */ talk('determinacao');
     /* Esse teste confere se S.flags.knife Known não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!S.flags.knifeKnown)  /* Devolve o resultado de knife Introduction e encerra essa chamada da função.
*/ return  /* Apresenta a faca emoldurada e a recusa de Friska antes do confronto. */ knifeIntroduction();
     /* Esse teste confere se length é menor que 4, e só entra nesse caminho quando a condição passa.
*/ if( /* Monta uma lista somente com os valores que passam no teste. */ D.points.filter( /* Essa função recebe p e devolve o resultado dessa expressão. */ p=>p.eco==='determinacao'&&S.seen[p.id]).length<4)  /* Devolve o resultado de say e encerra essa chamada da função.
*/ return  /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say('determinacao',[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você mal olhou o que eu estou fazendo. Já quer tirar a única coisa que eu disse para não tocar?', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}, /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim', /* Essa posição da lista guarda Há outras peças e anotações neste quarto.
*/ 'Há outras peças e anotações neste quarto.']],renderRoom);
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg('determinacao'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('determinacao', [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda Sua mão vai até a moldura. Ela se coloca entre você e a faca.
*/ 'Sua mão vai até a moldura. Ela se coloca entre você e a faca.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Determinação.
*/ 'Determinação',  /* Essa posição da lista guarda Eu já respondi.
*/ 'Eu já respondi.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Eu não vou demorar.
*/ 'Eu não vou demorar.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Determinação.
*/ 'Determinação',  /* Essa posição da lista guarda Não é o tempo.
*/ 'Não é o tempo.']],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('FRISKA', '♥ Você avançou até a moldura. Friska bloqueia a passagem.');
       /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ p.classList.add('false-battle');
       /* Essa declaração usa const para preparar life, mantendo essas referências fixas.
*/ const  /* Aqui life recebe o resultado de document.create Element.
*/ life= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ life.textContent='PROTAGONISTA   LV 1   HP 20 / 20'; /* Define as classes de aparência desse elemento.
*/ life.className='false-battle-status'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(life);
       /* Atualiza mode usando determination Battle.
*/ mode='determinationBattle';
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('AGIR', determinationCut),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('LUTAR', determinationCut));
    });
  }
   /* Faz o corte antes do primeiro turno e registra a faca e a morte de Friska.
*/ function determinationCut() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg('determinacao'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('determinacao', [{
       /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Um corte atravessa a visão antes do primeiro turno.', /* Indica a imagem que deve aparecer nesse momento.
*/ image: /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/cortes/faca/02-corte.png'), /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu',
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Mostra o arquivo das mãos e identifica o tipo de enquadramento.
*/ showHands( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Equipamentos/faca/03-atacar.png')); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('knife'); /* Registra a morte do Eco uma única vez e atualiza suas consequências na história.
*/ kill('determinacao','O protagonista tomou a faca e a esfaqueou antes do primeiro turno.'); /* Coloca o objeto na bolsa e registra como ele foi recebido.
*/ addItem('faca'); /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('loss-scene');}
    }, {
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'A moldura está vazia. Friska já não se move nem responde. A escolha veio depois da ação.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'morreu'
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela não teve um turno. A única coisa que pediu foi que você não tocasse na faca.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#hands').hidden=true;}
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Você', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Era para tirar a insegurança. Era só para isso.'
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você espera o alívio. Continua ouvindo a própria respiração. O nome dela ainda está escrito nos projetos que não vai terminar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu'
    }, {
       /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'POUPAR',
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Você agiu sem pensar.'
      }, {
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'MATAR',
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Como assim?'
      }]
    }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('A faca agora está comigo', 'Não foi um presente. Os outros conheciam a recusa dela.');
       /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
    });
  }
   /* Essa declaração usa const para preparar minor, mantendo essas referências fixas.
*/ const  /* Aqui minor recebe um objeto com os campos dessa parte.
*/ minor = {
     /* Esse campo guarda felicidade com um objeto com os campos dessa parte.
*/ felicidade: {
       /* Guarda as falas que preparam esse acontecimento.
*/ before: [ /* Essa posição da lista guarda Eu ia te mostrar uma coisa. Não ficou pronta.
*/ 'Eu ia te mostrar uma coisa. Não ficou pronta.',  /* Essa posição da lista guarda Eu estava tentando falar isso antes de você olhar.
*/ 'Eu estava tentando falar isso antes de você olhar.'],
       /* Guarda a pergunta feita nesse trecho.
*/ question: 'Quando não consegue fazer ninguém feliz, quem é você?',
       /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Você podia só não ter gostado.',
       /* Guarda a fala de vulnerabilidade enquanto o Eco ainda está vivo.
*/ broken: 'Pax nunca pediu que eu fizesse nada.',
       /* Guarda a última fala usada nesse desfecho.
*/ last: 'Eu queria que você tivesse vindo só para ficar.',
       /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after: 'O mural continua colorido. A brincadeira ficou sem resposta.'
    },
     /* Esse campo guarda calma com um objeto com os campos dessa parte.
*/ calma: {
       /* Guarda as falas que preparam esse acontecimento.
*/ before: [ /* Essa posição da lista guarda Você saiu daqui e foi falar com ela.
*/ 'Você saiu daqui e foi falar com ela.',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu disse que você podia conversar. Não disse o que devia fazer com o que ouviu.'],
       /* Guarda a pergunta feita nesse trecho.
*/ question: 'De que serve acolher quem vai machucar outro?',
       /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Você estava aqui pedindo um lugar.',
       /* Guarda a fala de vulnerabilidade enquanto o Eco ainda está vivo.
*/ broken: 'A porta estar aberta não foi o que escolheu a sua mão.',
       /* Guarda a última fala usada nesse desfecho.
*/ last: 'Eu teria deixado você entrar mesmo assim.',
       /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after: 'A segunda xícara continua intocada. O refúgio ficou sem Pax.'
    },
     /* Esse campo guarda ansiedade com um objeto com os campos dessa parte.
*/ ansiedade: {
       /* Guarda as falas que preparam esse acontecimento.
*/ before: [ /* Essa posição da lista guarda As duas respostas não descrevem o mesmo objetivo.
*/ 'As duas respostas não descrevem o mesmo objetivo.',  /* Essa posição da lista guarda Quero uma resposta que seja verdadeira.
*/ 'Quero uma resposta que seja verdadeira.'],
       /* Guarda a pergunta feita nesse trecho.
*/ question: 'Se não pode impedir, por que continua avisando?',
       /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Você omitiu a própria intervenção.',
       /* Guarda a fala de vulnerabilidade enquanto o Eco ainda está vivo.
*/ broken: 'Eu não consigo terminar antes de você mudar.',
       /* Guarda a última fala usada nesse desfecho.
*/ last: 'Você sabia qual dado estava faltando.',
       /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after: 'O rádio está ligado. O núcleo de Hermes não está mais aceso.'
    },
     /* Esse campo guarda orgulho com um objeto com os campos dessa parte.
*/ orgulho: {
       /* Guarda as falas que preparam esse acontecimento.
*/ before: [ /* Essa posição da lista guarda Eu pensei no que você precisava para se defender.
*/ 'Eu pensei no que você precisava para se defender.',  /* Essa posição da lista guarda Eu não vou chamar uma escolha sua de destino.
*/ 'Eu não vou chamar uma escolha sua de destino.'],
       /* Guarda a pergunta feita nesse trecho.
*/ question: 'Todo mundo confiou nos seus princípios.',
       /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Você não está falando em nome deles.',
       /* Guarda a fala de vulnerabilidade enquanto o Eco ainda está vivo.
*/ broken: 'Você recebeu confiança. E escolheu o que colocar atrás dela.',
       /* Guarda a última fala usada nesse desfecho.
*/ last: 'Não chame minha mão de sua escolha.',
       /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after: 'O pedestal permanece. A luz ao redor dela se apagou.'
    }
  };
   /* Retoma as vulnerabilidades que foram descobertas na convivência com esse Eco.
*/ function minorConfront(id) {
     /* Essa declaração usa const para preparar m, mantendo essas referências fixas.
*/ const  /* Aqui m recebe minor.id.
*/ m = minor[id];
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id, [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ m.before.map( /* Essa função recebe text e devolve um objeto com os campos dessa parte. */ text => ({
       /* Guarda o texto que essa parte vai mostrar.
*/ text,
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'abalado'
    })), {
       /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'Você não escolheu por mim.',
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Eu sei. Eu queria conseguir parar de refazer a conversa.',
         /* Escolhe a pose do personagem para essa fala.
*/ pose: 'acolhido'
      }, {
         /* Define o texto mostrado na opção ou no controle.
*/ label: m.question,
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: m.reply,
         /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrando'
      }]
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Se eu não precisasse sentir isso ninguém poderia usar contra mim.
*/ 'Se eu não precisasse sentir isso, ninguém poderia usar contra mim.'], {
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Você está falando de mim ou do que trouxe até aqui?',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'abalado'
    }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza S.flags. usando true.
*/ S.flags[id + 'Confront'] = true;
       /* Conta uma interação importante e salva a mudança.
*/ significant();
       /* Atualiza S.last Talk.id usando S.activity.
*/ S.lastTalk[id] = S.activity;
       /* Monta cenário, morador, objetos e setas da vista atual do quarto.
*/ renderRoom();
    });
  }
                                                                                            
   /* Mantém o Eco vivo enquanto está quebrado e pede uma nova decisão antes da morte.
*/ function minorEnd(id) {
     /* Essa declaração usa const para preparar m, mantendo essas referências fixas.
*/ const  /* Aqui m recebe minor.id.
*/ m = minor[id];
     /* Essa declaração usa const para preparar rupture, mantendo essas referências fixas.
*/ const  /* Aqui rupture recebe id.
*/ rupture={
       /* Esse campo guarda felicidade com um objeto com os campos dessa parte.
*/ felicidade:{ /* Guarda o pedido feito antes da decisão final.
*/ plea:'Eu sei que você está com medo de não ser suficiente. Mas eu não sou a pessoa que te fez acreditar nisso.', /* Guarda as falas que preparam esse acontecimento.
*/ before:'Sunny tenta terminar a brincadeira que começou quando você chegou. A voz falha no lugar em que viria a sua resposta.', /* Guarda a última fala usada nesse desfecho.
*/ last:'Só olha para mim. Não para o que você quer que desapareça.', /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after:'Os olhos perdem a luz. Um líquido preto desce pelo rosto. O corpo ainda ocupa o lugar onde ele esperava você sentar.'},
       /* Esse campo guarda calma com um objeto com os campos dessa parte.
*/ calma:{ /* Guarda o pedido feito antes da decisão final.
*/ plea:'Eu deixei a porta aberta porque você precisava respirar. Não porque achava que podia consertar você.', /* Guarda as falas que preparam esse acontecimento.
*/ before:'Pax deixa espaço no banco, por hábito. Mesmo chorando, continua esperando que você se sente em vez de avançar.', /* Guarda a última fala usada nesse desfecho.
*/ last:'Você pode ir embora. Não precisa me apagar para conseguir sair.', /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after:'A última tentativa de respirar não se completa. Os olhos escurecem e vazam preto. A segunda xícara continua esperando uma visita.'},
       /* Esse campo guarda ansiedade com um objeto com os campos dessa parte.
*/ ansiedade:{ /* Guarda o pedido feito antes da decisão final.
*/ plea:'Eu avisei porque queria você vivo. Você transformou cada aviso numa prova de que eu era o problema.', /* Guarda as falas que preparam esse acontecimento.
*/ before:'Hermes tenta proteger o núcleo com as mãos. As faíscas seguem o ritmo irregular da voz; ele já não termina os cálculos.', /* Guarda a última fala usada nesse desfecho.
*/ last:'Se o aviso parar, o perigo não vai parar junto.', /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after:'O núcleo se apaga no meio de um pulso. Preto escorre dos olhos vazios. O rádio continua chamando por alguém que não responde.'},
       /* Esse campo guarda orgulho com um objeto com os campos dessa parte.
*/ orgulho:{ /* Guarda o pedido feito antes da decisão final.
*/ plea:'Eu te dei proteção. Era para você ter tempo de escolher. Não para fazer de mim a próxima coisa que precisa vencer.', /* Guarda as falas que preparam esse acontecimento.
*/ before:'Aurea tenta manter a postura. Não consegue esconder o choro, nem o tremor da mão que ofereceu o escudo.', /* Guarda a última fala usada nesse desfecho.
*/ last:'A força era sua. A responsabilidade também.', /* Guarda o texto usado quando esse lugar é visto depois da ausência.
*/ after:'A coroa perde o brilho. Os olhos ficam escuros e vazam preto. A mão cai sem retirar o que já tinha oferecido.'}
    }[id];
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id, [{
       /* Guarda o texto que essa parte vai mostrar.
*/ text: m.broken,
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Você ainda precisa acreditar que podia ter impedido.
*/ 'Você ainda precisa acreditar que podia ter impedido.'], {
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Está chorando, mas continua vivo. A resposta não é um fim.'
    }, {
       /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'Parar e deixar vivo agora',
         /* Define a ação executada quando essa opção é escolhida.
*/ go:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
           /* Atualiza S.pending.id usando S.activity.
*/ S.pending[id] = S.activity;
           /* Acrescenta esse valor no fim da lista.
*/ S.choices.push({
             /* Esse campo guarda scene com minor Spare.
*/ scene: 'minorSpare',
             /* Liga esse conteúdo ao Eco correspondente.
*/ eco: id,
             /* Define o texto mostrado na opção ou no controle.
*/ label: 'Deixou vivo no encontro'
          });
           /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id, [{
             /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Você pode ficar sem pedir que eu justifique tudo?',
             /* Escolhe a pose do personagem para essa fala.
*/ pose: 'acolhido'
          }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Uma conversa interrompida: ' + D.names[id], 'Ficou vivo quando deixei o quarto.');
             /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
             /* Monta a praça e os cartões dos quartos já disponíveis.
*/ hub();
          });
        }
      }, {
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'Continuar insistindo',
         /* Define a ação executada quando essa opção é escolhida.
*/ go:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
           /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id, [{ /* Guarda o texto que essa parte vai mostrar.
*/ text:rupture.plea, /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:rupture.before, /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'},  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Se eu não sentir mais nada ninguém vai poder usar isso contra mim.
*/ 'Se eu não sentir mais nada, ninguém vai poder usar isso contra mim.'], {
             /* Guarda o texto que essa parte vai mostrar.
*/ text:rupture.last, /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'
          }, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele ainda está vivo. Você reconhece o que está fazendo.', /* Reúne as respostas que o jogador pode escolher.
*/ choices:[{
             /* Define o texto mostrado na opção ou no controle.
*/ label:'Recuar. Deixar vivo.', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
               /* Atualiza S.pending.id usando S.activity.
*/ S.pending[id]=S.activity; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
               /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id,[{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu preciso que você se afaste agora.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'},{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você recua. O choro continua atrás de você; não há reconciliação instantânea.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}],hub);
            }
          },{ /* Define o texto mostrado na opção ou no controle.
*/ label:'Continuar mesmo assim', /* Define a ação executada quando essa opção é escolhida.
*/ go: /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ ()=> /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say(id,[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Eu não vou precisar disso depois.
*/ 'Eu não vou precisar disso depois.'],{
             /* Guarda o texto que essa parte vai mostrar.
*/ text: m.last,
             /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
          }, {
             /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
             /* Guarda o texto que essa parte vai mostrar.
*/ text: rupture.after,
             /* Escolhe a pose do personagem para essa fala.
*/ pose: 'morreu',
             /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => { /* Registra a morte do Eco uma única vez e atualiza suas consequências na história.
*/ kill(id, 'A ruptura veio depois de o protagonista insistir nas vulnerabilidades conhecidas. ' + m.after); /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#hands').hidden=true; /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('loss-scene'); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('death');}
          },{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você procura a sensação de alívio que prometeu a si mesmo. O quarto fica em silêncio. A insegurança continua com você.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu'}],renderRoom)}]}],renderRoom);
        }
      }]
    }], renderRoom);
  }
   /* Mostra uma consequência posterior sem confundir isso com a decisão anterior de parar.
*/ function laterDeath(id) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg(id));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(id, [{
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: id === 'medo' ? 'Depois daquele encontro, Medo saiu vivo. Agora o quarto está vazio. A notícia da sua morte chega por quem ainda permanece. A perda posterior não apaga o momento em que você o poupou.' : minor[id].after,
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'morreu'
    }, {
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'O desfecho não aconteceu no instante em que você decidiu parar.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'morreu',
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função recebe nenhum parâmetro e devolve o resultado de kill. */ () =>  /* Registra a morte do Eco uma única vez e atualiza suas consequências na história. */ kill(id, id === 'medo' ? 'Poupado no quarto de Pax; morreu posteriormente, fora de cena, após o sofrimento acumulado pelas perdas.' : 'Deixado vivo no encontro; perda posterior ao retorno. ' + minor[id].after)
    }], renderRoom);
  }
   /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ function defer(seconds, done) {
     /* Atualiza clock Task usando um objeto com os campos dessa parte.
*/ clockTask = {
       /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: seconds,
       /* Aqui disponibiliza a operação done para os outros módulos. Executa a continuação recebida para seguir depois desta etapa.
*/ done
    };
  }
   /* Monta os comandos de reação e o prazo para responder.
*/ function prompt(label, actions, seconds, done) {
     /* Atualiza mode usando prompt.
*/ mode = 'prompt';
                                                                                       
     /* Essa declaração usa const para preparar keyboard Only, mantendo essas referências fixas.
*/ const  /* Aqui keyboard Only recebe o resultado dessa expressão.
*/ keyboardOnly=settings.device==='pc'&&!settings.assist&&(qte?.eco==='insanidade'||chase?.kind==='insanidade');
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#dialogue').hidden=true;
     /* Atualiza .dataset.input usando uma das duas alternativas, conforme o teste.
*/ $('#prompt').dataset.input=keyboardOnly?'keyboard':'buttons';
     /* Esse teste confere se chase não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!chase) /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent=qte?'Reaja ao movimento':'';
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#prompt').hidden = false;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#prompt-label').textContent = label;
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#prompt-actions').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ actions.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ a => {
       /* Essa declaração usa const para preparar button, mantendo essas referências fixas.
*/ const  /* Aqui button recebe o resultado de btn.
*/ button= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(a.label,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (paused || !timed || (keyboardOnly&&!promptKeyboardInput))  /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(chase?.kind==='medo'&&chase.index===chase.length-1&&!chase.lampOn&&a.id==='refuge') /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Atualiza timed usando um valor vazio.
*/ timed = null;  /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#prompt').hidden = true;  /* Executa a continuação recebida para seguir depois desta etapa.
*/ done(a.id);
      });
       /* Atualiza button.dataset.action usando a.id.
*/ button.dataset.action=a.id;
       /* Esse teste confere se keyboard Only está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(keyboardOnly) /* Define o atributo aria description desse elemento.
*/ button.setAttribute('aria-description','Use a tecla indicada na tela.');
       /* Devolve button e encerra essa chamada da função.
*/ return button;
    }));
     /* Atualiza .style.transform usando scale X 1.
*/ $('#timer-fill').style.transform = 'scaleX(1)';
     /* Atualiza timed usando um objeto com os campos dessa parte.
*/ timed = { /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left:seconds, /* Esse campo guarda total com seconds.
*/ total:seconds, /* Esse campo guarda done com uma função para executar quando for chamada.
*/ done: /* Executa a continuação recebida para seguir depois desta etapa. */ ()=>{ /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#prompt').hidden=true; /* Executa a continuação recebida para seguir depois desta etapa.
*/ done(null);}};
  }
                                                                         
   /* Prepara a sequência de movimentos e as consequências dos erros.
*/ function startQTE(moves, onDone, onFail, eco = null) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!eco&& /* Confere se pelo menos um item passa no teste. */ moves.some( /* Essa função recebe move e devolve o resultado de .includes. */ move=> /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda intercept.
*/ 'intercept', /* Essa posição da lista guarda hold.
*/ 'hold', /* Essa posição da lista guarda push.
*/ 'push'].includes(move))) /* Atualiza eco usando medo.
*/ eco='medo';
     /* Atualiza qte usando um objeto com os campos dessa parte.
*/ qte = {
       /* Lista as reações rápidas desta etapa.
*/ moves: [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...moves],
       /* Esse campo guarda on Done com on Done.
*/ onDone,
       /* Esse campo guarda on Fail com on Fail.
*/ onFail,
       /* Liga esse conteúdo ao Eco correspondente.
*/ eco
    };
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#stage').classList.toggle('ninfa-pressure',eco==='tristeza');
     /* Mostra a próxima ação rápida e confere a resposta ou o tempo esgotado.
*/ nextQTE();
  }
   /* Mostra a próxima ação rápida e confere a resposta ou o tempo esgotado.
*/ function nextQTE() {
     /* Esse teste confere se qte não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!qte)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar move, mantendo essas referências fixas.
*/ const  /* Aqui move recebe o resultado de qte.moves.shift.
*/ move =  /* Retira e devolve o primeiro valor da lista. */ qte.moves.shift();
     /* Esse teste confere se move não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!move) {
       /* Essa declaração usa const para preparar cb, mantendo essas referências fixas.
*/ const  /* Aqui cb recebe qte.on Done.
*/ cb = qte.onDone;
       /* Atualiza qte usando um valor vazio.
*/ qte = null;
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#prompt').hidden = true;
       /* Retira esse elemento da página.
*/ $('#stage').classList.remove('ninfa-pressure');
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ delete  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#stage').dataset.urgency;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.clearTension?.();
       /* Devolve o resultado de cb e encerra essa chamada da função.
*/ return  /* Executa cb com os valores definidos nessa parte. */ cb();
    }
     /* Esse teste confere se qte.eco é igual a tristeza, e só entra nesse caminho quando a condição passa.
*/ if(qte.eco==='tristeza') {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('wave',{ /* Esse campo guarda pan com uma das duas alternativas, conforme o teste.
*/ pan:move==='left'?.55:move==='right'?-.55:0, /* Esse campo guarda distance com 1.2.
*/ distance:1.2, /* Esse campo guarda intensity com 0.6.
*/ intensity:.6});
       /* Essa declaração usa const para preparar sequence, mantendo essas referências fixas.
*/ const  /* Aqui sequence recebe o valor consultado nessa expressão.
*/ sequence=[ /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 4.
*/ 4], /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 5.
*/ 5, /* Essa posição da lista guarda 6.
*/ 6, /* Essa posição da lista guarda 7.
*/ 7], /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 8.
*/ 8, /* Essa posição da lista guarda 9.
*/ 9, /* Essa posição da lista guarda 10.
*/ 10], /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 11.
*/ 11, /* Essa posição da lista guarda 12.
*/ 12, /* Essa posição da lista guarda 13.
*/ 13], /* Essa posição reúne 4 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 14.
*/ 14, /* Essa posição da lista guarda 15.
*/ 15, /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 3.
*/ 3], /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 8.
*/ 8, /* Essa posição da lista guarda 13.
*/ 13]][S.checkpoint%6];
       /* Essa declaração usa const para preparar step, mantendo essas referências fixas.
*/ const  /* Aqui step recebe o resultado dessa expressão.
*/ step=qte.visualStep||0; /* Atualiza qte.visual Step usando o resultado dessa expressão.
*/ qte.visualStep=step+1;
       /* Essa declaração usa const para preparar pose, mantendo essas referências fixas.
*/ const  /* Aqui pose recebe sequence.
*/ pose=sequence[step%sequence.length];
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('tristeza','base','combat');
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src= /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/01-Sprites-128/04-Tristeza/')[pose-1];
       /* Essa declaração usa const para preparar fx, mantendo essas referências fixas.
*/ const  /* Aqui fx recebe o valor consultado nessa expressão.
*/ fx=[ /* Essa posição da lista guarda 10.
*/ 10, /* Essa posição da lista guarda 11.
*/ 11, /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 4.
*/ 4, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 5.
*/ 5, /* Essa posição da lista guarda 7.
*/ 7, /* Essa posição da lista guarda 8.
*/ 8, /* Essa posição da lista guarda 9.
*/ 9, /* Essa posição da lista guarda 6.
*/ 6, /* Essa posição da lista guarda 14.
*/ 14, /* Essa posição da lista guarda 12.
*/ 12, /* Essa posição da lista guarda 13.
*/ 13][((S.checkpoint*3)+step)%14];
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#effect').src= /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/01-Sprites-128/05-Efeitos-Tristeza/')[fx-1]; /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden=false;
       /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(move==='guard'?'09-pare':'01-alcancar');
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(qte.moves &&  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda intercept.
*/ 'intercept', /* Essa posição da lista guarda hold.
*/ 'hold', /* Essa posição da lista guarda push.
*/ 'push'].includes(move)) {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('grab',{ /* Esse campo guarda intensity com 0.4.
*/ intensity:.4});
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('medo','base','combat'); /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Medo/'+({ /* Esse campo guarda intercept com 09 terror agarrar.
*/ intercept:'09-terror-agarrar', /* Esse campo guarda hold com 12 terror bloquear.
*/ hold:'12-terror-bloquear', /* Esse campo guarda push com 03 virar esquina normal.
*/ push:'03-virar-esquina-normal'})[move]+'.png');
       /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(move==='push'?'09-pare':'01-alcancar');
    }
     /* Essa declaração usa const para preparar labels, mantendo essas referências fixas.
*/ const  /* Aqui labels recebe um objeto com os campos dessa parte.
*/ labels = {
       /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: 'Esquivar à esquerda',
       /* Define a posição ou o estado ligado ao lado direito.
*/ right: 'Esquivar à direita',
       /* Esse campo guarda guard com Proteger.
*/ guard: 'Proteger',
       /* Esse campo guarda down com Abaixar.
*/ down: 'Abaixar',
       /* Esse campo guarda intercept com Interceptar.
*/ intercept: 'Interceptar',
       /* Esse campo guarda hold com Segurar o braço.
*/ hold: 'Segurar o braço',
       /* Esse campo guarda push com Empurrar.
*/ push: 'Empurrar',
       /* Esse campo guarda back com Recuar.
*/ back: 'Recuar',
       /* Esse campo guarda cross com Atravessar.
*/ cross: 'Atravessar'
    };
     /* Essa declaração usa const para preparar mapping, mantendo essas referências fixas.
*/ const  /* Aqui mapping recebe um objeto com os campos dessa parte.
*/ mapping = {
       /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: '← / A',
       /* Define a posição ou o estado ligado ao lado direito.
*/ right: '→ / D',
       /* Esse campo guarda guard com Espaço.
*/ guard: 'Espaço',
       /* Esse campo guarda down com S.
*/ down: '↓ / S',
       /* Esse campo guarda intercept com E.
*/ intercept: 'E',
       /* Esse campo guarda hold com Espaço.
*/ hold: 'Espaço',
       /* Esse campo guarda push com W.
*/ push: 'W / ↑',
       /* Esse campo guarda back com S.
*/ back: '↓ / S',
       /* Esse campo guarda cross com E.
*/ cross: 'E'
    };
     /* Essa declaração usa const para preparar action, mantendo essas referências fixas.
*/ const  /* Aqui action recebe um objeto com os campos dessa parte.
*/ action = {
       /* Define o texto mostrado na opção ou no controle.
*/ label: labels[move] + ' · ' + mapping[move],
       /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: move
    };
     /* Essa declaração usa const para preparar decoy, mantendo essas referências fixas.
*/ const  /* Aqui decoy recebe uma das duas alternativas, conforme o teste.
*/ decoy =  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda left.
*/ 'left',  /* Essa posição da lista guarda right.
*/ 'right',  /* Essa posição da lista guarda guard.
*/ 'guard',  /* Essa posição da lista guarda down.
*/ 'down'].includes(move) ?  /* Monta uma nova lista transformando cada posição da lista original. */ [ /* Essa posição da lista guarda left.
*/ 'left',  /* Essa posição da lista guarda right.
*/ 'right',  /* Essa posição da lista guarda guard.
*/ 'guard',  /* Essa posição da lista guarda down.
*/ 'down'].filter( /* Essa função recebe x e devolve o resultado dessa expressão. */ x => x !== move).slice(0, 2).map( /* Essa função recebe x e devolve um objeto com os campos dessa parte. */ x => ({
       /* Define o texto mostrado na opção ou no controle.
*/ label: labels[x],
       /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: x
    })) : [];
     /* Essa declaração usa const para preparar all, mantendo essas referências fixas.
*/ const  /* Aqui all recebe o resultado de .sort.
*/ all =  /* Organiza a ordem dessa lista usando a comparação indicada. */ [action,  /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...decoy].sort( /* Essa função recebe a e b e devolve o resultado de a.id.locale Compare. */ (a, b) =>  /* Executa a.id.locale Compare com os valores definidos nessa parte. */ a.id.localeCompare(b.id));
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#prompt-status').textContent = qte.eco==='insanidade'&&settings.device==='pc'&&!settings.assist?'Use a tecla indicada. Clicar na caixa não responde.':'Siga o comando indicado. Teclado ou toque.';
     /* Atualiza qte.expected usando move.
*/ qte.expected = move;
     /* Essa declaração usa const para preparar pressure, mantendo essas referências fixas.
*/ const  /* Aqui pressure recebe uma das duas alternativas, conforme o teste.
*/ pressure=qte.eco==='tristeza'?(S.flags.ninfaPressure||0):0;
     /* Essa declaração usa const para preparar seconds, mantendo essas referências fixas.
*/ const  /* Aqui seconds recebe uma das duas alternativas, conforme o teste.
*/ seconds=settings.assist?3.2:qte.eco==='insanidade'?.85: /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.72,1.22-(qte.eco==='tristeza'?S.checkpoint*.055:0)-pressure*.12);
     /* Atualiza qte.tension Clock usando 0.
*/ qte.tensionClock=0;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setTension?.(qte.eco==='tristeza'?.5+S.checkpoint*.06:.68,{ /* Esse campo guarda kind com uma das duas alternativas, conforme o teste.
*/ kind:qte.eco==='tristeza'?'ninfa':'chase', /* Esse campo guarda proximity com 0.65.
*/ proximity:.65, /* Esse campo guarda health com uma das duas alternativas, conforme o teste.
*/ health:qte.eco==='tristeza'?(S.flags.ninfaVitality||100)/100:1, /* Esse campo guarda charging com false.
*/ charging:false});
     /* Esse teste confere se qte.eco é igual a tristeza, e só entra nesse caminho quando a condição passa.
*/ if(qte.eco==='tristeza') /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#prompt-status').textContent='Fôlego '+S.flags.ninfaVitality+' / 100 · Erros '+ninfaErrors+' · Responda antes da onda';
     /* Monta os comandos de reação e o prazo para responder.
*/ prompt(labels[move], all, seconds,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ result => {
       /* Essa declaração usa const para preparar ok, mantendo essas referências fixas.
*/ const  /* Aqui ok recebe o resultado dessa expressão.
*/ ok = result === move;
       /* Essa declaração usa const para preparar current, mantendo essas referências fixas.
*/ const  /* Aqui current recebe qte.
*/ current = qte;
       /* Esse teste confere se current não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!current)  /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Esse teste confere se ok não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!ok) {
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('hit');
         /* Essa declaração usa const para preparar proceed, mantendo essas referências fixas.
*/ const  /* Aqui proceed recebe o resultado de current.on Fail.
*/ proceed =  /* Executa current.on Fail com os valores definidos nessa parte. */ current.onFail?.();
         /* Esse teste confere se proceed é igual a false, e só entra nesse caminho quando a condição passa.
*/ if (proceed === false) {
           /* Atualiza qte usando um valor vazio.
*/ qte = null;
           /* Encerra essa função sem devolver outro valor.
*/ return;
        }
      } else {
         /* Esse teste confere se current.eco é igual a tristeza, e só entra nesse caminho quando a condição passa.
*/ if(current.eco==='tristeza') /* Atualiza ninfa Consecutive usando 0.
*/ ninfaConsecutive=0;
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.(move==='guard'?'block': /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda intercept.
*/ 'intercept', /* Essa posição da lista guarda hold.
*/ 'hold', /* Essa posição da lista guarda push.
*/ 'push'].includes(move)?'grab':'nearMiss',{ /* Esse campo guarda intensity com 0.4.
*/ intensity:.4, /* Esse campo guarda pan com uma das duas alternativas, conforme o teste.
*/ pan:move==='left'?.6:move==='right'?-.6:0});
      }
       /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(settings.assist ? .3 : .16, nextQTE);
    });
  }
   /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint.
*/ function deathScreen(text, restart, kind = 'insanidade') {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza mode usando defeat.
*/ mode = 'defeat';
     /* Atualiza retry usando restart.
*/ retry = restart;
     /* Essa declaração usa const para preparar serial, mantendo essas referências fixas.
*/ const  /* Aqui serial recebe scene Serial.
*/ serial=sceneSerial;
     /* Essa declaração usa let para preparar visual Error, permitindo atualizar esses valores depois.
*/ let  /* Aqui visual Error recebe um texto vazio.
*/ visualError='';
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Uma tentativa terminou. Seu checkpoint foi preservado.');
     /* Essa declaração usa const para preparar finish, mantendo essas referências fixas.
*/ const  /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish =  /* Finaliza essa etapa usando a continuação preparada nesta função. */ () => {
       /* Esse teste confere se serial é diferente de scene Serial, e só entra nesse caminho quando a condição passa.
*/ if(serial!==sceneSerial) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Tentar de novo', text+visualError);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Voltar ao checkpoint', restart),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Configurações', pauseMenu));
    };
                                                                                            
     /* Essa declaração usa const para preparar prepare, mantendo essas referências fixas.
*/ const  /* Prepara os recursos definidos nesse trecho antes de mostrar o resultado.
*/ prepare= /* Prepara os recursos definidos nesse trecho antes de mostrar o resultado. */ async()=>{
       /* Essa declaração usa let para preparar frames, permitindo atualizar esses valores depois.
*/ let  /* Aqui frames recebe uma lista com 0 posições.
*/ frames=[];
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
         /* Esse teste confere se kind é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if(kind==='medo') /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* Espera a imagem estar decodificada antes de desenhar. */ fearJumpscare.decode();
         /* Esse teste confere se kind é igual a insanidade, e só entra nesse caminho quando a condição passa.
*/ if(kind==='insanidade'){
           /* Atualiza frames usando o resultado de list.
*/ frames= /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/01-Frames-500x380/');
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* Executa Promise.all com os valores definidos nessa parte. */ Promise.all( /* Monta uma nova lista transformando cada posição da lista original. */ frames.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ src=>{ /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe uma instância de Image.
*/ image= /* Cria uma instância de Image para usar nesse recurso. */ new Image(); /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src=src; /* Devolve o resultado de image.decode e encerra essa chamada da função.
*/ return  /* Espera a imagem estar decodificada antes de desenhar. */ image.decode();}));
        }
      } /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch{
         /* Atualiza visual Error usando o texto definido nessa parte.
*/ visualError=' A arte do susto não carregou. Confira a pasta assets do pacote completo.';
      }
       /* Esse teste confere se serial é diferente de scene Serial, e só entra nesse caminho quando a condição passa.
*/ if(serial!==sceneSerial) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Esse teste confere se paused está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(paused){ /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(0, /* Essa função recebe nenhum parâmetro e devolve o resultado dessa expressão. */ ()=>void  /* Prepara os recursos definidos nesse trecho antes de mostrar o resultado. */ prepare()); /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda medo.
*/ 'medo', /* Essa posição da lista guarda insanidade.
*/ 'insanidade'].includes(kind)) {
         /* Esse teste confere se window.Audio Sentia.play Scare está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(window.AudioSentia?.playScare) /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando espera o contexto de áudio ficar pronto antes de tocar o susto e respeita pausa, silêncio e cancelamento. */ window.AudioSentia.playScare(kind);
        else  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.(kind==='medo'?'jumpscareFear':'jumpscareInsanity');
      }else  /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.(settings.reduced?'death':'jumpscare');
       /* Esse teste confere se serial é diferente de scene Serial, e só entra nesse caminho quando a condição passa.
*/ if(serial!==sceneSerial) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Esse teste confere se paused está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(paused){ /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(0, /* Essa função recebe nenhum parâmetro e devolve o resultado dessa expressão. */ ()=>void  /* Prepara os recursos definidos nesse trecho antes de mostrar o resultado. */ prepare()); /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Esse teste confere se visual Error está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(visualError){ /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish(); /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Esse teste confere se kind é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if(kind==='medo') {
         /* Essa declaração usa const para preparar canvas, mantendo essas referências fixas.
*/ const  /* Aqui canvas recebe o resultado de document.create Element.
*/ canvas= /* Cria um elemento HTML do tipo canvas. */ document.createElement('canvas');
         /* Atualiza canvas.id usando jumpscare frame.
*/ canvas.id='jumpscare-frame'; /* Define as classes de aparência desse elemento.
*/ canvas.className='jumpscare-frame';
         /* Define o atributo aria label desse elemento.
*/ canvas.setAttribute('aria-label','Hunger avança da escuridão');
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#stage').append(canvas);
         /* Essa declaração usa const para preparar bounds, mantendo essas referências fixas.
*/ const  /* Aqui bounds recebe o resultado de .get Bounding Client Rect.
*/ bounds= /* Mede a posição e o tamanho real do elemento na tela. */ $('#stage').getBoundingClientRect();
         /* Atualiza canvas.width usando o resultado de Math.max.
*/ canvas.width= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1, /* Arredonda o número para o inteiro mais próximo. */ Math.round(bounds.width)); /* Atualiza canvas.height usando o resultado de Math.max.
*/ canvas.height= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1, /* Arredonda o número para o inteiro mais próximo. */ Math.round(bounds.height));
         /* Essa declaração usa const para preparar ctx, mantendo essas referências fixas.
*/ const  /* Aqui ctx recebe o resultado de canvas.get Context.
*/ ctx= /* Obtém o contexto usado para desenhar no canvas. */ canvas.getContext('2d'); /* Atualiza ctx.image Smoothing Enabled usando false.
*/ ctx.imageSmoothingEnabled=false;
         /* Essa declaração usa const para preparar cell, mantendo essas referências fixas.
*/ const  /* Aqui cell recebe o resultado dessa expressão.
*/ cell=fearJumpscare.naturalWidth/7;
         /* Essa declaração usa let para preparar frame, permitindo atualizar esses valores depois.
*/ let  /* Aqui frame recebe uma das duas alternativas, conforme o teste.
*/ frame=settings.reduced?6:0;
         /* Essa declaração usa const para preparar animate, mantendo essas referências fixas.
*/ const  /* Atualiza o próximo quadro dessa sequência de apresentação.
*/ animate= /* Atualiza o próximo quadro dessa sequência de apresentação. */ ()=>{
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(serial!==sceneSerial||!canvas.isConnected) /* Encerra essa função sem devolver outro valor.
*/ return;
           /* Esse teste confere se frame é maior ou igual a 7, e só entra nesse caminho quando a condição passa.
*/ if(frame>=7){ /* Retira esse elemento da página.
*/ canvas.remove(); /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish(); /* Encerra essa função sem devolver outro valor.
*/ return;}
           /* Atualiza ctx.fill Style usando 000.
*/ ctx.fillStyle='#000'; /* Preenche a área retangular com a cor atual do desenho.
*/ ctx.fillRect(0,0,canvas.width,canvas.height);
                                                                                 
           /* Essa declaração usa const para preparar width, mantendo essas referências fixas.
*/ const  /* Aqui width recebe uma das duas alternativas, conforme o teste.
*/ width=settings.reduced? /* Escolhe o menor valor entre os valores recebidos. */ Math.min(canvas.width*.82,canvas.height*.6):canvas.width*(.26+frame/6*.66);
           /* Essa declaração usa const para preparar height, mantendo essas referências fixas.
*/ const  /* Aqui height recebe o resultado dessa expressão.
*/ height=width*fearJumpscare.naturalHeight/cell;
           /* Desenha a imagem ou o recorte indicado no canvas.
*/ ctx.drawImage(fearJumpscare,frame*cell,0,cell,fearJumpscare.naturalHeight,(canvas.width-width)/2,canvas.height*.5-height*.48,width,height);
           /* Atualiza canvas.dataset.frame usando o resultado de String.
*/ canvas.dataset.frame= /* Converte esse valor para texto. */ String( /* Aumenta frame em um para atualizar o contador. */ frame++); /* Atualiza canvas.dataset.reduced usando o resultado de String.
*/ canvas.dataset.reduced= /* Converte esse valor para texto. */ String(settings.reduced);
           /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(settings.reduced?1.05:.15,animate);
        };
         /* Atualiza o próximo quadro dessa sequência de apresentação.
*/ animate(); /* Encerra essa função sem devolver outro valor.
*/ return;
      }
       /* Esse teste confere se frames.length está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(frames.length) {
         /* Essa declaração usa let para preparar n, permitindo atualizar esses valores depois.
*/ let  /* Aqui n recebe uma das duas alternativas, conforme o teste.
*/ n=settings.reduced?frames.length-1:0;
         /* Essa declaração usa const para preparar animate, mantendo essas referências fixas.
*/ const  /* Atualiza o próximo quadro dessa sequência de apresentação.
*/ animate= /* Atualiza o próximo quadro dessa sequência de apresentação. */ ()=>{
           /* Esse teste confere se serial é diferente de scene Serial, e só entra nesse caminho quando a condição passa.
*/ if(serial!==sceneSerial) /* Encerra essa função sem devolver outro valor.
*/ return;
           /* Esse teste confere se n é igual a frames.length, e só entra nesse caminho quando a condição passa.
*/ if(n===frames.length){ /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden=true; /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish(); /* Encerra essa função sem devolver outro valor.
*/ return;}
           /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#effect').src=frames[ /* Aumenta n em um para atualizar o contador. */ n++]; /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden=false;
           /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(settings.reduced?1:.125,animate);
        };
         /* Atualiza o próximo quadro dessa sequência de apresentação.
*/ animate(); /* Encerra essa função sem devolver outro valor.
*/ return;
      }
       /* Esse teste confere se settings.reduced está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(settings.reduced){ /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish(); /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(kind);
       /* Esse teste confere se kind é igual a odio, e só entra nesse caminho quando a condição passa.
*/ if (kind === 'odio') {
         /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Odio/20-jumpscare.png'); /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#actor').classList.add('closeup');
         /* Devolve o resultado de defer e encerra essa chamada da função.
*/ return  /* Agenda uma ação no relógio do jogo, que também respeita a pausa. */ defer(.3, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('odio','jumpscare','closeup'); /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(.4, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(null); /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish();});});
      }
       /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(.7,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(null);
         /* Finaliza essa etapa usando a continuação preparada nesta função.
*/ finish();
      });
    };
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* Prepara os recursos definidos nesse trecho antes de mostrar o resultado. */ prepare();
  }
   /* Explica as esferas e o prazo da vigilância de Hunger.
*/ function watchIntro() {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!S.flags.rescues && S.talks.A1 && ! /* Confere se esse Eco já está na lista de mortos. */ dead('amor'))  /* Devolve o resultado de rescue e encerra essa chamada da função.
*/ return  /* Mostra o auxílio de Candy quando as condições de ajuda foram cumpridas. */ rescue(watchIntro);
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Observatorio/09-observatorio.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('medo', [ /* Essa posição da lista guarda Você continua entrando como se eles fossem ficar esperando.
*/ 'Você continua entrando como se eles fossem ficar esperando.',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Está tentando me assustar.
*/ 'Está tentando me assustar?'],  /* Essa posição da lista guarda Você ainda acha que isso é sobre o que eu quero que você sinta.
*/ 'Você ainda acha que isso é sobre o que eu quero que você sinta.'],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Oito pontos de luz', 'Cada esfera mostra um corredor. Você tem 1,5 segundo para abrir a esfera em que Hunger apareceu. Sustente a visão por um instante para fazê-lo recuar. Cada ciclo passa pelas oito câmeras. Você precisa sustentar a vigilância por 2 minutos. A pausa suspende o tempo.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Começar a vigilância',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('watch');
         /* Inicia os dois minutos de vigilância com as oito esferas.
*/ watchStart();
      }),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Voltar antes de entrar', renderRoom));
    });
  }
                                                                         
   /* Inicia os dois minutos de vigilância com as oito esferas.
*/ function watchStart() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();  /* Atualiza mode usando watch.
*/ mode='watch';
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Observatorio/09-observatorio.png'));  /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands();
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent='Observatório';
     /* Atualiza watch usando um objeto com os campos dessa parte.
*/ watch={ /* Esse campo guarda time com 120.
*/ time:120, /* Esse campo guarda position com o resultado dessa expressão.
*/ position:-1, /* Esse campo guarda stage com 0.
*/ stage:0, /* Esse campo guarda next com 1.5.
*/ next:1.5, /* Esse campo guarda looking com o resultado dessa expressão.
*/ looking:-1, /* Esse campo guarda hold com 0.
*/ hold:0, /* Esse campo guarda repels com 0.
*/ repels:0, /* Esse campo guarda round com 0.
*/ round:0, /* Esse campo guarda visited com uma lista com 0 posições.
*/ visited:[], /* Esse campo guarda spotted com false.
*/ spotted:false, /* Esse campo guarda grace com 0.
*/ grace:0};
     /* Monta a visão geral das esferas de observação.
*/ drawWatch();  /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Encontre Hunger em até 1,5 segundo. Todas as oito esferas fazem parte do circuito.');
  }
   /* Monta os oito controles para escolher o corredor observado.
*/ function cameraButtons() {
     /* Essa declaração usa const para preparar grid, mantendo essas referências fixas.
*/ const  /* Aqui grid recebe o resultado de document.create Element.
*/ grid= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ grid.className='orbs watch-switches';
     /* Esse laço prepara o contador, confere o limite e atualiza a posição a cada repetição.
*/ for( /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i=0;i<8; /* Aumenta i em um para atualizar o contador. */ i++) {
       /* Essa declaração usa const para preparar button, mantendo essas referências fixas.
*/ const  /* Aqui button recebe o resultado de btn.
*/ button= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn( /* Converte esse valor para texto. */ String(i+1), /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(paused||mode!=='watch') /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Atualiza watch.looking usando i.
*/ watch.looking=i; /* Atualiza watch.hold usando 0.
*/ watch.hold=0;
         /* Esse teste confere se watch.position é igual a i, e só entra nesse caminho quando a condição passa.
*/ if(watch.position===i) /* Atualiza watch.spotted usando true.
*/ watch.spotted=true;
         /* Troca para a imagem do corredor e mostra a presença quando ela está ali.
*/ showCamera(i);
      },'orb');
       /* Atualiza button.dataset.camera usando o resultado de String.
*/ button.dataset.camera= /* Converte esse valor para texto. */ String(i); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ grid.append(button);
    }
     /* Devolve grid e encerra essa chamada da função.
*/ return grid;
  }
   /* Cria os indicadores de tempo e avanço da vigilância.
*/ function watchHud() {
     /* Essa declaração usa const para preparar hud, mantendo essas referências fixas.
*/ const  /* Aqui hud recebe o resultado de document.create Element.
*/ hud= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ hud.className='watch-hud';
     /* Essa declaração usa const para preparar countdown, mantendo essas referências fixas.
*/ const  /* Aqui countdown recebe o resultado de document.create Element.
*/ countdown= /* Cria um elemento HTML do tipo strong. */ document.createElement('strong'); /* Define as classes de aparência desse elemento.
*/ countdown.className='watch-deadline';
     /* Essa declaração usa const para preparar progress, mantendo essas referências fixas.
*/ const  /* Aqui progress recebe o resultado de document.create Element.
*/ progress= /* Cria um elemento HTML do tipo span. */ document.createElement('span'); /* Define as classes de aparência desse elemento.
*/ progress.className='watch-progress';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ hud.append(countdown,progress); /* Devolve hud e encerra essa chamada da função.
*/ return hud;
  }
   /* Atualiza a esfera ativa, o aviso de movimento e o tempo restante.
*/ function updateWatchHud() {
     /* Esse teste confere se watch não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!watch) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('[data-camera]').forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ button=>{
       /* Essa declaração usa const para preparar i e moving, mantendo essas referências fixas.
*/ const  /* Aqui i recebe o resultado de Number.
*/ i= /* Converte esse valor para número. */ Number(button.dataset.camera), /* Aqui moving recebe o resultado dessa expressão.
*/ moving=watch.position===i;
       /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ button.classList.toggle('alerting',moving); /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ button.classList.toggle('active',watch.looking===i);
       /* Define o atributo aria pressed desse elemento.
*/ button.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(watch.looking===i));
       /* Define o atributo aria label desse elemento.
*/ button.setAttribute('aria-label','Esfera '+(i+1)+(moving?', movimento detectado':''));
    });
     /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe uma das duas alternativas, conforme o teste.
*/ label=watch.position<0?'Procure a próxima alteração de brilho':watch.looking===watch.position?'Mantenha a visão · '+ /* Arredonda o número para cima. */ Math.ceil( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,.65-watch.hold)*10)/10+' s':'MOVIMENTO · '+ /* Monta um texto numérico com a quantidade indicada de casas decimais. */ Math.max(0,watch.next).toFixed(1)+' s para encontrar';
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('.watch-deadline').forEach( /* Essa função recebe el e devolve o resultado dessa expressão. */ el=> /* Escreve o texto desse elemento sem interpretar marcação HTML. */ el.textContent=label);
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('.watch-progress').forEach( /* Essa função recebe el e devolve o resultado dessa expressão. */ el=> /* Escreve o texto desse elemento sem interpretar marcação HTML. */ el.textContent='Vigilância '+ /* Arredonda o número para cima. */ Math.ceil( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,watch.time))+' s · Esferas usadas '+watch.visited.length+'/8 · Recuos '+watch.repels);
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent=watch.position<0?'Escute. Observe o brilho.':watch.looking===watch.position?'Presença na esfera '+(watch.position+1):'Hunger se moveu · '+ /* Monta um texto numérico com a quantidade indicada de casas decimais. */ Math.max(0,watch.next).toFixed(1)+' s';
  }
   /* Monta a visão geral das esferas de observação.
*/ function drawWatch() {
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p= /* Monta o painel de instruções e ações da cena. */ panel('Pontos de observação','Uma esfera mudou de brilho. Abra a visão certa em até 1,5 segundo e sustente o olhar por um instante.');
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ p.classList.add('observation'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria os indicadores de tempo e avanço da vigilância. */ watchHud(), /* Monta os oito controles para escolher o corredor observado. */ cameraButtons()); /* Atualiza a esfera ativa, o aviso de movimento e o tempo restante.
*/ updateWatchHud();
  }
   /* Troca para a imagem do corredor e mostra a presença quando ela está ali.
*/ function showCamera(i) {
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#action-panel').hidden=true;  /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#action-panel').replaceChildren();  /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/02-Medo-Chase/')[i]);
     /* Esse teste confere se watch.position é igual a i, e só entra nesse caminho quando a condição passa.
*/ if(watch.position===i){ /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('medo',watch.next<1?'terror-presenca-proxima':'terror-espreitar'); /* Define as classes de aparência desse elemento.
*/ $('#actor').className='actor world';}
    else  /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(null);
     /* Essa declaração usa const para preparar controls, mantendo essas referências fixas.
*/ const  /* Aqui controls recebe o resultado de atalho de seleção de elementos.
*/ controls= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#world-controls'); /* Troca o conteúdo desse elemento pelos novos filhos.
*/ controls.replaceChildren();
     /* Essa declaração usa const para preparar hud, mantendo essas referências fixas.
*/ const  /* Aqui hud recebe o resultado de watch Hud.
*/ hud= /* Cria os indicadores de tempo e avanço da vigilância. */ watchHud(); /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ hud.classList.add('camera-hud'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ controls.append(hud, /* Monta os oito controles para escolher o corredor observado. */ cameraButtons());
     /* Essa declaração usa const para preparar nav, mantendo essas referências fixas.
*/ const  /* Aqui nav recebe o resultado de document.create Element.
*/ nav= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ nav.className='room-nav';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ nav.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('← Todas as esferas', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
       /* Esse teste confere se paused está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(paused) /* Encerra essa função sem devolver outro valor.
*/ return; /* Atualiza watch.looking usando o resultado dessa expressão.
*/ watch.looking=-1; /* Atualiza watch.hold usando 0.
*/ watch.hold=0; /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(null);
       /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Observatorio/09-observatorio.png')); /* Troca o conteúdo desse elemento pelos novos filhos.
*/ controls.replaceChildren(); /* Monta a visão geral das esferas de observação.
*/ drawWatch();
    })); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ controls.append(nav); /* Atualiza a esfera ativa, o aviso de movimento e o tempo restante.
*/ updateWatchHud();
  }
   /* Atualiza os prazos e confere se o jogador encontrou Hunger a tempo.
*/ function tickWatch(dt) {
     /* Essa declaração usa const para preparar w, mantendo essas referências fixas.
*/ const  /* Aqui w recebe watch.
*/ w=watch; /* Atualiza w.time usando dt.
*/ w.time-=dt; /* Atualiza w.next usando dt.
*/ w.next-=dt;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(w.position<0&&w.next<=0) {
                                                                           
       /* Essa declaração usa const para preparar circuit, mantendo essas referências fixas.
*/ const  /* Aqui circuit recebe uma lista com 8 posições.
*/ circuit=[ /* Essa posição da lista guarda 0.
*/ 0, /* Essa posição da lista guarda 5.
*/ 5, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 7.
*/ 7, /* Essa posição da lista guarda 3.
*/ 3, /* Essa posição da lista guarda 6.
*/ 6, /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 4.
*/ 4];
       /* Atualiza w.position usando o resultado dessa expressão.
*/ w.position=(circuit[w.round%8]+ /* Arredonda o número para baixo. */ Math.floor(w.round/8)*3)%8; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ w.round++;
       /* Esse teste confere se o resultado de w.visited.includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se esse valor está presente na lista ou no texto. */ w.visited.includes(w.position)) /* Acrescenta esse valor no fim da lista.
*/ w.visited.push(w.position);
       /* Atualiza w.next usando 1.5.
*/ w.next=1.5; /* Atualiza w.hold usando 0.
*/ w.hold=0; /* Atualiza w.spotted usando o resultado dessa expressão.
*/ w.spotted=w.looking===w.position; /* Atualiza w.grace usando 0.
*/ w.grace=0;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('alert');
       /* Esse teste confere se w.looking é menor que 0, e só entra nesse caminho quando a condição passa.
*/ if(w.looking<0) /* Monta a visão geral das esferas de observação.
*/ drawWatch();else  /* Troca para a imagem do corredor e mostra a presença quando ela está ali.
*/ showCamera(w.looking);
    } else  /* Esse teste confere se w.position é maior ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(w.position>=0) {
       /* Esse teste confere se w.looking é igual a w.position, e só entra nesse caminho quando a condição passa.
*/ if(w.looking===w.position){
         /* Atualiza w.spotted usando true.
*/ w.spotted=true; /* Atualiza w.hold usando dt.
*/ w.hold+=dt;
         /* Esse teste confere se w.hold é maior ou igual a 0.65, e só entra nesse caminho quando a condição passa.
*/ if(w.hold>=.65){
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ w.repels++; /* Atualiza w.position usando o resultado dessa expressão.
*/ w.position=-1; /* Atualiza w.next usando o resultado de Math.max.
*/ w.next= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.8,1.65-w.repels*.025); /* Atualiza w.hold usando 0.
*/ w.hold=0;
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('turn');
           /* Esse teste confere se w.looking é menor que 0, e só entra nesse caminho quando a condição passa.
*/ if(w.looking<0) /* Monta a visão geral das esferas de observação.
*/ drawWatch();else  /* Troca para a imagem do corredor e mostra a presença quando ela está ali.
*/ showCamera(w.looking);
        }
      }else  /* Atualiza w.hold usando 0.
*/ w.hold=0;
                                                                                              
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(w.position>=0&&w.next<=0){
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!w.spotted||w.looking!==w.position) /* Devolve o resultado de death Screen e encerra essa chamada da função.
*/ return  /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint. */ deathScreen('Você não encontrou a esfera a tempo. Hunger atravessou o limiar.',watchStart,'medo');
         /* Atualiza w.grace usando dt.
*/ w.grace+=dt;
         /* Esse teste confere se w.grace é maior que 0.75, e só entra nesse caminho quando a condição passa.
*/ if(w.grace>.75) /* Devolve o resultado de death Screen e encerra essa chamada da função.
*/ return  /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint. */ deathScreen('Você desviou antes de fazer a presença recuar.',watchStart,'medo');
      }
    }
     /* Esse teste confere se w.time é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(w.time<=0){ /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('fearChase'); /* Devolve o resultado de fear Chase Intro e encerra essa chamada da função.
*/ return  /* Apresenta a fuga, a lanterna e o caminho até a porta de Pax. */ fearChaseIntro();}
     /* Atualiza a esfera ativa, o aviso de movimento e o tempo restante.
*/ updateWatchHud();
  }
   /* Essa declaração usa const para preparar fear Order e fear Dirs, mantendo essas referências fixas.
*/ const  /* Aqui fear Order recebe uma lista com 8 posições.
*/ fearOrder = [ /* Essa posição da lista guarda 0.
*/ 0,  /* Essa posição da lista guarda 1.
*/ 1,  /* Essa posição da lista guarda 4.
*/ 4,  /* Essa posição da lista guarda 2.
*/ 2,  /* Essa posição da lista guarda 5.
*/ 5,  /* Essa posição da lista guarda 6.
*/ 6,  /* Essa posição da lista guarda 3.
*/ 3,  /* Essa posição da lista guarda 7.
*/ 7],
     /* Aqui fear Dirs recebe uma lista com 8 posições.
*/ fearDirs = [ /* Essa posição da lista guarda up.
*/ 'up',  /* Essa posição da lista guarda left.
*/ 'left',  /* Essa posição da lista guarda up.
*/ 'up',  /* Essa posição da lista guarda right.
*/ 'right',  /* Essa posição da lista guarda down.
*/ 'down',  /* Essa posição da lista guarda left.
*/ 'left',  /* Essa posição da lista guarda right.
*/ 'right',  /* Essa posição da lista guarda up.
*/ 'up'];
   /* Apresenta a fuga, a lanterna e o caminho até a porta de Pax.
*/ function fearChaseIntro() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('medo', [ /* Essa posição da lista guarda Você conseguiu olhar todos eles. Conseguiu entender algum.
*/ 'Você conseguiu olhar todos eles. Conseguiu entender algum?'],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('A visão falhou', 'Corra pelos corredores: segure Shift no PC ou toque em Correr. A lanterna apaga durante a fuga; pressione F ou toque em Acender para recuperar a luz. Sem ela, você não enxerga a saída segura. Procure no fim a porta iluminada com uma xícara: é o quarto de Pax, o refúgio da Calma. Entre por E ou pelo objeto no cenário. Erros aproximam Hunger.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Sair do observatório',  /* Essa função recebe nenhum parâmetro e devolve o resultado de chase Start. */ () =>  /* Prepara a perseguição, a distância da ameaça e o trecho atual. */ chaseStart('medo')));
    });
  }
                                                                           
   /* Prepara a perseguição, a distância da ameaça e o trecho atual.
*/ function chaseStart(kind, index = 0, runLatched = false, carryDanger = null, lampState = null) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(kind==='medo'?'12-carregar-lanterna':'02-punhos-fechados');
     /* Atualiza mode usando chase.
*/ mode = 'chase';
     /* Essa declaração usa const para preparar n, mantendo essas referências fixas.
*/ const  /* Aqui n recebe uma das duas alternativas, conforme o teste.
*/ n = kind === 'medo' ? 8 : 6;
     /* Atualiza chase usando um objeto com os campos dessa parte.
*/ chase = {
       /* Esse campo guarda kind com kind.
*/ kind,
       /* Guarda a posição atual dentro dessa sequência.
*/ index,
       /* Esse campo guarda lamp On com o resultado dessa expressão.
*/ lampOn:lampState?.lampOn??true, /* Esse campo guarda lamp Charge com o resultado dessa expressão.
*/ lampCharge:lampState?.lampCharge??3.4, /* Esse campo guarda lamp Cooldown com 0.
*/ lampCooldown:0,
       /* Esse campo guarda progress com 0.
*/ progress: 0,
       /* Esse campo guarda danger com uma das duas alternativas, conforme o teste.
*/ danger:  /* Confere se o valor é um número finito. */ Number.isFinite(carryDanger)?carryDanger:settings.assist?2:3.8,
       /* Esse campo guarda step Clock com 0.
*/ stepClock:0,  /* Esse campo guarda obstacle Done com false.
*/ obstacleDone:false,  /* Esse campo guarda feedback Left com 0.
*/ feedbackLeft:0,  /* Esse campo guarda tension Clock com 0.
*/ tensionClock:0,  /* Esse campo guarda elapsed com 0.
*/ elapsed:0,
       /* Esse campo guarda run Latched com run Latched.
*/ runLatched,
       /* Esse campo guarda looking Back com false.
*/ lookingBack: false,
       /* Esse campo guarda length com n.
*/ length: n,
       /* Esse campo guarda waiting com false.
*/ waiting: false
    };
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase(kind === 'medo' ? 'fearChase' : 'insaneChase', index);
     /* Monta o corredor e os controles de corrida, olhar e lanterna.
*/ drawChase();
  }
   /* Monta o corredor e os controles de corrida, olhar e lanterna.
*/ function drawChase() {
     /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe chase.
*/ c=chase; /* Esse teste confere se c não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!c) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar backgrounds, mantendo essas referências fixas.
*/ const  /* Aqui backgrounds recebe uma das duas alternativas, conforme o teste.
*/ backgrounds=c.kind==='medo'? /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/02-Medo-Chase/'): /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/04-Labirinto-Comum/190000-pixels/');
     /* Essa declaração usa const para preparar source, mantendo essas referências fixas.
*/ const  /* Aqui source recebe backgrounds.
*/ source=backgrounds[c.kind==='medo'?fearOrder[c.index]:c.index%8];
     /* Escolhe a imagem que fica no fundo da cena.
*/ background(source); /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#actor').hidden=true; /* Remove as partes extras da pose para não deixar asas ou água da cena anterior.
*/ clearIdle();
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('chasing');
     /* Essa declaração usa const para preparar monster, mantendo essas referências fixas.
*/ const  /* Aqui monster recebe uma das duas alternativas, conforme o teste.
*/ monster=c.kind==='medo'? /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Medo/10-terror-emboscada.png'): /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável. */ baseSprite('insanidade','presenca-invasiva');
     /* esse comando prepara a câmera da perseguição e preserva o movimento quando só o corredor está mudando.
*/ Perseguicao.start(source,monster);
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent=c.kind==='medo'?'Corredores de Hunger':'Além da saída';
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective(c.kind==='medo'?'F / Acender: mantenha a lanterna. No fim, entre no quarto de Pax, marcado pela xícara.':'Corra e responda com as setas. No PC, clicar a caixa não desvia.');
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#world-controls').replaceChildren();
     /* Essa declaração usa const para preparar nav, mantendo essas referências fixas.
*/ const  /* Aqui nav recebe o resultado de document.create Element.
*/ nav= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ nav.className='room-nav chase-nav';
     /* Essa declaração usa const para preparar toggle Run, mantendo essas referências fixas.
*/ const  /* Alterna o estado de corrida mantido pelo botão.
*/ toggleRun= /* Alterna o estado de corrida mantido pelo botão. */ ()=>{ /* Atualiza c.run Latched usando a negação de c.run Latched.
*/ c.runLatched=!c.runLatched; /* Define o atributo aria pressed desse elemento.
*/ run.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(c.runLatched));};
     /* Essa declaração usa const para preparar run, mantendo essas referências fixas.
*/ const  /* Aqui run recebe o resultado de btn.
*/ run= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Correr · Shift', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{ /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!e||e.detail===0) /* Alterna o estado de corrida mantido pelo botão.
*/ toggleRun();});
     /* Atualiza run.onpointerdown usando uma função para executar quando for chamada.
*/ run.onpointerdown= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e=>{ /* Esse teste confere se e.button é diferente de 0, e só entra nesse caminho quando a condição passa.
*/ if(e.button!==0) /* Encerra essa função sem devolver outro valor.
*/ return; /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Alterna o estado de corrida mantido pelo botão.
*/ toggleRun();};
     /* Atualiza run.id usando chase run.
*/ run.id='chase-run'; /* Define o atributo aria pressed desse elemento.
*/ run.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(!!c.runLatched));
     /* Essa declaração usa const para preparar back, mantendo essas referências fixas.
*/ const  /* Aqui back recebe o resultado de btn.
*/ back= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Olhar para trás · B', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza c.looking Back usando a negação de c.looking Back.
*/ c.lookingBack=!c.lookingBack; /* Define o atributo aria pressed desse elemento.
*/ back.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(c.lookingBack));});
     /* Atualiza back.id usando chase back.
*/ back.id='chase-back'; /* Define o atributo aria pressed desse elemento.
*/ back.setAttribute('aria-pressed','false'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ nav.append(run,back);
     /* Esse teste confere se c.kind é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if(c.kind==='medo'){
       /* Essa declaração usa const para preparar lamp, mantendo essas referências fixas.
*/ const  /* Aqui lamp recebe o resultado de btn.
*/ lamp= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Lanterna · F', /* Essa função recebe nenhum parâmetro e devolve o resultado de relight Chase Lamp. */ ()=> /* Reacende a lanterna respeitando o pequeno intervalo entre usos. */ relightChaseLamp()); /* Atualiza lamp.id usando chase lamp.
*/ lamp.id='chase-lamp'; /* Define o atributo aria pressed desse elemento.
*/ lamp.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(c.lampOn)); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ nav.append(lamp);
       /* Essa declaração usa const para preparar refuge, mantendo essas referências fixas.
*/ const  /* Aqui refuge recebe o resultado de btn.
*/ refuge= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('☕ QUARTO DE PAX · ENTRAR [E]', /* Essa função recebe nenhum parâmetro e devolve o resultado de enter Pax Refuge. */ ()=> /* Confere a luz e a proximidade antes de entrar no quarto de Pax. */ enterPaxRefuge(c));
       /* Atualiza refuge.id usando chase refuge.
*/ refuge.id='chase-refuge'; /* Define as classes de aparência desse elemento.
*/ refuge.className='chase-refuge'; /* Define se esse elemento fica escondido ou disponível na tela.
*/ refuge.hidden=true; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#world-controls').append(refuge);
    }
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#world-controls').append(nav); /* Atualiza o estado da lanterna e esconde a passagem segura quando está escuro.
*/ updateChaseLamp();
  }
   /* Confere a luz e a proximidade antes de entrar no quarto de Pax.
*/ function enterPaxRefuge(c) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(c!==chase||paused||c.kind!=='medo'||c.index!==c.length-1||!c.lampOn||c.progress<2.6*.65) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('fearRoom'); /* Monta o confronto com Hunger no quarto de Pax e seu retorno à forma vulnerável.
*/ fearRoom();
  }
   /* Reacende a lanterna respeitando o pequeno intervalo entre usos.
*/ function relightChaseLamp() {
     /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe chase.
*/ c=chase; /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!c||c.kind!=='medo'||paused||c.lampCooldown>0) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza c.lamp On usando true.
*/ c.lampOn=true; /* Atualiza c.lamp Charge usando o resultado dessa expressão.
*/ c.lampCharge=3.1+(c.index%3)*.45; /* Atualiza c.lamp Cooldown usando 0.3.
*/ c.lampCooldown=.3;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('turn',{ /* Esse campo guarda intensity com 0.28.
*/ intensity:.28}); /* Atualiza o estado da lanterna e esconde a passagem segura quando está escuro.
*/ updateChaseLamp();
  }
   /* Atualiza o estado da lanterna e esconde a passagem segura quando está escuro.
*/ function updateChaseLamp() {
     /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe chase.
*/ c=chase; /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!c||c.kind!=='medo') /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#stage').classList.toggle('lamp-out',!c.lampOn);
     /* Essa declaração usa const para preparar lamp, mantendo essas referências fixas.
*/ const  /* Aqui lamp recebe o resultado de atalho de seleção de elementos.
*/ lamp= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#chase-lamp');
     /* Esse teste confere se lamp está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(lamp){ /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ lamp.textContent=c.lampOn?'Lanterna '+ /* Arredonda o número para cima. */ Math.ceil(c.lampCharge)+' s · F':'ACENDER LANTERNA · F'; /* Define o atributo aria pressed desse elemento.
*/ lamp.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(c.lampOn));}
     /* Essa declaração usa const para preparar refuge, mantendo essas referências fixas.
*/ const  /* Aqui refuge recebe o resultado de atalho de seleção de elementos.
*/ refuge= /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#chase-refuge'); /* Esse teste confere se refuge está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(refuge) /* Define se esse elemento fica escondido ou disponível na tela.
*/ refuge.hidden=!(c.lampOn&&c.index===c.length-1&&c.progress>=2.6*.65);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(c.waiting&&c.index===c.length-1){
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#prompt-label').textContent=c.lampOn?'A porta da xícara: entre no REFÚGIO DE PAX.':'ESCURO — acenda a lanterna para encontrar o refúgio!';
       /* Percorre os itens e executa a função indicada em cada um.
*/ $('#prompt-actions').querySelectorAll('button').forEach( /* Essa função recebe b e devolve o resultado dessa expressão. */ b=> /* Define se esse elemento fica escondido ou disponível na tela. */ b.hidden=!c.lampOn);
    }
  }
   /* Interrompe a tentativa e prepara o retorno ao trecho seguro da perseguição.
*/ function chaseFailure(c,text) {
     /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint.
*/ deathScreen(text, /* Essa função recebe nenhum parâmetro e devolve o resultado de chase Start. */ ()=> /* Prepara a perseguição, a distância da ameaça e o trecho atual. */ chaseStart(c.kind, /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,c.index-1)),c.kind);
  }
   /* Pede a direção ou ação correta para atravessar o próximo trecho.
*/ function chaseDecision(c,label,dir,isTurn) {
     /* Atualiza c.waiting usando true.
*/ c.waiting=true;
     /* Essa declaração usa const para preparar labels, mantendo essas referências fixas.
*/ const  /* Aqui labels recebe um objeto com os campos dessa parte.
*/ labels={ /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left:'← / A · Esquerda', /* Esse campo guarda up com W Frente.
*/ up:'↑ / W · Frente', /* Define a posição ou o estado ligado ao lado direito.
*/ right:'→ / D · Direita', /* Esse campo guarda down com S Abaixar.
*/ down:'↓ / S · Abaixar'};
     /* Essa declaração usa const para preparar refuge, mantendo essas referências fixas.
*/ const  /* Aqui refuge recebe o resultado dessa expressão.
*/ refuge=c.kind==='medo'&&c.index===c.length-1&&isTurn; /* Esse teste confere se refuge está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(refuge) /* Atualiza dir usando refuge.
*/ dir='refuge';
     /* Essa declaração usa const para preparar seconds, mantendo essas referências fixas.
*/ const  /* Aqui seconds recebe uma das duas alternativas, conforme o teste.
*/ seconds=settings.assist?3:isTurn?1.15:1.05;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('alert');
     /* Monta os comandos de reação e o prazo para responder.
*/ prompt(refuge?'A porta da xícara: entre no REFÚGIO DE PAX.':label,refuge?[{ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'refuge', /* Define o texto mostrado na opção ou no controle.
*/ label:'Entrar no quarto de Pax · E'}]: /* Monta uma nova lista transformando cada posição da lista original. */ Object.entries(labels).map( /* Essa função recebe valores separados da lista e devolve um objeto com os campos dessa parte. */ ([id,label])=>({ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id, /* Define o texto mostrado na opção ou no controle.
*/ label})),seconds, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ r=>{
       /* Esse teste confere se r é diferente de dir, e só entra nesse caminho quando a condição passa.
*/ if(r!==dir){
         /* Atualiza c.danger usando uma das duas alternativas, conforme o teste.
*/ c.danger+=settings.assist?1.8:2.75; /* Atualiza c.progress usando 0.58.
*/ c.progress*=.58; /* Atualiza c.waiting usando false.
*/ c.waiting=false; /* Atualiza mode usando chase.
*/ mode='chase';
         /* Atualiza c.turn Feedback usando blocked.
*/ c.turnFeedback='blocked'; /* Atualiza c.feedback Left usando 0.65.
*/ c.feedbackLeft=.65;
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('hit');
         /* Esse teste confere se c.danger é maior ou igual a 8, e só entra nesse caminho quando a condição passa.
*/ if(c.danger>=8) /* Devolve o resultado de chase Failure e encerra essa chamada da função.
*/ return  /* Interrompe a tentativa e prepara o retorno ao trecho seguro da perseguição. */ chaseFailure(c,'Você perdeu distância no obstáculo. A presença alcançou você.');
         /* Encerra essa função sem devolver outro valor.
*/ return;
      }
       /* Atualiza c.turn Feedback usando dir.
*/ c.turnFeedback=dir; /* Atualiza c.feedback Left usando 0.4.
*/ c.feedbackLeft=.4; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('turn',{ /* Esse campo guarda pan com uma das duas alternativas, conforme o teste.
*/ pan:dir==='left'?-.6:dir==='right'?.6:0, /* Esse campo guarda intensity com 0.45.
*/ intensity:.45});
       /* Atualiza c.waiting usando false.
*/ c.waiting=false; /* Atualiza mode usando chase.
*/ mode='chase';
       /* Esse teste confere se is Turn não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!isTurn) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ c.index++;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(c.kind==='medo'&&c.index===4&&! /* Confere se esse Eco já está na lista de mortos. */ dead('culpa')) /* Devolve o resultado de culpa Cut e encerra essa chamada da função.
*/ return  /* Interrompe a perseguição para mostrar o acontecimento com Lúmen. */ culpaCut(c);
       /* Esse teste confere se c.index é maior ou igual a c.length, e só entra nesse caminho quando a condição passa.
*/ if(c.index>=c.length){ /* Esse teste confere se c.kind é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if(c.kind==='medo'){ /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('fearRoom'); /* Monta o confronto com Hunger no quarto de Pax e seu retorno à forma vulnerável.
*/ fearRoom();}else{ /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('interrogation'); /* Monta as perguntas de Cassidy usando os acontecimentos da partida.
*/ interrogation();} /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Atualiza c.progress usando 0.
*/ c.progress=0; /* Atualiza c.obstacle Done usando false.
*/ c.obstacleDone=false; /* Atualiza c.looking Back usando false.
*/ c.lookingBack=false;
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase(c.kind==='medo'?'fearChase':'insaneChase',c.index); /* Monta o corredor e os controles de corrida, olhar e lanterna.
*/ drawChase();
    });
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#prompt').classList.add('chase-prompt');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#prompt-status').textContent=c.kind==='insanidade'&&settings.device==='pc'&&!settings.assist?'Use a seta ou WASD indicado. O clique não conta.':refuge?'E ou a porta iluminada. Só a luz revela o refúgio.':'Setas / WASD ou botões de toque. Lanterna: F.';
     /* Atualiza o estado da lanterna e esconde a passagem segura quando está escuro.
*/ updateChaseLamp();
  }
   /* Avança a corrida e calcula a aproximação do perseguidor.
*/ function tickChase(dt) {
     /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe chase.
*/ c=chase; /* Esse teste confere se c não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!c) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar running e distance, mantendo essas referências fixas.
*/ const  /* Aqui running recebe a negação de a negação de o resultado dessa expressão.
*/ running=!!(keysHeld.run||c.runLatched), /* Aqui distance recebe uma das duas alternativas, conforme o teste.
*/ distance=c.kind==='medo'?2.6:2.9;
     /* Atualiza c.elapsed usando dt.
*/ c.elapsed+=dt;
     /* Esse teste confere se c.kind é igual a medo, e só entra nesse caminho quando a condição passa.
*/ if(c.kind==='medo'){
       /* Atualiza c.lamp Cooldown usando o resultado de Math.max.
*/ c.lampCooldown= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,c.lampCooldown-dt);
       /* Esse teste confere se c.lamp On está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(c.lampOn){ /* Atualiza c.lamp Charge usando dt.
*/ c.lampCharge-=dt; /* Esse teste confere se c.lamp Charge é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(c.lampCharge<=0){ /* Atualiza c.lamp On usando false.
*/ c.lampOn=false; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('alert',{ /* Esse campo guarda intensity com 0.25.
*/ intensity:.25});}}
       /* Atualiza o estado da lanterna e esconde a passagem segura quando está escuro.
*/ updateChaseLamp();
    }
     /* Atualiza c.feedback Left usando o resultado de Math.max.
*/ c.feedbackLeft= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,c.feedbackLeft-dt); /* Esse teste confere se c.feedback Left não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!c.feedbackLeft) /* Atualiza c.turn Feedback usando um valor vazio.
*/ c.turnFeedback=null;
                                                                
     /* Esse teste confere se c.waiting não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!c.waiting) /* Atualiza c.progress usando o resultado dessa expressão.
*/ c.progress+=dt*(running&&!c.lookingBack?1:.1);
     /* Atualiza c.danger usando o resultado de Math.max.
*/ c.danger= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(settings.assist?1:2.2,c.danger+dt*(c.waiting?.22:running&&!c.lookingBack?(settings.assist?-.09:-.025):c.lookingBack?1.65:2.45));
     /* Atualiza c.step Clock usando dt.
*/ c.stepClock+=dt;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!c.waiting&&c.stepClock>(running?.31:.58)){ /* Atualiza c.step Clock usando 0.
*/ c.stepClock=0; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('step',{ /* Esse campo guarda pace com uma das duas alternativas, conforme o teste.
*/ pace:running?'run':'walk', /* Esse campo guarda surface com stone.
*/ surface:'stone', /* Esse campo guarda intensity com 0.55.
*/ intensity:.55});}
     /* Atualiza c.presence Clock usando o resultado dessa expressão.
*/ c.presenceClock=(c.presenceClock||0)+dt;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(c.danger>3&&c.presenceClock>1.25&&!c.waiting){ /* Atualiza c.presence Clock usando 0.
*/ c.presenceClock=0; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('approach',{ /* Esse campo guarda pan com o resultado dessa expressão.
*/ pan: /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin(c.index*2.1)*.65, /* Esse campo guarda distance com o resultado de Math.max.
*/ distance: /* Escolhe o maior valor entre os valores recebidos. */ Math.max(.5,(8-c.danger)*.4), /* Esse campo guarda intensity com 0.45.
*/ intensity:.45});}
                                                                                                 
     /* Essa declaração usa const para preparar ratio e progression, mantendo essas referências fixas.
*/ const  /* Aqui ratio recebe o resultado de Math.min.
*/ ratio= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1,c.progress/distance), /* Aqui progression recebe o resultado dessa expressão.
*/ progression=c.index/ /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,c.length-1);
     /* Essa declaração usa const para preparar surge, mantendo essas referências fixas.
*/ const  /* Aqui surge recebe o resultado dessa expressão.
*/ surge= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, /* Calcula a componente da onda ou do movimento pelo seno do ângulo. */ Math.sin((ratio-.12)*Math.PI))*(.38+progression*.35);
     /* Essa declaração usa const para preparar proximity, mantendo essas referências fixas.
*/ const  /* Aqui proximity recebe o resultado de Math.min.
*/ proximity= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1,c.danger/8);
     /* Essa declaração usa const para preparar tension, mantendo essas referências fixas.
*/ const  /* Aqui tension recebe o resultado de Math.min.
*/ tension= /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1,proximity*.72+surge*.32+progression*.12+(c.waiting?.08:0));
     /* Atualiza c.tension Clock usando dt.
*/ c.tensionClock+=dt;
     /* Esse teste confere se c.tension Clock é maior ou igual a 0.12, e só entra nesse caminho quando a condição passa.
*/ if(c.tensionClock>=.12){ /* Atualiza c.tension Clock usando 0.
*/ c.tensionClock=0; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setTension?.(tension,{ /* Esse campo guarda kind com chase.
*/ kind:'chase', /* Esse campo guarda proximity com proximity.
*/ proximity, /* Esse campo guarda health com 1.
*/ health:1, /* Esse campo guarda charging com c.waiting.
*/ charging:c.waiting});}
     /* esse comando atualiza o desenho da corrida, da ameaça e da lanterna usando o estado da perseguição.
*/ Perseguicao.draw(dt,{ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...c, /* Esse campo guarda running com running.
*/ running, /* Esse campo guarda distance com distance.
*/ distance, /* Esse campo guarda proximity com proximity.
*/ proximity, /* Esse campo guarda surge com surge.
*/ surge, /* Esse campo guarda reduced com settings.reduced.
*/ reduced:settings.reduced, /* Esse campo guarda catching Up com o resultado dessa expressão.
*/ catchingUp:c.danger>5.5, /* Esse campo guarda threat Cue com tension.
*/ threatCue:tension});
     /* Essa declaração usa const para preparar presence, mantendo essas referências fixas.
*/ const  /* Aqui presence recebe uma das duas alternativas, conforme o teste.
*/ presence=c.danger>6?'MUITO PERTO':c.danger>4.6?'A presença se aproxima':'Passos atrás de você';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent='Passagem '+(c.index+1)+' / '+c.length+' · '+(running?'Correndo':'CORRA · Shift ou botão')+' · '+presence+(c.kind==='medo'&&!c.lampOn?' · SEM LUZ — F / ACENDER':'');
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#chase-run')?.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(running));
     /* Esse teste confere se c.danger é maior ou igual a 8, e só entra nesse caminho quando a condição passa.
*/ if(c.danger>=8) /* Devolve o resultado de chase Failure e encerra essa chamada da função.
*/ return  /* Interrompe a tentativa e prepara o retorno ao trecho seguro da perseguição. */ chaseFailure(c,'A presença alcançou você. Corra, reaja aos obstáculos e evite olhar para trás por muito tempo.');
     /* Esse teste confere se c.waiting está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(c.waiting) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!c.obstacleDone&& /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda 1.
*/ 1, /* Essa posição da lista guarda 2.
*/ 2, /* Essa posição da lista guarda 5.
*/ 5].includes(c.index)&&c.progress>=distance*.44){
       /* Atualiza c.obstacle Done usando true.
*/ c.obstacleDone=true;
       /* Essa declaração usa const para preparar low, mantendo essas referências fixas.
*/ const  /* Aqui low recebe o resultado dessa expressão.
*/ low=c.index!==2;
       /* Devolve o resultado de chase Decision e encerra essa chamada da função.
*/ return  /* Pede a direção ou ação correta para atravessar o próximo trecho. */ chaseDecision(c,low?'Uma viga atravessou o corredor — passe ABAIXADO!':'O piso cede à direita — desvie à ESQUERDA!',low?'down':'left',false);
    }
     /* Esse teste confere se c.progress é maior ou igual a distance, e só entra nesse caminho quando a condição passa.
*/ if(c.progress>=distance){
       /* Essa declaração usa const para preparar dir, mantendo essas referências fixas.
*/ const  /* Aqui dir recebe uma das duas alternativas, conforme o teste.
*/ dir=c.kind==='medo'?fearDirs[c.index]:[ /* Essa posição da lista guarda up.
*/ 'up', /* Essa posição da lista guarda left.
*/ 'left', /* Essa posição da lista guarda right.
*/ 'right', /* Essa posição da lista guarda up.
*/ 'up', /* Essa posição da lista guarda right.
*/ 'right', /* Essa posição da lista guarda up.
*/ 'up'][c.index];
       /* Essa declaração usa const para preparar labels, mantendo essas referências fixas.
*/ const  /* Aqui labels recebe um objeto com os campos dessa parte.
*/ labels={ /* Esse campo guarda up com Seguir em frente.
*/ up:'Seguir em frente', /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left:'Virar à esquerda', /* Define a posição ou o estado ligado ao lado direito.
*/ right:'Virar à direita', /* Esse campo guarda down com Passar abaixado.
*/ down:'Passar abaixado'};
       /* Pede a direção ou ação correta para atravessar o próximo trecho.
*/ chaseDecision(c,'A passagem segura: '+labels[dir],dir,true);
    }
  }
   /* Interrompe a perseguição para mostrar o acontecimento com Lúmen.
*/ function culpaCut(saved) {
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('culpa', [{
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'O que aconteceu? Por que vocês estão—',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'abalado'
    }, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Hunger? Eu só queria saber se você estava bem.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'},  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Medo interrompe o caminho. Ele se volta para Culpa, decide e ataca. Não foi um golpe que errou você.'], {
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Ela não termina a frase.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'morreu',
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função recebe nenhum parâmetro e devolve o resultado de kill. */ () =>  /* Registra a morte do Eco uma única vez e atualiza suas consequências na história. */ kill('culpa', 'Medo a matou intencionalmente durante a perseguição. A razão específica não foi esclarecida.')
    }, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A presença se afasta de Lúmen. Ele não se levanta. Hunger volta o rosto para você, e a perseguição continua sem ele.'}],  /* Essa função recebe nenhum parâmetro e devolve o resultado de chase Start. */ () =>  /* Prepara a perseguição, a distância da ameaça e o trecho atual. */ chaseStart('medo', saved.index, saved.runLatched, saved.danger, saved));
  }
   /* Monta o confronto com Hunger no quarto de Pax e seu retorno à forma vulnerável.
*/ function fearRoom() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg('calma'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('medo', [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda Você reconhece o refúgio. A xícara continua ali. Pax não.
*/ 'Você reconhece o refúgio. A xícara continua ali. Pax, não.'],  /* Essa posição da lista guarda De todos os lugares.
*/ 'De todos os lugares…',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Você matou ela.
*/ 'Você matou ela.'],  /* Essa posição da lista guarda Eu sei o que fiz.
*/ 'Eu sei o que fiz.',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda E veio me dizer o que eu fiz.
*/ 'E veio me dizer o que eu fiz?'],  /* Essa posição da lista guarda Olha onde você foi procurar abrigo.
*/ 'Olha onde você foi procurar abrigo.',  /* Essa posição da lista guarda Pax teria deixado você entrar.
*/ 'Pax teria deixado você entrar.',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Ele deixou.
*/ 'Ele deixou.'], {
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'E você sabia disso.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'abalado'
    }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('medo');
       /* Prepara a sequência de movimentos e as consequências dos erros.
*/ startQTE([ /* Essa posição da lista guarda intercept.
*/ 'intercept',  /* Essa posição da lista guarda hold.
*/ 'hold',  /* Essa posição da lista guarda push.
*/ 'push'],  /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ () =>  /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say('medo', [{
         /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Eu só queria que eles continuassem aqui.',
         /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
      },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Isso não muda o que você fez.
*/ 'Isso não muda o que você fez.'], {
         /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Também não muda o que você fez.',
         /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
      }, {
         /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
           /* Define o texto mostrado na opção ou no controle.
*/ label: 'Poupar',
           /* Define a ação executada quando essa opção é escolhida.
*/ go:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Atualiza S.flags.spared Fear usando true.
*/ S.flags.sparedFear = true;
             /* Atualiza S.pending.medo usando S.activity.
*/ S.pending.medo = S.activity;
             /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Medo saiu vivo', 'Você o deixou ir enquanto chorava.');
             /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('explore');
             /* Monta a praça e os cartões dos quartos já disponíveis.
*/ hub();
          }
        }, {
           /* Define o texto mostrado na opção ou no controle.
*/ label: 'Matar',
           /* Define a ação executada quando essa opção é escolhida.
*/ go:  /* Essa função recebe nenhum parâmetro e devolve o resultado de say. */ () =>  /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa. */ say('medo', [{
             /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
             /* Guarda o texto que essa parte vai mostrar.
*/ text: 'A forma que assustava já tinha cedido. Hunger recua até a parede do refúgio.',
             /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
          }, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu não vou correr atrás de você. Não agora.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Os dedos compridos cobrem parte do rosto. Sem a silhueta dos corredores, ele parece menor diante da xícara deixada por Pax.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}, { /* Indica quem está falando nessa linha.
*/ who:'Você', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu ainda lembro dos seus passos.'}, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu também vou lembrar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'O protagonista se aproxima. Não há ataque vindo de Hunger para interceptar desta vez.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você encontrou um lugar seguro e ainda trouxe isso para dentro.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'}, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A mão de Hunger tenta alcançar a parede. O movimento para antes de encontrar apoio.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu',
             /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função recebe nenhum parâmetro e devolve o resultado de kill. */ () =>  /* Registra a morte do Eco uma única vez e atualiza suas consequências na história. */ kill('medo', 'Morto pelo protagonista no quarto de Pax, depois de voltar à forma habitual.')
          }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('explore');
             /* Monta a praça e os cartões dos quartos já disponíveis.
*/ hub();
          })
        }]
      }], hub),  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint.
*/ deathScreen('Você não conseguiu impedir a aproximação.', fearRoom, 'medo');
         /* Devolve false e encerra essa chamada da função.
*/ return false;
      });
    });
  }
                                                                                           
   /* Prepara a fala e a sequência de água da etapa atual de Ninfa.
*/ function ninfaStart(index = 0, intro = false) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands('09-pare');
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('ninfa', index);
     /* Atualiza S.flags.ninfa Defeated usando false.
*/ S.flags.ninfaDefeated=false;
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setTension?.(.3+index*.07,{ /* Esse campo guarda kind com ninfa.
*/ kind:'ninfa', /* Esse campo guarda proximity com o resultado dessa expressão.
*/ proximity:.35+index*.08, /* Esse campo guarda health com o resultado dessa expressão.
*/ health:(S.flags.ninfaVitality||100)/100, /* Esse campo guarda charging com false.
*/ charging:false});
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(intro||! /* Confere se o valor é um número finito. */ Number.isFinite(S.flags.ninfaVitality)) /* Atualiza S.flags.ninfa Vitality usando 100.
*/ S.flags.ninfaVitality=100;
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/03-Abismo-Tristeza/02-Base/')[index % 5]);
     /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('tristeza', 'base', 'combat');
     /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/04-Tristeza/01-prontidao.png') ||  /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável. */ baseSprite('tristeza');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent = 'Mar da Culpa';
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Resista às ondas e escute o que Ninfa tem a dizer.');
     /* Esse teste confere se intro está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (intro) {
       /* Atualiza ninfa Errors usando 0.
*/ ninfaErrors = 0;
       /* Atualiza ninfa Consecutive usando 0.
*/ ninfaConsecutive = 0;
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('A água sobe', 'Ninfa ataca de longe. Respostas têm 4 segundos; hesitar aumenta a pressão da próxima onda. As sequências aceleram a cada etapa. Cada erro custa fôlego; dois erros seguidos ou três no total encerram a tentativa. Cada fala é um checkpoint. O modo assistido amplia os prazos.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Continuar',  /* Essa função recebe nenhum parâmetro e devolve o resultado de ninfa Start. */ () =>  /* Prepara a fala e a sequência de água da etapa atual de Ninfa. */ ninfaStart(index)));
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe D.ninfa.index.
*/ c = D.ninfa[index];
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('tristeza', [{
       /* Guarda o texto que essa parte vai mostrar.
*/ text: c.text,
       /* Escolhe a pose do personagem para essa fala.
*/ pose: [ /* Essa posição da lista guarda aura emocional.
*/ 'aura-emocional', /* Essa posição da lista guarda esferas suspensas.
*/ 'esferas-suspensas', /* Essa posição da lista guarda lancar esfera.
*/ 'lancar-esfera', /* Essa posição da lista guarda aura emocional.
*/ 'aura-emocional', /* Essa posição da lista guarda esferas suspensas.
*/ 'esferas-suspensas', /* Essa posição da lista guarda lancar esfera.
*/ 'lancar-esfera'][index]
    }, {
       /* Define o prazo da escolha ou da reação rápida.
*/ seconds: settings.assist?7:4,
       /* Define a consequência quando o prazo termina.
*/ onTimeout: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza S.flags.ninfa Pressure usando 1.
*/ S.flags.ninfaPressure=1; /* Atualiza S.flags.ninfa Vitality usando o resultado de Math.max.
*/ S.flags.ninfaVitality= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(1,S.flags.ninfaVitality-12);},
       /* Guarda a fala usada quando o jogador não responde a tempo.
*/ silence: c.silence,
       /* Reúne as respostas que o jogador pode escolher.
*/ choices:  /* Monta uma nova lista transformando cada posição da lista original. */ c.answers.map( /* Essa função recebe a e i e devolve um objeto com os campos dessa parte. */ (a,i) => ({
         /* Define o texto mostrado na opção ou no controle.
*/ label: a[0],
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: a[1],
         /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza S.flags.ninfa Pressure usando uma das duas alternativas, conforme o teste.
*/ S.flags.ninfaPressure=i===c.answers.length-1?1:0;}
      }))
    }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('tristeza', 'base', 'combat');
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/04-Tristeza/07-controlar-esferas.png') ||  /* Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável. */ baseSprite('tristeza');
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#effect').src =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/05-Efeitos-Tristeza/03-esferas-orbita.png');
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#effect').hidden = false;
       /* Prepara a sequência de movimentos e as consequências dos erros.
*/ startQTE(c.moves,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Esse teste confere se index é menor que 5, e só entra nesse caminho quando a condição passa.
*/ if (index < 5)  /* Prepara a fala e a sequência de água da etapa atual de Ninfa.
*/ ninfaStart(index + 1);else  /* Mostra o fim do confronto aquático e registra a ausência de Ninfa.
*/ ninfaEnd();
      },  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ ninfaErrors++;
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ ninfaConsecutive++;
         /* Atualiza S.flags.ninfa Vitality usando o resultado de Math.max.
*/ S.flags.ninfaVitality= /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,S.flags.ninfaVitality-(settings.assist?20:34));
         /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('impact'); /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de .class List.remove. */ ()=> /* Retira esse elemento da página. */ $('#stage').classList.remove('impact'),350);
         /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#prompt-status').textContent = 'Impacto! Fôlego '+S.flags.ninfaVitality+' / 100 · Erros: ' + ninfaErrors + ' · seguidos: ' + ninfaConsecutive;
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (ninfaErrors >= 3 || ninfaConsecutive >= 2 || S.flags.ninfaVitality<=0) {
           /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint.
*/ deathScreen('A água fechou a passagem. Retome a fala de Ninfa.',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Atualiza ninfa Errors usando 0.
*/ ninfaErrors = 0;
             /* Atualiza ninfa Consecutive usando 0.
*/ ninfaConsecutive = 0;
             /* Atualiza S.flags.ninfa Vitality usando 100.
*/ S.flags.ninfaVitality=100;
             /* Prepara a fala e a sequência de água da etapa atual de Ninfa.
*/ ninfaStart(index);
          }, 'tristeza');
           /* Devolve false e encerra essa chamada da função.
*/ return false;
        }
         /* Devolve true e encerra essa chamada da função.
*/ return true;
      }, 'tristeza');
    });
  }
   /* Mostra o fim do confronto aquático e registra a ausência de Ninfa.
*/ function ninfaEnd() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza S.flags.ninfa Defeated usando true.
*/ S.flags.ninfaDefeated=true;
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/03-Abismo-Tristeza/02-Base/')[0]);
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('tristeza', [{
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Então não chama o que aconteceu de não sentir nada.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
    }, {
       /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu te contei onde doía porque achei que você ia entender. Não porque queria te ensinar a machucar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Você', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu só queria parar de ter medo do que sentia.'
    }, {
       /* Guarda o texto que essa parte vai mostrar.
*/ text:'E eu queria que você tivesse ficado para ouvir.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'
    }, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A água escurece. Você ainda reconhece o último olhar antes de perder a vista dela.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/04-Tristeza/16-derrotada.png');}}, {
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Quando o caminho retorna, Ninfa não vem junto.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu',
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => { /* Registra a morte do Eco uma única vez e atualiza suas consequências na história.
*/ kill('tristeza', 'Morreu no desfecho do confronto aquático, depois de reconhecer a traição. A água e o corte ocultaram o fim.'); /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('loss-scene'); /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#hands').hidden=true; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('death');}
    }, { /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você continua esperando que alguma coisa pare de doer. O mar fica sem a voz dela. O que ela soube sobre você não desaparece com a água.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu'}],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('A confiança de Ninfa', 'Ela percebeu que suas confidências sobre os irmãos foram usadas pelo protagonista.');
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('explore');
       /* Monta a praça e os cartões dos quartos já disponíveis.
*/ hub();
    });
  }
   /* Apresenta a arena e os comandos do confronto com Beerus.
*/ function odioIntro() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Arena-Odio/01-frente.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('odio', [{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não usa a voz deles para passar por mim.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'chase'},  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Você não deixou outra passagem.
*/ 'Você não deixou outra passagem.'], { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você faz a mesma pergunta até ouvir o que pode usar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'agarre'}, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Candy não vai entender isso como você.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'grito'}],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('A arena', 'Clique e arraste para olhar, ou use as setas. No celular, arraste o dedo para girar e use os controles para andar. PC: W/S avança e recua, A/D desloca, setas giram, F ataca, Espaço protege, E interage e Q lança a luz recebida. No celular, use o direcional e os botões. Aproxime-se para atingir, recue durante o preparo dos ataques.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Entrar',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('odio');
         /* Liga o combate em primeira pessoa ao inventário e à história.
*/ startArena(false);
      }));
    });
  }
                                                        
   /* Liga o combate em primeira pessoa ao inventário e à história.
*/ function startArena(free) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza mode usando arena.
*/ mode = 'arena';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent = 'Arena · ' + (free ? 'depois do silêncio' : 'Ódio');
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective(free ? 'Pegue a espada' : 'Sobreviva ao último protetor.');
     /* Essa declaração usa const para preparar hud, mantendo essas referências fixas.
*/ const  /* Aqui hud recebe o resultado de document.create Element.
*/ hud =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ hud.className = 'fps-hud';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#world-controls').append(hud);
     /* Essa declaração usa const para preparar help, mantendo essas referências fixas.
*/ const  /* Aqui help recebe o resultado de document.create Element.
*/ help =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ help.className = 'battle-help';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ help.textContent = 'Arraste para olhar · WASD mover · ← → girar · F atacar · Espaço defender · Q luz · E interagir';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ $('#world-controls').append(help);
     /* esse comando inicia a arena com jogador, inimigo, câmera e controles no estado esperado para a cena.
*/ Arena.start({
       /* Esse campo guarda free com free.
*/ free,
       /* Esse campo guarda assist com settings.assist.
*/ assist:settings.assist,
       /* Esse campo guarda reduced com settings.reduced.
*/ reduced:settings.reduced,
       /* Esse campo guarda collected com S.flags.sword Picked.
*/ collected: S.flags.swordPicked,
       /* Relaciona os objetos da bolsa usados nessa parte.
*/ items: S.items,
       /* Esse campo guarda equipped com S.flags.equipped.
*/ equipped:S.flags.equipped,
       /* Esse campo guarda on Hud com uma função para executar quando for chamada.
*/ onHud:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ h => {
         /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ hud.textContent = h.free ? h.warning : 'Vida ' + h.hp + ' · Beerus ' + h.enemy + ' · Fôlego '+(h.stamina??100)+' · Luz '+(h.lightReady?'pronta':'recarregando')+(h.phase===2?' · FASE II':'')+(h.guardBroken?' · DEFESA ROMPIDA':'')+' — ' + h.warning;
         /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('[data-arena-action]').forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ button=>{
           /* Essa declaração usa const para preparar action, mantendo essas referências fixas.
*/ const  /* Aqui action recebe button.dataset.arena Action.
*/ action=button.dataset.arenaAction;
           /* Esse teste confere se action é igual a light, e só entra nesse caminho quando a condição passa.
*/ if(action==='light') /* Atualiza button.disabled usando o resultado dessa expressão.
*/ button.disabled=!!h.free||! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('luz')||!h.lightReady;
           /* Esse teste confere se action é igual a attack, e só entra nesse caminho quando a condição passa.
*/ if(action==='attack') /* Atualiza button.disabled usando a negação de a negação de h.free.
*/ button.disabled=!!h.free;
        });
      },
       /* Esse campo guarda on Death com uma função para executar quando for chamada.
*/ onDeath:  /* Essa função recebe nenhum parâmetro e devolve o resultado de death Screen. */ () =>  /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint. */ deathScreen('Ódio interrompeu sua passagem.',  /* Essa função recebe nenhum parâmetro e devolve o resultado de start Arena. */ () =>  /* Liga o combate em primeira pessoa ao inventário e à história. */ startArena(false), 'odio'),
       /* Esse campo guarda on Finish com uma função para executar quando for chamada.
*/ onFinish:  /* Essa função recebe nenhum parâmetro e devolve o resultado de odio Surto. */ () =>  /* Interrompe o combate para mostrar o surto de Beerus na cutscene. */ odioSurto(),
       /* Esse campo guarda on Collect com uma função para executar quando for chamada.
*/ onCollect:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Atualiza S.flags.sword Picked usando true.
*/ S.flags.swordPicked = true;
         /* Coloca o objeto na bolsa e registra como ele foi recebido.
*/ addItem('espada');
         /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Aproxime-se de Candy.');
      },
       /* Esse campo guarda on Sugar com uma função para executar quando for chamada.
*/ onSugar:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('candy');
         /* Mantém Candy chorando e apresenta o conflito entre poupar e a ação do protagonista.
*/ candyFinal();
      }
    });
     /* Esse teste confere se settings.device é igual a mobile, e só entra nesse caminho quando a condição passa.
*/ if (settings.device === 'mobile')  /* Monta os controles da arena usados pelo toque no celular.
*/ renderMobileArena();
  }
   /* Liga o botão aos estados de pressionar e soltar dessa ação.
*/ function bindHold(button, key) {
     /* Atualiza button.onpointerdown usando uma função para executar quando for chamada.
*/ button.onpointerdown =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
       /* Executa button.set Pointer Capture com os valores definidos nessa parte.
*/ button.setPointerCapture(e.pointerId);
       /* Atualiza keys Held.key usando true.
*/ keysHeld[key] = true;
       /* esse comando registra se uma ação de movimento ou defesa está sendo mantida.
*/ Arena.press(key, true);
    };
     /* Essa declaração usa const para preparar up, mantendo essas referências fixas.
*/ const  /* Aqui up recebe uma função para executar quando for chamada.
*/ up =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza keys Held.key usando false.
*/ keysHeld[key] = false;
       /* esse comando registra se uma ação de movimento ou defesa está sendo mantida.
*/ Arena.press(key, false);
    };
     /* Atualiza button.onpointerup usando up.
*/ button.onpointerup = up;
     /* Atualiza button.onpointercancel usando up.
*/ button.onpointercancel = up;
     /* Atualiza button.onlostpointercapture usando up.
*/ button.onlostpointercapture = up;
  }
   /* Monta os controles da arena usados pelo toque no celular.
*/ function renderMobileArena() {
     /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de atalho de seleção de elementos.
*/ wrap =  /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#mobile-controls');
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ wrap.replaceChildren();
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ wrap.hidden = false;
     /* Essa declaração usa const para preparar pad, mantendo essas referências fixas.
*/ const  /* Aqui pad recebe o resultado de document.create Element.
*/ pad =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ pad.className = 'dpad';
     /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda um texto vazio.
*/ '↑',  /* Essa posição da lista guarda up.
*/ 'up'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda um texto vazio.
*/ '←',  /* Essa posição da lista guarda turn Left.
*/ 'turnLeft'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda um texto vazio.
*/ '↓',  /* Essa posição da lista guarda down.
*/ 'down'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda um texto vazio.
*/ '→',  /* Essa posição da lista guarda turn Right.
*/ 'turnRight'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda um texto vazio.
*/ '◁',  /* Essa posição da lista guarda left.
*/ 'left'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda um texto vazio.
*/ '▷',  /* Essa posição da lista guarda right.
*/ 'right']].forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ([label, key]) => {
       /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de btn.
*/ b =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(label,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
       /* Define o atributo aria label desse elemento.
*/ b.setAttribute('aria-label', {
         /* Esse campo guarda up com Avançar.
*/ up: 'Avançar',
         /* Esse campo guarda down com Recuar.
*/ down: 'Recuar',
         /* Esse campo guarda turn Left com Olhar à esquerda.
*/ turnLeft: 'Olhar à esquerda',
         /* Esse campo guarda turn Right com Olhar à direita.
*/ turnRight: 'Olhar à direita',
         /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: 'Deslocar à esquerda',
         /* Define a posição ou o estado ligado ao lado direito.
*/ right: 'Deslocar à direita'
      }[key]);
       /* Liga o botão aos estados de pressionar e soltar dessa ação.
*/ bindHold(b, key);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ pad.append(b);
    });
     /* Essa declaração usa const para preparar actions, mantendo essas referências fixas.
*/ const  /* Aqui actions recebe o resultado de document.create Element.
*/ actions =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ actions.className = 'combat-buttons';
     /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Atacar.
*/ 'Atacar',  /* Essa posição da lista guarda attack.
*/ 'attack'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Luz.
*/ 'Luz',  /* Essa posição da lista guarda light.
*/ 'light'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Interagir.
*/ 'Interagir',  /* Essa posição da lista guarda interact.
*/ 'interact']].forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ([label, type]) => {
       /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de btn.
*/ b =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(label,  /* Essa função recebe nenhum parâmetro e devolve o resultado de Arena.action. */ () =>  /* esse comando resolve ataques, luz e coleta de objetos conforme equipamento, alcance, fôlego e fase da arena. */ Arena.action(type));
       /* Atualiza b.dataset.arena Action usando type.
*/ b.dataset.arenaAction=type;
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (type === 'light' && ! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('luz'))  /* Atualiza b.disabled usando true.
*/ b.disabled = true;
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ actions.append(b);
    });
     /* Essa declaração usa const para preparar guard, mantendo essas referências fixas.
*/ const  /* Aqui guard recebe o resultado de btn.
*/ guard =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Proteger',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {});
     /* Liga o botão aos estados de pressionar e soltar dessa ação.
*/ bindHold(guard, 'guard');
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ actions.append(guard);
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(pad, actions);
  }
   /* Interrompe o combate para mostrar o surto de Beerus na cutscene.
*/ function odioSurto() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('comics');
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Cenas-500x380/02-odio-surta.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(null, [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda O último golpe quase alcança Ódio. Então ele para de recuar.
*/ 'O último golpe quase alcança Ódio. Então ele para de recuar.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'As fissuras acendem. Disparos ocupam o espaço em que você tentava avançar. O controle da luta termina aqui.']],  /* Essa função recebe nenhum parâmetro e devolve o resultado de comics. */ () =>  /* Mostra a página atual dos quadrinhos e permite avançar a leitura. */ comics(0));
  }
   /* Mostra a página atual dos quadrinhos e permite avançar a leitura.
*/ function comics(page = 0) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('comics', page);
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('', '');
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ p.classList.add('comic');
     /* Essa declaração usa const para preparar img, mantendo essas referências fixas.
*/ const  /* Aqui img recebe o resultado de document.create Element.
*/ img =  /* Cria um elemento HTML do tipo img. */ document.createElement('img');
     /* Escolhe o arquivo que esse elemento deve carregar.
*/ img.src =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/04-Quadrinhos/pagina-0' + (page + 1) + '.png');
     /* Atualiza img.alt usando page.
*/ img.alt = [ /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ódio surta e atira; o rosto de Candy surge, seguido por sua chegada à arena.',  /* Essa posição da lista guarda Candy enfrenta Ódio com sua luz voltada para ele.
*/ 'Candy enfrenta Ódio com sua luz, voltada para ele.',  /* Essa posição da lista guarda A luz encerra o confronto. Ódio cai Candy permanece na arena.
*/ 'A luz encerra o confronto. Ódio cai; Candy permanece na arena.'][page];
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(img);
     /* Essa declaração usa const para preparar nav, mantendo essas referências fixas.
*/ const  /* Aqui nav recebe o resultado de document.create Element.
*/ nav =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ nav.className = 'comic-controls';
     /* Esse teste confere se page é maior que 0, e só entra nesse caminho quando a condição passa.
*/ if (page > 0)  /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ nav.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('← Anterior',  /* Essa função recebe nenhum parâmetro e devolve o resultado de comics. */ () =>  /* Mostra a página atual dos quadrinhos e permite avançar a leitura. */ comics(page - 1)));
     /* Essa declaração usa const para preparar counter, mantendo essas referências fixas.
*/ const  /* Aqui counter recebe o resultado de document.create Element.
*/ counter =  /* Cria um elemento HTML do tipo span. */ document.createElement('span');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ counter.textContent = page + 1 + ' / 3';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ nav.append(counter,  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(page < 2 ? 'Próxima página →' : 'Voltar à arena',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Esse teste confere se page é menor que 2, e só entra nesse caminho quando a condição passa.
*/ if (page < 2)  /* Devolve o resultado de comics e encerra essa chamada da função.
*/ return  /* Mostra a página atual dos quadrinhos e permite avançar a leitura. */ comics(page + 1);
       /* Registra a morte do Eco uma única vez e atualiza suas consequências na história.
*/ kill('odio', 'Candy o matou com seus poderes de luz para impedir os disparos e proteger o protagonista.');
       /* Atualiza S.flags.comics usando true.
*/ S.flags.comics = true;
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('arena');
       /* Essa declaração usa const para preparar end, mantendo essas referências fixas.
*/ const  /* Aqui end recebe uma lista com 1 posições.
*/ end=[{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A luz se desfaz. Beerus não se levanta. Candy permanece do outro lado da arena.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'morreu'}];
       /* Esse teste confere se o resultado de S.items.includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('espada')) /* Acrescenta esse valor no fim da lista.
*/ end.push([ /* Essa posição da lista guarda Jardim.
*/ 'Jardim', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Candy trouxe a espada do pedestal de Aurea. Durante a intervenção, ela caiu no centro da arena.']);
       /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('odio',end, /* Essa função recebe nenhum parâmetro e devolve o resultado de start Arena. */ ()=> /* Liga o combate em primeira pessoa ao inventário e à história. */ startArena(true));
    }));
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(nav);
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('A intervenção de Candy · leitura livre');
  }
                                                                              
   /* Mantém Candy chorando e apresenta o conflito entre poupar e a ação do protagonista.
*/ function candyFinal() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('candy');
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('sugar-finale');
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Arena-Odio/01-frente.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('amor', [{
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Eu achei que se chegasse a tempo…',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Você chegou.
*/ 'Você chegou.'], {
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Você fala como se tivesse acabado.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'quebrou'
    }, {
       /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu ainda estou ouvindo ele. Eu tentei parar os disparos. Eu não queria deixar ninguém no chão.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Candy aperta as mãos contra o rosto. As asas tremem. Ela não olha para a espada que você trouxe de volta.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'
    }, {
       /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'POUPAR',
         /* Define a ação executada quando essa opção é escolhida.
*/ go:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
           /* Atualiza S.flags.tried Sugar usando true.
*/ S.flags.triedSugar = true;
           /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
           /* Atualiza timed usando um valor vazio.
*/ timed=null; /* Atualiza writing usando um valor vazio.
*/ writing=null; /* Atualiza queue usando uma lista com 0 posições.
*/ queue=[]; /* Atualiza after Dialogue usando um valor vazio.
*/ afterDialogue=null;
           /* Atualiza mode usando scene.
*/ mode='scene'; /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#dialogue').hidden=false; /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#choices').replaceChildren(); /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#advance').hidden=true;
           /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speech').textContent='POUPAR';
           /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('choice-glitch');
           /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('amor','quebrou');
           /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('glitch');
           /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(settings.reduced ? .2 : .5, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
             /* Retira esse elemento da página.
*/ $('#stage').classList.remove('choice-glitch');
             /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('amor', [{ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você tentou poupar. A mão do protagonista não recua. A alternativa desaparece.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'},{
             /* Indica quem está falando nessa linha.
*/ who:'Você', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu não vou precisar de ninguém depois.'
          }, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'A espada continua erguida. Candy não consegue afastar as mãos do rosto.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou',
             /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
               /* Define o texto mostrado na opção ou no controle.
*/ label: 'MATAR',
               /* Define a ação executada quando essa opção é escolhida.
*/ go: candyDeath
            }]
          }], candyDeath);});
        }
      }, {
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'MATAR',
         /* Define a ação executada quando essa opção é escolhida.
*/ go: candyDeath
      }]
    }], candyDeath);
  }
   /* Mostra o corte em silhueta e registra o desfecho de Candy.
*/ function candyDeath() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('candy');
     /* Acrescenta esse valor ao conjunto ou à lista de classes.
*/ $('#stage').classList.add('loss-scene');
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Cenas-500x380/09-silhueta.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(null, [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ela veio até a arena para impedir que você morresse. Agora a sombra da sua espada atravessa a luz que ela deixou.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda O protagonista ergue a espada. A cena corta para uma silhueta.
*/ 'O protagonista ergue a espada. A cena corta para uma silhueta.'], {
       /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'A luz deixa o corpo inteiro.',
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Registra a morte do Eco uma única vez e atualiza suas consequências na história.
*/ kill('amor', 'O protagonista a matou depois de recolher a espada. A tentativa de poupar, quando feita, não foi respeitada por ele.');
         /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.sfx?.('cut');
         /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('amor', 'morreu');
      }
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela inteira escurece. Não há luz para devolver às suas mãos. Você continua vivo por causa de quem acabou de matar.'
    }, {
       /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A arena já não está sob ataque. O silêncio não parece segurança.'
    }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('stairs');
       /* Faz a passagem da arena para a escadaria e o labirinto.
*/ stairs();
    });
  }
   /* Faz a passagem da arena para a escadaria e o labirinto.
*/ function stairs() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/02-Cenas-500x380/10-escadaria.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(null, [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A escadaria começa onde a arena termina. Cada lance afasta o chão em que Candy ficou.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda Você sobe. Nada do que deixou para trás responde.
*/ 'Você sobe. Nada do que deixou para trás responde.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda No alto há um labirinto comum. Dois nomes ainda serão ouvidos.
*/ 'No alto, há um labirinto comum. Dois nomes ainda serão ouvidos.']], mazeTutorial);
  }
   /* Ensina as regras de Cassidy e Mizzery antes da parte com risco.
*/ function mazeTutorial(step = 0) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/190000-pixels/06-cruzamento.png'));
     /* Essa declaração usa const para preparar instructions, mantendo essas referências fixas.
*/ const  /* Aqui instructions recebe uma lista com 3 posições.
*/ instructions = [ /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Sanidade mostra a direção certa. Ela aponta à esquerda. Escolha esquerda.',  /* Essa posição da lista guarda Insanidade mostra o contrário. Ele aponta à esquerda. Escolha direita.
*/ 'Insanidade mostra o contrário. Ele aponta à esquerda. Escolha direita.',  /* Essa posição da lista guarda Quando os dois aparecem vá pelo meio.
*/ 'Quando os dois aparecem, vá pelo meio.'];
     /* Esse teste confere se step é igual a 3, e só entra nesse caminho quando a condição passa.
*/ if (step === 3) {
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('maze');
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Antes da primeira curva', 'A cada curva haverá Sanidade, Insanidade ou os dois. Siga Sanidade, contrarie Insanidade e vá pelo meio quando ambos aparecerem. Você terá 2 segundos. Um erro reinicia o labirinto. O modo assistido amplia esse tempo.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Entrar no labirinto',  /* Essa função recebe nenhum parâmetro e devolve o resultado de maze Start. */ () =>  /* Monta a curva do labirinto e confere a direção escolhida. */ mazeStart(0)));
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(step === 1 ? 'insanidade' : 'sanidade');
     /* Esse teste confere se step é igual a 2, e só entra nesse caminho quando a condição passa.
*/ if (step === 2)  /* Coloca o segundo Eco na conversa compartilhada e ajusta a posição dos dois.
*/ actorTwo('insanidade');
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Aprender sem risco', instructions[step]);
     /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição da lista guarda left.
*/ 'left',  /* Essa posição da lista guarda center.
*/ 'center',  /* Essa posição da lista guarda right.
*/ 'right'].forEach( /* Essa função recebe dir e i e devolve o resultado de p.append. */ (dir, i) =>  /* Acrescenta os elementos indicados ao fim desse conteúdo. */ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn([ /* Essa posição da lista guarda Esquerda.
*/ '← Esquerda',  /* Essa posição da lista guarda Meio.
*/ 'Meio',  /* Essa posição da lista guarda Direita.
*/ 'Direita →'][i],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Esse teste confere se dir é igual a step, e só entra nesse caminho quando a condição passa.
*/ if (dir === [ /* Essa posição da lista guarda left.
*/ 'left',  /* Essa posição da lista guarda right.
*/ 'right',  /* Essa posição da lista guarda center.
*/ 'center'][step])  /* Ensina as regras de Cassidy e Mizzery antes da parte com risco.
*/ mazeTutorial(step + 1);else {
         /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(step===1?'insanidade':'sanidade','discordar');
         /* Essa declaração usa const para preparar n, mantendo essas referências fixas.
*/ const  /* Aqui n recebe o resultado de document.create Element.
*/ n =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
         /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ n.textContent = 'Pode tentar outra vez. ' + instructions[step];
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(n);
      }
    })));
  }
                                                           
   /* Monta a curva do labirinto e confere a direção escolhida.
*/ function mazeStart(index = 0) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza maze Index usando index.
*/ mazeIndex = index;
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('maze');
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/190000-pixels/' + (D.maze[index][0] === 'A' ? '06-cruzamento.png' : index % 2 ? '05-bifurcacao.png' : '02-corredor-reto.png')));
     /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe D.maze.index.
*/ [who, dir] = D.maze[index];
     /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(who === 'I' ? 'insanidade' : 'sanidade',who==='S'?'orientar':who==='I'?(index%2?'discordar':'divertido'):'escutar');
     /* Esse teste confere se who é igual a A, e só entra nesse caminho quando a condição passa.
*/ if (who === 'A')  /* Coloca o segundo Eco na conversa compartilhada e ajusta a posição dos dois.
*/ actorTwo('insanidade',index%2?'divertido':'escutar');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent = 'Curva ' + (index + 1) + ' / 20';
     /* Essa declaração usa const para preparar direction, mantendo essas referências fixas.
*/ const  /* Aqui direction recebe uma das duas alternativas, conforme o teste.
*/ direction = dir === 'left' ? 'esquerda' : 'direita';
     /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe uma das duas alternativas, conforme o teste.
*/ label = who === 'A' ? 'Sanidade e Insanidade aparecem juntos.' : (who === 'S' ? 'Sanidade' : 'Insanidade') + ': “À ' + direction + '.”';
     /* Essa declaração usa const para preparar safe, mantendo essas referências fixas.
*/ const  /* Aqui safe recebe uma das duas alternativas, conforme o teste.
*/ safe = who === 'A' ? 'center' : who === 'S' ? dir : dir === 'left' ? 'right' : 'left';
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Siga Sanidade. Contrarie Insanidade. Ambos: meio.');
     /* Monta os comandos de reação e o prazo para responder.
*/ prompt(label, [{
       /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: 'left',
       /* Define o texto mostrado na opção ou no controle.
*/ label: '← Esquerda'
    }, {
       /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: 'center',
       /* Define o texto mostrado na opção ou no controle.
*/ label: '↑ Meio'
    }, {
       /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: 'right',
       /* Define o texto mostrado na opção ou no controle.
*/ label: 'Direita →'
    }], settings.assist ? 5 : 2,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ answer => {
       /* Esse teste confere se answer é diferente de safe, e só entra nesse caminho quando a condição passa.
*/ if (answer !== safe)  /* Devolve o resultado de death Screen e encerra essa chamada da função.
*/ return  /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint. */ deathScreen('A orientação não levou à saída.',  /* Essa função recebe nenhum parâmetro e devolve o resultado de maze Start. */ () =>  /* Monta a curva do labirinto e confere a direção escolhida. */ mazeStart(0));
       /* Esse teste confere se index é igual a 19, e só entra nesse caminho quando a condição passa.
*/ if (index === 19) {
         /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('insaneChase');
         /* Apresenta a fuga depois das curvas do labirinto.
*/ insaneChaseIntro();
      } else  /* Monta a curva do labirinto e confere a direção escolhida.
*/ mazeStart(index + 1);
    });
  }
   /* Apresenta a fuga depois das curvas do labirinto.
*/ function insaneChaseIntro() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/190000-pixels/08-saida.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('insanidade', [{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você escolheu as saídas certas.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'escutar'}, { /* Guarda o texto que essa parte vai mostrar.
*/ text:'E continuou entrando.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'divertido'},{ /* Guarda o texto que essa parte vai mostrar.
*/ text:'Agora olhe para onde elas te trouxeram.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'revelar'}],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Ainda não terminou', 'Agora é uma perseguição. Toque em Correr ou segure Shift e acompanhe as saídas sinalizadas. O labirinto concluído está salvo.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Correr para a saída',  /* Essa função recebe nenhum parâmetro e devolve o resultado de chase Start. */ () =>  /* Prepara a perseguição, a distância da ameaça e o trecho atual. */ chaseStart('insanidade')));
    });
  }
   /* Monta as perguntas de Cassidy usando os acontecimentos da partida.
*/ function interrogation() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/190000-pixels/08-saida.png'));
     /* Essa declaração usa const para preparar lines, mantendo essas referências fixas.
*/ const  /* Aqui lines recebe uma lista com 4 posições.
*/ lines = [ /* Essa posição da lista guarda Você chegou sem ninguém que pudesse responder por você.
*/ 'Você chegou sem ninguém que pudesse responder por você.',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Eu respondo por mim.
*/ 'Eu respondo por mim.'],  /* Essa posição da lista guarda Então diga o que queria acabar.
*/ 'Então diga o que queria acabar.', {
       /* Reúne as respostas que o jogador pode escolher.
*/ choices: [{
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'As inseguranças',
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'E por que procurou nos outros uma coisa que continuou levando?'
      }, {
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'O que me fazia sofrer',
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Você também destruiu o que aparecia quando não suportava.'
      }, {
         /* Define o texto mostrado na opção ou no controle.
*/ label: 'Os sentimentos',
         /* Guarda a resposta que aparece depois dessa escolha.
*/ reply: 'Desta vez você não chamou por outro nome.'
      }]
    }];
     /* Esse teste confere se S.flags.spared Fear está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (S.flags.sparedFear)  /* Acrescenta esse valor no fim da lista.
*/ lines.push('Você deixou que ele saísse. Isso aconteceu. Não vou dizer que escolheu o mesmo gesto de quem o matou ali.');
     /* Esse teste confere se S.flags.tried Sugar está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (S.flags.triedSugar)  /* Acrescenta esse valor no fim da lista.
*/ lines.push('Aquela escolha não foi deixada na sua mão.');
     /* Acrescenta esse valor no fim da lista.
*/ lines.push([ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Eu ainda sinto.
*/ 'Eu ainda sinto.'], { /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você começou a perceber antes de chegar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'aprovar'});
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('sanidade', lines,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('revelation');
       /* Apresenta os quadros da revelação e a sequência de reações.
*/ revelation();
    });
  }
   /* Apresenta os quadros da revelação e a sequência de reações.
*/ function revelation(frame = 0) {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('revelation');
     /* Esse teste confere se frame é igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(frame===0) /* Atualiza S.flags.mask Removed usando false.
*/ S.flags.maskRemoved=false;
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/190000-pixels/08-saida.png'));
     /* Essa declaração usa const para preparar frames, mantendo essas referências fixas.
*/ const  /* Aqui frames recebe o resultado de .filter.
*/ frames =  /* Monta uma lista somente com os valores que passam no teste. */ list('/03-Generais/insanidade/').filter( /* Essa função recebe p e devolve o resultado de rosto 1 4 .test. */ p =>  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /rosto-[1-4]/.test(p));
     /* Passa para a próxima parte desta sequência.
*/ function next(i) {
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('insanidade');
       /* Define as classes de aparência desse elemento.
*/ $('#actor').className = 'actor closeup';
       /* Escolhe o arquivo que esse elemento deve carregar.
*/ $('#actor').src = frames[i];
       /* Esse teste confere se i é igual a 3, e só entra nesse caminho quando a condição passa.
*/ if(i===3){ /* Atualiza S.flags.mask Removed usando true.
*/ S.flags.maskRemoved=true; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();}
       /* Esse teste confere se i é menor que 3, e só entra nesse caminho quando a condição passa.
*/ if (i < 3)  /* Devolve o resultado de defer e encerra essa chamada da função.
*/ return  /* Agenda uma ação no relógio do jogo, que também respeita a pausa. */ defer(settings.reduced ? 1.4 : 1,  /* Executa next.bind com os valores definidos nessa parte. */ next.bind(null, i + 1));
       /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(1,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Atualiza S.sanity usando 0.
*/ S.sanity = 0;
         /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('insanidade');
         /* Coloca o segundo Eco na conversa compartilhada e ajusta a posição dos dois.
*/ actorTwo('amor', 'morreu');
         /* Define as classes de aparência desse elemento.
*/ $('#actor-two').className = 'actor ghost';
         /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('insanidade', [ /* Essa posição da lista guarda Você está esperando por ela.
*/ 'Você está esperando por ela?',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Muito longe, a imagem escura de Candy permanece imóvel. Não há voz, toque ou luz chegando.']],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
           /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('sanidade', 'orientar');
           /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#actor-two').hidden = true;
           /* Prepara a sequência de movimentos e as consequências dos erros.
*/ startQTE([ /* Essa posição da lista guarda back.
*/ 'back',  /* Essa posição da lista guarda right.
*/ 'right',  /* Essa posição da lista guarda cross.
*/ 'cross'],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Atualiza S.sanity usando 25.
*/ S.sanity = 25;
             /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('keys');
             /* Mostra a transformação dos generais nas duas chaves.
*/ generalKeys();
          },  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
             /* Prepara as imagens e o som do susto antes de abrir o retorno ao checkpoint.
*/ deathScreen('A aproximação fechou o espaço.',  /* Essa função recebe nenhum parâmetro e devolve o resultado de revelation. */ () =>  /* Apresenta os quadros da revelação e a sequência de reações. */ revelation());
             /* Devolve false e encerra essa chamada da função.
*/ return false;
          },'insanidade');
        });
      });
    }
     /* Passa para a próxima parte desta sequência.
*/ next(frame);
  }
                                                                   
   /* Mostra a transformação dos generais nas duas chaves.
*/ function generalKeys() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/190000-pixels/08-saida.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('sanidade', [ /* Essa posição da lista guarda Eu não posso escolher o que você fará com aquilo que reconhecer.
*/ 'Eu não posso escolher o que você fará com aquilo que reconhecer.',  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Insanidade.
*/ 'Insanidade',  /* Essa posição da lista guarda E eu não posso continuar escondendo atrás de uma curva.
*/ 'E eu não posso continuar escondendo atrás de uma curva.'], {
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'As duas partes ainda precisam estar aqui.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'forma-chave',
       /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de actor Two. */ ()=> /* Coloca o segundo Eco na conversa compartilhada e ajusta a posição dos dois. */ actorTwo('insanidade','forma-chave')
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Insanidade.
*/ 'Insanidade',  /* Essa posição da lista guarda Até para abrir uma porta.
*/ 'Até para abrir uma porta.']],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor(null);
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#actor-two').hidden=true;
       /* Essa declaração usa const para preparar hand1 e hand2, mantendo essas referências fixas.
*/ const  /* Aqui hand1 recebe o resultado dessa expressão.
*/ hand1 =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/10-Chaves-Na-Mao/sanidade.png') ||  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/chaves/01-sanidade.png'),
         /* Aqui hand2 recebe o resultado dessa expressão.
*/ hand2 =  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/10-Chaves-Na-Mao/insanidade.png') ||  /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/chaves/02-insanidade.png');
       /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(null, [{
         /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você fecha os dedos em torno das hastes.', /* Define a mudança que acontece ao passar por essa parte.
*/ effect: /* Essa função recebe nenhum parâmetro e devolve o resultado de exploration Hands. */ ()=> /* Escolhe a mão comum ou o equipamento que está realmente na bolsa. */ explorationHands('05-equipar-chave')
      }, {
         /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
         /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Uma presença se torna uma chave. Você a segura pela haste.',
         /* Indica a imagem que deve aparecer nesse momento.
*/ image: hand1,
         /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função recebe nenhum parâmetro e devolve o resultado de add Item. */ () =>  /* Coloca o objeto na bolsa e registra como ele foi recebido. */ addItem('chave-sanidade')
      }, {
         /* Indica quem está falando nessa linha.
*/ who: 'Jardim',
         /* Guarda o texto que essa parte vai mostrar.
*/ text: 'A outra também deixa de orientar. As duas chaves agora estão com você.',
         /* Indica a imagem que deve aparecer nesse momento.
*/ image: hand2,
         /* Define a mudança que acontece ao passar por essa parte.
*/ effect:  /* Essa função recebe nenhum parâmetro e devolve o resultado de add Item. */ () =>  /* Coloca o objeto na bolsa e registra como ele foi recebido. */ addItem('chave-insanidade')
      }],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('gate');
         /* Monta as fechaduras e libera a abertura quando as duas chaves foram usadas.
*/ gate();
      });
    });
  }
   /* Monta as fechaduras e libera a abertura quando as duas chaves foram usadas.
*/ function gate() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/07-Portao-Final/01-portao-duas-chaves.png'));
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#location').textContent = 'O último portão';
     /* Atualiza o objetivo mostrado no rodapé do jogo.
*/ objective('Duas fechaduras. Duas chaves.');
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Duas fechaduras', 'A haste de cada chave entra numa fechadura comum. Atrás da porta, só há luz.');
     /* Percorre os itens e executa a função indicada em cada um.
*/ [ /* Essa posição da lista guarda sanidade.
*/ 'sanidade',  /* Essa posição da lista guarda insanidade.
*/ 'insanidade'].forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ id => {
       /* Essa declaração usa const para preparar b, mantendo essas referências fixas.
*/ const  /* Aqui b recebe o resultado de btn.
*/ b =  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(S.flags['lock' + id] ? 'Fechadura aberta' : 'Usar chave de ' + D.names[id],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Esse teste confere se o resultado de S.items.includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('chave-' + id))  /* Encerra essa função sem devolver outro valor.
*/ return;
         /* Atualiza S.flags. usando true.
*/ S.flags['lock' + id] = true;
         /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
         /* Monta as fechaduras e libera a abertura quando as duas chaves foram usadas.
*/ gate();
      });
       /* Atualiza b.disabled usando o resultado dessa expressão.
*/ b.disabled = S.flags['lock' + id] || ! /* Confere se esse valor está presente na lista ou no texto. */ S.items.includes('chave-' + id);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append(b);
    });
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.flags.locksanidade && S.flags.lockinsanidade)  /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Empurrar a porta', door));
  }
   /* Essa função reúne as operações de door para executar quando for chamada.
*/ function door() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Essa declaração usa const para preparar frames, mantendo essas referências fixas.
*/ const  /* Aqui frames recebe o resultado de list.
*/ frames =  /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta. */ list('/06-Saida-4-Quadros/');
     /* Essa declaração usa let para preparar i, permitindo atualizar esses valores depois.
*/ let  /* Aqui i recebe 0.
*/ i = 0;
     /* Essa declaração usa const para preparar next, mantendo essas referências fixas.
*/ const  /* Passa para a próxima parte desta sequência.
*/ next =  /* Passa para a próxima parte desta sequência. */ () => {
       /* Esse teste confere se i é igual a frames.length, e só entra nesse caminho quando a condição passa.
*/ if (i === frames.length) {
         /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('ending');
         /* Devolve o resultado de ending e encerra essa chamada da função.
*/ return  /* Apresenta a conversa com Anata e as consequências que permaneceram. */ ending();
      }
       /* Escolhe a imagem que fica no fundo da cena.
*/ background(frames[i]);
       /* Esse teste confere se i é maior ou igual a 2, e só entra nesse caminho quando a condição passa.
*/ if (i >= 2) {
         /* Define as classes de aparência desse elemento.
*/ $('#fade').className = 'fade white';
         /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#fade').hidden = false;
      }
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ i++;
       /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(null, [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim', [ /* Essa posição da lista guarda A porta cede.
*/ 'A porta cede.',  /* Essa posição da lista guarda Você empurra.
*/ 'Você empurra.',  /* Essa posição da lista guarda A abertura é tomada pela luz.
*/ 'A abertura é tomada pela luz.',  /* Essa posição da lista guarda Não há cenário atrás dela. Só luz.
*/ 'Não há cenário atrás dela. Só luz.'][i - 1]]], next);
    };
     /* Passa para a próxima parte desta sequência.
*/ next();
  }
                                                                          
   /* Apresenta a conversa com Anata e as consequências que permaneceram.
*/ function ending() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background(null);
     /* Atualiza .style.opacity usando .08.
*/ $('#background').style.opacity = '.08';
     /* Escolhe a pose do Eco e prepara as camadas aprovadas para a apresentação.
*/ actor('neutralidade');
     /* Essa declaração usa const para preparar lines, mantendo essas referências fixas.
*/ const  /* Aqui lines recebe o resultado de ANATA.script.
*/ lines =  /* Executa ANATA.script com os valores definidos nessa parte. */ ANATA.script(S);
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('neutralidade', lines,  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza S.complete usando true.
*/ S.complete = true;
       /* Troca a etapa da história, salva o checkpoint e escolhe o ambiente sonoro.
*/ setPhase('complete');
       /* Define as classes de aparência desse elemento.
*/ $('#fade').className = 'fade';
       /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#fade').hidden = false;
       /* Agenda uma ação no relógio do jogo, que também respeita a pausa.
*/ defer(1.2,  /* Essa função recebe nenhum parâmetro e devolve o resultado dessa expressão. */ () =>  /* Atualiza location.href usando index.html home. */ location.href = 'index.html#home');
    });
  }
   /* Mostra o auxílio de Candy quando as condições de ajuda foram cumpridas.
*/ function rescue(done) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!S.talks.A1 ||  /* Confere se esse Eco já está na lista de mortos. */ dead('amor'))  /* Devolve o resultado de done e encerra essa chamada da função.
*/ return  /* Executa a continuação recebida para seguir depois desta etapa. */ done();
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Escolhe o fundo correspondente ao quarto e à direção da câmera. */ roomBg(S.room || 'amor', S.view));
     /* Atualiza S.flags.rescues usando o resultado dessa expressão.
*/ S.flags.rescues = (S.flags.rescues || 0) + 1;
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say('amor', [{
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Olha para mim. Só por um instante.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'acolher-bracos-abertos'
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Candy se aproxima e toca seus ombros. Ela espera sua respiração encontrar um intervalo.'], {
       /* Guarda o texto que essa parte vai mostrar.
*/ text: 'Você ainda está aqui. Eu também.',
       /* Escolhe a pose do personagem para essa fala.
*/ pose: 'proteger-com-asas'
    },  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda Ela se afasta. A presença se desfaz num feixe de luz.
*/ 'Ela se afasta. A presença se desfaz num feixe de luz.']],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza S.sanity usando 70.
*/ S.sanity = 70;
       /* Atualiza rescue Cooldown usando 10.
*/ rescueCooldown = 10;
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
       /* Executa a continuação recebida para seguir depois desta etapa.
*/ done();
    });
  }
   /* Abre a janela e pausa o relógio e os controles do jogo.
*/ function modal(content) {
     /* Esse teste confere se open não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#game-modal').open)  /* Atualiza modal Return Target usando document.active Element.
*/ modalReturnTarget=document.activeElement;
     /* Atualiza paused usando true.
*/ paused = true;
     /* Atualiza keys Held usando um objeto com os campos dessa parte.
*/ keysHeld = {};
     /* Ajusta a pausa dos movimentos e ataques da arena.
*/ Arena.pause(true);
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.pause();
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#modal-content').replaceChildren(content);
     /* Essa declaração usa const para preparar heading, mantendo essas referências fixas.
*/ const  /* Aqui heading recebe o resultado de content.query Selector.
*/ heading =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ content.querySelector('h1,h2');
     /* Esse teste confere se heading está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (heading) {
       /* Atualiza heading.id usando game modal title.
*/ heading.id = 'game-modal-title';
       /* Define o atributo aria labelledby desse elemento.
*/ $('#game-modal').setAttribute('aria-labelledby', heading.id);
       /* Retira o atributo aria label desse elemento.
*/ $('#game-modal').removeAttribute('aria-label');
    } else {
       /* Retira o atributo aria labelledby desse elemento.
*/ $('#game-modal').removeAttribute('aria-labelledby');
       /* Define o atributo aria label desse elemento.
*/ $('#game-modal').setAttribute('aria-label', 'Jardim dos Ecos');
    }
     /* Atualiza .scroll Top usando 0.
*/ $('#game-modal').scrollTop = 0;
     /* Esse teste confere se open não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#game-modal').open)  /* Abre esse diálogo como uma janela modal.
*/ $('#game-modal').showModal();
     /* Esse teste confere se heading está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(heading){ /* Atualiza heading.tab Index usando o resultado dessa expressão.
*/ heading.tabIndex=-1; /* Leva o foco do teclado para esse elemento.
*/ heading.focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});}
  }
   /* Fecha a janela e retoma o jogo e o áudio.
*/ function closeModal() {
     /* Esse teste confere se open está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#game-modal').open)  /* Fecha essa janela ou recurso que estava aberto.
*/ $('#game-modal').close();
     /* Atualiza paused usando false.
*/ paused = false;
     /* Ajusta a pausa dos movimentos e ataques da arena.
*/ Arena.pause(false);
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.resume();
     /* Atualiza loop Last usando o resultado de performance.now.
*/ loopLast =  /* Lê o tempo de alta precisão em milissegundos para calcular o intervalo entre atualizações. */ performance.now();
     /* Mostra ou desativa o botão do gesto conforme o desbloqueio e a cena atual.
*/ updateGestureControl();
     /* Esse teste confere se modal Return Target.is Connected está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(modalReturnTarget?.isConnected) /* Leva o foco do teclado para esse elemento.
*/ modalReturnTarget.focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
     /* Atualiza modal Return Target usando um valor vazio.
*/ modalReturnTarget=null;
  }
   /* Guarda as preferências de controles e movimento deste navegador.
*/ function saveSettings() {
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Salva o valor usando a chave sentia game settings.
*/ localStorage.setItem('sentia-game-settings',  /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(settings));
       /* Salva o valor usando a chave sentia device.
*/ localStorage.setItem('sentia-device',  /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(settings.device));
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {}
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ document.body.classList.toggle('mobile', settings.device === 'mobile');
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ document.body.classList.toggle('reduced', settings.reduced);
     /* Esse teste confere se mode é igual a arena, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'arena') {
       /* Esse teste confere se settings.device é igual a mobile, e só entra nesse caminho quando a condição passa.
*/ if (settings.device === 'mobile')  /* Monta os controles da arena usados pelo toque no celular.
*/ renderMobileArena();else  /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#mobile-controls').hidden = true;
    }
  }
                                                                          
   /* Monta as preferências, controles e opções de salvamento da pausa.
*/ function pauseMenu() {
     /* Esse teste confere se S não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!S)  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Monta a marcação HTML interna desse elemento.
*/ wrap.innerHTML = '<p class="eyebrow">JARDIM DOS ECOS</p><h2>Um intervalo</h2><p>O tempo fica parado enquanto esta janela estiver aberta.</p><label for="device">Como você quer jogar?</label><select id="device"><option value="pc">PC · teclado e mouse</option><option value="mobile">Celular · botões de toque</option></select><label><input type="checkbox" id="assist"> Modo assistido: mais tempo para reagir</label><label><input type="checkbox" id="motion"> Reduzir movimentos e sustos animados</label><p class="hint">Os sustos ficam estáticos nesse modo; seus sons continuam seguindo o volume de efeitos.</p><p class="hint">O save retoma o último ponto seguro. Conversas em andamento recomeçam. Nenhuma partida é enviada para fora do navegador.</p>';
     /* Atualiza o valor desse campo ou controle.
*/ wrap.querySelector('#device').value = settings.device;
     /* Atualiza .checked usando settings.assist.
*/ wrap.querySelector('#assist').checked = settings.assist;
     /* Atualiza .checked usando settings.reduced.
*/ wrap.querySelector('#motion').checked = settings.reduced;
     /* Percorre os itens e executa a função indicada em cada um.
*/ wrap.querySelectorAll('input,select').forEach( /* Essa função recebe el e devolve o resultado dessa expressão. */ el =>  /* Liga essa função à mudança desse campo. */ el.onchange =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Atualiza settings.device usando value.
*/ settings.device =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ wrap.querySelector('#device').value;
       /* Atualiza settings.assist usando checked.
*/ settings.assist =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ wrap.querySelector('#assist').checked;
       /* Atualiza settings.reduced usando checked.
*/ settings.reduced =  /* Procura o primeiro elemento da página que corresponde ao seletor. */ wrap.querySelector('#motion').checked;
       /* Guarda as preferências de controles e movimento deste navegador.
*/ saveSettings();
    });
                                                                          
     /* Essa declaração usa const para preparar controls, mantendo essas referências fixas.
*/ const  /* Aqui controls recebe o resultado de document.create Element.
*/ controls =  /* Cria um elemento HTML do tipo details. */ document.createElement('details');
     /* Define as classes de aparência desse elemento.
*/ controls.className = 'scene-controls';
     /* Essa declaração usa const para preparar summary, mantendo essas referências fixas.
*/ const  /* Aqui summary recebe o resultado de document.create Element.
*/ summary =  /* Cria um elemento HTML do tipo summary. */ document.createElement('summary');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ summary.textContent = 'Controles desta cena';
     /* Essa declaração usa const para preparar help, mantendo essas referências fixas.
*/ const  /* Aqui help recebe o resultado de document.create Element.
*/ help =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ help.textContent = mode === 'arena'
      ? 'W/S avança e recua; A/D desloca; setas ou arrastar no cenário giram a câmera. F ataca, Espaço defende, Q usa a luz e E interage. No celular, use os botões e arraste para olhar.'
      : chase
      ? 'Segure Shift ou toque em Correr para ligar ou desligar a corrida. B ou Olhar para trás muda a visão. Nas passagens, use as setas, W/A/S/D ou os botões da tela.'
      : mode === 'prompt'
      ? 'Responda ao comando mostrado na tela usando a tecla indicada ou o botão correspondente. O prazo fica congelado durante a pausa.'
      : 'Converse com o morador antes de explorar. Use as setinhas e clique ou toque nos objetos. Um clique ou Enter revela a frase inteira; o seguinte avança. Tab percorre os botões. I abre a bolsa, J abre o registro e Esc pausa.';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ controls.append(summary, help);
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(controls);
     /* Essa declaração usa const para preparar audio, mantendo essas referências fixas.
*/ const  /* Aqui audio recebe window.Audio Sentia.
*/ audio=window.AudioSentia;
     /* Esse teste confere se audio está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(audio){
       /* Essa declaração usa const para preparar sound, mantendo essas referências fixas.
*/ const  /* Aqui sound recebe o resultado de document.create Element.
*/ sound= /* Cria um elemento HTML do tipo fieldset. */ document.createElement('fieldset'); /* Essa declaração usa const para preparar legend, mantendo essas referências fixas.
*/ const  /* Aqui legend recebe o resultado de document.create Element.
*/ legend= /* Cria um elemento HTML do tipo legend. */ document.createElement('legend'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ legend.textContent='Áudio'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ sound.append(legend);
       /* Essa declaração usa const para preparar volume Label, mantendo essas referências fixas.
*/ const  /* Aqui volume Label recebe o resultado de document.create Element.
*/ volumeLabel= /* Cria um elemento HTML do tipo label. */ document.createElement('label'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ volumeLabel.textContent='Volume da trilha '; /* Essa declaração usa const para preparar level, mantendo essas referências fixas.
*/ const  /* Aqui level recebe o resultado de document.create Element.
*/ level= /* Cria um elemento HTML do tipo output. */ document.createElement('output'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ level.textContent= /* Arredonda o número para o inteiro mais próximo. */ Math.round( /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state().volume*100)+'%'; /* Essa declaração usa const para preparar volume, mantendo essas referências fixas.
*/ const  /* Aqui volume recebe o resultado de document.create Element.
*/ volume= /* Cria um elemento HTML do tipo input. */ document.createElement('input'); /* Atualiza volume.type usando range.
*/ volume.type='range'; /* Atualiza volume.min usando 0.
*/ volume.min='0'; /* Atualiza volume.max usando 100.
*/ volume.max='100'; /* Atualiza o valor desse campo ou controle.
*/ volume.value= /* Converte esse valor para texto. */ String( /* Arredonda o número para o inteiro mais próximo. */ Math.round( /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state().volume*100)); /* Define o atributo aria label desse elemento.
*/ volume.setAttribute('aria-label','Volume da trilha'); /* Liga essa função à digitação nesse campo.
*/ volume.oninput= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Executa audio.set Volume com os valores definidos nessa parte.
*/ audio.setVolume( /* Converte esse valor para número. */ Number(volume.value)/100); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ level.textContent=volume.value+'%';}; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ volumeLabel.append(level,volume);
       /* Essa declaração usa const para preparar mute Label, mantendo essas referências fixas.
*/ const  /* Aqui mute Label recebe o resultado de document.create Element.
*/ muteLabel= /* Cria um elemento HTML do tipo label. */ document.createElement('label'); /* Essa declaração usa const para preparar mute, mantendo essas referências fixas.
*/ const  /* Aqui mute recebe o resultado de document.create Element.
*/ mute= /* Cria um elemento HTML do tipo input. */ document.createElement('input'); /* Atualiza mute.type usando checkbox.
*/ mute.type='checkbox'; /* Atualiza mute.checked usando muted.
*/ mute.checked= /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state().muted; /* Liga essa função à mudança desse campo.
*/ mute.onchange= /* Essa função recebe nenhum parâmetro e devolve o resultado de audio.set Muted. */ ()=> /* Executa audio.set Muted com os valores definidos nessa parte. */ audio.setMuted(mute.checked); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ muteLabel.append(mute,' Silenciar todo o áudio');
       /* Essa declaração usa const para preparar credits, mantendo essas referências fixas.
*/ const  /* Aqui credits recebe o resultado de document.create Element.
*/ credits= /* Cria um elemento HTML do tipo details. */ document.createElement('details'); /* Essa declaração usa const para preparar title, mantendo essas referências fixas.
*/ const  /* Aqui title recebe o resultado de document.create Element.
*/ title= /* Cria um elemento HTML do tipo summary. */ document.createElement('summary'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ title.textContent='Trilha e créditos'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ credits.append(title);
       /* Percorre cada valor de tracks usando track nesta repetição.
*/ for( /* Essa declaração usa const para preparar track, mantendo essas referências fixas.
*/ const  /* Aqui track recebe nenhum valor inicial.
*/ track of  /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state().tracks){ /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de document.create Element.
*/ p= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ p.textContent=track.title+' — '+track.author+' · '+track.license; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ credits.append(p);}
       /* Essa declaração usa const para preparar link, mantendo essas referências fixas.
*/ const  /* Aqui link recebe o resultado de document.create Element.
*/ link= /* Cria um elemento HTML do tipo a. */ document.createElement('a'); /* Atualiza link.href usando entrega escolar CREDITOS AUDIO.txt.
*/ link.href='entrega-escolar/CREDITOS-AUDIO.txt'; /* Atualiza link.target usando blank.
*/ link.target='_blank'; /* Atualiza link.rel usando noopener.
*/ link.rel='noopener'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ link.textContent='Fontes e licença das quatro faixas'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ credits.append(link);
       /* Essa declaração usa const para preparar extras, mantendo essas referências fixas.
*/ const  /* Aqui extras recebe uma lista com 0 posições.
*/ extras=[];
       /* Percorre cada valor de uma lista com 2 posições usando valores separados da lista nesta repetição.
*/ for( /* Essa declaração usa const para preparar valores separados da lista, mantendo essas referências fixas.
*/ const  /* Aqui valores separados da lista recebe nenhum valor inicial.
*/ [key,title,setter] of [ /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda voice Volume.
*/ 'voiceVolume', /* Essa posição da lista guarda Volume das vozes.
*/ 'Volume das vozes', /* Essa posição da lista guarda set Voice Volume.
*/ 'setVoiceVolume'], /* Essa posição reúne 3 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda effects Volume.
*/ 'effectsVolume', /* Essa posição da lista guarda Volume dos efeitos.
*/ 'Volume dos efeitos', /* Essa posição da lista guarda set Effects Volume.
*/ 'setEffectsVolume']]) {
         /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label= /* Cria um elemento HTML do tipo label. */ document.createElement('label'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ label.append(title+' ');
         /* Essa declaração usa const para preparar output, mantendo essas referências fixas.
*/ const  /* Aqui output recebe o resultado de document.create Element.
*/ output= /* Cria um elemento HTML do tipo output. */ document.createElement('output'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ output.textContent= /* Arredonda o número para o inteiro mais próximo. */ Math.round(( /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state()[key]??.5)*100)+'%';
         /* Essa declaração usa const para preparar input, mantendo essas referências fixas.
*/ const  /* Aqui input recebe o resultado de document.create Element.
*/ input= /* Cria um elemento HTML do tipo input. */ document.createElement('input'); /* Atualiza input.type usando range.
*/ input.type='range'; /* Atualiza input.min usando 0.
*/ input.min='0'; /* Atualiza input.max usando 100.
*/ input.max='100'; /* Atualiza o valor desse campo ou controle.
*/ input.value= /* Converte esse valor para texto. */ String( /* Arredonda o número para o inteiro mais próximo. */ Math.round(( /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state()[key]??.5)*100)); /* Define o atributo aria label desse elemento.
*/ input.setAttribute('aria-label',title);
         /* Liga essa função à digitação nesse campo.
*/ input.oninput= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ audio[setter]?.( /* Converte esse valor para número. */ Number(input.value)/100); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ output.textContent=input.value+'%';};
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ label.append(output,input); /* Acrescenta esse valor no fim da lista.
*/ extras.push(label);
      }
       /* Esse teste confere se o resultado dessa expressão é igual a function, e só entra nesse caminho quando a condição passa.
*/ if(typeof audio.previewVoice==='function'){
         /* Essa declaração usa const para preparar preview Name, mantendo essas referências fixas.
*/ const  /* Aqui preview Name recebe o resultado dessa expressão.
*/ previewName=D.names[currentEco]||D.names[S.room]||'Anata';
         /* Essa declaração usa const para preparar preview Status, mantendo essas referências fixas.
*/ const  /* Aqui preview Status recebe o resultado de document.create Element.
*/ previewStatus= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define as classes de aparência desse elemento.
*/ previewStatus.className='hint'; /* Define o atributo role desse elemento.
*/ previewStatus.setAttribute('role','status');
         /* Essa declaração usa const para preparar preview, mantendo essas referências fixas.
*/ const  /* Aqui preview recebe o resultado de btn.
*/ preview= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Testar voz de '+previewName, /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async()=>{
           /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if( /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state().muted|| /* Consulta os valores atuais disponibilizados por esse módulo. */ audio.state().voiceVolume===0){ /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ previewStatus.textContent='Ative o áudio e aumente o volume das vozes para ouvir a amostra.'; /* Encerra essa função sem devolver outro valor.
*/ return;}
           /* Atualiza preview.disabled usando true.
*/ preview.disabled=true;
           /* Garante a execução do finally depois da tentativa, mesmo quando uma exceção precisa continuar para fora.
*/ try{ /* Essa declaração usa const para preparar played, mantendo essas referências fixas.
*/ const  /* Aqui played recebe o resultado da operação assíncrona.
*/ played= /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* Executa audio.preview Voice com os valores definidos nessa parte. */ audio.previewVoice(previewName); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ previewStatus.textContent=played?'Amostra da voz. O jogo continua pausado.':'Toque novamente para liberar o som neste navegador.';}
          finally{ /* Atualiza preview.disabled usando false.
*/ preview.disabled=false;}
        });
         /* Acrescenta esse valor no fim da lista.
*/ extras.push(preview,previewStatus);
      }
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ sound.append(volumeLabel, /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...extras,muteLabel,credits); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(sound);
    }
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Continuar', closeModal),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Exportar partida',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
       /* Essa declaração usa const para preparar a, mantendo essas referências fixas.
*/ const  /* Aqui a recebe o resultado de document.create Element.
*/ a =  /* Cria um elemento HTML do tipo a. */ document.createElement('a');
       /* Essa declaração usa const para preparar u, mantendo essas referências fixas.
*/ const  /* Aqui u recebe o resultado de URL.create Object URL.
*/ u =  /* Cria um endereço local temporário para acessar esse arquivo ou bloco de dados. */ URL.createObjectURL( /* Cria uma instância de Blob para usar nesse recurso. */ new Blob([ /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(S, null, 2)], {
         /* Indica o tipo desse elemento ou recurso.
*/ type: 'application/json'
      }));
       /* Atualiza a.href usando u.
*/ a.href = u;
       /* Atualiza a.download usando sentia partida.json.
*/ a.download = 'sentia-partida.json';
       /* Aciona o clique programado nesse controle.
*/ a.click();
       /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de URL.revoke Object URL. */ () =>  /* Libera o endereço temporário depois que ele deixou de ser necessário. */ URL.revokeObjectURL(u), 1000);
    }),  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Salvar e voltar ao site',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
       /* Atualiza location.href usando index.html jardim.
*/ location.href = 'index.html#jardim';
    }));
     /* Abre a janela e pausa o relógio e os controles do jogo.
*/ modal(wrap);
  }
   /* Monta os objetos da bolsa e suas ações de observar e equipar.
*/ function inventory() {
     /* Esse teste confere se mode é igual a menu, e só entra nesse caminho quando a condição passa.
*/ if(mode==='menu') /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Essa declaração usa const para preparar h, mantendo essas referências fixas.
*/ const  /* Aqui h recebe o resultado de document.create Element.
*/ h =  /* Cria um elemento HTML do tipo h2. */ document.createElement('h2');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ h.textContent = 'O que ficou com você';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(h);
     /* Essa declaração usa const para preparar item Names, mantendo essas referências fixas.
*/ const  /* Aqui item Names recebe um objeto com os campos dessa parte.
*/ itemNames = {
       /* Esse campo guarda espada com uma lista com 2 posições.
*/ espada: [ /* Essa posição da lista guarda Espada de fogo.
*/ 'Espada de fogo',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Orgulho ofereceu proteção. A escolha de como usá-la continua sendo do protagonista.'],
       /* Esse campo guarda escudo com uma lista com 2 posições.
*/ escudo: [ /* Essa posição da lista guarda Escudo de fogo.
*/ 'Escudo de fogo',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Visto pelo lado interno. Segure Proteger para reduzir impactos na arena.'],
       /* Esse campo guarda luz com uma lista com 2 posições.
*/ luz: [ /* Essa posição da lista guarda Luz de Candy.
*/ 'Luz de Candy',  /* Confere se esse Eco já está na lista de mortos. */ dead('amor') ? 'Ela ofereceu algo que podia ser levado sem arrancar de alguém.' : 'Uma luz recebida de Candy. Na arena, Q ou Luz dispara.'],
       /* Esse campo guarda faca com uma lista com 2 posições.
*/ faca: [ /* Essa posição da lista guarda Faca vermelha.
*/ 'Faca vermelha',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Retirada da moldura após a morte de Determinação. Os outros conhecem esse objeto.'],
       /* Esse campo guarda lanterna com uma lista com 2 posições.
*/ lanterna:[ /* Essa posição da lista guarda Lanterna.
*/ 'Lanterna', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Recolhida junto à entrada de Hunger. Pode ser segurada durante a exploração.'],
       /* Esse campo guarda chave sanidade com uma lista com 2 posições.
*/ 'chave-sanidade': [ /* Essa posição da lista guarda Chave de Sanidade.
*/ 'Chave de Sanidade',  /* Essa posição da lista guarda Uma das duas chaves do último portão.
*/ 'Uma das duas chaves do último portão.'],
       /* Esse campo guarda chave insanidade com uma lista com 2 posições.
*/ 'chave-insanidade': [ /* Essa posição da lista guarda Chave de Insanidade.
*/ 'Chave de Insanidade',  /* Essa posição da lista guarda A outra orientação transformada em objeto.
*/ 'A outra orientação transformada em objeto.']
    };
     /* Essa declaração usa const para preparar bag, mantendo essas referências fixas.
*/ const  /* Aqui bag recebe o resultado de document.create Element.
*/ bag =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Define as classes de aparência desse elemento.
*/ bag.className = 'bag-list';
     /* Esse teste confere se S.items.length não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (!S.items.length) {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de document.create Element.
*/ p =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ p.textContent = 'Sua bolsa ainda está vazia.';
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ bag.append(p);
    }
     /* Percorre os itens e executa a função indicada em cada um.
*/ S.items.forEach( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ id => {
       /* Essa declaração usa const para preparar item, mantendo essas referências fixas.
*/ const  /* Aqui item recebe o resultado de document.create Element.
*/ item =  /* Cria um elemento HTML do tipo article. */ document.createElement('article');
       /* Define as classes de aparência desse elemento.
*/ item.className = 'bag-item';
       /* Essa declaração usa const para preparar t e h3 e p, mantendo essas referências fixas.
*/ const  /* Aqui t recebe o resultado de document.create Element.
*/ t =  /* Cria um elemento HTML do tipo div. */ document.createElement('div'),
         /* Aqui h3 recebe o resultado de document.create Element.
*/ h3 =  /* Cria um elemento HTML do tipo h3. */ document.createElement('h3'),
         /* Aqui p recebe o resultado de document.create Element.
*/ p =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ h3.textContent = itemNames[id]?.[0] || id;
       /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ p.textContent = itemNames[id]?.[1] || 'Um objeto do Jardim.';
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ t.append(h3, p);
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ item.append(t);
       /* Essa declaração usa const para preparar icon, mantendo essas referências fixas.
*/ const  /* Aqui icon recebe o resultado dessa expressão.
*/ icon={ /* Esse campo guarda espada com espada fogo.
*/ espada:'espada-fogo', /* Esse campo guarda escudo com escudo fogo.
*/ escudo:'escudo-fogo', /* Esse campo guarda luz com luz amor.
*/ luz:'luz-amor', /* Esse campo guarda faca com faca vermelha.
*/ faca:'faca-vermelha'}[id]||id;
       /* Essa declaração usa const para preparar icon Source, mantendo essas referências fixas.
*/ const  /* Aqui icon Source recebe o resultado dessa expressão.
*/ iconSource= /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Itens-64/'+icon+'.png')|| /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/03-Objetos-Extras-64/'+icon+'.png');
       /* Esse teste confere se icon Source está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(iconSource){ /* Essa declaração usa const para preparar image, mantendo essas referências fixas.
*/ const  /* Aqui image recebe o resultado de document.create Element.
*/ image= /* Cria um elemento HTML do tipo img. */ document.createElement('img'); /* Escolhe o arquivo que esse elemento deve carregar.
*/ image.src=iconSource; /* Atualiza image.alt usando um texto vazio.
*/ image.alt=''; /* Define as classes de aparência desse elemento.
*/ image.className='bag-icon'; /* Acrescenta os elementos indicados ao começo desse conteúdo.
*/ item.prepend(image);}
       /* Essa declaração usa const para preparar examine, mantendo essas referências fixas.
*/ const  /* Aqui examine recebe o resultado de btn.
*/ examine= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Observar', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
         /* Essa declaração usa const para preparar content, mantendo essas referências fixas.
*/ const  /* Aqui content recebe o resultado de Observacao Sentia.item Panel.
*/ content= /* esse comando monta a janela de observação do objeto com ampliação, rotação, detalhe e volta à bolsa. */ ObservacaoSentia.itemPanel({ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id, /* Guarda o nome usado para identificar ou apresentar esse conteúdo.
*/ name:itemNames[id]?.[0]||id, /* Explica o que é encontrado na primeira observação.
*/ description:itemNames[id]?.[1]||'Um objeto do Jardim.', /* Esse campo guarda sprite com icon Source.
*/ sprite:iconSource,
           /* Esse campo guarda sound com uma função para executar quando for chamada.
*/ sound: /* Essa função recebe kind e devolve o resultado de window.Audio Sentia.spatial Cue. */ kind=> /* esse comando toca os pequenos sons de objetos e interface com direção e distância controladas. */ window.AudioSentia?.spatialCue?.(kind,{ /* Esse campo guarda ui com true.
*/ ui:true}), /* Esse campo guarda on Back com inventory.
*/ onBack:inventory,
           /* Esse campo guarda on Observe com uma função para executar quando for chamada.
*/ onObserve: /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (detail,text)=>{ /* Atualiza S.flags. usando true.
*/ S.flags['item-inspected-'+id]=true; /* Acrescenta uma descoberta ao registro sem repetir a mesma anotação.
*/ note('Detalhe: '+(itemNames[id]?.[0]||id)+' · '+detail,text,{ /* Esse campo guarda item com id.
*/ item:id, /* Esse campo guarda source com Inventário.
*/ source:'Inventário'}); /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();}});
         /* Abre a janela e pausa o relógio e os controles do jogo.
*/ modal(content); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('inspect',{ /* Esse campo guarda ui com true.
*/ ui:true});
      }); /* Atualiza examine.dataset.inspect Item usando id.
*/ examine.dataset.inspectItem=id; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ item.append(examine);
       /* Esse teste confere se o resultado de .includes está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda espada.
*/ 'espada', /* Essa posição da lista guarda escudo.
*/ 'escudo', /* Essa posição da lista guarda faca.
*/ 'faca', /* Essa posição da lista guarda luz.
*/ 'luz', /* Essa posição da lista guarda lanterna.
*/ 'lanterna', /* Essa posição da lista guarda chave sanidade.
*/ 'chave-sanidade', /* Essa posição da lista guarda chave insanidade.
*/ 'chave-insanidade'].includes(id))  /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ item.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(S.flags.equipped===id?'Equipado':'Equipar', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
         /* Atualiza S.flags.equipped usando id.
*/ S.flags.equipped=id; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save(); /* Esse teste confere se mode é igual a explore, e só entra nesse caminho quando a condição passa.
*/ if(mode==='explore')  /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(); /* Esse teste confere se mode é igual a arena, e só entra nesse caminho quando a condição passa.
*/ if(mode==='arena')  /* esse comando troca o equipamento selecionado na configuração atual da arena.
*/ Arena.equip(id); /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal();
      }));
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ bag.append(item);
    });
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(bag,  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Guardar equipamento', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ delete S.flags.equipped; /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save(); /* Esse teste confere se mode é igual a explore, e só entra nesse caminho quando a condição passa.
*/ if(mode==='explore')  /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands(); /* Esse teste confere se mode é igual a arena, e só entra nesse caminho quando a condição passa.
*/ if(mode==='arena') /* esse comando troca o equipamento selecionado na configuração atual da arena.
*/ Arena.equip(null); /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal();}), /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Voltar', closeModal));
     /* Abre a janela e pausa o relógio e os controles do jogo.
*/ modal(wrap);
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('bag',{ /* Esse campo guarda ui com true.
*/ ui:true});
  }
   /* Monta as descobertas, a busca e os indicadores de leitura do registro.
*/ function journal() {
     /* Esse teste confere se mode é igual a menu, e só entra nesse caminho quando a condição passa.
*/ if(mode==='menu') /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Essa declaração usa const para preparar h, mantendo essas referências fixas.
*/ const  /* Aqui h recebe o resultado de document.create Element.
*/ h =  /* Cria um elemento HTML do tipo h2. */ document.createElement('h2');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ h.textContent = 'Registro de descobertas';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(h);
     /* Essa declaração usa const para preparar intro, mantendo essas referências fixas.
*/ const  /* Apresenta a premissa e os primeiros caminhos do Jardim.
*/ intro= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define as classes de aparência desse elemento.
*/ intro.className='hint'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ intro.textContent='O protagonista escreve a própria interpretação. Abra uma anotação para conferir também o que realmente foi observado.';
     /* Essa declaração usa const para preparar filters, mantendo essas referências fixas.
*/ const  /* Aqui filters recebe o resultado de document.create Element.
*/ filters= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ filters.className='journal-toolbar';
     /* Essa declaração usa const para preparar search, mantendo essas referências fixas.
*/ const  /* Aqui search recebe o resultado de document.create Element.
*/ search= /* Cria um elemento HTML do tipo input. */ document.createElement('input'); /* Atualiza search.type usando search.
*/ search.type='search'; /* Atualiza search.placeholder usando Buscar uma lembrança.
*/ search.placeholder='Buscar uma lembrança…'; /* Define o atributo aria label desse elemento.
*/ search.setAttribute('aria-label','Buscar no registro');
     /* Essa declaração usa const para preparar only New, mantendo essas referências fixas.
*/ const  /* Aqui only New recebe o resultado de btn.
*/ onlyNew= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Mostrar apenas novas', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza new Only usando a negação de new Only.
*/ newOnly=!newOnly; /* Define o atributo aria pressed desse elemento.
*/ onlyNew.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(newOnly)); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ onlyNew.textContent=newOnly?'Mostrar todas':'Mostrar apenas novas'; /* Atualiza a lista de anotações de acordo com a busca e o filtro.
*/ renderEntries();}); /* Define o atributo aria pressed desse elemento.
*/ onlyNew.setAttribute('aria-pressed','false');
     /* Essa declaração usa const para preparar mark All, mantendo essas referências fixas.
*/ const  /* Aqui mark All recebe o resultado de btn.
*/ markAll= /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Marcar todas como lidas', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza S.flags.journal Read usando o resultado de S.log.map.
*/ S.flags.journalRead= /* Monta uma nova lista transformando cada posição da lista original. */ S.log.map(entryId); /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save(); /* Atualiza a lista de anotações de acordo com a busca e o filtro.
*/ renderEntries(); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('page',{ /* Esse campo guarda ui com true.
*/ ui:true});});
     /* Essa declaração usa const para preparar list, mantendo essas referências fixas.
*/ const  /* Reúne os PNGs dessa pasta sem incluir pranchas de consulta.
*/ list= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ list.className='journal-list'; /* Essa declaração usa let para preparar new Only, permitindo atualizar esses valores depois.
*/ let  /* Aqui new Only recebe false.
*/ newOnly=false;
     /* Atualiza a lista de anotações de acordo com a busca e o filtro.
*/ function renderEntries(){
       /* Essa declaração usa const para preparar query, mantendo essas referências fixas.
*/ const  /* Aqui query recebe o resultado de .to Lower Case.
*/ query= /* Converte o texto para minúsculas para facilitar a comparação. */ search.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
       /* Essa declaração usa const para preparar read Ids, mantendo essas referências fixas.
*/ const  /* Aqui read Ids recebe o resultado de journal Read Ids.
*/ readIds= /* Prepara a lista de anotações lidas sem transformar saves antigos em avisos repetidos. */ journalReadIds();
       /* Essa declaração usa const para preparar entries, mantendo essas referências fixas.
*/ const  /* Aqui entries recebe o resultado de .filter.
*/ entries= /* Monta uma lista somente com os valores que passam no teste. */ S.log.map( /* Essa função recebe entry e index e devolve um objeto com os campos dessa parte. */ (entry,index)=>({ /* Esse campo guarda entry com entry.
*/ entry, /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id: /* Usa o identificador da anotação ou monta um pelo índice. */ entryId(entry,index)})).reverse().filter( /* Essa função recebe campos separados do objeto e devolve o resultado dessa expressão. */ ({ /* Aqui retira o campo entry do objeto e o recebe na variável entry.
*/ entry, /* Aqui retira o campo id do objeto e o recebe na variável id.
*/ id})=>(!newOnly||! /* Confere se esse valor está presente na lista ou no texto. */ readIds.includes(id))&& /* Confere se esse valor está presente na lista ou no texto. */ (entry.title+' '+entry.text+' '+(entry.voice||'')).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));
       /* Troca o conteúdo desse elemento pelos novos filhos.
*/ list.replaceChildren();
       /* Esse teste confere se entries.length não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!entries.length){ /* Essa declaração usa const para preparar empty, mantendo essas referências fixas.
*/ const  /* Aqui empty recebe o resultado de document.create Element.
*/ empty= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ empty.textContent=S.log.length?'Nenhuma anotação neste filtro.':'Observe os lugares. O que encontrar será registrado aqui.'; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ list.append(empty);}
       /* Percorre cada valor de entries usando campos separados do objeto nesta repetição.
*/ for( /* Essa declaração usa const para preparar campos separados do objeto, mantendo essas referências fixas.
*/ const  /* Aqui campos separados do objeto recebe nenhum valor inicial.
*/ { /* Aqui retira o campo entry do objeto e o recebe na variável entry.
*/ entry, /* Aqui retira o campo id do objeto e o recebe na variável id.
*/ id} of entries){
         /* Essa declaração usa const para preparar details, mantendo essas referências fixas.
*/ const  /* Aqui details recebe o resultado de document.create Element.
*/ details= /* Cria um elemento HTML do tipo details. */ document.createElement('details'); /* Define as classes de aparência desse elemento.
*/ details.className='journal-entry'; /* Atualiza details.dataset.entry Id usando id.
*/ details.dataset.entryId=id;
         /* Essa declaração usa const para preparar summary, mantendo essas referências fixas.
*/ const  /* Aqui summary recebe o resultado de document.create Element.
*/ summary= /* Cria um elemento HTML do tipo summary. */ document.createElement('summary'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ summary.textContent=entry.title;
         /* Essa declaração usa const para preparar unread, mantendo essas referências fixas.
*/ const  /* Aqui unread recebe a negação de o resultado de read Ids.includes.
*/ unread=! /* Confere se esse valor está presente na lista ou no texto. */ readIds.includes(id); /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ details.classList.toggle('unread',unread);
         /* Essa declaração usa const para preparar tag, mantendo essas referências fixas.
*/ const  /* Aqui tag recebe o resultado de document.create Element.
*/ tag= /* Cria um elemento HTML do tipo span. */ document.createElement('span'); /* Define as classes de aparência desse elemento.
*/ tag.className='journal-new'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ tag.textContent='NOVO'; /* Define se esse elemento fica escondido ou disponível na tela.
*/ tag.hidden=!unread; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ summary.append(tag); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ details.append(summary);
         /* Esse teste confere se entry.voice está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(entry.voice){ /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define as classes de aparência desse elemento.
*/ label.className='journal-source'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent='Escrito pelo protagonista'; /* Essa declaração usa const para preparar voice, mantendo essas referências fixas.
*/ const  /* Aqui voice recebe o resultado de document.create Element.
*/ voice= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Define as classes de aparência desse elemento.
*/ voice.className='journal-voice'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ voice.textContent=entry.voice; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ details.append(label,voice);}
         /* Essa declaração usa const para preparar evidence, mantendo essas referências fixas.
*/ const  /* Aqui evidence recebe o resultado de document.create Element.
*/ evidence= /* Cria um elemento HTML do tipo div. */ document.createElement('div'); /* Define as classes de aparência desse elemento.
*/ evidence.className='journal-evidence'; /* Essa declaração usa const para preparar label, mantendo essas referências fixas.
*/ const  /* Aqui label recebe o resultado de document.create Element.
*/ label= /* Cria um elemento HTML do tipo strong. */ document.createElement('strong'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent=entry.voice?'O que foi observado':'Registro do acontecimento'; /* Essa declaração usa const para preparar fact, mantendo essas referências fixas.
*/ const  /* Aqui fact recebe o resultado de document.create Element.
*/ fact= /* Cria um elemento HTML do tipo p. */ document.createElement('p'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ fact.textContent=entry.text; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ evidence.append(label,fact); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ details.append(evidence);
         /* Escuta o evento toggle e liga esse evento à função definida aqui.
*/ details.addEventListener('toggle', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Esse teste confere se details.open não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(!details.open) /* Encerra essa função sem devolver outro valor.
*/ return; /* Esse teste confere se o resultado de .includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se esse valor está presente na lista ou no texto. */ journalReadIds().includes(id)){ /* Acrescenta esse valor no fim da lista.
*/ S.flags.journalRead.push(id); /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save(); /* Define se esse elemento fica escondido ou disponível na tela.
*/ tag.hidden=true; /* Retira esse elemento da página.
*/ details.classList.remove('unread');} /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('page',{ /* Esse campo guarda ui com true.
*/ ui:true});});
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ list.append(details);
      }
       /* Atualiza only New.disabled usando a negação de S.log.length.
*/ onlyNew.disabled=!S.log.length; /* Atualiza mark All.disabled usando a negação de o resultado de S.log.some.
*/ markAll.disabled=! /* Confere se pelo menos um item passa no teste. */ S.log.some( /* Essa função recebe entry e index e devolve a negação de o resultado de .includes. */ (entry,index)=>! /* Confere se esse valor está presente na lista ou no texto. */ journalReadIds().includes( /* Usa o identificador da anotação ou monta um pelo índice. */ entryId(entry,index)));
    }
     /* Liga essa função à digitação nesse campo.
*/ search.oninput=renderEntries; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ filters.append(search,onlyNew,markAll); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(intro,filters); /* Atualiza a lista de anotações de acordo com a busca e o filtro.
*/ renderEntries();
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(list,  /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Voltar', closeModal));
     /* Abre a janela e pausa o relógio e os controles do jogo.
*/ modal(wrap);
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ $('#journal-notice')?.setAttribute('hidden','');
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.spatialCue?.('page',{ /* Esse campo guarda ui com true.
*/ ui:true});
  }
   /* Liga essa função ao clique desse controle.
*/ $('#pause-button').onclick = pauseMenu;
   /* Liga essa função ao clique desse controle.
*/ $('#inventory-button').onclick = inventory;
   /* Liga essa função ao clique desse controle.
*/ $('#journal-button').onclick = journal;
   /* Escuta o evento cancel e liga esse evento à função definida aqui.
*/ $('#game-modal').addEventListener('cancel',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
     /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
     /* Esse teste confere se mode é diferente de menu, e só entra nesse caminho quando a condição passa.
*/ if (mode !== 'menu')  /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal();
  });
   /* Retoma a partida na etapa e no checkpoint guardados.
*/ function resume() {
     /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setScene(S.phase);
     /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal();
     /* Essa declaração usa const para preparar table, mantendo essas referências fixas.
*/ const  /* Aqui table recebe um objeto com os campos dessa parte.
*/ table = {
       /* Esse campo guarda explore com uma função para executar quando for chamada.
*/ explore:  /* Essa função recebe nenhum parâmetro e devolve uma das duas alternativas, conforme o teste. */ () => S.room ?  /* Monta cenário, morador, objetos e setas da vista atual do quarto. */ renderRoom() :  /* Monta a praça e os cartões dos quartos já disponíveis. */ hub(),
       /* Esse campo guarda watch com watch Start.
*/ watch: watchStart,
       /* Esse campo guarda fear Chase com uma função para executar quando for chamada.
*/ fearChase:  /* Essa função recebe nenhum parâmetro e devolve o resultado de chase Start. */ () =>  /* Prepara a perseguição, a distância da ameaça e o trecho atual. */ chaseStart('medo',  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(7, S.checkpoint || 0)),
       /* Aqui disponibiliza a operação fear Room para os outros módulos. Monta o confronto com Hunger no quarto de Pax e seu retorno à forma vulnerável.
*/ fearRoom,
       /* Esse campo guarda ninfa com uma função para executar quando for chamada.
*/ ninfa:  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
         /* Atualiza ninfa Errors usando 0.
*/ ninfaErrors = 0;
         /* Atualiza ninfa Consecutive usando 0.
*/ ninfaConsecutive = 0;
         /* Prepara a fala e a sequência de água da etapa atual de Ninfa.
*/ ninfaStart( /* Escolhe o menor valor entre os valores recebidos. */ Math.min(5, S.checkpoint || 0));
      },
       /* Esse campo guarda odio com uma função para executar quando for chamada.
*/ odio:  /* Essa função recebe nenhum parâmetro e devolve o resultado de start Arena. */ () =>  /* Liga o combate em primeira pessoa ao inventário e à história. */ startArena(false),
       /* Esse campo guarda comics com uma função para executar quando for chamada.
*/ comics:  /* Mostra a página atual dos quadrinhos e permite avançar a leitura. */ () =>  /* Mostra a página atual dos quadrinhos e permite avançar a leitura. */ comics( /* Escolhe o menor valor entre os valores recebidos. */ Math.min(2, S.checkpoint || 0)),
       /* Esse campo guarda arena com uma função para executar quando for chamada.
*/ arena:  /* Essa função recebe nenhum parâmetro e devolve o resultado de start Arena. */ () =>  /* Liga o combate em primeira pessoa ao inventário e à história. */ startArena(true),
       /* Esse campo guarda candy com candy Final.
*/ candy: candyFinal,
       /* Aqui disponibiliza a operação stairs para os outros módulos. Faz a passagem da arena para a escadaria e o labirinto.
*/ stairs,
       /* Esse campo guarda maze com uma função para executar quando for chamada.
*/ maze:  /* Essa função recebe nenhum parâmetro e devolve o resultado de maze Start. */ () =>  /* Monta a curva do labirinto e confere a direção escolhida. */ mazeStart(0),
       /* Esse campo guarda insane Chase com insane Chase Intro.
*/ insaneChase: insaneChaseIntro,
       /* Aqui disponibiliza a operação interrogation para os outros módulos. Monta as perguntas de Cassidy usando os acontecimentos da partida.
*/ interrogation,
       /* Aqui disponibiliza a operação revelation para os outros módulos. Apresenta os quadros da revelação e a sequência de reações.
*/ revelation,
       /* Esse campo guarda keys com general Keys.
*/ keys: generalKeys,
       /* Aqui disponibiliza a operação gate para os outros módulos. Monta as fechaduras e libera a abertura quando as duas chaves foram usadas.
*/ gate,
       /* Aqui disponibiliza a operação ending para os outros módulos. Apresenta a conversa com Anata e as consequências que permaneceram.
*/ ending,
       /* Marca se a história já foi concluída.
*/ complete:  /* Essa função recebe nenhum parâmetro e devolve o resultado dessa expressão. */ () =>  /* Atualiza location.href usando index.html home. */ location.href = 'index.html#home'
    };
     /* Executa table.S.phase com os valores definidos nessa parte.
*/ table[S.phase]();
  }
   /* Monta a tela de entrada e as opções de começar ou continuar uma partida.
*/ function menu() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Atualiza mode usando menu.
*/ mode = 'menu';
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Entrada/01-portal.png'));
     /* Essa declaração usa const para preparar stored, mantendo essas referências fixas.
*/ const  /* Aqui stored recebe o resultado de read.
*/ stored =  /* Lê um valor salvo no navegador e usa a alternativa quando a leitura falha. */ read('sentia-garden-v4', null);
     /* Atualiza S usando uma das duas alternativas, conforme o teste.
*/ S =  /* Confere a estrutura da partida antes de aceitar os dados salvos. */ valid(stored) ?  /* Atualiza os nomes nos textos antigos sem trocar as decisões nem as chaves do save. */ currentNames(stored) :  /* Cria uma partida nova, com os quartos, itens e descobertas ainda vazios. */ fresh();
     /* Atualiza a quantidade de anotações novas no botão do registro.
*/ updateJournalBadge();
     /* Mostra ou desativa o botão do gesto conforme o desbloqueio e a cena atual.
*/ updateGestureControl();
     /* Atualiza settings usando um objeto com os campos dessa parte.
*/ settings = {
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...settings,
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Lê um valor salvo no navegador e usa a alternativa quando a leitura falha. */ read('sentia-game-settings', {}),
       /* Esse campo guarda device com o resultado de read.
*/ device:  /* Lê um valor salvo no navegador e usa a alternativa quando a leitura falha. */ read('sentia-device', 'pc')
    };
     /* Esse teste confere se o resultado de .includes não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda pc.
*/ 'pc',  /* Essa posição da lista guarda mobile.
*/ 'mobile'].includes(settings.device))  /* Atualiza settings.device usando pc.
*/ settings.device = 'pc';
     /* Guarda as preferências de controles e movimento deste navegador.
*/ saveSettings();
     /* Essa declaração usa const para preparar wrap, mantendo essas referências fixas.
*/ const  /* Aqui wrap recebe o resultado de document.create Element.
*/ wrap =  /* Cria um elemento HTML do tipo div. */ document.createElement('div');
     /* Monta a marcação HTML interna desse elemento.
*/ wrap.innerHTML = '<p class="eyebrow">SENTIA APRESENTA</p><h1>Jardim<br>dos Ecos.</h1><p>Uma história sobre o que tentamos calar e o que continua aqui.</p><p class="hint">Terror psicológico, mortes e sustos. Você conduz o protagonista, mas pode não querer o mesmo que ele.</p><label for="start-device">Antes de entrar, escolha seus controles</label><select id="start-device"><option value="pc">PC · teclado e mouse</option><option value="mobile">Celular · toque</option></select>';
     /* Atualiza o valor desse campo ou controle.
*/ wrap.querySelector('select').value = settings.device;
     /* Liga essa função à mudança desse campo.
*/ wrap.querySelector('select').onchange =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
       /* Atualiza settings.device usando e.target.value.
*/ settings.device = e.target.value;
       /* Guarda as preferências de controles e movimento deste navegador.
*/ saveSettings();
    };
     /* Essa declaração usa const para preparar has, mantendo essas referências fixas.
*/ const  /* Aqui has recebe o resultado de valid.
*/ has =  /* Confere a estrutura da partida antes de aceitar os dados salvos. */ valid(stored);
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (has && !S.complete)  /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Continuar partida', resume));
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn(has ? 'Começar outra partida' : 'Começar',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (has && ! /* Executa confirm com os valores definidos nessa parte. */ confirm('Começar outra partida substitui o progresso local. Exporte o save pela pausa se quiser guardá-lo.'))  /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Atualiza S usando o resultado de fresh.
*/ S =  /* Cria uma partida nova, com os quartos, itens e descobertas ainda vazios. */ fresh();
       /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
       /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal();
       /* Apresenta a premissa e os primeiros caminhos do Jardim.
*/ intro();
    }));
     /* Essa declaração usa const para preparar imp, mantendo essas referências fixas.
*/ const  /* Aqui imp recebe o resultado de document.create Element.
*/ imp =  /* Cria um elemento HTML do tipo input. */ document.createElement('input');
     /* Atualiza imp.type usando file.
*/ imp.type = 'file';
     /* Atualiza imp.accept usando .json application json.
*/ imp.accept = '.json,application/json';
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ imp.hidden = true;
     /* Liga essa função à mudança desse campo.
*/ imp.onchange =  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async () => {
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
         /* Essa declaração usa const para preparar file, mantendo essas referências fixas.
*/ const  /* Aqui file recebe imp.files.0.
*/ file = imp.files[0];
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!file || file.size > 2e6)  /* Sinaliza o resultado de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Executa Error com os valores definidos nessa parte. */ Error();
         /* Essa declaração usa const para preparar parsed, mantendo essas referências fixas.
*/ const  /* Aqui parsed recebe o resultado de JSON.parse.
*/ parsed =  /* Converte o texto JSON em dados que o programa consegue usar. */ JSON.parse( /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* Executa file.text com os valores definidos nessa parte. */ file.text());
         /* Esse teste confere se o resultado de valid não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (! /* Confere a estrutura da partida antes de aceitar os dados salvos. */ valid(parsed))  /* Sinaliza o resultado de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Executa Error com os valores definidos nessa parte. */ Error();
         /* Atualiza S usando o resultado de current Names.
*/ S =  /* Atualiza os nomes nos textos antigos sem trocar as decisões nem as chaves do save. */ currentNames(parsed);
         /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
         /* Retoma a partida na etapa e no checkpoint guardados.
*/ resume();
      }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {
         /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de document.create Element.
*/ p =  /* Cria um elemento HTML do tipo p. */ document.createElement('p');
         /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ p.textContent = 'Esse arquivo não é uma partida válida do SENTIA V4.';
         /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(p);
      }
    };
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Importar partida',  /* Essa função recebe nenhum parâmetro e devolve o resultado de imp.click. */ () =>  /* Aciona o clique programado nesse controle. */ imp.click()), imp);
     /* Essa declaração usa const para preparar back, mantendo essas referências fixas.
*/ const  /* Aqui back recebe o resultado de document.create Element.
*/ back =  /* Cria um elemento HTML do tipo a. */ document.createElement('a');
     /* Atualiza back.href usando index.html jardim.
*/ back.href = 'index.html#jardim';
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ back.textContent = ' Voltar ao SENTIA';
     /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ wrap.append(back);
     /* Abre a janela e pausa o relógio e os controles do jogo.
*/ modal(wrap);
  }
   /* Apresenta a premissa e os primeiros caminhos do Jardim.
*/ function intro() {
     /* Limpa atores, mãos, caixas, efeitos e tarefas da cena anterior antes de montar outra.
*/ resetScene();
     /* Escolhe a imagem que fica no fundo da cena.
*/ background( /* Procura o caminho do recurso aprovado no catálogo de imagens. */ asset('/01-Entrada/02-caminho.png'));
     /* Prepara a fila de falas e escolhas e segura os controles de exploração durante a conversa.
*/ say(null, [ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A passagem parece menor depois que você atravessa. O caminho continua, mesmo quando você olha para trás.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você',  /* Essa posição da lista guarda Se eu não precisasse disso ninguém poderia usar contra mim.
*/ 'Se eu não precisasse disso, ninguém poderia usar contra mim.'],  /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Jardim.
*/ 'Jardim',  /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Há vozes adiante. Antes de qualquer conclusão, há alguém para conhecer.']],  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
       /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Aqui p recebe o resultado de panel.
*/ p =  /* Monta o painel de instruções e ações da cena. */ panel('Explore no seu ritmo', 'Converse com cada morador antes de explorar o quarto. Depois, use as setinhas e toque nos objetos do cenário. Novas pistas abrem assuntos nas conversas; as indicações dos moradores liberam outros quartos. Sanidade sobe nos quartos positivos e cai nos negativos. Candy só poderá ajudar depois que vocês se conhecerem.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ p.append( /* Cria um botão com o texto, a ação e a aparência indicados. */ btn('Conhecer o Jardim', hub));
    });
  }
   /* Traduz a tecla para a ação esperada naquela reação rápida.
*/ function keyAction(key) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(chase?.waiting&&chase.kind==='medo'&&chase.index===chase.length-1&&key==='e') /* Devolve refuge e encerra essa chamada da função.
*/ return 'refuge';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(qte?.expected==='hold'&&key===' ') /* Devolve hold e encerra essa chamada da função.
*/ return 'hold';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(qte?.expected==='push'&& /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda w.
*/ 'w', /* Essa posição da lista guarda Arrow Up.
*/ 'ArrowUp'].includes(key)) /* Devolve push e encerra essa chamada da função.
*/ return 'push';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (qte?.expected === 'back' &&  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda Arrow Down.
*/ 'ArrowDown',  /* Essa posição da lista guarda s.
*/ 's'].includes(key))  /* Devolve back e encerra essa chamada da função.
*/ return 'back';
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (chase?.waiting &&  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda Arrow Up.
*/ 'ArrowUp',  /* Essa posição da lista guarda w.
*/ 'w'].includes(key))  /* Devolve up e encerra essa chamada da função.
*/ return 'up';
     /* Essa declaração usa const para preparar map, mantendo essas referências fixas.
*/ const  /* Aqui map recebe um objeto com os campos dessa parte.
*/ map = {
       /* Esse campo guarda Arrow Left com left.
*/ ArrowLeft: 'left',
       /* Esse campo guarda a com left.
*/ a: 'left',
       /* Esse campo guarda Arrow Right com right.
*/ ArrowRight: 'right',
       /* Esse campo guarda d com right.
*/ d: 'right',
       /* Esse campo guarda Arrow Down com down.
*/ ArrowDown: 'down',
       /* Esse campo guarda s com down.
*/ s: 'down',
       /* Esse campo guarda Arrow Up com center.
*/ ArrowUp: 'center',
       /* Esse campo guarda w com center.
*/ w: 'center',
       /* Esse campo guarda com guard.
*/ ' ': 'guard',
       /* Esse campo guarda e com uma das duas alternativas, conforme o teste.
*/ e:  /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda intercept.
*/ 'intercept', /* Essa posição da lista guarda cross.
*/ 'cross'].includes(qte?.expected)?qte.expected:'cross'
    };
     /* Devolve map.key e encerra essa chamada da função.
*/ return map[key];
  }
   /* Escuta o evento keydown e liga esse evento à função definida aqui.
*/ document.addEventListener('keydown',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
     /* Esse teste confere se e.key é igual a Escape, e só entra nesse caminho quando a condição passa.
*/ if (e.key === 'Escape') {
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
       /* Esse teste confere se open está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if ( /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#game-modal').open) {
         /* Esse teste confere se mode é diferente de menu, e só entra nesse caminho quando a condição passa.
*/ if (mode !== 'menu')  /* Fecha a janela e retoma o jogo e o áudio.
*/ closeModal();
      } else  /* Monta as preferências, controles e opções de salvamento da pausa.
*/ pauseMenu();
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (paused || e.repeat ||  /* Confere se o texto corresponde a esse padrão de expressão regular. */ /INPUT|SELECT|TEXTAREA/.test(e.target.tagName))  /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe uma das duas alternativas, conforme o teste.
*/ key = e.key.length === 1 ?  /* Converte o texto para minúsculas para facilitar a comparação. */ e.key.toLowerCase() : e.key;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(mode==='watch'&& /* Confere se o texto corresponde a esse padrão de expressão regular. */ /^[1-8]$/.test(key)){
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ document.querySelector('[data-camera="'+( /* Converte esse valor para número. */ Number(key)-1)+'"]')?.click(); /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(chase?.kind==='medo'&&key==='e'&&chase.index===chase.length-1&&chase.progress>=2.6*.65){ /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Confere a luz e a proximidade antes de entrar no quarto de Pax.
*/ enterPaxRefuge(chase); /* Encerra essa função sem devolver outro valor.
*/ return;}
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(chase?.kind==='medo'&&(mode==='chase'||mode==='prompt')&&key==='f'){ /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Reacende a lanterna respeitando o pequeno intervalo entre usos.
*/ relightChaseLamp(); /* Encerra essa função sem devolver outro valor.
*/ return;}
     /* Esse teste confere se key é igual a l, e só entra nesse caminho quando a condição passa.
*/ if (key === 'l') { /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Mostra o gesto desbloqueado e a reação curta do Eco presente.
*/ makeL(); /* Encerra essa função sem devolver outro valor.
*/ return;}
     /* Esse teste confere se key é igual a i, e só entra nesse caminho quando a condição passa.
*/ if (key === 'i')  /* Devolve o resultado de inventory e encerra essa chamada da função.
*/ return  /* Monta os objetos da bolsa e suas ações de observar e equipar. */ inventory();
     /* Esse teste confere se key é igual a j, e só entra nesse caminho quando a condição passa.
*/ if (key === 'j')  /* Devolve o resultado de journal e encerra essa chamada da função.
*/ return  /* Monta as descobertas, a busca e os indicadores de leitura do registro. */ journal();
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'runTutorial' && key === 'Shift') {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ retry?.();
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se mode é igual a arena, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'arena') {
       /* Essa declaração usa const para preparar moves, mantendo essas referências fixas.
*/ const  /* Aqui moves recebe um objeto com os campos dessa parte.
*/ moves = {
         /* Esse campo guarda w com up.
*/ w: 'up',
         /* Esse campo guarda s com down.
*/ s: 'down',
         /* Esse campo guarda a com left.
*/ a: 'left',
         /* Esse campo guarda d com right.
*/ d: 'right',
         /* Esse campo guarda Arrow Left com turn Left.
*/ ArrowLeft: 'turnLeft',
         /* Esse campo guarda Arrow Right com turn Right.
*/ ArrowRight: 'turnRight',
         /* Esse campo guarda Shift com run.
*/ Shift: 'run',
         /* Esse campo guarda com guard.
*/ ' ': 'guard'
      };
       /* Esse teste confere se moves.key está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (moves[key]) {
         /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
         /* Atualiza keys Held.moves.key usando true.
*/ keysHeld[moves[key]] = true;
         /* esse comando registra se uma ação de movimento ou defesa está sendo mantida.
*/ Arena.press(moves[key], true);
      }
       /* Esse teste confere se key é igual a f, e só entra nesse caminho quando a condição passa.
*/ if (key === 'f')  /* esse comando resolve ataques, luz e coleta de objetos conforme equipamento, alcance, fôlego e fase da arena.
*/ Arena.action('attack');
       /* Esse teste confere se key é igual a q, e só entra nesse caminho quando a condição passa.
*/ if (key === 'q')  /* esse comando resolve ataques, luz e coleta de objetos conforme equipamento, alcance, fôlego e fase da arena.
*/ Arena.action('light');
       /* Esse teste confere se key é igual a e, e só entra nesse caminho quando a condição passa.
*/ if (key === 'e')  /* esse comando resolve ataques, luz e coleta de objetos conforme equipamento, alcance, fôlego e fase da arena.
*/ Arena.action('interact');
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ((mode === 'chase'||chase?.waiting) && key === 'b') { /* Atualiza chase.looking Back usando a negação de chase.looking Back.
*/ chase.lookingBack=!chase.lookingBack; /* Encerra essa função sem devolver outro valor.
*/ return;}
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ((mode === 'chase'||chase?.waiting) && key === 'Shift') {
       /* Atualiza keys Held.run usando true.
*/ keysHeld.run = true;
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'dialogue' && key === 'Enter' && ! /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#advance').hidden && ! /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda BUTTON.
*/ 'BUTTON',  /* Essa posição da lista guarda A.
*/ 'A'].includes(e.target.tagName)) {
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
       /* Completa a frase atual ou passa para a próxima fala e suas escolhas.
*/ nextLine();
       /* Encerra essa função sem devolver outro valor.
*/ return;
    }
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'prompt' && timed) {
       /* Essa declaração usa const para preparar action, mantendo essas referências fixas.
*/ const  /* Aqui action recebe o resultado de key Action.
*/ action =  /* Traduz a tecla para a ação esperada naquela reação rápida. */ keyAction(key);
       /* Essa declaração usa const para preparar buttons, mantendo essas referências fixas.
*/ const  /* Aqui buttons recebe uma lista com 1 posições.
*/ buttons = [ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Procura todos os elementos que correspondem ao seletor. */ $('#prompt-actions').querySelectorAll('button')];
       /* Essa declaração usa const para preparar i, mantendo essas referências fixas.
*/ const  /* Aqui i recebe o resultado de buttons.find Index.
*/ i =  /* Procura a posição do primeiro item que passa nessa condição. */ buttons.findIndex( /* Essa função recebe b e devolve o resultado dessa expressão. */ b => b.dataset.action===action ||  /* Confere se esse valor está presente na lista ou no texto. */ b.textContent.includes({
         /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: 'Esquerda',
         /* Define a posição ou o estado ligado ao lado direito.
*/ right: 'Direita',
         /* Esse campo guarda center com Meio.
*/ center: 'Meio',
         /* Esse campo guarda up com Frente.
*/ up: 'Frente',
         /* Esse campo guarda down com Abaixar.
*/ down: 'Abaixar'
      }[action] || '~') ||  /* Confere se o texto começa com o trecho indicado. */ b.textContent.toLowerCase().startsWith({
         /* Define a posição ou o estado ligado ao lado esquerdo.
*/ left: 'esquivar à esquerda',
         /* Define a posição ou o estado ligado ao lado direito.
*/ right: 'esquivar à direita',
         /* Esse campo guarda down com abaixar.
*/ down: 'abaixar',
         /* Esse campo guarda guard com proteger.
*/ guard: 'proteger',
         /* Esse campo guarda intercept com interceptar.
*/ intercept: 'interceptar',
         /* Esse campo guarda hold com segurar.
*/ hold: 'segurar',
         /* Esse campo guarda push com empurrar.
*/ push: 'empurrar',
         /* Esse campo guarda back com recuar.
*/ back: 'recuar',
         /* Esse campo guarda cross com atravessar.
*/ cross: 'atravessar'
      }[action] || '~'));
       /* Esse teste confere se i é maior ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (i >= 0) {
         /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault();
         /* Atualiza prompt Keyboard Input usando true.
*/ promptKeyboardInput=true;
         /* Garante a execução do finally depois da tentativa, mesmo quando uma exceção precisa continuar para fora.
*/ try { /* Aciona o clique programado nesse controle.
*/ buttons[i].click();} finally { /* Atualiza prompt Keyboard Input usando false.
*/ promptKeyboardInput=false;}
      }
    }
  });
   /* Escuta o evento keyup e liga esse evento à função definida aqui.
*/ document.addEventListener('keyup',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ e => {
     /* Essa declaração usa const para preparar key, mantendo essas referências fixas.
*/ const  /* Aqui key recebe o resultado de e.key.to Lower Case.
*/ key =  /* Converte o texto para minúsculas para facilitar a comparação. */ e.key.toLowerCase();
     /* Essa declaração usa const para preparar map, mantendo essas referências fixas.
*/ const  /* Aqui map recebe um objeto com os campos dessa parte.
*/ map = {
       /* Esse campo guarda w com up.
*/ w: 'up',
       /* Esse campo guarda s com down.
*/ s: 'down',
       /* Esse campo guarda a com left.
*/ a: 'left',
       /* Esse campo guarda d com right.
*/ d: 'right',
       /* Esse campo guarda arrowleft com turn Left.
*/ arrowleft: 'turnLeft',
       /* Esse campo guarda arrowright com turn Right.
*/ arrowright: 'turnRight',
       /* Esse campo guarda shift com run.
*/ shift: 'run',
       /* Esse campo guarda com guard.
*/ ' ': 'guard'
    };
     /* Esse teste confere se map.key está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (map[key]) {
       /* Atualiza keys Held.map.key usando false.
*/ keysHeld[map[key]] = false;
       /* esse comando registra se uma ação de movimento ou defesa está sendo mantida.
*/ Arena.press(map[key], false);
    }
  });
   /* Escuta o evento visibilitychange e liga esse evento à função definida aqui.
*/ document.addEventListener('visibilitychange',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (document.hidden && mode !== 'menu' && !paused)  /* Monta as preferências, controles e opções de salvamento da pausa.
*/ pauseMenu();
  });
   /* Escuta o evento blur e liga esse evento à função definida aqui.
*/ window.addEventListener('blur',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Atualiza keys Held usando um objeto com os campos dessa parte.
*/ keysHeld = {};
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (mode !== 'menu' && !paused)  /* Monta as preferências, controles e opções de salvamento da pausa.
*/ pauseMenu();
  });
   /* Escuta o evento beforeunload e liga esse evento à função definida aqui.
*/ window.addEventListener('beforeunload',  /* Essa função agrupa a ação executada quando for chamada nesta parte. */ () => {
     /* Esse teste confere se S está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (S)  /* Guarda a partida atual neste navegador e atualiza o aviso de salvamento.
*/ save();
  });
                                                                   
   /* Atualiza o jogo a cada quadro usando o tempo que passou e respeitando a pausa.
*/ function tick(now) {
     /* Essa declaração usa const para preparar dt, mantendo essas referências fixas.
*/ const  /* Aqui dt recebe o resultado de Math.max.
*/ dt =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(.1, (now - loopLast) / 1000));
     /* Atualiza loop Last usando now.
*/ loopLast = now;
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (!paused && S) {
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (writing && mode === 'dialogue') {
         /* Atualiza writing.elapsed usando dt.
*/ writing.elapsed += dt;
         /* Esse teste confere se writing.elapsed é maior ou igual a 0.03, e só entra nesse caminho quando a condição passa.
*/ if (writing.elapsed >= .03) {
           /* Atualiza writing.elapsed usando o resultado de Math.max.
*/ writing.elapsed =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,writing.elapsed-.03);
           /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#speech').textContent += writing.letters[ /* Aumenta writing.index em um para atualizar o contador. */ writing.index++];
           /* Pede o bipe correspondente à letra e à pessoa que está falando.
*/ voiceLetter(writing.letters[writing.index-1]);
           /* Esse teste confere se writing.index é maior ou igual a writing.letters.length, e só entra nesse caminho quando a condição passa.
*/ if (writing.index >= writing.letters.length) {
             /* Atualiza writing usando um valor vazio.
*/ writing=null;  /* Retira esse elemento da página.
*/ $('#dialogue').classList.remove('is-writing');  /* Define o atributo aria label desse elemento.
*/ $('#advance').setAttribute('aria-label','Continuar');
          }
        }
      }
       /* Atualiza S.play Seconds usando dt.
*/ S.playSeconds += dt;
       /* Atualiza rescue Cooldown usando o resultado de Math.max.
*/ rescueCooldown =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, rescueCooldown - dt);
       /* Esse teste confere se timed está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (timed) {
         /* Atualiza timed.left usando dt.
*/ timed.left -= dt;
         /* Esse teste confere se mode é igual a dialogue, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'dialogue')  /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#status').textContent = 'Resposta · ' +  /* Arredonda o número para cima. */ Math.ceil( /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, timed.left)) + ' s';
         /* Atualiza .style.transform usando o resultado dessa expressão.
*/ $('#timer-fill').style.transform = 'scaleX(' +  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0, timed.left / timed.total) + ')';
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(qte&&mode==='prompt'){
           /* Essa declaração usa const para preparar incoming, mantendo essas referências fixas.
*/ const  /* Aqui incoming recebe o resultado dessa expressão.
*/ incoming=1- /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,timed.left/timed.total);
           /* Atualiza .dataset.urgency usando uma das duas alternativas, conforme o teste.
*/ $('#stage').dataset.urgency=incoming>.72?'critical':'incoming';
           /* Esse teste confere se qte.eco é igual a tristeza, e só entra nesse caminho quando a condição passa.
*/ if(qte.eco==='tristeza'){
             /* Define o valor da propriedade de estilo wave pressure.
*/ $('#stage').style.setProperty('--wave-pressure', /* Converte esse valor para texto. */ String(.3+incoming*.5));
             /* Define o valor da propriedade de estilo orb scale.
*/ $('#stage').style.setProperty('--orb-scale', /* Converte esse valor para texto. */ String(settings.reduced?1:.88+incoming*.15));
          }
           /* Atualiza qte.tension Clock usando o resultado dessa expressão.
*/ qte.tensionClock=(qte.tensionClock||0)+dt;
           /* Esse teste confere se qte.tension Clock é maior ou igual a 0.12, e só entra nesse caminho quando a condição passa.
*/ if(qte.tensionClock>=.12){ /* Atualiza qte.tension Clock usando 0.
*/ qte.tensionClock=0; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ window.AudioSentia?.setTension?.( /* Escolhe o menor valor entre os valores recebidos. */ Math.min(1,.4+incoming*.24+(qte.eco==='tristeza'?S.checkpoint*.055:ninfaErrors*.05)),{ /* Esse campo guarda kind com uma das duas alternativas, conforme o teste.
*/ kind:qte.eco==='tristeza'?'ninfa':'chase', /* Esse campo guarda proximity com o resultado dessa expressão.
*/ proximity:.5+incoming*.35, /* Esse campo guarda health com uma das duas alternativas, conforme o teste.
*/ health:qte.eco==='tristeza'?(S.flags.ninfaVitality||100)/100:1, /* Esse campo guarda charging com o resultado dessa expressão.
*/ charging:incoming>.58});}
        }
         /* Esse teste confere se timed.left é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (timed.left <= 0) {
           /* Essa declaração usa const para preparar fn, mantendo essas referências fixas.
*/ const  /* Aqui fn recebe timed.done.
*/ fn = timed.done;
           /* Atualiza timed usando um valor vazio.
*/ timed = null;
           /* Executa fn com os valores definidos nessa parte.
*/ fn();
        }
      }
       /* Esse teste confere se clock Task está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if (clockTask) {
         /* Atualiza clock Task.left usando dt.
*/ clockTask.left -= dt;
         /* Esse teste confere se clock Task.left é menor ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if (clockTask.left <= 0) {
           /* Essa declaração usa const para preparar fn, mantendo essas referências fixas.
*/ const  /* Aqui fn recebe clock Task.done.
*/ fn = clockTask.done;
           /* Atualiza clock Task usando um valor vazio.
*/ clockTask = null;
           /* Executa fn com os valores definidos nessa parte.
*/ fn();
        }
      }
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'watch' && watch)  /* Atualiza os prazos e confere se o jogador encontrou Hunger a tempo.
*/ tickWatch(dt);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if ((mode === 'chase' || (mode==='prompt'&&chase?.waiting)) && chase)  /* Avança a corrida e calcula a aproximação do perseguidor.
*/ tickChase(dt);
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (mode === 'explore' && S.room && ! /* Confere se esse Eco já está na lista de mortos. */ dead(S.room)) {
         /* Atualiza S.sanity usando o resultado de Math.max.
*/ S.sanity =  /* Escolhe o maior valor entre os valores recebidos. */ Math.max(0,  /* Escolhe o menor valor entre os valores recebidos. */ Math.min(100, S.sanity + dt * ( /* Confere se esse valor está presente na lista ou no texto. */ [ /* Essa posição da lista guarda tristeza.
*/ 'tristeza',  /* Essa posição da lista guarda odio.
*/ 'odio',  /* Essa posição da lista guarda medo.
*/ 'medo',  /* Essa posição da lista guarda ansiedade.
*/ 'ansiedade',  /* Essa posição da lista guarda culpa.
*/ 'culpa'].includes(S.room) ? -1 : 2)));
         /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if (S.sanity === 0 && S.talks.A1 && ! /* Confere se esse Eco já está na lista de mortos. */ dead('amor') && rescueCooldown === 0)  /* Mostra o auxílio de Candy quando as condições de ajuda foram cumpridas.
*/ rescue(renderRoom);
      }
       /* Esse teste confere se mode é igual a explore, e só entra nesse caminho quando a condição passa.
*/ if(mode==='explore') { /* Atualiza a barra de sanidade e a indicação do efeito daquele quarto.
*/ updateSanityHUD(); /* Esse teste confere se dataset.gesture é igual a 00 repouso, e só entra nesse caminho quando a condição passa.
*/ if( /* Procura o primeiro elemento da página que corresponde ao seletor indicado. */ $('#hands').dataset.gesture==='00-repouso') /* Escolhe a mão comum ou o equipamento que está realmente na bolsa.
*/ explorationHands();}
    }
     /* Agenda a atualização visual para o próximo quadro do navegador.
*/ requestAnimationFrame(tick);
  }
   /* Monta a tela de entrada e as opções de começar ou continuar uma partida.
*/ menu();
   /* Agenda a atualização visual para o próximo quadro do navegador.
*/ requestAnimationFrame(tick);
   /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return {
     /* Esse campo guarda state com uma função para executar quando for chamada.
*/ state:  /* Essa função recebe nenhum parâmetro e devolve o resultado de structured Clone. */ () =>  /* Copia os dados sem compartilhar os objetos internos com a versão original. */ structuredClone(S),
     /* Esse campo guarda mode com uma função para executar quando for chamada.
*/ mode:  /* Essa função recebe nenhum parâmetro e devolve mode. */ () => mode,
     /* Esse campo guarda settings com uma função para executar quando for chamada.
*/ settings:  /* Essa função recebe nenhum parâmetro e devolve um objeto com os campos dessa parte. */ () => ({
       /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...settings
    }),
     /* Aqui disponibiliza a operação asset para os outros módulos. Procura o caminho do recurso aprovado no catálogo de imagens.
*/ asset,
     /* Aqui disponibiliza a operação base Sprite para os outros módulos. Procura a pose pelo nome e mantém a imagem de morte separada do choro vulnerável.
*/ baseSprite,
     /* Aqui disponibiliza a operação valid para os outros módulos. Confere a estrutura da partida antes de aceitar os dados salvos.
*/ valid,
     /* Esse campo guarda runtime com uma função para executar quando for chamada.
*/ runtime: /* Essa função recebe nenhum parâmetro e devolve um objeto com os campos dessa parte. */ ()=>({ /* Esse campo guarda writing com a negação de a negação de writing.
*/ writing:!!writing, /* Esse campo guarda watch com uma das duas alternativas, conforme o teste.
*/ watch:watch? /* Copia os dados sem compartilhar os objetos internos com a versão original. */ structuredClone(watch):null, /* Esse campo guarda chase com uma das duas alternativas, conforme o teste.
*/ chase:chase? /* Copia os dados sem compartilhar os objetos internos com a versão original. */ structuredClone(chase):null, /* Esse campo guarda paused com paused.
*/ paused})
  };
})();

