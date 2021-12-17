//Un objeto es una estructura de datos que puede contener propiedades y métodos.

// let mascota = {
//    nombre: "Florencio",
//    edad: 4,
//    color: "Negro",
// }

// console.log(mascota)


//************************************* Métodos de objetos

// let mascota = {
// 	nombre: "Florencio",
// 	edad: 4,
// 	color: "Negro",
//    presentación: function (){
//       return `hola! me llamo ${nombre},soy de color ${color}`
//    }
// };

// console.log(mascota);

//************************************* DESTRUCTURING ************************* */
//https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/


//-1
// let cuadrupedo = ["negro", "café",3]
// console.log(
//    `es de color ${cuadrupedo[0]}, tiene ojos ${cuadrupedo[1]} y ${cuadrupedo[2]} años aprox`
//    );
   

//-2

// let [pelajeColor, colorOjos, edad] = cuadrupedo;
// console.log(
// 	`es de color ${pelajeColor}, tiene ojos ${colorOjos} y ${edad} aprox`
// );










//*************************************************************************** */


let mascota = {
	nombre: "Florencio",
	edad: 4,
	color: "Negro",
   presentación: function (){
      return `hola! me llamo ${this.nombre},soy de color ${this.color}`
   }
};

let nombreMascota = ____;

console.log(nombreMascota);