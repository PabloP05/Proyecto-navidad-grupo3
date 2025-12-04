export class vistaLogin{

    constructor(){
        this.form=document.querySelector("form");
        this.nick=document.getElementById("nick");
        this.pw=document.getElementById("pw");
        this.iniciarSesion();
        this.revisarInputs();
    }

    iniciarSesion(){
        //Cuando se pulsa el botón enviar...
        this.form.addEventListener("submit", (e) => {
            //e.preventDefault();                                       //Evita que se envíe el formulario
            this.validar();                                             //Si le da a subir y falta algún campo se validarán todos los campos
        });
    }

    revisarInputs(){
        this.inputNick();
        this.inputPw();
    }

    inputNick(){
        //Cuando escribes en el input nombreUsuario
        this.nick.addEventListener("input", () => {                 //En tiempo real detecta lo que escribes en el input
            this.validarNick();
        });
    }

    inputPw(){
        //Cuando escribes en el input nombreUsuario
        this.pw.addEventListener("input", () => {                 //En tiempo real detecta lo que escribes en el input
            this.validarPw();
        });
    }

    //Validar todo
    validar(){
        this.validarNick();
        this.validarPw();
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

    //Validar la contraseña
    validarPw(){
        let pwValor=this.pw.value.trim();                                    //La función trim() quita los espacios extra

        if(pwValor===""){
            this.validarError(this.pw, "Contraseña Inválida");
        }else{
            this.validarOk(this.pw);
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