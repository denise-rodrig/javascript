console.log(alert("olha a tabela"));
//document object model:padrão de como acessar e modificar os elementos HTML de uma página.Todos navegores possui.
//browser object model:todo que esta dentro widows(janela) do browser,DOM é um dos filhos(document)

//MÉTODOS PARA SELECIONAR ELEMENTOS DA PÁGINA///////////////
document.getElementById("header");
//<h2 id='header'> titulo</h2>
document.getElementsByTagName("p");
//<p>o paragrafo esta aqui</p> retorna uma array
document.getElementsByClassName("header2");
//<h3 class='header2'> titulo 2</h3>

document.querySelectorAll(".class-primeira .segunda-class");
document.querySelectorAll("li.opcao");

/*<div class='class-primeira segunda-class'>
  <ul>
    <li class='opcao'> opçao 1</li>
  </ul>
</div>*/

//busca personalizada
