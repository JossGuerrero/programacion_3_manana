console.log("OBJETOS")
let persona = {
    nombre: "ana",
    edad: 30,
    ciudad:"Quito"

};
console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificacion del objeto")
persona.nombre="Maria"
console.log(persona);
persona.direccion="Av. Occidental";
console.log(persona);
console.log("Eliminar clave al objeto");
delete persona.direccion;
console.log(persona);

console.log("recorrerun objeto");
for (let clave in persona){
    console.log(clave);
}
console.log("Mostrar claves con objetos.keys");
console.log(Object.keys(persona));
console.log("mostrar valores con Object.values");
console.log(Object.values(persona));
console.log("Objetos Animados");
let estudiante ={
    nombre:" Pedro",
    apellido: "Perez",
    contacto:{
        correo: "pedrito@gmail.com",
        telefono: "0284678494",
        celular: "0984678494"
    },
    materias: [
        {
        nombre: "programacion III",
        calificacion: 8
        },
        {
        nombre: "Base de datos II",
        calificacion: 9
        },

    ]
};
console.log("Estudiante: ",estudiante)