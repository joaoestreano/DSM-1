//exercico 1

const nome = prompt("Digite um nome:");// Solicita ao usuário para inserir um nome
if (nome === null || nome.trim() === "") {// Verifica se o usuário inseriu algo
    alert("Por favor, insira um nome válido.");
} else {   
    const quantidadeCaracteres = nome.length;// Conta o número de caracteres
    alert(`O nome "${nome}" tem ${quantidadeCaracteres} caracteres.`);// Exibe o resultado
}