// Objetos anidados: Agrega una nueva propiedad al objeto creado 
// en el ejercicio anterior llamada ‘ubicacion’, donde deberás 
// guardar un objeto interno con las propiedades: codigoPostal,
// ciudad, calle y número.Luego, crea una función que reciba 
// dicho objeto por parámetro y le permita al usuario eliminar 
// solo una de las propiedades del objeto.

let persona = {
    nombre: "Pablo",
    edad: 33,
    ocupacion: "Steelero"
}

persona.habilidad = "veloz";

persona.ubicacion = {
    codigoPostal: "1900",
    ciudad: "la plata",
    calle: "629",
    nro: 0
}

console.log(persona);

function eliminarUnaPropiedad(persona, propiedad) {
    switch (propiedad) {
        case "nombre":
            delete persona.nombre;
            break;
        case "edad":
            delete persona.edad;
            break;
        case "ocupacion":
            delete persona.ocupacion;
            break;
        case "habilidad":
            delete persona.habilidad;
            break;
        case "ubicacion":
            delete persona.ocupacion;
            break;

        default:
            console.log("Dicha propiedad no existe en el obejeto");
            break;
    }
}

eliminarUnaPropiedad(persona, "nombe");

console.log(persona);