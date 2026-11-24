/* SENTIA, registro de ações. O plano pessoal usa o navegador e o modo MySQL fica vinculado à sessão PHP. Este módulo não altera o save do Jardim. */

'use strict';

window.RegistrosSentia = (() => {
  const $ = selector => document.querySelector(selector);
  let rows = [],
    ready = false,
    busy = false,
    hooks;
  let previous = [],
    mode = 'local',
    personal = [],
    filter = 'all';
  try {
    mode = localStorage.getItem('sentia-record-mode') === 'mysql' ? 'mysql' : 'local';
  } catch {}
  try {
    const saved = JSON.parse(localStorage.getItem('sentia-tasks') || '[]');
    if (Array.isArray(saved)) previous = saved.filter(t => t && typeof t.id === 'string' && typeof t.text === 'string' && t.text.trim() && Array.from(t.text).length <= 160);
  } catch {}
  try {
    const saved = JSON.parse(localStorage.getItem('sentia-personal-tasks') || 'null');
    personal = Array.isArray(saved) ? saved.filter(t => t && typeof t.id === 'string' && typeof t.text === 'string').map(t => ({
      ...t,
      done: !!t.done
    })) : previous.map(t => ({
      ...t,
      done: !!t.done
    }));
  } catch {
    personal = previous.map(t => ({
      ...t,
      done: !!t.done
    }));
  }
  previous = personal.map(t => ({
    ...t
  }));

  /* Executa o CRUD no armazenamento escolhido. O plano pessoal fica no navegador e o modo MySQL usa a API da mesma instalação. */
  async function request(path, method = 'GET', data) {
    if (mode === 'local') {
      if (method === 'GET') return {
        ok: true,
        registros: personal.map(t => ({
          ...t
        }))
      };
      const next = personal.map(t => ({
        ...t
      }));
      const index = data?.id ? next.findIndex(t => t.id === data.id) : -1;
      switch (method) {
        case 'POST':
          next.push({
            ...data
          });
          break;
        case 'PUT':
          if (index < 0) throw new Error('Esta ação já não está no plano.');
          Object.assign(next[index], data);
          break;
        case 'DELETE':
          if (data.all) next.splice(0, next.length);else if (index >= 0) next.splice(index, 1);
          break;
        default:
          throw new Error('Operação de registro desconhecida.');
      }
      try {
        localStorage.setItem('sentia-personal-tasks', JSON.stringify(next));
      } catch {
        throw new Error('Não foi possível guardar a alteração neste navegador. Confira o espaço disponível ou a permissão de armazenamento e tente novamente.');
      }
      personal = next;
      return {
        ok: true
      };
    }
    return sqlRequest(path, method, data);
  }

  /* A API compartilha o token de sessão com o contato, sem expor a configuração do banco. */

  /* Reutiliza a API do site e seu token de sessão. As credenciais e as consultas SQL ficam no PHP, fora do JavaScript. */
  async function sqlRequest(path, method = 'GET', data) {
    return window.SentiaAPI.request(path, method, data);
  }

  /* Atualiza a mensagem de salvamento ou de erro perto do registro, para a pessoa saber o que aconteceu. */
  function status(text, failed = false, saving = false) {
    $('#database-status').textContent = text;
    $('#database-status').classList.toggle('error', failed);
    $('#database-status').dataset.state = failed ? 'error' : saving ? 'saving' : 'saved';
  }

  /* Desabilita os controles enquanto há uma operação pendente e mostra apenas as ações disponíveis no modo atual. */
  function controls() {
    $('#task-form input').disabled = !ready || busy;
    $('#task-form button').disabled = !ready || busy;
    $('#clear-tasks').disabled = !ready || busy || !rows.length;
    $('#download-tasks').disabled = busy || !(ready ? rows : previous).length;
    $('#import-old-records').disabled = !ready || busy;
    $('#database-connect').disabled = busy;
    $('#database-install').disabled = busy;
    document.querySelectorAll('#tasks input,#tasks button').forEach(el => el.disabled = busy || !ready);
    $('#tasks').setAttribute('aria-busy', String(busy));
    $('#task-form').setAttribute('aria-busy', String(busy));
    $('#record-storage').disabled = busy;
    document.querySelectorAll('[data-task-filter]').forEach(button => button.disabled = busy);
    $('#database-actions').hidden = mode !== 'mysql';
  }

  /* Refaz a lista de ações, os filtros e o progresso. Os textos das tarefas são tratados como texto, não como marcação. */
  function render() {
    const completed = rows.filter(t => t.done).length;
    const visible = rows.filter(t => filter === 'all' || (filter === 'done' ? t.done : !t.done));
    $('#tasks').replaceChildren(...visible.map(t => {
      const item = document.createElement('li');
      item.classList.toggle('done', t.done);
      item.dataset.taskId = t.id;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = t.done;
      checkbox.dataset.taskAction = 'toggle';
      checkbox.setAttribute('aria-label', (t.done ? 'Marcar como pendente: ' : 'Concluir ') + t.text);
      checkbox.onchange = () => mutate(async () => {
        await request('registros.php', 'PUT', {
          id: t.id,
          done: checkbox.checked
        });
      }, 'Ação atualizada.');
      const text = document.createElement('span');
      text.textContent = t.text;
      const edit = document.createElement('button');
      edit.type = 'button';
      edit.textContent = 'Editar';
      edit.dataset.taskEdit = t.id;
      edit.dataset.taskAction = 'edit';
      edit.title = 'Editar ' + t.text;
      edit.onclick = () => editRecord(t);
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = '×';
      remove.dataset.taskAction = 'remove';
      remove.setAttribute('aria-label', 'Apagar ' + t.text);
      remove.onclick = () => mutate(() => request('registros.php', 'DELETE', {
        id: t.id
      }), 'Ação removida.');
      item.append(checkbox, text, edit, remove);
      return item;
    }));
    $('#task-status').textContent = ready ? rows.length ? `${completed} de ${rows.length} ações concluídas.` : 'Seu registro ainda está vazio.' : 'Conecte o banco para criar e editar ações.';
    $('#task-progress').max = rows.length || 1;
    $('#task-progress').value = completed;
    $('#task-progress').hidden = !ready || !rows.length;
    $('#task-filters').hidden = !ready || !rows.length;
    document.querySelectorAll('[data-task-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.taskFilter === filter)));
    $('#task-empty').hidden = !ready || !!visible.length;
    $('#task-empty').textContent = rows.length ? filter === 'done' ? 'As ações concluídas aparecerão aqui. Um passo de cada vez.' : 'Nenhuma ação pendente. Você pode incluir um novo passo quando quiser.' : 'Seu próximo passo pode ser pequeno. Escreva uma ação acima para começar.';
    $('#local-records').hidden = mode !== 'mysql' || !previous.length;
    $('#local-record-count').textContent = previous.length + ' ação(ões) do seu plano pessoal continuam neste navegador. Importe se quiser copiá-las para o registro MySQL desta sessão.';
    controls();
  }

  /* Carrega as ações do modo escolhido, valida o resultado recebido e atualiza a lista exibida. */
  async function loadRows() {
    const body = await request('registros.php');
    if (!Array.isArray(body.registros)) throw new Error('A resposta dos registros não é válida.');
    rows.splice(0, rows.length, ...body.registros);
    render();
  }

  /* Acompanha uma alteração do início ao fim, mostra falhas reais e libera os controles mesmo quando o pedido dá erro. */
  async function mutate(action, message) {
    if (busy || !ready) return false;
    const origin = document.activeElement,
      task = origin?.closest('#tasks li'),
      actionName = origin?.dataset.taskAction;
    const nextTask = task?.nextElementSibling?.dataset.taskId || task?.previousElementSibling?.dataset.taskId;
    busy = true;
    controls();
    status('Salvando alteração…', false, true);
    try {
      await action();
      await loadRows();
      status(message + (mode === 'local' ? ' Plano guardado neste navegador.' : ' Dados guardados no MySQL desta sessão.'));
      return true;
    } catch (error) {
      status(error.message, true);
      render();
      return false;
    } finally {
      busy = false;
      controls();
      if (task && !$('#modal').open) {
        const find = id => id ? document.querySelector('[data-task-id="' + CSS.escape(id) + '"] [data-task-action="' + actionName + '"]') : null;
        (find(task.dataset.taskId) || find(nextTask) || $('#task')).focus({
          preventScroll: true
        });
      }
    }
  }

  /* Abre o plano pessoal ou verifica o banco da sessão atual. Falhas de PHP ou MySQL não são apresentadas como sucesso. */
  async function connect() {
    if (busy) return;
    ready = false;
    busy = true;
    controls();
    status(mode === 'local' ? 'Abrindo seu plano pessoal…' : 'Conectando os registros…', false, true);
    $('#database-install').hidden = true;
    try {
      if (mode === 'local') {
        await loadRows();
        ready = true;
        status('Plano pessoal salvo apenas neste navegador.');
        return;
      }
      if (!/^https?:$/.test(location.protocol)) throw new Error('Para salvar no banco, abra o site no XAMPP ou em uma hospedagem com PHP e MySQL.');
      await request('status.php');
      await loadRows();
      ready = true;
      status('Conectado. As ações ficam no MySQL e são visíveis apenas nesta sessão do navegador.');
    } catch (error) {
      status(error.message, true);
      $('#database-install').hidden = error.code !== 'schema_missing' || error.details?.setupAllowed !== true;
    } finally {
      busy = false;
      render();
    }
  }

  /* Abre a edição de uma ação, confere seu tamanho e só confirma a mudança depois de salvar. */
  function editRecord(t) {
    const form = document.createElement('form'),
      label = document.createElement('label'),
      input = document.createElement('input'),
      save = document.createElement('button'),
      feedback = document.createElement('p');
    label.textContent = 'Editar ação';
    input.value = t.text;
    input.maxLength = 160;
    input.required = true;
    label.append(input);
    save.type = 'submit';
    save.className = 'button primary';
    save.textContent = 'Salvar';
    feedback.setAttribute('role', 'status');
    form.append(label, save, feedback);
    form.onsubmit = async e => {
      e.preventDefault();
      if (!input.value.trim() || busy) return;
      input.disabled = true;
      save.disabled = true;
      const ok = await mutate(() => request('registros.php', 'PUT', {
        id: t.id,
        text: input.value.trim()
      }), 'Ação editada.');
      if (ok) $('#modal').close();else {
        input.disabled = false;
        save.disabled = false;
        feedback.textContent = $('#database-status').textContent;
      }
    };
    hooks.openModal(form);
  }

  /* Liga o formulário, os filtros, a exportação e a escolha de armazenamento aos controles da página. O registro do jogo continua separado. */
  function init(options) {
    hooks = options;
    $('#record-storage').value = mode;
    $('#record-storage').addEventListener('change', () => {
      mode = $('#record-storage').value === 'mysql' ? 'mysql' : 'local';
      try {
        localStorage.setItem('sentia-record-mode', mode);
      } catch {}
      previous = personal.map(t => ({
        ...t
      }));
      rows.splice(0, rows.length);
      void connect();
    });

    /* O envio cria uma ação com identificador próprio. A lista só muda após a operação do armazenamento escolhido terminar. */
    $('#task-form').onsubmit = async e => {
      e.preventDefault();
      const text = $('#task').value.trim();
      if (!text || busy || !ready) return;
      const id = window.crypto?.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2);
      if (await mutate(() => request('registros.php', 'POST', {
        id,
        text,
        done: false
      }), 'Ação adicionada.')) {
        filter = 'all';
        render();
        $('#task-form').reset();
        hooks.onDiscover();
        $('#task').focus();
      }
    };
    document.querySelectorAll('[data-task-filter]').forEach(button => button.addEventListener('click', () => {
      filter = button.dataset.taskFilter;
      render();
    }));

    /* A limpeza exige confirmação e vale apenas para as ações do modo atual. */
    $('#clear-tasks').onclick = () => {
      if (rows.length && confirm(mode === 'local' ? 'Apagar todas as ações do seu plano neste navegador?' : 'Apagar todas as ações MySQL desta sessão?')) void mutate(() => request('registros.php', 'DELETE', {
        all: true
      }), 'Registro limpo.');
    };

    /* A exportação monta um arquivo de texto no navegador e libera seu endereço temporário depois do download. */
    $('#download-tasks').onclick = () => {
      const data = ready ? rows : previous,
        text = 'MEU REGISTRO · SENTIA\n\n' + data.map(t => (t.done ? '[x] ' : '[ ] ') + t.text).join('\n');
      const url = URL.createObjectURL(new Blob([text], {
          type: 'text/plain;charset=utf-8'
        })),
        link = document.createElement('a');
      link.href = url;
      link.download = 'meu-registro-sentia.txt';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    /* A conexão verifica a sessão MySQL atual antes de habilitar os controles do registro. */
    $('#database-connect').onclick = connect;

    /* Este controle solicita a preparação local do banco. Na hospedagem pública a instalação deve ser feita pelo painel e pelo SQL. */
    $('#database-install').onclick = async () => {
      if (busy || mode !== 'mysql') return;
      busy = true;
      controls();
      status('Preparando o banco local…');
      try {
        await request('instalar.php', 'POST', {});
        busy = false;
        await connect();
      } catch (error) {
        busy = false;
        status(error.message, true);
        controls();
      }
    };

    /* A importação é explícita e mantém a cópia local. Identificadores já existentes não criam tarefas duplicadas. */
    $('#import-old-records').onclick = () => mutate(async () => {
      const existing = new Set(rows.map(t => t.id));
      for (const t of previous) {
        if (existing.has(t.id)) continue;
        try {
          await request('registros.php', 'POST', {
            id: t.id,
            text: t.text,
            done: !!t.done
          });
        } catch (error) {
          if (error.code !== 'id_exists') throw error;
        }
      }
    }, 'Importação concluída. A cópia antiga foi mantida no navegador.');
    render();
    void connect();
  }
  return Object.freeze({
    init
  });
})();
