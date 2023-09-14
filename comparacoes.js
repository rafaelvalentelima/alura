//== (comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero == texto); // o JS fez a conversão do texto para numero e fez a comparação.
console.log(numero === texto); // o JS não faz a conversão, ou seja temos que fazer isso manualmente.

//typeof
//usado para saber qual o tipo esta sendo armazenado na variavel.

console.log(typeof numero);
console.log(typeof texto);

//== Compara só o valor. Existem códigos que ainda usam o ==, mas as boas práticas dizem que não devemos usar, fazer as conversões de maneira explícitas.
//=== Compara o valor e o tipo.

//conversão explícita
Number();
String();
