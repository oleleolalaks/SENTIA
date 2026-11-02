'use strict';

// Assuntos que só aparecem depois de a pista ser encontrada ou o encontro acontecer.
// O texto dos objetos fica na investigação; estas respostas são conversas novas sobre o que foi descoberto.
window.CONVIVENCIA = [
  {id:'sunny-bilhete', eco:'felicidade', clues:['felicidade.p6'], label:'Perguntar sobre o bilhete atrás do mural', lines:[['Você','Eu li o bilhete. Você acha que uma visita precisa ter alguma recompensa?'],['Sunny','Não acho isso quando é com os outros. Comigo eu fico tentando garantir a próxima.'],['Sunny','Eu queria que você pudesse voltar num dia em que eu não tivesse nada pronto.']]},
  {id:'sunny-pax', eco:'felicidade', allClues:['calma.p1','felicidade.p4'], label:'Falar sobre o lugar que Pax guarda para você', lines:[['Você','Pax deixa espaço mesmo quando ninguém tem uma boa notícia.'],['Sunny','É por isso que eu consigo ir até lá sem ensaiar alguma coisa.'],['Sunny','Não conta isso como se você tivesse descoberto um defeito nele.']]},
  {id:'pax-hunger', eco:'calma', talks:['P1'], label:'Perguntar por que Hunger procura você', lines:[['Você','Você disse que Hunger vem aqui. O que ele procura?'],['Pax','Um lugar onde não precise vigiar todas as portas sozinho.'],['Pax','Ele se afasta quando está assustado. Não confunda a distância com falta de afeto.'],['Pax','Se você o encontrar, avise antes de se aproximar. Não teste o limite só para ver o que acontece.']]},
  {id:'pax-ninfa', eco:'calma', talks:['N2'], label:'Contar o que Ninfa disse sobre você', lines:[['Você','Ninfa disse que você se preocupa em perceber tarde demais.'],['Pax','Eu conto com quem está perto para dizer quando alguma coisa machuca. Não consigo adivinhar tudo.'],['Pax','Ela te contou isso para aproximar você de nós. O que você pretende fazer com essa confiança?']]},
  {id:'pax-carta', eco:'calma', clues:['calma.p5'], label:'Conversar sobre a segunda xícara', lines:[['Você','Você guarda um lugar para alguém que pode nem voltar.'],['Pax','Guardar um lugar não é prender alguém nele.'],['Pax','Eu quero que possam escolher ficar. Inclusive você.']]},
  {id:'candy-hunger', eco:'amor', clues:['amor.p4'], label:'Perguntar das flores de Hunger', lines:[['Você','As flores são dele?'],['Candy','Algumas. Ele deixa perto da porta e vai embora.'],['Candy','Não quer que o cuidado vire um interrogatório. Se você percebeu, pode agradecer sem obrigá-lo a explicar.']]},
  {id:'candy-beerus', eco:'amor', allClues:['amor.p5','odio.p5'], label:'Perguntar o que existe entre você e Beerus', lines:[['Você','Há uma lembrança sua no quarto dele.'],['Candy','Ele guarda coisas que não consegue dizer em voz alta.'],['Candy','Ele parece feito só de hostilidade quando alguém entra procurando isso. Eu conheço mais do que essa parte.']]},
  {id:'ninfa-diario', eco:'tristeza', clues:['tristeza.p2'], label:'Pedir licença para falar do diário', lines:[['Você','Eu vi suas lembranças. Não quero fingir que não li.'],['Ninfa','Obrigada por dizer. Você pode perguntar, mas eu também posso não responder.'],['Ninfa','Uma lembrança não é uma instrução de onde ferir alguém.']]},
  {id:'ninfa-sunny', eco:'tristeza', allClues:['tristeza.p4','felicidade.p2'], label:'Falar da música de Sunny', lines:[['Você','Vocês tocaram juntos?'],['Ninfa','Ele errou uma nota e continuou. Eu ri. Não precisou virar uma explicação sobre eu estar melhor.'],['Ninfa','Às vezes companhia é isso: deixar o momento existir.']]},
  {id:'aurea-escudo', eco:'orgulho', allClues:['orgulho.p4','orgulho.p6'], label:'Perguntar por que o escudo tem marcas', lines:[['Você','Você já precisou dessa proteção?'],['Aurea','Precisei. Oferecer não significa que nunca tive medo.'],['Aurea','A alça fica voltada para você. Aprenda a segurar antes de achar que está invulnerável.']]},
  {id:'friska-trabalho', eco:'determinacao', allClues:['determinacao.p2','determinacao.p4'], label:'Perguntar sobre a tentativa que ficou inacabada', lines:[['Você','Eu vi as peças que você guardou.'],['Friska','Guardei porque ainda posso tentar de outro jeito. Não é um monte de derrotas.'],['Friska','Você pode ajudar com a peça que eu te oferecer. A faca não está entre elas.']]},
  {id:'hermes-ninfa', eco:'ansiedade', clues:['ansiedade.p5'], label:'Perguntar sobre o presente de Ninfa', lines:[['Você','Você ainda não achou utilidade para o presente?'],['Hermes','Não. Isso não demonstra ausência de valor. Demonstra uma pergunta incompleta.'],['Hermes','Ela deixou aqui porque se lembrou de mim. Ainda não precisei de outro motivo.']]},
  {id:'hermes-faca', eco:'ansiedade', items:['faca'], label:'Mostrar a faca de Friska', lines:[['Hermes','Eu reconheço a faca. Ela não oferecia essa peça.'],['Você','Agora está comigo.'],['Hermes','Isso descreve a posse. Você omitiu como aconteceu.'],['Hermes','Não transforme a minha falta de informação em prova de que ninguém poderia ter impedido.']]},
  {id:'lumen-hunger', eco:'culpa', clues:['culpa.p5'], label:'Perguntar pelo bilhete de Hunger', lines:[['Você','Ele deixou uma mensagem para você.'],['Lúmen','Eu li várias vezes. Na primeira parecia uma coisa boa. Depois comecei a procurar o que eu podia ter entendido errado.'],['Lúmen','Não queria precisar pedir desculpa por ter gostado.']]},
  {id:'hunger-pax', eco:'medo', flags:['topic-pax-hunger'], label:'Dizer que conversou com Pax sobre ele', lines:[['Você','Pax falou de quando você vai até lá.'],['Hunger','Ele te ofereceu um lugar. Você voltou para procurar a minha fraqueza?'],['Você','Quero entender por que você está me evitando.'],['Hunger','Você carrega uma faca que ela não emprestaria. E o lugar que Pax deixava aberto está vazio.']]},
  {id:'hunger-lumen', eco:'medo', clues:['culpa.p5'], label:'Perguntar pela mensagem para Lúmen', lines:[['Você','Lúmen guardou o seu bilhete.'],['Hunger','Não use o nome dele para conseguir que eu abaixe a guarda.'],['Hunger','Você ainda tem tempo de deixá-lo longe disso.']]},
  {id:'beerus-candy', eco:'odio', allClues:['amor.p5','odio.p5'], label:'Perguntar por que ele guarda a lembrança de Candy', lines:[['Você','Você não jogou a lembrança fora.'],['Beerus','Por que jogaria?'],['Você','Você parece odiar tudo.'],['Beerus','Você chegou com essa resposta e está procurando onde encaixar. Candy não precisa disso para falar comigo.']]}
];
// Esse assunto só aparece quando a faca já passou para a bolsa.
window.CONVIVENCIA.push({
  id:'beerus-faca',eco:'odio',items:['faca'],label:'Perguntar por que ele reconheceu a faca',
  lines:[
    {who:'Beerus',text:'Você trouxe a faca dela até aqui.',pose:'quebrando'},
    ['Você','Você reconheceu antes de eu falar.'],
    {who:'Beerus',text:'Ela não ofereceria. Eu conhecia o jeito como ela guardava as coisas.',pose:'quebrou'},
    {who:'Beerus',text:'Guarda isso antes de chamar a minha raiva de defeito.',pose:'nao-gostou'}
  ]
});

