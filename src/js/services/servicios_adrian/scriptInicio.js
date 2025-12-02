//NAVEGACIÓN BOTONES

let btnIniciarSesión=document.getElementById("btnIniciarSesion");
let btnRegistrarse=document.getElementById("btnRegistrarse");
let btnInvitado=document.getElementById("jugarInvitado");


//Evento cuando pulsamos iniciar sesión
btnIniciarSesión.addEventListener("click", () => {
    window.location.href="../../../src/html/vista-juegos/menuPrincipal.html"; //Para enlazar mediante ruta
});

//Evento cuando pulsamos registrarse
btnRegistrarse.addEventListener("click", () => {
    window.location.href="../../../src/html/vista-juegos/registro.html";
});

//Evento cuando pulsamos jugar como invitado
btnInvitado.addEventListener("click", () => {
    //Iniciar Juego
    let modos=["modo1","modo2","modo3"];

    /*Para sacar el modo aleatorio usamos el Math.random() que eso devyelve 0 y 1, lo multiplicamos por el tamaño del array modos
    y la función Math.floor redondea el resultado a un número entero, (0.14=0)*/
    let modoAleatorio=modos[Math.floor(Math.random()*modos.length)];

    if(modoAleatorio=="modo1"){
        window.location.href="../../../src/html/vista-juegos/preguntasRespuestas.html";
    }else if(modoAleatorio=="modo2"){
        window.location.href="../../../src/html/vista-juegos/situaciones.html";
    }else{
        window.location.href="../../../src/html/vista-juegos/fotos.html";
    }
});