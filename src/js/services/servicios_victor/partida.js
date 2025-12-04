// =======================================
// partida.js
// =======================================


// Esto es para entrar a la partida, cuando haya serviddor se comprobar que la sala existe
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnBuscarSala");

    // Total de rondas
    const TOTAL_RONDAS = 10;

    // Botón unir sala
    if (btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault(); // no hace el f5

            const codigo = document.getElementById("codigo").value.trim();
            if (!codigo) {
                alert("Introduce un código de sala");
                return;
            }

            iniciarPartida();
        });
    }

    function iniciarPartida() {
        // Reset de partida
        localStorage.setItem("puntos", 0);
        localStorage.setItem("rondaActual", 0);

        // Pasar a la primera ronda
        irARonda();
    }

    function irARonda() {
        let ronda = parseInt(localStorage.getItem("rondaActual") || 0) + 1;
        localStorage.setItem("rondaActual", ronda); //guarda la ronda

        if (ronda > TOTAL_RONDAS) {
            alert("¡Partida terminada! Puntos totales: " + (localStorage.getItem("puntos") || 0));
            return;
        }

        //para el random de modos
        const modos = ["preguntasRespuestas", "situaciones", "fotos"];
        const modo = modos[Math.floor(Math.random() * modos.length)];

        //selecciona el modo
        switch(modo) {
            case "preguntasRespuestas":
                window.location.href = "/src/html/victor/preguntasRespuestas.html";
                break;
            case "situaciones":
                window.location.href = "/src/html/victor/situaciones.html";
                break;
            case "fotos":
                window.location.href = "/src/html/victor/fotos.html";
                break;
        }
    }

    // Exponer globalmente para los scripts de cada modo
    window.terminarRonda = irARonda;

});
