export class controladorFotos{

    constructor(modelo,vista){
        this.modelo=modelo;
        this.vista=vista;
        this.inicializarDatos();
    }

    async inicializarDatos(){
        //Trae las preguntas desde PHP/JSON
        const fotos=await this.modelo.obtenerFotosJSON();

        //Pasa las preguntas a la vista para renderizar
        this.vista.mostrarFotos(fotos);
    }
}