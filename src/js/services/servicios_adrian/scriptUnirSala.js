//VALIDACIONES AL BUSCAR SALAS

let codigo=document.getElementById("codigo");
let btnBuscarSala=document.getElementById("btnBuscarSala");


btnBuscarSala.addEventListener("submit", function(e) {
    e.preventDefault();
    validar();
});


function validar(){
    let codigoValor=codigo.value.trim();                  //La función trim() quita los espacios extra

    if(codigoValor===""){
        validarError(codigo, "Código Inválido");
    }else{
        console.log(codigoValor);
        validarOk(codigo);
    }
}

//Cuando escribes en el input codigo
codigo.addEventListener("input", () => {                              //En tiempo real detecta lo que escribes en el input
    codigo.value=codigo.value.replace(/[^0-9]/g, "");                   //Solo me deja escribir números y no caracteres
    validar();
});


//Validar si está mal
function validarError(input, mensaje){
    let controlForm=input.parentElement;                            //La propiedad parentElement devuelve el elemento padre
    let aviso=controlForm.querySelector("p");                       //Elegimos el selector donde meteremos lo que devuelve
    aviso.innerText=mensaje;                                        //Metemos en aviso el texto del mensaje

    controlForm.className="control error";                          //Creamos la clase error
}

//Validar si está bien
function validarOk(input){
    let controlForm=input.parentElement;
    let aviso=controlForm.querySelector("p");
    aviso.innerText="";                                             //Para borrar el texto del p si tiene

    controlForm.className="control correcto";                       //Creamos la clase correcto
}