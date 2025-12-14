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
            // DEBUG: Verificar qué se está enviando
            const idUsuario = localStorage.getItem('idUsuario');
            const puntos = localStorage.getItem("puntos");
            // console.log("Intentando guardar partida:", { idUsuario, puntos });

            if (!idUsuario) {
                alert("Error: No se encontró ID de usuario. Asegúrate de haber iniciado sesión.");
                window.location.href = "menuPrincipal.html";
                return;
            }

            const resultado = new FormData();
            resultado.append('id', idUsuario);
            resultado.append('puntos', puntos);
            resultado.append('idSala', '1000001');

            try {
                // Usar ruta absoluta desde la raíz del servidor para evitar errores de ruta relativa
                const res = await fetch('../../../test/guardarPartidas.php', {
                    method: 'POST',
                    body: resultado
                });

                const texto = await res.text();
                console.log("Respuesta del servidor:", texto);

                try {
                    const json = JSON.parse(texto);
                    if (res.ok && json.status === 'ok') {
                        console.log("✓ Partida guardada correctamente");
                        alert("¡Partida guardada correctamente!");
                    } else {
                        console.error("✗ Error al guardar:", json.message || "Error desconocido");
                        alert("Error al guardar partida: " + (json.message || "Error desconocido"));
                    }
                } catch (e) {
                    console.error("No se pudo parsear JSON:", texto);
                    alert("Error de servidor: " + texto.substring(0, 100)); // Mostrar primeros caracteres del error
                }

            } catch (err) {
                    console.error("Error de conexión:", err);
                    alert("Error de conexión con el servidor. Verifica que XAMPP esté activo.");
            }
                
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
