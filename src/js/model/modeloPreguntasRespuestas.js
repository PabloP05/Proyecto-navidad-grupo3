export class modeloPreguntasRespuestas{

    //Función para traer las preguntas desde PHP
    /*async obtenerPreguntas(){
        const resultadoPreguntas=await fetch("https://22.daw.esvirgua.com/cargadorCliente/php/index.php?c=C_sacarPreguntasRespuestas&m=obtenerPreguntasRespuestas");
        console.log(resultadoPreguntas);
        const datosPreguntas=await resultadoPreguntas.json();

        return datosPreguntas;
    }*/

    async obtenerPreguntasJSON(){
        return [
            {
                idPregunta: 1,
                pregunta: "¿Qué es el bullying en el aula?",
                respuestas: [
                    { texto: "Un juego entre compañeros", correcta: false },
                    { texto: "Una forma de acoso escolar repetido", correcta: true },
                    { texto: "Una broma ocasional sin consecuencias", correcta: false }
                ]
            },
            {
                idPregunta: 2,
                pregunta: "¿Cuál de estas conductas es un ejemplo de bullying?",
                respuestas: [
                    { texto: "Reírse juntos en clase", correcta: false },
                    { texto: "Insultar y excluir repetidamente a un compañero", correcta: true },
                    { texto: "Compartir materiales escolares", correcta: false }
                ]
            }
        ];
    }
}