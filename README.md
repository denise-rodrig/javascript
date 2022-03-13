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
* [const,let,var](https://github.com/denise-rodrig/javascript/blob/main/let%2Cvar%2Cconst.js)

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
## [Funções](https://github.com/denise-rodrig/javascript/blob/main/funcoes.js)
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

![Captura de tela 2022-03-04 104951](https://user-images.githubusercontent.com/80164486/156775116-4f9469d5-8c94-49ff-9896-3bd6f2c8ad8b.png)
![Captura de tela 2022-03-04 104858](https://user-images.githubusercontent.com/80164486/156775122-8beb2761-30f7-44e1-b2fc-93d5505c6d6a.png)

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
## Expressões e Operadores

expressões é qualquer linha de código do js.Ex: let number;

Operador binário: number + 1

Operador unario: ++ number. Ex:typeof e delete(deletar propriedade dentro do object)

Operador ternario: True ? 'alo' :'nada' // pode ser uma função para a condição anterior

~~~javascript
let pao=true;
let queijo=true;

const cafeBom = pao && queijo ? 'Café top' : 'Café ruim'; //se condição é true então faz.. se não faz...
console.log(cafeBom);
~~~

***NEW*** é uma expressão para criar um novo object
~~~javascript
let date= new Date('2022-12-01');
console.log(date)
~~~

### Operadores Aritiméticos

multiplicação *

divisão /

soma +

subtração -

resto da divisão %

incremento ++ or antes ++ incremento

decremento -- or antes -- decremento

exponencial **

### Operadores que agrupa expressões,que muda a ordem de precedência(muito usando para calculos matematicos)

Ex: let total = (2 + 3 ) * 2; or

let total = 'alo' + 'maria';

### Operadores de comparação

 == igual a... or ===

 != diferente de... or !==

 >maior que... or >=

 <menor quwe... or <=

### Operadores de atribuição (assignment)

~~~javascript
let x;
x=1;
console.log(x);
x += 2; // x = x + 2;
console.log(x);
x -= 1;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 2;
console.log(x)
x **= 2;
console.log(x)
~~~

### Operadores lógicos

2 valores booleanos que quando verificados resultará em verdadeiro ou falso.

AND && se os dois valores for verdadeiro == verdadeiro.O mesmo para falso

OR || se um dos valores for verdadeiro == verdadeiro.Será falso quando os dois forem falsos

NOT ! se um valor for verdadeiro irá ser falso.

## FALSY
quando um valor é considerando false em contextos onde um booleano é obrigatório(condicionais e loops).Sem comparar valores,isso ocorre porque o js transforma em valores booleanos auto.São eles:

false

0

-0

" "

null

underfined

NaN

## TRUTHY
quando um valor é considerado true em contextos onde um booleano é obrigatório(condicionais e loops).Sem comparar valores,isso ocorre porque o js transforma em valores booleanos auto.São eles:

true

{}

[]

1

3.23

"0"

"false"

-1

Infinity

-Infinity

## Precedência de operadores

grouping ()

negação e incremento ! ++ --

multiplicação e divisão * /

adição e subtração + -

relacional < <= > >=

igualdade == != === !===

AND &&

OR ||

condicional ?:

atribuição = += -= *=

## [Condicionais e controle de fluxo](https://github.com/denise-rodrig/javascript/blob/main/condicionais.js)
if...else

switch

## Throw e Try/ Catch
throw é usando para jogar ao catch um possivel erro programado pelo dev e realizado pelo user.Modela esse erro,criando sua descrição.
try irá tentar funcionar o cógigo,geralemente function
e se houver erro o catch pega e retorna o tal erro descrito no throw.

~~~javascript
function name(nome=''){
  if (nome===""){
    throw 'nome é obrigatótio'
  }
  console.log('tudo certo')
}

try{
  name('')
}catch (e){
  console.log(e) //recebe e exibir o erro do throw
}
~~~
## Estruturas de repetição

for(variavel;condição;expressao final){} // enquanto for verdadeiro ocorre o código.Seus dois modos de controle do loop é pela:

- break: parar a execução do loop
- continue: pula a execução do momento

while(condição){} // enquanto for verdadeiro ocorre o código.Mas não possui controles como o ***for***.Usando não sabemos o momento da parada do loop.

for (variaval of variavel externa){} // cria um loop atraves de alguma variavel passada para of.Pode usar array,string,number

for(variavel in object){} // cria um loop por meio de um object,assim visualizar as propriedades e seus atributos.
