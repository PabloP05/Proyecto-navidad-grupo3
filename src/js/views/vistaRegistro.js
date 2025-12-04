export class vistaRegistro{

    constructor(){
        //Recojo los datos del form
        this.form=document.querySelector("form");
        this.nombreUsuario=document.getElementById("nombreUsuario");
        this.email=document.getElementById("email");
        this.pw=document.getElementById("pw");
        this.nick=document.getElementById("nick");
        this.registrarse();
        this.revisarInputs();
    }

    registrarse(){
        //Cuando se pulsa el botón enviar...
        this.form.addEventListener("submit", (e) => {
            //e.preventDefault();                                                 //Evita que se envíe el formulario
            this.validar();                                                          //Si le da a subir y falta algún campo se validarán todos los campos
        });
    }

    revisarInputs(){
        this.inputNombreUsuario();
        this.inputEmail();
        this.inputPw();
        this.inputNick();
    }

    inputNombreUsuario(){
        //Cuando escribes en el input nombreUsuario
        this.nombreUsuario.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
            this.validarNombreUsuario();
        });
    }

    inputEmail(){
        //Cuando escribes en el input email
        this.email.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
            this.validarEmail();
        });
    }

    inputPw(){
        //Cuando escribes en el input pw
        this.pw.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
            this.validarPw();
        });
    }

    inputNick(){
        //Cuando escribes en el input nick
        this.nick.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
            this.validarNick();
        });
    }

    validar(){
        this.validarNombreUsuario();
        this.validarEmail();
        this.validarPw();
        this.validarNick();
    }

    //Validar el nombre de usuario
    validarNombreUsuario(){
        let nombreUsuarioValor=this.nombreUsuario.value.trim();                                    //La función trim() quita los espacios extra

        if(nombreUsuarioValor===""){
            this.validarError(this.nombreUsuario, "Contraseña Inválida");
        }else{
            this.validarOk(this.nombreUsuario);
        }
    }

    //Validar el email
    validarEmail(){
        let emailValor=this.email.value.trim();                                    //La función trim() quita los espacios extra

        if(emailValor==="" || !this.email.checkValidity()){
            this.validarError(this.email, "Contraseña Inválida");
        }else{
            this.validarOk(this.email);
        }
    }

    //Validar la contraseña
    validarPw(){
        let pwValor=this.pw.value.trim();                                    //La función trim() quita los espacios extra

        if(pwValor===""){
            this.validarError(this.pw, "Contraseña Inválida");
        }else{
            this.validarOk(this.pw);
        }
    }

    //Validar el nick
    validarNick(){
        let nickValor=this.nick.value.trim();                                //La función trim() quita los espacios extra

        if(nickValor===""){
            this.validarError(this.nick, "Nick Inválido");
        }else{
            this.validarOk(this.nick);
        }
    }

    //Validar si está mal
    validarError(input, mensaje){
        let controlForm=input.parentElement;                            //La propiedad parentElement devuelve el elemento padre
        let aviso=controlForm.querySelector("p");                       //Elegimos el selector donde meteremos lo que devuelve
        aviso.innerText=mensaje;                                        //Metemos en aviso el texto del mensaje

        controlForm.className="control error";                          //Creamos la clase error
    }

    //Validar si está bien
    validarOk(input){
        let controlForm=input.parentElement;
        let aviso=controlForm.querySelector("p");
        aviso.innerText="";                                             //Para borrar el texto del p si tiene

        controlForm.className="control correcto";                       //Creamos la clase correcto
    }
}