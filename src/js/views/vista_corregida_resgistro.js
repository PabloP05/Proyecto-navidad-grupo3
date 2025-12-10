export class RegistrarUsuario{

    #formulario;
    #nombreUsuario;
    #clave;
    #gmail;
    #nick;
    #aviso;

    constructor(){
        //inicializo los datos para la verificación
        this.#formulario = document.getElementById('formularioLoguin');
        this.#nombreUsuario = document.getElementById('nombreUsuario');
        this.#gmail = document.getElementById('email');
        this.#clave = document.getElementById('clave');
        this.#nick = document.getElementById('nick');
        this.#aviso = document.getElementById('aviso');


        this.#validarDatos()
        if(this.#validarCampo(this.#nombreUsuario) &&
        this.#validarCampo(this.#gmail) &&
        this.#validarCampo(this.#nick) &&
        this.#validarClave()){

/*          no lo necesito en este caso      

         const dato = new FormData(this.#formulario);

            fetch('rutaServer', {
            method: 'POST', //al ser un envio lo tengo que mandar por post
            body: dato
        }); */
        }
    }

    //la primera validacion conprovará que esté comleto el dato
    #validarDatos(){

    

        this.#formulario.addEventListener('submit',async (e)=>{
            if(this.#nombreUsuario.value.trim() === "" ||
                this.#clave.value.trim() === "" ||
                this.#gmail.value.trim() === "" ||
                this.#nick.value.trim() === ""){
                
                    e.preventDefault();
                    this.#aviso.innerText = "Complete todos los campos solicitados"
                   this.#nombreUsuario.value.trim() === "" ? 
                        this.#nombreUsuario.style.border = "2px solid red" 
                        : this.#nombreUsuario.style.border = "2px solid green";

                    this.#clave.value.trim() === "" 
                        ? this.#clave.style.border = "2px solid red" 
                        : this.#clave.style.border = "2px solid green";

                    this.#gmail.value.trim() === "" 
                        ? this.#gmail.style.border = "2px solid red" 
                        : this.#gmail.style.border = "2px solid green";

                    this.#nick.value.trim() === "" 
                        ? this.#nick.style.border = "2px solid red" 
                        : this.#nick.style.border = "2px solid green";
            }
            
        });
    }

        #validarCampo(campo){
            campo.addEventListener('input',()=>{
                const exRegualar = /[^a-zA-Z0-9 ]/; //es la expresion regular para caracteres especiales

                if (exRegualar.test(campo.value)) {
                    campo.style.border = "2px solid red";
                    this.#aviso.innerText = "no agregues parametros especiales"
                    return false;

                    //borro el aviso despues de un egundo 
                    setTimeout(()=>{
                        this.#aviso.innerText=""
                    },1500);
                }else{
                    campo.style.border = "2px solid green";
                    return true;
                }
            });
        }


        //valida que la contraseña contenga al menos un caracter especial 
       #validarClave(){
        this.#clave.addEventListener('input', ()=>{
        const exRegualar = /[^a-zA-Z0-9 ]/; // expresión regular para caracteres especiales
        if (!exRegualar.test(this.#clave.value)) {
            this.#clave.style.border = "2px solid red";
            return true;
        } else {
            this.#clave.style.border = "2px solid green";
            return true;
        }
    });
}
}