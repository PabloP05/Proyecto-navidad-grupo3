document.addEventListener('DOMContentLoaded', function() {
    const codigo = document.getElementById("codigo");
    const CreaSala = document.getElementById("CreaSala");

    if (codigo) {
        const random = Math.floor(Math.random() * 900000) + 100000;
      codigo.value = random;
        if ("value" in codigo) {
            codigo.value = random;
        } else {
            codigo.value = random;
        }
    }

    if (CreaSala) {
        CreaSala.addEventListener("click", () => {
            window.location.href = '../../html/juego/crearSala.html';
        });
    }
});
