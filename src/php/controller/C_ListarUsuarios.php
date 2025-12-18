<?php

    require_once __DIR__."/../model/M_ListarUsuarios.php";

    class C_ListarUsuarios{
        private $modelo;
        public $vista;

        public function __construct(){
            $this->modelo=new M_ListarUsuarios();
        }

        public function mostrarUsuarios(){
            $usuarios=$this->modelo->obtenerUsuarios();
            $this->vista='V_ContenidoUsuarios';

            return ['usuarios' => $usuarios];
        }
    }

?>