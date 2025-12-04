export class vistaFotos{

    constructor(){
        this.clickDiv=document.querySelectorAll(".contenedor-foto");
        this.btnEnviar=document.getElementById("btnEnviar");
        this.btnPasar=document.getElementById("btnPasar");
        this.tiempo=document.getElementById("tiempo");
        this.popUp=document.getElementById("popUp");
        this.overlay=document.getElementById("overlay");
        this.t=15;   //Tiempo Inicial
        this.iniciarJuego();
    }

    iniciarJuego(){
        this.seleccionarRespuesta();
        this.contadorTiempo();
        this.mostrarSaltar();
        this.botonEnviar();
        this.botonSaltar();
    }

    seleccionarRespuesta(){
        //Recorro los contenedores de respuesta en un foreach y le hago un evento de que si pulsamos en la caja contenedora se selecciona
        this.clickDiv.forEach(div => {
            div.addEventListener("click", () => {
                let radio=div.querySelector("input[type='radio']");             //Guardamos el radio en una variable
                radio.checked=true;                                             //Ponemos el radio como seleccionado
                this.mostrarEnviar();                                                //Mostramos el botón enviar
            });
        });
    }

    contadorTiempo(){
        this.tiempo.innerText="Tiempo: 00:"+this.t;
        //Función que ejecuta el contador
        let contador=setInterval(() => {                                        //Ejecuta la funcion en intervalos indicados 
            this.t--;                                                                //Reducimos el tiempo en 1
            tiempo.innerText="Tiempo: 00:"+String(this.t).padStart(2,"0");           //Convertimos a string y y con la funcion padStart() hacemos que si t es una sola cifra se le añada un 0 a la izquierda
            if(this.t<=10){
                if(this.t%2==0){                                                     //Si es par sale en rojo
                    this.tiempo.style.color="red";
                }else{
                    this.tiempo.style.color="black";
                }
            }

            //Cuando llega a 0, detenemos el contador y sacamos el popUp
            if(this.t<=0){
                clearInterval(contador);
                this.popUpFin();
            }
        }, 1000);   //Se ejecuta cada segundo
    }

    popUpFin(){
        //Sacamos el div del popUp y el div del overlay que será transparente y cubrirá toda la pantalla y cambiamos los botones a absolute
        popUp.innerHTML="¡SE ACABÓ!";                                       //Meto texto en el popUp
        popUp.style.display="block";
        overlay.style.display="block";
        btnPasar.style.position="absolute";
        btnEnviar.style.position="absolute";

        //Después de 3 segundos sale otro modo aleatorio
        setTimeout(() => {
            //this.modoRandom();
        }, 1000);
    }

    mostrarEnviar(){
        //Función para mostrar el botón
        btnEnviar.style.display="block";
    }

    mostrarSaltar(){
        setTimeout(() => {                                                      //Cuando pasan 5 segundos sale por defecto
            this.btnPasar.style.display="block";
        }, 5000);   //Se ejecuta cada 5 segundos
    }

    botonEnviar(){
        //Evento cuando pulsamos enviar
        btnEnviar.addEventListener("click", () => {
            this.sumarPuntos();
            this.modoRandom();
        });
    }

    botonSaltar(){
        //Evento cuando pulsamos pasar
        btnPasar.addEventListener("click", () => {
            this.modoRandom();
        });
    }

    //Función modo aleatorio
    modoRandom(){
        //Iniciar Juego
        const modos=["modo1","modo2","modo3"];

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
    }
}