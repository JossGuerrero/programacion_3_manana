import { Vehiculo } from "./11_herencia";

export class Camion extends Vehiculo{
    getCapacidadCarga(): void{
        console.log('Carga pesada'); 
    }
}
const miCamion = new Camion('Bulk', 'Cargamento'); 
console.log(miCamion.marca);
console.log(miCamion.tipo); 
miCamion.moverse(); 
miCamion.getCapacidadCarga(); 