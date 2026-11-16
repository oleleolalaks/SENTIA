 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';

                                                                                             
                                                                         
 /* Atualiza window.Registros Sentia usando o resultado dessa chamada de função.
*/ window.RegistrosSentia =  /* Executa imediatamente a função que prepara e isola as operações deste módulo. */ ( /* Essa função é executada aqui e isola os dados e operações deste módulo. */ () => {
   /* Essa declaração usa const para preparar atalho de seleção de elementos, mantendo essas referências fixas.
*/ const  /* esse comando encontra o elemento da página usado pelo módulo de registros.
*/ $ =  /* esse comando encontra o elemento da página usado pelo módulo de registros. */ selector =>  /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector(selector);
   /* Essa declaração usa let para preparar rows e ready e busy e hooks, permitindo atualizar esses valores depois.
*/ let  /* Aqui rows recebe uma lista com 0 posições.
*/ rows = [],  /* Aqui ready recebe false.
*/ ready = false,  /* Aqui busy recebe false.
*/ busy = false,  /* Aqui hooks recebe nenhum valor inicial.
*/ hooks;
   /* Essa declaração usa let para preparar previous e mode e personal e filter, permitindo atualizar esses valores depois.
*/ let  /* Aqui previous recebe uma lista com 0 posições.
*/ previous = [],  /* Aqui mode recebe local.
*/ mode='local',  /* Aqui personal recebe uma lista com 0 posições.
*/ personal=[],  /* Aqui filter recebe all.
*/ filter='all';
   /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {  /* Atualiza mode usando uma das duas alternativas, conforme o teste.
*/ mode= /* Lê o valor salvo com a chave sentia record mode. */ localStorage.getItem('sentia-record-mode')==='mysql'?'mysql':'local'; }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {}
   /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
     /* Essa declaração usa const para preparar saved, mantendo essas referências fixas.
*/ const  /* Aqui saved recebe o resultado de JSON.parse.
*/ saved= /* Converte o texto JSON em dados que o programa consegue usar. */ JSON.parse( /* Lê o valor salvo com a chave sentia tasks. */ localStorage.getItem('sentia-tasks')||'[]');
     /* Esse teste confere se o resultado de Array.is Array está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(saved)) /* Atualiza previous usando o resultado de saved.filter.
*/ previous= /* Monta uma lista somente com os valores que passam no teste. */ saved.filter( /* Essa função recebe t e devolve o resultado dessa expressão. */ t=>t&&typeof t.id==='string'&&typeof t.text==='string'&& /* Retira os espaços extras do começo e do fim do texto. */ t.text.trim()&& /* Cria uma lista a partir dos valores recebidos. */ Array.from(t.text).length<=160);
  }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {                                                                         }
   /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
     /* Essa declaração usa const para preparar saved, mantendo essas referências fixas.
*/ const  /* Aqui saved recebe o resultado de JSON.parse.
*/ saved= /* Converte o texto JSON em dados que o programa consegue usar. */ JSON.parse( /* Lê o valor salvo com a chave sentia personal tasks. */ localStorage.getItem('sentia-personal-tasks')||'null');
     /* Atualiza personal usando uma das duas alternativas, conforme o teste.
*/ personal= /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(saved)? /* Monta uma nova lista transformando cada posição da lista original. */ saved.filter( /* Essa função recebe t e devolve o resultado dessa expressão. */ t=>t&&typeof t.id==='string'&&typeof t.text==='string').map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t, /* aqui fica a indicação de que uma ação do registro foi concluída.
*/ done:!!t.done})): /* Monta uma nova lista transformando cada posição da lista original. */ previous.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t, /* aqui fica a indicação de que uma ação do registro foi concluída.
*/ done:!!t.done}));
  }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch {  /* Atualiza personal usando o resultado de previous.map.
*/ personal= /* Monta uma nova lista transformando cada posição da lista original. */ previous.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t, /* aqui fica a indicação de que uma ação do registro foi concluída.
*/ done:!!t.done})); }
   /* Atualiza previous usando o resultado de personal.map.
*/ previous= /* Monta uma nova lista transformando cada posição da lista original. */ personal.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t}));
                                                                                                       
   /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido.
