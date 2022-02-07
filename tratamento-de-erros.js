/*ECMAScript Error: objeto do js,erros que ocorrem em tempo de execução

Composto por: mensagem,nome do erro,a linha do erro e call stack(pilha de chamadas ate chegar ao erro*/

/*DOMException,erro ou excessao no DOM:tratamento de erros*/
//Como tratar?

/*THROW:trata string como realmente um erro*/
/*Try...Catch:função,dentro  try pedaço de codigo que se encontrar erro,é filtrado,tratado pelo catch 
function exemplo (string){
  try{
    codigo
  }
  catch(erro){
    codigo/throw
  }
  finally{
    codigo
  }
}
finally ocorrem mesmo se tiver erro ou não
*/
//:objeto errro(aceita parametros message,fileName,lineNumber)os ultimosdois não são comuns  todos oa navegadores
//pode ser usaada assim,instanciando uma var
/*
const MeuErro=new Error ('mensagem de erro');
MeuErro.name='nomedesseErro';
MeuErro.stack:mostra pilha de chamadas
throw MeuErro;
*/
//EXERCICIOS:função recebe um array e retorne ele caso o seu tamanho corresponda ao numero enviado como parâmetro

function validaArray(array, number) {
  try {
    //se não receber um array e numero,lance um erro
    if (!array && !number) throw new ReferenceError("Envie os parâmetros");
    //se o array é tipo object
    if (typeof array !== "object")
      throw new TypeError("array precisa ser do tipo object");
    //o mesmo para numero
    if (typeof number !== "number")
      throw new TypeError("number prrecisa ser number");
    //a array tem o mesmo tamanho do parametro number?
    if (array.length !== number) throw new RangeError("Tamanho invalido!");
    //se não tiver erro
    return array;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError");
      console.log(e.message);
    }
  }
}
console.log(validaArray());
