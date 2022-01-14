//estrutura map:coleção de arrays no formato [chave,valor];pode ser iterado por loop for of
const myMap = new Map();
/*myMap.set('apple','fruit');//add chave,valor
myMap.delete(apple);*/
//map pode ter valor qualquer,object so string.Possui propriedade length,sao mais faceis de iterar e usado quando o valor das chaves é desconhecido para buscar,os valores tem o mesmo tipo

//set:são estruturas que armazenam apenas valores únicos,que nao se repertem.Diferente de array,consulta o numero de registro pela propriedade size.Não possui os métodos map,filter,reduce etc
const mySet = new Set();
/*mySet.add(1);//add
mySet.has(1);//consultar
mySet.delete(1);//deletar*/

//ATIVIDADES///////////////////////
function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "admin") {
      admins.push(key);
    }
  }
  return admins;
}
const usuarios = new Map();
usuarios.set("luis", "admin");
usuarios.set("ana", "admin");
usuarios.set("joao", "user");

console.log(getAdmins(usuarios));

const myArray = [30, 30, 40, 5, 233, 2049, 5];
function valoresUnicos(array) {
  const mySet = new Set(array);
  return [...mySet];
}
console.log(valoresUnicos(myArray));
