// paquete prompt para poder introducir valores por teclado simulando ser un usuario
const prompt = require("prompt-sync")({ sigint: true });

function suma(num1, num2) {
    return num1 + num2;
}
// let rdoSuma = suma(5, 15);
// console.log(rdoSuma);

function resta(num1, num2) {
    return num1 - num2;
}
// let rdoResta = resta(5, 15);
// console.log(rdoResta);

function multiplicacion(num1, num2) {
    return num1 * num2;
}
// let rdoMultiplicacion = multiplicacion(5, 15);
// console.log(rdoMultiplicacion);

function division(num1, num2) {
    if (num2 == 0) {
        return "no se puede dividir por 0";
    } else {
        return num1 / num2
    }
}
// let rdoDivision = division(15, 0);
// console.log(rdoDivision);

console.log("Bienvenido a su calculadora digital!");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opcion = parseInt(prompt("Indique que operacion desea realizar: "));
// parseInt para reconvertir a entero lo que el prompt transforma a String por defecto
let numero1;
let numero2;

switch (opcion) {
    case 1:
        numero1 = prompt("Ingrese el 1er numero a sumar: ");
        numero2 = prompt("Ingrese el 2do numero a sumar: ");
        resultado = suma(numero1, numero2);
        console.log("El resultado de la suma es: " + resultado);
        break;
    case 2:
        numero1 = prompt("Ingrese el 1er numero a restar: ");
        numero2 = prompt("Ingrese el 2do numero a restar: ");
        resultado = resta(numero1, numero2);
        console.log("El resultado de la resta es: " + resultado);
        break;
    case 3:
        numero1 = prompt("Ingrese el 1er numero a multiplicar: ");
        numero2 = prompt("Ingrese el 2do numero a multiplicar: ");
        resultado = multiplicacion(numero1, numero2);
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
    case 4:
        numero1 = prompt("Ingrese el 1er numero: ");
        numero2 = prompt("Ingrese el 2do numero: ");
        resultado = division(numero1, numero2);
        console.log("El resultado de la division es: " + resultado);
        break;

    default:
        console.log("Has ingresado una opción no valida")
        break;
}