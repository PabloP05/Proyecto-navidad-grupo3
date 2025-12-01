//CLICAR TODO EL DIV

//Recojo datos
let clickDiv=document.querySelectorAll(".contenedor-foto");
let btnEnviar=document.getElementById("btnEnviar");
let btnPasar=document.getElementById("btnPasar");


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


//Función para mostrar el botón
function mostrarEnviar(){
    btnEnviar.style.display="block";
}