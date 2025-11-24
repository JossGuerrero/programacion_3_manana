
class EmpleadoSITMQ {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log(this.nombre + " está realizando tareas base del SITM-Q...");
    }

    calcularBonoAnual() {
        return this.salario * 0.15;
    }

    valorHorasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Conductor extends EmpleadoSITMQ {
    calcularBonoAnual() {
        return this.salario * 0.20;
    }

    valorHorasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class PersonalEstacion extends EmpleadoSITMQ {
    calcularBonoAnual() {
        return this.salario * 0.10;
    }
}

// ...existing code...
const condAndres = new Conductor('Andrés', 1800);
const estMarta = new PersonalEstacion('Marta', 950);

condAndres.trabajar();
estMarta.trabajar();

console.log("Bono de", condAndres.nombre + ":", "$" + condAndres.calcularBonoAnual().toFixed(2));
console.log("Bono de", estMarta.nombre + ":", "$" + estMarta.calcularBonoAnual().toFixed(2));
console.log("Horas extra (5h) de", condAndres.nombre + ":", "$" + condAndres.valorHorasExtra(5).toFixed(2));
console.log("Horas extra (4h) de", estMarta.nombre + ":", "$" + estMarta.valorHorasExtra(4).toFixed(2));

