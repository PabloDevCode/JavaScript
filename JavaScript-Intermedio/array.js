// CREAR UN ARRAY 
// las posiciones comienzan a partir del la posicion 0 (0, 1, 2, 3...)
let edades = [24, 37, 18, 59, 7];
let nombres = ["Juana", "Raul", "Alan"];
let booleanos = [true, false, false, true];
let combinados = [15, "Hola", true];

// ACCEDER A UN ELEMENTO ESPECIFICO DE UN ARRAY
console.log(edades[1]);
console.log(nombres[1]);
console.log(booleanos[1]);
console.log(combinados[1]);

// RECORRER UN ARRAY
// para conocer/utilizar la cantidad de datos cargados en un arreglo utilizamos la propiedad nombreArray.length
// en este caso son 3 elementos 
console.log(nombres.length);

// de esta manera imprimimos cada elemento de un arreglo 
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

console.log("Arreglo numeros: ");

let numeros = [10, 20, 30, 40, 50];

// MODIFICAR CADA UNO DE SUS ELEMENTOS E IMPRIMIRLOS
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = i + 1;

}

numeros[2] = 99;

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// AGREGAR ELEMENTOS A UN ARRAY 

let notas = [8, 4, 10, 6];
notas[notas.length] = 7;
// si utilizamos notas.lenght como indice, estamos indicando que queremos acceder a la
// posicion siguiente del ultimo elemento del arreglo, o sea, agregar un elemento
// al final del arrglo  agregar un elemento al final (en este caso equivale a notas[4]=7)
console.log("Arreglo nota: ");

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

// EXTRAER ELEMENTOS DE UN ARRAY A UNA VARIABLES 

let nombres2 = ["Pedro", "Adriana", "Fabian"];
let nombreSeleccionado = nombres2[1];
console.log(nombreSeleccionado);

// EXTRAER TODOS LOS ELEMENTOS DE ALGO ESPECIFICO
// hacemos un promedio 

let numeros2 = [10, 20, 30, 40, 50];

let suma = 0;
for (let i = 0; i < numeros2.length; i++) {
    suma += numeros2[i];
}
let promedio = suma / numeros2.length;
console.log(promedio);

// ENCONTRAR EL MAYOR O Menor 
let menores = [10, 48, 7, 52, 19];
let menor = menores[0];
/*ya que nada nos garantiza que por ejemplo el nro 0 va a ser mas chico
que cualquier valor de un arreglo, iniciamos la comparacion con el 1er
elemento del arreglo*/

for (let i = 0; i < menores.length; i++) {
    if (menor > menores[i]) {
        menor = menores[i];
    }
    // para buscar el nro mas grande basta con girar el operador <
}
console.log(menor);