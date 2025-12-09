<?php
    require_once __DIR__ . '/../model/M_modificarSituacion.php';

    class C_modificarSituacion {
        public $vista;
        private $modelo;

        public function __construct() {
            $this->modelo = new M_modificarSituacion();
        }

        public function modificar() {
            $this->vista = 'modificarSituacion';
            $idSituacion = $_GET['id'] ?? null;
            $datos = [];

            if ($idSituacion) {
                $datos['situacion'] = $this->modelo->obtenerSituacionPorId($idSituacion);
                $datos['respuestas'] = $this->modelo->obtenerRespuestas($idSituacion);
            }
            return $datos;
        }

        public function borrarRespuesta() {
            $idSituacion = $_GET['id'] ?? null;
            $idRespuesta = $_GET['idRespuesta'] ?? null;
            if ($idRespuesta) {
                $this->modelo->borrarRespuesta($idRespuesta);
            }
            header("Location: indexAdmin.php?c=C_modificarSituacion&m=modificar&id=$idSituacion");
            exit;
        }

        public function modificarDatos() {
            $idSituacion = $_GET['id'] ?? null;
            if ($idSituacion) {
                $this->modelo->modificarSituacion($idSituacion);
            }
            header("Location: indexAdmin.php?c=C_modificarSituacion&m=modificar&id=$idSituacion");
            exit;
        }
    }

?>