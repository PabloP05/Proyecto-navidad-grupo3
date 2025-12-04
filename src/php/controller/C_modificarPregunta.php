<?php
    require_once __DIR__.'/../model/M_modificarPregunta.php';
    class C_modificarPregunta {
        public $vista;
        private $modelo;

        public function __construct() {
            $this->modelo = new M_modificarPregunta();
        }

        public function modificar() {
            $this->vista = 'modificarPregunta';
            $idPregunta = $_GET['id'] ?? null;
            $datos = [];

            if ($idPregunta) {
                $datos['pregunta'] = $this->modelo->obtenerPreguntaPorId($idPregunta);
                $datos['respuestas'] = $this->modelo->obtenerRespuestas($idPregunta);
            }

            return $datos;
        }

        public function borrarRespuesta() {
            $idPregunta = $_GET['id'] ?? null;
            $this->modelo->borrarRespuesta($_GET['idRespuesta']);

            header("Location: indexAdmin.php?c=C_modificarPregunta&m=modificar&id=$idPregunta");
            exit;
        }


    
        public function modificarDatos() {
            $idPregunta = $_GET['id'] ?? null;
            $modelo = $this->modelo;
            $modelo->modificarPreguntaYrespuesta($idPregunta);
                header("Location: indexAdmin.php?c=C_modificarPregunta&m=modificar&id=$idPregunta");
                exit;
            }
        }  
?>