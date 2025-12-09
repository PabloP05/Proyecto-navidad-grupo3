// =======================================
// tiempo.js
// =======================================

// Esperamos a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    let tiempo = 30;
    let temporizador = document.getElementById('tiempo');

    if (!temporizador) return; // seguridad: si no existe, no falla nada

    let fTime = document.createElement('span');
    fTime.innerText = tiempo;
    temporizador.appendChild(fTime);

    // Inicia el contador
    const contador = setInterval(() => {

        fTime.innerText = tiempo--;

        // Cambia a rojo
        if (tiempo <= 5) {
            fTime.style.color = "red";
        }

        // Cuando llega a cero → FIN DE RONDA
        if (tiempo < 0) {
            clearInterval(contador);
            fTime.innerText = "¡Tiempo!";

            // Llamamos a terminar ronda si existe
            if (typeof window.terminarRonda === "function") {
                setTimeout(() => {
                    window.terminarRonda();
                }, 800);
            }
        }

    }, 1000);

});
