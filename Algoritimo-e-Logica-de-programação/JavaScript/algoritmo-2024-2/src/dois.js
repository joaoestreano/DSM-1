console.log("Exercício 2");

// importa a função txtToArray do arquivo
const txtToArray = require("./loadLivros");

// chama a função txtToArray
const livros = txtToArray();

// função que lista as disciplinas
function listarDisciplinasPorLivro(nomeLivro) {
    let encontrou = false; 

    // loop para percorrer todos os livros
    for (let i = 0; i < livros.length; i++) {
        // verifica se o título do livro corresponde 
        if (livros[i].titulo.toLowerCase() === nomeLivro.toLowerCase()) {

            if (!encontrou) {
                console.log(`Disciplinas que utilizam o livro "${livros[i].titulo}":`);
                encontrou = true;  // marca que encontrou pelo menos um
            }
             // Exibe o nome da disciplina
            console.log(`- Disciplina: ${livros[i].disciplina}`);
        }
    }
// se nenhuma disciplina for encontrada
    if (!encontrou) {
        console.log(`Nenhuma disciplina encontrou o livro "${nomeLivro}".`);
    }
}

// pega o nome do livro a partir do argumento
const nomeLivro = process.argv[2]; 

// verifica o nome do livro
if (nomeLivro) {
    listarDisciplinasPorLivro(nomeLivro);
} else {
    console.log('Por favor, informe o nome de um livro.');
}