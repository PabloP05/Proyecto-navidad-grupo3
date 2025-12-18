<?php

    //require_once __DIR__ . '/../config/indexConfig.php';
    require_once __DIR__.'/../model/M_AñadirContenidos.php';

    class C_AñadirContenidos{
        private $modelo;
        public $vista;

        public function __construct(){
            $this->modelo=new M_AñadirContenidos();
        }

        public function agregarContenido() {
            $this->vista="V_PanelAdministracion";

            if(!empty($_POST['pregunta'])){
                if(isset($_POST['respuestasCorrectas']) && isset($_POST['respuestasIncorrectas'])) {
                
                    switch($_POST['modo']){
                        case '1':
                            $dato=$this->modelo->agregarPreguntaYRespuestas();
                            break;
                        case '2':
                            $dato=$this->modelo->agregarSituacion();
                            break;
                        case '3':
                            $dato=$this->modelo->agregarImagen();
                            break;
                    }
                    $this->vista="V_PanelAdministracion";
                }
            }
            return ['dato' => $dato];
    }


    }
?>