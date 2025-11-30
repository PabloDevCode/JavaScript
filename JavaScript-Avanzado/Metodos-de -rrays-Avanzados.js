/* . slice()
devuelve una copia de una porcion de un array existente, desde un indice indicado por nosotros hasta otro indice indicado por nosotros (2 parametros, inicio y fin)
Situaciones a tener en cuenta: 
1er parametro:
. si no se proporciona este dato, la copia se tomará desde el principio del array hasta el parametro enviado
. si se envia un valor negativo, se contabiliza desde el final del array HACIA el principio
. si se envia un valor igual o mayor a la longitud del array, se devolvera un array vacio

2do parametro: es un valor opcional
. el valor de este indice no se contempla en la extraccion del nuevo array,
es decir, el elemento que se encuentre en ese indice pasado por parametro, no sera incluido.
. si no se proporciona este dato, la extraccion se hará hNotaasta el final del array.

Nota: si se envia solo 1 parametro, se toma dicho valor como inicio hasta finalizar el array.
Sintaxis: let newArray = arrayOriginal.slice(inicio, fin);
 */

let frutas = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"];

let primerasTres = frutas.slice(0, 3); //manzana, naranja, platano

console.log(primerasTres);

let desdeNaranja = frutas.slice(1); //naranja, platano, fresa y kiwi

console.log(desdeNaranja);

let ultimasDos = frutas.slice(-2); //fresa y kiwi

console.log(ultimasDos);

let entreDosIndices = frutas.slice(-3, 4); //platano y fresa

console.log(entreDosIndices);

/*.splice()
sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2,....);
convina el contenido de un array, reemplazando o eliminando elementos existentes, y/o (opcional) agregando nuevos elementos en su lugar.

en este caso no lo estamos retornando a ninguna variable pero podriamos hacerlo sin ningun problema

1er parametro indica desde donde se van a realizar los cambios
2do parametro indica la cantidad de elementos del arreglo que queremos eliminar, a partir del indice enviado en el 1er parametro
OPCIONAL
a partir del 3er parametro SE PUEDEN ir cargando valores al arreglo, desde el indice del 1er parametro en adelante.

NOTA: en caso de que el 2do parametro se envie el valor 0, simplemente se agregaran los elementos a partir de la posicion del indice enviado como 1er parametro

*/

console.log(frutas);

frutas.splice(2, 0, "limon", "sandia"); //'Manzana', 'Naranja','limon', 'sandia','Platano', 'Fresa','Kiwi'

console.log(frutas);

frutas.splice(2, 3, "melon");

console.log(frutas); //Manzana', 'Naranja', 'melon', 'Fresa', 'Kiwi'

/* .sort
sintaxis: arrayOriginal.sort();

ordena los elementos de un array devolviendolo ordenado
 */

let numeros = [2, 5, 4, 8, 3, 6, 7, 0, 1, 9];

numeros.sort();

console.log(numeros);

let palabras = ["zorro", "platano", "auto", "perro", "gato"];
palabras.sort();
console.log(palabras); //'auto', 'gato', 'perro', 'platano', 'zorro'

/* .find
sintaxis: let resultado = arrayOriginal.find (funcionDePrueba (elemento))

devuelve el 1er elemento que cumple con una condicion dada en una funcion de prueba
 */
let edades = [25, 18, 30, 15, 22];

let mayorDeEdad = edades.find(edad => edad >= 18);

console.log(mayorDeEdad);

let mayorDos = edades.find(treinta => treinta > 30);
console.log(mayorDos); //undefined porque en este caso la condicion dice Mayor a 30, y en el arreglo no hay ninguno mayor a 30

/* .map()
recibe una funcion por parametro, recorre el arreglo y nos devuelve un nuevo arreglo con las modificaciones que nosotros le indiquemos segun la funcion que le pasemos como callback(enviar una funcion como parametro)
Nota: dentro del parantesis de la funcion introducimos un nombre generico para referirnos a cada elemento del arreglo por los cuales estemos pasando al momento de ejecutar el .map
*/


let arregloNumeros = [2, 4, 6];

let numerosMultiplicados = arregloNumeros.map(function (num) {
    return num * 2;
});

console.log(numerosMultiplicados);

// .filter()
/*recorre la totalidad del array, aplicando un filtro o condicion a sus 
elementos (mediante un callback), y devuelve un nuevo array con los elementos que cumplan dicha condicion*/

let edades2 = [22, 8, 17, 14, 30];

let mayores = edades2.filter(function (edad) {
    return edad > 18;
})

console.log(mayores);

// .reduce()
/*recorre la totalidad del array y devuelve solo un unico valor entero, bajo el criterio que le enviemos por medio de parametros (enviando 2 parametros (callback))

*/

let nums = [5, 7, 16];

let suma = nums.reduce(function (acumlulador, num) {
    return acumlulador + num;
});

console.log(suma);

// .forEach()
/* itera sobre un array, NO RETORNA ningun valor, y mediante el callback que debemos enviar por parametro, definimos la funcion que queremos aplicar a cada elemento del array. 
Dicha funcion envia al menos 1 parametro (elemento(obligatorio), indice (opcional), array(opcional)) 
Es útil para realizar acciones como imprimir en consola, modificar elementos, etc.*/

let paises = ["argentina", "colombia", "brazil"];

paises.forEach(function (pais) {
    console.log(pais);
});