class MetroTren {
    constructor(numeroSerie, ruta) {
        this.numeroSerie = numeroSerie;
        this.ruta = ruta;
    }

    abrirPuertas() {
        console.log(`Tren ${this.numeroSerie} en ruta ${this.ruta}: Puertas abiertas.`);
    }

    iniciarMarcha() {
        console.log(`Tren ${this.numeroSerie}: Iniciando marcha hacia la siguiente estación.`);
    }

    llegarEstacion() {
        console.log(`Tren ${this.numeroSerie}: Ha llegado a la estación y se ha detenido.`);
    }
}

const trenLinea1 = new MetroTren("T-001", "Quitumbe - El Labrador");

trenLinea1.abrirPuertas();
trenLinea1.iniciarMarcha();
trenLinea1.llegarEstacion();