/* As duas áreas do site usam a mesma API PHP. O Jardim continua separado do banco. */
'use strict';

window.SentiaAPI = (() => {
  let csrfToken = '';
  let sessionRequest = null;
  const endpoints = new Set(['sessao.php', 'status.php', 'registros.php', 'contatos.php', 'instalar.php']);

  // O token fica só na memória. A sessão usa o cookie protegido que o PHP prepara.
  async function session(refresh = false) {
    if (refresh) csrfToken = '';
    if (csrfToken) return csrfToken;
    if (!sessionRequest) {
      sessionRequest = send('sessao.php', 'GET').then(body => {
        if (!/^[a-f0-9]{64}$/.test(body.csrfToken || '')) throw new Error('O servidor não preparou a sessão. Recarregue a página.');
        csrfToken = body.csrfToken;
        return csrfToken;
      }).finally(() => { sessionRequest = null; });
    }
    return sessionRequest;
  }

  // A consulta só aceita endereços da nossa pasta api. Erros nunca viram sucesso fictício.
  async function send(path, method, data, token = '') {
    if (!endpoints.has(path)) throw new Error('Endereço da API não reconhecido.');
    if (!/^https?:$/.test(location.protocol)) throw new Error('Para gravar no banco, abra o site no XAMPP ou em uma hospedagem com PHP e MySQL.');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const headers = { Accept: 'application/json' };
    if (data !== undefined) headers['Content-Type'] = 'application/json';
    if (token) headers['X-Sentia-CSRF'] = token;
    try {
      const response = await fetch(new URL('api/' + path, document.baseURI), {
        method, headers, credentials: 'same-origin', cache: 'no-store', signal: controller.signal,
        ...(data === undefined ? {} : { body: JSON.stringify(data) })
      });
      let body;
      try { body = await response.json(); }
      catch { throw new Error('O servidor não respondeu como API PHP. Use o XAMPP ou a hospedagem PHP e confira a pasta api.'); }
      if (!response.ok || !body.ok) {
        const error = new Error(body.error?.message || 'Não foi possível concluir a operação.');
        error.code = body.error?.code;
        error.status = response.status;
        error.details = body;
        throw error;
      }
      return body;
    } catch (error) {
      if (error.name === 'AbortError') throw new Error('O servidor demorou para responder. Os campos foram mantidos para você tentar novamente.');
      if (error instanceof TypeError) throw new Error('Não foi possível alcançar o servidor. Confira a conexão e tente novamente.');
      throw error;
    } finally { clearTimeout(timeout); }
  }

  async function request(path, method = 'GET', data) {
    const changesData = method !== 'GET';
    let token = changesData ? await session() : '';
    try { return await send(path, method, data, token); }
    catch (error) {
      // Só repetimos uma rejeição de token, pois o servidor ainda não gravou nada nesse caso.
      if (!changesData || error.status !== 403 || error.code !== 'csrf_invalid') throw error;
      token = await session(true);
      return send(path, method, data, token);
    }
  }

  return Object.freeze({ request });
})();
