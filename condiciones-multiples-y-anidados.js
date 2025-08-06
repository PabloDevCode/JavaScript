// let clima = "soleado";
// let temperatura = 28;
// let mensaje = "el dia esta caluroso";

// if (clima === "soleado" || temperatura >= 25) {
//     console.log(mensaje);
// } else {
//     console.log("el dia no esta caluroso");

// }

let puntuacion = 65;

if (puntuacion >= 90) {
    console.log("NOTA A")
} else if (puntuacion >= 80) {
    console.log("NOTA B")

} else if (puntuacion >= 70) {
    console.log("NOTA C")
}
else {
    console.log("NOTA D")

}

// CONDICIONALES ANIDADOS

let nota = 11;

if (nota >= 1 && nota <= 10) {
    if (nota >= 7) {
        console.log("Aprobado :)");
    } else {
        console.log("Desaprobado :(");
    }
} else {
    console.log("La nota enviada es erronea! Debe ser un nro del 1 al 10");
}