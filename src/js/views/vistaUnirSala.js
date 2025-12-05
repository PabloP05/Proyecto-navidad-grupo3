export class vistaUnirSala{

    constructor(){
        this.form=document.querySelector("form");
        this.codigo=document.getElementById("codigo");
        this.btnBuscarSala=document.getElementById("btnBuscarSala");
        this.buscar();
        this.revisarInputs();
    }

    buscar(){
        this.form.addEventListener("submit", (e) => {
            let sw=this.validar();
            if(sw!=0){
                e.preventDefault();
            }else{
                this.modoRandom();
            }
        });
    }

    revisarInputs(){
        this.inputCodigo();
    }

    inputCodigo(){
        //Cuando escribes en el input codigo
        this.codigo.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
            this.codigo.value=this.codigo.value.replace(/[^0-9]/g, "");                 //Solo me deja escribir números y no caracteres
            this.validar();
        });
    }

    validar(){
        let codigoValor=this.codigo.value.trim();                  //La función trim() quita los espacios extra

        if(codigoValor===""){
            this.validarError(this.codigo, "Código Inválido");
            return 1;
        }else if(codigoValor.length<6){
            this.validarError(this.codigo, "Debe Contener 6 Dígitos");
            return 1;
        }else{
            this.validarOk(this.codigo);
            return 0;
        }

        return sw;
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

    //Función modo aleatorio
    modoRandom(){
        //Iniciar Juego
        const modos=["modo1","modo2","modo3"];

        /*Para sacar el modo aleatorio usamos el Math.random() que eso devyelve 0 y 1, lo multiplicamos por el tamaño del array modos
        y la función Math.floor redondea el resultado a un número entero, (0.14=0)*/
        let modoAleatorio=modos[Math.floor(Math.random()*modos.length)];

        if(modoAleatorio=="modo1"){
            window.location.href="../../../src/html/vista-juegos/preguntasRespuestas.html";
        }else if(modoAleatorio=="modo2"){
            window.location.href="../../../src/html/vista-juegos/situaciones.html";
        }else{
            window.location.href="../../../src/html/vista-juegos/fotos.html";
        }
    }
}