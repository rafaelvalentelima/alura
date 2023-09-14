const idadeMinima = 18;
//const idadeCliente = 16;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima) {
//   console.log("pode beber cerveja");
// } else {
//   console.log("Só pode beber agua ou suco");
// } //Todo esse código pode ser substituido pelo operador ternário, usando menos código.

console.log(
  idadeCliente >= idadeMinima
    ? "Só pode beber agua ou suco" //Depois da "?" vem o IF e depois o ELSE entre as aspas, tornando o código mais limpo.
    : "Só pode beber agua ou suco"
);

//Dica de boas práticas, caso o código tenha várias finções dentro de condições, faça com o IF que fica mais fácil de dar manutenção.
//Use apenas em comparações curtas.
