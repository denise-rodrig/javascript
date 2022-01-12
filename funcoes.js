//função anônima,a variavel recebe a função
const soma = function (a, b) {
  return a + b;
};
console.log(soma(2, 2));

//função autoinvocável(IIFF-immediately invoked function expression),é uma função anônima entre parênteses,seguida por outro par de parênteses que chama a função.

const soma2 = (function (c, d) {
  return c + d;
})(1, 2);
console.log(`resultado é ${soma2}`);

//função callbacks,é uma função passada como argumento para outra
const calculado = function (soma3) {
  return `${soma3} esta ok`;
};
function soma3(n1, n2) {
  let cal = n1 + n2;
  return cal;
}
console.log(soma3(6, 6));
console.log(calculado(soma3(6, 6)));

//arguments é uma array com todos os parâmetros passados quando a função foi invocada.
function showArguments() {
  return arguments;
}
console.log(showArguments(2, 3, [34, 4, 2], "olá"));
