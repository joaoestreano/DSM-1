function inverter(n){
    p= n.length-1
    i=n.length-1
    while(i>=0) {
        console.log(p,":", n[i])
        i--
        p--
    }
}
console.log("lista:")
numeros= [8,3,4,7,5]
inverter(numeros)

console.log("lista:")
numeros= [5,4,3]
inverter(numeros)