class UnidadMovil {
    constructor(codigoUnidad) {
        this.codigoUnidad = codigoUnidad;
    }
    emitirAlerta() {
        console.log(`La unidad ${this.codigoUnidad} esta en operacion.`);
    }
}

class MetroTren extends UnidadMovil {
    reportarUbicacion() {
        console.log(`El Tren ${this.codigoUnidad} esta reportando su ubicacion centralmente.`);
    }
}

const trenPrincipal = new MetroTren('T-L1-001');
const alimentador = new UnidadMovil('BUS-A-50');

trenPrincipal.emitirAlerta();
trenPrincipal.reportarUbicacion();
alimentador.emitirAlerta();