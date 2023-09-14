// let x = "";
// console.log(x);
// x = "oi";

// 1) declara a função
//string
function imprimaTexto(texto) {
  //Função do tipo DECLARAÇÃO DE FUNÇÃO.
  console.log(texto);
}

// 2) executa a função (1 ou + vezes)

// imprimaTexto("oi");
// imprimaTexto("outro texto");
imprimaTexto(soma());
// três formas de escrever as funções'

function soma() {
  //outros códigos
  return 2 + 2; // tem que ser a ultima linha antes de fechar o bloco da função;
}

console.log(soma());
