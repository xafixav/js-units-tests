/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const corrigeResultado = (number) => {
  let resultado = 0;
  let calculo1 = Math.abs(number);
  let calculo2 = Math.floor(calculo1) + number;
if (number > 0) {
  resultado = Math.floor(number);
} else if (calculo2 < -0.5) {
  resultado = Math.floor(number);
} else if (calculo2 > -0.5) {
  resultado = Math.ceil(number);
}
return (resultado);
};

const average = (arr) => {
  let soma = arr[0];
  let divide = soma / arr.length;
   for (let i = 1; i < arr.length; i += 1) {
    if (typeof (arr[i]) !== 'number') {
      return (undefined);
    }
    soma += arr[i];
    divide = soma / arr.length;
}
let resultado = corrigeResultado(divide);
if (Number.isNaN(resultado) === true) {
  resultado = undefined;
} else if (typeof (soma) !== 'number') {
  return (undefined);
}
return (resultado);
};

module.exports = average;