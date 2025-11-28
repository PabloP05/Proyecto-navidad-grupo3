//NAVEGACIÓN BOTONES

let btnIniciarSesión=document.getElementById("btnIniciarSesion");
let btnRegistrarse=document.getElementById("btnRegistrarse");
let btnInvitado=document.getElementById("btnInvitado");


//Evento cuando pulsamos iniciar sesión
btnIniciarSesión.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/menuPrincipal.html"; //Para enlazar mediante ruta
});

//Evento cuando pulsamos registrarse
btnRegistrarse.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/registro.html";
});

//Evento cuando pulsamos jugar como invitado
btnInvitado.addEventListener("click", () => {
    window.location.href="../../../../../diseño/mockup/mockup_adrian/html/vistas-juegos/menuPrincipal.html";
});