 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                                
 /* Atualiza window.ANATA usando o resultado de Object.freeze.
*/ window.ANATA =  /* Impede a troca direta dos campos desse objeto. */ Object.freeze({
   /* Esse campo guarda script com uma função para executar quando for chamada.
*/ script /* Essa função agrupa a ação executada quando for chamada nesta parte. */ (state) {
     /* Essa declaração usa const para preparar lines, mantendo essas referências fixas.
*/ const  /* Aqui lines recebe uma lista com 0 posições.
*/ lines=[];
     /* Essa declaração usa const para preparar a, mantendo essas referências fixas.
*/ const  /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a= /* Acrescenta uma fala de Anata à sequência da conversa final. */ text=> /* Acrescenta esse valor no fim da lista. */ lines.push({ /* Indica quem está falando nessa linha.
*/ who:'Anata', /* Guarda o texto que essa parte vai mostrar.
*/ text});
     /* Essa declaração usa const para preparar p, mantendo essas referências fixas.
*/ const  /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p= /* Acrescenta uma fala do protagonista à sequência da conversa final. */ text=> /* Acrescenta esse valor no fim da lista. */ lines.push({ /* Indica quem está falando nessa linha.
*/ who:'Você', /* Guarda o texto que essa parte vai mostrar.
*/ text});
     /* Essa declaração usa const para preparar scene, mantendo essas referências fixas.
*/ const  /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene= /* Acrescenta uma descrição do ambiente à sequência da conversa final. */ text=> /* Acrescenta esse valor no fim da lista. */ lines.push({ /* Indica quem está falando nessa linha.
*/ who:'Jardim', /* Guarda o texto que essa parte vai mostrar.
*/ text});
     /* Essa declaração usa const para preparar question, mantendo essas referências fixas.
*/ const  /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question= /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher. */ (text,answers)=> /* Acrescenta esse valor no fim da lista. */ lines.push({ /* Guarda o texto que essa parte vai mostrar.
*/ text, /* Reúne as respostas que o jogador pode escolher.
*/ choices: /* Monta uma nova lista transformando cada posição da lista original. */ answers.map( /* Essa função recebe valores separados da lista e devolve um objeto com os campos dessa parte. */ ([label,reply])=>({ /* Define o texto mostrado na opção ou no controle.
*/ label, /* Guarda a resposta que aparece depois dessa escolha.
*/ reply, /* Indica quem está falando nessa linha.
*/ who:'Anata'}))});
     /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene('A luz não revela outro lugar. Não há parede, caminho ou horizonte. A figura à sua frente permanece imóvel. Você muda de posição; ela continua à mesma distância.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Você chegou.'); /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Acabou?'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Você trouxe essa pergunta até aqui. Antes era uma certeza: quando o último sentimento desaparecesse, alguma coisa dentro de você finalmente ficaria quieta.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Não tem mais ninguém.'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Eu não perguntei quem ficou. Perguntei o que você veio acabar.');
     /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question('O que o protagonista procurava no fim deste caminho?',[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Acabar com as inseguranças.
*/ 'Acabar com as inseguranças', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ele queria eliminar o que os outros poderiam perceber. Como se não poder ser ferido fosse o mesmo que não precisar viver.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Parar de depender de alguém.
*/ 'Parar de depender de alguém', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Foi preciso receber uma luz, uma espada, um escudo e direções para chegar à ausência de quem os ofereceu. A independência que ele imaginou veio carregada de coisas recebidas.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Ele chamou isso de liberdade.
*/ 'Ele chamou isso de liberdade', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Uma porta aberta não diz quem decidiu atravessá-la. Ele queria um mundo onde ninguém pudesse recusá-lo; chamou isso de um mundo onde não precisava de ninguém.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Prefiro escutar.
*/ 'Prefiro escutar', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Então escute sem procurar a resposta que faz esta conversa terminar mais depressa. Não há uma prova escondida aqui.']
    ]);
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('O Jardim não colocou essas inseguranças dentro dele. Elas já estavam na maneira como entrou. Antes de alguém negar uma visita, ele já ensaiava o abandono. Antes de errar, já procurava quem acusar.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele confundiu sentir uma coisa com ser condenado por ela. Se sentia medo, devia ser fraco. Se precisava de companhia, devia ser insuficiente. Se uma lembrança doía, alguém precisava ser o culpado.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Eles faziam isso ficar mais forte.'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Às vezes. Eles também davam forma ao que ele evitava olhar. Tirar o nome de uma coisa não a tira de dentro da casa.');
     /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene('Você espera que a figura se aproxime ou recue. Nenhum dos dois acontece. A falta de movimento começa a parecer uma resposta.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Sunny tentava preparar uma visita antes mesmo de saber se alguém vinha. Não queria ser uma obrigação. Queria que ficar parecesse uma boa escolha.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('O protagonista viu essa vontade e encontrou uma alavanca: fazer alguém justificar por que merecia companhia. Ele sabia qual pergunta deixaria Sunny procurando um erro em si.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('A promessa dele era nunca mais precisar provar seu próprio valor. Ainda assim, exigiu essa prova dos outros. Não ficou menos inseguro quando ouviu a resposta. Só aprendeu onde apertar.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Eu não queria ser como ele.'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Até aqui falei de quem atravessou os quartos. Quem conduz uma história pode desejar outra coisa. Essa diferença não vai desaparecer só porque o personagem insiste em usar a sua mão.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Aurea ofereceu duas peças. Uma para alcançar, outra para suportar um impacto. Você viu o lado de dentro do escudo: alça, apoio, uma posição que precisava ser aprendida.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele queria proteção sem reconhecer um limite. Recebeu um recurso e o tratou como garantia de que nenhuma escolha precisaria voltar até ele.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Quando alguém admite uma falha, o mundo não se torna dono dessa pessoa. Ele procurou transformar a confiança de Aurea numa dívida que nunca terminava de ser paga.');
     /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question('O que ele queria que a proteção impedisse?',[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Que alguém pudesse recusá lo.
*/ 'Que alguém pudesse recusá-lo', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Uma recusa pode doer sem dizer que uma pessoa não tem valor. Ele tentou apagar essa diferença. Qualquer limite do outro virou uma sentença contra ele.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Que ele voltasse a errar.
*/ 'Que ele voltasse a errar', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Então precisaria parar de escolher. A espada não podia fazer isso por ele. O escudo também não. Ele carregou os dois como se fossem uma desculpa pronta.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Que alguém percebesse seu medo.
*/ 'Que alguém percebesse seu medo', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ele passou a vigiar o olhar dos outros. Quando não encontrou uma acusação, passou a imaginar uma. Não existe uma sala vazia o bastante para vencer esse tipo de vigia.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Não sei responder por ele.
*/ 'Não sei responder por ele', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Você não precisa completar toda lacuna. Foi justamente a pressa de completar uma resposta que o fez deixar de ouvir quem estava diante dele.']
    ]);
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Friska disse não. A faca estava emoldurada, não esquecida. Havia projetos ao redor, tentativas, anotações. Ela tinha uma vida que não era a função daquela lâmina na sua passagem.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele voltou à recusa como se insistir mudasse o dono da decisão. O que chamou de determinação em si, chamou de obstáculo nela.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('A interface prometeu um turno. AGIR. LUTAR. Uma borda, duas palavras e o conforto de achar que uma escolha ainda seria feita. Quando a cena voltou, o protagonista já tinha agido.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Eu apertei um botão.'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Sim. E o corte não te deu a intenção dele como se fosse sua. Mas fez você notar a distância entre o que um comando promete e o que a história permite acontecer.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele levou a faca consigo. Os outros a reconheceram. O objeto entrou nas conversas antes de qualquer confissão. A intenção que ele escondia começou a chegar aos quartos antes da sua voz.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Pax deixava lugar para uma segunda xícara. Não exigia que alguém chegasse bem para poder ficar. O protagonista quis chamar esse lugar de dependência.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Talvez porque receber um lugar também expusesse uma necessidade. Era mais fácil destruir quem acolhia do que admitir que queria sentar.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Depois, durante a fuga, ele procurou aquele quarto outra vez. Quis que o refúgio continuasse existindo sem a pessoa que fazia dele um refúgio.');
     /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene('Você tenta lembrar se o ruído da fonte continua. Não há som de água aqui. Só o intervalo em que esperava ouvi-lo.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Hermes pediu uma intenção verdadeira. Podia calcular trajetos, não uma decisão que alguém escondia para depois culpar a previsão.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('O protagonista queria controlar o que ainda não tinha acontecido. Transformou qualquer desvio em prova de que confiar era um erro. Depois ofereceu aos outros informações incompletas e exigiu que acertassem.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Veja o círculo: ele escondia, desconfiava da resposta e usava a própria desconfiança para justificar esconder mais. Nenhuma morte poderia terminar uma conta construída para voltar ao começo.');
     /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question('Qual certeza ele estava tentando comprar?',[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Que ninguém iria abandoná lo.
*/ 'Que ninguém iria abandoná-lo', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Não há como prometer a permanência de todas as pessoas. Mas ele trocou essa incerteza por uma ausência que ele próprio produziu. Depois chamou a ausência de confirmação.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Que nunca seria visto como insuficiente.
*/ 'Que nunca seria visto como insuficiente', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Precisaria controlar todos os olhares, inclusive os imaginados. Quando não havia ninguém olhando, ele continuou procurando um julgamento. O Jardim vazio não virou absolvição.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Que nada mais poderia surpreendê lo.
*/ 'Que nada mais poderia surpreendê-lo', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Havia gestos que não eram ataques. Uma visita, uma peça guardada, uma luz. Ele ficou tão ocupado antecipando uma ferida que começou a tratar qualquer aproximação como o começo dela.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Certeza nenhuma seria suficiente.
*/ 'Certeza nenhuma seria suficiente', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Talvez. Cada garantia exigiria outra garantia. Ele pensou que chegaria a uma última porta; trouxe consigo a necessidade de construir a próxima.']
    ]);
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Lúmen tentava distinguir reparar um gesto de pedir que outra pessoa apagasse a lembrança dele. Uma resposta não se torna errada só porque não produz o alívio que alguém esperava.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Hunger interrompeu a fuga para atacá-lo. Não foi um disparo perdido. Não vou chamar aquela escolha de proteção só porque ele também sentia medo.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Conhecer a dor de alguém não torna todo gesto dessa pessoa inevitável. Você viu isso nele. O protagonista precisava que a mesma regra valesse para si.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a(state.flags.sparedFear?'No quarto de Pax, você deixou Hunger sair vivo enquanto chorava. O que aconteceu depois não apaga esse momento nem transforma aquela tentativa em outra coisa.':'No quarto de Pax, a forma de terror cedeu. Hunger estava chorando antes do gesto seguinte. O perigo que corria atrás de você já não era a mesma cena que estava diante da sua mão.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele queria que a própria violência fosse sempre uma reação, nunca uma decisão. Que houvesse uma explicação capaz de carregar a faca no lugar dele.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Você está dizendo que nada do que aconteceu importou?'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Estou dizendo o contrário. Importou quem tentou impedir, quem acolheu, quem feriu e quem escolheu continuar. Apagar essas diferenças seria a última coisa que ele faria com eles.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ninfa deixou você se aproximar. Havia uma música lembrada pela metade, uma visita à fonte, coisas pequenas que não precisavam virar uma revelação para ter valor.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele ouviu uma confidência e passou a tratá-la como instrução. Onde ela dividiu uma lembrança, ele procurou um mecanismo.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Quando a água tomou a cena, você precisou reagir ao que vinha. Uma resposta rápida segurava o próximo instante. Não voltava no tempo para tornar a traição menos concreta.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('O protagonista queria apagar a tristeza. Levou as perdas com ele. O nome desapareceu de um quarto; a falta não desapareceu do caminho.');
     /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene('A figura não muda de expressão. Você percebe que vinha esperando uma expressão que dissesse quando já ouviu o bastante.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Beerus reconheceu os pedidos dos outros. Uma peça, uma fita, o jeito de deixar uma coisa perto da entrada. Ele não conhecia apenas a maneira como eles morriam.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('A raiva dele apareceu diante da sua passagem. Você pôde desviar, defender, esperar uma abertura. Foi uma luta. Isso não transforma cada quarto anterior numa arena.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Quando ele perdeu o controle, Candy veio. Não porque o protagonista tinha provado que merecia. Ela viu alguém em perigo e escolheu chegar.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Depois a espada ficou no chão. Houve um espaço inteiro entre perdê-la e recolhê-la. Um objetivo na tela é uma frase curta. O caminho até ele pode carregar uma escolha enorme.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a(state.flags.triedSugar?'Você tentou poupar Candy. A alternativa desapareceu diante de você. Aquela tentativa pertence a quem jogava; o golpe pertenceu ao protagonista. Não vou juntar essas vontades só para ter uma acusação mais fácil.':'Candy estava ajoelhada e chorava com o rosto coberto. A mão que ergueu a espada já tinha recebido uma luz daquela mesma pessoa. O protagonista não podia dizer que nunca foi acolhido.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele pensou que, sem amor, não haveria risco de perder. Mas guardou a luz, lembrou a voz e reconheceu a falta. Destruir uma presença não transforma o vínculo em algo que nunca existiu.');
     /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question('Até aqui falamos do protagonista. O que fez você continuar acompanhando?',[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu queria salvar alguém.
*/ 'Eu queria salvar alguém', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Houve momentos em que você tentou. A história não respeitou todas essas tentativas. Você pode reconhecer isso sem fingir que desejou o que foi obrigado a ver.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu precisava saber o final.
*/ 'Eu precisava saber o final', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Querer entender uma história pode levar alguém a atravessar uma cena que preferia impedir. Chegar ao fim não obriga você a defender quem conduziu.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu achei que no fim haveria uma solução.
*/ 'Eu achei que no fim haveria uma solução', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Ele também procurava uma resposta única. Talvez você esperasse encontrar outra. Uma história terminar não significa que toda pergunta recebeu aquilo de que precisava.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu não quero responder.
*/ 'Eu não quero responder', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Pode guardar essa resposta. O silêncio de quem joga não é uma confissão entregue ao personagem.']
    ]);
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Eu só conheço o caminho que ficou nesta partida. Não conheço a sua vida fora dela. Mas posso deixar uma pergunta aqui, onde o personagem tentou deixar uma certeza.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Quantas vezes ele chamou um julgamento de fato antes que alguém tivesse dito uma palavra? Quantas vezes preferiu provocar uma distância para não ter de admitir que temia uma aproximação?');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele queria não precisar de aprovação. Transformou cada conversa numa busca por uma frase que o inocentasse. Queria não temer o abandono. Produziu ausências para nunca ser surpreendido por uma.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('Então eu ainda sou…'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Termine a frase se quiser. Repare de quem você está esperando a resposta.');
     /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question('O que ele consegue dizer sem usar a ausência dos outros como prova?',[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu ainda tenho medo.
*/ 'Eu ainda tenho medo', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'O medo continua, mesmo sem Hunger. Agora não há um rosto diante dele que possa ser chamado de causa suficiente. Há uma experiência que ele ainda precisa aprender a suportar sem destruir alguém.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu ainda queria que alguém ficasse.
*/ 'Eu ainda queria que alguém ficasse', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Essa vontade esteve aqui desde a entrada. Admiti-la não traria todos de volta. Mas talvez impedisse que ele chamasse outra pessoa de obstáculo por oferecer exatamente o que desejava receber.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu não sei quem sobrou.
*/ 'Eu não sei quem sobrou', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Uma identidade feita apenas de recusas precisa continuar encontrando coisas para negar. Ele retirou todos os nomes da sala e ainda não encontrou uma resposta para o próprio.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Eu não consigo terminar essa frase.
*/ 'Eu não consigo terminar essa frase', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Não há um cronômetro nesta pergunta. Ele passou o caminho inteiro tentando vencer a demora com um gesto definitivo. Pode encontrar agora uma pergunta que não cede à força.']
    ]);
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Sanidade e Insanidade deram direções. Você aprendeu uma regra, seguiu, contrariou, escolheu o meio. Duas orientações viraram chaves. A porta abriu.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Mas uma regra pode levar alguém por um labirinto sem explicar por que precisava chegar aqui. O caminho certo até uma porta não torna certa toda coisa feita antes dela.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Eu sou a neutralidade que ele pediu. A ausência dos sentimentos que tentou remover. Não sou uma garantia de paz, nem uma versão melhor de cada pessoa que ficou para trás.');
     /* Acrescenta uma fala do protagonista à sequência da conversa final.
*/ p('E por que isso ainda dói?'); /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Porque a promessa estava errada. Ele destruiu os sentimentos e continuou carregando a maneira como olhava para si.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('A insegurança não precisava dos quartos para existir. Precisava apenas que qualquer possibilidade de rejeição parecesse uma sentença; que qualquer limite parecesse abandono; que qualquer erro parecesse uma identidade inteira.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Nenhum deles podia dar a certeza que ele exigia. Também não era preciso matá-los para descobrir isso.');
     /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene('Você olha para trás. Não há outra porta. Também não há alguém bloqueando a passagem. Pela primeira vez, a ausência não pode ser apontada como inimigo.');
     /* Acrescenta a pergunta e monta as alternativas que o jogador pode escolher.
*/ question('O que fica desta história?',[
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Uma falta que ele não conseguiu apagar.
*/ 'Uma falta que ele não conseguiu apagar', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Então não a transforme depressa numa explicação confortável. Lembre também os gestos, as visitas, os nomes. Eles foram mais do que o modo como o protagonista os perdeu.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda A diferença entre sentir e escolher.
*/ 'A diferença entre sentir e escolher', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Uma coisa não decide automaticamente a outra. Foi essa diferença que ele tentou esconder em cada quarto. Foi ela que continuou aparecendo depois de cada morte.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Uma pergunta que continua comigo.
*/ 'Uma pergunta que continua comigo', /* Essa posição da lista guarda o texto definido nessa parte.
*/ 'Uma pergunta pode acompanhar alguém sem se tornar um veredito sobre essa pessoa. Você pode deixá-la aberta quando esta tela terminar.'],
       /* Essa posição reúne 2 valores relacionados na ordem usada pelo roteiro.
*/ [ /* Essa posição da lista guarda Quero deixar o Jardim aqui.
*/ 'Quero deixar o Jardim aqui', /* Essa posição da lista guarda Pode. O fim desta história não exige que você permaneça dentro dela.
*/ 'Pode. O fim desta história não exige que você permaneça dentro dela.']
    ]);
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('Ele chegou à ausência que desejava. Não chegou à certeza que prometeu a si mesmo.');
     /* Acrescenta uma fala de Anata à sequência da conversa final.
*/ a('O Jardim termina aqui. A pergunta que ele trouxe não terminou com os outros.');
     /* Acrescenta uma descrição do ambiente à sequência da conversa final.
*/ scene('A figura permanece exatamente como estava. O último movimento pertence à tela que se fecha, não a ela.');
     /* Devolve lines e encerra essa chamada da função.
*/ return lines;
  }
});
