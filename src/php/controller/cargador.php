<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
   
require_once 'c_preguntasRespuestas.php';
require_once 'c_situaciones.php';



switch ($_POST['elemento_agregado']) {
    case '1':
            $cargar = new C_CargarPreguntas();
            $cargar->CrearPregunta();
        break;
    case '2':
            $cargar = new C_situaciones();
            $cargar->CargarSituaciones();
        break;
    case '3':
        break;
}
    
?>