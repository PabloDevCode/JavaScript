// Strings y accesos unicos 
// un string es en realidad un arreglo cargado con caracteres 

let saludo = "Hola!";

console.log(saludo[4]);

// .length propiedad (no lleva parentesis en la sintaxis) que retorna la cantidad total de caracteres de un string o arreglo
let miSerie = "Mad Men";
console.log(miSerie.length);

let arrayNombres = ["Bart", "Lisa", "Moe"];
console.log("en el arrayNombres hay", arrayNombres.length, "elementos");

console.log("en el arrayNombres hay, el 1er arreglo tiene", arrayNombres[0].length, "elementos");

// .indexOf() metodo o funcion (tiene parentesis al final de su nombre en la sintaxis) busca en el string, el string que le pasemos por parametro. si no lo encuentra devuelva el valor -1

let saludos2 = "¡Hola! Estamos programando";

console.log(saludos2.indexOf("o"));
console.log(saludos2.indexOf("Estamos"));
// en este caso a partir de la posicion 7 comienza la subcadena Estamos en el string 

// .slice() metodo o  funcion que corta le string y devuelve una parte del string donde nosotros le indicamos que haga el corte

let frase = "Hola! ¿Como estas?";

// opcion 1 le enviamos por parametro 2 valores, donde el 1er valor/parametro indica donde inicia el corte, y el 2do valor/paremetro indica donde finaliza el corte
// el 1er parametro es conciderado para le corte pero el 2do no 
console.log(frase.slice(6, 10));

// opcion 2 enviamos un parametro de inicio de corte pero no del final
// devuelve a partir del parametro enviado, hasta donde finaliza el string 
console.log(frase.slice(6));

// opcion 3  mediante valores negativos, se contabiliza en sentido inverso, desde atras hacia adelante
// en este caso, el comienzo de corte es 10 caracteres a partir del final, hacia adelante 
console.log(frase.slice(-10));

// .trim este merodo elimina los espacios que hay al principio y al final de un string
let nombreCompleto = "     Homero Simpsons    ";
console.log(nombreCompleto.trim());

// .split() divide un string en varias partes. debe recibir por parametro un string que va a usar como separador. devuelve un arreglo con las distintas partes de este string.
let saludos3 = "Hola, como estas?";
console.log(saludos3.split(" "));

let arrayNuevo = saludos3.split(", ");
console.log(arrayNuevo);

// .repleace reemplaza una parte del string por otra. debemos enviar 2 valores por parametro
// 1er parametro es el string que queremos reemplazar
// 2do parametro es el string nuevo que quiero agregar en lugar del otro 
let frase2 = "Me encanta Java";
console.log(frase2);


let fraseNueva = frase2.replace("Java", "Python");
console.log(fraseNueva);

let fraseNueva2 = fraseNueva.replace("Py", "JS");
console.log(fraseNueva2);