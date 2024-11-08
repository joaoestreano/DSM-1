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