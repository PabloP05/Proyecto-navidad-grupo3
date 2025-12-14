<?php
    // Habilitar CORS para peticiones locales (para que haga el fetch sin llamar al servidor)
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
    
    // Mostrar errores para debugging
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    // Datos de conexión para hacer pruebas 
    define('USUARIO','daw_userbd22');
    define('SERVIDOR','22.daw.esvirgua.com');
    define('BBDD','daw_22_BD2');
    define('CLAVE','jvgnTR!%EJiH[}vi');

    try {
        // Validar que los parámetros necesarios estén presentes
        if (!isset($_POST['id']) || !isset($_POST['puntos'])) {
            throw new Exception('Faltan parámetros requeridos. Recibido: ' . json_encode($_POST));
        }

        $idJugador = intval($_POST['id']);
        $puntos = intval($_POST['puntos']);
        $idSala = 1;

        // Validar que los valores sean válidos
        if ($idJugador <= 0) {
            throw new Exception('ID de jugador inválido: ' . $idJugador);
        }

        $conexion = new MySQLi(SERVIDOR, USUARIO, CLAVE, BBDD);
        
        if ($conexion->connect_error) {
            throw new Exception('Error de conexión: ' . $conexion->connect_error);
        }

        // Usar prepared statement para prevenir SQL injection
        $stmt = $conexion->prepare("INSERT INTO partidas(idSala, puntuacionTotal, idJugador) VALUES (?, ?, ?)");
        $stmt->bind_param("iii", $idSala, $puntos, $idJugador);
        
        if ($stmt->execute()) {
            echo json_encode([
                'status' => 'ok',
                'message' => 'Partida guardada correctamente',
                'insertId' => $conexion->insert_id,
                'datos' => [
                    'idJugador' => $idJugador,
                    'puntos' => $puntos,
                    'idSala' => $idSala
                ]
            ]);
        } else {
            throw new Exception('Error al ejecutar query: ' . $stmt->error);
        }
        
        $stmt->close();
        $conexion->close();
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $e->getMessage()
        ]);
    }
?>