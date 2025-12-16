<?php

    require_once __DIR__ . '/../model/M_MostrarContenidos.php';

    class C_MostrarContenidos {
        public $vista;
        private $modelo;

        public function __construct() {
            $this->modelo=new M_MostrarContenidos();
        }

        /* con este metodo (no lo hago static porque en la clase Conectar inicializo la variable Conexion como estatic con self::
         y si no llamo a un metioo publico no me genera el constructor ) */
        public function listarContenidos() {
            $this->vista="V_PanelAdministracion";
            
            $preguntas=$this->modelo->obtenerPreguntas();
            $situaciones=$this->modelo->obtenerSituaciones();
            $imagenes=$this->modelo->obtenerImagenes();

            $this->vista='V_Contenidos';
            return [ //con esto luego puedo acceder a los datos con el estract del index (que me extrrae todos los arrays asociativos)
                'preguntas' => $preguntas,
                'situaciones' => $situaciones,
                'imagenes' => $imagenes
            ];
        }
    }
?>