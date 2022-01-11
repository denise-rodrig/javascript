//dados tipos primitivos/null e undefined,escritos em letra minuscula
let string = "hello";
console.log(string);
console.log(typeof string);

let number = 2;
console.log(number);
console.log(typeof number);

let boolean = false;
console.log(boolean);
console.log(typeof boolean);
/*
  empty=0 / empty=''/ empty=[] empty={} valores vazios
  quando o valor nulo NULL
  não é declarado,indefinido UNDEFINED
  
*/

//------------------//
//dados tipos compostos
let arrays = [2, 1];
console.log(arrays);
console.log(typeof arrays);

let object = {
  nome: "ana"
};
console.log(object);
console.log(typeof object);

//ATIVIDADE-VERIFICAR UM PALÍNDROMO//
function verificaPalidromo(string) {
  //caso a string seja 0,null,indefined
  if (!string) return "string inexistente"; //sai da função se não continua

  //separar a string em arrays,reverter e junta em string e compara com string inicial//
  return string.split("").reverse().join("") === string;
}
console.log(verificaPalidromo("ovo"));
//resultado true ou false

//ATIVIDADE--PARES
function substituiPares(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("você já é zero");
    } else if (array[i] % 2 === 0) {
      console.log(`substituindo ${array} por 0`);
      array[i] = 0;
    }
  }
  return array;
}
let arr = [1, 3, 4, 6, 89, 33, 23, 90];
console.log(substituiPares(arr));



