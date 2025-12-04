document.addEventListener("DOMContentLoaded", function() {

    //respuestas de prueba, esto viene de servidor (lo he hecho para que cuando venga de servidor es el mismo formato de datos)
    const preguntas = [
        {
            pregunta: "¿Cuál de estas acciones NO es bullying?",
            opciones: [
                { texto: "Ayudar a un compañero", correcta: true },
                { texto: "Insultar a un compañero", correcta: false },
                { texto: "Reírse de alguien", correcta: false }
            ]
        },
        {
            pregunta: "Si ves bullying, ¿qué deberías hacer?",
            opciones: [
                { texto: "Ignorarlo", correcta: false },
                { texto: "Avisar a un adulto", correcta: true },
                { texto: "Reírte para encajar", correcta: false }
            ]
        }
    ];

    let ultimaSeleccion = null;
    let temporizadorInterval = null;

    function mostrarPreguntaAleatoria() {
        const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
        document.querySelector("main h2").textContent = pregunta.pregunta;

        const contenedores = document.querySelectorAll(".contenedor-pregunta");

        contenedores.forEach(function(div, i) {
            const input = div.querySelector("input");
            const p = div.querySelector("p");

            p.textContent = pregunta.opciones[i].texto;
            input.checked = false;
            div.classList.remove("selected");
            input.dataset.correcta = pregunta.opciones[i].correcta ? "1" : "0";

            input.onclick = function() {
                seleccionarRespuesta(input);
            };
        });

        iniciarTemporizador(30, document.getElementById("tiempo"), tiempoAgotado);
    }

    function seleccionarRespuesta(input) {
        ultimaSeleccion = input;

        const contenedores = document.querySelectorAll(".contenedor-pregunta");
        contenedores.forEach(div => div.classList.remove("selected"));
        input.parentElement.classList.add("selected");

        // Crear botón Siguiente si no existe
        if (!document.getElementById("btnSiguiente")) {
            const btn = document.createElement("button");
            btn.id = "btnSiguiente";
            btn.textContent = "Siguiente";
            btn.style.display = "block";
            btn.style.marginTop = "20px";
            document.querySelector("main").appendChild(btn);

            btn.onclick = function() {
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
        popup.textContent = correcta ? "¡Correcto!" : "¡Incorrecto!";
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

        setTimeout(function() {
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

    window.onload = function() {
        mostrarContadorRonda();
        mostrarPreguntaAleatoria();
    };
});
