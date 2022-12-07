let frase1 = "La lógica te llevará de la A a la Z. La imaginación te llevará a cualquier lugar"

let frase3 = frase1.split(" ")
console.log("frase 3: ",frase3);
console.log("numero de elementos de frase 3: ", frase3.length)

for (numero = 0; numero < frase3.length; numero++) {
    console.log(frase3[numero]);
  }
