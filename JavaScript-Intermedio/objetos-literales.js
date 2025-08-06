/*Son la representacion en codigo de elementos de la vida real. Es una estructura que contiene varios datos , que van a estar representados por propiedades o metodos
PROPIEDADES son aquella caracteristicas que los objetos van a compartir
METODOS son las acciones que le permitamos realizar*/

// CREAR OBJETO 
let persona = {
    // las propiedades van separadas por comas 
    nombre: "Pablo",
    apellido: "Benitez",
    edad: 33,
    coloresFavoritos: ["Azul", "Amarillo"],
    saludar: function () {
        return "Hola soy " + this.nombre + "!";
        // marcamos la ruta utilizando la palabra reservada this, para concatenar lo que esta dentro de la propiedad nombrada, dentro del objeto 
    }
};



// ACCEDER A LAS PROPIEDADES DE UN OBJETO 
console.log(persona.nombre);
console.log(persona.coloresFavoritos);
console.log(persona.coloresFavoritos[0]);

// CARGAR UNA NUEVA PROPIEDAD haciendo uso del operador "punto", podemos agregar y/o modificar una nueva propiedad, por fuera del objeto, creado con anterioridad
persona.deporteFavorito = "Futbol";
persona.edad = 31;
console.log(persona);

// ELIMINAR UNA NUEVA PROPIEDAD
delete persona.apellido;
console.log(persona);


// ACCEDER A UN METODO DE UN OBJETO
let saludoRecibido = persona.saludar();
console.log(saludoRecibido);

// METODO: es una propiedad de un objeto con una funcion cargada 

