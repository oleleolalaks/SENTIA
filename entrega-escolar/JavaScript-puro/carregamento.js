'use strict';

// Se uma pasta ficou fora da extração, explica o problema em vez de deixar a tela quebrada sem aviso.
(() => {
  const failures = [];
  window.addEventListener('error', event => {
    const resource = event.target;
    if (resource instanceof HTMLScriptElement || resource instanceof HTMLLinkElement) {
      failures.push(resource.getAttribute('src') || resource.getAttribute('href'));
    }
  }, true);
  window.addEventListener('load', () => {
    const notice = document.getElementById('loading-help');
    if (!notice) return;
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (!link.sheet) failures.push(link.getAttribute('href'));
    });
    if (!Array.isArray(window.ASSETS)) failures.push('js/assets.js');
    document.querySelectorAll('img[src]').forEach(img => {
      if (img.getAttribute('src') && !img.naturalWidth) failures.push(img.getAttribute('src'));
    });
    if (!failures.length) {
      notice.hidden = true;
      return;
    }
    notice.replaceChildren();
    const title = document.createElement('strong');
    title.textContent = 'Alguns arquivos do SENTIA não carregaram.';
    const instructions = document.createElement('p');
    instructions.textContent = 'Extraia o ZIP inteiro antes de abrir. Use o index.html da pasta Sentia junto das pastas css, js e assets. Abra essa pasta no VS Code para editar; para executar com banco, inicie Apache e MySQL do XAMPP e acesse http://localhost/Sentia/. Não use o HTML-puro de avaliação para executar o site.';
    const detail = document.createElement('p');
    detail.textContent = 'Confira estes arquivos: ' + [...new Set(failures)].join(', ');
    notice.append(title, instructions, detail);
  });
})();
