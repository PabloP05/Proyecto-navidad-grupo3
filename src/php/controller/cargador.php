<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
   
require_once 'c_preguntasRespuestas.php';
require_once 'c_situaciones.php';



class Cargador{

    public static $vistas;

    public static function cargar(){
        switch ($_POST['elemento_agregado']) {
        case '1':
                $cargar = new C_CargarPreguntas();
                $mensaje = $cargar->CrearPregunta();
            break;
        case '2':
                $cargar = new C_situaciones();
                $cargar->CargarSituaciones();
            break;
            /* En el caso 3 se lllamara a los controladores que se se encargan de agregar las iagenes */
        case '3':
            break;
            default:
            break;
        }
        self::$vistas= __DIR__.'/../views/html/view_admin/CpanelPantallaDeInicio.html';
    }
}
    
?>