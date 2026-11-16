 /* Essa instrução ativa o modo estrito do JavaScript para evitar alguns usos ambíguos.
*/ 'use strict';
                                                                         
 /* Atualiza window.GESTO usando um objeto com os campos dessa parte.
*/ window.GESTO = {
   /* aqui fica a verificação local usada pelo ponto escondido que libera o gesto.
*/ accepts /* esse comando normaliza o texto informado e compara seu resumo numérico com a referência do segredo local. */ (text) {
     /* Essa declaração usa const para preparar value, mantendo essas referências fixas.
*/ const  /* Aqui value recebe o resultado de .to Locale Lower Case.
*/ value =  /* Converte o texto para minúsculas respeitando o idioma indicado. */ text.trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
     /* Essa declaração usa let para preparar hash, permitindo atualizar esses valores depois.
*/ let  /* Aqui hash recebe 2166136261.
*/ hash = 2166136261;
     /* Percorre cada valor de value usando c nesta repetição.
*/ for ( /* Essa declaração usa const para preparar c, mantendo essas referências fixas.
*/ const  /* Aqui c recebe nenhum valor inicial.
*/ c of value)  /* Atualiza hash usando o resultado dessa expressão.
*/ hash =  /* Multiplica os valores usando inteiros de trinta e dois bits. */ Math.imul(hash ^  /* Executa c.char Code At com os valores definidos nessa parte. */ c.charCodeAt(0), 16777619) >>> 0;
     /* Devolve o resultado dessa expressão e encerra essa chamada da função.
*/ return hash === 4020425844;
  }
};
