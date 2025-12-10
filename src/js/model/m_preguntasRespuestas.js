export class PreguntasRespuestas{

    async cargarDatos(){
        const resultadoPreguntas = await fetch("http://22.daw.esvirgua.com/cargadorCliente/php/index.php?c=C_sacarPreguntasRespuestas&m=obtenerPreguntasRespuestas");

        const datosPreguntas = await resultadoPreguntas.json();

        // Log para verificar los datos obtenidos
        console.log("Datos obtenidos del servidor:", datosPreguntas);

        // Transformar los datos obtenidos en el formato esperado
        const preguntas = datosPreguntas.preguntas.map(pregunta => ({
            pregunta: pregunta.pregunta,
            opciones: pregunta.respuestas.map((respuesta) => ({
                texto: respuesta.respuesta,
                correcta: respuesta.correcta
            }))
        }));

        return preguntas;
    }
    
}