// Los callbacks son funciones que se envian por parametro a otras funciones y se ejecucan despues de que se finalice una tarea asincronica

// en este caso: Funcion que recorre array ejecuta un callbacks 
function procesoArray(array, callbacks) {
    for (let i = 0; i < array.length; i++)
        callbacks(array[i]);
}

// Funcion de callbacks que muestre los elementos del array 
function mostrarElemento(elemento) {
    console.log(elemento);
}

function multiplicarPorDos(elemento) {
    console.log(elemento * 2);
}

function calcularCuadrado(elemento) {
    console.log(elemento * elemento);
}

// Crear nuestro array 
let miArray = [1, 2, 3, 4, 5];

// Llamada a la funcion procesoArray 
// Pasamos nuestro array como 1er argumento, y la funcion de callbacks (mostrarElemento) como 2do parametro 
console.log("Recorrido de array: ");
procesoArray(miArray, mostrarElemento); //en este caso mostrarElemento se pasa por parametro como un identificador, por eso no se agrega los parentesis de dicha funcion al final
console.log("Multiplicar por dos: : ");

procesoArray(miArray, multiplicarPorDos);
console.log("Calcular cuadrado: ");

procesoArray(miArray, calcularCuadrado);