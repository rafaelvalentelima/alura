const nome = "Rafa";
const idade = 2023 - 1983;
const cidadeDeNascimento = "Ceilândia-DF.";
const apresentacao =
  "meu nome é " +
  nome +
  ", minha idade é " +
  idade +
  " anos e nasci na cidade de " +
  cidadeDeNascimento;

console.log(apresentacao); // Muito código para fazer essa apresentação.

// Agora vamos fazer isso usando a TEMPLETE-STRINGS.
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`; //trocar "" por ``.

console.log(apresentacao2);
