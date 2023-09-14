//Tipo de dado
//booleanos

//conversão implícita: Converte um tipo de dado em outro.******************************
const numero = 456;
//const numeroString = "456";
const numeroString = Number("456");

console.log(numero === numeroString);
console.log(numero === numeroString);
console.log(numero == numeroString); //converte o numero em String implicita.(==)Compara semelhança e não o tipo. (===)Compara tudo inclusive o tipo.

console.log(numero + numeroString); // transforma em String e o (+) passou a ser uma concatenação.

//conversão explícita *****************************************************************

//função
//Number()
//String()
//const numeroString = Number("456");
//console.log(numero + Number(numeroString));
console.log(numero + numeroString);
