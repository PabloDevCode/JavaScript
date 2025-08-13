// CREAR UNA MATRIZ 
// una matriz es un arreglo (padre) que contiene otros arreglos (hijos)

// los siguientes arreglos hijos seran los indices (filas) del arreglo padre 

// opcion 1 

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//  indices      0        1        2

// escrito de "otra manera" 
// let matriz = [
// [1, 2, 3], 
// [4, 5, 6], 
// [7, 8, 9]
// ];


// VISUALIZAR UNA MATRIZ 
console.table(matriz);

// opcion 2

/*let arrayMatriz = [];

let fila1 = ["x0", "x1", " x2"];
let fila2 = ["y0", "y1", " y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

console.table(arrayMatriz);*/

// ACCEDER A UN ELEMENTO ESPECIFICO 

console.log(matriz[1][2]);
/*┌─────────┬───┬───┬───┐
  │ (index) │ 0 │ 1 │ 2 │
  ├─────────┼───┼───┼───┤
  │ 0       │ 1 │ 2 │ 3 │
  │ 1       │ 4 │ 5 │ 6 │
  │ 2       │ 7 │ 8 │ 9 │
  └─────────┴───┴───┴───┘ 
  el 1er corchete corresponde al indice fila, mientras que el
  2do corchete corresponde al indice columna 
  imprime el valor 6*/

// MODIFICAR UN ELEMENTO ESPECIFICO 

matriz[0][1] = 15;

console.table(matriz);
/*┌─────────┬───┬────┬───┐
  │ (index) │ 0 │ 1  │ 2 │
  ├─────────┼───┼────┼───┤
  │ 0       │ 1 │ 15 │ 3 │
  │ 1       │ 4 │ 5  │ 6 │
  │ 2       │ 7 │ 8  │ 9 │
  └─────────┴───┴────┴───┘*/

//   RECORRER UNA COLUMNA EN ESPECIFICO
// en este caso la columna 0 
console.log("recorro columna 0");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][0]);
}

//   RECORRER UNA FILA EN ESPECIFICO
// en este caso la columna 0 
console.log("recorro fila 2");

for (let i = 0; i < matriz[2].length; i++) {
    console.log(matriz[2][i]);
}



