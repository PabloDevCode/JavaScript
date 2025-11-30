//FUNCIONES DECLARADAS
// Pueden ser invocadas antes de su declaracion(antes de su creacion), se elevan al principio del ambito
// Mas utiliza por los desarrolladores por la claridad de lectura del codigo 

console.log(suma(10, 15));

function suma(num1, num2) {
    return num1 + num2;
}

// FUNCIONES EXPRESADAS
// Se asignan a una variable, o se utilizan como parte de una expresion 
// Su alcance se limita al contexto en que se la define. Puede ser beneficioso para evitar la contaminacion del ambito global  
// No puden ser invocadas antes de su creacion 

let resta = function (num1, num2) {
    return num1 - num2;
}

console.log("resta: " + resta(10, 5));

// FUNCIONES FLECHA (ARROW FUNCTION) 
// Forma un poco mas breve de escribir una function
// No tiene contexto/valor/palabra reservada THIS (this te da acceso a cualquier valor o propiedad DENTRO del mismo objeto)
// No puede ser usada en metodos de objetos 
// No pueden ser invocadas antes de su creacion/declaracion 

let multiplicacion = (num1, num2) => {
    return num1 * num2;
}
console.log("multiplicacion: " + multiplicacion(4, 3));

// Metodo tradicional 

let objeto = {
    valor: 10,
    doble: function () {
        return this.valor * 2;
    }
}

console.log("metodo doble: " + objeto.doble());

// Metodo con arrow function 

let objeto2 = {
    valor: 10,
    doble: () => {
        return this.valor * 2;
    }
}

console.log("metodo doble con arrow function : " + objeto2.doble());