// =======================================
// situaciones.js
// =======================================

document.addEventListener("DOMContentLoaded", function() {

    let ultimaSeleccion = [];

    // situaciones de prueba (simulando datos del servidor)
    const situaciones = [
        {
            situacion: "Ves a un compañero siendo acosado en clase. ¿Qué harías?",
            opciones: [
                { texto: "Ignorar", correcta: false },
                { texto: "Avisar a un adulto", correcta: true },
                { texto: "Unirse al acoso", correcta: false },
                { texto: "Defenderlo verbalmente", correcta: true },
                { texto: "Reírse", correcta: false },
                { texto: "Llamar a sus padres", correcta: true }
            ]
        },
        {
            situacion: "Alguien publica rumores falsos sobre un compañero. ¿Qué opciones son correctas?",
            opciones: [
                { texto: "Decirle a un adulto", correcta: true },
                { texto: "Compartirlo en redes", correcta: false },
                { texto: "Ignorarlo", correcta: false },
                { texto: "Apoyar a la víctima", correcta: true },
                { texto: "Bromear con el rumor", correcta: false },
                { texto: "Hablar con la persona acosada", correcta: true }
            ]
        }
    ];

    const seccion = document.getElementById("opcionesSituacion");
    const h2 = document.querySelector("main h2");

    const situacion = situaciones[Math.floor(Math.random() * situaciones.length)];
    h2.textContent = situacion.situacion;

    seccion.innerHTML = "";
    situacion.opciones.forEach(opcion => {
        const div = document.createElement("div");
        div.className = "contenedor-situacion";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = "situaciones[]";
        input.dataset.correcta = opcion.correcta ? "1" : "0";

        const p = document.createElement("p");
        p.textContent = opcion.texto;

        div.appendChild(input);
        div.appendChild(p);
        seccion.appendChild(div);

        input.addEventListener("change", function() {
            ultimaSeleccion = Array.from(document.querySelectorAll('input[name="situaciones[]"]:checked'));

            if (!document.getElementById("btnSiguiente")) {
                const btn = document.createElement("button");
                btn.id = "btnSiguiente";
                btn.textContent = "Siguiente";
                btn.style.display = "block";
                btn.style.marginTop = "20px";
                document.querySelector("main").appendChild(btn);

                btn.onclick = mostrarPopup;
            }
        });
    });

    // Función para mostrar popup y registrar puntos
    function mostrarPopup() {
        if (!ultimaSeleccion.length) return;

        const todasCorrectas = Array.from(seccion.querySelectorAll('input')).every(input => {
            return (input.checked && input.dataset.correcta === "1") || (!input.checked && input.dataset.correcta === "0");
        });

        // ========================
        // SUMAR PUNTOS
        // ========================
        let puntos = parseInt(localStorage.getItem("puntos")) || 0;
        if (todasCorrectas) puntos++;
        localStorage.setItem("puntos", puntos);

        // ========================
        // POPUP VISUAL
        // ========================
        const popup = document.createElement("div");
        popup.textContent = todasCorrectas ? "¡Correcto!" : "¡Incorrecto!";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.padding = "20px";
        popup.style.backgroundColor = todasCorrectas ? "green" : "red";
        popup.style.color = "white";
        popup.style.fontSize = "20px";
        popup.style.borderRadius = "10px";
        popup.style.zIndex = "1000";

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();

            // ========================
            // LLAMAR A TERMINAR RONDA
            // ========================
            if (typeof window.terminarRonda === "function") {
                window.terminarRonda();
            }
        }, 1500);

        const btn = document.getElementById("btnSiguiente");
        if (btn) btn.remove();

        actualizarContador();
    }

    // Mostrar contador de ronda y puntos
    function actualizarContador() {
        let ronda = parseInt(localStorage.getItem("rondaActual")) || 1;
        let puntos = parseInt(localStorage.getItem("puntos")) || 0;

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

    actualizarContador();

});
