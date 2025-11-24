try {
    console.log(estacionNoDefinida);
} catch (error) {
    console.log("Error de Sistema:", error.message);
}

try {
    console.log("Validando tarjeta SITM-Q en el torniquete...");
    throw new Error("Saldo Insuficiente para ingresar");
} catch (error) {
    console.log("Error de Validación:", error.message);
} finally {
    console.log("Operación finalizada: Por favor retire su tarjeta.");
}