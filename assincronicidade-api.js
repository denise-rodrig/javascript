
/*<main>
  <h1>Just...cats"</h1>
  <img id="cat" /> <br />
  <button id="bnt"> Mudar imagem</button>
</main>*/

/*
assincronicidade: algo que não ocorre ou não se efetiva ao mesmo tempo.


Por padrao js ocorre Síncrona:algo ocorre atras do outro.
Já Assincrono:ocorrem algo enquanto outro ocorre tambem.

Promises:objeto de processamento assincrono.Inicialmente,seu valor é desconhecida.Ela pode ser resolvida(.then()) ou rejeitada(catch())
Seu estados são: 1-pending;2-fulfilled(completado);3-rejected(deu errado)

ESTRUTURA
const myPromise = new Promise ((function))
await myPromise
  .then() FUNCTION
  .catch() FUNCTION
  isso é encadeando chamadas de ações da promessa
  
 ASYNC:PALAVRA Q DESCREVE FUNÇÃO ASSINCRONA
 O MESMO PARA AWAIT:QUE PEDE QUE ESPERE A PROMISE SER CONCLUIDA PARA CONTINUAR O CODIGO
 
funções assincronas tambem retorna promises,elas não se return.Pode usar tambem try catch
*/

/*
Consumir API:É uma forma de intermediar os resuldos do back-end com o que é apresentado no front-end.Acessa la por meio de URLs.Elas retornam seus dados no formato .json,portanto precisamos tratar esses dados quando os recebermos.
======FETCH=======
USADO NO CONSUMO
fetch(url,options)
  .then(response => response.json()) //converter para json
  .then(json => console.log(json))
  
retorna promise,por isso usa o await

*/
const BASE_URL = "https://thatcopy.pw/catapi/rest/";

const botao = document.getElementById("bnt");

//function para carregar imgs de gatinhos,assincrona,testado caso tiver erro e converter para json
const getCats = async () => {
  const dados = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return dados.webpurl;
};

const carregarImg = async () => {
  const cat = document.getElementById("cat");
  cat.src = await getCats();
};
bnt.addEventListener("click", carregarImg);
carregarImg();
