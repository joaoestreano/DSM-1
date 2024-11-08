//Exercício 7: Altere o código do Exercício 6 para imprimir na tela seis números que são múltiplos de três ou cinco. Dica: use o operador lógico ou no teste do if.
let count = 0; 
while (count < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    if (nro % 3 === 0 || nro % 5 === 0) {
        console.log(nro);
        count++;  
    }
}