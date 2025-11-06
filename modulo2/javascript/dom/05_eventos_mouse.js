const caja = document.getElementById('caja')

caja.addEventListener('mouseover', ()=>{
    caja.style.background = 'yellow';
});
caja.addEventListener('mouseout', ()=>{
    caja.style.background = 'gray';
});
caja.addEventListener('click', ()=>{
    alert('Click');
});

const areaTouch = document.getElementById('areaTouch')

areaTouch.addEventListener('touchstart', ()=>{
    caja.style.background = 'blue';
});
areaTouch.addEventListener('touchend', ()=>{
    caja.style.background = 'green';
});
areaTouch.addEventListener('click', ()=>{
    alert('Click Area Touch');
});


