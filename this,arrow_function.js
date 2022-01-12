//this é uma palavra reservada para referência de contexto
//quando objeto possui dentro uma função,vira se um metodo.

//exemplo,this refese se ao objeto pessoa
const pessoa = {
  id: 1,
  name: "julia",
  nameS: function () {
    console.log(this.name); //quando this esta dentro de uma objeto,se refere ao objeto
    console.log(this.id);
  }
};
pessoa.nameS(); //chamando const e propriedade com  a funcão

/*mudando referencia do this:CALL
  nomeFunctionEx Call(nomeObject); ou  
    nomeFunctionEX.call(nomeVar,novos,valores);
*/

/*mesma coisa do call,APPLY. so mudando quando altera os argumentos
  nomeFunctionEx.apply(nomeVar [novos,valores]); dentro de umm array
*/

/* BIND:clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
    let a=nomeFFunction.bind({nomeprooObj: 'valor' });
agora let é uma funcao clone da nomeFunction e com nova propriedade e valor passado anteriormente
*/

//ARROW FUNCTIONS//////////////
//sintaxe
//comum
/*const helloWorld= function(){
  return 'hello world';
}
//arrow =>
const helloWorld = () => {
  return 'hello world';
}
//ou
const helloWorld = ()=> 'hello world';*/
const soma = (a, b) => a + b;
console.log(soma(2, 2));
//nao funcioona na arrow functions this,arguments, new meuObjeto()  e tipo da vvariavel, hoisting
