let capacidadMaximaMetro = 1500;
let trenesEnLinea = 5;
let sumatoriaCapacidad = 0;
let estacionesMetro = ["Quitumbe", "El Recreo", "Cochapamba", "Alameda", "El Labrador"];

for (let i = 1; i <= trenesEnLinea; i++) {
    let capacidadActual = capacidadMaximaMetro * i;
    console.log(`Tren ${i}: Capacidad acumulada = ${capacidadActual} pasajeros.`);
    sumatoriaCapacidad += capacidadMaximaMetro;
}
console.log("Sumatoria de Capacidad Máxima de la Flota:", sumatoriaCapacidad);

