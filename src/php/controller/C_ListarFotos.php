<?php

    require_once __DIR__."/../model/M_ListarFotos.php";

    class C_ListarFotos{
        private $modelo;
        public $vista;

        public function __construct(){
            $this->modelo=new M_ListarFotos();
        }

        public function mostrarFotos(){
            $fotos=$this->modelo->recogerFotos();

            if($fotos){
                echo json_encode(['fotos' => $fotos]);
            }else{
                //Llamamos a una vista de error
                $this->vista="V_Error";
                return ['mensajeError' => "ERROR AL RECOGER DATOS DE LOS PROFESORES"];
            }
        }
    }

?>