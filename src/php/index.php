<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

    require_once 'controller/cargarVistasInicio.php';
    require_once 'controller/cargador.php';
    require_once 'controller/c_VerContenido.php';   

    $cargar = new Vistas();
    $listadp = new VerContenido();
    

    if(isset($_GET['opcion'])){
        switch ($_GET['opcion']) {
        /*el caso a se produce cunado el usuario llama a la opcion de agregar contenido  */
            case 'a':
                Cargador::cargar();
                include Cargador::$vistas;
                break;
        /* La opcion l es cuando el usuario llama a la opcion de listar el contenido  */
            case 'l':
               $listadp->obtenerContenido();
               $preguntas = $listadp->datosPreguntas;
                $situaciones = $listadp->datosSituaciones;      
               include $listadp->vistas;
                break;
            default:
                
                include $cargar->vistaDeCarga;
                break;
        }
    }else{
        $cargar->cargaraInicio();
        include $cargar->vistaDeCarga;
    }
?>