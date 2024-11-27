console.log("Exercício 1");

// importa a função txtToArray do arquivo
const txtToArray = require("./loadLivros");

// chama a função txtToArray para carregar os livros e guardar em uma variável
const livros = txtToArray();

// exibe a quantidade de livros
console.log(`Quantidade de elementos: ${livros.length}`);

// função que lista os livros de uma disciplina
function listarLivrosPorDisciplina(nomeDisciplina) {
    let encontrou = false; // se algum livro da disciplina foi encontrado

    // loop para percorrer todos os livros
    for (let i = 0; i < livros.length; i++) {
        //se o nome diciplina == do livro
        if (livros[i].disciplina.toLowerCase() === nomeDisciplina.toLowerCase()) {
            if (!encontrou) {
                console.log(`Livros da disciplina "${livros[i].disciplina}":`);
                encontrou = true; 
            }
            // exibe os dados do livro
            console.log(`- Título: ${livros[i].titulo}, Autor(es): ${livros[i].autor}, Ano: ${livros[i].ano}`);
        }
    }

    // se nenhum livro for encontrado
    if (!encontrou) {
        console.log(`Nenhum livro encontrado para a disciplina "${nomeDisciplina}".`);
    }
}

const nomeDisciplina = process.argv[2]; // o nome da disciplina está na posição 2 de process.argv

// verifica se o nome da disciplina foi fornecido
if (nomeDisciplina) {
    listarLivrosPorDisciplina(nomeDisciplina);
} else {
    console.log('Por favor, informe o nome de uma disciplina.');
}