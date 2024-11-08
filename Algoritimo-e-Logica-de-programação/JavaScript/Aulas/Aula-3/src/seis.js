//exercicio 6
let menor = null;// Inicializa a variável para armazenar o menor número
let contador = 0;// Inicializa o contador para controlar o número de entradas
while (contador < 5) {// Loop while para solicitar 5 números ao usuário
    let numero = parseInt(prompt("Digite um número inteiro:"));// Solicita ao usuário um número inteiro
    if (menor === null || numero < menor) {// Se for a primeira entrada ou se o número atual for menor que o menor conhecido
        menor = numero;
    }
    contador++;// Incrementa o contador
}
console.log("O menor número dos 5 números inseridos é: " + menor);