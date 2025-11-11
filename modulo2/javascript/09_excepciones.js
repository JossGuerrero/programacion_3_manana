try{
    console.log(variableNoDelcarada);
}catch(error){
    console.log("mensaje de error : ",error, message);
}

try {
    console.log("Intentando abrir archivo. . . ");
    throw new Error("Archivo No encontrado")
} catch (error){
    console.log("mensaje de error :", error.message);
} finally{
    console.log('finalizando intento de abrir archivo');
}