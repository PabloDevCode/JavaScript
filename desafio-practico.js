// Validador de contraseña 

let contraseña = "lio";

function password(pass) {
    if (contraseña === pass) {
        console.log("acceso concedido");
    } else {
        console.log("acceso denegado");

    }
}

password("lio");

// Calculadora IMC 

function calculadoraIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("bajo peso");
    } else if (imc < 24.9) {
        console.log("peso normal");
    } else if (imc < 29.9) {
        console.log("sobre peso");
    } else {
        console.log("obesidad");
    }
}

calculadoraIMC(90, 1.82);

// Conversor de monedas

let dolar = 1162;
let euro = 1333;
let libra = 1563;
let guarani = 0.145599

// OPCION 1

/*function Conversor(cantMoneda, moneda) {
    let cambio = cantMoneda * moneda;
    return cambio;
}
let tipoCambio = Conversor(20, guarani);
console.log("Tipo de Cambio: ", tipoCambio);*/

// OPCION 2

function convertirMoneda(cantMoneda, moneda) {
    let tipoDeCambio;
    switch (moneda) {
        case "dolar":
            tipoDeCambio = dolar * cantMoneda
            break;
        case "euro":
            tipoDeCambio = euro * cantMoneda
            break;
        case "libra":
            tipoDeCambio = libra * cantMoneda
            break;
        case "guarani":
            tipoDeCambio = guarani * cantMoneda
            break;

        default:
            console.log("no cambiamos la moneda ingresada ")
            return -1;
            break;
    }
    console.log("Cantidad convertida a " + moneda + " : " + tipoDeCambio);
}
convertirMoneda(100, "dolar");

// EVALUADOR DE RANGO DE EDAD 

function rangoEdad(edad) {
    if (edad > 0 && edad < 12) {
        console.log("niño");
    } else if (edad >= 12 && edad < 18) {
        console.log("joven");
    } else if (edad >= 18 && edad < 65) {
        console.log("adulto");
    } else if (edad >= 65) {
        console.log("anciano")
    } else {
        console.log("edad incorrecta")
    }
}

rangoEdad(17);

function msjPersonalizado(nombre, momento) {
    let saludo = (momento === "mañana") ? "buenos dias" : " buenas tardes";
    console.log(`Hola ${nombre},${saludo}!`);
}

msjPersonalizado("Pablo", "tarde");