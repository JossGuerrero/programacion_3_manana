function saludar (nombre: string):string{
    return `hola ${nombre}`;
}

console.log(saludar('francisco'));

//funcion flecha

const sumar =(a: number, b: number):number=>{
    return a + b;
}
console.log(sumar(5,5));

function saludarDeNuevo(): void{
    console.log('Hola')
    console.log('Bienvenido a Typescript');
}
saludarDeNuevo