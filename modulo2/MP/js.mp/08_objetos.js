console.log("OBJETOS");
let unidad = {
    id: "M007",
    tipo: "Metro",
    capacidad: 1500,
    ruta: "Línea 1"
};

console.log(unidad);
console.log(unidad.id);
console.log(unidad.ruta);
console.log(unidad["capacidad"]);

console.log("MODIFICACION DEL OBJETO");
unidad.tipo = "Trolebus";
console.log(unidad);
unidad.estado = "Operativo";
console.log(unidad);

console.log("ELIMINAR CLAVE AL OBJETO");
delete unidad.estado;
console.log(unidad);

console.log("RECORRER UN OBJETO");
for (let clave in unidad) {
    console.log(clave);
}

console.log("MOSTRAR CLAVES CON OBJECT.KEYS");
console.log(Object.keys(unidad));

console.log("MOSTRAR VALORES CON OBJECT.VALUES");
console.log(Object.values(unidad));

console.log("OBJETOS ANIDADOS");
let estacion = {
    nombre: "El Recreo",
    tipo: "Integración",
    ubicacion: {
        sector: "Sur",
        calle: "Av. Maldonado",
        referencia: "Centro Comercial"
    },
    andenes: [
        {
            numero: 1,
            servicio: "Trolebus Norte"
        },
        {
            numero: 2,
            servicio: "Corredor Sur"
        }
    ]
};
console.log("Estación: ", estacion);