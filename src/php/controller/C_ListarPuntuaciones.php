<?php

    require_once __DIR__."/../model/M_ListarPuntuaciones.php";

    class C_ListarPuntuaciones{
        private $modelo;
        public $vista;

        public function __construct(){
            $this->modelo=new M_ListarPuntuaciones();
        }

        public function mostrarPuntuaciones(){
            $partidas=$this->modelo->obtenerPuntuaciones();
            $this->vista='V_ContenidoPuntuaciones';

            return ['partidas' => $partidas];
        }
    }

?>