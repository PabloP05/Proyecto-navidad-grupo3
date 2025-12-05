export class vistaRanking{

    constructor(){
        this.cajaJugadores=document.querySelector("main");
        this.verJugadores();
    }

    verJugadores(){
        this.cajaJugadores.innerHTML = "";                                                        // Borra todo antes de añadir

        //Recupera las salas guardadas en localStorage
        let jugadoresInvitados=JSON.parse(localStorage.getItem("jugadoresInvitados")) || [];

        jugadoresInvitados.sort((a, b) => Number(b.puntos)-Number(a.puntos));                    //Ordenar de mayor a menor y puestos a numeros
        let mejores=jugadoresInvitados.slice(0, 3);                                              //Coger solo top 3

        for(let i=0;i<mejores.length;i++){
            let nombre=document.createElement("p");                                              //Creo un p
            nombre.className="jugadores";                                                        //Le añado la clase jugadores
            nombre.innerText=mejores[i].nick;                                                    //Le meto el nick del localStorage al p
            this.cajaJugadores.appendChild(nombre);                                              //Meto el p dentro del main
        }
    }
}