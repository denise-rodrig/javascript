//SPREAD: tecnica de lidar separadamente os elementos da array.Uso quando chama função
function sum(x, y, z) {
  return x + y + z; //soma dos elementos da array
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //três pontos é a tecnica

//REST: o que era um elemento independente se torna parte de uma array.Uso quando declara a função
//pega todos os argumentos e console o tamanho total
function confereTam(...args) {
  console.log("tamanho é " + args.length);
}
confereTam(1, 2, 3);

//OBJECT DESTRUCTURING: entre chaves podemos filtrar apenas dados que nos interessam em um objet
//object usuário
const user = {
  id: 32,
  name: "beck"
};
//buscar so id do object user
function userId({ id }) {
  console.log("id do usuário é " + id);
}
userId(user);
