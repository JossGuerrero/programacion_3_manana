let nivelOcupacion = 85;

if (nivelOcupacion > 80) {
    console.log("ALERTA DE OCUPACION: El tren está cerca de su máxima capacidad.");
}

let tarjetaValida = "Activa";
let estadoEsperado = "Activa";

if (tarjetaValida === estadoEsperado) {
    console.log("ACCESO AUTORIZADO: Pase por el validador.");
} else {
    console.log("ACCESO DENEGADO: Tarjeta no activa o bloqueada.");
}

let saldoTarjeta = 0.50;
let tarifaRequerida = 0.45;

if (saldoTarjeta >= 1.00) {
    console.log("SALDO ÓPTIMO: Saldo suficiente para varios viajes.");
} else if (saldoTarjeta >= tarifaRequerida) {
    console.log("SALDO MiNIMO: Aprobado para un viaje.");
} else {
    console.log("SALDO INSUFICIENTE: Por favor, recargue su tarjeta.");
}

let esAdultoMayor = true;
let tieneCarnet = true;

if (esAdultoMayor) {
    if (tieneCarnet) {
        console.log("ACCESO PREFERENCIAL: Tarifa reducida aplicada.");
    } else {
        console.log("VERIFICAR: Requiere carnet para aplicar la tarifa preferencial.");
    }
} else {
    console.log("ACCESO NORMAL: Aplica tarifa completa.");
}

let diaSemana = "viernes";

switch (diaSemana) {
    case "lunes":
        console.log("HORARIO PICO: Refuerzo en todas las rutas troncales.");
        break;
    case "viernes":
        console.log("OPERACION EXTENDIDA: Servicio activo hasta las 23:00.");
        break;
    case "sábado":
    case "domingo":
        console.log("HORARIO FIN DE SEMANA: Frecuencia de trenes reducida.");
        break;
    default:
        console.log("HORARIO REGULAR: Operación estándar.");
}