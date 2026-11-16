 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                     
                                                                                                            
 /* Atualiza window.CONVIVENCIA usando uma lista com 17 posições.
*/ window.CONVIVENCIA = [
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sunny-bilhete',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'felicidade',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda felicidade.p6.
*/ 'felicidade.p6'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar sobre o bilhete atrás do mural',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu li o bilhete. Você acha que uma visita precisa ter alguma recompensa?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Não acho isso quando é com os outros. Comigo eu fico tentando garantir a próxima.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu queria que você pudesse voltar num dia em que eu não tivesse nada pronto.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sunny-pax',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'felicidade',  /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda calma.p1.
*/ 'calma.p1', /* Essa posição da lista guarda felicidade.p4.
*/ 'felicidade.p4'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Falar sobre o lugar que Pax guarda para você',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Pax deixa espaço mesmo quando ninguém tem uma boa notícia.
*/ 'Pax deixa espaço mesmo quando ninguém tem uma boa notícia.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda É por isso que eu consigo ir até lá sem ensaiar alguma coisa.
*/ 'É por isso que eu consigo ir até lá sem ensaiar alguma coisa.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Sunny.
*/ 'Sunny', /* Essa posição da lista guarda Não conta isso como se você tivesse descoberto um defeito nele.
*/ 'Não conta isso como se você tivesse descoberto um defeito nele.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pax-hunger',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'calma',  /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda P1.
*/ 'P1'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que Hunger procura você',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você disse que Hunger vem aqui. O que ele procura.
*/ 'Você disse que Hunger vem aqui. O que ele procura?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda Um lugar onde não precise vigiar todas as portas sozinho.
*/ 'Um lugar onde não precise vigiar todas as portas sozinho.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ele se afasta quando está assustado. Não confunda a distância com falta de afeto.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Se você o encontrar, avise antes de se aproximar. Não teste o limite só para ver o que acontece.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pax-ninfa',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'calma',  /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda N2.
*/ 'N2'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Contar o que Ninfa disse sobre você',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ninfa disse que você se preocupa em perceber tarde demais.
*/ 'Ninfa disse que você se preocupa em perceber tarde demais.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu conto com quem está perto para dizer quando alguma coisa machuca. Não consigo adivinhar tudo.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ela te contou isso para aproximar você de nós. O que você pretende fazer com essa confiança?']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pax-carta',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'calma',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda calma.p5.
*/ 'calma.p5'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Conversar sobre a segunda xícara',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você guarda um lugar para alguém que pode nem voltar.
*/ 'Você guarda um lugar para alguém que pode nem voltar.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda Guardar um lugar não é prender alguém nele.
*/ 'Guardar um lugar não é prender alguém nele.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Pax.
*/ 'Pax', /* Essa posição da lista guarda Eu quero que possam escolher ficar. Inclusive você.
*/ 'Eu quero que possam escolher ficar. Inclusive você.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'candy-hunger',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'amor',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda amor.p4.
*/ 'amor.p4'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar das flores de Hunger',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda As flores são dele.
*/ 'As flores são dele?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda Algumas. Ele deixa perto da porta e vai embora.
*/ 'Algumas. Ele deixa perto da porta e vai embora.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Não quer que o cuidado vire um interrogatório. Se você percebeu, pode agradecer sem obrigá-lo a explicar.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'candy-beerus',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'amor',  /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda amor.p5.
*/ 'amor.p5', /* Essa posição da lista guarda odio.p5.
*/ 'odio.p5'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar o que existe entre você e Beerus',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Há uma lembrança sua no quarto dele.
*/ 'Há uma lembrança sua no quarto dele.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda Ele guarda coisas que não consegue dizer em voz alta.
*/ 'Ele guarda coisas que não consegue dizer em voz alta.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Candy.
*/ 'Candy', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ele parece feito só de hostilidade quando alguém entra procurando isso. Eu conheço mais do que essa parte.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'ninfa-diario',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'tristeza',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda tristeza.p2.
*/ 'tristeza.p2'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Pedir licença para falar do diário',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Eu vi suas lembranças. Não quero fingir que não li.
*/ 'Eu vi suas lembranças. Não quero fingir que não li.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Obrigada por dizer. Você pode perguntar, mas eu também posso não responder.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda Uma lembrança não é uma instrução de onde ferir alguém.
*/ 'Uma lembrança não é uma instrução de onde ferir alguém.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'ninfa-sunny',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'tristeza',  /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda tristeza.p4.
*/ 'tristeza.p4', /* Essa posição da lista guarda felicidade.p2.
*/ 'felicidade.p2'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Falar da música de Sunny',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Vocês tocaram juntos.
*/ 'Vocês tocaram juntos?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ele errou uma nota e continuou. Eu ri. Não precisou virar uma explicação sobre eu estar melhor.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ninfa.
*/ 'Ninfa', /* Essa posição da lista guarda Às vezes companhia é isso deixar o momento existir.
*/ 'Às vezes companhia é isso: deixar o momento existir.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'aurea-escudo',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'orgulho',  /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda orgulho.p4.
*/ 'orgulho.p4', /* Essa posição da lista guarda orgulho.p6.
*/ 'orgulho.p6'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que o escudo tem marcas',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você já precisou dessa proteção.
*/ 'Você já precisou dessa proteção?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Aurea.
*/ 'Aurea', /* Essa posição da lista guarda Precisei. Oferecer não significa que nunca tive medo.
*/ 'Precisei. Oferecer não significa que nunca tive medo.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Aurea.
*/ 'Aurea', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'A alça fica voltada para você. Aprenda a segurar antes de achar que está invulnerável.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'friska-trabalho',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'determinacao',  /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda determinacao.p2.
*/ 'determinacao.p2', /* Essa posição da lista guarda determinacao.p4.
*/ 'determinacao.p4'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar sobre a tentativa que ficou inacabada',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Eu vi as peças que você guardou.
*/ 'Eu vi as peças que você guardou.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Friska.
*/ 'Friska', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Guardei porque ainda posso tentar de outro jeito. Não é um monte de derrotas.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Friska.
*/ 'Friska', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Você pode ajudar com a peça que eu te oferecer. A faca não está entre elas.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hermes-ninfa',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'ansiedade',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda ansiedade.p5.
*/ 'ansiedade.p5'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar sobre o presente de Ninfa',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você ainda não achou utilidade para o presente.
*/ 'Você ainda não achou utilidade para o presente?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Não. Isso não demonstra ausência de valor. Demonstra uma pergunta incompleta.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ela deixou aqui porque se lembrou de mim. Ainda não precisei de outro motivo.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hermes-faca',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'ansiedade',  /* Relaciona os objetos da bolsa usados nessa parte.
*/ items:[ /* Essa posição da lista guarda faca.
*/ 'faca'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Mostrar a faca de Friska',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda Eu reconheço a faca. Ela não oferecia essa peça.
*/ 'Eu reconheço a faca. Ela não oferecia essa peça.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Agora está comigo.
*/ 'Agora está comigo.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda Isso descreve a posse. Você omitiu como aconteceu.
*/ 'Isso descreve a posse. Você omitiu como aconteceu.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hermes.
*/ 'Hermes', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Não transforme a minha falta de informação em prova de que ninguém poderia ter impedido.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'lumen-hunger',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'culpa',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda culpa.p5.
*/ 'culpa.p5'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pelo bilhete de Hunger',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ele deixou uma mensagem para você.
*/ 'Ele deixou uma mensagem para você.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Lúmen.
*/ 'Lúmen', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu li várias vezes. Na primeira parecia uma coisa boa. Depois comecei a procurar o que eu podia ter entendido errado.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Lúmen.
*/ 'Lúmen', /* Essa posição da lista guarda Não queria precisar pedir desculpa por ter gostado.
*/ 'Não queria precisar pedir desculpa por ter gostado.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hunger-pax',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'medo',  /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda topic pax hunger.
*/ 'topic-pax-hunger'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Dizer que conversou com Pax sobre ele',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Pax falou de quando você vai até lá.
*/ 'Pax falou de quando você vai até lá.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hunger.
*/ 'Hunger', /* Essa posição da lista guarda Ele te ofereceu um lugar. Você voltou para procurar a minha fraqueza.
*/ 'Ele te ofereceu um lugar. Você voltou para procurar a minha fraqueza?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Quero entender por que você está me evitando.
*/ 'Quero entender por que você está me evitando.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hunger.
*/ 'Hunger', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Você carrega uma faca que ela não emprestaria. E o lugar que Pax deixava aberto está vazio.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hunger-lumen',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'medo',  /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda culpa.p5.
*/ 'culpa.p5'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pela mensagem para Lúmen',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Lúmen guardou o seu bilhete.
*/ 'Lúmen guardou o seu bilhete.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hunger.
*/ 'Hunger', /* Essa posição da lista guarda Não use o nome dele para conseguir que eu abaixe a guarda.
*/ 'Não use o nome dele para conseguir que eu abaixe a guarda.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Hunger.
*/ 'Hunger', /* Essa posição da lista guarda Você ainda tem tempo de deixá lo longe disso.
*/ 'Você ainda tem tempo de deixá-lo longe disso.']]},
  { /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'beerus-candy',  /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'odio',  /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda amor.p5.
*/ 'amor.p5', /* Essa posição da lista guarda odio.p5.
*/ 'odio.p5'],  /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que ele guarda a lembrança de Candy',  /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[ /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você não jogou a lembrança fora.
*/ 'Você não jogou a lembrança fora.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Beerus.
*/ 'Beerus', /* Essa posição da lista guarda Por que jogaria.
*/ 'Por que jogaria?'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você parece odiar tudo.
*/ 'Você parece odiar tudo.'], /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Beerus.
*/ 'Beerus', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Você chegou com essa resposta e está procurando onde encaixar. Candy não precisa disso para falar comigo.']]}
];
                                                                
 /* Acrescenta esse valor no fim da lista.
*/ window.CONVIVENCIA.push({
   /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'beerus-faca', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'odio', /* Relaciona os objetos da bolsa usados nessa parte.
*/ items:[ /* Essa posição da lista guarda faca.
*/ 'faca'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que ele reconheceu a faca',
   /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
    { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você trouxe a faca dela até aqui.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
     /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você reconheceu antes de eu falar.
*/ 'Você reconheceu antes de eu falar.'],
    { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela não ofereceria. Eu conhecia o jeito como ela guardava as coisas.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'},
    { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Guarda isso antes de chamar a minha raiva de defeito.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
  ]
});

                                                                               
                                                                                
 /* Acrescenta esse valor no fim da lista.
*/ window.CONVIVENCIA.push(
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sunny-semente', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'felicidade', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda felicidade.p3.
*/ 'felicidade.p3', /* Essa posição da lista guarda felicidade.p5.
*/ 'felicidade.p5'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pelo desenho da semente',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você desenha tantas coisas. Já desenhou a semente da janela.
*/ 'Você desenha tantas coisas. Já desenhou a semente da janela?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Umas quatro vezes. Em três eu coloquei uma flor que ela ainda não tem.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E no quarto.
*/ 'E no quarto?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ficou parecendo uma pedrinha num monte de terra. Foi para aquela caixa.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Por que não jogou fora.
*/ 'Por que não jogou fora?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Porque é como ela está agora. Se eu só guardar a flor, vou esquecer quanto tempo fiquei olhando para a terra.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'},
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Depois eu te mostro. Mas não vale dizer que está brotando só para eu ficar contente. Eu vou olhar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sunny-visita-sem-fita', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'felicidade', /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda visit acolhimento.
*/ 'visit-acolhimento'], /* Confere quais personagens ainda precisam estar vivos.
*/ alive:[ /* Essa posição da lista guarda calma.
*/ 'calma'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Retomar a visita em que você ficou sem tocar',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Na fonte você ficou mesmo depois de deixar a fita.
*/ 'Na fonte, você ficou mesmo depois de deixar a fita.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Fiquei esperando Pax perguntar o que eu tinha preparado.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E ele perguntou.
*/ 'E ele perguntou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Perguntou se eu estava sentado em cima da ponta. Eu estava.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você podia ter ido sem levar nada.
*/ 'Você podia ter ido sem levar nada.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu sei. Na ida eu sei. É quando chego na porta que começo a procurar alguma coisa nos bolsos.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Da próxima vez posso deixar a fita aqui. Você pode ir junto, se quiser. Só não anuncia que eu consegui.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sunny-fita-sem-pax', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'felicidade', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda felicidade.p4.
*/ 'felicidade.p4', /* Essa posição da lista guarda calma.p5.
*/ 'calma.p5'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda calma.
*/ 'calma'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Falar do presente que Pax não vai receber',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda O presente para Pax continua aqui.
*/ 'O presente para Pax continua aqui.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu ia trocar a fita. A verde tinha ficado curta.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Era importante trocar.
*/ 'Era importante trocar?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Naquele dia parecia. Eu queria chegar com tudo direito e ficar mais um pouco.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você ainda pode deixar no quarto dele.
*/ 'Você ainda pode deixar no quarto dele.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu sei onde é o quarto. O que eu não sei é como chegar lá e não esperar que ele fale.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Sunny', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Hoje fica aqui. Não leva para ele por mim. Eu não pedi isso.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sugar-descanso', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'amor', /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda amor.p6.
*/ 'amor.p6'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda A1.
*/ 'A1'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar quem faz companhia quando você para',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você tem um canto separado dos lugares de visita. Quem pode sentar lá.
*/ 'Você tem um canto separado dos lugares de visita. Quem pode sentar lá?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Depende do dia. Às vezes eu deixo uma coisa em cima do assento para ninguém perguntar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você podia dizer que quer ficar sozinha.
*/ 'Você podia dizer que quer ficar sozinha.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Podia. Também podia aceitar companhia sem já levantar para buscar alguma coisa.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Quer que eu fique.
*/ 'Quer que eu fique?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Um pouco. Se alguém passar, não diga que está tudo bem por mim. Eu mesma respondo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'},
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'E senta aqui. Desse lado eu consigo olhar a janela sem você achar que estou esperando outra visita.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sugar-flores-diferentes', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'amor', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda amor.p4.
*/ 'amor.p4', /* Essa posição da lista guarda medo.p2.
*/ 'medo.p2'], /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda topic candy hunger.
*/ 'topic-candy-hunger'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que as flores não ficam na janela',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'No quarto de Hunger a janela fica coberta. Você deixa as flores longe da sua também.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Estas vieram de um lugar com pouca luz. No primeiro dia eu pus todas no mesmo vaso.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ele reclamou.
*/ 'Ele reclamou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Voltou para mudar o vaso de lugar. Disse que eu estava acabando com elas.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você não ficou chateada com o jeito.
*/ 'Você não ficou chateada com o jeito?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Fiquei. Eu disse. Ele ficou quieto e me mostrou onde deixar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Agora pergunto antes de mudar. E ele pode me ensinar uma coisa sem falar comigo daquele jeito.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'sugar-presente-lumen', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'amor', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda culpa.p3.
*/ 'culpa.p3', /* Essa posição da lista guarda amor.p1.
*/ 'amor.p1'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda culpa.
*/ 'culpa'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Contar que o presente de Lúmen continua esperando',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Lúmen deixou um presente pronto. Ainda está no quarto.
*/ 'Lúmen deixou um presente pronto. Ainda está no quarto.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele me perguntou se devia embrulhar outra vez. Eu disse que aquela dobra estava boa.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Talvez fosse para Hunger.
*/ 'Talvez fosse para Hunger.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Talvez. Não vou abrir para descobrir uma resposta que Lúmen podia ter dado.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E vai deixar esperando.
*/ 'E vai deixar esperando?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Vou lembrar onde ele deixou. Depois posso perguntar a quem o visitava. Eu também ainda tenho perguntas.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
      { /* Indica quem está falando nessa linha.
*/ who:'Candy', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Obrigada por me contar onde está. Não precisa trazer agora. Quero ver o quarto antes que alguém tente arrumar tudo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'ninfa-fotografia-hermes', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'tristeza', /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda tristeza.p3.
*/ 'tristeza.p3'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda H1.
*/ 'H1'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que Hermes saiu borrado na fotografia',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Hermes calculou até a minha corrida. Não conseguiu esperar pela fotografia?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele esperou. Depois foi conferir quanto faltava para terminar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Foi nessa hora.
*/ 'Foi nessa hora?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Foi. Ele quis repetir. Sunny disse que gostava daquela porque dava para reconhecer todo mundo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Mesmo sem ver direito o rosto dele.
*/ 'Mesmo sem ver direito o rosto dele?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Justamente. Eu reconheço aquele passo. Também reconheço quem estava tentando não rir.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Fizemos outra depois. Guardei esta. Não é a melhor fotografia, mas é a que me devolve o dia.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'ninfa-reparo-fonte', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'tristeza', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda calma.p4.
*/ 'calma.p4', /* Essa posição da lista guarda tristeza.p1.
*/ 'tristeza.p1'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda P1.
*/ 'P1'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pelo dia em que você ajudou com a fonte',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Pax disse que você ajudou a consertar a fonte. Você foi até lá para isso?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não. Fui porque o barulho da chuva aqui estava me cansando. Encontrei água saindo pelo lado errado.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E acabou trabalhando.
*/ 'E acabou trabalhando.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Segurei uma pedra. Depois reclamei do peso. Pax estava tão ocupado tentando não pedir ajuda que quase deixou cair a outra.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Não parece muito tranquilo.
*/ 'Não parece muito tranquilo.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não foi. A gente molhou o banco inteiro. Esperei secar porque queria sentar lá, depois de tudo aquilo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se ele contar que foi uma tarde calma, pergunta de quem era a manga que ficou presa embaixo da pedra.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'ninfa-musica-sem-sunny', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'tristeza', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda tristeza.p4.
*/ 'tristeza.p4', /* Essa posição da lista guarda felicidade.p2.
*/ 'felicidade.p2'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda felicidade.
*/ 'felicidade'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se a caixa ainda toca depois de Sunny',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você ainda dá corda na caixa.
*/ 'Você ainda dá corda na caixa?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Hoje, não. Ontem tentei parar antes da parte em que Sunny entrava.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Conseguiu.
*/ 'Conseguiu?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Parei tarde. Eu já tinha virado a cabeça para olhar para ele.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Eu posso guardar a caixa se estiver machucando.
*/ 'Eu posso guardar a caixa se estiver machucando.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não. Deixa onde estava. Eu ainda quero poder ouvir quando escolher.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Ninfa', /* Guarda o texto que essa parte vai mostrar.
*/ text:'E se eu rir de alguma coisa que ele fazia, não pergunta se passou. Eu posso sentir falta dele no meio da risada.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'aurea-costura', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'orgulho', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda orgulho.p2.
*/ 'orgulho.p2', /* Essa posição da lista guarda determinacao.p2.
*/ 'determinacao.p2'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Comparar o remendo com os projetos de Friska',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Friska guarda as tentativas. Você deixa o remendo aparecer. Vocês combinaram isso?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela disse que a minha primeira costura ia abrir. Eu discordei. Abriu.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E ela consertou.
*/ 'E ela consertou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Trouxe outra linha. Eu pedi que me mostrasse o primeiro ponto; o restante fiz aqui.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Por que não trocou o tecido.
*/ 'Por que não trocou o tecido?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Porque ainda serve. E agora sei reparar aquela parte. Vou precisar disso mais de uma vez.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pode olhar de perto. Mas não puxe para testar. Já me convenci de que ela tinha razão.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'aurea-alca-ajustada', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'orgulho', /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda visit protecao.
*/ 'visit-protecao'], /* Relaciona os objetos da bolsa usados nessa parte.
*/ items:[ /* Essa posição da lista guarda escudo.
*/ 'escudo'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Retomar o ajuste que você fez com Candy',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Você entregou o escudo e depois voltou para ajustar. Achou que eu ia usar errado?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Vi que seu braço estava ficando preso. Candy percebeu antes de mim.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ela conhece melhor o equipamento.
*/ 'Ela conhece melhor o equipamento?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela estava olhando para você. Eu estava olhando para a alça.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Isso te incomoda.
*/ 'Isso te incomoda?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ter apertado demais, sim. Ela ter dito, não. Prefiro ajustar aqui a descobrir quando você não puder soltar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Quando tirar, veja se ficou marca. Se ficou, volte. Não espere aprender a suportar o aperto.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'aurea-registro-friska', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'orgulho', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda orgulho.p3.
*/ 'orgulho.p3', /* Essa posição da lista guarda determinacao.p3.
*/ 'determinacao.p3'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda determinacao.
*/ 'determinacao'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar como Friska entra no registro de guardas',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você escreve os erros no registro. Vai escrever sobre Friska.
*/ 'Você escreve os erros no registro. Vai escrever sobre Friska?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Vou escrever o que sei. Também vou separar o que só me contaram.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Para descobrir como podia ter impedido.
*/ 'Para descobrir como podia ter impedido?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Preciso entender o que aconteceu. Isso não me dá uma memória do que não vi.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Na lista dela ainda tem coisas que faria pelos outros.
*/ 'Na lista dela ainda tem coisas que faria pelos outros.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu sei. Não quero que a última página seja a única em que o nome dela aparece.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
      { /* Indica quem está falando nessa linha.
*/ who:'Aurea', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se você tem algo para contar, conte os atos. Sem chamar a recusa dela de provocação.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'friska-hermes-peca', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'determinacao', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda determinacao.p2.
*/ 'determinacao.p2', /* Essa posição da lista guarda ansiedade.p3.
*/ 'ansiedade.p3'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda H1.
*/ 'H1'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se as previsões de Hermes ajudam nos projetos',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Hermes faz uma lista para cada possibilidade. Você podia pedir uma para esse projeto.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pedi. Ele perguntou o que eu já tinha tentado. Eu falei “um monte”. Ele não gostou da unidade.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você anotou.
*/ 'Você anotou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Mostrei as peças. Foi mais rápido. Tinha uma que eu estava chamando de igual e não era.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Então ele resolveu.
*/ 'Então ele resolveu.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele viu uma diferença que eu não vi. Ainda precisei fazer outra peça. E depois outra, porque medi torto.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A lista ficou com ele. As peças ficam comigo. Quando eu tiver uma pergunta melhor, volto lá.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'friska-ajuda-sugar', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'determinacao', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda determinacao.p4.
*/ 'determinacao.p4', /* Essa posição da lista guarda amor.p1.
*/ 'amor.p1'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda A1.
*/ 'A1'], /* Confere quais personagens ainda precisam estar vivos.
*/ alive:[ /* Essa posição da lista guarda amor.
*/ 'amor'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar como Candy ajuda sem terminar por você',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Candy disse que passa por aqui. Ela já tentou terminar alguma coisa enquanto você saía?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Perguntou se podia. Eu disse que queria ver onde a peça estava prendendo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ela ficou só olhando.
*/ 'Ela ficou só olhando?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Segurou a outra ponta. Depois os dedos dela começaram a doer e a gente trocou.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Deu certo.
*/ 'Deu certo?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ainda prendia. Mas descobrimos que não era porque eu estava segurando torto.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se quiser ajudar, pode segurar também. Eu digo quando mexer. E, quando cansar, fala antes de soltar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'friska-promessa-sunny', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'determinacao', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda determinacao.p3.
*/ 'determinacao.p3', /* Essa posição da lista guarda felicidade.p3.
*/ 'felicidade.p3'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda felicidade.
*/ 'felicidade'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pela tarefa que você faria para Sunny',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Sunny está entre os nomes da sua lista.
*/ 'Sunny está entre os nomes da sua lista?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Está. Eu ia fazer um apoio para ele desenhar sem amassar as folhas no colo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você ainda vai fazer.
*/ 'Você ainda vai fazer?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Hoje peguei a madeira. Depois fiquei com raiva de estar medindo como se ele fosse buscar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Posso tirar o nome da lista.
*/ 'Posso tirar o nome da lista.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não mexe. Eu sei que ele morreu. Não estou esquecendo porque não risquei.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Friska', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A madeira pode ficar ali até eu saber o que quero fazer com ela. Você não precisa terminar isso por mim.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pax-sinos-corrida', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'calma', /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda calma.p2.
*/ 'calma.p2'], /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda running.
*/ 'running'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se os sinos incomodam quando alguém corre',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Hermes me ensinou a correr. Os sinos entregam quando alguém passa depressa?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Entregam. Às vezes eu começo a responder antes de a pessoa aparecer.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Para mandar diminuir.
*/ 'Para mandar diminuir?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Para perguntar se precisa de alguma coisa. Mas, quando fico esperando uma resposta, a chaleira passa do ponto.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Então o barulho te atrapalha.
*/ 'Então o barulho te atrapalha.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Às vezes. Eu posso tirar os sinos por uma tarde. Não significa que ninguém pode vir.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se não ouvir nada, avise na porta. E não venha correndo só para descobrir se eu vou levantar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pax-manga-ninfa', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'calma', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda calma.p4.
*/ 'calma.p4', /* Essa posição da lista guarda tristeza.p1.
*/ 'tristeza.p1'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda N1.
*/ 'N1'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se o conserto da fonte foi tranquilo',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ninfa ajudou com a fonte. Vocês conseguiram trabalhar sem conversar muito?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela precisou repetir umas três vezes que minha manga estava presa. Eu achei que estava falando da água.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você estava tão calmo assim.
*/ 'Você estava tão calmo assim?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Estava distraído. Não são a mesma coisa. Molhei os dois quando tentei levantar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ela ficou para esperar a roupa secar.
*/ 'Ela ficou para esperar a roupa secar?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ficou. Depois a roupa secou e continuamos no banco. Não tinha outra coisa para consertar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'},
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Quando olhar a fonte, pode lembrar disso também. Tem um pedaço daquele dia escondido embaixo de uma pedra.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'pax-friska-ausente', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'calma', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda calma.p3.
*/ 'calma.p3', /* Essa posição da lista guarda determinacao.p3.
*/ 'determinacao.p3'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda determinacao.
*/ 'determinacao'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar o que ficou sem resposta depois de Friska',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você escreve sobre os conflitos. Tinha alguma coisa de Friska ali.
*/ 'Você escreve sobre os conflitos. Tinha alguma coisa de Friska ali?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Tinha um pedido meu. Uma parte da fonte precisava de uma peça que ela estava tentando fazer.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ela não terminou.
*/ 'Ela não terminou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não sei. Eu ainda não fui olhar. É estranho perceber que uma das coisas que quero perguntar é tão pequena.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda A fonte pode esperar.
*/ 'A fonte pode esperar.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pode. Eu queria ter dito isso a ela. Para ela vir antes de terminar, se quisesse.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
      { /* Indica quem está falando nessa linha.
*/ who:'Pax', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Você pode ficar aqui por um momento. Mas eu vou perguntar sobre o que aconteceu com ela. Não quero que meu silêncio responda por mim.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hermes-radio-corrida', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'ansiedade', /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda ansiedade.p4.
*/ 'ansiedade.p4'], /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda running.
*/ 'running'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que o rádio chega depois dos passos',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Eu ouvi a voz no rádio depois de ver o movimento. Qual dos dois eu sigo?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Primeiro precisamos saber se descrevem o mesmo movimento. Uma voz atrasada pode estar certa sobre outro instante.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você consegue saber só ouvindo.
*/ 'Você consegue saber só ouvindo?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Nem sempre. Por isso deixei a rota marcada no chão. Você pode comparar com o que vê.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Eu achei que depois de aprender a correr só precisava ser rápido.
*/ 'Eu achei que, depois de aprender a correr, só precisava ser rápido.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'As marcas também mostram onde mudar de lado. Eu prefiro que você veja a curva antes de correr para ela.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se houver outra instrução, confira de onde veio. E, se não entendeu a minha, pergunte antes de eu contar o tempo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hermes-presente-pausa', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'ansiedade', /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda visit melodia.
*/ 'visit-melodia'], /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda ansiedade.p5.
*/ 'ansiedade.p5'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Retomar a pausa que Ninfa deixou para você',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Depois de ouvir a caixa com Ninfa, você achou uma função para o presente dela?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela já informou uma: lembrar de fazer pausas. A minha pergunta era como verificar se funcionava.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Contando quantas vezes parou.
*/ 'Contando quantas vezes parou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Foi a primeira tentativa. Eu parava para registrar, não para descansar. A contagem ficou excelente.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E agora.
*/ 'E agora?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Deixei o registro fechado enquanto ela tocava. Não sei quanto tempo passou.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Lembro onde a música parou, porém. Vou conseguir perguntar por aquele trecho quando voltarmos a conversar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hermes-horario-pax', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'ansiedade', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda ansiedade.p2.
*/ 'ansiedade.p2', /* Essa posição da lista guarda calma.p2.
*/ 'calma.p2'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda calma.
*/ 'calma'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se algum relógio marca a visita a Pax',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Algum desses relógios marcava a hora de ir até Pax.
*/ 'Algum desses relógios marcava a hora de ir até Pax?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu não tinha uma hora. Ele disse que não precisava avisar com tanta antecedência.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Está tentando calcular quando devia ter ido.
*/ 'Está tentando calcular quando devia ter ido?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Reconstituí o último trajeto três vezes. A conta dá o mesmo intervalo. Eu continuo procurando outra saída.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Talvez tivesse chegado a tempo.
*/ 'Talvez tivesse chegado a tempo.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A tempo de quê? Você ainda não me disse quando aconteceu. Não coloque uma certeza na informação que está faltando.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Hermes', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Por enquanto vou deixar os relógios como estão. A última visita não pode corrigir as próximas.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'lumen-reparo-visivel', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'culpa', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda culpa.p4.
*/ 'culpa.p4', /* Essa posição da lista guarda orgulho.p2.
*/ 'orgulho.p2'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Comparar o reparo com o tecido de Aurea',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Aurea também conserva um remendo. Você se preocupa se alguém percebe o seu?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Antes eu virava o objeto para a pessoa olhar primeiro o lado inteiro.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Mesmo quando não foi você que quebrou.
*/ 'Mesmo quando não foi você que quebrou?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Mesmo assim. Parecia que, se ainda desse para ver, eu não tinha terminado direito.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Aurea esconde a costura.
*/ 'Aurea esconde a costura?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não. Eu queria perguntar como ela consegue. Depois percebi que podia começar entregando sem escolher o lado.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'},
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Na próxima visita eu tento. Se a pessoa perguntar o que aconteceu, posso responder só essa pergunta.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'lumen-depois-bilhete', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'culpa', /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda visit bilhete.
*/ 'visit-bilhete'], /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda culpa.p3.
*/ 'culpa.p3'], /* Confere quais personagens ainda precisam estar vivos.
*/ alive:[ /* Essa posição da lista guarda medo.
*/ 'medo'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Retomar a visita em que Hunger recebeu sua mensagem',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Quando encontrou Hunger, você ainda precisava perguntar se ele recebeu?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu tinha outra pergunta pronta se ele dissesse que sim. Depois outra, se dissesse que tinha gostado.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Mas você foi embora.
*/ 'Mas você foi embora.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele disse que recebeu. Eu consegui ouvir essa parte. No corredor comecei a inventar o resto outra vez.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Vai levar o presente para perguntar de novo.
*/ 'Vai levar o presente para perguntar de novo?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu quero entregar porque guardei para ele. Se começar a usar o embrulho para cobrar uma resposta, prefiro esperar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Hoje posso só deixar pronto. Ele sabe que eu passei. Eu sei que ele me ouviu.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'acolhido'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'lumen-carta-pax', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'culpa', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda culpa.p2.
*/ 'culpa.p2', /* Essa posição da lista guarda calma.p3.
*/ 'calma.p3'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda C2.
*/ 'C2'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda calma.
*/ 'calma'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se a carta mudou depois de Pax',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você está escrevendo outra carta de desculpas.
*/ 'Você está escrevendo outra carta de desculpas?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Comecei. Escrevi que devia ter percebido. Parei antes de dizer o quê.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Não tinha nada que pudesse fazer.
*/ 'Não tinha nada que pudesse fazer?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Não sei. E eu fico com vergonha de dizer que não sei. Parece que estou tentando sair da conversa.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Pax também deixava perguntas sem resposta nas anotações.
*/ 'Pax também deixava perguntas sem resposta nas anotações.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele deixava. Eu podia ler e não sair arrancando as páginas para completar por ele.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Lúmen', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Vou guardar o começo da carta. Quando eu escrever de novo, quero conseguir dizer uma coisa que aconteceu. Ainda não consigo hoje.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hunger-flores-soleira', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'medo', /* Relaciona as pistas que podem liberar esse assunto.
*/ clues:[ /* Essa posição da lista guarda medo.p1.
*/ 'medo.p1'], /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda topic candy hunger.
*/ 'topic-candy-hunger'], /* Confere quais personagens ainda precisam estar vivos.
*/ alive:[ /* Essa posição da lista guarda amor.
*/ 'amor'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Dizer que Candy reconheceu as flores da soleira',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Candy contou que algumas flores vieram de você.
*/ 'Candy contou que algumas flores vieram de você.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela contou onde eu encontro ou só que eu levo?', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Só que você deixa perto da porta.
*/ 'Só que você deixa perto da porta.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Então ela entendeu a parte que importava.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Por que não espera para entregar.
*/ 'Por que não espera para entregar?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Porque às vezes eu quero deixar e ir embora. Ela pode pegar sem me procurar pelo corredor.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Quando eu quiser ficar, eu aviso. Você já sabe como eu prefiro ser recebido. Não chegue escondido para testar se é verdade.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hunger-mensagem-recebida', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'medo', /* Guarda ou confere marcações específicas do progresso.
*/ flags:[ /* Essa posição da lista guarda visit bilhete.
*/ 'visit-bilhete'], /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda culpa.p5.
*/ 'culpa.p5', /* Essa posição da lista guarda medo.p3.
*/ 'medo.p3'], /* Confere quais personagens ainda precisam estar vivos.
*/ alive:[ /* Essa posição da lista guarda culpa.
*/ 'culpa'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar por que você disse a Lúmen que recebeu',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Lúmen veio saber da mensagem. Você respondeu antes de ele explicar tudo.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ele estava segurando a própria mão. Faz isso quando acha que falou alguma coisa errada.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Queria que ele parasse de se preocupar.
*/ 'Queria que ele parasse de se preocupar?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Queria responder o que perguntou. Eu tinha recebido. Tinha lido.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda E não tinha mais nada para dizer.
*/ 'E não tinha mais nada para dizer?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Tinha. Disse que ele não precisava atravessar sozinho. Eu queria saber por onde tinha vindo.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se ele voltar, essa pergunta ainda é minha. Não vá buscar uma resposta usando meu nome.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'hunger-xicara-pax', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'medo', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda calma.p5.
*/ 'calma.p5', /* Essa posição da lista guarda medo.p3.
*/ 'medo.p3'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda M2.
*/ 'M2'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda calma.
*/ 'calma'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Falar da xícara que Pax deixava para suas visitas',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda A segunda xícara continua no quarto de Pax.
*/ 'A segunda xícara continua no quarto de Pax.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu sei qual é. Ele girava a alça quando me ouvia chegar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ele sabia que era você.
*/ 'Ele sabia que era você?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Às vezes errava. Eu ouvia ele falando com outra pessoa e esperava lá fora.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Por que não entrava.
*/ 'Por que não entrava?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Porque eu podia voltar depois. Você entende o que mudou nessa frase?', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
      { /* Indica quem está falando nessa linha.
*/ who:'Hunger', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Deixe a xícara lá. E não me convide para sentar no lugar dele.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'beerus-peca-pedida', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'odio', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda odio.p3.
*/ 'odio.p3', /* Essa posição da lista guarda determinacao.p3.
*/ 'determinacao.p3'], /* Confere quais personagens ainda precisam estar vivos.
*/ alive:[ /* Essa posição da lista guarda determinacao.
*/ 'determinacao'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se os pedidos de Friska chegam até aqui',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Friska tem uma lista de coisas que prometeu fazer. Você também recebe pedidos?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Recebo. Ela manda o tamanho da peça e esquece de dizer de qual lado mediu.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você devolve o pedido.
*/ 'Você devolve o pedido?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Vou lá perguntar. Se eu adivinhar errado, ela vai tentar encaixar a peça errada a tarde inteira.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Achei que ia mandar ela buscar sozinha.
*/ 'Achei que ia mandar ela buscar sozinha.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela também já trouxe coisa que eu pedi. Não sei por que isso te surpreende.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'},
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Se passar por lá, não diga que eu estou cobrando. Eu vou quando souber qual peça levar.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'beerus-retrato-ninfa', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'odio', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda odio.p2.
*/ 'odio.p2', /* Essa posição da lista guarda tristeza.p3.
*/ 'tristeza.p3'], /* Relaciona as conversas necessárias para liberar essa parte.
*/ talks:[ /* Essa posição da lista guarda N1.
*/ 'N1'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar se o retrato é do mesmo dia da fotografia',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ninfa guarda uma fotografia dos irmãos. Este retrato foi feito no mesmo dia?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Depois. Tentaram juntar as duas coisas porque Hermes não tinha parado na primeira.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Pelo menos aqui ele ficou quieto.
*/ 'Pelo menos aqui ele ficou quieto.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Aqui ele não estava presente para discutir a posição. Fez isso depois.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'gostou'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Ninfa preferiu guardar a fotografia.
*/ 'Ninfa preferiu guardar a fotografia.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Ela aparece de um jeito lá. Aqui aparece de outro. Eu lembro dos dois.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Pode olhar daqui. Não precisa tirar da parede para conferir o que ainda dá para reconhecer.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
    ]
  },
  {
     /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:'beerus-fita-sunny', /* Liga esse conteúdo ao Eco correspondente.
*/ eco:'odio', /* Exige que todas as pistas relacionadas já tenham sido encontradas.
*/ allClues:[ /* Essa posição da lista guarda felicidade.p4.
*/ 'felicidade.p4', /* Essa posição da lista guarda odio.p2.
*/ 'odio.p2'], /* Relaciona as ausências que mudam essa parte da história.
*/ dead:[ /* Essa posição da lista guarda felicidade.
*/ 'felicidade'], /* Define o texto mostrado na opção ou no controle.
*/ label:'Perguntar pela fita verde que Sunny escolheu',
     /* Reúne as falas na ordem em que serão apresentadas.
*/ lines:[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Sunny estava guardando uma fita verde para o presente de Pax.
*/ 'Sunny estava guardando uma fita verde para o presente de Pax.'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Eu trouxe aquela fita. Ele pediu a verde. Eu levei outra primeiro.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'abalado'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Por quê.
*/ 'Por quê?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A outra parecia melhor. Ele não quis. Fui buscar a que tinha pedido.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'base'},
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Você.
*/ 'Você', /* Essa posição da lista guarda Você lembra de uma discussão tão pequena.
*/ 'Você lembra de uma discussão tão pequena?'],
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'Lembro dele abrindo a mão para mostrar a cor. Lembro da voz. Você quer que eu lembre só de como acabou?', /* Escolhe a pose do personagem para essa fala.
*/ pose:'quebrando'},
      { /* Indica quem está falando nessa linha.
*/ who:'Beerus', /* Guarda o texto que essa parte vai mostrar.
*/ text:'A fita fica onde ele deixou. Não me traga mais uma coisa que ele não pode pedir de volta.', /* Escolhe a pose do personagem para essa fala.
*/ pose:'nao-gostou'}
    ]
  }
);
