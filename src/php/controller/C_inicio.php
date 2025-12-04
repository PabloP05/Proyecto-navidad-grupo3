<?php
require_once __DIR__.'/../config/indexConfig.php';
    class C_inicio {
        public $vista ; // Nombre de la vista asociada al controlador

        public function vistaInicial() {
            $this->vista = 'CpanelPantallaDeInicio'; // Asigna la vista asociada al controlador
        }
    }
?>