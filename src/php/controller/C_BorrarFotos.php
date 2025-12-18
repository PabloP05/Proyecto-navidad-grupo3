<?php

    require_once __DIR__.'/../model/M_BorrarFotos.php';

    class C_BorrarFotos{
        private $modelo;
        public function __construct(){
            $this->modelo= new M_BorrarFotos();
        }

        public function borrar(){
            $idFoto=$_GET['id'] ?? null;
            $this->modelo->borrarFoto($idFoto);

            header("Location: ./index.php?c=listarContenido&m=listarContenido");
            exit();
        }
    }

?>