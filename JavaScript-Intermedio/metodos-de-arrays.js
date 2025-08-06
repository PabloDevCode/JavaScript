/* un arreglo es un tipo de dato que proviene de una esctructura 
 llamada objetos y para trabajar con dichos objetos utilizamos los 
 Metodos , que son funciones previamente definidas, que nos permiten manipularlos.
 entre ellas las mas conocidas son: */

// .push()  agrega uno o varios elementos al final de un arreglo mediante parametros de dicha funcion, y retorna la nueva longitud del arreglo
let colores = ["Rojo", "Naranja", "Azul"];

colores.push("Violeta", "Dorado");
console.log(colores);

//  .pop() elimina el ultimo elemento de un arreglo. No se envia dato por parametro

let colorEliminado = colores.pop();
console.log(colorEliminado);
console.log(colores);



// .shift() elimina el 1er elememento de un arreglo. No recibe ningun parametro.
let nombres = ["Sandra", "Lautaro", "Eze"];
console.log(nombres);
let nombreEliminado = nombres.shift();
console.log(nombreEliminado);

console.log(nombres);


// .unshift() agrega uno o varios elementos al principio de un arreglo, y devuelve la nueva longitud del arreglo (se debe capturar el valor con una variable)
let marcas = ["audi"];

marcas.unshift("Fiat", "Chevrolet");

console.log(marcas);

// asi capturamos la longitud con una variable
let nuevaLongitud = marcas.unshift("Ferrari", "BMW");

console.log(nuevaLongitud);
console.log(marcas);


// .join() une los elementos de un arrays con el separador que nosotros especifiquemos, si no especificamos uno los separa con coma (,), y los almacena en una unica variable. Nuestro arreglo no sufre ninguna modificacion

let dias = ["Lunes", "Martes", "Miercoles"];

let separadpPorComa = dias.join();
console.log(separadpPorComa);

let separadpPorGuion = dias.join(" - ");
console.log(separadpPorGuion);

// .indexOf busca en el arreglo el elemento que le enviemos por parametro, en caso de encontrarlo devuelve su indice de ubicacion, pero si no se encuentra debuelve un -1
let frutas = ["Manzana", "Banana", "Naranja"];

let indiceEcontrado = frutas.indexOf("Banana");
console.log(indiceEcontrado);

let indiceEcontrado2 = frutas.indexOf("Bananas");
console.log(indiceEcontrado2);

// .lastindexOf igual al indexOf pero este realiza la busqueda partiendo desde el ultimo elemento del arreglo hacia el primera (de atras hacia adelante).Nota: en caso de haber varias elementos iguales, devuelve solamente la ubicacion del que este mas al final de arreglo
let clubes = ["River", "Racing", "Lanus", "River"];
let indexClub = clubes.lastIndexOf("River");
console.log("index club:", indexClub);

// .includes busca un elemento en el arreglo y devuelve true si se encuentra y false en caso contrario (retorna un booleano)
let cosas = ["casco", "cereal"];
console.log("se encuentra en el arreglo?:", cosas.includes("casco"));