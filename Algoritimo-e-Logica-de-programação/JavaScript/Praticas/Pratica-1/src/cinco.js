//Exercício 5: Altere o código do Exercício 4 para imprimir no console somente os números pares. Dica: use a estrutura de decisão if
let i = 0; 
while (i < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    if (nro % 2 === 0) {
        console.log(nro);
    }
    i++; 
}