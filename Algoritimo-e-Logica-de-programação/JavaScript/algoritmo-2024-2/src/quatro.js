console.log("Exercício 4");

const txtToArray = require("./loadLivros");

// chama a função txtToArray e armazena os livros na variável 'livros'
const livros = txtToArray();

// verifica se há livros
if (livros.length === 0) {
  console.log("Nenhum livro encontrado.");
  process.exit(1);
}

// encontra o livro com título mais extenso
let livroMaisExtenso = livros[0];

for (let i = 1; i < livros.length; i++) {
  const livro = livros[i];
  if (livro.titulo.length > livroMaisExtenso.titulo.length) {
    livroMaisExtenso = livro; // Atualiza a variável caso um livro com título maior seja encontrado
  }
}

// exibe os dados do livro mais extenso
console.log("Livro com o título mais extenso:");
console.log(`Título: ${livroMaisExtenso.titulo}`);
console.log(`Autor: ${livroMaisExtenso.autor}`);
console.log(`Disciplina: ${livroMaisExtenso.disciplina}`);
console.log(`Editora: ${livroMaisExtenso.editora}`);
console.log(`Ano: ${livroMaisExtenso.ano}`);
