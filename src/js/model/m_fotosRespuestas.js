export class FotosRespuestas{
    async cargarDatos(){
        const datos = await fetch('URL PARA SACAR LOS DATOS DE LAS FT CUNADO ESTE EL MVC PHP DE FOTOS');
        const datosUsables = await datos.json();

        const preguntas = datosUsables.fotos.map(foto => ({
            pregunta: foto.foto,
            opciones: foto.respuestas.map((respuesta) => ({
                texto: respuesta.respuesta,
                correcta: respuesta.correcta
            }))
        }));

        return preguntas;
    }
}