<?php
    require_once __DIR__ . '/../config/indexConfig.php';
    require_once __DIR__ . '/../model/M_contenido.php';
    class C_agregarContenido {
        public $vista;

        public function agregarContenido() {
            $this->vista = 'CpanelPantallaDeInicio';
            $controlador = new M_contenido();

            if(!empty($_POST['pregunta'])) {
            
                if(isset($_POST['respuestasCorrectas']) && isset($_POST['respuestasIncorrectas'])) {
                
                    switch($_POST['modo']) {
                        case '1':
                            $dato = $controlador->agregarPreguntaYRespuestas();
                            break;
                        case '2':
                            $dato =$controlador->agregarSituacion();
                            break;
                        case '3':
                            $dato =$controlador->agregarImagen();
                            break;
                    }
                    $this->vista = 'CpanelPantallaDeInicio';
                }
            }
            return ['dato' => $dato];
    }


    }
?>