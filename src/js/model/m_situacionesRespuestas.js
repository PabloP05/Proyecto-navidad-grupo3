export class SituacionesRespuestas{
    async cargarDatos(){
        const resultadoSituaciones = await fetch("https://22.daw.esvirgua.com/cargadorCliente/php/index.php?c=C_sacarSituacionesRespuestas&m=obtenerSituacionesRespuestas");
        const datosSituaciones = await resultadoSituaciones.json();
        console.log("Datos situaciones:", datosSituaciones);

        // Transformar los datos obtenidos en el formato esperado
        const situaciones = datosSituaciones.situaciones.map(situacion => ({
            situacion: situacion.situacion,
            opciones: situacion.respuestas.map(respuesta => ({
                texto: respuesta.respuestaSituacion,
                correcta: respuesta.correcta
            }))
        }));

        return situaciones;
    }
}