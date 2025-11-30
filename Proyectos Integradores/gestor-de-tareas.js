const prompt = require("prompt-sync")({ sigint: true });

// Array para almacenar las tareas 
let tareas = [];
let categoriasNombres = [  //aunque no lo parezca, esto es una matriz, porque los strings (conjunto de caracteres) tienen el mismo comportamiento que los arrays
    "Trabajo",
    "Personal"
    //Agregar mas categorias segun sea necesario
]

//Funcion que muestra todas las categorias

function mostrarTodasLasCategorias() {
    console.log("Categorias existentes: ");
    categoriasNombres.forEach(function (categoria, indice) {
        console.log(indice + ": " + categoria);

    })
}

//Funcion que sirve para cargar nuevas categorias por el usuario

function agregarCategoriasPorElUsuario(nombreCategoria) {
    categoriasNombres.push(nombreCategoria);//.push agrega un elemento (pasado por parametro) al final del arreglo. A pesar de ser una matriz tambien es un array por eso podemos usar estas funciones sin inconvenientes
    console.log("Categoria", nombreCategoria, "agregada exitosamente!");

}
// Funcion para agregar una nueva tarea al array 
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    // cada vez que abrimos llaves la maquina entiende que nos referimos a objetos
    // cuando colocamos un signo = al lado de un parametro, la computadora asigna el valor siguiente al signo, en caso que no se envie ningun valor por parametro 
    mostrarTodasLasCategorias();
    let numeroDeCategoria = parseInt(prompt("Ingrese el nro de categoria donde se agregara la nueva tarea: "));
    if (numeroDeCategoria >= 0 && numeroDeCategoria < categoriasNombres.length) {
        tareas.push({ nombre: nombreRecibido, completada: false, fechaLimite: fechaLimiteRecibida, categoria: numeroDeCategoria });
        console.log("Tarea agregada con exito!")
    } else {
        console.log("Numero ingresado es incorrecto!")
    }

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
function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevaCategoria) {
    if (indice >= 0 && indice < tareas.length) {
        // se utiliza el valor Undefined en casa que el usuario no quiera modicar el nombre de la tarea. Para ello utilizamos un if ternario
        tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;// lo que recibi en nuevo nombre es distinto a Undefined? en caso afirmativo lo que cargamos en es el valor de nuevoNombre ingresado por el usuario. En caso contrario cargamos el mismo valor que ya estaba cargado. 
        tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite;
        tareas[indice].categoria = nuevaCategoria !== undefined ? nuevaCategoria : tareas[indice].categoria;

        console.log("Modificacion correcta!");
    } else {
        console.log("Indice de tarea invalido!");
    }
}

//Funcion que filtra tareas por categoria

function filtrarTareaPorCategoria(numeroCategoria) {

}

// Funcion para mostrar el menu 
function mostrarMenu() {
    console.log("--- Menu ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Ver todas las categorias");
    console.log("7. Agregar una nueva categoria");
    console.log("0. Salir");
}

// Funcion para interactuar con el usuario
function interactuarConUsuario() {
    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion seleccionada: "));

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
                if (indice >= 0 && indice < tareas.length) {
                    let opcion = parseInt(prompt("Que propiedad desea modificar? 1. Nombre, 2.Fecha limite, 3.Numero de categoria"));
                    switch (opcion) {
                        case 1:
                            let nombreNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
                            modificarTarea(indice, nombreNombre);
                            break;
                        case 2:
                            let nuevaFechaLimite = prompt("Ingrese la nueva fecha limite para su tarea: ");
                            modificarTarea(indice, undefined, nuevaFechaLimite); //enviamos Undefined como 2do parametro porque no queremos modificar el nombre de la tarea
                            break;
                        case 3:
                            let nuevoNumDeCategoria = parseInt(prompt("Ingrese nuevo nro de categoria: "));
                            if (nuevoNumDeCategoria >= 0 && nuevoNumDeCategoria < categoriasNombres.length) {
                                modificarTarea(indice, undefined, undefined, nuevoNumDeCategoria);
                            }

                            break;
                        default:
                            break;
                    }


                } else {
                    console.log("Indice de tarea incorrecto")
                }

                break;
            case 5:
                console.log("-- LISTA DE TAREAS --");
                console.log(tareas);
                break;
            case 6:
                mostrarTodasLasCategorias();
                break;
            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria: ");
                agregarCategoriasPorElUsuario(nuevaCategoria);
                break;
            case 0:
                console.log("Saliendo del Gestor");
            default:
                console.log("El numero ingresado en invalido. Ingrese un nro del 0 al 7!")
                break;
        }
    }
}
interactuarConUsuario();
