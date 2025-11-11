class animal{
    constructor(nombre){
        this.nombre=nombre
    }
    hacerSonido(){
        console.log("Ealiza algun ruido")
    }
}

class Perro extends animal{}
const miperro =new Perro ('Tobi');
const miAnimal= new animal('Lucero');
miperro.hacerSonido();
miAnimal.hacerSonido();