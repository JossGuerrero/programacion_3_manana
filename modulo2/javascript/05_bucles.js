suma=0
for (let i=1; i <=10;i++){
    console.log("numero", i);
    suma += i;
    console.log("suma", suma);
}

for (let i=1; i <=10;i++){
    suma+=i;
}
console.log("Sumatoria indices", suma);

for (let i = 1; i <= 10; i++) {
    console.log(`4 x ${i} = ${4 * i}`);
}


let nombre="francisco";
for (let i=0; i<nombre.length;i++){
    console.log(nombre[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("cuadrado de", i, "es", i**2)
}

console.log("Bucle While ");
let i=1
while(i<=6){
    console.log("Indice", i)
    i++;
}

//Arreglo 5 numeros, determina el mas alto//
let miArreglo=[-2,3,1,2,3];
let indice=1
while(indice<miArreglo.length){
    console.log("valor",indice,"es", miArreglo[indice]);
    indice++;
}

//Valores pares//
let ind = 1
while (ind <=10) {
    if (ind%2==0) 
        console.log("valor", ind, "es par");
    ind++;
}
//Bucles con do//
let x = 5
do {
    console.log("x es:", x)
    x--;
}while(x!=0);

//Multiplicación tabla del 5//
let mult = 1
while (mult <=10) { 
        console.log(mult,"*5=",mult*5);
    mult++;
}
let numer=[2,5,6,3,1];
let alto=0;
let contador=0;
while(alto<numer.length){
    if (numer[alto]>contador){
        contador=numer[alto]
    }
    alto++;
}
console.log(contador);


