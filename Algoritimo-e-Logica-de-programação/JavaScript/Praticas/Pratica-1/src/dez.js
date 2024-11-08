//Exercício 10: Altere o código do Exercício 6 para imprimir na tela seis números aleatórios. Os números menores que 50 precisam ser ímpares e os maiores ou iguais a 50 precisam ser pares.
let count = 0;
while (count < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    if ((nro < 50 && nro % 2 !== 0) || (nro >= 50 && nro % 2 === 0)) {
        console.log(nro);
        count++; 
    }
}