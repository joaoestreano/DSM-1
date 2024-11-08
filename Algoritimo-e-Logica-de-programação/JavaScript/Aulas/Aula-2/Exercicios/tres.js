//exercicio 3
numero = prompt("entre com um numero");//o numero inserido sera "texto"
numero = parseInt(numero); //converte o texto em numero
if (numero % 2 == 0) {//se o "numero" dividido por 2 tiver resto = a 0
  console.log(numero, "Par");//ele sera par
} else {//se não...
  console.log(numero, "impar");//sera impar
}