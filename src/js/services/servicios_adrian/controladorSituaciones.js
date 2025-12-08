export class controladorSituaciones{

    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
        this.inicializarDatos();
    }

    async inicializarDatos(){
        //Trae las preguntas desde PHP/JSON
        const situaciones=await this.modelo.obtenerSituacionesJSON();

        //Pasa las preguntas a la vista para renderizar
        this.vista.mostrarSituaciones(situaciones);
    }
}