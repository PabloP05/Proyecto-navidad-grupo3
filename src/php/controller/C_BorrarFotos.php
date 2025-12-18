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

<<<<<<< HEAD
            header("Location: ./index.php?c=listarContenido&m=listarContenido");
=======
            header("Location: ./indexAdrian.php?c=C_MostrarContenidos&m=listarContenidos");
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e
            exit();
        }
    }

?>