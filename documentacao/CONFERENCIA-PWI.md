# SENTIA — conferência das apostilas de PW I

Revisão: 1 de novembro de 2026.

Esta matriz compara o código do **site educativo SENTIA** com o material fornecido: `Glossário Definitivo de JavaScript.pdf` e as Partes 1 a 6, de Modo Escuro a Simulador de IA. Foram lidos os sete documentos completos. Os textos extraídos para consulta ficam em `.apostilas-professor/APOSTILAS EXPLICATIVAS/`.

As referências abaixo apontam para os arquivos funcionais da raiz desta revisão; `arquivo:linha` indica onde começa a evidência, e a função ajuda a encontrá-la se a numeração mudar. Os exemplos NovaMind das apostilas foram adaptados ao conteúdo, à aparência e aos nomes do SENTIA.

**O jogo Jardim dos Ecos não é usado como evidência de conceito escolar.** `jardim.html` e os scripts do jogo ficam fora desta matriz. O convite e o caderno de pistas que aparecem em `index.html` pertencem ao site; isso não transforma o jogo em uma atividade de avaliação.

## As seis partes

| Material | Aplicação no SENTIA | Evidência HTML e CSS | Evidência JavaScript | Situação técnica |
| --- | --- | --- | --- | --- |
| Parte 1 — Modo Escuro | Botão de tema, cores de claro/escuro e preferência persistente. | `index.html:24` identifica o controle; `css/site.css:1` define variáveis e `body.dark`. | `js/site.js:8` — `storage` usa `localStorage` e JSON; `js/site.js:494` — `theme()` e o clique alternam a classe e o nome acessível. | Atendido. Usa `classList.add/remove`, `contains` e preferência salva. |
| Parte 2 — Modal e CTA | Cartões do Atlas abrem detalhes; a sugestão validada abre uma confirmação com botão para concluir. O modal fecha pelo botão, Esc ou clique externo. | `index.html:85` contém o formulário; `index.html:93` contém `dialog`; `css/site.css:175` estiliza CTAs e hover; `css/site.css:592` estiliza modal, fundo e entrada animada. | `js/site.js:113` — `openModal()`; `js/site.js:134` — restauração de foco; `js/site.js:140` — `event.target` diferencia clique externo; `js/site.js:254` — `preventDefault`, validação, feedback, modal e `reset()`. | Atendido com modal nativo. O atributo `open` substitui a classe `.active` do exemplo; não há envio fictício de e-mail. |
| Parte 3 — Alerta Dinâmico | Avisos são montados em memória, inseridos no site e removidos por botão ou temporizador. | `index.html:91` reserva a região de avisos; `css/site.css:632` define o alerta; `css/site.css:660` define `@keyframes` de entrada. | `js/site.js:99` — `alertBox()` usa `createElement`, `appendChild`, `prepend`, `remove`, evento e `setTimeout`. | Atendido. A pilha limita a três avisos com `while` e `pop()`. |
| Parte 4 — Filtro Interativo | A busca do Atlas filtra a cada alteração do campo, informa quantidade ou ausência de resultados e permite limpar filtros. | `index.html:39` contém busca, status e grade; `css/site.css:343` inicia os estilos do Atlas; `css/site.css:60` define foco visível. | `js/site.js:147` — `renderAtlas()` normaliza texto, usa `toLowerCase`, `includes`, `filter/map` e atualiza a grade; `js/site.js:189` liga o evento `input`. `querySelectorAll/forEach` também são usados em `js/site.js:524`. | Atendido. A lista é reconstruída pelos dados filtrados, em vez de alterar `style.display` de cada cartão. |
| Parte 5 — Gerenciador de Tarefas | Meu registro cria, consulta, edita, conclui, exclui e exporta ações. O modo pessoal usa array de objetos e persistência no navegador. | `index.html:46` contém formulário, lista e seletor de armazenamento; `css/site.css:483` define lista e estado `done`; `css/site.css:883` define o seletor. | `js/registros.js:20` — `request()` aplica operações ao plano pessoal; `js/registros.js:73` — `render()` reconstrói a lista; `js/registros.js:91` — `loadRows()`; `js/registros.js:138` — inclusão. | Atendido no modo pessoal com `push/splice`, JSON e `localStorage`. MySQL é uma opção separada de Meu registro. |
| Parte 6 — Simulador de IA | O botão de reflexão simula uma espera e sorteia uma frase previamente escrita. Durante a espera, o botão fica desabilitado. | `index.html:62` contém botão e resultado inicialmente `hidden`; `css/site.css:56` define `:disabled`; `css/site.css:513` aplica gradiente e transparência discretos. | `js/site.js:236` — array de frases e evento `async`; `js/site.js:245` — `Promise`, `setTimeout`, `Math.random/Math.floor`; `js/site.js:244` — `try/catch/finally` e restauração do botão. | Atendido como simulação local, sem API de IA. O texto visível explica essa condição. |

