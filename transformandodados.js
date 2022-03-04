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

/* separe um texto que contem espaços,em um novo array onde cada texto é uma posição do array.
Depois disso transforme o arry em um texto e onde eram espaços coloque - */
let frase = 'eu quero viver o amor';
/*let myArray = frase.split('e') //não irá ixibir letra e
console.log(myArray);
*/
// neste caso separando com espaços
let myArray = frase.split(" ")
console.log(myArray);
// transformar em texto
let texto = myArray.join('_')
console.log(texto)

// verificar se o texto contém a palavra amor
let frase = 'eu quero viver o amor ';
console.log(frase.includes('amor')) // metodo que verifica se existe uma certa palavra na string.

// criar array com construtor
let myArray = new Array(1,1,2,3,4); //os argumentos da function são os elementos da array
console.log(myArray)
let arrayvazia = new Array(10);
console.log(arrayvazia) //vazia com 10 espaços em branco

// contar elementos de um array
console.log([ 'a','b','c','d'].length)

// transformar uma cadeia de caracteres(string) em elementos de um array
let word = 'manipulação';
console.log(Array.from(word)) // o array é um object disponibilizado pelo js e metodo from que recebe uma string. Nesse caso,cada letra da palavra será um elemento de um array.


let techs = ['html','css','js']; //geral
// adicionar um item no fim do array
techs.push('react');

// adicionar no começo do array
techs.unshift('sql');

// remover do fim
techs.pop();

// remover do começo
techs.shift();

console.log(techs) //geral

// pegar somente alguns elementos do array
console.log(techs.slice(1,3)) // -NÃO FAZ MODIFICAÇÃO- argumento são posição inicial e depois o tamanho,assim busca mais rápido e direto nas posições dos elementos.O 3 é o tamanho do array para pegar todos a partir da posição 1-css.

// remover 1 ou mais items em qualquer posição do array
techs.splice(1,1) // posição do elemento e quantos elementos

// encontrar a posção de um elemento no array
let index = techs.indexOf('css')
console.log(index)
