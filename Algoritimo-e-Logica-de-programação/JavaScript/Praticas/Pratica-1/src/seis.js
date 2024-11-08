//Exercício 6: O programa do Exercício 5 imprime no console somente os números pares, ou seja, dificilmente teremos seis números sendo impresso no console. Altere o código do Exercício 5 para imprimir na tela seis números pares. Dica: coloque a instrução i = i + 1 dentro do corpo da estrutura de decisão if.
let i = 0; 
let count = 0;  // Contador para números pares

while (count < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    if (nro % 2 === 0) { 
        console.log(nro);
        count++;
}
}