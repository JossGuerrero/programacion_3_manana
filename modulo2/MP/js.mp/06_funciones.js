console.log("----- FUNCIONES SITM-Q -----");

console.log("FUNCIÓN CLÁSICA");
function iniciarSistema() {
    console.log("Sistema de Transporte SITM-Q iniciado correctamente.");
}
iniciarSistema();

console.log("FUNCIÓN CON PARÁMETROS Y RETORNO");
function calcularTarifaTotal(viajes, costoUnitario) {
    return viajes * costoUnitario;
}
const totalRecarga = calcularTarifaTotal(10, 0.45);
console.log("Recarga total para 10 viajes (0.45 USD): " + totalRecarga);

console.log("FUNCIÓN FLECHA (ARROW FUNCTION)");
const obtenerSaldoRestante = (saldoInicial, pasajesConsumidos) => {
    return saldoInicial - (pasajesConsumidos * 0.45);
}
let saldoFinal = obtenerSaldoRestante(5.00, 3);
console.log("Saldo restante después de 3 viajes: " + saldoFinal);

console.log("FUNCIÓN RETORNO DIRECTO (FLECHA)");

const capacidadTren = numVagones => numVagones * 300; 
console.log("Capacidad para un tren de 6 vagones: " + capacidadTren(6));

console.log("FUNCIÓN PARA DETERMINAR TIPO DE TREN");
function esTrenLargo(vagones) {
    return vagones >= 6 ? "Tren Largo" : "Tren Corto";
}
console.log("El tren con 6 vagones es: " + esTrenLargo(6));
console.log("El tren con 4 vagones es: " + esTrenLargo(4));