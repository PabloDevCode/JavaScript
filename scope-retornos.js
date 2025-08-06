// scope (alcance de variables)
function suma(nota1, nota2, nota3) {
    let resultado = nota1 + nota2 + nota3;
    return resultado;
    // valor a variable que queremos devolver afuera de la funcion despues del RETURN

}

/*

ESTE ES MI METODO ABREVIADO, DISTINDO AL DEL CURSO
function promedio(n1, n2, n3) {
    let prom = (suma(n1, n2, n3) / 3);
    return prom;
}

console.log(promedio(7, 8, 9));

EN ESTE CASO DECIDI LLAMAR A LA FUNCION DENTRO DEL CONSOLE PERO 
PUEDE HACERSE PARA DAR VALOR A UNA VARIABLE Y LUEGO IMPRIMIRLA

LAS PROXIMAS LINEAS SON LAS DEL CURSO
*/

function promedio() {
    let rdoSuma = suma(7, 9, 8);
    let rdoPromedio = rdoSuma / 3;
    return rdoPromedio
}

// llamado
let promedioObtenido = promedio();
// aca capturamos el valor que devuelve la funcion y lo almacenamos en la variable promedioObtenido
console.log(promedioObtenido);