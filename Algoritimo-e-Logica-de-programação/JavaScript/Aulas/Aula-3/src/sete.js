//exercicio 7

let maior = null;// Inicializa a variável para armazenar o maior número
let contador = 0;// Inicializa o contador para controlar o número de entradas
while (contador < 5) {// Loop while para solicitar 5 números ao usuário
    let numero = parseInt(prompt("Digite um número inteiro:"));// Solicita ao usuário um número inteiro
    if (maior === null || numero > maior) {// Se for a primeira entrada ou se o número atual for maior que o maior conhecido
        maior = numero;
    }
    contador++;// Incrementa o contador
}
console.log("O maior número dos 5 números inseridos é: " + maior);// Imprime o maior número na tela