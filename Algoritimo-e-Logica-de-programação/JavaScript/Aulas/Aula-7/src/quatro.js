//exercicio 4 'pede para o usuário entrar com algun snúmeros separados por vírgula e 
//imprimir na tela os números fornecidos pelo usuário.
entrada=prompt("Entre com os numeros separados por vircula:")
nros=entrada.split(",")
for(i=0; i< nros.length; i++) {
    console.log(nros[i])
}