console.log("FUNCIONES");

console.log("FORMA CLÁSICA");
function saludar(){
    console.log("Hola desde una función clásica");
}
saludar();

console.log("FORMA CON PARAMETROS Y RETORNOS");
function sumar(a,b){
    return a+b
}
let resultado=sumar(4,9);
console.log("La suma es", resultado);

console.log("FUNCIÓN FLECHA");
const resta=(a,b)=>{
    return a-b;
}
let resultadoResta=resta(9,5);
console.log("La resta es", resultadoResta); 

console.log("FUNCION RETORNO DIRECTO");
const cuadrado= x =>x*x;
console.log("Cuadrado de 5:", cuadrado(5));

console.log("FUNCIÓN CON PARAMETROS POR DEFECTO");
function saluda(nombre, saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo1 = saluda("Francisco");
let saludo2 = saluda("Francisco", "Buenos dias");
console.log(saludo1); 
console.log(saludo2); 

console.log("Funcion par o impar ")
function parimpar(numero) {
    if (numero % 2 == 0) {
      return "par";
    } else {
      return "impar";
    }
  }
console.log(parimpar(4)); 
console.log(parimpar(7)); 


console.log("AREA DE UN TRIANGULO")    
function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
  }
console.log(areaTriangulo(10, 5)); 
  