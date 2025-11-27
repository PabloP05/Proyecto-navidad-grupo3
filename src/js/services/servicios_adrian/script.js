//VALIDACIONES REGISTRO

//Recojo los datos del form
let form=document.getElementById("registro");
let nombreUsuario=document.getElementById("nombreUsuario");
let email=document.getElementById("email");
let nick=document.getElementById("nick");


//Cuando se pulsa el botón enviar...
form.addEventListener("submit", function(e){
    e.preventDefault();                                                 //Evita que se envíe el formulario
});

//Cuando escribes en el input nombreUsuario
nombreUsuario.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
    validarNombreUsuario();
});

//Cuando escribes en el input email
email.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
    validarEmail();
});

//Cuando escribes en el input nick
nick.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
    validarNick();
});


//Validar el Nombre de Usuario
function validarNombreUsuario(){
    let nombreUsuarioValor=nombreUsuario.value.trim();                  //La función trim() quita los espacios extra

    if(nombreUsuarioValor===""){
        validarError(nombreUsuario, "Nombre de Usuario Inválido");
    }else{
        console.log(nombreUsuarioValor);
        validarOk(nombreUsuario);
    }
}

//Validar el email
function validarEmail(){
    let emailValor=email.value.trim();

    if(emailValor==="" || !email.checkValidity()){
        validarError(email, "Correo Inválido");
    }else{
        console.log(emailValor);
        validarOk(email);
    }
}

//Validar el nick
function validarNick(){
    let nickValor=nick.value.trim();

    if(nickValor===""){
        validarError(nick, "Nick Inválido");
    }else{
        console.log(nickValor);
        validarOk(nick);
    }
}

function validarError(input, mensaje){
    let controlForm=input.parentElement;                            //La propiedad parentElement devuelve el elemento padre
    let aviso=controlForm.querySelector("p");                       //Elegimos el selector donde meteremos lo que devuelve
    aviso.innerText=mensaje;                                        //Metemos en aviso el texto del mensaje

    controlForm.className="control error";                          //Creamos la clase error
}

function validarOk(input){
    let controlForm=input.parentElement;
    let aviso=controlForm.querySelector("p");
    aviso.innerText="";                                             //Para borrar el texto del p si tiene

    controlForm.className="control correcto";                       //Creamos la clase correcto
}