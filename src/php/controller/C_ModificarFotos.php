<?php

    require_once __DIR__.'/../model/M_ModificarFotos.php';

    class C_ModificarFotos{
        public $vista;
        private $modelo;

        public function __construct() {
            $this->modelo= new M_ModificarFotos();
        }

        public function recogerDatos(){
            $idFoto=$_GET['id'] ?? null;
            $datos=[];

            if($idFoto){
                $datos['foto']=$this->modelo->obtenerFotoPorId($idFoto);
                $respuestas=$this->modelo->obtenerRespuestas($idFoto);
            }

            //Diferenciar la correcta de la incorrecta
            $datos['idRespuestaCorrecta']=null;
            $datos['idRespuestaIncorrecta']=null;
            $datos['respuestaCorrecta']='';
            $datos['respuestaIncorrecta']='';

            $sw=0;
            foreach($respuestas as $respuesta){
                if($sw==0){
                    $datos['respuestaCorrecta']=$respuesta['respuestaFoto'];
                    $datos['idRespuestaCorrecta']=$respuesta['idRespuestaFoto'];
                    $sw=1;
                }else{
                    $datos['respuestaIncorrecta']=$respuesta['respuestaFoto'];
                    $datos['idRespuestaIncorrecta']=$respuesta['idRespuestaFoto'];
                }
            }

            $this->vista='V_ModificarFotos';

            return $datos;
        }

        public function modificarDatos(){
            $idFoto=$_GET['id'] ?? null;
            $this->modelo->modificarDatosFotos($idFoto);
            
            header("Location: index.php?c=listarContenido&m=listarContenido");
            exit();
        }
    }
?>