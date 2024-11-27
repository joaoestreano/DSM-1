console.log("Exercício 3");

const txtToArray = require("./loadLivros");

// pega o terceiro argumento passado
const parteNomeAutor = process.argv[2];

// verificando a parte do nome
if (!parteNomeAutor) {
  console.log("Por favor, forneça uma parte do nome do autor.");
  process.exit(1);
}

// carrega os livros
const livros = txtToArray();

// filtra os livros por autor
const livrosFiltrados = livros.filter(livro =>
  livro.autor.toLowerCase().includes(parteNomeAutor.toLowerCase())
);

// verifica se encontrou algum livro
if (livrosFiltrados.length === 0) {
  console.log(`Nenhum livro encontrado para o autor contendo "${parteNomeAutor}".`);
} else {
  console.log(`Livros encontrados para o autor contendo "${parteNomeAutor}":`);
  
  // substituindo forEach por um loop for tradicional
  for (let i = 0; i < livrosFiltrados.length; i++) {
    const livro = livrosFiltrados[i];
    console.log(`${i + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
  }
}
