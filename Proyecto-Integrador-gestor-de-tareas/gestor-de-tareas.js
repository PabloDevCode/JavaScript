const prompt = require("prompt-sync")({ sigint: true });

// Array para almacenar las tareas 
let tareas = [];

// Funcion para agregar una nueva tarea al array 
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    // cada vez que abrimos llaves la maquina entiende que nos referimos a objetos
    // cuando colocamos un signo = al lado de un parametro, la computadora asigna el valor siguiente al signo, en caso que no se envie ningun valor por parametro 
    tareas.push({ nombre: nombreRecibido, completada: false, fechaLimite: fechaLimiteRecibida });
}

/*agregarTarea("Pasear al perro", "28-12-23");
agregarTarea("Comprar cena");
console.log(tareas);*/

// Eliminar tarea 
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        // el metodo .splice elimina un elemento del arreglo y lo ordena automaticamente. Debe recibir 2 parametros, la ubicacion del elemento y la cantidad de elementos a eliminar
        console.log("Tarea eliminada correctamente!");
    } else {
        console.log("Indice de tarea invalido");
    }
}

// Funcion para marcar tarea como completada 
function completaTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea marcada como finalizada!")
    } else {
        console.log("Indice de tarea invalido");
    }
}

// Funcion para modificar una tarea especifica 
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevoNombre;
        if (nuevaFechaLimite !== null) {
            tareas[indice].fechaLimite = nuevaFechaLimite;
        }
        console.log("Tarea modificada con exito!");
    } else {
        console.log("Indice de tarea invalido");
    }
}

// Funcion para mostrar el menu 
function mostrarMenu() {
    console.log("--- Menu ---");
    console.log("1. Agrregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}

// Funcion para interactuar con el usuario
function interactuarConUsuario(params) {
    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion seleccionada:"));

        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;
            case 2:
                let indiceTareaEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceTareaEliminar);
                break;
            case 3:
                let indiceTareaCompletada = parseInt(prompt("Ingrese el indice de la tarea completada: "));
                completaTarea(indiceTareaCompletada);
                break;
            case 4:
                let indice = parseInt(prompt("Ingrese el indice de la tarea a modificar: "));
                let indiceTareaModificar = prompt("Ingrese el nuevo nombre: ");
                modificarTarea(indice, indiceTareaModificar);
                break;
            case 5:
                console.log("-- LISTA DE TAREAS --");
                console.log(tareas);
                break;

            default:
                console.log("El numero ingresado en invalido. Ingrese un nro del 0 al 5!")
                break;
        }
    }
}