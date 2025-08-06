// Convertir texto: Crea una función que reciba un string por 
// parámetro y lo convierta a mayúsculas y minúsculas respectivamente.
// La función deberá mostrar los resultados por consola.Para esto, 
// averiguar qué hacen los métodos de Strings: toUpperCase() y 
// toLowerCase()

console.log("PabLo beNiTez".toUpperCase());

function convertirTexto(cadena) {
    let cadenaMayus = cadena.toUpperCase();
    let cadenaMinus = cadena.toLowerCase();

    console.log("Texto en mayuscula: " + cadenaMayus);
    console.log("Texto en minuscula: " + cadenaMinus);
}

convertirTexto("Hola Mundo");