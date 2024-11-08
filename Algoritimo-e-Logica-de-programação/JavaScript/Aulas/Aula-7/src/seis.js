//exercicio 6 'a imprimir na tela somente os elementos que possuem valor par'


entrada=prompt("Entre com os numeros separados por vircula:")
nros=entrada.split(",")
for(i=0; i< nros.length; i++) {
    if(parseInt(nros[i])%2==0){
        console.log(nros[i])
    }
}