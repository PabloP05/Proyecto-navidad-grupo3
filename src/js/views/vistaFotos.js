export class vistaFotos{

    constructor(){
        //Si existe una ronda guardada, la usamos, si no, empezamos en 0
        this.ronda=parseInt(localStorage.getItem("rondaActual")) || 0;
        this.puntos=parseInt(localStorage.getItem("puntosActuales")) || 0;

        this.cajaPreguntas=document.getElementById("opcionesFoto");
        this.clickDiv=document.querySelectorAll(".contenedor-foto");
        this.tituloPregunta=document.getElementById("tituloPregunta");
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

    gestionRonda(ronda){
        if(ronda+1==10){
            ronda=0;
        }else{
            ronda++;
        }

        return ronda;
    }

    finDelJuego(){
        alert("¡Juego terminado! Has completado "+(this.ronda+1)+" rondas y tienes "+this.puntos+" puntos.");
    }

    //Genera las fotos en HTML y activa selección
    mostrarFotos(fotos){
        this.preguntaRandom=fotos[Math.floor(Math.random()*fotos.length)];

        this.tituloPregunta.innerText=this.preguntaRandom.pregunta;

        for(let i=0;i<2;i++){
            let divPregunta=document.createElement("div");
            divPregunta.classList.add("contenedor-foto");
            let inputRespuesta=document.createElement("input");
            inputRespuesta.type="radio";
            inputRespuesta.name="pregunta";
            inputRespuesta.classList.add("respuesta"+(i+1));
            let pRespuesta=document.createElement("p");
            pRespuesta.innerText=this.preguntaRandom.respuestas[i].texto;

            divPregunta.appendChild(inputRespuesta);
            divPregunta.appendChild(pRespuesta);

            this.cajaPreguntas.appendChild(divPregunta);
        }
        this.clickDiv=document.querySelectorAll(".contenedor-foto");
        this.seleccionarRespuesta();
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
        this.contador=setInterval(() => {                                        //Ejecuta la funcion en intervalos indicados 
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
                clearInterval(this.contador);
                let mensaje="tiempo";

                let respuestaSeleccionada=this.cajaPreguntas.querySelector("input[type='radio']:checked");

                let respuesta="incorrecta";
                if(respuestaSeleccionada){
                    let i=0;
                    if(respuestaSeleccionada.classList.value=="respuesta1"){
                        i=0;
                    }else{
                        i=1;
                    }

                    if(this.preguntaRandom.respuestas[i].correcta==true){
                        respuesta="correcta";
                    }
                }

                this.popUpFin(mensaje,respuesta);
            }
        }, 1000);   //Se ejecuta cada segundo
    }

    popUpFin(mensaje,respuesta){
        //Sacamos el div del popUp y el div del overlay que será transparente y cubrirá toda la pantalla y cambiamos los botones a absolute
        if(mensaje==="tiempo"){
            if(respuesta==="correcta"){
                this.popUp.innerText="¡SE ACABÓ! CORRECTA";                                       //Meto texto en el popUp
                this.sumarPuntos();
                this.popUp.classList.add("ok");
            }else if(respuesta==="incorrecta"){
                this.popUp.innerText="¡SE ACABÓ! INCORRECTA";  
                this.popUp.classList.add("mal");
            }
        }else if(mensaje==="enviado"){
            if(respuesta==="correcta"){
                this.popUp.innerHTML="¡CORRECTA!";
                this.sumarPuntos();
                this.popUp.classList.add("ok");
            }else if(respuesta==="incorrecta"){
                this.popUp.innerHTML="¡INCORRECTA!";       
                this.popUp.classList.add("mal");
            }
        }
        this.popUp.style.display="block";
        this.overlay.style.display="block";
        this.btnPasar.style.position="absolute";
        this.btnEnviar.style.position="absolute";

        let rondaSiguiente=this.gestionRonda(this.ronda);

        if(rondaSiguiente==0){
            this.finDelJuego();
            window.location.href="menuPrincipal.html";
        }else{
            //Después de 1 segundo sale otro modo aleatorio
            setTimeout(() => {
                this.modoRandom();
            }, 1000);
        }
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
            clearInterval(this.contador);
            let mensaje="enviado";

            let respuestaSeleccionada=this.cajaPreguntas.querySelector("input[type='radio']:checked");

            let i=0;
            if(respuestaSeleccionada.classList.value=="respuesta1"){
                i=0;
            }else{
                i=1;
            }

            let respuesta="incorrecta";
            if(this.preguntaRandom.respuestas[i].correcta==true){
                respuesta="correcta";
            }

            this.popUpFin(mensaje,respuesta);
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
        //Incrementamos la ronda
        this.ronda++;
        //Guarda la ronda actual
        localStorage.setItem("rondaActual", this.ronda);
        localStorage.setItem("puntosActuales", this.puntos);  // opcional si quieres pasar los puntos

        //Iniciar Juego
        const modos=["modo1","modo2","modo3"];

        /*Para sacar el modo aleatorio usamos el Math.random() que eso devyelve 0 y 1, lo multiplicamos por el tamaño del array modos
        y la función Math.floor redondea el resultado a un número entero, (0.14=0)*/
        let modoAleatorio=modos[Math.floor(Math.random()*modos.length)];

        if(modoAleatorio=="modo1"){
            window.location.href="preguntasRespuestas.html";
        }else if(modoAleatorio=="modo2"){
            window.location.href="situaciones.html";
        }else{
            window.location.href="fotos.html";
        }
    }

    //Función sumar puntos
    sumarPuntos(){
        this.puntos+=10;
        console.log(this.puntos);
    }
}