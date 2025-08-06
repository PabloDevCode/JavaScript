// tradicional vs ternario

// TRADICIONAL 
let numero = 4;

if (numero > 0) {
    console.log("es positivo");
} else {
    console.log("es negativo");
}

// TERNARIO
// IF APLICADO DE FORMA TERNARIA (MISMO RESULTADO EN 2 SINTAXIS DISTINTAS)

(numero > 0) ? console.log("es positivo") : console.log("es negativo");

// ASIGNACION DE VARIABLES

/*let edad = 17;
let mensaje = "";

if (edad >= 18) {
    mensaje = "Es mayor"
} else {
    mensaje = "Es menor"
}
console.log(mensaje);*/

// IF APLICADO DE FORMA TERNARIA (MISMO RESULTADO EN 2 SINTAXIS DISTINTAS)

/*mensaje = (edad >= 18) ? "Es mayor" : "Es menor";

console.log(mensaje);*/

// MAS DE UNA INSTRUCCION

let edad = 17;
let msj = "";
let categoria = "";

if (edad >= 18) {
    mensaje = "Es mayor de edad";
    categoria = "Adulto";
    console.log("Felicidades eres mayor de edad!");
} else {
    mensaje = "Es menor de edad";
    categoria = "Menor";
    console.log("Felicidades eres menor de edad!");
}
// IF APLICADO DE FORMA TERNARIA (MISMO RESULTADO EN 2 SINTAXIS DISTINTAS)

(edad >= 18) ? (
    mensaje = "Es mayor de edad",
    categoria = "Adulto",
    console.log("Felicidades eres mayor de edad!")) : (
    mensaje = "Es menor de edad",
    categoria = "Menor",
    console.log("Felicidades eres menor de edad!"));

console.log(mensaje);
console.log(categoria);