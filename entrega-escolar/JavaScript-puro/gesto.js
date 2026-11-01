'use strict';
// A comparação é local e não envia o texto digitado para nenhum serviço.
window.GESTO = {
  accepts(text) {
    const value = text.trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
    let hash = 2166136261;
    for (const c of value) hash = Math.imul(hash ^ c.charCodeAt(0), 16777619) >>> 0;
    return hash === 4020425844;
  }
};
