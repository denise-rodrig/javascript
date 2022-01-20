/*são arquivos javascript que tem a capacidade de exportar e importar informações de outros arquivos do meesmo tipo

uso de módulos ajuda na organização do código,compartilhamento de variáveis em escopos diferentes e explicita as dependências dos arquivos

importa no código,como se estivesse em uma caixa,para outro projeto,código
*/
/*método exportar NAMED EXPORTS,exportar mais de um,separadamente{

export function one(){};
export function two(){};
ou
declare a function e depois exporte
export{
 one,
 two
}
}
*/
/*já o DEFAULT EXPORTS só pode haver um por arquivo,ou seja,só uma parte do arquivo*/

// IMPORT (FUNCTION,VARIÁVEL,CLASSE) FROM './NOMEARQUIVO.JS'; (NAMED)
// IMPORT VALORDEFAULT FROM './NOMEARQUIVO.JS'; (DEFAULT)
// IMPORT (ARQUIVO AS APELIDO)FROM './NOMEARQUIVO.JS'; ====== APELIDO.METODO(); (APELIDO)
// IMPORT * AS INFOS FROM './ARQUIVO'; ====== INFOS.METODO(); CONSOLE.LOG(INFOS.VARIAVEIS); (*TODOS OS ARQUIVOS)

//VINCULANDO AO HTML= <SCRIPT TYPE='MODULE' SRC='./MAIN.MJS'.></SCRIPT>

function mostraIdade(nome, idade) {
  console.log(`a idade de ${nome} é ${idade}`);
}
function mostraCidade(nome, cidade) {
  console.log(`a cidade de ${nome} é ${cidade}`);
}
mostraIdade("ana", 2);
mostraCidade("ana", "sp");

export { mostraIdade, mostraCidade };

//depois é só exportar para outro arquivo js
