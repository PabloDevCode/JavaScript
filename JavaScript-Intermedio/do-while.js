const prompt = require("prompt-sync")({ sigint: true });

/*let j = 15;

do {
    console.log(j);
    j++;
} while (j <= 10);*/

let nroAdivinar = 4;
let numero;
let intentos = 0;

do {
    numero = parseInt(prompt("Introduce un numero del 1 al 10: "));
    intentos++;
    if (numero === nroAdivinar) {
        if (intentos === 1) {
            console.log("Felicitaciones, adivinaste el nro en el 1er intento!");
        } else {
            console.log("Felicitaciones, adivinaste el nro en", intentos, "intentos!");
        }
    } else {
        console.log("Fallaste, vuelve a intentar");
    }
} while (numero != nroAdivinar);