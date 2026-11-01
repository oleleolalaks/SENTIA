// Roteiro, pistas e sequências de ação. Os estados de morte são separados da vulnerabilidade.
window.ROTEIRO = {
  "names": {
    "felicidade": "Sunny",
    "amor": "Sugar",
    "tristeza": "Ninfa",
    "orgulho": "Aurea",
    "determinacao": "Friska",
    "calma": "Pax",
    "ansiedade": "Hermes",
    "medo": "Hunger",
    "culpa": "Lúmen",
    "odio": "Beerus",
    "sanidade": "Cassidy",
    "insanidade": "Mizzery",
    "neutralidade": "Anata"
  },
  "points": [
    {
      "id": "felicidade.p1",
      "eco": "felicidade",
      "view": 0,
      "name": "Mural de pequenas descobertas",
      "description": "Desenhos celebram coisas banais: uma flor que abriu, uma visita, uma música lembrada.",
      "voice": "Essa foi uma conquista. Pequena ainda conta.",
      "after": "Os desenhos continuam coloridos; o comentário não vem."
    },
    {
      "id": "felicidade.p2",
      "eco": "felicidade",
      "view": 1,
      "name": "Instrumento remendado",
      "description": "Uma corda foi substituída várias vezes.",
      "voice": "Não é pra tocar bonito. É pra tocar junto.",
      "after": "A nota soa igual, mas ninguém acompanha."
    },
    {
      "id": "felicidade.p3",
      "eco": "felicidade",
      "view": 1,
      "name": "Caixa de desenhos incompletos",
      "description": "Os desenhos sem rosto foram guardados, não jogados fora.",
      "voice": "Às vezes eu não consigo terminar. Não precisa olhar assim.",
      "after": "A caixa permanece aberta, sem conclusão."
    },
    {
      "id": "felicidade.p4",
      "eco": "felicidade",
      "view": 2,
      "name": "Presente para Pax",
      "description": "Uma fita verde envolve algo simples para o quarto de Calma.",
      "voice": "Ele deixa eu ficar lá sem inventar conversa.",
      "after": "Não há mais quem entregue ou receba o presente."
    },
    {
      "id": "felicidade.p5",
      "eco": "felicidade",
      "view": 2,
      "name": "Semente junto à luz",
      "description": "A semente ocupa um lugar protegido perto da janela.",
      "voice": "Nem tudo que eu cuido fica bonito rápido.",
      "after": "A semente não vira prêmio por uma morte."
    },
    {
      "id": "felicidade.p6",
      "eco": "felicidade",
      "view": 3,
      "name": "Bilhete atrás do mural",
      "description": "Um rascunho pergunta se ainda fariam visita num dia sem graça.",
      "voice": "Isso não era pra ter ficado aí.",
      "after": "A pergunta continua sem resposta."
    },
    {
      "id": "calma.p1",
      "eco": "calma",
      "view": 0,
      "name": "Banco de acolhimento",
      "description": "Há espaço para duas pessoas, embora Pax costume ficar sozinho.",
      "voice": "Pode sentar. Não precisa ter uma boa notícia.",
      "after": "O banco está no mesmo lugar, vazio."
    },
    {
      "id": "calma.p2",
      "eco": "calma",
      "view": 1,
      "name": "Sinos de vento",
      "description": "Uma nota fica fora de ritmo quando alguém passa depressa.",
      "voice": "Às vezes um barulho ajuda a perceber o silêncio.",
      "after": "O som perdeu a resposta de Pax."
    },
    {
      "id": "calma.p3",
      "eco": "calma",
      "view": 1,
      "name": "Anotações de conflitos",
      "description": "As páginas não são vazias: nomes de irmãos e questões sem resposta.",
      "voice": "Eu não resolvo tudo. Só tento não piorar.",
      "after": "As questões continuam abertas."
    },
    {
      "id": "calma.p4",
      "eco": "calma",
      "view": 2,
      "name": "Fonte de água",
      "description": "A água circula lentamente e tem marcas de pequenos reparos.",
      "voice": "Ninfa me ajudou com isso. Não foi um trabalho tranquilo.",
      "after": "A fonte ainda funciona; paz não é um botão desligado."
    },
    {
      "id": "calma.p5",
      "eco": "calma",
      "view": 2,
      "name": "Chaleira e segunda xícara",
      "description": "A segunda xícara está pronta para uma visita sem hora marcada.",
      "voice": "O Medo costuma chegar tarde.",
      "after": "A xícara fica intacta quando Medo a percebe depois."
    },
    {
      "id": "calma.p6",
      "eco": "calma",
      "view": 3,
      "name": "Porta e tranca interna",
      "description": "A tranca funciona; a madeira tem marcas antigas.",
      "voice": "Refúgio não devia ser prisão.",
      "after": "O protagonista tenta a mesma tranca durante a fuga."
    },
    {
      "id": "determinacao.p1",
      "eco": "determinacao",
      "view": 0,
      "name": "Moldura da faca vermelha",
      "description": "Uma faca vermelha está exposta na parede, fora do alcance de uma coleta casual.",
      "voice": "Eu usei muito isso há um tempo.",
      "after": "A moldura vazia confirma de onde veio a faca."
    },
    {
      "id": "determinacao.p2",
      "eco": "determinacao",
      "view": 1,
      "name": "Projetos inacabados",
      "description": "Projetos incompletos têm datas e tentativas diferentes.",
      "voice": "Ainda não terminei. É diferente de não conseguir.",
      "after": "Nenhum projeto se termina automaticamente depois."
    },
    {
      "id": "determinacao.p3",
      "eco": "determinacao",
      "view": 1,
      "name": "Lista de promessas aos irmãos",
      "description": "Há tarefas de ajuda pequenas, não um juramento mágico.",
      "voice": "Se eu disse que ia ajudar, eu volto.",
      "after": "O protagonista pode ler o que ela ainda faria pelos outros."
    },
    {
      "id": "determinacao.p4",
      "eco": "determinacao",
      "view": 2,
      "name": "Jogo de encaixe",
      "description": "Uma peça não cabe; ela testa outra posição em vez de quebrá-la.",
      "voice": "Tudo bem. A gente tenta de novo.",
      "after": "A peça fica no lugar em que foi deixada."
    },
    {
      "id": "determinacao.p5",
      "eco": "determinacao",
      "view": 2,
      "name": "Pano de manutenção",
      "description": "O pano serve para limpar a moldura e seus objetos.",
      "voice": "Isso não significa que eu vá emprestar.",
      "after": "Não é usado para mostrar detalhes de ferimento."
    },
    {
      "id": "determinacao.p6",
      "eco": "determinacao",
      "view": 3,
      "name": "Espaço diante da moldura",
      "description": "Há lugar para examinar e tentar tirar a faca, com a dona presente.",
      "voice": "Não. Você ouviu.",
      "after": "O ponto muda para inspeção da moldura; não mata duas vezes."
    },
    {
      "id": "orgulho.p1",
      "eco": "orgulho",
      "view": 0,
      "name": "Pedestal de equipamentos",
      "description": "Espada e escudo solares foram organizados para uso real.",
      "voice": "Não são enfeites.",
      "after": "O pedestal pode ficar vazio porque ela entregou ou porque houve morte; diferenciar flags."
    },
    {
      "id": "orgulho.p2",
      "eco": "orgulho",
      "view": 1,
      "name": "Tecido restaurado",
      "description": "Um tecido claro foi remendado por dentro.",
      "voice": "Cuidar de algo não exige esconder que já rasgou.",
      "after": "O remendo fica visível sem narrador explicativo."
    },
    {
      "id": "orgulho.p3",
      "eco": "orgulho",
      "view": 1,
      "name": "Registro de guardas",
      "description": "Há relatos de proteção e erros corrigidos, não só vitórias.",
      "voice": "Se uma decisão foi minha, a consequência também é.",
      "after": "A última entrada foi interrompida."
    },
    {
      "id": "orgulho.p4",
      "eco": "orgulho",
      "view": 2,
      "name": "Escudo de treino",
      "description": "O lado interno revela como segurar a alça.",
      "voice": "Seu braço fica aqui. Você precisa enxergar o perigo.",
      "after": "O tutorial pode ser relido sem voz viva."
    },
    {
      "id": "orgulho.p5",
      "eco": "orgulho",
      "view": 2,
      "name": "Marca de impacto",
      "description": "Um golpe antigo foi bloqueado junto de uma passagem.",
      "voice": "Ódio não é alguém que você deve provocar.",
      "after": "A marca continua sendo advertência."
    },
    {
      "id": "orgulho.p6",
      "eco": "orgulho",
      "view": 3,
      "name": "Inscrição do compromisso",
      "description": "A inscrição fala de proteger, não de obter permissão para ferir.",
      "voice": "Escolha o que vai defender antes de escolher o que atacar.",
      "after": "A espada permanece no inventário, se foi recebida."
    },
    {
      "id": "ansiedade.p1",
      "eco": "ansiedade",
      "view": 0,
      "name": "Rota de treino",
      "description": "Marcas no piso registram percursos de corrida.",
      "voice": "Tempo estimado: doze segundos. O seu será maior.",
      "after": "A habilidade aprendida continua disponível."
    },
    {
      "id": "ansiedade.p2",
      "eco": "ansiedade",
      "view": 1,
      "name": "Relógios divergentes",
      "description": "Nem todos marcam a mesma previsão.",
      "voice": "Não estão atrasados. Estão considerando cenários distintos.",
      "after": "O tique-taque continua sem correções."
    },
    {
      "id": "ansiedade.p3",
      "eco": "ansiedade",
      "view": 1,
      "name": "Lista de possibilidades",
      "description": "Cada solução abre outra exceção prevista.",
      "voice": "Recalculando.",
      "after": "A última previsão permanece inacabada."
    },
    {
      "id": "ansiedade.p4",
      "eco": "ansiedade",
      "view": 2,
      "name": "Rádio dos corredores",
      "description": "Uma voz tem atraso em relação ao evento visível.",
      "voice": "A fonte é válida. O tempo da informação, não.",
      "after": "Tutorial fica registrado, não some por morte."
    },
    {
      "id": "ansiedade.p5",
      "eco": "ansiedade",
      "view": 2,
      "name": "Presente de Ninfa",
      "description": "Ela deixou um objeto simples para lembrá-lo de fazer pausas.",
      "voice": "A função é redundante. Ainda assim, mantive.",
      "after": "O objeto permanece sem novo comentário."
    },
    {
      "id": "ansiedade.p6",
      "eco": "ansiedade",
      "view": 3,
      "name": "Cálculo impossível",
      "description": "Uma equação textual tenta prever uma decisão que depende de intenção alheia.",
      "voice": "Variável não fornecida.",
      "after": "A variável nunca recebe resposta."
    },
    {
      "id": "amor.p1",
      "eco": "amor",
      "view": 0,
      "name": "Lugar das visitas",
      "description": "Há objetos deixados por diferentes irmãos, sem altar ao protagonista.",
      "voice": "Eles passam quando precisam. E às vezes só passam.",
      "after": "Depois da arena, as visitas não têm quem receber."
    },
    {
      "id": "amor.p2",
      "eco": "amor",
      "view": 1,
      "name": "Caixa de cartas",
      "description": "Cartas têm momentos comuns e desentendimentos reparados.",
      "voice": "Gostar não faz ninguém concordar o tempo todo.",
      "after": "As cartas não se transformam em fala de fantasma."
    },
    {
      "id": "amor.p3",
      "eco": "amor",
      "view": 1,
      "name": "Luz guardada",
      "description": "Uma luz pequena é mantida nas mãos antes da oferta.",
      "voice": "Você pode levar um pouco.",
      "after": "Depois da morte, a luz pode restar; não ressuscita a dona."
    },
    {
      "id": "amor.p4",
      "eco": "amor",
      "view": 2,
      "name": "Flores de irmãos negativos",
      "description": "Algumas vieram de lugares assustadores do Jardim.",
      "voice": "Ele foi cuidadoso ao trazer. Você não imagina, olhando de longe.",
      "after": "A flor continua sem receber cuidado dela."
    },
    {
      "id": "amor.p5",
      "eco": "amor",
      "view": 2,
      "name": "Lembrança de Ódio",
      "description": "Uma lembrança simples demonstra convivência anterior ao confronto.",
      "voice": "Ele não fica daquele jeito o tempo todo.",
      "after": "Não aparece texto celebrando a vitória sobre ele."
    },
    {
      "id": "amor.p6",
      "eco": "amor",
      "view": 3,
      "name": "Canto sem visitas",
      "description": "Ela admite limite: não consegue proteger todos de tudo.",
      "voice": "Eu tento chegar. Não consigo prometer antes de saber.",
      "after": "A ausência contrasta com os resgates que antes vinham."
    },
    {
      "id": "tristeza.p1",
      "eco": "tristeza",
      "view": 0,
      "name": "Lugar junto à janela",
      "description": "Há uma segunda posição de visita, oferecida com discrição.",
      "voice": "Pode ficar. Só não espere muita conversa.",
      "after": "Janela continua com chuva sem convite."
    },
    {
      "id": "tristeza.p2",
      "eco": "tristeza",
      "view": 1,
      "name": "Diário de lembranças",
      "description": "O diário distingue ouvir alguém de resolver sua vida.",
      "voice": "Nem toda página é um pedido de ajuda.",
      "after": "Trecho usado na traição pode ser relido."
    },
    {
      "id": "tristeza.p3",
      "eco": "tristeza",
      "view": 1,
      "name": "Fotografia dos irmãos",
      "description": "Retrata uma convivência comum em vez de sofrimento constante.",
      "voice": "Hermes não ficou parado até terminar.",
      "after": "As ausências passam a ser reconhecíveis."
    },
    {
      "id": "tristeza.p4",
      "eco": "tristeza",
      "view": 2,
      "name": "Caixa de música",
      "description": "Um motivo curto se repete e muda quando ela comenta.",
      "voice": "Felicidade erra sempre nesse pedaço.",
      "after": "Depois, só a caixa toca."
    },
    {
      "id": "tristeza.p5",
      "eco": "tristeza",
      "view": 2,
      "name": "Anotações sobre os positivos",
      "description": "Notas guardam fragilidades que ela tenta compreender.",
      "voice": "Pax nem sempre sabe dizer que alguma coisa incomoda.",
      "after": "No confronto, ela reconhece a própria frase."
    },
    {
      "id": "tristeza.p6",
      "eco": "tristeza",
      "view": 3,
      "name": "Recipiente e carta protegida da água",
      "description": "A carta pertence a uma memória, não ao mapa universal da campanha.",
      "voice": "Eu guardei porque ainda importa.",
      "after": "Não declarar que esvaziar o recipiente matou Ninfa."
    },
    {
      "id": "culpa.p1",
      "eco": "culpa",
      "view": 0,
      "name": "Lugar de acolher visitantes",
      "description": "Os objetos são guardados com cuidado, para além da utilidade.",
      "voice": "Você quer conversar ou só ficar um pouco?",
      "after": "O lugar preserva gestos interrompidos."
    },
    {
      "id": "culpa.p2",
      "eco": "culpa",
      "view": 1,
      "name": "Carta de desculpas não enviada",
      "description": "Ela reescreveu um pedido sem saber o que cabia assumir.",
      "voice": "Eu não sei se pedir de novo ajuda ou só incomoda.",
      "after": "A carta não vira instrução para autoagressão."
    },
    {
      "id": "culpa.p3",
      "eco": "culpa",
      "view": 1,
      "name": "Presente aguardando entrega",
      "description": "Um objeto está pronto para alguém que ainda está vivo nessa fase.",
      "voice": "Quando ele vier, eu entrego.",
      "after": "A entrega fica interrompida, se não ocorreu."
    },
    {
      "id": "culpa.p4",
      "eco": "culpa",
      "view": 2,
      "name": "Objetos consertados",
      "description": "Alguns não foram quebrados por ela, mas foram reparados mesmo assim.",
      "voice": "Eu podia fazer alguma coisa. Então fiz.",
      "after": "Não chamar os reparos de fracasso merecido."
    },
    {
      "id": "culpa.p5",
      "eco": "culpa",
      "view": 2,
      "name": "Bilhete de Medo",
      "description": "Um bilhete curto revela preocupação entre irmãos sem justificar violência futura.",
      "voice": "Ele fala daquele jeito até quando se preocupa.",
      "after": "Pode ser relido após a ação intencional dele."
    },
    {
      "id": "culpa.p6",
      "eco": "culpa",
      "view": 3,
      "name": "Saída para corredor compartilhado",
      "description": "Ela pode aparecer fora do quarto em evento de história.",
      "voice": "Vou ver se alguém precisa de alguma coisa.",
      "after": "A porta não precisa ficar trancada para explicar seu destino."
    },
    {
      "id": "medo.p1",
      "eco": "medo",
      "view": 0,
      "name": "Entrada observada",
      "description": "Há sinais de alguém vendo o corredor antes de abrir.",
      "voice": "Não se aproxime tanto.",
      "after": "Depois do desfecho não criar novo perseguidor vivo por reaproveitar imagem."
    },
    {
      "id": "medo.p2",
      "eco": "medo",
      "view": 1,
      "name": "Janela coberta",
      "description": "É possível olhar sem precisar destruir a proteção.",
      "voice": "Você olha como se tivesse direito a tudo.",
      "after": "Fica sem resposta à inspeção."
    },
    {
      "id": "medo.p3",
      "eco": "medo",
      "view": 1,
      "name": "Marcas dos irmãos",
      "description": "Há objetos reconhecíveis de visitas anteriores.",
      "voice": "Eles vieram antes de você.",
      "after": "Ausências precisam corresponder aos nomes da partida."
    },
    {
      "id": "medo.p4",
      "eco": "medo",
      "view": 2,
      "name": "Ponto das esferas",
      "description": "As luzes mostram partes de corredores, não um painel de monitores.",
      "voice": "Olha de novo. Não é o mesmo lugar.",
      "after": "Não desligar esfera como causa mágica de morte."
    },
    {
      "id": "medo.p5",
      "eco": "medo",
      "view": 2,
      "name": "Sinal da faca",
      "description": "Ele identifica a faca de Determinação se ela está com o protagonista.",
      "voice": "Ela não emprestava isso.",
      "after": "A faca continua prova após a chase."
    },
    {
      "id": "medo.p6",
      "eco": "medo",
      "view": 3,
      "name": "Porta do observatório",
      "description": "A porta leva a uma etapa anunciada, com chance de preparar controles.",
      "voice": "Você não vai continuar passando por eles.",
      "after": "Uma vez encerrado o evento, não prender em loop de tutorial."
    },
    {
      "id": "odio.p1",
      "eco": "odio",
      "view": 0,
      "name": "Marca da passagem",
      "description": "A presença do guardião estabelece limite antes do combate.",
      "voice": "Você já entrou onde não devia.",
      "after": "Depois da arena, não reabrir confronto com ele vivo."
    },
    {
      "id": "odio.p2",
      "eco": "odio",
      "view": 1,
      "name": "Retrato danificado",
      "description": "O retrato pertence a irmãos, não a um vilão sem vínculo.",
      "voice": "Isso não é seu para examinar.",
      "after": "Objeto preserva a relação com Sugar."
    },
    {
      "id": "odio.p3",
      "eco": "odio",
      "view": 1,
      "name": "Corrente rompida",
      "description": "Um bloqueio anterior não segurou aquilo que ele queria impedir.",
      "voice": "Nem toda passagem aberta devia ter sido aberta.",
      "after": "Não é chave extra do portão final."
    },
    {
      "id": "odio.p4",
      "eco": "odio",
      "view": 2,
      "name": "Pedra marcada por feixe",
      "description": "Impacto antigo prepara reconhecimento do ataque bucal.",
      "voice": "Você não quer ficar na frente disso.",
      "after": "Marca pode permanecer no mundo da arena."
    },
    {
      "id": "odio.p5",
      "eco": "odio",
      "view": 2,
      "name": "Objeto de Sugar",
      "description": "Uma lembrança contradiz a impressão de ódio sem laços.",
      "voice": "Ela não precisa saber que ainda está aqui.",
      "after": "Não vira souvenir de recompensa por assassinato."
    },
    {
      "id": "odio.p6",
      "eco": "odio",
      "view": 3,
      "name": "Limiar da arena",
      "description": "A travessia final leva ao confronto após destinos dos oito.",
      "voice": "Não tem mais ninguém entre você e o que fez.",
      "after": "No pós-combate o espaço contém corpo, Sugar e espada caída."
    }
  ],
  "conversations": {
    "F1": {
      "eco": "felicidade",
      "title": "PRIMEIRA VISITA, antes de qualquer ação fatal",
      "script": [
        {
          "who": "Sunny",
          "text": "Você ficou parado na entrada um tempão. Tava esperando uma placa?",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Talvez.",
          "pose": "base"
        },
        {
          "who": "Sunny",
          "text": "Não tem uma boa. A minha caiu duas vezes.",
          "pose": "gostou"
        },
        {
          "choices": [
            {
              "label": "Você fez a placa?",
              "reply": "Fiz. O caminho mudou menos do que a minha letra.",
              "pose": "gostou"
            },
            {
              "label": "Você recebe todo mundo assim?",
              "reply": "Só quem ainda não me pediu silêncio.",
              "pose": "base"
            },
            {
              "label": "Só me mostra onde ir.",
              "reply": "Mostro. Você podia ter perguntado sem me atravessar.",
              "pose": "nao-gostou"
            }
          ]
        },
        {
          "who": "Você",
          "text": "Você guarda tudo isso?",
          "pose": "base"
        },
        {
          "who": "Sunny",
          "text": "São coisas que aconteceram. Se eu jogar fora, vira só um dia igual ao outro.",
          "pose": "base"
        }
      ]
    },
    "F2": {
      "eco": "felicidade",
      "title": "RETORNO, após ler bilhete do mural",
      "script": [
        {
          "who": "Sunny",
          "text": "Você voltou. Achei que ia achar outro lugar mais interessante.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Por que você pensou isso?",
          "pose": "base"
        },
        {
          "who": "Sunny",
          "text": "Não pensei. Só falei.",
          "pose": "abalado"
        },
        {
          "choices": [
            {
              "label": "Não precisa ter uma novidade toda vez",
              "reply": "Eu sei. Só esqueço quando alguém entra.",
              "pose": "acolhido"
            },
            {
              "label": "Você parece preocupado com isso",
              "reply": "Era uma frase que eu não queria ter escrito.",
              "pose": "base"
            },
            {
              "label": "Sem as brincadeiras, o que você tem para oferecer?",
              "reply": "Você podia só não ter gostado.",
              "pose": "quebrando"
            }
          ]
        },
        {
          "who": "Você",
          "text": "Ele mede a visita pelo que consegue entregar.",
          "pose": "pensamento"
        }
      ]
    },
    "P1": {
      "eco": "calma",
      "title": "REFÚGIO",
      "script": [
        {
          "who": "Pax",
          "text": "Você pode ficar ali. A outra xícara não tem dono.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Você nem sabe quem eu sou.",
          "pose": "base"
        },
        {
          "who": "Pax",
          "text": "Saber o nome não é requisito para oferecer um lugar.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Eu queria um pouco de silêncio",
              "reply": "Então não vou encher com perguntas.",
              "pose": "gostou"
            },
            {
              "label": "Isso sempre funciona?",
              "reply": "Não. E eu prefiro que você saiba.",
              "pose": "base"
            },
            {
              "label": "Você não faz nada aqui?",
              "reply": "Você está vendo um intervalo, não todos os meus dias.",
              "pose": "nao-gostou"
            }
          ]
        },
        {
          "who": "Pax",
          "text": "Medo às vezes vem sem dizer nada. A gente aprende a não preencher tudo.",
          "pose": "base"
        }
      ]
    },
    "P2": {
      "eco": "calma",
      "title": "LIMITE E CONFIANÇA",
      "script": [
        {
          "who": "Você",
          "text": "Você sempre sabe o que dizer?",
          "pose": "base"
        },
        {
          "who": "Pax",
          "text": "Você lembra mais das vezes em que eu disse alguma coisa.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "E quando não consegue?",
          "pose": "base"
        },
        {
          "who": "Pax",
          "text": "Eu continuo aqui.",
          "pose": "abalado"
        },
        {
          "choices": [
            {
              "label": "Isso pode bastar",
              "reply": "Pode. Não sempre. Mas pode.",
              "pose": "acolhido"
            },
            {
              "label": "Quem cuida de você?",
              "reply": "Eu demoro um pouco para perceber quando preciso.",
              "pose": "base"
            },
            {
              "label": "Então sua calma só funciona quando nada acontece",
              "reply": "Não foi isso que eu disse.",
              "pose": "quebrando"
            }
          ]
        },
        {
          "who": "Você",
          "text": "Ele chama de presença o que não consegue resolver.",
          "pose": "pensamento"
        }
      ]
    },
    "H1": {
      "eco": "ansiedade",
      "title": "ENSINAR CORRER",
      "script": [
        {
          "who": "Hermes",
          "text": "Você percorreu o mesmo trecho três vezes.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Eu estava olhando.",
          "pose": "base"
        },
        {
          "who": "Hermes",
          "text": "Olhando e repetindo são ações compatíveis. Estou registrando as duas.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Pode me mostrar um caminho mais rápido?",
              "reply": "Posso reduzir seu tempo. Não sua tendência a parar.",
              "pose": "gostou"
            },
            {
              "label": "Você está me contando?",
              "reply": "Somente deslocamentos. Conversas são menos previsíveis.",
              "pose": "base"
            },
            {
              "label": "Para de fazer isso",
              "reply": "Solicitação compreendida. O cálculo continua existindo.",
              "pose": "nao-gostou"
            }
          ]
        },
        {
          "who": "Hermes",
          "text": "Quando uma perseguição começar, você não terá esse intervalo para descobrir o comando.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Perseguição?",
          "pose": "base"
        },
        {
          "who": "Hermes",
          "text": "Preparação para um evento não é desejo de que ele aconteça.",
          "pose": "base"
        }
      ]
    },
    "H2": {
      "eco": "ansiedade",
      "title": "O IMPREVISÍVEL",
      "script": [
        {
          "who": "Você",
          "text": "Você previu aquilo?",
          "pose": "base"
        },
        {
          "who": "Hermes",
          "text": "Os dados não incluíam uma intervenção deliberada.",
          "pose": "abalado"
        },
        {
          "who": "Você",
          "text": "Então não consegue prever gente?",
          "pose": "base"
        },
        {
          "who": "Hermes",
          "text": "Consigo prever comportamentos. A intenção está sendo omitida.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Talvez não seja tudo sua responsabilidade",
              "reply": "Responsabilidade e capacidade estão divergindo.",
              "pose": "acolhido"
            },
            {
              "label": "O que você precisa saber?",
              "reply": "O que você pretende fazer depois desta conversa.",
              "pose": "base"
            },
            {
              "label": "Se não pode impedir, por que continua avisando?",
              "reply": "Porque a alternativa não elimina o perigo.",
              "pose": "quebrando"
            }
          ]
        }
      ]
    },
    "O1": {
      "eco": "orgulho",
      "title": "PRESENTES",
      "script": [
        {
          "who": "Aurea",
          "text": "Você está usando as mãos como se não houvesse nada neste lugar capaz de alcançá-las.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Eu devia ter medo?",
          "pose": "base"
        },
        {
          "who": "Aurea",
          "text": "Devia reconhecer perigo. É diferente.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Aceito ajuda",
              "reply": "Então ouça como usar.",
              "pose": "gostou"
            },
            {
              "label": "Se isso me proteger, eu aceito",
              "reply": "É uma razão suficiente.",
              "pose": "base"
            },
            {
              "label": "Me dá logo. Você não vai precisar",
              "reply": "Você confundiu uma oferta com uma dívida.",
              "pose": "nao-gostou"
            }
          ]
        },
        {
          "who": "Aurea",
          "text": "Não coloque os outros na frente do perigo para chamar isso de coragem.",
          "pose": "entregar-espada/escudo"
        },
        {
          "who": "Você",
          "text": "Ela quer acreditar que ofereceu proteção.",
          "pose": "pensamento"
        }
      ]
    },
    "O2": {
      "eco": "orgulho",
      "title": "PRINCÍPIOS",
      "script": [
        {
          "who": "Aurea",
          "text": "Houve uma conversa depois da sua visita. Ninguém consegue repetir o que você prometeu.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Eu não prometi nada.",
          "pose": "base"
        },
        {
          "who": "Aurea",
          "text": "Foi isso que eu percebi.",
          "pose": "abalado"
        },
        {
          "choices": [
            {
              "label": "Você oferece proteção sem conhecer alguém?",
              "reply": "Deixar alguém desarmado para ter certeza de que é digno não é meu princípio.",
              "pose": "gostou"
            },
            {
              "label": "Talvez você tenha escolhido mal",
              "reply": "Talvez. Isso não torna a consequência menor.",
              "pose": "quebrando"
            },
            {
              "label": "Você só quer parecer correta",
              "reply": "Se era isso que procurava ouvir, não veio conversar.",
              "pose": "nao-gostou"
            }
          ]
        }
      ]
    },
    "D1": {
      "eco": "determinacao",
      "title": "COTIDIANO ANTES DA FACA",
      "script": [
        {
          "who": "Friska",
          "text": "Não pisa aí. Ainda não secou.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Deu errado?",
          "pose": "base"
        },
        {
          "who": "Friska",
          "text": "Ainda não deu certo. É diferente.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Quer ajuda?",
              "reply": "Pode segurar a peça. Não termina por mim.",
              "pose": "gostou"
            },
            {
              "label": "Você já tentou muito?",
              "reply": "Tentei. Você perguntou como se isso fosse uma vergonha.",
              "pose": "base"
            },
            {
              "label": "Não parece que vai conseguir",
              "reply": "Você pode olhar de outro lugar então.",
              "pose": "nao-gostou"
            }
          ]
        },
        {
          "who": "Friska",
          "text": "Tudo bem. A gente tenta de novo.",
          "pose": "base"
        }
      ]
    },
    "C1": {
      "eco": "culpa",
      "title": "VISITA SEM JULGAMENTO",
      "script": [
        {
          "who": "Lúmen",
          "text": "Eu guardei isso para ele. Você acha que ficou estranho?",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Por que ficaria?",
          "pose": "base"
        },
        {
          "who": "Lúmen",
          "text": "Não sei. Ele disse que não precisava de nada.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Pode ser só um presente",
              "reply": "Eu queria conseguir deixar assim.",
              "pose": "gostou"
            },
            {
              "label": "Pergunta para ele",
              "reply": "Eu perguntei. Depois fiquei pensando no jeito da resposta.",
              "pose": "base"
            },
            {
              "label": "Você está fazendo isso para se sentir melhor?",
              "reply": "Eu também posso gostar de alguém sem estar tentando me livrar de alguma coisa.",
              "pose": "abalado"
            }
          ]
        }
      ]
    },
    "C2": {
      "eco": "culpa",
      "title": "DEPOIS DAS PRIMEIRAS PERDAS",
      "script": [
        {
          "who": "Lúmen",
          "text": "Eu achei que estava sendo uma visita comum.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Você não podia saber.",
          "pose": "base"
        },
        {
          "who": "Lúmen",
          "text": "É o que todo mundo diz. Não é a mesma coisa que conseguir parar de pensar.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Você devia ter feito alguma coisa",
              "reply": "Eu ainda nem sabia o que tinha acontecido.",
              "pose": "quebrando"
            },
            {
              "label": "Medo sabe?",
              "reply": "Ele está olhando para todos como se já tivesse perdido.",
              "pose": "nao-gostou"
            }
          ]
        }
      ]
    },
    "A1": {
      "eco": "amor",
      "title": "PRIMEIRA CONFIANÇA",
      "script": [
        {
          "who": "Sugar",
          "text": "Você não precisa estar machucado para aceitar ajuda.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Eu não pedi.",
          "pose": "base"
        },
        {
          "who": "Sugar",
          "text": "Eu ofereci. Você ainda pode dizer não.",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "O que é essa luz?",
              "reply": "Uma coisa que você consegue levar sem arrancar de alguém.",
              "pose": "segurar-luz"
            },
            {
              "label": "Você faz isso por todo mundo?",
              "reply": "Faço quando consigo. Nem sempre consigo.",
              "pose": "base"
            },
            {
              "label": "Você espera alguma coisa em troca?",
              "reply": "Eu esperava que não fosse a primeira pergunta.",
              "pose": "abalado"
            }
          ]
        },
        {
          "who": "Sugar",
          "text": "Tenta primeiro onde você consegue enxergar o que vai atingir.",
          "pose": "entregar-luz"
        }
      ]
    },
    "A2": {
      "eco": "amor",
      "title": "UMA INTERAÇÃO COMUM",
      "script": [
        {
          "who": "Sugar",
          "text": "Você viu as flores dele?",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Eu vi uma porta fechada.",
          "pose": "base"
        },
        {
          "who": "Sugar",
          "text": "Então ainda não viu tudo.",
          "pose": "gostou"
        },
        {
          "who": "Você",
          "text": "Ela sempre encontra uma razão para continuar perto.",
          "pose": "pensamento"
        }
      ]
    },
    "A3": {
      "eco": "amor",
      "title": "CONFIANÇA ANTES DA RETA FINAL",
      "script": [
        {
          "who": "Sugar",
          "text": "Eu ainda estou tentando entender quando começou.",
          "pose": "abalado"
        },
        {
          "who": "Você",
          "text": "Você podia ter ido embora.",
          "pose": "base"
        },
        {
          "who": "Sugar",
          "text": "De quem?",
          "pose": "base"
        },
        {
          "choices": [
            {
              "label": "Você não consegue proteger todos",
              "reply": "Eu sei. Não achei que isso significasse não tentar.",
              "pose": "gostou"
            },
            {
              "label": "Eles estavam presos às próprias fraquezas",
              "reply": "Não fala deles como se só existisse isso.",
              "pose": "quebrando"
            }
          ]
        }
      ]
    },
    "A4": {
      "eco": "amor",
      "title": "ANTES DO ÓDIO",
      "script": [
        {
          "who": "Sugar",
          "text": "Ele não vai ouvir se você entrar daquele jeito.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Ele não deixou outra passagem.",
          "pose": "base"
        },
        {
          "who": "Sugar",
          "text": "Você está chamando de passagem uma coisa que começa nele e termina em quem?",
          "pose": "base"
        }
      ]
    },
    "N1": {
      "eco": "tristeza",
      "title": "DISTÂNCIA",
      "script": [
        {
          "who": "Ninfa",
          "text": "Você precisa de alguma coisa?",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Conhecer o lugar.",
          "pose": "base"
        },
        {
          "who": "Ninfa",
          "text": "Não costumo receber visitas. Mas pode ficar, se quiser.",
          "pose": "base"
        }
      ]
    },
    "N2": {
      "eco": "tristeza",
      "title": "AJUDA AOS POSITIVOS",
      "script": [
        {
          "who": "Ninfa",
          "text": "Você voltou.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Isso parece surpresa.",
          "pose": "base"
        },
        {
          "who": "Ninfa",
          "text": "Eu tinha me acostumado com visitas que queriam uma coisa só.",
          "pose": "gostou"
        }
      ]
    },
    "N3": {
      "eco": "tristeza",
      "title": "CONVIVÊNCIA E PRIMEIRA SUSPEITA",
      "script": [
        {
          "who": "Ninfa",
          "text": "Eu deixei o lugar livre. Não sabia se você vinha.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Você espera as pessoas mesmo quando não gosta de visitas?",
          "pose": "base"
        },
        {
          "who": "Ninfa",
          "text": "Eu não disse que não gostava de você aqui.",
          "pose": "base"
        },
        {
          "who": "Ninfa",
          "text": "Eles estão diferentes depois que conversam com você.",
          "pose": "abalado"
        },
        {
          "choices": [
            {
              "label": "Você acha que eu fiz isso?",
              "reply": "Eu estou perguntando o que aconteceu.",
              "pose": "gostou"
            },
            {
              "label": "Você também me contou coisas",
              "reply": "Eu achei que entender fosse ajudar.",
              "pose": "quebrando"
            },
            {
              "label": "Ninguém controla o que os outros sentem",
              "reply": "Não. Mas você escolhe onde insiste.",
              "pose": "nao-gostou"
            }
          ]
        }
      ]
    },
    "N4": {
      "eco": "tristeza",
      "title": "RECONHECER A TRAIÇÃO",
      "script": [
        {
          "who": "Ninfa",
          "text": "Eu te disse isso.",
          "pose": "abalada"
        },
        {
          "who": "Você",
          "text": "Disse.",
          "pose": "base"
        },
        {
          "who": "Ninfa",
          "text": "Não para você fazer aquilo.",
          "pose": "quebrando"
        },
        {
          "choices": [
            {
              "label": "Você não podia saber",
              "reply": "Você podia.",
              "pose": "gostou"
            },
            {
              "label": "Eu precisava entender",
              "reply": "Você já sabia o que queria. Só precisava saber onde.",
              "pose": "base"
            },
            {
              "label": "Eles eram responsáveis por si",
              "reply": "E você foi até cada um com aquilo que eu tinha te contado.",
              "pose": "nao-gostou"
            }
          ]
        },
        {
          "who": "Ninfa",
          "text": "Eu achei que estava ajudando meus irmãos.",
          "pose": "quebrou"
        }
      ]
    },
    "M1": {
      "eco": "medo",
      "title": "PRIMEIRO CONTATO RELEVANTE, DEPOIS DAS PERDAS",
      "script": [
        {
          "who": "Hunger",
          "text": "Para aí.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Eu só vim conversar.",
          "pose": "base"
        },
        {
          "who": "Hunger",
          "text": "É o que você diz antes.",
          "pose": "nao-gostou"
        }
      ]
    },
    "M2": {
      "eco": "medo",
      "title": "A ACUSAÇÃO",
      "script": [
        {
          "who": "Hunger",
          "text": "Você esteve com Pax. Esteve com Determinação.",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Todo mundo passa pelos mesmos lugares.",
          "pose": "base"
        },
        {
          "who": "Hunger",
          "text": "Nem todo mundo sai com a faca dela.",
          "pose": "abalado"
        },
        {
          "choices": [
            {
              "label": "Você não viu o que aconteceu",
              "reply": "Eu estou vendo o que ficou.",
              "pose": "gostou"
            },
            {
              "label": "Vai me impedir de falar com os outros?",
              "reply": "Vou tentar impedir que eles sejam os próximos.",
              "pose": "base"
            },
            {
              "label": "Você também está com medo",
              "reply": "Isso não faz de você menos perigoso.",
              "pose": "quebrando por um instante, depois tensão"
            }
          ]
        }
      ]
    },
    "ODG1": {
      "eco": "odio",
      "title": "ADVERTÊNCIA, NÃO BATALHA INSTANTÂNEA",
      "script": [
        {
          "who": "Beerus",
          "text": "Quantos mais precisam se machucar até você parar?",
          "pose": "base"
        },
        {
          "who": "Você",
          "text": "Você nem me perguntou o que aconteceu.",
          "pose": "base"
        },
        {
          "who": "Beerus",
          "text": "Eles perguntaram.",
          "pose": "nao-gostou"
        },
        {
          "choices": [
            {
              "label": "Você acha que sabe tudo?",
              "reply": "Sei que você faz a mesma pergunta até ouvir o que pode usar.",
              "pose": "gostou"
            },
            {
              "label": "Sugar confia em mim",
              "reply": "Não usa o nome dela como escudo.",
              "pose": "abalado, tensão"
            }
          ]
        }
      ]
    }
  },
  "ninfa": [
    {
      "text": "Você sabia que eu estava falando dos meus irmãos?",
      "answers": [
        [
          "Eu precisava entender",
          "Não. Você precisava alcançar."
        ],
        [
          "Eles também escolheram",
          "Você foi até onde eles não conseguiam se defender."
        ]
      ],
      "silence": "Foi mais fácil ouvir quando você queria alguma coisa.",
      "moves": [
        "left",
        "guard",
        "down",
        "right"
      ]
    },
    {
      "text": "Eu te disse para não deixar Pax achando que tinha falhado. Você lembra como respondeu?",
      "answers": [
        [
          "Eu respondi o que ele queria ouvir",
          "Eu achei que você tivesse entendido por quê."
        ],
        [
          "Não foi só uma conversa",
          "Então para de se esconder atrás dela."
        ]
      ],
      "silence": "Eu lembro.",
      "moves": [
        "left",
        "right",
        "guard",
        "down"
      ]
    },
    {
      "text": "Eu ajudei você a chegar até eles.",
      "answers": [
        [
          "Você queria ajudar",
          "Você também sabia o que eu queria."
        ],
        [
          "Você devia ter desconfiado",
          "Eu estava tentando conhecer você."
        ],
        [
          "Ainda pode parar",
          "Você só quer que eu deixe de resistir."
        ]
      ],
      "silence": "Você também sabia o que eu queria.",
      "moves": [
        "guard",
        "down",
        "left",
        "right",
        "guard"
      ]
    },
    {
      "text": "Eu não consigo deixar de procurar o momento em que devia ter percebido.",
      "answers": [
        [
          "Você não é a única pessoa que fez uma escolha",
          "Você está tentando deixar a sua parte comigo."
        ],
        [
          "Você continuou me contando",
          "Você está tentando deixar a sua parte comigo."
        ]
      ],
      "silence": "Você está tentando deixar a sua parte comigo.",
      "moves": [
        "right",
        "guard",
        "left",
        "down",
        "right"
      ]
    },
    {
      "text": "Sugar ainda acha que consegue alcançar você.",
      "answers": [
        [
          "Ela sempre aparece",
          "Você fala como se isso fosse uma coisa que lhe pertence."
        ],
        [
          "Ódio não vai me deixar passar",
          "Pela primeira vez, você está ouvindo um limite."
        ]
      ],
      "silence": "Você vai até eles depois daqui.",
      "moves": [
        "down",
        "left",
        "right",
        "guard",
        "down",
        "left"
      ]
    },
    {
      "text": "Você vai lembrar do que eu disse ou só do que conseguiu usar?",
      "answers": [
        [
          "Eu vou lembrar",
          "Então não chama o que aconteceu de não sentir nada."
        ],
        [
          "Eu precisava terminar",
          "Você ainda não sabe o que queria acabar."
        ]
      ],
      "silence": "…",
      "moves": [
        "guard",
        "right",
        "guard",
        "left",
        "down",
        "right"
      ]
    }
  ],
  "maze": [
    [
      "S",
      "left"
    ],
    [
      "I",
      "right"
    ],
    [
      "A",
      "center"
    ],
    [
      "I",
      "left"
    ],
    [
      "S",
      "right"
    ],
    [
      "A",
      "center"
    ],
    [
      "S",
      "left"
    ],
    [
      "I",
      "right"
    ],
    [
      "I",
      "left"
    ],
    [
      "A",
      "center"
    ],
    [
      "S",
      "right"
    ],
    [
      "S",
      "left"
    ],
    [
      "A",
      "center"
    ],
    [
      "I",
      "right"
    ],
    [
      "S",
      "right"
    ],
    [
      "A",
      "center"
    ],
    [
      "I",
      "left"
    ],
    [
      "S",
      "left"
    ],
    [
      "I",
      "right"
    ],
    [
      "A",
      "center"
    ]
  ],
  "ending": [
    [
      "Anata",
      "Você chegou."
    ],
    [
      "Você",
      "Acabou?"
    ],
    [
      "Anata",
      "O que você veio acabar?"
    ],
    [
      "Anata",
      "Você ainda está esperando uma coisa desaparecer."
    ],
    [
      "Você",
      "Não tem mais ninguém."
    ],
    [
      "Anata",
      "Eu não perguntei quem ficou."
    ],
    [
      "Anata",
      "Você queria não depender de ninguém. Quando o caminho se fechou, Sugar ainda foi até você."
    ],
    [
      "Anata",
      "Você queria nunca mais parecer insuficiente. Precisou que Felicidade justificasse por que merecia uma visita."
    ],
    [
      "Anata",
      "Você queria controlar o que vinha depois. Hermes pediu uma intenção verdadeira. Você ofereceu respostas."
    ],
    [
      "Anata",
      "Você queria que ninguém encontrasse uma fraqueza sua. E procurou uma em todos eles."
    ],
    [
      "Você",
      "Eu ainda sinto isso."
    ],
    [
      "Anata",
      "É o que você não conseguiu matar."
    ],
    [
      "Anata",
      "Com Determinação, a escolha chegou depois. Você olhou para uma interface que prometia um turno. O protagonista já tinha agido."
    ],
    [
      "Anata",
      "Até agora eu falei de quem você conduziu. Ele queria que os sentimentos desaparecessem. Você precisava querer o mesmo para continuar?"
    ],
    [
      "Anata",
      "Se todos os sentimentos eram o problema, por que as inseguranças ainda estão aqui?"
    ],
    [
      "Anata",
      "Quem o alertava, quem o acolhia, quem tentava impedi-lo… ele chamou todos de obstáculo. Agora não há ninguém para usar como resposta."
    ],
    [
      "Anata",
      "Reflita."
    ]
  ]
};
