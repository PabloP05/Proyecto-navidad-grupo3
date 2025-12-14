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

    $conexion = new MySQLi(SERVIDOR, USUARIO, CLAVE, BBDD);
    try{
        $query = "SELECT u.nick, MAX(p.puntuacionTotal) AS puntuacionMaxima
                FROM partidas AS p
                INNER JOIN usuarios AS u
                    ON u.idusuario = p.idJugador
                GROUP BY u.nick
                ORDER BY puntuacionMaxima DESC;";
        $result = $conexion->query($query);
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
        
    }catch(mysqli_sql_exception $e){
        $error = 'no se ha podido registrar al usuario, revise sus datos';
        header('Location: ../src/html/juego/registro.html');
    }
        