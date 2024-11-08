//exemplo
dia=prompt("Insira o dia")
if(dia=="domingo"){
    console.log("zero");
}
else{
    if(dia=="segunda"){
        console.log("um");
    }
    else{
        if(dia=="terça"){
        console.log("dois");
        }
         else{
            if(dia=="quarta"){
            console.log("tres");
        }
         else{
            if(dia=="quinta"){
                console.log("quartro");
            }
            else{
                console.log("resto");
            }
         }
        }
    }
}

//exemplo
dia=prompt("Insira o dia")
switch(dia){
    case "domingo": console.log("zero"); break;
    case "segunda": console.log("um"); break;
    case "terça": console.log("dois"); break;
    case "quarta": console.log("tres"); break;
    case "quinta": console.log("quatro"); break;
    default: console.log("fim");
}
console.log("fim");

//exemplo
fruta=prompt("Insira nome da fruta");
switch(fruta) {
    case "laranja": console.log("R$3,50"); break;
    case "limão": console.log("R$3,00"); break;
    case "acerola": console.log("R$3,50"); break;
    case "manga": console.log("R$4,00"); break;
    case "melancia": console.log("R$4,00"); break;
    case "morango": console.log("R$5,00"); break;
    case "maracujá": console.log("R$4,50"); break;
    case "açaí": console.log("R$6,00"); break;
    default: console.log("Não temos esse suco");
}
console.log("fim");

//exercicio 1
let numero = 10;
while (numero <= 20) {// Inicia o loop while
    console.log(numero);// Imprime o número atual
    numero++;// Incrementa a variável
}

//esboço
menor=prompt("entre com o numero")
maior=prompt("entre com o numero")
menor=parseInt(menor)
maior=parseInt(maior)
if(maior<menor){ 
    aux=menor
    menor=maior
    maior=aux
}
console.log("Menor valor:", menor);
    console.log("Maior valor:", maior);

//Exercicio 2 e 3
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
let start = Math.min(num1, num2);// Verifica qual número é menor e qual é maior
let end = Math.max(num1, num2);
for (let i = start; i <= end; i++) {// Imprime todos os números no intervalo
    console.log(i);
}

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

//exercicio 8 Função para verificar a senha

function verificarSenha() {
    const senhaCorreta = "abc";
    let senhaUsuario;
    // Loop para pedir a senha até que a correta seja fornecida
    while (true) {
        senhaUsuario = prompt("Digite a senha:");// Pede para o usuário entrar com a senha
        if (senhaUsuario === senhaCorreta) {// Verifica se a senha fornecida é a correta
            alert("Senha correta! Acesso concedido.");
            break;  // Sai do loop se a senha estiver correta
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    }
}
verificarSenha();// Chama a função para iniciar o processo

//exercicio 9 Função para verificar a senha com limite de tentativas

function verificarSenha() {
    const senhaCorreta = "abc";
    let senhaUsuario;
    let tentativas = 0; // Contador de tentativas
    const maxTentativas = 3; // Número máximo de tentativas
    while (tentativas < maxTentativas) {// Loop para pedir a senha até que a correta seja fornecida ou o número máximo de tentativas seja alcançado
        // Pede para o usuário entrar com a senha
        senhaUsuario = prompt("Digite a senha:");
        if (senhaUsuario === senhaCorreta) {// Verifica se a senha fornecida é a correta
            alert("Senha correta! Acesso concedido.");
            return;  // Sai da função se a senha estiver correta
        } else {
            tentativas++; // Incrementa o contador de tentativas
            alert("Senha incorreta. Tente novamente. Tentativas restantes: " + (maxTentativas - tentativas));
        }
    }
    alert("Número máximo de tentativas atingido. Acesso negado.");// Mensagem após o número máximo de tentativas
}
verificarSenha();// Chama a função para iniciar o processo

//exercicio 10 

let soma = 0;// Inicializa a variável de soma
function adicionarNumeros() {// Função para solicitar números e acumular a soma
    while (soma < 20) {// Enquanto a soma for menor que 20
        let input = prompt("Digite um número:");// Solicita ao usuário para inserir um número
        let numero = parseFloat(input);// Converte a entrada para um número decimal
        if (isNaN(numero)) {// Verifica se a entrada é um número válido
            alert("Por favor, digite um número válido.");
        } else {           
            soma += numero;// Adiciona o número à soma
            alert(`Soma atual: ${soma}`);// Mostra a soma atual
        }
    }
    alert(`A soma dos números inseridos é ${soma}. O valor 20 foi alcançado ou ultrapassado.`);// Quando a soma atingir ou ultrapassar 20
}
adicionarNumeros();// Chama a função