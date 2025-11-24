let ticket = null;

document.getElementById('crear').addEventListener('click', () => {
    ticket = document.createElement('p');
    ticket.textContent = "Ticket Generado: Viaje Metro - $0.45";
    document.getElementById('contenedor').appendChild(ticket);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (ticket) {
        ticket.remove();
        ticket = null; 
    }
});

function consultarSaldo() {
    alert("Saldo actual: $2.50");
}

document.getElementById('parrafo').addEventListener('dblclick', () => {
    alert("¡Acceso Validado! Puede pasar.");
});

document.getElementById('nombre').addEventListener('input', (e) => {
    console.log("Buscando estación:", e.target.value);
});

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Búsqueda enviada al sistema central.");
});