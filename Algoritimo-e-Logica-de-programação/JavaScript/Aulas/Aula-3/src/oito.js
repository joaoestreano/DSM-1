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