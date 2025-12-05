export class vistaSalas{

    constructor(){
        this.btnCrearSala=document.getElementById("CreaSala");
        this.contenedorSalas=document.getElementById("salas");                     //Aquí cogemos el div donde van las salas
        this.crearSalas();
        this.mostrarSalas();
    }

    crearSalas(){
        //Evento cuando pulsamos iniciar partida
        this.btnCrearSala.addEventListener("click", () => {
            window.location.href="../../../src/html/vista-juegos/crear-sala.html"; //Para enlazar mediante ruta
        });
    }

    mostrarSalas(){
        this.contenedorSalas.innerHTML = "";                                                        // Borra todo antes de añadir

        //Recupera las salas guardadas en localStorage
        let salas=JSON.parse(localStorage.getItem("salas")) || [];

        //Recorro todas las salas del local storage
        for(let i=0;i<salas.length;i++){
            let div=document.createElement("div");                                 //Creo un div
            div.className="sala";                                                  //Añado la clase sala
            div.id="sala"+(i+1+4);                                                 //Le añado el id sala y el número que le corresponde
            let enlace=document.createElement("a");                                //Creo un enlace
            enlace.href="sala.html";                                               //Lo enlazco con sala.html
            
            enlace.addEventListener("click", () => {                               //Guarda la sala seleccionada antes de cambiar de página
                localStorage.setItem("salaSeleccionada", JSON.stringify(salas[i]));
            });
            
            let texto=document.createElement("p");                                 //Creo un elmento p
            texto.innerText=salas[i].nombre;                                       //Meto el nombre de la sala en p
            enlace.appendChild(texto);                                             //Meto el texto en el enlace
            div.appendChild(enlace);                                               //Meto el enlace en el div
            this.contenedorSalas.appendChild(div);                                 //Meto el div en el contenedor de la salas
        }
    }
}