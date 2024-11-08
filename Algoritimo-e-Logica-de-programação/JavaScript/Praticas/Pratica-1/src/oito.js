//Exercício 8: Altere o código do Exercício 7 para imprimir na tela seis números que são múltiplos de três ou cinco e que seja maior que 20. Dica: use o operador lógico e no teste do if e agrupe as operações lógicas usando parênteses
let count = 0;  
while (count < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    if ((nro % 3 === 0 || nro % 5 === 0) && nro > 20) { 
        console.log(nro);
        count++;  
}
}