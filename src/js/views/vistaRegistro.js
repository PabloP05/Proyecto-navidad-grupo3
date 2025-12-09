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
            let sw=this.validar();                                                          //Si le da a subir y falta algún campo se validarán todos los campos
            
            if(sw!=0){
                e.preventDefault();                                                 //Evita que se envíe el formulario
            }
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
        let swUser=this.validarNombreUsuario();
        let swEmail=this.validarEmail();
        let swPw=this.validarPw();
        let swNick=this.validarNick();

        if(swUser==0 && swEmail==0 && swPw==0 && swNick==0){
            return 0;
        }else{
            return 1;
        }
    }

    //Validar el nombre de usuario
    validarNombreUsuario(){
        let nombreUsuarioValor=this.nombreUsuario.value.trim();                                    //La función trim() quita los espacios extra

        if(nombreUsuarioValor===""){
            this.validarError(this.nombreUsuario, "Contraseña Inválida");
            return 1;
        }else{
            this.validarOk(this.nombreUsuario);
            return 0;
        }
    }

    //Validar el email
    validarEmail(){
        let emailValor=this.email.value.trim();                                    //La función trim() quita los espacios extra

        if(emailValor==="" || !this.email.checkValidity()){
            this.validarError(this.email, "Contraseña Inválida");
            return 1;
        }else{
            this.validarOk(this.email);
            return 0;
        }
    }

    //Validar la contraseña
    validarPw(){
        let pwValor=this.pw.value.trim();                                    //La función trim() quita los espacios extra

        if(pwValor===""){
            this.validarError(this.pw, "Contraseña Inválida");
            return 1;
        }else{
            this.validarOk(this.pw);
            return 0;
        }
    }

    //Validar el nick
    validarNick(){
        let nickValor=this.nick.value.trim();                                //La función trim() quita los espacios extra

        if(nickValor===""){
            this.validarError(this.nick, "Nick Inválido");
            return 1;
        }else{
            this.validarOk(this.nick);
            return 0;
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