Os estados ocultos usam `hidden` e a regra `[hidden]` de `css/site.css:64`. As animações de modal e alerta são desativadas por movimento reduzido, tanto pela preferência manual (`css/site.css:690`) quanto pela preferência do sistema (`css/site.css:838`). As cores e os textos dos exemplos não foram copiados como requisito de identidade visual.

## Todos os itens do glossário

| Grupo | Conceito do material | Arquivo e aplicação concreta | Situação |
| --- | --- | --- | --- |
| Declaração de dados | `const` | `js/site.js:6` — referência ao seletor; `js/site.js:7` — array de avisos cuja referência não é reatribuída. | Aplicado. |
| Declaração de dados | `let` | `js/registros.js:7` — estado da lista, conexão e operação em andamento. | Aplicado. |
| Declaração de dados | `var`, escopo e hoisting | `js/site.js:4` e `js/site.js:5` — comentário compara `let/const` com a forma antiga. | Explicado, sem uso executável. O próprio glossário recomenda evitar `var` em código moderno. |
| Fluxo | `if / else if / else` | `js/site.js:52` — recuperação das etapas do caderno; `js/site.js:59` — validação do estado recuperado; `js/site.js:497` — alternativa de tema claro/escuro. | Aplicado no site. |
| Fluxo | `switch`, `case`, `break` | `js/site.js:521` — `route()` escolhe o título da seção; `js/registros.js:25` — operações locais. | Aplicado. |
| Fluxo | `for` com inicialização, condição e incremento | `js/site.js:80` — `renderDiscoveries()`, laço na linha 83, cria os indicadores do caderno existente no site. | Aplicado em `index.html`; não depende do motor do jogo. |
| Fluxo | `while` | `js/site.js:108` — remove avisos antigos enquanto há mais de três. | Aplicado. |
| Funções | Declaração tradicional `function` e `return` | `js/site.js:99` — `alertBox()`; `js/registros.js:20` — `request()` devolve o resultado da operação. | Aplicado. |
| Funções | Arrow function `=>` | `js/site.js:6` — seletor; `js/site.js:104` — callback de clique; `js/site.js:245` — callback da Promise. | Aplicado. |
| Arrays | `push()` | `js/registros.js:26` — adiciona o objeto da nova ação ao plano pessoal. | Aplicado. |
| Arrays | `pop()` | `js/site.js:108` — retira o aviso mais antigo da pilha ordenada por recência. | Aplicado. |
| Arrays | `map()` | `js/registros.js:74` — transforma os objetos das ações em elementos da lista. | Aplicado. |
| Arrays | `filter()` | `js/site.js:149` — seleciona os sentimentos compatíveis com a busca e a coleção. | Aplicado. |
| Arrays | `reduce()` | `js/registros.js:85` — calcula a quantidade de ações concluídas. | Aplicado. |
| DOM | `document.getElementById()` | `js/site.js:107` — encontra a região de avisos; `js/site.js:523` — encontra a seção solicitada. | Aplicado. |
| DOM | `document.querySelector()` | `js/site.js:6` e `js/registros.js:6` — função auxiliar `$`. | Aplicado. |
| DOM | `addEventListener()` | `js/site.js:104` — fechar aviso; `js/site.js:140` — clique no modal; `js/registros.js:133` — troca do armazenamento. | Aplicado. |
| DOM | `textContent` | `js/site.js:101` — texto do aviso; `js/registros.js:79` — texto digitado da ação, tratado como texto. | Aplicado. |
| DOM | `innerHTML` | `js/site.js:154` e `js/site.js:158` — estrutura de cartões e detalhes a partir do conteúdo fixo do Atlas. | Aplicado. |
| Assincronicidade | `setTimeout()` | `js/site.js:109` — dispensa aviso depois de um intervalo; `js/site.js:245` — espera da reflexão. | Aplicado. |
| Assincronicidade | `Promise` | `js/site.js:245` — valor da reflexão resolvido após a espera. | Aplicado. |
| Assincronicidade | `fetch()` | `js/registros.js:38` — `sqlRequest()`, chamada na linha 41, consulta a API apenas no modo MySQL. | Aplicado em Meu registro. |
| Assincronicidade | `async / await` | `js/site.js:238` — reflexão; `js/registros.js:97` — `mutate()` aguarda salvar e carregar os dados. | Aplicado. |

