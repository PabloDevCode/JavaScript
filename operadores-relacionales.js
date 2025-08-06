let resultado = 10 < 5
console.log(resultado);

let resultado2 = 10 >= 10;
console.log(resultado2);

// operacion de IGUALDAD (==) se compara el numero pero no el tipo de dato
let resultado3 = 10 == 10;
console.log("igualdad " + resultado2);
// en la operacion de igualdad un string y un entero del mismo nro arrojara true porque compara el nro y no el tipo de dato 
let resultado4 = "10" == 10;
console.log("igualdad " + resultado4);

// IGUALACION ESTRICTA (===) compara valor del dato y tambien su tipo 

let resultado5 = "10" === 10;
console.log("igualdad estricta " + resultado5);
let resultado6 = 10 === 10;
console.log("igualdad estricta " + resultado6);
let resultado7 = "10" === "10";
console.log("igualdad estricta " + resultado7);

// DESIGUALDAD
let resultado8 = "10" != 10;
console.log("DESigualdad " + resultado8);
resultado8 = 10 != 10;
console.log("DESigualdad " + resultado8);
resultado8 = 1 != 10;
console.log("DESigualdad " + resultado8);

// DESIGUALDAD ESTRICTA
let resultado9 = 10 !== 10;
console.log("DESigualdad ESTRICTA " + resultado9);
resultado9 = "10" !== 10;
console.log("DESigualdad ESTRICTA " + resultado9);
resultado9 = 1 !== 10;
console.log("DESigualdad ESTRICTA " + resultado9);

