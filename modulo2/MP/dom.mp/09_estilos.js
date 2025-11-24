const alerta = document.getElementById('alerta');
const estados = [
    { color: '#031f99', texto: 'SERVICIO NORMAL' },
    { color: '#ffc107', texto: 'RETRASOS LEVES' },
    { color: '#dc3545', texto: 'INTERRUPCIÓN MAYOR' },
    { color: '#28a745', texto: 'OPERATIVO AL 100%' }
];

function cambiarEstado() {
    const randomEstado = estados[Math.floor(Math.random() * estados.length)];
    alerta.style.backgroundColor = randomEstado.color;
    alerta.textContent = randomEstado.texto;
}

function aumentarImpacto() {
    const width = parseInt(alerta.style.width);
    const height = parseInt(alerta.style.height);
    const fontSize = parseInt(alerta.style.fontSize);

    alerta.style.width = (width + 30) + 'px';
    alerta.style.height = (height + 10) + 'px';
    alerta.style.fontSize = (fontSize + 2) + 'px';
}

function reiniciar() {
    alerta.style.width = '150px';
    alerta.style.height = '50px';
    alerta.style.fontSize = '14px';
    alerta.style.backgroundColor = '#031f99';
    alerta.textContent = 'SERVICIO NORMAL';
}