//exercicio 4
numero1 = prompt("Entre com um Numero");//o numero inserido sera "texto"
numero1 = parseInt(numero1); //converte o texto em numero
numero2 = prompt("Entre com outro Numero");//o numero inserido sera "texto"
numero2 = parseInt(numero2); //converte o texto em numero
if (numero1 % numero == 0) {//se "numero1" dividido por "numero" = a 0
  prompt(numero, "multiplo");//então sera "multiplo"
} else {//se não...
  prompt(numero, "não é multiplo");//então "não sera multiplo"
}