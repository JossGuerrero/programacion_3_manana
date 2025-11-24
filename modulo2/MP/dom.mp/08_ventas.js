const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorEstaciones');
let estaciones = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const linea = document.getElementById('linea').value.trim();
  const tarifa = parseFloat(document.getElementById('tarifa').value.trim());

  if (nombre && linea && !isNaN(tarifa)) {
    const nuevaEstacion = { id: Date.now(), nombre, linea, tarifa };
    estaciones.push(nuevaEstacion);
    renderizarEstacion(nuevaEstacion);
    formulario.reset();
  }
});

function renderizarEstacion({ id, nombre, linea, tarifa }) {
  const div = document.createElement('div');
  div.className = 'estacion';
  div.setAttribute('data-id', id);
  div.style.border = "1px solid #031f99";
  div.style.margin = "10px";
  div.style.padding = "10px";
  
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${linea}</p>
    <p><strong>Tarifa: $${tarifa.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.estacion');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    estaciones = estaciones.filter(c => c.id !== id);
    tarjeta.remove();
  }
});