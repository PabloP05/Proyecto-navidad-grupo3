export class vistaSala{

    constructor(){
        this.titulo=document.getElementById("salastitulo");
        this.codigo=document.getElementById("codigo");
        this.btnBorrarSala=document.getElementById("btnBorrarSala");
        this.mostrarSala();
        this.borrarSala();
    }

    mostrarSala(){
        //Recupera la sala seleccionada con el evento
        let sala=JSON.parse(localStorage.getItem("salaSeleccionada")) || [];

        this.titulo.innerText=sala.nombre;
        this.codigo.value=sala.code;
    }

    borrarSala(){
        this.btnBorrarSala.addEventListener("click", () => {
            let salaSeleccionada=JSON.parse(localStorage.getItem("salaSeleccionada")) || [];
            let salas=JSON.parse(localStorage.getItem("salas")) || [];

            let salasModificada=salas.filter(sala => sala.code!=salaSeleccionada.code);

            localStorage.setItem("salas", JSON.stringify(salasModificada));

            window.location.href="../../../src/html/vista-juegos/salas.html"; //Para enlazar mediante ruta
        });
    }
}