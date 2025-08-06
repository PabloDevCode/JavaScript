/*PARA TENER EN CUENTA AL USAR UN WHILE
.AYUDARNOS DE UNA VARIABLE CONTADORA PARA TENER UN CORTE DEL BUCLE 
.AYUDARNOS DE UNA CONDICION QUE SE PUEDA VOLVER FALSA
.AUNMENTAR EL CONTADOR PARA TERMINAR EL BUCLE*/
/*let contar = 0;
let numero = 1;

while (contar <= 5) {
    console.log(numero);
    numero++;
    contar++;
}*/
const prompt = require("prompt-sync")({ sigint: true });

let control = "si";
let nota;
let sumaNotas = 0;
let cant = 0;
console.log("Bienvenido al registro de notas!");

while (control == "si") {
    console.log("Ingrese una nota a sumar: ");
    nota = parseInt(prompt("Nota alumno: "));
    sumaNotas += nota;
    // otra forma de acumular
    // sumaNotas = sumaNotas + nota;
    cant++;
    control = prompt("Ingrese la palabra SI en caso que desee seguir cargando notas o la palabra NO en caso contrario: ");

}

let promedio = sumaNotas / cant;
console.log("El promedio es: ", promedio8

);