// video explicativo en Construimos una calculadora - Parte II 

// en la 1ra linea de codigo introducimos lo siguiente: 
const prompt = require("prompt-sync")({ sigint: true });

// en la terminal, nos situamos en la carpeta del proyecto e introducir el siguiente comando npm i prompt - sync

let numero = prompt("Ingrese un numero: ");
console.log("El numero que ha seleccionado es :", numero);

// la palabra clave prompt convierte a string los valores ingresados, para que mantenga el tipo de dato ENTERO 
// en este caso vamos a escribir de la siguiente forma, anteponiendo la palabra PARSE
let numero2 = parseInt(prompt("Ingrese un numero: "));
console.log("El numero que ha seleccionado es :", numero2);