let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) { //este FOR es para recorrrer las filas
    for (let j = 0; j < matriz[i].length; j++) { //este 2do FOR es para recorrer las columnas
        if (matriz[i][j] % 2 == 0) {
            console.log("En la fila " + i, "columna " + j, "se encuentra el valor: " + matriz[i][j]);
        }

    }

}