<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ .'/config/indexConfig.php';



    if (!isset($_GET['c'])) {
        $_GET['c'] = C_DEFECTO;
    }

    if (!isset($_GET['m'])) {
        $_GET['m'] = M_DEFECTO;
    }


    $controladorPath = __DIR__ . '/' . RUTA_CONTROLADOR . $_GET['c'] . '.php';
    if (!file_exists($controladorPath)) {
        http_response_code(500);
        echo 'Error: controlador no encontrado';
        exit;
    }

    require_once $controladorPath;

        $nombreControlador = $_GET['c'];
        $instanciaControlador = new $nombreControlador();

    $metodo = $_GET['m'];
    $contenedorDatos = [];

    //verifico que el metodo al que estoy llamando existe en el controlador 
    if (method_exists($instanciaControlador, $metodo)) {
        $contenedorDatos = $instanciaControlador->$metodo();
    }
    if (is_array($contenedorDatos)) {
        echo json_encode($contenedorDatos);
    }
?>
