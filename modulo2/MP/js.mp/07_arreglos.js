
let tiemposEspera = [10, 5, 26, 9];
let paradasVacias = new Array();
let unidadesFueraDeServicio = [];

console.log(paradasVacias);
console.log(unidadesFueraDeServicio);

console.log("ARREGLO DE TIEMPOS DE ESPERA");
console.log("Tiempo de la primera ruta: " + tiemposEspera[0]);
console.log("Tiempo de la cuarta ruta: " + tiemposEspera[3]);

console.log("MODIFICAR ELEMENTOS DEL ARRAY");
tiemposEspera[0] = 3; 
console.log(tiemposEspera);

console.log("AGREGAR ELEMENTOS AL FINAL DEL ARRAY (PUSH)");
tiemposEspera.push(15);
console.log(tiemposEspera);

console.log("AGREGAR ELEMENTOS AL INICIO DEL ARRAY (UNSHIFT)");
tiemposEspera.unshift(1);
console.log(tiemposEspera);

console.log("ELIMINAR EL ÚLTIMO ELEMENTO DEL ARRAY (POP)");
tiemposEspera.pop();
console.log(tiemposEspera); 

console.log("ELIMINAR EL PRIMER ELEMENTO DEL ARRAY (SHIFT)");
tiemposEspera.shift();
console.log(tiemposEspera);

console.log("ITERACIÓN DE ARRAYS");

let indice = 0;
console.log("ITERACIÓN CON WHILE");
while (indice < tiemposEspera.length) {
    console.log("Valor en índice " + indice + " es " + tiemposEspera[indice] + " minutos");
    indice++;
}

console.log("ITERACIÓN CON FOR");
for (let i = 0; i < tiemposEspera.length; i++) {
    console.log(tiemposEspera[i] + " minutos");
}

console.log("ITERACIÓN CON FOR...OF");
for (let tiempo of tiemposEspera) {
    console.log("El tiempo de espera es: " + tiempo + " minutos");
}

console.log("ITERACIÓN CON FOR EACH");
tiemposEspera.forEach(function(valor, indice) {
    console.log(`Ruta ${indice + 1}: ${valor} minutos de espera.`);
});
