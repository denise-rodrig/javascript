//element.classList(lista de classes do elemento)

/*
<div id='meu-element' class='classe'>
  
</div>
*/

const meuElement = document.getElementById("meu-element");

meuElement.classList.add("novo-estilo"); //add nova class ao element
meuElement.classList.remove("classe"); //remove a class=classe
meuElement.classList.toggle("dack"); //se o element ter class dack,então remove,se não adiciona

//mudando o estilo do elemento,acesso direto do css de um elemento
//exemplo,adicionar cor de todos os paragrafos em azul
//document.getElementsByTagName('p').style.color='blue';

//eventos////////////
//tipos de eventos
//mouse: mouseover
//mouseout
//click: click
//dbclick
//atualização: change
// load

//ACIONAR EVENTOS//// Event listener= escutar de eventos.Cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação

const botao = document.getElementById("meuBotao");
botao.addEventListener("click", umaFuncao);
// adiciona um evento ao ser click (tipo,ação)
function umaFuncao() {
  return alert("hello world");
}
const bnt = document.getElementById("bnt");
bnt.addEventListener("click", mudaStyle);

function mudaStyle() {
  bnt.classList.toggle("mode");
}
