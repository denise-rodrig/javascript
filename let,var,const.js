var numberOne = 1;
console.log(numberOne + 2);

//-----------------//
/*var globais*/
var firstName = "Maria";
var lastName = "Souza";

if (firstName === "Maria") {
  var firstName = "Ana";
  let lastName = "Silva"; //escopo de bloco
}
//resultado 'ana' 'souza' ja que reatribui a variavel firstName e criei uma let com o mesmo nome lastName
console.log(firstName, lastName);

//------------------//
/*const declaradas em SNAKE_UPPER_CASE e escopo de bloco,não faz hoisting*/
const FIRST_NAME = "SOFIA";
console.log(FIRST_NAME);
