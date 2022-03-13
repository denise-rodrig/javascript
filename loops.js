/////////CONDICIONAIS/////////////////
//if/else
let number = 7;
if (number >= 10) {
  console.log(`numero ${number} é maior que 10`);
  //caso a condição for true
} else {
  console.log(`numero ${number} é menor que 10`);
  //caso a condição for false
}

//switch/case
function saboresAcai(sabor) {
  switch (sabor) {
    case 1:
      return "leite ninho";
    case 2:
      return "frutas";
    case 3:
      return "caldas";
    default:
      return "açai puro";
  }
}
console.log(saboresAcai(1));
console.log(saboresAcai(2));
console.log(saboresAcai(3));
console.log(saboresAcai());

//for:loop dentro de elementos iteráveis(arrays,strings)
for (let index = 0; index < 4; index++) {
  console.log(1);
}
//for..in:loop entre propriedades enumeraveis de um objeto.Nesse apresenta as propriedades dos elementos nome e idade
function exemplo(obj) {
  for (prop in obj) {
    console.log(obj[prop]);
  }
}
const objeto = {
  nome: "mara",
  idade: 12
};

exemplo(objeto);

//for...of:loop entre estruturas iteraveis(arrays,strings).Mesmo de for,mas simples
function logLetras(palavras) {
  for (letra of palavras) {
    console.log(letra);
  }
}
const palavras = "eduarda";
logLetras(palavras);
/*e
d
u
a
r
d
a*/

//while:executa instruções até que a condição se torne falsa
let num = 0;
while (num <= 5) {
  console.log(num);
  num++;
}

// do while:executa instruções até que a condição se torne false,porém a primeira execução sempre ocorre

function doWhile() {
  let number = 6;
  do {
    console.log(number);
    number++;
  } while (number <= 5);
}

console.log(doWhile());


for(let i =0;i<10;i++){
  if(i===3){
    continue
  }
  console.log(i)
}

let e=0;
while(e<10){
  console.log(e);
  e++;
}

let name='mayk';
let names=['paulo','joao','mateus'];
for(let nome of name){
  console.log(nome)
}
for (let nome of names){
  console.log(nome)
}

let person={
  name:'maria',
  age:20,
  weigth:56
}
for(let property in person){
  console.log(property)
  console.log(person[property])
  console.log(person.name)
}
