//Validaciones Registro

//Recojo los datos del form
let form=document.getElementById("registro");
let nombreUsuario=document.getElementById("nombreUsuario");
let email=document.getElementById("email");
let nick=document.getElementById("nick");

//Creamos elemento style
let style=document.createElement("style");


//Cuando se pulsa el botón enviar...
form.addEventListener("submit", function(e){
    e.preventDefault();                                                 //Evita que se envíe el formulario

    let nombre=nombreUsuario.value.trim();                           //Quita los espacios extra
    let correo=email.value.trim();
    let nameUser=nick.value.trim();

    if(nombre==""){
        console.log("Nombre Usuario Vacío");
        nombreUsuario.placeholder="Nombre Usuario Vacío";
        nombreUsuario.style.color="red";
    }else{
        console.log(nombreUsuario.value);
    }
});