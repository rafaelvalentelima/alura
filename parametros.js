//parâmetros de função
function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 22));
console.log(soma(314, 233));

//ordem dos parametros

function nomeIdade(nome, idade) {
  return "Meu nome é " + nome + " e minha idade é " + idade;
}

console.log(nomeIdade("Rafael", 40));

function multiplica(num1 = 1, num2 = 2) {
  // caso esqueca de colocar o parametro ele terá um valor padrão, para não dar o erro NaN
  return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 5)));
console.log(multiplica(soma(4, 5)));
