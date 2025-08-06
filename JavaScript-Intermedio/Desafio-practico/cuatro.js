// Manipulación de objetos: Crea un objeto llamado ‘persona’ que
//  contenga como propiedades: nombre, edad y ocupación.Crea una 
// función que muestre cada propiedad de dicho objeto por consola, 
// e invocala para ver sus valores.Luego, modifica el valor de 
// ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente 
// a la función creada para visualizar el cambio efectuado.

let persona = {
    nombre: "Pablo",
    edad: 33,
    ocupacion: "Steelero"
}

function imprimir(per) {
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.ocupacion);
}
persona.ocupacion = "durlero";
persona.habilidad = "veloz";

imprimir(persona);


// cuando la computadora encuentra que la propiedad no existe, 
// simplemente la va a crear por nosotros y le asiganara el valor dado 

console.log(persona);