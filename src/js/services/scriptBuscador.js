document.getElementById('buscadorUsuarios').addEventListener('keyup', function () {
    const texto = this.value.toLowerCase().trim();
    const usuarios = document.querySelectorAll('.usuario');

    usuarios.forEach(usuario => {
        const nombre = usuario.querySelector('h2').textContent.toLowerCase();
        usuario.style.display = nombre.startsWith(texto) ? '' : 'none';
    });
});