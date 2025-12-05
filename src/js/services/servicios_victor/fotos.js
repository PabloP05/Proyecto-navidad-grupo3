document.addEventListener("DOMContentLoaded", function() {

    //respuestas de prueba, esto viene de servidor (lo he hecho para que cuando venga de servidor es el mismo formato de datos)
    const fotos = [
        {
            src: "../../css/icon/pregunta.png",
            opciones: [
                { texto: "Respuesta A", correcta: true },
                { texto: "Respuesta B", correcta: false }
            ]
        },
        {
            src: "../../css/icon/pregunta.png",
            opciones: [
                { texto: "Respuesta A", correcta: false },
                { texto: "Respuesta B", correcta: true }
            ]
        }
    ];


    const seccion = document.getElementById("opcionesFoto");
    const h2 = document.querySelector("main h2");
    const imagen = document.getElementById("imagenFoto");
    const btnEnviar = document.getElementById("btnEnviar");
    const btnPasar = document.getElementById("btnPasar");

    let ultimaSeleccion = null;

    const foto = fotos[Math.floor(Math.random() * fotos.length)];
    imagen.src = foto.src;
    h2.textContent = "¿Qué opción es correcta?";

    foto.opciones.forEach((opcion, i) => {
        const div = document.getElementById("pregunta" + (i + 1));
        const input = div.querySelector("input");
        const p = div.querySelector("p");

        input.dataset.correcta = opcion.correcta ? "1" : "0";
        p.textContent = opcion.texto;

        input.addEventListener("change", function() {
            ultimaSeleccion = input;
            btnEnviar.style.display = "inline-block";
        });
    });

    btnEnviar.addEventListener("click", function() {
        if (!ultimaSeleccion) return;

        const correcta = ultimaSeleccion.dataset.correcta === "1";

        if (correcta) {
            let puntos = parseInt(localStorage.getItem("puntos")) || 0;
            puntos++;
            localStorage.setItem("puntos", puntos);
        }

        //pop up de resultado
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

        btnEnviar.style.display = "none";
    });

    //para pasar de ronda, localstorage
    btnPasar.addEventListener("click", function() {
        if (typeof window.terminarRonda === "function") {
            window.terminarRonda();
        }
    });

    // Mostrar contador de ronda
    function mostrarContadorRonda() {
        let ronda = localStorage.getItem("rondaActual");
        if (!ronda) ronda = 1;
        let puntos = localStorage.getItem("puntos");
        if (!puntos) puntos = 0;
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
    }

});
