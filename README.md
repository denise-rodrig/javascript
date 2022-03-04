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

//----------------//
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
~~~javascript
//declaração
function criarFrases(){
  console.log('aprender é otimo');
  console.log('paciência e persistência');
  console.log('revisão é mãe do aprendizado');
}
//chamar a função
criarFrases();
~~~
Pode usar elas dentro de variaveis,estas funções são chamadas de anônimas;
~~~javascript
// parâmetros
const sum = function(numero1,numero2){
  console.log(numero1+numero2);
};
//argumentos
sum(2,2);
~~~
Function Hoisting: primeiro executa/chama a função logo após cria a função.Acontece o hosting.
~~~javascript
myname();
function myname(){
  console.log('Mayk');
}
~~~
Arrow Function: não necessariamente usando com uma variável.Também não ocorre hosting.
~~~javascript
const myname = () => {
  console.log('Mayk');
}
myname();
~~~
Callback Function: simplesmente é uma função sendo passada em parâmetro para outra função.
~~~javascript
function myname(name){
  console.log('antes do callback');
  console.log(name);
  name();
  console.log('depois do callback');
}
myname(
  () => {
    console.log('Mayk');
  })
~~~
Função Construtura/Constructor: é um jeito de fazer um novo objeto com função e a expressão ***New*** (cria o object) e uso do ***This*** (cria a estrutura do object,como forma de boa prática)
~~~javascript
function pessoa(nome){
  this.nome=nome //Este(this) nome recebe o nome enviado por parâmetro.
}
const mayk = new pessoa('mayk') // nova pessoa parâmetro 'mayk'
const joao = new pessoa('joao') // nova pessoa parâmetro 'joao'


console.log(mayk); //resultado object
console.log(joao);
~~~
## Manipulando Dados
Prototype pode ser dizer que são funcionalidades próprias do js,existindo a cadeia de prototipo.
<div>
![Captura de tela 2022-03-04 104951](https://user-images.githubusercontent.com/80164486/156775116-4f9469d5-8c94-49ff-9896-3bd6f2c8ad8b.png)
![Captura de tela 2022-03-04 104858](https://user-images.githubusercontent.com/80164486/156775122-8beb2761-30f7-44e1-b2fc-93d5505c6d6a.png)
</div>
#### Alterando tipo de dado para outro
Type conversion/typecasting vs Type coersion
Type coersion:
~~~javascript
console.log('9'+5); //transforma 5 em string automaticamente
~~~
Type conversion:
~~~javascript
console.log(Number('9')+5); //transforma 9 em number feito pelo dev
~~~
