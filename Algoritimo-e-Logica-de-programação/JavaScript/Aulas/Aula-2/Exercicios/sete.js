//exercicio 7
a = prompt("Entre com um Numero");//o numero inserido sera "texto"
a = parseInt(a); //converte o texto em numero
b = prompt("Entre com outro Numero");//o numero inserido sera "texto"
b = parseInt(b); //converte o texto em numero
c = prompt("entre com mais um numero");//o numero inserido sera "texto"
c = parseInt(c); //converte o texto em numero
if (a <= b && b <= c) {//se a for menor ou igual a b, e b menor ou igual a c
  console.log("maior", c);//então c sera o maior
} else {//se não...
  if (a <= b && c <= b) {//se a for menor ou igual a b, e c menor ou igual a b
    console.log("maior", b);//então b sera o maior
  } else {//se não...
    console.log("maior", a);//se a for menor ou igual a b, e c menor ou igual a b
  }
}