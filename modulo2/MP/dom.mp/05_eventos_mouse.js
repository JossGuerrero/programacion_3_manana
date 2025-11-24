const validador = document.getElementById('validador');

validador.addEventListener('mouseover', () => {
    validador.style.background = '#03a9f4'; 
    validador.textContent = "VALIDANDO...";
});

validador.addEventListener('mouseout', () => {
    validador.style.background = 'gray';
    validador.textContent = "ACERCAR TARJETA";
});

validador.addEventListener('click', () => {
    alert('¡BEEP! Acceso Autorizado. Saldo descontado: $0.45');
});

const pantallaAyuda = document.getElementById('pantallaAyuda');

pantallaAyuda.addEventListener('touchstart', () => {
    pantallaAyuda.style.background = 'red';
    pantallaAyuda.textContent = "LLAMANDO...";
});

pantallaAyuda.addEventListener('touchend', () => {
    pantallaAyuda.style.background = 'green';
    pantallaAyuda.textContent = "TOCAR PARA AYUDA";
});

pantallaAyuda.addEventListener('click', () => {
    alert('Conectando con operador del SITM-Q...');
});