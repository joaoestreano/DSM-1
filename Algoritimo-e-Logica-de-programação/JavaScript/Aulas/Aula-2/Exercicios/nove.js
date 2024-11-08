//exercicio 9
peso=prompt("entre com o peso (kg):")//o numero inserido sera "texto"
peso=parseFloat(peso)//parsefloat é para converter p/ numeros quebrados ex:65.4
altura=prompt("entre com a altura (M):")//o numero inserido sera "texto"
altura=parseFloat(altura)//parsefloat é para converter p/ numeros quebrados ex:65.4
imc=peso/(altura*altura)//calculo do imc
if(imc<18.5){//se imc for...
console.log("abaixo do peso")//sera "abaixo do peso"
}
else{//se não...
  if(imc<24.9){//se imc for menor que 24.9
    console.log("peso ideal")//sera "peso ideal"
  }
  else{//se não...
    if(imc<29.9){//se imc for menor que 29.9
      console.log("levemente acima do peso")//sera "levemente acima do peso"
    }
    else{//se não...
      if(imc<34.9){//se imc for menor que 34.9
        console.log("obesidade grau I")//sera "obesidade grau I"
      }
      else{//se não...
        if(imc<39.9){//se imc for menor que 39.9
          console.log("obesidade grau II")//sera "obesidade grau II"
        }
        else{//se não...
          console.log("obesidade grau III")//sera "obesidade grau III"
        }
      }
    }
  }
}