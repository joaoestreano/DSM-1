//esboço
menor=prompt("entre com o numero")
maior=prompt("entre com o numero")
menor=parseInt(menor)
maior=parseInt(maior)
if(maior<menor){ 
    aux=menor
    menor=maior
    maior=aux
}
console.log("Menor valor:", menor);
    console.log("Maior valor:", maior);