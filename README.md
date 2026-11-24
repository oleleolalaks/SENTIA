# SENTIA

Site educativo de PW I em HTML, CSS e JavaScript puros, conectado ao jogo narrativo **Jardim dos Ecos**. Há atividades de sentimentos, tarefas, contato e conversas com IA executada no navegador.

## Abrir o projeto

Extraia o pacote mantendo `index.html`, `jardim.html`, `css`, `js` e `assets` juntos. Abra a pasta no VS Code e execute `index.html` diretamente ou pelo Live Server.

O site educativo, as atividades locais e o Jardim funcionam sem PHP ou MySQL. O jogo tem seu próprio save no navegador. A IA precisa de HTTPS ou localhost. Os dois formulários que gravam no banco precisam de PHP com PDO MySQL.

## As duas áreas que usam MySQL

Em **Meu registro**, o modo **Plano pessoal** salva ações só no navegador. O modo **Registro MySQL** grava tarefas vinculadas à sessão, sem mostrá-las a outros visitantes. Limpar os cookies ou perder a sessão pode interromper o acesso. O formulário de contato em **Sobre** grava sugestões fictícias e devolve um recibo, sem enviar e-mail ou expor mensagens publicamente.

Para testar no XAMPP:

1. Coloque a pasta `Sentia` em `htdocs` do XAMPP.
2. Inicie Apache e MySQL e abra `http://localhost/Sentia/`.
3. Escolha o modo MySQL em Meu registro.
4. Use Preparar banco local ou crie um banco no phpMyAdmin, selecione-o e importe `banco/schema.sql`.

A API fica em `api/` e usa consultas parametrizadas, cookie de sessão e token CSRF. O plano pessoal só é copiado ao banco quando a pessoa escolhe importar. O Jardim não usa a API. Use somente dados fictícios na demonstração.

Para a hospedagem, consulte [HOSPEDAGEM-INFINITYFREE.txt](documentacao/HOSPEDAGEM-INFINITYFREE.txt). Crie o banco pelo painel, importe o SQL e preencha a configuração privada com host, banco, usuário e senha do painel. Nunca publique a senha. O pacote separa `htdocs/` dos códigos isolados, SQL, guias e portfólio; só o conteúdo extraído de `htdocs/` vai para a pasta pública. GitHub Pages não executa PHP/MySQL.

## Parte educativa

Modo escuro persistente, modal com CTA, alertas dinâmicos, filtro do Atlas, gerenciador de tarefas e reflexão assíncrona. A reflexão sorteia frases locais, como exercício da apostila. A área **Conversas** é distinta e usa inferência real de IA.

As dez personalidades compartilham Qwen2.5-0.5B-Instruct por Transformers.js em Web Worker. O primeiro preparo baixa cerca de500MB no aparelho do visitante, de servidores públicos externos. Os pesos podem ficar no cache do navegador, sem serem enviados para a hospedagem. As mensagens não passam pela API do SENTIA. O histórico só é salvo localmente quando a pessoa ativa a opção.

Há execução por CPU e fallback automático quando WebGPU não é compatível. Não existe processo Python/Node ou servidor de IA rodando em outra janela. Cancelamento, falhas e tempos limite liberam os controles. O modelo pequeno pode responder genericamente e errar, inclusive ao lembrar o contexto.

A correspondência das apostilas e do glossário está em [CONFERENCIA-PWI.md](documentacao/CONFERENCIA-PWI.md). Nenhum conceito do jogo é usado para completar essa matriz.

O acesso ao Jardim tem quatro etapas, lanternas, vínculos, palavra e mosaico. As dicas acompanham a etapa atual. **Recomeçar apenas o enigma** preserva a partida do Jardim.

## Entrega e histórico

- `portfolio/`: telas de PC/celular e portfólio Excalidraw com capturas incorporadas.
- `entrega-escolar/`: HTML sem importar CSS/JS e cópias isoladas de CSS, JavaScript, PHP e SQL.
- A raiz contém o projeto integrado funcional, com comentários por blocos.
- [Conferência de hospedagem](documentacao/CONFERENCIA-HOSPEDAGEM.txt) registra os testes e o que depende da publicação no domínio real.
- [Histórico recuperado](HISTORICO-IMPORTADO.md): origem dos pacotes antigos, hashes e tags. As duas atualizações idênticas compartilham um commit; as datas de importação não fingem datas antigas de desenvolvimento.

Repositório público: https://github.com/oleleolalaks/SENTIA

## Créditos e autoria

A direção criativa é do projeto SENTIA; houve assistência de IA no desenvolvimento e nas artes, como informado no site. O aluno deve estudar, revisar e explicar sua participação de forma verdadeira. Esta entrega técnica não atesta autoria exclusiva nem garante aprovação escolar.

A trilha usa músicas de Kevin MacLeod sob CC BY 4.0; consulte [os créditos](assets/audio/CREDITOS-AUDIO.txt). A faixa de fundo foi recomprimida para caber no limite da hospedagem.
