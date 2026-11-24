# SENTIA, conferência de PW I

Revisão de 23 de novembro de 2026. As evidências abaixo pertencem ao site normal. O Jardim não é usado para completar os requisitos escolares.

| Material | Aplicação e onde conferir |
| --- | --- |
| Parte 1, Modo Escuro | Botão `#tema`, função `theme()` e preferências em `js/site.js`; variáveis e `body.dark` em `css/site.css`. |
| Parte 2, Modal e CTA | `#modal`, `openModal()` e eventos de fechar/foco em `js/site.js`; cartões do Atlas, editor de ações e confirmação do contato gravado. |
| Parte 3, Alerta Dinâmico | `alertBox()` cria e remove avisos; usa DOM, evento, limite de três avisos e temporizador. |
| Parte 4, Filtro Interativo | `#busca` e `renderAtlas()` normalizam o texto, filtram sentimentos e atualizam resultados sem recarregar. |
| Parte 5, Gerenciador de Tarefas | `#task-form`, `js/registros.js`: incluir, editar, concluir, excluir, filtrar e exportar. Plano pessoal usa array, JSON e localStorage; MySQL usa a API de sessão. |
| Parte 6, Simulador de IA | `#reflection` e o resultado assíncrono em `js/site.js` preservam o exercício da apostila com frases locais. A área Conversas acrescenta IA real e é identificada separadamente. |

## IA real

`js/conversas.js` controla a interface e o histórico opcional. `js/ia-personas.js` define as dez personalidades. `js/ia-worker.js` carrega Qwen2.5-0.5B-Instruct por Transformers.js e gera tokens no navegador, sem enviar mensagens para a API do projeto.

O modelo e o motor são externos e só são baixados após o clique. CPU não precisa de cabeçalhos COOP/COEP; WebGPU tem fallback. O site exige HTTPS ou localhost, informa falhas e permite cancelar. O modelo pequeno teve inferência real confirmada, mas falhou em uma verificação de memória contextual. Não há declaração de qualidade perfeita.

## PHP, persistência e segurança

`js/api.js` centraliza fetch, tempo limite e token CSRF obtido de `api/sessao.php`. `api/_bootstrap.php` valida método, origem, JSON, campos e sessão. As consultas PDO usam marcadores, sem juntar entradas do usuário ao SQL.

`api/registros.php` faz CRUD de tarefas da sessão. `api/contatos.php` valida e grava nome/e-mail/mensagem fictícios, devolve apenas recibo e não aceita GET de contatos. `api/status.php` verifica as duas estruturas sem expor a configuração.

`banco/schema.sql` cria as tabelas e faz migração idempotente no banco selecionado, sem criar/remover bancos. `api/instalar.php` só pode preparar o banco localmente. A hospedagem usa importação pelo painel e configuração privada fora de htdocs, ou o arquivo local protegido.

## Conceitos do glossário

- Declaração e escopo, `const`/`let`, funções tradicionais e arrow functions. `var` é comparado nos comentários, sem necessidade de usá-lo no código moderno.
- Condições, operadores ternários, switch/case/break, for e while nos estados, filtros, atividades e avisos.
- Arrays de objetos e push, pop, map, filter, reduce e splice no conteúdo e registro de ações.
- querySelector, querySelectorAll, getElementById, addEventListener, textContent, innerHTML de conteúdo fixo e criação/remoção de elementos.
- preventDefault, target, reset, disabled e aria-busy nos formulários e estados assíncronos.
- JSON/localStorage no plano pessoal e preferências; Promise, async/await, fetch, setTimeout e try/catch/finally nas operações.
- Variáveis CSS, layout responsivo, grid/flex, hover/focus, pseudo-classes, gradiente, transparência, transições e movimento reduzido.

Os comentários explicam blocos e decisões concretas do projeto, incluindo PHP, persistência e assistente. Referências por função foram preferidas a linhas que mudam a cada revisão.

## Conferência

O teste de integração confirmou tema, modal/CTA, filtro, alertas, tarefas locais, CRUD MySQL, contato real, recuperação de falha/CSRF e ausência de vazamento de tarefas entre visitantes. Oito páginas foram conferidas nas larguras320/390/844/1440, sem erro JavaScript ou rolagem horizontal. O menu do Jardim continuou abrindo por arquivo, sem API.

Worker, fallback, cancelamento, erros e URLs HTTPS/CORS têm testes específicos. Não foi repetido um download remoto completo de aproximadamente500MB nem feita a validação do domínio InfinityFree real. Essa etapa permanece indicada no guia.

Houve assistência de IA declarada no projeto. Esta conferência descreve cobertura técnica e testes, sem atestar autoria exclusiva, compreensão individual ou aprovação escolar.
