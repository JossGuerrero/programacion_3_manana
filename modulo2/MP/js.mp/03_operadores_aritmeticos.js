tarifaMetro=0.45;
numUsuariosHoy=15000;
capacidadTren=1500;
numTrenes=10;

console.log("OPERACIONES ARITMETICAS SITM-Q");

recaudacionEstimada=tarifaMetro + numUsuariosHoy;
console.log("Suma (Recaudación Estimada):", recaudacionEstimada);

capacidadTotalTrenes=capacidadTren * numTrenes;
usuariosRestantes=capacidadTotalTrenes - numUsuariosHoy;
console.log("Resta (Usuarios Restantes):", usuariosRestantes);

capacidadTotal=capacidadTren * numTrenes;
console.log("Multiplicacion (Capacidad Total):", capacidadTotal);

viajesNecesarios=numUsuariosHoy / capacidadTren;
console.log("Division (Viajes Necesarios):", viajesNecesarios);

asientosSobrantes=numUsuariosHoy % capacidadTren;
console.log("Modulo (Asientos sobrantes en el último tren):", asientosSobrantes);

costoPotencia=tarifaMetro ** 3;
console.log("Potencia (Costo^3 - Ejemplo):", costoPotencia);


console.log("OPERADORES COMPARACION");
numUsuariosEsperados="15000";

console.log("Igualdad débil == (15000 == '15000'):", numUsuariosHoy == numUsuariosEsperados);
console.log("Igualdad estricta === (15000 === '15000'):", numUsuariosHoy === numUsuariosEsperados);
console.log("Desigualdad débil != (15000 != '15000'):", numUsuariosHoy != numUsuariosEsperados);
console.log("Desigualdad estricta !== (15000 !== '15000'):", numUsuariosHoy !== numUsuariosEsperados);

console.log("Mayor que > (15000 > 10000):", numUsuariosHoy > 10000);
console.log("Menor que < (15000 < 10000):", numUsuariosHoy < 10000);
console.log("Mayor o igual >= (15000 >= 15000):", numUsuariosHoy >= 15000);
console.log("Menor o igual <= (15000 <= 15000):", numUsuariosHoy <= 15000);


console.log("OPERADORES LOGICOS");
hayTrenesDisponibles=true;
hayFallaElectrica=false;

console.log("Y (AND && - Operativo Y Sin Fallas):", hayTrenesDisponibles && !hayFallaElectrica);
console.log("O (OR || - Trolebús O Ecovía funcionando):", hayTrenesDisponibles || hayFallaElectrica);
console.log("Negación (! - Falla Electrica NO es verdad):", !hayFallaElectrica);