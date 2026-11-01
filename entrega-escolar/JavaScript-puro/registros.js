'use strict';

// Os registros da parte escolar ficam no MySQL do XAMPP. O Jardim não usa esta API.
window.RegistrosSentia = (() => {
  const $ = selector => document.querySelector(selector);
  let rows = [], ready = false, busy = false, hooks;
  let previous = [];
  try {
    const saved=JSON.parse(localStorage.getItem('sentia-tasks')||'[]');
    if(Array.isArray(saved))previous=saved.filter(t=>t&&typeof t.id==='string'&&typeof t.text==='string'&&t.text.trim()&&Array.from(t.text).length<=160);
  } catch { /* Os dados antigos continuam no navegador se não puderem ser lidos. */ }
  async function request(path, method='GET', data) {
    const controller=new AbortController(), timeout=setTimeout(()=>controller.abort(),8000);
    try {
      const response=await fetch('api/'+path,{method,cache:'no-store',credentials:'same-origin',signal:controller.signal,
        headers:data===undefined?{Accept:'application/json'}:{Accept:'application/json','Content-Type':'application/json'},
        ...(data===undefined?{}:{body:JSON.stringify(data)})});
      let body;
      try {body=await response.json();}catch {throw new Error('Abra o SENTIA pelo Apache do XAMPP para conectar os registros.');}
      if(!response.ok||!body.ok){const error=new Error(body.error?.message||'Não foi possível concluir a operação.');error.code=body.error?.code;throw error;}
      return body;
    } catch(error) {
      if(error.name==='AbortError')throw new Error('A conexão demorou. Confira se Apache e MySQL estão iniciados no XAMPP.');
      if(error instanceof TypeError)throw new Error('Não foi possível conectar. Confira Apache e MySQL no XAMPP.');
      throw error;
    } finally {clearTimeout(timeout);}
  }
  function status(text, failed=false) {
    $('#database-status').textContent=text;
    $('#database-status').classList.toggle('error',failed);
  }
  function controls() {
    $('#task-form input').disabled=!ready||busy;
    $('#task-form button').disabled=!ready||busy;
    $('#clear-tasks').disabled=!ready||busy||!rows.length;
    $('#download-tasks').disabled=busy||!(ready?rows:previous).length;
    $('#import-old-records').disabled=!ready||busy;
    $('#database-connect').disabled=busy;
    $('#database-install').disabled=busy;
    document.querySelectorAll('#tasks input,#tasks button').forEach(el=>el.disabled=busy||!ready);
    $('#tasks').setAttribute('aria-busy',String(busy));
  }
  function render() {
    $('#tasks').replaceChildren(...rows.map(t=>{
      const item=document.createElement('li');item.classList.toggle('done',t.done);
      const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.checked=t.done;
      checkbox.setAttribute('aria-label','Concluir '+t.text);
      checkbox.onchange=()=>mutate(async()=>{await request('registros.php','PUT',{id:t.id,done:checkbox.checked});},'Ação atualizada.');
      const text=document.createElement('span');text.textContent=t.text;
      const edit=document.createElement('button');edit.textContent='Editar';edit.dataset.taskEdit=t.id;edit.onclick=()=>editRecord(t);
      const remove=document.createElement('button');remove.textContent='×';remove.setAttribute('aria-label','Apagar '+t.text);
      remove.onclick=()=>mutate(()=>request('registros.php','DELETE',{id:t.id}),'Ação removida.');
      item.append(checkbox,text,edit,remove);return item;
    }));
    $('#task-status').textContent=ready?(rows.length?rows.filter(t=>t.done).length+' de '+rows.length+' ações concluídas.':'Seu registro ainda está vazio.'):'Conecte o banco local para criar e editar ações.';
    $('#local-records').hidden=!previous.length;
    $('#local-record-count').textContent=previous.length+' ação(ões) antiga(s) continuam guardadas neste navegador. Importe se quiser colocá-las no banco desta instalação.';
    controls();
  }
  async function loadRows() {
    const body=await request('registros.php');
    if(!Array.isArray(body.registros))throw new Error('A resposta dos registros não é válida.');
    rows=body.registros;render();
  }
  async function mutate(action, message) {
    if(busy||!ready)return false;
    busy=true;controls();
    try {
      await action();await loadRows();status(message+' Dados guardados nesta instalação.');return true;
    } catch(error) {status(error.message,true);render();return false;}
    finally {busy=false;controls();}
  }
  async function connect() {
    if(busy)return;
    ready=false;busy=true;controls();status('Conectando os registros…');
    $('#database-install').hidden=true;
    try {
      if(!/^https?:$/.test(location.protocol))throw new Error('Para salvar no banco, abra http://localhost/Sentia/ com Apache e MySQL iniciados no XAMPP.');
      await request('status.php');await loadRows();ready=true;
      status('Conectado. Os registros ficam no banco desta instalação do SENTIA.');
    }catch(error){status(error.message,true);$('#database-install').hidden=error.code!=='schema_missing';}
    finally {busy=false;render();}
  }
  function editRecord(t) {
    const form=document.createElement('form'),label=document.createElement('label'),input=document.createElement('input'),save=document.createElement('button'),feedback=document.createElement('p');
    label.textContent='Editar ação';input.value=t.text;input.maxLength=160;input.required=true;label.append(input);
    save.type='submit';save.className='button primary';save.textContent='Salvar';feedback.setAttribute('role','status');form.append(label,save,feedback);
    form.onsubmit=async e=>{
      e.preventDefault();if(!input.value.trim()||busy)return;input.disabled=true;save.disabled=true;
      const ok=await mutate(()=>request('registros.php','PUT',{id:t.id,text:input.value.trim()}),'Ação editada.');
      if(ok)$('#modal').close();else{input.disabled=false;save.disabled=false;feedback.textContent=$('#database-status').textContent;}
    };
    hooks.openModal(form);
  }
  function init(options) {
    hooks=options;
    $('#task-form').onsubmit=async e=>{
      e.preventDefault();const text=$('#task').value.trim();if(!text)return;
      const id=window.crypto?.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2);
      if(await mutate(()=>request('registros.php','POST',{id,text,done:false}),'Ação adicionada.')){$('#task').value='';hooks.onDiscover();$('#task').focus();}
    };
    $('#clear-tasks').onclick=()=>{if(rows.length&&confirm('Apagar todas as ações do banco desta instalação?'))void mutate(()=>request('registros.php','DELETE',{all:true}),'Registro limpo.');};
    $('#download-tasks').onclick=()=>{
      const data=ready?rows:previous,text='MEU REGISTRO · SENTIA\n\n'+data.map(t=>(t.done?'[x] ':'[ ] ')+t.text).join('\n');
      const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})),link=document.createElement('a');link.href=url;link.download='meu-registro-sentia.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    };
    $('#database-connect').onclick=connect;
    $('#database-install').onclick=async()=>{
      if(busy)return;busy=true;controls();status('Preparando o banco local…');
      try{await request('instalar.php','POST',{});busy=false;await connect();}
      catch(error){busy=false;status(error.message,true);controls();}
    };
    $('#import-old-records').onclick=()=>mutate(async()=>{
      const existing=new Set(rows.map(t=>t.id));
      for(const t of previous){if(existing.has(t.id))continue;try{await request('registros.php','POST',{id:t.id,text:t.text,done:!!t.done});}catch(error){if(error.code!=='id_exists')throw error;}}
    },'Importação concluída. A cópia antiga foi mantida no navegador.');
    render();void connect();
  }
  return Object.freeze({init});
})();
