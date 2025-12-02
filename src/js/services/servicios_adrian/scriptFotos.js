//CLICAR TODO EL DIV

//Recojo datos
let clickDiv=document.querySelectorAll(".contenedor-foto");
let btnEnviar=document.getElementById("btnEnviar");
let btnPasar=document.getElementById("btnPasar");
let tiempo=document.getElementById("tiempo");
let segundos=0;


//Recorro los contenedores de respuesta en un foreach y le hago un evento de que si pulsamos en la caja contenedora se selecciona
clickDiv.forEach(div => {
    div.addEventListener("click", () => {
        let caja=div.querySelector("input[type='radio']");
        caja.checked=true;
        mostrarEnviar();                                                //Mostramos el botón enviar
    });
});

temporizador= setTimeout(() => {
    btnPasar.style.display="block";
}, 5000);   //Tiempo en milisegundos


setInterval(() => {
    segundos++;

    let min=String(Math.floor(segundos/60)).padStart(2,"0");
    let seg=String(segundos%60).padStart(2,"0");

    tiempo.innerHTML="Tiempo: "+min+":"+seg;
}, 1000);


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