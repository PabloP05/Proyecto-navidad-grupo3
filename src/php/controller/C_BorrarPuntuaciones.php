<?php

    require_once __DIR__.'/../model/M_BorrarPuntuaciones.php';

    class C_BorrarPuntuaciones{
        private $modelo;

        public function __construct(){
            $this->modelo= new M_BorrarPuntuaciones();
        }

        public function borrar(){
            $idPartida=$_GET['id'] ?? null;
            $this->modelo->borrarPuntuaciones($idPartida);

            header("Location: ./index.php?c=ListarPuntuaciones&m=mostrarPuntuaciones");
            exit();
        }
    }

?>