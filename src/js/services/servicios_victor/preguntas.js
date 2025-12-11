document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Realizar el fetch para obtener las preguntas desde el servidor
        const resultadoPreguntas = await fetch("https://22.daw.esvirgua.com/cargadorCliente/php/index.php?c=C_sacarPreguntasRespuestas&m=obtenerPreguntasRespuestas");
        const datosPreguntas = await resultadoPreguntas.json();

        // Log para verificar los datos obtenidos
        console.log("Datos obtenidos del servidor:", datosPreguntas);

        // Transformar los datos obtenidos en el formato esperado
        const preguntas = datosPreguntas.preguntas.map(pregunta => ({
            pregunta: pregunta.pregunta,
            opciones: pregunta.respuestas.map((respuesta) => ({
                texto: respuesta.respuesta,
                correcta: respuesta.correcta
            }))
        }));

        let ultimaSeleccion = null;
        let temporizadorInterval = null;

        function mostrarPreguntaAleatoria() {
            const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
            document.querySelector("main h2").textContent = pregunta.pregunta;

            const opcionesPregunta = document.getElementById("opcionesPregunta");
            opcionesPregunta.innerHTML = ""; // Limpiar las opciones anteriores

            pregunta.opciones.forEach((opcion, i) => {
                const contenedor = document.createElement("div");
                contenedor.className = "contenedor-pregunta";

                const input = document.createElement("input");
                input.type = "radio";
                input.name = "preguntaX";
                input.dataset.correcta = opcion.correcta ? "1" : "0";

                input.onclick = function () {
                    seleccionarRespuesta(input);
                };

                const texto = document.createElement("p");
                texto.textContent = opcion.texto;

                contenedor.appendChild(input);
                contenedor.appendChild(texto);
                opcionesPregunta.appendChild(contenedor);
            });

            iniciarTemporizador(30, document.getElementById("tiempo"), tiempoAgotado);
        }

        function seleccionarRespuesta(input) {
            ultimaSeleccion = input;

            const contenedores = document.querySelectorAll(".contenedor-pregunta");
            contenedores.forEach(div => div.classList.remove("selected"));
            input.parentElement.classList.add("selected");

            // Crear botÃ³n Siguiente si no existe
            if (!document.getElementById("btnSiguiente")) {
                const btn = document.createElement("button");
                btn.id = "btnSiguiente";
                btn.textContent = "Siguiente";
                btn.style.display = "block";
                btn.style.marginTop = "20px";
                document.querySelector("main").appendChild(btn);

                btn.onclick = function () {
                    clearInterval(temporizadorInterval);
                    mostrarPopup();
                };
            }
        }

        function tiempoAgotado() {
            mostrarPopup();
        }

        function iniciarTemporizador(duracion, displayElement, callback) {
            let tiempo = duracion;

            function actualizarContador() {
                displayElement.textContent = `Tiempo: ${tiempo}`;
                if (tiempo <= 5) displayElement.style.color = "red";

                if (tiempo < 0) {
                    clearInterval(temporizadorInterval);
                    callback();
                }
                tiempo--;
            }

            actualizarContador();
            temporizadorInterval = setInterval(actualizarContador, 1000);
        }

        function mostrarPopup() {
            const correcta = ultimaSeleccion && ultimaSeleccion.dataset.correcta === "1";

            if (correcta) {
                let puntos = parseInt(localStorage.getItem("puntos")) || 0;
                puntos++;
                localStorage.setItem("puntos", puntos);
            }

            const popup = document.createElement("div");
            popup.textContent = correcta ? "Â¡Correcto!" : "Â¡Incorrecto!";
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.padding = "20px";
            popup.style.backgroundColor = correcta ? "green" : "red";
            popup.style.color = "white";
            popup.style.fontSize = "20px";
            popup.style.borderRadius = "10px";
            popup.style.zIndex = "1000";
            document.body.appendChild(popup);

            setTimeout(function () {
                popup.remove();
                if (typeof window.terminarRonda === "function") {
                    window.terminarRonda();
                }
            }, 1500);

            const btn = document.getElementById("btnSiguiente");
            if (btn) btn.remove();
        }

        function mostrarContadorRonda() {
            let ronda = localStorage.getItem("rondaActual") || 1;
            let puntos = localStorage.getItem("puntos") || 0;
            let div = document.getElementById("contadorRonda");
            if (!div) {
                div = document.createElement("div");
                div.id = "contadorRonda";
                div.style.position = "fixed";
                div.style.bottom = "20px";
                div.style.right = "20px";
                div.style.background = "#222";
                div.style.color = "#fff";
                div.style.padding = "8px 16px";
                div.style.borderRadius = "8px";
                div.style.fontWeight = "bold";
                div.style.zIndex = "9999";
                document.body.appendChild(div);
            }
            div.textContent = `Ronda: ${ronda} | Puntos: ${puntos}`;
        }

        mostrarContadorRonda();
        mostrarPreguntaAleatoria();
    } catch (error) {
        console.error("Error al obtener las preguntas: ", error);
    }
});