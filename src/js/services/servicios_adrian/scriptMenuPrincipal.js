//NAVEGACIÓN BOTONES

let btnIniciarPartida=document.getElementById("btnIniciarPartida");
let btnSala=document.getElementById("btnSala");
let btnPartidaPublica=document.getElementById("btnPartidaPublica");
let btnRanking=document.getElementById("btnRanking");
let btnCerrarSesion=document.getElementById("btnCerrarSesion");


//Evento cuando pulsamos iniciar partida
btnIniciarPartida.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/buscarSala.html"; //Para enlazar mediante ruta
});

//Evento cuando pulsamos sala
btnSala.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/salas.html";
});

//Evento cuando pulsamos partida pública
btnPartidaPublica.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/preguntasRespuestas.html";
});

//Evento cuando pulsamos ranking
btnRanking.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/ranking.html";
});

//Evento cuando pulsamos cerrar sesión
btnCerrarSesion.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/inicio.html";
});