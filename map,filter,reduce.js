/*======METODOS PARA ARRAY===========
METODO MAP:FUNCTION DE MAP CRIA UM NOVO ARRAY MAS NÃO MODIFICA A ARRAY ORIGINAL.o RETURN DESSA FUNÇÃO É UM NOVO ARRAY,REALIZANDO OPERAÇÕES EM ORDEM PARA CADA ELEMENTO DA ARRAY.
  ARRAY.MAP(CALLBACK,THISARG)
 CALLBACK:FUNÇÃO A SER EXECUCADA EM CADA ELEMENTO,COM ACESSO AO ITEM,A INDEX E A ARRAY ORIGINAL.
 THISARG: VALOR DE 'THIS' DENTRO DA FUNÇÃO DE CALLBACK. É OPCIONAL
 
 
 MAP OU forEach? O ULTIMO NÃO RETORNA ARRAY,MAS UNDERFIND

*/
const maca={
  value:2,
};
function mapComThis(array, thisArg){
  return array.map(function(itens){
     return itens * this.value;
  }, thisArg);
}
array=[1,2];
console.log(mapComThis(array,maca));

function map(arr){
  return arr.map(function(item){
          return item * 2
 });
}
const nums=[1,2,3];
console.log(map(nums));
/*
FILTER:COMO COLOCAR UMA ARRAY DENTRO DE UM FILTRO,QUE POSSUI UMA CONDIÇÃO DE FILTRO
  ARRAY.FILTER(CALLBACK,THISARG)
 DESSE CASO CALLBACK PODE SER UMA CONDIÇÃO E THIS MANIPULAR AS OPERAÇÕES DOS ELEMENTOS.TAMBEM RETORNA UMA OVA ARRAY
*/
function filtraPares(array){
  return array.filter(callback)
}
function callback(item){
  return item % 2 === 0;
}
const meuArray=[1,23,55,67,30,2,4];
console.log(filtraPares(meuArray));
/*
REDUCE:NÃO RETORNA UM NOVO ARRAY MAS EXECUTA UMA FUNÇÃO EM TODOS OS ELEMENTOS DO ARRAY,RETORNANDO UM VAOR ÚNICO.
  ARRAY.REDUCE(CALLBACKFN,INITIALVALUE)
 CALLBACK:FUNÇÃO A SER EXECUTADA A PARTIR DO ACUMULADOR.
 INITALVALUE:VALOR SOBRE O QUAL O RETORNO FINAL IRÁ ATUAR,OPCIONAL
 
  DENTRO DA CALLBACKFN:TEM FUNCTION (ACUMULADOR,CURRENTVALUE{VALOR ATUALACESSADO PELA FUNÇÃO},INDEX{DO VALOR ATUAL},ARRAY ORIGINAL)
    ACUMULADOR/prevValue: ACUMULADOR DE TODAS AS CHAMADAS DE CALLBACKFN
*/

function somaNumero(arr){
 return arr.reduce(function(prev,current){
    return prev + current;
  })
}
//================
const arr=[1,2];
console.log(somaNumero(arr));

const lista=[
  {
    nome:'sabao em po',
    preco:30,
  },
  {
    nome:'cereal',
    preco:12,
  },
];
const saldo=100;

function calculaSaldo(saldo,lista){
  return lista.reduce(function(prev,current){
    return prev - current.preco;
  },saldo)
}

console.log(calculaSaldo(saldo,lista));
