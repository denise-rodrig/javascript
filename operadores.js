//objetivo é comparar numeros e se a soma é igual a 10 ou menor que 20

//função principal
function comparaNumeros(num1, num2) {
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}
//função de comparar se são iguais e criar frase
function criaPrimeiraFrase(num1, num2) {
  let saoIguais = "";
  if (num1 !== num2) {
    saoIguais = "não";
  }
  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

//somar e comparar resultados
function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  let resultado10 = "menor";
  let resultado20 = "menor";
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = "maior";
  }
  if (compara20) {
    resultado20 = "maior";
  }
  return `Sua soma é ${soma},que é ${resultado10} que 10 e ${resultado20} que 20`;
}
console.log(comparaNumeros(2, 2));
