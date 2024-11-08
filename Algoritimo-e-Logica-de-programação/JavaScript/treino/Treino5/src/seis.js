function somatorio(n){
    soma=0
    i=n.length-1
    while(i>=0){
        soma+= n[i];
        i--;
    }
    return soma;
}
numero =[8,3,4,7,5]
s=somatorio(numero)
console.log("somatorio:",s)
numero =[3,4,5]
s=somatorio(numero)
console.log("somatorio:",s)