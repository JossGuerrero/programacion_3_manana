for (let i = 1; i <= 10; i++) {
  let resultado = 4 * i;
  console.log(`4 x ${i} = ${resultado}`);
}
console.log-("sumatoria de indices", suma );
nombre= "francisco";
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}


for (let i=1; i<=10; i++){
    consolw.log("cuadrado de", i, "es", i*2);
}
console.log("bucle while");
let i=1
while(i<=6){
    console.log("Indice",i)
    i++;
}
let miArreglo=[-2,3,1,2,3];
let indice=1
while(indice<miArreglo.length){
    console.log("valor", indice, "es", miArreglo[indice]);
    indice++;
}

let numero=1
while(numero){
    if(numero%2!=0)
    console.log("numero",numero, "es par");
    numero++;
}

let mmult=1
while(mmult<=10){
    console.log("tabla del 5:", 5*mmult);
    mmult++;
}
let miarreglo2=-[2,3,1,2,3];
let indice2=0
let mayor=0
while(indice2<miarreglo2.length){
    if(miarreglo2[indice2]>mayor){
        mayor=miarreglo2[indice2];
    }
    indice2++;
}
console.log(mayor);