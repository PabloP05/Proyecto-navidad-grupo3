<?php

require_once __DIR__ . '/../model/m_cargarPreguntas.php';

class C_CargarPreguntas {

    private $modelo;

    public function __construct() {
        $this->modelo = new CargarPreguntas();
    }

    public function CrearPregunta() {
        // Validar que viene la pregunta
        if (!isset($_POST['info']) || empty(trim($_POST['info']))) {
            echo "La pregunta es obligatoria";
        }else{
            $sw = true;
            if (isset($_POST['respuestas']) && is_array($_POST['respuestas'])) { //el is_array es porque siempre debe haber dos respuestas como minimo
                foreach ($_POST['respuestas'] as $respuesta) {
                    if (!isset($respuesta) || trim($respuesta) === "") {
                        $sw = false;
                    }
                }
            }

            if (!$sw) {
                echo "Todas las respuestas deben tener contenido";
            }else{
                if ($this->modelo->AgregarPreguntas()) {
                    return "Proceso realizado con éxito";
                } else {
                    return "Proceso no realizado";
                }
            }
        }
    }
}

?>
