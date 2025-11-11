console.log("----- FUNCIONES -----");

console.log("forma clasica");
function saludar() {
    console.log("Hola desde una funcion clasica");
}
saludar();
console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar (a,b){
    return a+b
}
const resultado= sumar(4,9);
console.log("resultado de la suma:", resultado);

console.log("FUNCION LFECHA");
const resta = (a,b)=>{
    return a-b;
}
let resultadoResta = resta(9,5);
console.log("resultado de la resta:", resultadoResta);

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x=> x*x;
console.log("cuadrado de 5 es:", cuadrado(5));


console.log("FUNCION PARA DETERMINAR SI ES PAR O IMPAR");
function esParImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Impar";
}
console.log("El número 4 es:", esParImpar(4));
console.log("El número 7 es:", esParImpar(7));

console.log("CALCULO DEL AREA DE UN TRIANGULO");
function areatriangulo(base, altura) {
    return (base * altura)/2;
}
console.log("Área (base 10, altura 5):", areatriangulo(10, 5));
