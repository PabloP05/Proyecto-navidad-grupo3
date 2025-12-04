<?php
    require_once __DIR__.'/../model/M_borrarPreguntas.php';

    class C_borrarPreguntas {
        private $modelo;
        public function __construct() {
            $this->modelo = new M_borrarPreguntas();
        }

        public function borrar() {
            $idPregunta = $_GET['id'] ?? null;
            $this->modelo->borrarPregunta($idPregunta);
            header("Location: ./indexAdmin.php?c=C_listarContenido&m=listarContenido");
            exit;
        }
    }

?>