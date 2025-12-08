export class controladorPreguntasRespuestas{

    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
        this.inicializarDatos();
    }

    async inicializarDatos(){
        //Trae las preguntas desde PHP/JSON
        const preguntas=await this.modelo.obtenerPreguntasJSON();

        //Pasa las preguntas a la vista para renderizar
        this.vista.mostrarPreguntas(preguntas);
    }
}