// Descobertas cruzadas e encontros abrem conversas independentes. As perdas só
// entram nas falas que as exigem; relembrar um assunto não altera seu desfecho.
window.CONVIVENCIA.push(
  {
    id:'sunny-semente',eco:'felicidade',allClues:['felicidade.p3','felicidade.p5'],label:'Perguntar pelo desenho da semente',
    lines:[
      ['Você','Você desenha tantas coisas. Já desenhou a semente da janela?'],
      {who:'Sunny',text:'Umas quatro vezes. Em três eu coloquei uma flor que ela ainda não tem.',pose:'base'},
      ['Você','E no quarto?'],
      {who:'Sunny',text:'Ficou parecendo uma pedrinha num monte de terra. Foi para aquela caixa.',pose:'abalado'},
      ['Você','Por que não jogou fora?'],
      {who:'Sunny',text:'Porque é como ela está agora. Se eu só guardar a flor, vou esquecer quanto tempo fiquei olhando para a terra.',pose:'acolhido'},
      {who:'Sunny',text:'Depois eu te mostro. Mas não vale dizer que está brotando só para eu ficar contente. Eu vou olhar.',pose:'gostou'}
    ]
  },
  {
    id:'sunny-visita-sem-fita',eco:'felicidade',flags:['visit-acolhimento'],alive:['calma'],label:'Retomar a visita em que você ficou sem tocar',
    lines:[
      ['Você','Na fonte, você ficou mesmo depois de deixar a fita.'],
      {who:'Sunny',text:'Fiquei esperando Pax perguntar o que eu tinha preparado.',pose:'base'},
      ['Você','E ele perguntou?'],
      {who:'Sunny',text:'Perguntou se eu estava sentado em cima da ponta. Eu estava.',pose:'gostou'},
      ['Você','Você podia ter ido sem levar nada.'],
      {who:'Sunny',text:'Eu sei. Na ida eu sei. É quando chego na porta que começo a procurar alguma coisa nos bolsos.',pose:'abalado'},
      {who:'Sunny',text:'Da próxima vez posso deixar a fita aqui. Você pode ir junto, se quiser. Só não anuncia que eu consegui.',pose:'acolhido'}
    ]
  },
  {
    id:'sunny-fita-sem-pax',eco:'felicidade',allClues:['felicidade.p4','calma.p5'],dead:['calma'],label:'Falar do presente que Pax não vai receber',
    lines:[
      ['Você','O presente para Pax continua aqui.'],
      {who:'Sunny',text:'Eu ia trocar a fita. A verde tinha ficado curta.',pose:'abalado'},
      ['Você','Era importante trocar?'],
      {who:'Sunny',text:'Naquele dia parecia. Eu queria chegar com tudo direito e ficar mais um pouco.',pose:'quebrando'},
      ['Você','Você ainda pode deixar no quarto dele.'],
      {who:'Sunny',text:'Eu sei onde é o quarto. O que eu não sei é como chegar lá e não esperar que ele fale.',pose:'quebrou'},
      {who:'Sunny',text:'Hoje fica aqui. Não leva para ele por mim. Eu não pedi isso.',pose:'nao-gostou'}
    ]
  },
  {
    id:'sugar-descanso',eco:'amor',clues:['amor.p6'],talks:['A1'],label:'Perguntar quem faz companhia quando você para',
    lines:[
      ['Você','Você tem um canto separado dos lugares de visita. Quem pode sentar lá?'],
      {who:'Candy',text:'Depende do dia. Às vezes eu deixo uma coisa em cima do assento para ninguém perguntar.',pose:'base'},
      ['Você','Você podia dizer que quer ficar sozinha.'],
      {who:'Candy',text:'Podia. Também podia aceitar companhia sem já levantar para buscar alguma coisa.',pose:'abalado'},
      ['Você','Quer que eu fique?'],
      {who:'Candy',text:'Um pouco. Se alguém passar, não diga que está tudo bem por mim. Eu mesma respondo.',pose:'acolhido'},
      {who:'Candy',text:'E senta aqui. Desse lado eu consigo olhar a janela sem você achar que estou esperando outra visita.',pose:'gostou'}
    ]
  },
  {
    id:'sugar-flores-diferentes',eco:'amor',allClues:['amor.p4','medo.p2'],flags:['topic-candy-hunger'],label:'Perguntar por que as flores não ficam na janela',
    lines:[
      ['Você','No quarto de Hunger a janela fica coberta. Você deixa as flores longe da sua também.'],
      {who:'Candy',text:'Estas vieram de um lugar com pouca luz. No primeiro dia eu pus todas no mesmo vaso.',pose:'base'},
      ['Você','Ele reclamou?'],
      {who:'Candy',text:'Voltou para mudar o vaso de lugar. Disse que eu estava acabando com elas.',pose:'gostou'},
      ['Você','Você não ficou chateada com o jeito?'],
      {who:'Candy',text:'Fiquei. Eu disse. Ele ficou quieto e me mostrou onde deixar.',pose:'base'},
      {who:'Candy',text:'Agora pergunto antes de mudar. E ele pode me ensinar uma coisa sem falar comigo daquele jeito.',pose:'acolhido'}
    ]
  },
  {
    id:'sugar-presente-lumen',eco:'amor',allClues:['culpa.p3','amor.p1'],dead:['culpa'],label:'Contar que o presente de Lúmen continua esperando',
    lines:[
      ['Você','Lúmen deixou um presente pronto. Ainda está no quarto.'],
      {who:'Candy',text:'Ele me perguntou se devia embrulhar outra vez. Eu disse que aquela dobra estava boa.',pose:'abalado'},
      ['Você','Talvez fosse para Hunger.'],
      {who:'Candy',text:'Talvez. Não vou abrir para descobrir uma resposta que Lúmen podia ter dado.',pose:'base'},
      ['Você','E vai deixar esperando?'],
      {who:'Candy',text:'Vou lembrar onde ele deixou. Depois posso perguntar a quem o visitava. Eu também ainda tenho perguntas.',pose:'quebrando'},
      {who:'Candy',text:'Obrigada por me contar onde está. Não precisa trazer agora. Quero ver o quarto antes que alguém tente arrumar tudo.',pose:'abalado'}
    ]
  },
  {
    id:'ninfa-fotografia-hermes',eco:'tristeza',clues:['tristeza.p3'],talks:['H1'],label:'Perguntar por que Hermes saiu borrado na fotografia',
    lines:[
      ['Você','Hermes calculou até a minha corrida. Não conseguiu esperar pela fotografia?'],
      {who:'Ninfa',text:'Ele esperou. Depois foi conferir quanto faltava para terminar.',pose:'gostou'},
      ['Você','Foi nessa hora?'],
      {who:'Ninfa',text:'Foi. Ele quis repetir. Sunny disse que gostava daquela porque dava para reconhecer todo mundo.',pose:'base'},
      ['Você','Mesmo sem ver direito o rosto dele?'],
      {who:'Ninfa',text:'Justamente. Eu reconheço aquele passo. Também reconheço quem estava tentando não rir.',pose:'gostou'},
      {who:'Ninfa',text:'Fizemos outra depois. Guardei esta. Não é a melhor fotografia, mas é a que me devolve o dia.',pose:'acolhido'}
    ]
  },
  {
    id:'ninfa-reparo-fonte',eco:'tristeza',allClues:['calma.p4','tristeza.p1'],talks:['P1'],label:'Perguntar pelo dia em que você ajudou com a fonte',
    lines:[
      ['Você','Pax disse que você ajudou a consertar a fonte. Você foi até lá para isso?'],
      {who:'Ninfa',text:'Não. Fui porque o barulho da chuva aqui estava me cansando. Encontrei água saindo pelo lado errado.',pose:'base'},
      ['Você','E acabou trabalhando.'],
      {who:'Ninfa',text:'Segurei uma pedra. Depois reclamei do peso. Pax estava tão ocupado tentando não pedir ajuda que quase deixou cair a outra.',pose:'gostou'},
      ['Você','Não parece muito tranquilo.'],
      {who:'Ninfa',text:'Não foi. A gente molhou o banco inteiro. Esperei secar porque queria sentar lá, depois de tudo aquilo.',pose:'base'},
      {who:'Ninfa',text:'Se ele contar que foi uma tarde calma, pergunta de quem era a manga que ficou presa embaixo da pedra.',pose:'acolhido'}
    ]
  },
  {
    id:'ninfa-musica-sem-sunny',eco:'tristeza',allClues:['tristeza.p4','felicidade.p2'],dead:['felicidade'],label:'Perguntar se a caixa ainda toca depois de Sunny',
    lines:[
      ['Você','Você ainda dá corda na caixa?'],
      {who:'Ninfa',text:'Hoje, não. Ontem tentei parar antes da parte em que Sunny entrava.',pose:'abalado'},
      ['Você','Conseguiu?'],
      {who:'Ninfa',text:'Parei tarde. Eu já tinha virado a cabeça para olhar para ele.',pose:'quebrando'},
      ['Você','Eu posso guardar a caixa se estiver machucando.'],
      {who:'Ninfa',text:'Não. Deixa onde estava. Eu ainda quero poder ouvir quando escolher.',pose:'nao-gostou'},
      {who:'Ninfa',text:'E se eu rir de alguma coisa que ele fazia, não pergunta se passou. Eu posso sentir falta dele no meio da risada.',pose:'abalado'}
    ]
  },
  {
    id:'aurea-costura',eco:'orgulho',allClues:['orgulho.p2','determinacao.p2'],label:'Comparar o remendo com os projetos de Friska',
    lines:[
      ['Você','Friska guarda as tentativas. Você deixa o remendo aparecer. Vocês combinaram isso?'],
      {who:'Aurea',text:'Ela disse que a minha primeira costura ia abrir. Eu discordei. Abriu.',pose:'base'},
      ['Você','E ela consertou?'],
      {who:'Aurea',text:'Trouxe outra linha. Eu pedi que me mostrasse o primeiro ponto; o restante fiz aqui.',pose:'gostou'},
      ['Você','Por que não trocou o tecido?'],
      {who:'Aurea',text:'Porque ainda serve. E agora sei reparar aquela parte. Vou precisar disso mais de uma vez.',pose:'base'},
      {who:'Aurea',text:'Pode olhar de perto. Mas não puxe para testar. Já me convenci de que ela tinha razão.',pose:'acolhido'}
    ]
  },
  {
    id:'aurea-alca-ajustada',eco:'orgulho',flags:['visit-protecao'],items:['escudo'],label:'Retomar o ajuste que você fez com Candy',
    lines:[
      ['Você','Você entregou o escudo e depois voltou para ajustar. Achou que eu ia usar errado?'],
      {who:'Aurea',text:'Vi que seu braço estava ficando preso. Candy percebeu antes de mim.',pose:'base'},
      ['Você','Ela conhece melhor o equipamento?'],
      {who:'Aurea',text:'Ela estava olhando para você. Eu estava olhando para a alça.',pose:'abalado'},
      ['Você','Isso te incomoda?'],
      {who:'Aurea',text:'Ter apertado demais, sim. Ela ter dito, não. Prefiro ajustar aqui a descobrir quando você não puder soltar.',pose:'base'},
      {who:'Aurea',text:'Quando tirar, veja se ficou marca. Se ficou, volte. Não espere aprender a suportar o aperto.',pose:'acolhido'}
    ]
  },
  {
    id:'aurea-registro-friska',eco:'orgulho',allClues:['orgulho.p3','determinacao.p3'],dead:['determinacao'],label:'Perguntar como Friska entra no registro de guardas',
    lines:[
      ['Você','Você escreve os erros no registro. Vai escrever sobre Friska?'],
      {who:'Aurea',text:'Vou escrever o que sei. Também vou separar o que só me contaram.',pose:'abalado'},
      ['Você','Para descobrir como podia ter impedido?'],
      {who:'Aurea',text:'Preciso entender o que aconteceu. Isso não me dá uma memória do que não vi.',pose:'base'},
      ['Você','Na lista dela ainda tem coisas que faria pelos outros.'],
      {who:'Aurea',text:'Eu sei. Não quero que a última página seja a única em que o nome dela aparece.',pose:'quebrando'},
      {who:'Aurea',text:'Se você tem algo para contar, conte os atos. Sem chamar a recusa dela de provocação.',pose:'nao-gostou'}
    ]
  },
  {
    id:'friska-hermes-peca',eco:'determinacao',allClues:['determinacao.p2','ansiedade.p3'],talks:['H1'],label:'Perguntar se as previsões de Hermes ajudam nos projetos',
    lines:[
      ['Você','Hermes faz uma lista para cada possibilidade. Você podia pedir uma para esse projeto.'],
      {who:'Friska',text:'Pedi. Ele perguntou o que eu já tinha tentado. Eu falei “um monte”. Ele não gostou da unidade.',pose:'gostou'},
      ['Você','Você anotou?'],
      {who:'Friska',text:'Mostrei as peças. Foi mais rápido. Tinha uma que eu estava chamando de igual e não era.',pose:'base'},
      ['Você','Então ele resolveu.'],
      {who:'Friska',text:'Ele viu uma diferença que eu não vi. Ainda precisei fazer outra peça. E depois outra, porque medi torto.',pose:'base'},
      {who:'Friska',text:'A lista ficou com ele. As peças ficam comigo. Quando eu tiver uma pergunta melhor, volto lá.',pose:'acolhido'}
    ]
  },
  {
    id:'friska-ajuda-sugar',eco:'determinacao',allClues:['determinacao.p4','amor.p1'],talks:['A1'],alive:['amor'],label:'Perguntar como Candy ajuda sem terminar por você',
    lines:[
      ['Você','Candy disse que passa por aqui. Ela já tentou terminar alguma coisa enquanto você saía?'],
      {who:'Friska',text:'Perguntou se podia. Eu disse que queria ver onde a peça estava prendendo.',pose:'base'},
      ['Você','Ela ficou só olhando?'],
      {who:'Friska',text:'Segurou a outra ponta. Depois os dedos dela começaram a doer e a gente trocou.',pose:'gostou'},
      ['Você','Deu certo?'],
      {who:'Friska',text:'Ainda prendia. Mas descobrimos que não era porque eu estava segurando torto.',pose:'base'},
      {who:'Friska',text:'Se quiser ajudar, pode segurar também. Eu digo quando mexer. E, quando cansar, fala antes de soltar.',pose:'acolhido'}
    ]
  },
  {
    id:'friska-promessa-sunny',eco:'determinacao',allClues:['determinacao.p3','felicidade.p3'],dead:['felicidade'],label:'Perguntar pela tarefa que você faria para Sunny',
    lines:[
      ['Você','Sunny está entre os nomes da sua lista?'],
      {who:'Friska',text:'Está. Eu ia fazer um apoio para ele desenhar sem amassar as folhas no colo.',pose:'abalado'},
      ['Você','Você ainda vai fazer?'],
      {who:'Friska',text:'Hoje peguei a madeira. Depois fiquei com raiva de estar medindo como se ele fosse buscar.',pose:'quebrando'},
      ['Você','Posso tirar o nome da lista.'],
      {who:'Friska',text:'Não mexe. Eu sei que ele morreu. Não estou esquecendo porque não risquei.',pose:'nao-gostou'},
      {who:'Friska',text:'A madeira pode ficar ali até eu saber o que quero fazer com ela. Você não precisa terminar isso por mim.',pose:'abalado'}
    ]
  },
  {
    id:'pax-sinos-corrida',eco:'calma',clues:['calma.p2'],flags:['running'],label:'Perguntar se os sinos incomodam quando alguém corre',
    lines:[
      ['Você','Hermes me ensinou a correr. Os sinos entregam quando alguém passa depressa?'],
      {who:'Pax',text:'Entregam. Às vezes eu começo a responder antes de a pessoa aparecer.',pose:'gostou'},
      ['Você','Para mandar diminuir?'],
      {who:'Pax',text:'Para perguntar se precisa de alguma coisa. Mas, quando fico esperando uma resposta, a chaleira passa do ponto.',pose:'base'},
      ['Você','Então o barulho te atrapalha.'],
      {who:'Pax',text:'Às vezes. Eu posso tirar os sinos por uma tarde. Não significa que ninguém pode vir.',pose:'base'},
      {who:'Pax',text:'Se não ouvir nada, avise na porta. E não venha correndo só para descobrir se eu vou levantar.',pose:'acolhido'}
    ]
  },
  {
    id:'pax-manga-ninfa',eco:'calma',allClues:['calma.p4','tristeza.p1'],talks:['N1'],label:'Perguntar se o conserto da fonte foi tranquilo',
    lines:[
      ['Você','Ninfa ajudou com a fonte. Vocês conseguiram trabalhar sem conversar muito?'],
      {who:'Pax',text:'Ela precisou repetir umas três vezes que minha manga estava presa. Eu achei que estava falando da água.',pose:'base'},
      ['Você','Você estava tão calmo assim?'],
      {who:'Pax',text:'Estava distraído. Não são a mesma coisa. Molhei os dois quando tentei levantar.',pose:'gostou'},
      ['Você','Ela ficou para esperar a roupa secar?'],
      {who:'Pax',text:'Ficou. Depois a roupa secou e continuamos no banco. Não tinha outra coisa para consertar.',pose:'acolhido'},
      {who:'Pax',text:'Quando olhar a fonte, pode lembrar disso também. Tem um pedaço daquele dia escondido embaixo de uma pedra.',pose:'gostou'}
    ]
  },
  {
    id:'pax-friska-ausente',eco:'calma',allClues:['calma.p3','determinacao.p3'],dead:['determinacao'],label:'Perguntar o que ficou sem resposta depois de Friska',
    lines:[
      ['Você','Você escreve sobre os conflitos. Tinha alguma coisa de Friska ali?'],
      {who:'Pax',text:'Tinha um pedido meu. Uma parte da fonte precisava de uma peça que ela estava tentando fazer.',pose:'abalado'},
      ['Você','Ela não terminou?'],
      {who:'Pax',text:'Não sei. Eu ainda não fui olhar. É estranho perceber que uma das coisas que quero perguntar é tão pequena.',pose:'quebrando'},
      ['Você','A fonte pode esperar.'],
      {who:'Pax',text:'Pode. Eu queria ter dito isso a ela. Para ela vir antes de terminar, se quisesse.',pose:'abalado'},
      {who:'Pax',text:'Você pode ficar aqui por um momento. Mas eu vou perguntar sobre o que aconteceu com ela. Não quero que meu silêncio responda por mim.',pose:'base'}
    ]
  },
  {
    id:'hermes-radio-corrida',eco:'ansiedade',clues:['ansiedade.p4'],flags:['running'],label:'Perguntar por que o rádio chega depois dos passos',
    lines:[
      ['Você','Eu ouvi a voz no rádio depois de ver o movimento. Qual dos dois eu sigo?'],
      {who:'Hermes',text:'Primeiro precisamos saber se descrevem o mesmo movimento. Uma voz atrasada pode estar certa sobre outro instante.',pose:'base'},
      ['Você','Você consegue saber só ouvindo?'],
      {who:'Hermes',text:'Nem sempre. Por isso deixei a rota marcada no chão. Você pode comparar com o que vê.',pose:'base'},
      ['Você','Eu achei que, depois de aprender a correr, só precisava ser rápido.'],
      {who:'Hermes',text:'As marcas também mostram onde mudar de lado. Eu prefiro que você veja a curva antes de correr para ela.',pose:'gostou'},
      {who:'Hermes',text:'Se houver outra instrução, confira de onde veio. E, se não entendeu a minha, pergunte antes de eu contar o tempo.',pose:'acolhido'}
    ]
  },
  {
    id:'hermes-presente-pausa',eco:'ansiedade',flags:['visit-melodia'],clues:['ansiedade.p5'],label:'Retomar a pausa que Ninfa deixou para você',
    lines:[
      ['Você','Depois de ouvir a caixa com Ninfa, você achou uma função para o presente dela?'],
      {who:'Hermes',text:'Ela já informou uma: lembrar de fazer pausas. A minha pergunta era como verificar se funcionava.',pose:'base'},
      ['Você','Contando quantas vezes parou?'],
      {who:'Hermes',text:'Foi a primeira tentativa. Eu parava para registrar, não para descansar. A contagem ficou excelente.',pose:'gostou'},
      ['Você','E agora?'],
      {who:'Hermes',text:'Deixei o registro fechado enquanto ela tocava. Não sei quanto tempo passou.',pose:'abalado'},
      {who:'Hermes',text:'Lembro onde a música parou, porém. Vou conseguir perguntar por aquele trecho quando voltarmos a conversar.',pose:'acolhido'}
    ]
  },
  {
    id:'hermes-horario-pax',eco:'ansiedade',allClues:['ansiedade.p2','calma.p2'],dead:['calma'],label:'Perguntar se algum relógio marca a visita a Pax',
    lines:[
      ['Você','Algum desses relógios marcava a hora de ir até Pax?'],
      {who:'Hermes',text:'Eu não tinha uma hora. Ele disse que não precisava avisar com tanta antecedência.',pose:'base'},
      ['Você','Está tentando calcular quando devia ter ido?'],
      {who:'Hermes',text:'Reconstituí o último trajeto três vezes. A conta dá o mesmo intervalo. Eu continuo procurando outra saída.',pose:'quebrando'},
      ['Você','Talvez tivesse chegado a tempo.'],
      {who:'Hermes',text:'A tempo de quê? Você ainda não me disse quando aconteceu. Não coloque uma certeza na informação que está faltando.',pose:'nao-gostou'},
      {who:'Hermes',text:'Por enquanto vou deixar os relógios como estão. A última visita não pode corrigir as próximas.',pose:'abalado'}
    ]
  },
  {
    id:'lumen-reparo-visivel',eco:'culpa',allClues:['culpa.p4','orgulho.p2'],label:'Comparar o reparo com o tecido de Aurea',
    lines:[
      ['Você','Aurea também conserva um remendo. Você se preocupa se alguém percebe o seu?'],
      {who:'Lúmen',text:'Antes eu virava o objeto para a pessoa olhar primeiro o lado inteiro.',pose:'abalado'},
      ['Você','Mesmo quando não foi você que quebrou?'],
      {who:'Lúmen',text:'Mesmo assim. Parecia que, se ainda desse para ver, eu não tinha terminado direito.',pose:'base'},
      ['Você','Aurea esconde a costura?'],
      {who:'Lúmen',text:'Não. Eu queria perguntar como ela consegue. Depois percebi que podia começar entregando sem escolher o lado.',pose:'acolhido'},
      {who:'Lúmen',text:'Na próxima visita eu tento. Se a pessoa perguntar o que aconteceu, posso responder só essa pergunta.',pose:'gostou'}
    ]
  },
  {
    id:'lumen-depois-bilhete',eco:'culpa',flags:['visit-bilhete'],clues:['culpa.p3'],alive:['medo'],label:'Retomar a visita em que Hunger recebeu sua mensagem',
    lines:[
      ['Você','Quando encontrou Hunger, você ainda precisava perguntar se ele recebeu?'],
      {who:'Lúmen',text:'Eu tinha outra pergunta pronta se ele dissesse que sim. Depois outra, se dissesse que tinha gostado.',pose:'abalado'},
      ['Você','Mas você foi embora.'],
      {who:'Lúmen',text:'Ele disse que recebeu. Eu consegui ouvir essa parte. No corredor comecei a inventar o resto outra vez.',pose:'base'},
      ['Você','Vai levar o presente para perguntar de novo?'],
      {who:'Lúmen',text:'Eu quero entregar porque guardei para ele. Se começar a usar o embrulho para cobrar uma resposta, prefiro esperar.',pose:'base'},
      {who:'Lúmen',text:'Hoje posso só deixar pronto. Ele sabe que eu passei. Eu sei que ele me ouviu.',pose:'acolhido'}
    ]
  },
  {
    id:'lumen-carta-pax',eco:'culpa',allClues:['culpa.p2','calma.p3'],talks:['C2'],dead:['calma'],label:'Perguntar se a carta mudou depois de Pax',
    lines:[
      ['Você','Você está escrevendo outra carta de desculpas?'],
      {who:'Lúmen',text:'Comecei. Escrevi que devia ter percebido. Parei antes de dizer o quê.',pose:'quebrando'},
      ['Você','Não tinha nada que pudesse fazer?'],
      {who:'Lúmen',text:'Não sei. E eu fico com vergonha de dizer que não sei. Parece que estou tentando sair da conversa.',pose:'abalado'},
      ['Você','Pax também deixava perguntas sem resposta nas anotações.'],
      {who:'Lúmen',text:'Ele deixava. Eu podia ler e não sair arrancando as páginas para completar por ele.',pose:'base'},
      {who:'Lúmen',text:'Vou guardar o começo da carta. Quando eu escrever de novo, quero conseguir dizer uma coisa que aconteceu. Ainda não consigo hoje.',pose:'abalado'}
    ]
  },
  {
    id:'hunger-flores-soleira',eco:'medo',clues:['medo.p1'],flags:['topic-candy-hunger'],alive:['amor'],label:'Dizer que Candy reconheceu as flores da soleira',
    lines:[
      ['Você','Candy contou que algumas flores vieram de você.'],
      {who:'Hunger',text:'Ela contou onde eu encontro ou só que eu levo?',pose:'nao-gostou'},
      ['Você','Só que você deixa perto da porta.'],
      {who:'Hunger',text:'Então ela entendeu a parte que importava.',pose:'base'},
      ['Você','Por que não espera para entregar?'],
      {who:'Hunger',text:'Porque às vezes eu quero deixar e ir embora. Ela pode pegar sem me procurar pelo corredor.',pose:'base'},
      {who:'Hunger',text:'Quando eu quiser ficar, eu aviso. Você já sabe como eu prefiro ser recebido. Não chegue escondido para testar se é verdade.',pose:'abalado'}
    ]
  },
  {
    id:'hunger-mensagem-recebida',eco:'medo',flags:['visit-bilhete'],allClues:['culpa.p5','medo.p3'],alive:['culpa'],label:'Perguntar por que você disse a Lúmen que recebeu',
    lines:[
      ['Você','Lúmen veio saber da mensagem. Você respondeu antes de ele explicar tudo.'],
      {who:'Hunger',text:'Ele estava segurando a própria mão. Faz isso quando acha que falou alguma coisa errada.',pose:'base'},
      ['Você','Queria que ele parasse de se preocupar?'],
      {who:'Hunger',text:'Queria responder o que perguntou. Eu tinha recebido. Tinha lido.',pose:'base'},
      ['Você','E não tinha mais nada para dizer?'],
      {who:'Hunger',text:'Tinha. Disse que ele não precisava atravessar sozinho. Eu queria saber por onde tinha vindo.',pose:'abalado'},
      {who:'Hunger',text:'Se ele voltar, essa pergunta ainda é minha. Não vá buscar uma resposta usando meu nome.',pose:'nao-gostou'}
    ]
  },
  {
    id:'hunger-xicara-pax',eco:'medo',allClues:['calma.p5','medo.p3'],talks:['M2'],dead:['calma'],label:'Falar da xícara que Pax deixava para suas visitas',
    lines:[
      ['Você','A segunda xícara continua no quarto de Pax.'],
      {who:'Hunger',text:'Eu sei qual é. Ele girava a alça quando me ouvia chegar.',pose:'abalado'},
      ['Você','Ele sabia que era você?'],
      {who:'Hunger',text:'Às vezes errava. Eu ouvia ele falando com outra pessoa e esperava lá fora.',pose:'base'},
      ['Você','Por que não entrava?'],
      {who:'Hunger',text:'Porque eu podia voltar depois. Você entende o que mudou nessa frase?',pose:'quebrando'},
      {who:'Hunger',text:'Deixe a xícara lá. E não me convide para sentar no lugar dele.',pose:'nao-gostou'}
    ]
  },
  {
    id:'beerus-peca-pedida',eco:'odio',allClues:['odio.p3','determinacao.p3'],alive:['determinacao'],label:'Perguntar se os pedidos de Friska chegam até aqui',
    lines:[
      ['Você','Friska tem uma lista de coisas que prometeu fazer. Você também recebe pedidos?'],
      {who:'Beerus',text:'Recebo. Ela manda o tamanho da peça e esquece de dizer de qual lado mediu.',pose:'base'},
      ['Você','Você devolve o pedido?'],
      {who:'Beerus',text:'Vou lá perguntar. Se eu adivinhar errado, ela vai tentar encaixar a peça errada a tarde inteira.',pose:'base'},
      ['Você','Achei que ia mandar ela buscar sozinha.'],
      {who:'Beerus',text:'Ela também já trouxe coisa que eu pedi. Não sei por que isso te surpreende.',pose:'nao-gostou'},
      {who:'Beerus',text:'Se passar por lá, não diga que eu estou cobrando. Eu vou quando souber qual peça levar.',pose:'base'}
    ]
  },
  {
    id:'beerus-retrato-ninfa',eco:'odio',allClues:['odio.p2','tristeza.p3'],talks:['N1'],label:'Perguntar se o retrato é do mesmo dia da fotografia',
    lines:[
      ['Você','Ninfa guarda uma fotografia dos irmãos. Este retrato foi feito no mesmo dia?'],
      {who:'Beerus',text:'Depois. Tentaram juntar as duas coisas porque Hermes não tinha parado na primeira.',pose:'base'},
      ['Você','Pelo menos aqui ele ficou quieto.'],
      {who:'Beerus',text:'Aqui ele não estava presente para discutir a posição. Fez isso depois.',pose:'gostou'},
      ['Você','Ninfa preferiu guardar a fotografia.'],
      {who:'Beerus',text:'Ela aparece de um jeito lá. Aqui aparece de outro. Eu lembro dos dois.',pose:'base'},
      {who:'Beerus',text:'Pode olhar daqui. Não precisa tirar da parede para conferir o que ainda dá para reconhecer.',pose:'nao-gostou'}
    ]
  },
  {
    id:'beerus-fita-sunny',eco:'odio',allClues:['felicidade.p4','odio.p2'],dead:['felicidade'],label:'Perguntar pela fita verde que Sunny escolheu',
    lines:[
      ['Você','Sunny estava guardando uma fita verde para o presente de Pax.'],
      {who:'Beerus',text:'Eu trouxe aquela fita. Ele pediu a verde. Eu levei outra primeiro.',pose:'abalado'},
      ['Você','Por quê?'],
      {who:'Beerus',text:'A outra parecia melhor. Ele não quis. Fui buscar a que tinha pedido.',pose:'base'},
      ['Você','Você lembra de uma discussão tão pequena?'],
      {who:'Beerus',text:'Lembro dele abrindo a mão para mostrar a cor. Lembro da voz. Você quer que eu lembre só de como acabou?',pose:'quebrando'},
      {who:'Beerus',text:'A fita fica onde ele deixou. Não me traga mais uma coisa que ele não pode pedir de volta.',pose:'nao-gostou'}
    ]
  }
);
