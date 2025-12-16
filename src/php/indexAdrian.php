<?php

    require_once __DIR__.'/config/configBD.php';

    //Compruebo que existan el controlador y el método
    if(!isset($_GET['c'])){
        $_GET['c']=C_DEFECTO;
    }

    if(!isset($_GET['m'])){
        $_GET['m']=M_DEFECTO;
    }

    //Creo la ruta
    $rutaControlador=__DIR__.'/'.RUTA_CONTROLADOR.$_GET['c'].'.php';

    //Muestro el archivo
    require_once $rutaControlador;

    //Cojo el nombre del controlador
    $nombreControlador=$_GET['c'];
    $metodo=$_GET['m'];
    $controlador= new $nombreControlador();
    $datos=[];

    //Llamo al método del controlador
    $datos=$controlador->$metodo();

    //Creo la ruta de la vista
    $vista=__DIR__.'/'.RUTA_VISTAS.$controlador->vista.'.php';

    //Compruebo que exista el archivo
    extract($datos);    //Para poder usar los datos en las vistas
    require_once $vista;

?>