let gastosDelMes = [
    [10, 20, 30, 40, 50, 60, 70],
    [5, 15, 25, 35, 45, 55, 65],
    [8, 18, 28, 38, 48, 58, 68],
    [12, 22, 32, 42, 52, 62, 72]
];
console.log(gastosDelMes);

//Gastos de la Semana

function gastoSemana(fila, matriz) {
    let acum = 0;
    for (let j = 0; j < matriz[fila].length; j++)
        acum += matriz[fila - 1][j];
    return acum;
}

let sumaDeGastosSemanales = gastoSemana(2, gastosDelMes); //en este caso elegimos la semana nro 2 y la enviamos por parametro
console.log(sumaDeGastosSemanales);

//Gastos de un dia de la semana en especifico

function gastosPorDia(columna, matriz) {
    let acum = 0;
    for (let i = 0; i < matriz.length; i++)// en este caso no es necesario indicar cual es la fila a recorrer porque la estamos recorriendo por columnas, por lo tanto cuando decimos matriz.length, nos referimos a la cantidad de arreglos que hay dentro de la matriz, en este caso hay 4 arreglos, uno por cada semana
        acum += matriz[i][columna - 1];
    return acum;
}

let gastoDelDia = gastosPorDia(1, gastosDelMes);//en este caso elegimos el dia lunes y enviamos el nro 1 por parametro

console.log(gastoDelDia);

//Gastos por Mes

function gastosTotalesDelMes(matriz) {
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acum += matriz[i][j];

        };
    }
    return acum;
}

let gastoMes = gastosTotalesDelMes(gastosDelMes);
console.log(gastoMes);

//Gasto total por Semana

function calcularTotalDeGatosPorSemana(matriz, callback) {
    let totalGastosPorSemana = [];
    let gastoSemanal = 0;

    matriz.forEach(function (semana) {   //la palabra semana nos servira para mencionar a cada array que se encuentra dentro de la matriz "gastosDelMes" (recordar que los elementos de dicha matriz son arrays referenciando a "semanas").
        let gastoSemanal = semana.reduce(function (totales, dia) { //.reduce acumulara o reducira los elementos dentro del array a solamente uno. "totales" acumula los valores. "dias" no sirve para mencionar cada elemento de "semana". nota: con "forEach" recorremos cada array dentor de la matriz y con ".reduce" recorremos cada elemento dentro del array
            return totales + dia;
        });
        totalGastosPorSemana.push(gastoSemanal)
    });
    callback(totalGastosPorSemana);
}

//otra funcion
function mostrarResultados(resultados) {
    console.log("Total de gastos por semana: ", resultados);
}

//llamando de la funcion

calcularTotalDeGatosPorSemana(gastosDelMes, mostrarResultados);
//devuelve un array con los gasos totales por semana.