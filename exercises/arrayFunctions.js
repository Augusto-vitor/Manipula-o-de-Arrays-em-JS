function dobrarValores(array) {
 return array.map(elemento => elemento * 2);
}

function filtrarPares(array) {
 return array.filter(valor => valor % 2 === 0);
}

function somarElementos(array) {
return array.reduce((soma, valor) => soma + valor, 0);
}

function reverterArray(array) {
return array.slice().reverse();
}

function removerDuplicados(array) {
return [...new Set(array)];
}

function concatenarArrays(array1, array2) {
return array1.concat(array2);
}

function maiorNumero(array) {
return Math.max(...array);
}

module.exports = {
  dobrarValores,
  filtrarPares,
  somarElementos,
  reverterArray,
  removerDuplicados,
  concatenarArrays,
  maiorNumero,
};
