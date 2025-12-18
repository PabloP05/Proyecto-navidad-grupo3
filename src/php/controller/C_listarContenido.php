<?php
    require_once __DIR__.'/../config/indexConfig.php';
    require_once __DIR__ . '/../model/M_listarContenido.php';

    class C_listarContenido {
        public $vista;
        private $modelo;

        public function __construct() {
            $this->modelo = new M_listarContenido();
        }

        /* con este metodo (no lo hago static porque en la clase Conectar inicializo la variable Conexion como estatic con self::
         y si no llamo a un metioo publico no me genera el constructor ) */
        public function listarContenido() {
            $this->vista = 'contenido';
            
            $preguntas = $this->modelo->obtenerPreguntas();
            $situaciones = $this->modelo->obtenerSituaciones();
            $imagenes=$this->modelo->obtenerImagenes();

            $this->vista = 'contenido';
            return [ //con esto luego puedo acceder a los datos con el estract del index (que me extrrae todos los arrays asociativos)
                'preguntas' => $preguntas,
                'situaciones' => $situaciones,
                'imagenes' => $imagenes
            ];
        }
    }
?>