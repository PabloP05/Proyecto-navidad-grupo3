export class vistaSala{

    constructor(){
        this.titulo=document.getElementById("salastitulo");
        this.codigo=document.getElementById("codigo");
        this.mostrarSala();
    }

    mostrarSala(){
        //Recupera la sala seleccionada con el evento
        let sala=JSON.parse(localStorage.getItem("salaSeleccionada")) || [];

        this.titulo.innerText=sala.nombre;
        this.codigo.value=sala.code
    }
}