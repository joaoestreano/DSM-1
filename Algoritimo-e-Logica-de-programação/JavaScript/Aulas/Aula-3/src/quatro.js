//Exercicio 4
let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
let start = Math.min(num1, num2);// Verifica qual número é menor e qual é maior usando Math.min e Math.max
let end = Math.max(num1, num2);
let somatorio = 0;// Inicializa a variável para armazenar o somatório
for (let i = start; i <= end; i++) {// Calcula o somatório dos números no intervalo
    somatorio += i;
}
console.log("O somatório dos números no intervalo é: " + somatorio);