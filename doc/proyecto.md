1. Estructura General del Juego
El juego se organiza en partidas alojadas dentro de salas. Cada sala puede ser creada
por cualquier usuario y funciona como un espacio independiente donde se desarrollará
una partida con sus propios participantes, rondas y puntuaciones.
- Creación y Acceso a Salas
• Creación: cualquier usuario puede crear una sala, convirtiéndose
automáticamente en el anfitrión de la misma.
• Código de acceso: al crear una sala, se genera un código único que permite a
otros usuarios unirse.
• Ingreso de jugadores: cualquier usuario que tenga el código podrá unirse a la
sala mientras la partida no haya comenzado.
• Rol del anfitrión: únicamente el anfitrión puede iniciar la partida y ver en tiempo
real la actualización de las puntuaciones conforme se registran en la base de
datos.
Funcionamiento de las partidas
Una vez que el anfitrión inicia la partida, comenzará una secuencia de rondas
generadas aleatoriamente a partir de tres modos de juego distintos. El orden y la
combinación pueden variar en cada partida.
Los modos de juego disponibles son:
- Preguntas y Respuestas
Este modo presenta al jugador una pregunta acompañada de tres o más opciones de
respuesta. Las respuestas están categorizadas de la siguiente manera:
• Respuesta correcta: otorga 10 puntos.
• Respuesta parcialmente correcta: otorga 5 puntos.
• Respuestas incorrectas restantes: otorgan 0 puntos.
El jugador debe seleccionar una única opción antes de que termine el tiempo de
la ronda (si aplica).

-Situaciones y Acciones
El jugador recibe una situación descrita mediante un texto, seguida de una lista de
posibles acciones.
Entre las acciones propuestas:
• Varias son correctas.
• Varias son incorrectas.
El jugador debe seleccionar todas las acciones que considere correctas.
La puntuación se asigna según su precisión:
• Si selecciona únicamente las acciones correctas: 10 puntos.
• Si selecciona una sola acción incorrecta: 5 puntos.
• Si selecciona dos o más acciones incorrectas: 0 puntos.
-Identifica la Imagen
El sistema muestra al jugador una imagen relacionada con una situación o acción
dentro del aula.
Se presentan dos descripciones posibles:
• Una es correcta.
• La otra es incorrecta.
El jugador debe elegir la descripción que coincide con la imagen.
• Acierto: suma 10 puntos.
• Fallo: suma 0 puntos.
4. Sistema de Puntuación

-Puntajes por Sala
• La puntuación de un jugador es exclusiva de cada sala.
• Si un jugador participa en varias salas, sus puntajes no se mezclan: cada sala
mantiene su propia clasificación independiente.

-Actualización de Puntuaciones
• A medida que los jugadores completan las rondas, sus resultados se registran
en la base de datos.
• El anfitrión de la sala ve en tiempo real la clasificación conforme se actualiza.
• Los jugadores verán la clasificación final al terminar la partida, mostrando
todas las puntuaciones ordenadas.
5. Clasificación Final
Al finalizar todas las rondas:
• Se genera una tabla de clasificación con todos los jugadores de la sala.
• Se muestran sus puntuaciones totales ordenadas de mayor a menor.
• Esta clasificación solo es visible para los jugadores de esa sala en particular.
6. partidas publicas
Los usuarios pueden realizar partidas publicas que no requieren de un código de sala y
estas partidas se almacenan en una tabla de datos puntuación global