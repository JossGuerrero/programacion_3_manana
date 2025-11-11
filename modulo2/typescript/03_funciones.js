function saludar(nombre) {
    return "hola ".concat(nombre);
}
console.log(saludar('francisco'));
//funcion flecha
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(5, 5));
function saludarDeNuevo() {
    console.log('Hola');
    console.log('Bienvenido a Typescript');
}
saludarDeNuevo;
