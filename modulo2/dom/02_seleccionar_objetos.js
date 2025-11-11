const titulo = document.getElementById('titulo');
console.log(titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota=>console.log(nota.textContent));
const items = document.getElementsByClassName('item');
Array.from(items).forEach(items=>console.log(items.textContent));
const usuarios = document.getElementsByName('usuario');
Array.from(usuarios).forEach(usuarios=>console.log(usuarios.textContent));

