export class modeloFotos{

    constructor() {
        //this.urlPreguntas="https://22.daw.esvirgua.com/cargadorCliente/php/index.php?c=C_sacarPreguntasRespuestas&m=obtenerPreguntasRespuestas";
    }

    //Función para traer las preguntas desde PHP
    /*async obtenerPreguntas(){
        const resultadoPreguntas=await fetch(this.urlPreguntas);
        console.log(resultadoPreguntas);
        const datosPreguntas=await resultadoPreguntas.json();

        return datosPreguntas;
    }*/

    async obtenerFotosJSON(){
        return [
            {
                idPregunta: 1,
                pregunta: "¿Qué es el bullying en el aula?",
                imagen: "img/bullying1.jpg",  //Ruta de la foto
                respuestas: [
                    { texto: "Un juego entre compañeros", correcta: false },
                    { texto: "Una forma de acoso escolar repetido", correcta: true }
                ]
            },
            {
                idPregunta: 2,
                pregunta: "¿Cuál de estas conductas es un ejemplo de bullying?",
                imagen: "img/bullying2.jpg",
                respuestas: [
                    { texto: "Reírse juntos en clase", correcta: false },
                    { texto: "Insultar y excluir repetidamente a un compañero", correcta: true }
                ]
            },
            {
                idPregunta: 3,
                pregunta: "¿Qué debería hacer un estudiante al presenciar bullying?",
                imagen: "img/bullying3.jpg",
                respuestas: [
                    { texto: "Ignorarlo", correcta: false },
                    { texto: "Informar a un profesor o adulto de confianza", correcta: true }
                ]
            }
        ];
    }
}