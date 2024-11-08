//exercicio 8 'imprimir na tela o somatório dos elementos que estão em posições pares'


entrada=prompt("Entre com os numeros separados por vircula:")
nros=entrada.split(",")
soma=0
for(i=0; i< nros.length; i++) {
    if(parseInt(i)%2==0){
        soma+=parseInt(nros[i])
    }
}
console.log("Somatorio:", soma)