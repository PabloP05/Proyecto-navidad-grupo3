<?php
    require_once __DIR__.'/../model/M_borrarSituacion.php';

    class C_borrarSituacion {
        private $modelo;
        public function __construct() {
            $this->modelo = new M_borrarSituacion();
        }

        public function borrar() {
            $idSituacion = $_GET['id'] ?? null;
            $this->modelo->borrarSituacion($idSituacion);
            header("Location: ./indexAdmin.php?c=C_listarContenido&m=listarContenido");
            exit;
        }
    }
?>