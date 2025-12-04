export class vistaCrearSala{

    constructor(){
        this.form=document.querySelector("form");
        this.nombre=document.getElementById("nombre");
        this.crearSala();
        this.revisarInputs();
    }

    crearSala(){
        //Cuando se pulsa el botón enviar...
        this.form.addEventListener("submit", (e) => {
            let sw=this.validar();                                             //Si le da a subir y falta algún campo se validarán todos los campos

            if(sw!=0){
                e.preventDefault();                                            //Evita que se envíe el formulario
            }else{
                this.guardarSala(this.nombre);
            }
        });
    }

    guardarSala(nombre){
        let nombreValor=nombre.value.trim();
        let codigo=this.generarCodigo();
        console.log(codigo);
        // Recuperar salas existentes
        let salas=JSON.parse(localStorage.getItem("salas")) || [];
        salas.push({nombre: nombreValor, code: codigo});
        localStorage.setItem("salas", JSON.stringify(salas));
    }

    generarCodigo(){
        let codigo="";
        for(let i=0;i<6;i++) {
            codigo+=Math.floor(Math.random()*10);                            //Genera un número del 0 al 9
        }
        return codigo;
    }

    revisarInputs(){
        this.inputNombre();
    }

    inputNombre(){
        //Cuando escribes en el input nombre
        this.nombre.addEventListener("input", () => {                 //En tiempo real detecta lo que escribes en el input
            this.validarNombre();
        });
    }

    //Validar todo
    validar(){
        return this.validarNombre();
    }

    //Validar el nombre
    validarNombre(){
        let nombreValor=this.nombre.value.trim();                                //La función trim() quita los espacios extra

        if(nombreValor===""){
            this.validarError(this.nombre, "Nombre Inválido");
            return 1;
        }else{
            this.validarOk(this.nombre);
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