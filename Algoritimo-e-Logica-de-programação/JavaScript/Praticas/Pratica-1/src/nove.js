//Exercício 9: Altere o código do Exercício 6 para imprimir na tela seis números aleatórios menores que vinte ou maiores que 80
let count = 0;

while (count < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    if (nro < 20 || nro > 80) {  
        console.log(nro);
        count++; 
    }
}