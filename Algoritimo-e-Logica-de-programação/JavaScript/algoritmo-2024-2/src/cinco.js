console.log("Exercício 5");

const txtToArray = require("./loadLivros");

// chama a função txtToArray e armazena os livros na variável 'livros'
const livros = txtToArray();

// verifica se há livros
if (livros.length === 0) {
  console.log("Nenhum livro encontrado.");
  process.exit(1);
}

// encontra o livro com título mais curto
let livroMenorTitulo = livros[0];

for (let i = 1; i < livros.length; i++) {
  const livro = livros[i];
  if (livro.titulo.length < livroMenorTitulo.titulo.length) {
    livroMenorTitulo = livro; // Atualiza a variável caso um livro com título menor seja encontrado
  }
}

// exibe os dados do livro com o título mais curto
console.log("Livro com o título mais curto:");
console.log(`Título: ${livroMenorTitulo.titulo}`);
console.log(`Autor: ${livroMenorTitulo.autor}`);
console.log(`Disciplina: ${livroMenorTitulo.disciplina}`);
console.log(`Editora: ${livroMenorTitulo.editora}`);
console.log(`Ano: ${livroMenorTitulo.ano}`);
