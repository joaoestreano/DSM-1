//Exercício 4: Altere o código do Exercício 3 para imprimir seis números inteiros no intervalo [0,99]. Dica: multiplique o resultado do método random por 100. Use o método floor para obter apenas a parte inteira do número real.
let i = 0; 
while (i < 6) { 
    let nro = Math.floor(Math.random() * 100); 
    console.log(nro);
    i++; 
}