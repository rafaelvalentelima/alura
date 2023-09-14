//Declaração de função
function minhaFuncao(param) {
  //bloco de código
}

minhaFuncao("param");

//Expressão de função.

const soma = function (num1, num2) {
  //não tem o nome dafunção e sim da constante. O nome é opcional mas não é usado
  return num1 + num2;
};
console.log(soma(1, 1));

//Diferença principal ???????? HOISTING
// Funções e var são "Listados" no topo do arquivo.

console.log(apresentar()); //Mesmo estando acima da função, ainda assim roda pois o javascrips executa primeiro as Funçoes e Depois as variáveis. Isso apenas nas Declaração de função.

function apresentar() {
  return "Olá";
}

console.log(soma1);

const soma1 = function (num1, num2) {
  //ReferenceError: Cannot access 'soma1' before initialization. Nesse caso da erro pois ela é uma Expressão de função.
  return num1 + num2;
};
