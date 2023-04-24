/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arrayNuevo = []
   var  claves = Object.keys(objeto)
  for (let i = 0; i< claves.length; i++ ) {
   var letra = claves[i]
      arrayNuevo.push([letra,objeto[letra]])

  }
  return arrayNuevo

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

var nuevoObjeto = {};

for (let i = 0; i < string.length; i++) {
   

   if (nuevoObjeto.hasOwnProperty(string[i])) {
      
      nuevoObjeto[string[i]] = nuevoObjeto[string[i]] + 1}
      else {
         nuevoObjeto[string[i]] = 1
      }
      
   }
   return nuevoObjeto

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var resultado = ""
   var mays = ""
   var mins = ""

   for (let i = 0; i < string.length; i++) {
     
      if(string[i] === string[i].toUpperCase()){
         mays += string[i] 
      }
      else{
         mins += string[i]
      }
      resultado = (mays+mins)
   }
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseNueva = []
   var frasexd = frase.split(" ")
 for (let i = 0; i < frasexd.length; i++) {
   const espejo = frasexd[i].split("").reverse().join("")
   fraseNueva.push(espejo)
   
 }
return fraseNueva.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var numeroCapicua = numero.toString().split("").reverse().join("")

if(numeroCapicua == numero ){
   return "Es capicua"
} else{
   return "No es capicua"
}

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var robaLetras = []

   for (let i = 0; i < string.length; i++) {
      
     const letras =  string[i].split(" ")

     if (letras != "a" && letras != "b" && letras != "c"){
      robaLetras.push(letras)
     }
        
}
return robaLetras.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let aux = arrayOfStrings;
   let n = arrayOfStrings.length;

   for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1- i; j++) {
        if (aux[j].length > aux[j + 1].length){
         let temp = aux[j]
         aux[j] = aux[j +1];
         aux[j +1] = temp;
        }

         
      }
      
   }
   return aux
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var a = array1  
   var b = array2
   var nuevoArreglo = []
for (let i = 0; i < a.length; i++) {
   for (let j = 0; j < b.length; j++) {
      const numero1= b[j];
      const numero2= a[i];

      if (numero1 === numero2) {
         nuevoArreglo.push(numero2);
         break;
      }
   }
   
}
return nuevoArreglo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
