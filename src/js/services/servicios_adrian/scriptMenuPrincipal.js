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
    //Iniciar Juego

    let modos=["modo1","modo2","modo3"];

    /*Para sacar el modo aleatorio usamos el Math.random() que eso devyelve 0 y 1, lo multiplicamos por el tamaño del array modos
    y la función Math.floor redondea el resultado a un número entero, (0.14=0)*/
    let modoAleatorio=modos[Math.floor(Math.random()*modos.length)];

    if(modoAleatorio=="modo1"){
        window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/preguntasRespuestas.html";
    }else if(modoAleatorio=="modo2"){
        window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/situaciones.html";
    }else{
        window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/fotos.html";
    }
});

//Evento cuando pulsamos ranking
btnRanking.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/ranking.html";
});

//Evento cuando pulsamos cerrar sesión
btnCerrarSesion.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/inicio.html";
});