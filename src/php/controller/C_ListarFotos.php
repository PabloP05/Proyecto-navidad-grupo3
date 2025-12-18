<?php

    require_once __DIR__."/../model/M_ListarFotos.php";

    class C_ListarFotos{
        private $modelo;
<<<<<<< HEAD
=======
        public $vista;
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e

        public function __construct(){
            $this->modelo=new M_ListarFotos();
        }

        public function mostrarFotos(){
            $fotos=$this->modelo->recogerFotos();
<<<<<<< HEAD
            echo json_encode(['fotos' => $fotos]);
            exit();
=======

            if($fotos){
                echo json_encode(['fotos' => $fotos]);
            }else{
                //Llamamos a una vista de error
                $this->vista="V_Error";
                return ['mensajeError' => "ERROR AL RECOGER DATOS DE LOS PROFESORES"];
            }
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e
        }
    }

?>