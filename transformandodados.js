//tranformar string em número e número em string

let string='123';
console.log(Number(string));
let number=321;
console.log(String(number));

// contar quantos caracteres tem uma palavra ou quantos digitos tem um numero
let word = 'paralelepipedo';
console.log(word.length);
let numero=1234;
console.log(String(numero).length);

// transformar numero quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 2339.323943;
console.log(number.toFixed(2).replace('.',',')) //returna uma string

// transformar letras minúsculas em maiúsculas
let word ='Programar é muito bacana!';
console.log(word.toUpperCase())
console.log(word.toLowerCase())
