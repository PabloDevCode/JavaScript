// LET variable local
// VAR variable global 

function ej() {
    if (true) {
        var mensaje = "Hola";

    }
    console.log(mensaje);
}

ej();

// imprime el msj sin inconveniente por mas que el console esté por fuera del bloque de codigo porque tiene alcance global en todo el codigo 


function ej2() {
    if (true) {
        let msj = "Hola2";
        // console.log(msj);
    }
    console.log(msj);
}

// en este caso la variable local msj tiene alcance solo dentro del bloque IF por eso el codigo arroja un error al querer imrpimir dicha variable estando la instruccion por fuera del bloque del IF

ej2();