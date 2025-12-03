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

    // Resolve controller path explicitly to avoid include path surprises
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
    //verifico que la viusta exista 
    if (!empty($instanciaControlador->vista)) {
        if (is_array($contenedorDatos)) {
            extract($contenedorDatos);
        }

        $vista = __DIR__ . '/' . RUTA_VISTAS . $instanciaControlador->vista . '.php';
        if (file_exists($vista)) { //pregunto por la existencia del archivo
            include $vista;
        } else {
            http_response_code(500); //evito el codigo 500 del navegador
            echo 'Error: vista no encontrada ';
        }
    }
?>
