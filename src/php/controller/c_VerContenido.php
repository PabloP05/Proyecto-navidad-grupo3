<?php
    require_once __DIR__.'/../model/m_listadoContenido.php';

    class VerContenido{
        private $modelo;
        public $datosPreguntas;
        public $datosSituaciones;
        public $vistas;

        public function __construct() {
            $this->modelo = new ListarContenido();
        }

        public function obtenerContenido(){
            $this->datosPreguntas = $this->modelo->listarPreguntas();
            $this->datosSituaciones = $this->modelo->listarSituaciones();
            $this->vistas = __DIR__.'/../views/html/view_admin/CpanelListadoContenido.php';
        }
    }   

?>