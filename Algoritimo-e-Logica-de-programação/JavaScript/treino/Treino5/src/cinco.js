function inverte(a){
    invertida='';
    i=a.length-1
    while(i>=0) {
        invertida += a[i];
        i--;
    }
    return invertida;
}

r=inverte("pedro")
console.log("invertido:", r)
r=inverte("Mariana")
console.log("invertido:", r)