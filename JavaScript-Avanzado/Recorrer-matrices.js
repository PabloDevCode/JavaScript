// RECORRER LA TOTALIDAD DE DATOS DE LA MATRIZ 
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];

console.table(matriz);

for (let i = 0; i < matriz.length; i++) { //este FOR es para recorrrer las filas
    for (let j = 0; j < matriz[i].length; j++) { //este 2do FOR es para recorrer las columnas
        console.log("En la fila " + i, "columna " + j, "se encuentra el valor: " + matriz[i][j]);

    }

}