//exercicio 5 'imprimir na tela o somatório dos valores fornecidos.'

entrada=prompt("Entre com os numeros separados por vircula:")
nros=entrada.split(",")
soma=0
for(i=0; i< nros.length; i++) {
    soma+=parseInt(nros[i])
}
console.log("Somatorio:",soma)