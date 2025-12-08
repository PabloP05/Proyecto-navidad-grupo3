export class vistaSituaciones{

    constructor(){
        //Si existe una ronda guardada, la usamos, si no, empezamos en 0
        this.ronda=parseInt(localStorage.getItem("rondaActual")) || 0;
        this.puntos=parseInt(localStorage.getItem("puntosActuales")) || 0;

        this.cajaSituaciones=document.getElementById("opcionesSituacion");
        this.clickDiv=document.querySelectorAll(".contenedor-situacion");
        this.tituloSituacion=document.getElementById("tituloSituacion");
        this.btnEnviar=document.getElementById("btnEnviar");
        this.btnPasar=document.getElementById("btnPasar");
        this.tiempo=document.getElementById("tiempo");
        this.popUp=document.getElementById("popUp");
        this.overlay=document.getElementById("overlay");
        this.t=30;   //Tiempo Inicial
        this.iniciarJuego();
    }

    iniciarJuego(){
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
        alert("¡Juego terminado! Has completado "+this.ronda+" rondas y tienes "+this.puntos+" puntos.");
    }

    //Genera las preguntas en HTML y activa selección
    mostrarSituaciones(situaciones){
        this.cajaSituaciones.innerHTML="";

        this.situacionRandom=situaciones[Math.floor(Math.random()*situaciones.length)];

        this.tituloSituacion.innerText=this.situacionRandom.pregunta;

        for(let i=0;i<6;i++){
            let divSituacion=document.createElement("div");
            divSituacion.classList.add("contenedor-situacion");
            let inputRespuesta=document.createElement("input");
            inputRespuesta.type="checkbox";
            inputRespuesta.name="situaciones[]";
            inputRespuesta.classList.add("respuesta"+(i+1));
            let pRespuesta=document.createElement("p");
            pRespuesta.innerText=this.situacionRandom.respuestas[i].texto;

            divSituacion.appendChild(inputRespuesta);
            divSituacion.appendChild(pRespuesta);

            this.cajaSituaciones.appendChild(divSituacion);
        }
        this.clickDiv=document.querySelectorAll(".contenedor-situacion");
        this.seleccionarRespuesta();
    }

    seleccionarRespuesta(){
        //Recorro los contenedores de respuesta en un foreach y le hago un evento de que si pulsamos en la caja contenedora se selecciona
        this.clickDiv.forEach(div => {
            div.addEventListener("click", () => {
                let checkbox=div.querySelector("input[type='checkbox']");             //Guardamos el checkbox en una variable
                if(checkbox.checked==false){
                    checkbox.checked=true;                                             //Ponemos el checkbox como seleccionado
                    div.style.backgroundColor="green";
                }else{
                    checkbox.checked=false;                                             //Ponemos el checkbox como seleccionado
                    div.style.backgroundColor="#08251C";
                }
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

                let respuestasSeleccionadas=this.cajaSituaciones.querySelectorAll("input[type='checkbox']:checked");

                let respuesta="incorrecta";
                if(respuestasSeleccionadas){
                    let cCorrectas=0;
                    respuestasSeleccionadas.forEach(respuestaSeleccionada => {
                        let i=0;
                        if(respuestaSeleccionada.classList.value=="respuesta1"){
                            i=0;
                        }else if(respuestaSeleccionada.classList.value=="respuesta2"){
                            i=1;
                        }else if(respuestaSeleccionada.classList.value=="respuesta3"){
                            i=2;
                        }else if(respuestaSeleccionada.classList.value=="respuesta4"){
                            i=3;
                        }else if(respuestaSeleccionada.classList.value=="respuesta5"){
                            i=4;
                        }else{
                            i=5;
                        }

                        if(this.situacionRandom.respuestas[i].correcta==true){
                            cCorrectas++;
                        }
                    });

                    if(cCorrectas==3){
                        let errores=0;
                        respuestasSeleccionadas.forEach(respuestaSeleccionada => {
                            let i=0;
                            if(respuestaSeleccionada.classList.value=="respuesta1"){
                                i=0;
                            }else if(respuestaSeleccionada.classList.value=="respuesta2"){
                                i=1;
                            }else if(respuestaSeleccionada.classList.value=="respuesta3"){
                                i=2;
                            }else if(respuestaSeleccionada.classList.value=="respuesta4"){
                                i=3;
                            }else if(respuestaSeleccionada.classList.value=="respuesta5"){
                                i=4;
                            }else{
                                i=5;
                            }

                            if(this.situacionRandom.respuestas[i].correcta==false){
                                errores++;
                            }
                        });

                        if(errores==0){
                            respuesta="correcta";
                        }
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
            window.location.href="../../../src/html/juego/menuPrincipal.html";
        }else{
            //Después de 1 segundo sale otro modo aleatorio
            setTimeout(() => {
                this.modoRandom();
            }, 1000);
        }
    }

    mostrarEnviar(){
        //Función para mostrar el botón
        this.btnEnviar.style.display="block";
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

            let respuestasSeleccionadas=this.cajaSituaciones.querySelectorAll("input[type='checkbox']:checked");

            let respuesta="incorrecta";
            if(respuestasSeleccionadas){
                let cCorrectas=0;
                respuestasSeleccionadas.forEach(respuestaSeleccionada => {
                    let i=0;
                    if(respuestaSeleccionada.classList.value=="respuesta1"){
                        i=0;
                    }else if(respuestaSeleccionada.classList.value=="respuesta2"){
                        i=1;
                    }else if(respuestaSeleccionada.classList.value=="respuesta3"){
                        i=2;
                    }else if(respuestaSeleccionada.classList.value=="respuesta4"){
                        i=3;
                    }else if(respuestaSeleccionada.classList.value=="respuesta5"){
                        i=4;
                    }else{
                        i=5;
                    }

                    if(this.situacionRandom.respuestas[i].correcta==true){
                        cCorrectas++;
                    }
                });

                if(cCorrectas==3){
                    let errores=0;
                    respuestasSeleccionadas.forEach(respuestaSeleccionada => {
                        let i=0;
                        if(respuestaSeleccionada.classList.value=="respuesta1"){
                            i=0;
                        }else if(respuestaSeleccionada.classList.value=="respuesta2"){
                            i=1;
                        }else if(respuestaSeleccionada.classList.value=="respuesta3"){
                            i=2;
                        }else if(respuestaSeleccionada.classList.value=="respuesta4"){
                            i=3;
                        }else if(respuestaSeleccionada.classList.value=="respuesta5"){
                            i=4;
                        }else{
                            i=5;
                        }

                        if(this.situacionRandom.respuestas[i].correcta==false){
                            errores++;
                        }
                    });

                    if(errores==0){
                        respuesta="correcta";
                    }
                }
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
            window.location.href="../../../src/html/juego/preguntasRespuestas.html";
        }else if(modoAleatorio=="modo2"){
            window.location.href="../../../src/html/juego/situaciones.html";
        }else{
            window.location.href="../../../src/html/juego/fotos.html";
        }
    }

    //Función sumar puntos
    sumarPuntos(){
        this.puntos+=10;
        console.log(this.puntos);
    }
}