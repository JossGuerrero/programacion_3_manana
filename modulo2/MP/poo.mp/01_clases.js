
class TREN{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }   

    start(){
        console.log(`${this.brand} ${this.model} esta encendido`);
    } 
    run(){
        console.log(`${this.brand} ${this.model} esta en movimiento`);
    }
    stop(){
        console.log(`${this.brand} ${this.model} se ha detenido`);
    }
}

const trenes = new TREN("Linea1");
trenes.start();
trenes.run();
trenes.stop();
    