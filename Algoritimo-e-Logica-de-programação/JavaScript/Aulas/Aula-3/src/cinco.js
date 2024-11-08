//Exercicio 5
let somatorio = 0;// Inicializa a variável para armazenar o somatório
let contador = 0;// Inicializa o contador para controlar o número de entradas
// Loop while para solicitar 5 números ao usuário
while (contador < 5) {
    let numero = parseInt(prompt("Digite um número inteiro:"));// Solicita ao usuário um número inteiro
    somatorio += numero;// Adiciona o número ao somatório
    contador++;// Incrementa o contador
}
console.log("O somatório dos 5 números é: " + somatorio);
