let diaSemana = -6;
let mensaje = "";

switch (diaSemana) {
    case 1:
        mensaje = "Hoy es lunes";
        break;
    case 2:
        mensaje = "Hoy es martes"
        break;
    case 3:
        mensaje = "Hoy es miercoles"
        break;
    case 4:
        mensaje = "Hoy es jueves"
        break;
    case 5:
        mensaje = "Hoy es viernes"
        break;
    case 6:
        mensaje = "Hoy es sabado"
        break;
    case 7:
        mensaje = "Hoy es domingo"
        break;
    // en caso que no se ingrese un valor acorde a alguno de los casos utilizamos la palabra clave DEFAULT para ejecutar algun codigo en estos casos 
    default:
        mensaje = "Ingreso un nro incorrecto";
        break;
}

console.log(mensaje);

let fruta = "banana";
let mensajeFruta = "";

switch (fruta) {
    case "manzana":
        mensajeFruta = "Es una manzana"
        break;
    case "banana":
        mensajeFruta = "Es una banana"
        break;
    case "naranja":
        mensajeFruta = "Es una naranja"
        break;

    default:
        mensajeFruta = "no es una fruta"
        break;
}

console.log(mensajeFruta);