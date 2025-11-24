
class Pasajero {
    constructor(nombre, edad, tarjetaActiva) {
        this.nombre = nombre;
        this.edad = edad;
        this.tarjetaActiva = tarjetaActiva;
    }

    verificarEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} (${this.edad} anos) es Mayor de edad. Aplica tarifa completa.`);
        } else {
            console.log(`${this.nombre} (${this.edad} anos) es Menor de edad. Podria aplicar tarifa preferencial.`);
        }
    }

    validarAcceso() {
        if (this.tarjetaActiva) {
            console.log(`${this.nombre}: ACCESO AUTORIZADO. Tarjeta activa.`);
        } else {
            console.log(`${this.nombre}: ACCESO DENEGADO. Tarjeta inactiva o sin saldo.`);
        }
    }
}

const Pedro = new Pasajero('Pedro', 17, true);
Pedro.verificarEdad();
Pedro.validarAcceso();

const Ana = new Pasajero('Ana', 35, false);
Ana.verificarEdad();
Ana.validarAcceso();
