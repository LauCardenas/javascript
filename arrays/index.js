// let posicionArray = ["posicion 0", "posicion 1", "posicion 2"];

// console.log(posicionArray[0])

//************************************************************************************** */


// let elementosArray = [10, "viernes", true]

// console.log(`esta es la posicion 2 del array y contiene el _____ : ${elementosArray[2]}`);


//***************************************** PUSH() y POP()**************************************************** */

// let animal = ["canario","tiburón"]

// animal.push("rana")
// console.log(animal)




//**************************************************** */
// let animales = ["gato","perro","conejo"]

// function agregaAnimal(nombre){
//    animales.push(nombre)
// }

// agregaAnimal("cocodrilo");
// console.log(animales.length);

//*************************************************************** */

// let animales = ["gato","perro","conejo"]

// function agregaAnimal(nombre){
//    animales.push(nombre)
// }
// // function sacarAnimal(){
// //    animales.pop()
// // }

// agregaAnimal("cocodrilo");
// console.log("agregué un elemento, ahora son : ", animales.length);
// // sacarAnimal()
// // console.log("saqué un elemento, ahora son : ", animales.length);

//***************************** JOIN ******************************************** */
//Une los elementos de un array utilizando el separador que le especifiquemos. Si no lo especificamos, utiliza comas.

// let herbivoros = ["Caballo", "Rinoceronte", "Hipopótamo"];

// console.log(herbivoros.join('-'))


//************************************** FILTER ************************************* */

// retorna aquellos elementos que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// let herbivoros = ["Caballo", "Rinoceronte", "Hipopótamo", "ave"];

// let herviboroFiltrado = herbivoros.filter((iterador)=>{
//       return iterador != "ave"
// })

// console.log(herviboroFiltrado)


//**************************************** MAP *********************************************** */

// let herbivoros = ["Caballo", "Rinoceronte", "Hipopótamo"];

// let plural = herbivoros.map((iterador)=>{
//    return iterador + "S"
// })

// console.log(plural)

//****************************************** FOREACH **************************************** */
//El foreach no devuelve nada. Simplemente ejecuta una acción para cada elemento.

// let herbivoros = ["Caballo", "Rinoceronte", "Hipopótamo"];

// herbivoros.forEach((iterador) => {
// 	let result = iterador.toUpperCase();

//    console.log(result);
// });

//******************************************* FIND ****************************************** */

// let numeros = [49,55, 107,10,6, 15, 8, 86];

// const menor = numeros.find((num)=>{
//    return num < 50
// })

// console.log(menor)

//***************************** */


// let herbivoros = [
//    {id:1,nombre: "ternero"},
//    {id:2,nombre: "vaca"},
//    {id:3,nombre:"toro"},
//    {id:4,nombre:"vaca"},
// ];

// let primeroHervboro = herbivoros.find((iterador) => {
// 	return iterador.nombre == "vaca"
// });
// console.log(primeroHervboro);


