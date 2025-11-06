let temperatura=35;

if(temperatura>30){
    console.log("Hace calor");
}

let password="pass123";
if(password==="pass12345"){
    console.log("Usuario logueado");
} else{
    console.log("Acceso denegado");
}

let nota=7;
if(nota>=9){
    console.log("Sobresaliente");
} else if (nota>=6){
    console.log("Aprobado");
} else { 
    console.log("Repbrobado");
}

let edad=20;
let tiene_licencia =true; 
if(edad>=18){
    if(tiene_licencia){
        console.log("Puede conducir");
    }else{
        console.log("Necesita Licencia para conducir");
    }
} else{
    console.log("Es menor de edad");
}

//Estructura Switch//
let dia ="lunes";
switch(dia){
    case "lunes": 
        console.log("Inicio de semana");
        break; 
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Día normal");
}


let sum1= 30;
let sum2=40;
let sum4=50;
mayor=0; 
if(sum1>sum2){
    mayor=sum1;
}if (sum4>mayor){
    mayor=sum4;
}
console.log("El numero mayor es", mayor);


