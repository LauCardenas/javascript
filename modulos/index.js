let arrayDeAnimales = require('./animales')

function manipulandoDatos(arr) {
   
   let copia = arr.map((elemento) => {
      if(elemento.nombre == ""){
         elemento.nombre = "nombre no encontrado"
         return elemento
      }
      return elemento
   });
   return copia
}


console.log(manipulandoDatos(arrayDeAnimales))