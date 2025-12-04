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
            let sw=this.validar();                                             //Si le da a subir y falta algún campo se validarán todos los campos
            
            if(sw!=0){
                e.preventDefault();                                       //Evita que se envíe el formulario
            }
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
        let swNick=this.validarNick();
        let swPw=this.validarPw();
        if(swNick==0 && swPw==0){
            return 0;
        }else{
            return 1;
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