`const` e `let` têm escopo de bloco. `const` impede reatribuir a referência, mas permite alterar o conteúdo de um array, como `activeAlerts`. A forma antiga `var` tem escopo de função e eleva sua declaração; foi mantida como comparação, seguindo a recomendação do material de evitá-la. A declaração tradicional também permite chamar uma função antes de sua posição no arquivo: `orderRules()` é chamada em `js/site.js:60` e declarada em `js/site.js:314`. Arrow functions não criam um `this` próprio; os callbacks citados não precisam manipular esse contexto.

## Conceitos adicionais explicitamente apresentados nas seis partes

| Conceito | Evidência e função |
| --- | --- |
| `classList.toggle`, `add`, `remove`, `contains` | `js/site.js:88` — indicador encontrado; `js/site.js:494` — `theme()`; `js/site.js:501` — leitura do estado atual. |
| `localStorage.getItem/setItem` | `js/site.js:8` — `storage`; `js/registros.js:15` e `js/registros.js:32` — plano pessoal. |
| `event.preventDefault()` | `js/site.js:255` — conferência da sugestão; `js/registros.js:139` — inclusão sem recarregar a página. |
| `event.target` | `js/site.js:140` — identifica o clique no fundo do modal e verifica sua posição. |
| `form.reset()` | `js/site.js:279` — conclusão do modal da sugestão; `js/registros.js:141` — limpa o formulário após inclusão bem-sucedida. |
| `createElement`, `appendChild`, `prepend`, `remove` | `js/site.js:99` — `alertBox()` constrói, insere e remove o aviso. |
| `querySelectorAll`, NodeList e `forEach` | `js/site.js:524` — percorre seções; `js/site.js:525` — percorre links da navegação; `js/registros.js:67` — percorre controles da lista. |
| Evento `input`, `toLowerCase`, `includes` e `trim` | `js/site.js:147` — filtro do Atlas e evento na linha 189; `js/site.js:259` — remoção de espaços na validação; `js/registros.js:139` — normalização da ação digitada. |
| Operador ternário | `js/site.js:184` — escolhe a mensagem do resultado da busca; `js/registros.js:85` — escolhe o resumo da lista. |
| Array de objetos e renderização baseada em estado | `js/registros.js:7` — estado; `js/registros.js:73` — `render()`; `js/registros.js:97` — salvar, carregar e redesenhar. |
| `JSON.parse()` e `JSON.stringify()` | `js/registros.js:15` e `js/registros.js:32` — leitura e escrita do plano pessoal. |
| `splice()` | `js/registros.js:28` — remove ações; `js/registros.js:94` — substitui o conteúdo do array antes de renderizar. |
| `try / catch / finally` | `js/site.js:244` — reflexão; `js/registros.js:40` — requisição; `js/registros.js:100` — atualização da lista. |
| `Math.random()` e `Math.floor()` | `js/site.js:245` — índice aleatório dentro do array de reflexões. |
| Propriedade `disabled` e pseudo-classe `:disabled` | `js/site.js:240` e `js/site.js:250` — bloqueio temporário do botão; `css/site.css:56` — estado visual correspondente. |
| Variáveis CSS, classes de estado e seletores de interação | `css/site.css:1` — paleta/tema; `css/site.css:139` — estado ativo; `css/site.css:189` — hover do CTA; `css/site.css:60` — foco visível. |
| Transição, transparência, gradiente e animação de entrada | `css/site.css:187` — transição do CTA; `css/site.css:514` — gradiente com `rgba`; `css/site.css:605` — fundo do modal; `css/site.css:660` — `@keyframes`. |
| Estado visual de tarefa concluída | `js/registros.js:75` — classe `done`; `css/site.css:500` — texto riscado. |

Essa relação deriva das apostilas recebidas. Elementos como tabela HTML, vídeo, áudio e iframe não foram acrescentados como exigências, pois não fazem parte dos conceitos apresentados nesses sete documentos.

## Onde PHP e MySQL entram

O plano pessoal é o padrão em um navegador novo: `js/registros.js:8` e `js/registros.js:9`. A escolha fica em `#record-storage` (`index.html:51`) e é lembrada entre visitas. O caminho local salva `sentia-personal-tasks` no navegador e encerra a operação antes de qualquer `fetch` (`js/registros.js:20`).

Somente a escolha **Registro compartilhado · MySQL** chama `sqlRequest()` e os arquivos de `api/`. Esse modo exige o site aberto pelo Apache do XAMPP, com MySQL disponível. A verificação dessa condição fica em `connect()` (`js/registros.js:106`). Não há sincronização automática do plano pessoal: a cópia para o banco depende do botão de importação (`js/registros.js:154`).

