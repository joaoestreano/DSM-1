//exercicio 7 'imprimir na tela somente os elementos que estão em posições pares'
entrada=prompt("Entre com os numeros separados por vircula:")
nros=entrada.split(",")
for(i=0; i< nros.length; i++) {
    if(parseInt(i)%2==0){
        console.log(nros[i])
    }
}