<?php

    require_once __DIR__."/../model/M_AgregarFotos.php";

    class C_AgregarFotos{
        private $modelo;
        public $vista;

        public function __construct(){
            $this->modelo=new M_AgregarFotos();
        }

        public function subirFotos(){
            $urlFoto=isset($_POST["urlFoto"]) ? $_POST["urlFoto"] : null;

            $fotos=$this->modelo->altaFotos($urlFoto);

            if($fotos){
                $this->vista="V_AgregarFotos";
                return ['fotos' => $fotos];
            }else{
                //Llamamos a una vista de error
                $this->vista="V_Error";
                return ['mensajeError' => "ERROR AL RECOGER DATOS DE LOS PROFESORES"];
            }
        }
    }

?>