function inverter(n){
    invertida='';
    i=n.length-1
    while(i>=0) {
        invertida += n[i];
        i--;
    }
    return invertida
}
numeros= [8,3,4,7,5]
s=inverter(numeros)
console.log("lista:",s )

numeros= [5,4,3]
s=inverter(numeros)
console.log("lista:",s)