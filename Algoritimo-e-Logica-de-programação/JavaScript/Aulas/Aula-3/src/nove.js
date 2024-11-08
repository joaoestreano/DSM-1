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