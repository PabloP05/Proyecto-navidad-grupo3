export class modeloSituaciones{


    //Función para traer las preguntas desde PHP
     async  obtenerPreguntas(){
        const resultadoPreguntas=await fetch('https://22.daw.esvirgua.com/cargadorCliente/php/index.php?c=C_sacarPreguntasRespuestas&m=obtenerPreguntasRespuestas');
        console.log(resultadoPreguntas);
        const datosPreguntas=await resultadoPreguntas.json();

        console.log(datosPreguntas)
       /*  return datosPreguntas; */
    }
   
    async obtenerSituacionesJSON(){
        return [
            {
                idSituacion: 1,
                pregunta: "¿Qué comportamientos pueden considerarse bullying?",
                respuestas: [
                    { texto: "Insultar o humillar repetidamente a un compañero", correcta: true },
                    { texto: "Aislar a alguien de manera intencional", correcta: true },
                    { texto: "Amenazar a un compañero física o psicológicamente", correcta: true },
                    { texto: "Pedir ayuda al profesor cuando hay un conflicto", correcta: false },
                    { texto: "No querer trabajar en grupo un día puntual", correcta: false },
                    { texto: "Hacer una broma sin intención de dañar", correcta: false }
                ]
            },

            {
                idSituacion: 2,
                pregunta: "¿Qué señales podrían indicar que un alumno sufre bullying?",
                respuestas: [
                    { texto: "Cambios repentinos en su comportamiento o estado de ánimo", correcta: true },
                    { texto: "Evitar asistir a clase con frecuencia", correcta: true },
                    { texto: "Pérdida de pertenencias o material escolar sin explicación", correcta: true },
                    { texto: "Hablar mucho con sus profesores y compañeros", correcta: false },
                    { texto: "Participar en actividades con entusiasmo", correcta: false },
                    { texto: "Tener buenas relaciones con todo el grupo", correcta: false }
                ]
            },

            {
                idSituacion: 3,
                pregunta: "¿Qué acciones ayudan a combatir el bullying?",
                respuestas: [
                    { texto: "Avisar a un adulto responsable si se presencia acoso", correcta: true },
                    { texto: "Apoyar a la persona que está siendo acosada", correcta: true },
                    { texto: "Denunciar el comportamiento agresivo", correcta: true },
                    { texto: "Reír las bromas aunque sean ofensivas", correcta: false },
                    { texto: "Ignorar a quien está sufriendo acoso para no meterse en líos", correcta: false },
                    { texto: "Justificar al agresor diciendo que es solo una broma", correcta: false }
                ]
            },

            {
                idSituacion: 4,
                pregunta: "¿Qué actitudes NO forman parte del bullying?",
                respuestas: [
                    { texto: "Ayudar a compañeros cuando lo necesitan", correcta: true },
                    { texto: "Respetar las diferencias entre compañeros", correcta: true },
                    { texto: "Resolver conflictos hablando", correcta: true },
                    { texto: "Insultar repetidamente a un compañero", correcta: false },
                    { texto: "Propagar rumores malintencionados", correcta: false },
                    { texto: "Empujar o golpear a alguien", correcta: false }
                ]
            },

            {
                idSituacion: 5,
                pregunta: "¿Qué comportamientos son propios de un agresor?",
                respuestas: [
                    { texto: "Amenazar o intimidar a otros", correcta: true },
                    { texto: "Reírse del sufrimiento de otra persona", correcta: true },
                    { texto: "Buscar dominar o controlar a compañeros", correcta: true },
                    { texto: "Ser empático con los demás", correcta: false },
                    { texto: "Intentar mediar entre dos alumnos", correcta: false },
                    { texto: "Pedir perdón cuando se equivoca", correcta: false }
                ]
            }
        ];
    } 
}







