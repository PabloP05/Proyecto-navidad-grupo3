const cerrarModal = document.getElementById('cerrarModal');
const modal = document.getElementById('modalFondo');

const partida = document.getElementById('btnIniciarPartida')
const sala = document.getElementById('btnCrearSala');
partida.addEventListener('click',()=>{
    modal.style.display="block"
});
sala.addEventListener('click',()=>{
    modal.style.display="block"
});


cerrarModal.addEventListener('click',()=>{
    modal.style.display="none"
});

