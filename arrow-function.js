//Declaração de função
function apresentacao(nome) {
  return "Meu nome é " + nome;
}
//Arrow Function
const apresentarArrow = (nome) => "Meu nome é " + nome;

console.log(apresentacao("Rafa"));
console.log(apresentarArrow("Rafa"));

const soma = (num1, num2) => num1 + num2; //Esse caso usamos () pois existem dois parâmetros.

//Arrow Function com + de uma linha de instrução.
//Assim como a Expressão de função, a Arrow function se comporta da mesma forma HOISTING

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "Somente números de 1 à 9";
  } else {
    return num1 + num2;
  }
};

console.log(somaNumerosPequenos(10, 12));
