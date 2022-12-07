let frase1 = "Creo,siempre,que,el,baile,contiene,en,sí,cuatro artes.,La música,la coreografía,la pintura y la literatura."

let frase3 = frase1.split(",")
console.log("frase 3: ",frase3);
console.log("numero de elementos de frase 3: ", frase3.length)

for (numero = 0; numero < frase3.length; numero++) {
    console.log(frase3[numero]);
  }
