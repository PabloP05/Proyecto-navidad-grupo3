<?php
ob_start();
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if(!isset($_GET['c'])) {
    $_GET['c'] = 'gestionAdmin';
}
if(!isset($_GET['m'])) {
    $_GET['m'] = 'mostrarLogin';
}

$nombreControlador = 'C_' . $_GET['c'];

$metodo = $_GET['m'];
require_once __DIR__ . '/controller/' . $nombreControlador . '.php';
$controlador = new $nombreControlador();

if(method_exists($controlador, $metodo)) {
    $datos = $controlador->$metodo();
}

$vista = __DIR__ . '/views/' . $controlador->vista . '.php';
include($vista);
?>