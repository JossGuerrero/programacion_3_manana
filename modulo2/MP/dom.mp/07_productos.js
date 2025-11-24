const insumos = [
  { nombre: "Tarjeta Ciudad", categoria: "Venta", costo: 5.00, stock: 5000, ubicacion: "Boletería Labrador" },
  { nombre: "Ticket Térmico", categoria: "Consumible", costo: 0.05, stock: 20000, ubicacion: "Boletería Quitumbe" },
  { nombre: "Chaleco Reflectivo", categoria: "Uniforme", costo: 25.00, stock: 50, ubicacion: "Talleres Recreo" },
  { nombre: "Llanta Articulado", categoria: "Repuesto", costo: 450.00, stock: 12, ubicacion: "Mantenimiento Sur" },
  { nombre: "Radio Portátil", categoria: "Comunicaciones", costo: 180.00, stock: 20, ubicacion: "Centro de Control" },
  { nombre: "Validador NFC", categoria: "Hardware", costo: 1200.00, stock: 5, ubicacion: "Bodega Técnica" },
  { nombre: "Bobina Papel", categoria: "Insumo", costo: 8.50, stock: 100, ubicacion: "Estación Iñaquito" },
  { nombre: "Extintor PQS", categoria: "Seguridad", costo: 45.00, stock: 30, ubicacion: "Estación Jipijapa" },
  { nombre: "Señalética Piso", categoria: "Mantenimiento", costo: 15.00, stock: 200, ubicacion: "Estación San Francisco" },
  { nombre: "Aceite Motor", categoria: "Repuesto", costo: 12.00, stock: 80, ubicacion: "Talleres Chiriyacu" }
];

const tabla = document.getElementById('cuerpoTabla');

insumos.forEach(item => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${item.nombre}</td>
    <td>${item.categoria}</td>
    <td>$${item.costo.toFixed(2)}</td>
    <td>${item.stock}</td>
    <td>${item.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});