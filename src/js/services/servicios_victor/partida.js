// =======================================
// partida.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnBuscarSala");
    const TOTAL_RONDAS = 10;

    if (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const codigo = document.getElementById("codigo").value.trim();
            if (!codigo) {
                alert("Introduce un código de sala");
                return;
            }
            iniciarPartida();
        });
    }

    function iniciarPartida() {
        localStorage.setItem("puntos", 0);
        localStorage.setItem("rondaActual", 0);
        irARonda();
    }

    async function irARonda() {
        let ronda = parseInt(localStorage.getItem("rondaActual") || 0) + 1;
        localStorage.setItem("rondaActual", ronda);

        if (ronda == TOTAL_RONDAS) {
            alert("¡Partida terminada! Puntos totales: " + (localStorage.getItem("puntos") || 0));

            // Crear FormData nuevo desde el sprint 3  Pablo
            const resultado = new FormData();
            resultado.append('idUsuario', localStorage.getItem('idusuario')); // usa la misma clave que guardaste en login
            resultado.append('puntos', localStorage.getItem("puntos"));
            resultado.append('idSala', '1000001');

            try {
                const res = await fetch('https://22.daw.esvirgua.com/registroJs/test/guardarPartidas.php', {
                    method: 'POST',
                    body: resultado
                });

                const texto = await res.text(); // usa text en vez de json
                console.log(texto);
                } catch (err) {
                    console.error("Error al guardar partida:", err);
                }
                // redirigir siempre, aunque falle el guardado
                window.location.href = "menuPrincipal.html";
                return;
        }

        const modos = ["preguntasRespuestas", "situaciones", "fotos"];
        const modo = modos[Math.floor(Math.random() * modos.length)];

        switch (modo) {
            case "preguntasRespuestas":
                window.location.href = "preguntasRespuestas.html";
                break;
            case "situaciones":
                window.location.href = "situaciones.html";
                break;
            case "fotos":
                window.location.href = "fotos.html";
                break;
        }
    }

    window.terminarRonda = irARonda;
});