| Operação do registro compartilhado | Evidência |
| --- | --- |
| Conectar ao MySQL por PDO | `api/_bootstrap.php:82` — `sentia_pdo()`. |
| Consultar ações | `api/registros.php:8` — `SELECT`. |
| Adicionar ação | `api/registros.php:19` — `INSERT` preparado. |
| Editar texto ou conclusão | `api/registros.php:48` — `UPDATE` preparado. |
| Excluir uma ação ou limpar o registro compartilhado | `api/registros.php:62` e `api/registros.php:66` — `DELETE`. |
| Estrutura do banco | `banco/schema.sql:2` e `banco/schema.sql:6` — banco e tabela `registros`. |

A busca, o tema, os modais, os avisos, a coleção e a reflexão não dependem do banco. O formulário de sugestão apenas valida os campos: não envia nem armazena a mensagem. O Jardim mantém seu salvamento independente no navegador e não usa essa API. A busca nos scripts do projeto encontrou `fetch` de aplicação somente em `js/registros.js`.

## Entrega, portfólio, comentários e repositório

| Item | Evidência e interpretação |
| --- | --- |
| Projeto funcional com linguagens separadas | `index.html:11` a `index.html:14` importam arquivos de `css/` e `js/`; a parte opcional de servidor está em `api/` e `banco/`. |
| HTML isolado, sem importar CSS ou JavaScript | `preparar-entrega.cjs:5` a `preparar-entrega.cjs:7` geram `entrega-escolar/HTML-puro/`, removendo as importações. Essa cópia é para leitura do HTML; o resultado visual funcional usa a raiz completa. |
| CSS, JavaScript, PHP e SQL isolados | `preparar-entrega.cjs:9` a `preparar-entrega.cjs:12` copiam as linguagens para `CSS-puro`, `JavaScript-puro`, `PHP-servidor` e `SQL`. O arquivo privado `config.local.php` é excluído. A matriz escolar continua restrita a `index.html`, `site.css` e aos módulos escolares. |
| Portfólio correspondente ao site | Os PNGs de `portfolio/` são capturas das páginas reais, em PC e celular. `SENTIA-portfolio.excalidraw` incorpora nove capturas, incluindo o plano pessoal e o modo compartilhado. |
| Comentários explicativos | `index.html` identifica os seis tópicos e seus controles; `css/site.css` comenta as seções e estados; `js/site.js` e `js/registros.js` comentam as funções e decisões principais. Os comentários explicam blocos, sem repetir mecanicamente cada propriedade. |
| URL real nos comentários HTML | `index.html:16` contém `https://github.com/oleleolalaks/SENTIA`. Repositório: [oleleolalaks/SENTIA](https://github.com/oleleolalaks/SENTIA). |

O portfólio preserva a aparência dos estados capturados. Imagens incorporadas não equivalem a componentes de interface editáveis, e uma captura não demonstra todos os estados interativos. O roteiro de captura também pode registrar o jogo como parte do projeto completo; essas imagens não são usadas para suprir conceitos escolares desta matriz.

## Verificação e limite desta conferência

Nesta revisão, o Chrome confirmou: início no modo pessoal em contexto novo, inclusão e conclusão de uma ação, recuperação após recarregar, ausência de chamadas PHP/API no modo pessoal e ausência de erros JavaScript nesse fluxo. Também foram verificados os IDs dos novos controles, ausência de IDs duplicados, ausência de rolagem horizontal em Meu registro nas larguras de 1440 e 390 pixels, gradiente reconhecido e animações do modal/alerta desativadas pelas preferências manual e do sistema de reduzir movimento. Esses controles foram executados sem alterar os arquivos-fonte durante a conferência.

A matriz demonstra a localização dos conceitos e o comportamento técnico observado. A execução completa do modo MySQL, os fluxos restantes e a atualização dos pacotes/capturas têm seus próprios testes no projeto; não são declarados aprovados apenas pela leitura desta matriz. As referências de linha precisam ser atualizadas se o código mudar.

**Autoria e avaliação são questões distintas da cobertura técnica.** Há assistência de IA declarada nos créditos (`index.html:87`). Esta conferência não pode atestar autoria exclusiva do aluno, compreensão individual, cumprimento de critérios que não foram fornecidos ou aprovação pelo professor. O aluno deve estudar, revisar, conseguir explicar o material e apresentar sua participação de forma verdadeira; a avaliação pertence ao professor.

Testes desta entrega: `TESTE-PWI.json` verifica os seis fluxos por arquivo, a persistência local e a ausência de chamadas ao banco no modo pessoal; `TESTE-FRONTEND-XAMPP.json` verifica CRUD MySQL e conexão com o Jardim em servidor PHP real.
