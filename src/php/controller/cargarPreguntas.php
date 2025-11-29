<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
    require_once 'c_preguntasRespuestas.php';
    $cargar = new C_CargarPreguntas();
     $cargar->CrearPregunta();
?>