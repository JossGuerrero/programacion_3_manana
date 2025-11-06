import { Vehiculo, Moto} from "./11_herencia"; 

const micarro=new Vehiculo('Toyota', 'Sedan'); 
console.log(micarro.marca); 
console.log(micarro.tipo); 
micarro.moverse(); 

const miMotocicleta =
    new Moto('Honda', 'Alto cilindraje'); 
console.log(miMotocicleta.marca); 
console.log(miMotocicleta.tipo); 
miMotocicleta.moverse();