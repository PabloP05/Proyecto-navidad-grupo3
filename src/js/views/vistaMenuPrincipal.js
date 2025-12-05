export class vistaMenuPrincipal{

    constructor(){
        this.btnIniciarPartida=document.getElementById("btnIniciarPartida");
        this.btnSala=document.getElementById("btnCrearSala");
        this.btnPartidaPublica=document.getElementById("btnPartidaPublica");
        this.btnRanking=document.getElementById("btnRanking");
        this.btnCerrarSesion=document.getElementById("btnCerrarSesion");
        this.iniciarPartida();
        this.verSalas();
        this.partidasAleatorias();
        this.ranking();
        this.cerrarSesion();
    }

    iniciarPartida(){
        //Evento cuando pulsamos iniciar partida
        this.btnIniciarPartida.addEventListener("click", () => {
            window.location.href="../../../src/html/juego/unirSala.html"; //Para enlazar mediante ruta
        });
    }

    verSalas(){
        //Evento cuando pulsamos sala
        this.btnSala.addEventListener("click", () => {
            window.location.href="../../../src/html/juego/salas.html";
        });
    }

    partidasAleatorias(){
        //Evento cuando pulsamos partida pública
        this.btnPartidaPublica.addEventListener("click", () => {
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

    ranking(){
        //Evento cuando pulsamos ranking
        this.btnRanking.addEventListener("click", () => {
            window.location.href="../../../src/html/juego/ranking.html";
        });
    }

    cerrarSesion(){
        //Evento cuando pulsamos cerrar sesión
        this.btnCerrarSesion.addEventListener("click", () => {
            window.location.href="../../../src/html/juego/inicio.html";
        });
    }
}