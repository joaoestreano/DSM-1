//exercicio 8
temperatura = prompt("entre com sua temperatura corporal:");//o numero inserido sera "texto"
temperatura = parseFloat(temperatura);///parsefloat é para converter p/ numeros quebrados ex:65.4
if (temperatura <= 35) {//se a temperatura for menor ou igual a 35
  console.log("hipotermia");//sera "hipotermia"
} else {//se não...
  if (temperatura <= 37.7) {//se a temperatura for menor ou igual a 37.7
    console.log("normal");//sera "normal"
  } else {//se não...
    if (temperatura <= 39.5) {//se a temperatura for menor ou igual a 39.5
      console.log("febre");//sera "febre"
    } else {//se não
      if (temperatura <= 41) {//se a temperatura for menor ou igual a 41
        console.log("febre alta");//sera "febre alta"
      } else {//se não...
        console.log("hipotermia");//sera "hipotermia"
      }
    }
  }
}