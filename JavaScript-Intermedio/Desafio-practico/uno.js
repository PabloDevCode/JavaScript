// Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo.La función debe devolver el nuevo array.Para esto, averiguar qué hace el método.concat()

function unirArrays(numeros1, numeros2) {
    return numeros1.concat(numeros2);
}

let numeros1 = [1, 2, 3];

let numero3 = unirArrays(numeros1, [4, 5, 6]);
// podemos definir y enviar directamente un array por parametro

console.log(numero3);