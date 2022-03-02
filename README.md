# Javascript
O JavaScript atua como um complemento às linguagens HTML, CSS e PHP.É uma das linguagens de programação mais populares e usadas no mundo. Com ela, é possível construir páginas dinâmicas.

- A sintaxe é importante
- Pode ser usada em qualquer navegador,na parte console
- Outra forma usando a ferramenta [CodePen](https://codepen.io/) ou [VS Code](https://code.visualstudio.com/download)
- Comentários são //uma linha ou /* de bloco */

## Tipos de Dados:
- String: cadeias de caracteres;
- Number: números inteiros,reais,NaN e infinity;
- Boolean: true e false;
- Underfined: dado indefinido;
- Null: objeto que não tem nada dentro;
- Object: dado estrutural que possui propriedades/atributos e funcionalidades/metodos;
- Array/Vetores: dado estrutural,uma lista.
##### Primitivos: string,number,boolean,symbol,bigInt
##### Estruturais: Object(array,map,set,date...) e Function;
##### Primitivo Estrutural: null.
~~~javascript
//object
const pessoa = {
  nome:'John',
  idade:30,
  peso:88.6,
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.peso);

//array
const animais = [
  'leão','gato','cão'
]
console.log(animais);
console.log(animais[0]);
console.log(animais[1]);
console.log(animais[2]);
console.log(animais.length);

//--------
const cliente=[
  'maria',
  {
    prato:'prato da casa',
    sobremesa:'sorvete'
  }
]
console.log(cliente[1].prato);
console.log(cliente[1].sobremesa);
~~~

## Variáveis: 
JS é uma linguagem fracamente tipada e dinâmica
* const,let,var

~~~javascript 
//declaração de variável
var name

//atribuição
name ='maria'

//tipo de dado
console.log(typeof name)

//agrupar declarações e atribuições
let age,isHuman;
age=18;
isHuman=true;
console.log(age,isHuman);

//concatenando valores
console.log(name + ' tem '+ age + ' anos');

//interpolando valores com template strings
console.log(`${name} tem ${age} anos`);
~~~
## Funções
Pode usar elas dentro de variaveis,estas funções são chamadas de anônimas;
~~~javascript
//declaração
function criarFrases(){
  console.log('aprender é otimo');
  console.log('paciência e persistência');
  console.log('revisão é mãe do aprendizado');
}
//chamar a função
criarFrases();

// parâmetros
const sum = function(numero1,numero2){
  console.log(numero1+numero2);
};
//argumentos
sum(2,2);
~~~

