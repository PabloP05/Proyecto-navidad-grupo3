//CLICAR TODO EL DIV

//Recojo datos
let clickDiv=document.querySelectorAll(".contenedor-foto");
let btnEnviar=document.getElementById("btnEnviar");
let btnPasar=document.getElementById("btnPasar");
let tiempo=document.getElementById("tiempo");
let popUp=document.getElementById("popUp");
let overlay=document.getElementById("overlay");
let t=15;   //Tiempo Inicial


//Recorro los contenedores de respuesta en un foreach y le hago un evento de que si pulsamos en la caja contenedora se selecciona
clickDiv.forEach(div => {
    div.addEventListener("click", () => {
        let radio=div.querySelector("input[type='radio']");             //Guardamos el radio en una variable
        radio.checked=true;                                             //Ponemos el radio como seleccionado
        mostrarEnviar();                                                //Mostramos el botón enviar
    });
});

setTimeout(() => {                                                      //Cuando pasan 5 segundos sale por defecto
    btnPasar.style.display="block";
}, 5000);   //Se ejecuta cada 5 segundos


tiempo.innerText="Tiempo: 00:"+t;
//Función que ejecuta el contador
let contador=setInterval(() => {                                        //Ejecuta la funcion en intervalos indicados 
    t--;                                                                //Reducimos el tiempo en 1
    tiempo.innerText="Tiempo: 00:"+String(t).padStart(2,"0");           //Convertimos a string y y con la funcion padStart() hacemos que si t es una sola cifra se le añada un 0 a la izquierda
    if(t<=10){
        if(t%2==0){                                                     //Si es par sale en rojo
            tiempo.style.color="red";
        }else{
            tiempo.style.color="black";
        }
    }

    //Cuando llega a 0, detenemos el contador y sacamos el popUp
    if(t<=0){
        clearInterval(contador);
        popUpFin();
    }
}, 1000);   //Se ejecuta cada segundo


function popUpFin(){
    //Sacamos el div del popUp y el div del overlay que será transparente y cubrirá toda la pantalla y cambiamos los botones a absolute
    popUp.innerHTML="¡SE ACABÓ!";                                       //Meto texto en el popUp
    popUp.style.display="block";
    overlay.style.display="block";
    btnPasar.style.position="absolute";
    btnEnviar.style.position="absolute";

    //Después de 3 segundos sale otro modo aleatorio
    setTimeout(() => {
        //modoRandom();
    }, 3000);
}


//Función para mostrar el botón
function mostrarEnviar(){
    btnEnviar.style.display="block";
}


//Evento cuando pulsamos enviar
btnEnviar.addEventListener("click", () => {
    sumarPuntos();
    modoRandom();
});

//Evento cuando pulsamos pasar
btnPasar.addEventListener("click", () => {
    modoRandom();
});


//Función modo aleatorio
function modoRandom(){
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
}


function sumarPuntos(){
    console.log("se suman puntos");
}