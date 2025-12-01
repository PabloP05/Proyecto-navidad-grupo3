<?php

    require_once __DIR__ . '/../model/m_cargarPreguntas.php';

    class C_situaciones{
        private $cargar;

        public function __construct() {
            $this->modelo = new CargarPreguntas();
        }

        public function CargarSituaciones(){
            
        }
    }
?>