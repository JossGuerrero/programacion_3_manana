const mensaje = document.getElementById('mensaje');
mensaje.textContent = "ALERTA: Retrasos en la Línea 1 por mantenimiento";
mensaje.style.color = "red";

const link = document.getElementById('link');
link.setAttribute('href', 'https://metrodequito.gob.ec');
link.classList.add('boton');