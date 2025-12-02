//NAVEGACIÓN BOTONES

let btnIniciarPartida=document.getElementById("btnIniciarPartida");
let btnSala=document.getElementById("btnSala");
let btnPartidaPublica=document.getElementById("btnPartidaPublica");
let btnRanking=document.getElementById("btnRanking");
let btnCerrarSesion=document.getElementById("btnCerrarSesion");


//Evento cuando pulsamos iniciar partida
btnIniciarPartida.addEventListener("click", () => {
    window.location.href="../../html/victor/unirSala.html"; //Para enlazar mediante ruta
});

//Evento cuando pulsamos sala
btnSala.addEventListener("click", () => {
    window.location.href="../../html/victor/sala.html"; //Para enlazar mediante ruta
});

//Evento cuando pulsamos partida pública
btnPartidaPublica.addEventListener("click", () => {
    // Definir modos con rutas verificadas
    let modos = [
        "../../html/victor/preguntasRespuestas.html", // Modo Preguntas y Respuestas
        "../../html/victor/situaciones.html",        // Modo Situaciones
        "../../html/victor/fotos.html"              // Modo Fotos
    ];

    // Seleccionar un modo aleatorio
    let modoAleatorio = modos[Math.floor(Math.random() * modos.length)];

    // Redirigir al modo seleccionado
    console.log("Redirigiendo a:", modoAleatorio); // Para depuración
    window.location.href = modoAleatorio;
});

//Evento cuando pulsamos ranking
btnRanking.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/ranking.html";
});

//Evento cuando pulsamos cerrar sesión
btnCerrarSesion.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/inicio.html";
});