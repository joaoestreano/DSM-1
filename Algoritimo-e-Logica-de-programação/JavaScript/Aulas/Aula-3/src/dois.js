//Exercicio 2 e 3
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
let start = Math.min(num1, num2);// Verifica qual número é menor e qual é maior
let end = Math.max(num1, num2);
for (let i = start; i <= end; i++) {// Imprime todos os números no intervalo
    console.log(i);
}
