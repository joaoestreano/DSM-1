//Exercicio 2 'imprimir na tela somente as letras que estão em posições pares'

nome=prompt("Entre com o nome:")
for( i=0;i<nome.length; i+=2 ){
    console.log(nome[i])
}
//ou...
nome=prompt("Entre com o nome:")
for( i=0;i<nome.length; i+=2 ){
    if(i%2==0){
        console.log(nome[i])
    }
}