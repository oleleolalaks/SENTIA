# SENTIA

Projeto escolar de PW I: um site educativo em pixel art conectado ao jogo narrativo **Jardim dos Ecos**.

## Abrir o projeto

Extraia o pacote mantendo `index.html`, `jardim.html`, `css`, `js` e `assets` juntos. Abra a pasta no VS Code e execute `index.html` diretamente ou pelo Live Server.

O site educativo, as atividades locais e o Jardim funcionam sem PHP ou MySQL. O jogo tem seu próprio save no navegador.

## A única área que usa XAMPP

Em **Meu registro**, o modo padrão **Plano pessoal** salva as ações apenas no navegador. Para usar **Registro compartilhado · MySQL**:

1. Coloque a pasta `Sentia` em `htdocs` do XAMPP.
2. Inicie Apache e MySQL e abra `http://localhost/Sentia/`.
3. Escolha o modo compartilhado em Meu registro.
4. Use Preparar banco local ou importe `banco/schema.sql` no phpMyAdmin.

A API PHP fica em `api/`. Configurações diferentes estão explicadas em [BANCO-XAMPP.txt](documentacao/BANCO-XAMPP.txt). O plano pessoal só é copiado ao banco se a pessoa escolher importar. O Jardim não usa a API.

## Parte educativa

Modo escuro persistente, modal com CTA e validação, alertas dinâmicos, filtro do Atlas, gerenciador de tarefas local e compartilhado, e simulação assíncrona de reflexões. A simulação usa frases locais, não um serviço externo de IA.

A correspondência das apostilas e do glossário está em [CONFERENCIA-PWI.md](documentacao/CONFERENCIA-PWI.md). Nenhum conceito do jogo é usado para completar essa matriz.

O acesso ao Jardim exige três etapas: cruzar as pistas das lanternas, reconhecer os vínculos e decifrar suas marcas. As dicas acompanham a etapa atual; não há cronômetro nem perda de progresso ao errar. Quem já abriu o portal mantém o acesso e pode usar **Recomeçar apenas o enigma** para experimentar a revisão, preservando a partida do Jardim.

## Entrega e histórico

- `portfolio/`: telas de PC/celular e portfólio Excalidraw com capturas incorporadas.
- `entrega-escolar/`: HTML sem importar CSS/JS e cópias isoladas de CSS, JavaScript, PHP e SQL.
- A raiz contém o projeto integrado funcional, com comentários por blocos.
- [Histórico recuperado](HISTORICO-IMPORTADO.md): origem dos pacotes antigos, hashes e tags. As duas atualizações idênticas compartilham um commit; as datas de importação não fingem datas antigas de desenvolvimento.

Repositório público: https://github.com/oleleolalaks/SENTIA

## Créditos e autoria

A direção criativa é do projeto SENTIA; houve assistência de IA no desenvolvimento e nas artes, como informado no site. O aluno deve estudar, revisar e explicar sua participação de forma verdadeira. Esta entrega técnica não atesta autoria exclusiva nem garante aprovação escolar.

A trilha usa músicas de Kevin MacLeod sob CC BY 4.0; consulte [os créditos](documentacao/CREDITOS-AUDIO.txt).