*/ async function request(path, method='GET', data) {
     /* Esse teste confere se mode é igual a local, e só entra nesse caminho quando a condição passa.
*/ if(mode==='local'){
       /* Esse teste confere se method é igual a GET, e só entra nesse caminho quando a condição passa.
*/ if(method==='GET') /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda ok com true.
*/ ok:true, /* aqui fica a lista de ações recebida do armazenamento escolhido.
*/ registros: /* Monta uma nova lista transformando cada posição da lista original. */ personal.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t}))};
       /* Essa declaração usa const para preparar next, mantendo essas referências fixas.
*/ const  /* Aqui next recebe o resultado de personal.map.
*/ next= /* Monta uma nova lista transformando cada posição da lista original. */ personal.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t}));
       /* Essa declaração usa const para preparar index, mantendo essas referências fixas.
*/ const  /* Aqui index recebe uma das duas alternativas, conforme o teste.
*/ index=data?.id? /* Procura a posição do primeiro item que passa nessa condição. */ next.findIndex( /* Essa função recebe t e devolve o resultado dessa expressão. */ t=>t.id===data.id):-1;
       /* Escolhe o caminho de acordo com method.
*/ switch(method){
         /* Esse caminho trata o valor POST.
*/ case 'POST':  /* Acrescenta esse valor no fim da lista.
*/ next.push({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...data}); /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
         /* Esse caminho trata o valor PUT.
*/ case 'PUT':  /* Esse teste confere se index é menor que 0, e só entra nesse caminho quando a condição passa.
*/ if(index<0) /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('Esta ação já não está no plano.'); /* Copia os campos indicados para o objeto de destino.
*/ Object.assign(next[index],data); /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
         /* Esse caminho trata o valor DELETE.
*/ case 'DELETE':  /* Esse teste confere se data.all está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(data.all) /* Retira ou coloca itens a partir da posição indicada.
*/ next.splice(0,next.length);else  /* Esse teste confere se index é maior ou igual a 0, e só entra nesse caminho quando a condição passa.
*/ if(index>=0) /* Retira ou coloca itens a partir da posição indicada.
*/ next.splice(index,1); /* Encerra esse laço ou seleção sem executar as repetições restantes.
*/ break;
         /* Esse caminho trata os valores que não combinaram com as opções anteriores.
*/ default: /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('Operação de registro desconhecida.');
      }
                                                                               
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try { /* Salva o valor usando a chave sentia personal tasks.
*/ localStorage.setItem('sentia-personal-tasks', /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(next));}
       /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch { /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('Não foi possível guardar a alteração neste navegador. Confira o espaço disponível ou a permissão de armazenamento e tente novamente.');}
       /* Atualiza personal usando next.
*/ personal=next;
       /* Devolve um objeto com os campos dessa parte e encerra essa chamada da função.
*/ return { /* Esse campo guarda ok com true.
*/ ok:true};
    }
     /* Devolve o resultado de sql Request e encerra essa chamada da função.
*/ return  /* esse comando consulta a API do XAMPP e trata demora, resposta inválida e falha de conexão. */ sqlRequest(path,method,data);
  }
                                                                                          
   /* esse comando consulta a API do XAMPP e trata demora, resposta inválida e falha de conexão.
*/ async function sqlRequest(path, method='GET', data) {
     /* Essa declaração usa const para preparar controller e timeout, mantendo essas referências fixas.
*/ const  /* Aqui controller recebe uma instância de Abort Controller.
*/ controller= /* Cria uma instância de Abort Controller para usar nesse recurso. */ new AbortController(),  /* Aqui timeout recebe o resultado de set Timeout.
*/ timeout= /* Agenda essa função para depois do intervalo indicado. */ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de controller.abort. */ ()=> /* Executa controller.abort com os valores definidos nessa parte. */ controller.abort(),8000);
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Essa declaração usa const para preparar response, mantendo essas referências fixas.
*/ const  /* Aqui response recebe o resultado da operação assíncrona.
*/ response= /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* Envia a requisição para o endereço indicado e espera a resposta. */ fetch('api/'+path,{ /* Esse campo guarda method com method.
*/ method, /* Esse campo guarda cache com no store.
*/ cache:'no-store', /* Esse campo guarda credentials com same origin.
*/ credentials:'same-origin', /* Esse campo guarda signal com controller.signal.
*/ signal:controller.signal,
         /* Esse campo guarda headers com uma das duas alternativas, conforme o teste.
*/ headers:data===undefined?{ /* Esse campo guarda Accept com application json.
*/ Accept:'application/json'}:{ /* Esse campo guarda Accept com application json.
*/ Accept:'application/json', /* Esse campo guarda Content Type com application json.
*/ 'Content-Type':'application/json'},
         /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...(data===undefined?{}:{ /* Esse campo guarda body com o resultado de JSON.stringify.
*/ body: /* Converte os dados em texto JSON para guardar ou transportar. */ JSON.stringify(data)})});
       /* Essa declaração usa let para preparar body, permitindo atualizar esses valores depois.
*/ let  /* Aqui body recebe nenhum valor inicial.
*/ body;
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try { /* Atualiza body usando o resultado da operação assíncrona.
*/ body= /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* Executa response.json com os valores definidos nessa parte. */ response.json();} /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch { /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('Abra o SENTIA pelo Apache do XAMPP para conectar os registros.');}
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!response.ok||!body.ok){ /* Essa declaração usa const para preparar error, mantendo essas referências fixas.
*/ const  /* Aqui error recebe uma instância de Error.
*/ error= /* Cria uma instância de Error para usar nesse recurso. */ new Error(body.error?.message||'Não foi possível concluir a operação.'); /* Atualiza error.code usando body.error.code.
*/ error.code=body.error?.code; /* Sinaliza error para interromper esse caminho e entrar no tratamento de erro.
*/ throw error;}
       /* Devolve body e encerra essa chamada da função.
*/ return body;
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch(error) {
       /* Esse teste confere se error.name é igual a Abort Error, e só entra nesse caminho quando a condição passa.
*/ if(error.name==='AbortError') /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('A conexão demorou. Confira se Apache e MySQL estão iniciados no XAMPP.');
       /* Esse teste confere se error é uma instância de Type Error, e só entra nesse caminho quando a condição passa.
*/ if(error instanceof TypeError) /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('Não foi possível conectar. Confira Apache e MySQL no XAMPP.');
       /* Sinaliza error para interromper esse caminho e entrar no tratamento de erro.
*/ throw error;
    } finally { /* Cancela essa espera para ela não executar depois da troca de cena.
*/ clearTimeout(timeout);}
  }
   /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ function status(text, failed=false, saving=false) {
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#database-status').textContent=text;
     /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ $('#database-status').classList.toggle('error',failed);
     /* Atualiza .dataset.state usando uma das duas alternativas, conforme o teste.
*/ $('#database-status').dataset.state=failed?'error':saving?'saving':'saved';
  }
                                                                                    
   /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ function controls() {
     /* Atualiza .disabled usando o resultado dessa expressão.
*/ $('#task-form input').disabled=!ready||busy;
     /* Atualiza .disabled usando o resultado dessa expressão.
*/ $('#task-form button').disabled=!ready||busy;
     /* Atualiza .disabled usando o resultado dessa expressão.
*/ $('#clear-tasks').disabled=!ready||busy||!rows.length;
     /* Atualiza .disabled usando o resultado dessa expressão.
*/ $('#download-tasks').disabled=busy||!(ready?rows:previous).length;
     /* Atualiza .disabled usando o resultado dessa expressão.
*/ $('#import-old-records').disabled=!ready||busy;
     /* Atualiza .disabled usando busy.
*/ $('#database-connect').disabled=busy;
     /* Atualiza .disabled usando busy.
*/ $('#database-install').disabled=busy;
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('#tasks input,#tasks button').forEach( /* Essa função recebe el e devolve o resultado dessa expressão. */ el=> /* Atualiza el.disabled usando o resultado dessa expressão. */ el.disabled=busy||!ready);
     /* Define o atributo aria busy desse elemento.
*/ $('#tasks').setAttribute('aria-busy', /* Converte esse valor para texto. */ String(busy));
     /* Define o atributo aria busy desse elemento.
*/ $('#task-form').setAttribute('aria-busy', /* Converte esse valor para texto. */ String(busy));
     /* Atualiza .disabled usando busy.
*/ $('#record-storage').disabled=busy;
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('[data-task-filter]').forEach( /* Essa função recebe button e devolve o resultado dessa expressão. */ button=> /* Atualiza button.disabled usando busy. */ button.disabled=busy);
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#database-actions').hidden=mode!=='mysql';
  }
                                                                                            
   /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ function render() {
     /* Essa declaração usa const para preparar completed, mantendo essas referências fixas.
*/ const  /* Aqui completed recebe length.
*/ completed= /* Monta uma lista somente com os valores que passam no teste. */ rows.filter( /* Essa função recebe t e devolve t.done. */ t=>t.done).length;
     /* Essa declaração usa const para preparar visible, mantendo essas referências fixas.
*/ const  /* Aqui visible recebe o resultado de rows.filter.
*/ visible= /* Monta uma lista somente com os valores que passam no teste. */ rows.filter( /* Essa função recebe t e devolve o resultado dessa expressão. */ t=>filter==='all'||(filter==='done'?t.done:!t.done));
     /* Troca o conteúdo desse elemento pelos novos filhos.
*/ $('#tasks').replaceChildren( /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ... /* Monta uma nova lista transformando cada posição da lista original. */ visible.map( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ t=>{
       /* Essa declaração usa const para preparar item, mantendo essas referências fixas.
*/ const  /* Aqui item recebe o resultado de document.create Element.
*/ item= /* Cria um elemento HTML do tipo li. */ document.createElement('li'); /* Alterna essa classe ou ajusta seu estado conforme a condição.
*/ item.classList.toggle('done',t.done);
       /* Atualiza item.dataset.task Id usando t.id.
*/ item.dataset.taskId=t.id;
       /* Essa declaração usa const para preparar checkbox, mantendo essas referências fixas.
*/ const  /* Aqui checkbox recebe o resultado de document.create Element.
*/ checkbox= /* Cria um elemento HTML do tipo input. */ document.createElement('input'); /* Atualiza checkbox.type usando checkbox.
*/ checkbox.type='checkbox'; /* Atualiza checkbox.checked usando t.done.
*/ checkbox.checked=t.done;
       /* Atualiza checkbox.dataset.task Action usando toggle.
*/ checkbox.dataset.taskAction='toggle'; /* Define o atributo aria label desse elemento.
*/ checkbox.setAttribute('aria-label',(t.done?'Marcar como pendente: ':'Concluir ')+t.text);
       /* Liga essa função à mudança desse campo.
*/ checkbox.onchange= /* Essa função recebe nenhum parâmetro e devolve o resultado de mutate. */ ()=> /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha. */ mutate( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async()=>{ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php','PUT',{ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:t.id, /* aqui fica a indicação de que uma ação do registro foi concluída.
*/ done:checkbox.checked});},'Ação atualizada.');
       /* Essa declaração usa const para preparar text, mantendo essas referências fixas.
*/ const  /* Aqui text recebe o resultado de document.create Element.
*/ text= /* Cria um elemento HTML do tipo span. */ document.createElement('span'); /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ text.textContent=t.text;
       /* Essa declaração usa const para preparar edit, mantendo essas referências fixas.
*/ const  /* Aqui edit recebe o resultado de document.create Element.
*/ edit= /* Cria um elemento HTML do tipo button. */ document.createElement('button'); /* Atualiza edit.type usando button.
*/ edit.type='button'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ edit.textContent='Editar'; /* Atualiza edit.dataset.task Edit usando t.id.
*/ edit.dataset.taskEdit=t.id; /* Atualiza edit.dataset.task Action usando edit.
*/ edit.dataset.taskAction='edit'; /* Atualiza edit.title usando o resultado dessa expressão.
*/ edit.title='Editar '+t.text; /* Liga essa função ao clique desse controle.
*/ edit.onclick= /* Essa função recebe nenhum parâmetro e devolve o resultado de edit Record. */ ()=> /* esse comando monta a janela que permite alterar o texto de uma ação existente. */ editRecord(t);
       /* Essa declaração usa const para preparar remove, mantendo essas referências fixas.
*/ const  /* Aqui remove recebe o resultado de document.create Element.
*/ remove= /* Cria um elemento HTML do tipo button. */ document.createElement('button'); /* Atualiza remove.type usando button.
*/ remove.type='button'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ remove.textContent='×'; /* Atualiza remove.dataset.task Action usando remove.
*/ remove.dataset.taskAction='remove'; /* Define o atributo aria label desse elemento.
*/ remove.setAttribute('aria-label','Apagar '+t.text);
       /* Liga essa função ao clique desse controle.
*/ remove.onclick= /* Essa função recebe nenhum parâmetro e devolve o resultado de mutate. */ ()=> /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha. */ mutate( /* Essa função recebe nenhum parâmetro e devolve o resultado de request. */ ()=> /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php','DELETE',{ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:t.id}),'Ação removida.');
       /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ item.append(checkbox,text,edit,remove); /* Devolve item e encerra essa chamada da função.
*/ return item;
    }));
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#task-status').textContent=ready?(rows.length?`${completed} de ${rows.length} ações concluídas.`:'Seu registro ainda está vazio.'):'Conecte o banco local para criar e editar ações.';
     /* Atualiza .max usando o resultado dessa expressão.
*/ $('#task-progress').max=rows.length||1; /* Atualiza o valor desse campo ou controle.
*/ $('#task-progress').value=completed; /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#task-progress').hidden=!ready||!rows.length;
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#task-filters').hidden=!ready||!rows.length;
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('[data-task-filter]').forEach( /* Essa função recebe button e devolve o resultado de button.set Attribute. */ button=> /* Define o atributo aria pressed desse elemento. */ button.setAttribute('aria-pressed', /* Converte esse valor para texto. */ String(button.dataset.taskFilter===filter)));
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#task-empty').hidden=!ready||!!visible.length;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#task-empty').textContent=rows.length?(filter==='done'?'As ações concluídas aparecerão aqui. Um passo de cada vez.':'Nenhuma ação pendente. Você pode incluir um novo passo quando quiser.'):'Seu próximo passo pode ser pequeno. Escreva uma ação acima para começar.';
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#local-records').hidden=mode!=='mysql'||!previous.length;
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ $('#local-record-count').textContent=previous.length+' ação(ões) do seu plano pessoal continuam neste navegador. Importe se quiser copiá-las para o registro compartilhado.';
     /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ controls();
  }
                                                                                                        
   /* esse comando recebe os registros e atualiza a lista mantendo a referência do array.
*/ async function loadRows() {
     /* Essa declaração usa const para preparar body, mantendo essas referências fixas.
*/ const  /* Aqui body recebe o resultado da operação assíncrona.
*/ body= /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php');
     /* Esse teste confere se o resultado de Array.is Array não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se esse valor é uma lista antes de acessar suas posições. */ Array.isArray(body.registros)) /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('A resposta dos registros não é válida.');
     /* Retira ou coloca itens a partir da posição indicada.
*/ rows.splice(0,rows.length, /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...body.registros); /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ render();
  }
                                                                                                         
   /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha.
