// Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento.La función debe devolver el elemento eliminado.

let arreglo = [1, 2, 3];

function eliminarPrimerElemento(arreglo) {
    return arreglo.shift();
}

let elemEliminado = eliminarPrimerElemento(arreglo);
console.log(elemEliminado);