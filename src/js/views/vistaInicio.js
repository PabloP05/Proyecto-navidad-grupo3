export class vistaInicio{

    constructor(){
        this.btnIniciarSesión=document.getElementById("btnIniciarSesion");
        this.btnRegistrarse=document.getElementById("btnRegistrarse");
        this.btnInvitado=document.getElementById("jugarInvitado");
        this.iniciarSesion();
        this.registrarse();
        this.invitado();
    }

    iniciarSesion(){
        //Evento cuando pulsamos iniciar sesión
        this.btnIniciarSesión.addEventListener("click", () => {
            window.location.href="../../../src/html/vista-juegos/login.html"; //Para enlazar mediante ruta
        });
    }

    registrarse(){
        //Evento cuando pulsamos registrarse
        this.btnRegistrarse.addEventListener("click", () => {
            window.location.href="../../../src/html/vista-juegos/registro.html";
        });
    }

    invitado(){
        //Evento cuando pulsamos jugar como invitado
        this.btnInvitado.addEventListener("click", () => {
            //Iniciar Juego
            const modos=["modo1","modo2","modo3"];

            /*Para sacar el modo aleatorio usamos el Math.random() que eso devyelve 0 y 1, lo multiplicamos por el tamaño del array modos
            y la función Math.floor redondea el resultado a un número entero, (0.14=0)*/
            let modoAleatorio=modos[Math.floor(Math.random()*modos.length)];

            if(modoAleatorio=="modo1"){
                window.location.href="../../../src/html/juego/preguntasRespuestas.html";
            }else if(modoAleatorio=="modo2"){
                window.location.href="../../../src/html/juego/situaciones.html";
            }else{
                window.location.href="../../../src/html/juego/fotos.html";
            }
        });
    }
}