*/ async function mutate(action, message) {
     /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(busy||!ready) /* Devolve false e encerra essa chamada da função.
*/ return false;
     /* Essa declaração usa const para preparar origin e task e action Name, mantendo essas referências fixas.
*/ const  /* Aqui origin recebe document.active Element.
*/ origin=document.activeElement, /* Aqui task recebe o resultado de origin.closest.
*/ task= /* Executa origin.closest com os valores definidos nessa parte. */ origin?.closest('#tasks li'), /* Aqui action Name recebe origin.dataset.task Action.
*/ actionName=origin?.dataset.taskAction;
     /* Essa declaração usa const para preparar next Task, mantendo essas referências fixas.
*/ const  /* Aqui next Task recebe o resultado dessa expressão.
*/ nextTask=task?.nextElementSibling?.dataset.taskId||task?.previousElementSibling?.dataset.taskId;
     /* Atualiza busy usando true.
*/ busy=true; /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ controls(); /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status('Salvando alteração…',false,true);
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* Executa action com os valores definidos nessa parte. */ action(); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando recebe os registros e atualiza a lista mantendo a referência do array. */ loadRows(); /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status(message+(mode==='local'?' Plano guardado neste navegador.':' Dados guardados nesta instalação.')); /* Devolve true e encerra essa chamada da função.
*/ return true;
    }  /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch(error) { /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status(error.message,true); /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ render(); /* Devolve false e encerra essa chamada da função.
*/ return false;}
    finally {
       /* Atualiza busy usando false.
*/ busy=false; /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ controls();
                                                                                                    
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(task&&! /* esse comando encontra o elemento da página usado pelo módulo de registros. */ $('#modal').open){
         /* Essa declaração usa const para preparar find, mantendo essas referências fixas.
*/ const  /* esse comando procura o controle de uma ação depois que a lista foi reconstruída.
*/ find= /* esse comando procura o controle de uma ação depois que a lista foi reconstruída. */ id=>id? /* Procura o primeiro elemento da página que corresponde ao seletor. */ document.querySelector('[data-task-id="'+ /* Prepara o valor para ser usado com segurança como parte de um seletor CSS. */ CSS.escape(id)+'"] [data-task-action="'+actionName+'"]'):null;
         /* Leva o foco do teclado para esse elemento.
*/ ( /* esse comando procura o controle de uma ação depois que a lista foi reconstruída. */ find(task.dataset.taskId)|| /* esse comando procura o controle de uma ação depois que a lista foi reconstruída. */ find(nextTask)|| /* esse comando encontra o elemento da página usado pelo módulo de registros. */ $('#task')).focus({ /* Esse campo guarda prevent Scroll com true.
*/ preventScroll:true});
      }
    }
  }
                                                                           
   /* esse comando abre o plano local ou verifica a instalação MySQL somente quando esse modo foi escolhido.
*/ async function connect() {
     /* Esse teste confere se busy está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(busy) /* Encerra essa função sem devolver outro valor.
*/ return;
     /* Atualiza ready usando false.
*/ ready=false; /* Atualiza busy usando true.
*/ busy=true; /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ controls(); /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status(mode==='local'?'Abrindo seu plano pessoal…':'Conectando os registros…',false,true);
     /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#database-install').hidden=true;
     /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try {
       /* Esse teste confere se mode é igual a local, e só entra nesse caminho quando a condição passa.
*/ if(mode==='local'){ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando recebe os registros e atualiza a lista mantendo a referência do array. */ loadRows(); /* Atualiza ready usando true.
*/ ready=true; /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status('Plano pessoal salvo apenas neste navegador.'); /* Encerra essa função sem devolver outro valor.
*/ return;}
       /* Esse teste confere se o resultado de https .test não está ativo ou não tem valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(! /* Confere se o texto corresponde a esse padrão de expressão regular. */ /^https?:$/.test(location.protocol)) /* Sinaliza uma instância de Error para interromper esse caminho e entrar no tratamento de erro.
*/ throw  /* Cria uma instância de Error para usar nesse recurso. */ new Error('Para salvar no banco, abra http://localhost/Sentia/ com Apache e MySQL iniciados no XAMPP.');
       /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('status.php'); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando recebe os registros e atualiza a lista mantendo a referência do array. */ loadRows(); /* Atualiza ready usando true.
*/ ready=true;
       /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status('Conectado. Os registros ficam no banco desta instalação do SENTIA.');
    } /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch(error){ /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status(error.message,true); /* Define se esse elemento fica escondido ou disponível na tela.
*/ $('#database-install').hidden=error.code!=='schema_missing';}
    finally { /* Atualiza busy usando false.
*/ busy=false; /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ render();}
  }
                                                                         
   /* esse comando monta a janela que permite alterar o texto de uma ação existente.
*/ function editRecord(t) {
     /* Essa declaração usa const para preparar form e label e input e save e feedback, mantendo essas referências fixas.
*/ const  /* Aqui form recebe o resultado de document.create Element.
*/ form= /* Cria um elemento HTML do tipo form. */ document.createElement('form'), /* Aqui label recebe o resultado de document.create Element.
*/ label= /* Cria um elemento HTML do tipo label. */ document.createElement('label'), /* Aqui input recebe o resultado de document.create Element.
*/ input= /* Cria um elemento HTML do tipo input. */ document.createElement('input'), /* Aqui save recebe o resultado de document.create Element.
*/ save= /* Cria um elemento HTML do tipo button. */ document.createElement('button'), /* Aqui feedback recebe o resultado de document.create Element.
*/ feedback= /* Cria um elemento HTML do tipo p. */ document.createElement('p');
     /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ label.textContent='Editar ação'; /* Atualiza o valor desse campo ou controle.
*/ input.value=t.text; /* Atualiza input.max Length usando 160.
*/ input.maxLength=160; /* Atualiza input.required usando true.
*/ input.required=true; /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ label.append(input);
     /* Atualiza save.type usando submit.
*/ save.type='submit'; /* Define as classes de aparência desse elemento.
*/ save.className='button primary'; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ save.textContent='Salvar'; /* Define o atributo role desse elemento.
*/ feedback.setAttribute('role','status'); /* Acrescenta os elementos indicados ao fim desse conteúdo.
*/ form.append(label,save,feedback);
     /* Liga essa função ao envio desse formulário.
*/ form.onsubmit= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async e=>{
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(! /* Retira os espaços extras do começo e do fim do texto. */ input.value.trim()||busy) /* Encerra essa função sem devolver outro valor.
*/ return; /* Atualiza input.disabled usando true.
*/ input.disabled=true; /* Atualiza save.disabled usando true.
*/ save.disabled=true;
       /* Essa declaração usa const para preparar ok, mantendo essas referências fixas.
*/ const  /* Aqui ok recebe o resultado da operação assíncrona.
*/ ok= /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha. */ mutate( /* Essa função recebe nenhum parâmetro e devolve o resultado de request. */ ()=> /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php','PUT',{ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:t.id, /* aqui fica o texto de uma ação do plano pessoal ou compartilhado.
*/ text: /* Retira os espaços extras do começo e do fim do texto. */ input.value.trim()}),'Ação editada.');
       /* Esse teste confere se ok está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if(ok) /* Fecha essa janela ou recurso que estava aberto.
*/ $('#modal').close();else{ /* Atualiza input.disabled usando false.
*/ input.disabled=false; /* Atualiza save.disabled usando false.
*/ save.disabled=false; /* Escreve o texto desse elemento sem interpretar marcação HTML.
*/ feedback.textContent= /* esse comando encontra o elemento da página usado pelo módulo de registros. */ $('#database-status').textContent;}
    };
     /* Executa hooks.open Modal com os valores definidos nessa parte.
*/ hooks.openModal(form);
  }
   /* esse comando conecta formulários, filtros, exportação e escolhas de armazenamento aos registros.
*/ function init(options) {
     /* Atualiza hooks usando options.
*/ hooks=options;
     /* Atualiza o valor desse campo ou controle.
*/ $('#record-storage').value=mode;
     /* Escuta o evento change e liga esse evento à função definida aqui.
*/ $('#record-storage').addEventListener('change', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
       /* Atualiza mode usando uma das duas alternativas, conforme o teste.
*/ mode= /* esse comando encontra o elemento da página usado pelo módulo de registros. */ $('#record-storage').value==='mysql'?'mysql':'local';
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try{ /* Salva o valor usando a chave sentia record mode.
*/ localStorage.setItem('sentia-record-mode',mode);} /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch{}
       /* Atualiza previous usando o resultado de personal.map.
*/ previous= /* Monta uma nova lista transformando cada posição da lista original. */ personal.map( /* Essa função recebe t e devolve um objeto com os campos dessa parte. */ t=>({ /* Usa os itens ou campos desse valor dentro da nova lista ou do novo objeto.
*/ ...t})); /* Retira ou coloca itens a partir da posição indicada.
*/ rows.splice(0,rows.length); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando abre o plano local ou verifica a instalação MySQL somente quando esse modo foi escolhido. */ connect();
    });
     /* Liga essa função ao envio desse formulário.
*/ $('#task-form').onsubmit= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async e=>{
       /* Impede a ação padrão desse evento do navegador.
*/ e.preventDefault(); /* Essa declaração usa const para preparar text, mantendo essas referências fixas.
*/ const  /* Aqui text recebe o resultado de .value.trim.
*/ text= /* Retira os espaços extras do começo e do fim do texto. */ $('#task').value.trim(); /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(!text||busy||!ready) /* Encerra essa função sem devolver outro valor.
*/ return;
       /* Essa declaração usa const para preparar id, mantendo essas referências fixas.
*/ const  /* Aqui id recebe o resultado dessa expressão.
*/ id= /* Executa window.crypto.random UUID com os valores definidos nessa parte. */ window.crypto?.randomUUID?.()|| /* function toString() { [native code] }. */ Date.now().toString(36)+ /* Obtém a parte indicada sem mudar o conteúdo original. */ Math.random().toString(36).slice(2);
       /* Esse teste confere se o resultado da operação assíncrona está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Espera essa operação assíncrona terminar antes de continuar esta parte da função. */ await  /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha. */ mutate( /* Essa função recebe nenhum parâmetro e devolve o resultado de request. */ ()=> /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php','POST',{ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id, /* aqui fica o texto de uma ação do plano pessoal ou compartilhado.
*/ text, /* aqui fica a indicação de que uma ação do registro foi concluída.
*/ done:false}),'Ação adicionada.')){ /* Atualiza filter usando all.
*/ filter='all'; /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ render(); /* Executa .reset com os valores definidos nessa parte.
*/ $('#task-form').reset(); /* Executa hooks.on Discover com os valores definidos nessa parte.
*/ hooks.onDiscover(); /* Leva o foco do teclado para esse elemento.
*/ $('#task').focus();}
    };
     /* Percorre os itens e executa a função indicada em cada um.
*/ document.querySelectorAll('[data-task-filter]').forEach( /* Essa função recebe button e devolve o resultado de button.add Event Listener. */ button=> /* Escuta o evento click e liga esse evento à função definida aqui. */ button.addEventListener('click', /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Atualiza filter usando button.dataset.task Filter.
*/ filter=button.dataset.taskFilter; /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ render();}));
     /* Liga essa função ao clique desse controle.
*/ $('#clear-tasks').onclick= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{ /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(rows.length&& /* Executa confirm com os valores definidos nessa parte. */ confirm(mode==='local'?'Apagar todas as ações do seu plano neste navegador?':'Apagar todas as ações do banco desta instalação?')) /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha. */ mutate( /* Essa função recebe nenhum parâmetro e devolve o resultado de request. */ ()=> /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php','DELETE',{ /* Esse campo guarda all com true.
*/ all:true}),'Registro limpo.');};
     /* Liga essa função ao clique desse controle.
*/ $('#download-tasks').onclick= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ ()=>{
       /* Essa declaração usa const para preparar data e text, mantendo essas referências fixas.
*/ const  /* Aqui data recebe uma das duas alternativas, conforme o teste.
*/ data=ready?rows:previous, /* Aqui text recebe o resultado dessa expressão.
*/ text='MEU REGISTRO · SENTIA\n\n'+ /* Junta as partes da lista em um texto. */ data.map( /* Essa função recebe t e devolve o resultado dessa expressão. */ t=>(t.done?'[x] ':'[ ] ')+t.text).join('\n');
       /* Essa declaração usa const para preparar url e link, mantendo essas referências fixas.
*/ const  /* Aqui url recebe o resultado de URL.create Object URL.
*/ url= /* Cria um endereço local temporário para acessar esse arquivo ou bloco de dados. */ URL.createObjectURL( /* Cria uma instância de Blob para usar nesse recurso. */ new Blob([text],{ /* Indica o tipo desse elemento ou recurso.
*/ type:'text/plain;charset=utf-8'})), /* Aqui link recebe o resultado de document.create Element.
*/ link= /* Cria um elemento HTML do tipo a. */ document.createElement('a'); /* Atualiza link.href usando url.
*/ link.href=url; /* Atualiza link.download usando meu registro sentia.txt.
*/ link.download='meu-registro-sentia.txt'; /* Aciona o clique programado nesse controle.
*/ link.click(); /* Agenda essa função para depois do intervalo indicado.
*/ setTimeout( /* Essa função recebe nenhum parâmetro e devolve o resultado de URL.revoke Object URL. */ ()=> /* Libera o endereço temporário depois que ele deixou de ser necessário. */ URL.revokeObjectURL(url),1000);
    };
     /* Liga essa função ao clique desse controle.
*/ $('#database-connect').onclick=connect;
     /* Liga essa função ao clique desse controle.
*/ $('#database-install').onclick= /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async()=>{
       /* Esse teste confere se os testes combinados dessa condição passam, e só entra nesse caminho quando a condição passa.
*/ if(busy||mode!=='mysql') /* Encerra essa função sem devolver outro valor.
*/ return; /* Atualiza busy usando true.
*/ busy=true; /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ controls(); /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status('Preparando o banco local…');
       /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try{ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('instalar.php','POST',{}); /* Atualiza busy usando false.
*/ busy=false; /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando abre o plano local ou verifica a instalação MySQL somente quando esse modo foi escolhido. */ connect();}
       /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch(error){ /* Atualiza busy usando false.
*/ busy=false; /* esse comando atualiza o aviso de salvamento, conexão ou erro mostrado perto do registro.
*/ status(error.message,true); /* esse comando habilita apenas as ações que podem ser feitas no estado atual do registro.
*/ controls();}
    };
                                                                                            
     /* Liga essa função ao clique desse controle.
*/ $('#import-old-records').onclick= /* Essa função recebe nenhum parâmetro e devolve o resultado de mutate. */ ()=> /* esse comando acompanha uma alteração e devolve o foco depois de salvar ou explicar a falha. */ mutate( /* Essa função agrupa a ação executada quando for chamada nesta parte. */ async()=>{
       /* Essa declaração usa const para preparar existing, mantendo essas referências fixas.
*/ const  /* Aqui existing recebe uma instância de Set.
*/ existing= /* Cria uma instância de Set para usar nesse recurso. */ new Set( /* Monta uma nova lista transformando cada posição da lista original. */ rows.map( /* Essa função recebe t e devolve t.id. */ t=>t.id));
       /* Percorre cada valor de previous usando t nesta repetição.
*/ for( /* Essa declaração usa const para preparar t, mantendo essas referências fixas.
*/ const  /* Aqui t recebe nenhum valor inicial.
*/ t of previous){ /* Esse teste confere se o resultado de existing.has está ativo ou retorna um valor verdadeiro, e só entra nesse caminho quando a condição passa.
*/ if( /* Confere se esse valor está presente no conjunto ou mapa. */ existing.has(t.id)) /* Pula o restante desta repetição e segue para a próxima repetição do laço.
*/ continue; /* Tenta executar essas operações e direciona uma exceção para o tratamento definido no catch.
*/ try{ /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ await  /* esse comando executa a operação no plano pessoal ou encaminha a solicitação ao modo MySQL escolhido. */ request('registros.php','POST',{ /* Identifica esse registro para que ele possa ser encontrado de novo.
*/ id:t.id, /* aqui fica o texto de uma ação do plano pessoal ou compartilhado.
*/ text:t.text, /* aqui fica a indicação de que uma ação do registro foi concluída.
*/ done:!!t.done});} /* Recebe a falha dessa tentativa e aplica o tratamento definido aqui.
*/ catch(error){ /* Esse teste confere se error.code é diferente de id exists, e só entra nesse caminho quando a condição passa.
*/ if(error.code!=='id_exists') /* Sinaliza error para interromper esse caminho e entrar no tratamento de erro.
*/ throw error;}}
    },'Importação concluída. A cópia antiga foi mantida no navegador.');
     /* esse comando refaz a lista, os filtros e o progresso a partir das ações guardadas.
*/ render(); /* Executa essa expressão para atualizar o estado ou a apresentação dessa parte.
*/ void  /* esse comando abre o plano local ou verifica a instalação MySQL somente quando esse modo foi escolhido. */ connect();
  }
   /* Devolve o resultado de Object.freeze e encerra essa chamada da função.
*/ return  /* Impede a troca direta dos campos desse objeto. */ Object.freeze({ /* Aqui disponibiliza a operação init para os outros módulos. esse comando conecta formulários, filtros, exportação e escolhas de armazenamento aos registros.
*/ init});
})();
