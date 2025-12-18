<?php

    require_once __DIR__."/../model/M_ListarFotos.php";

    class C_ListarFotos{
        private $modelo;

        public function __construct(){
            $this->modelo=new M_ListarFotos();
        }

        public function mostrarFotos(){
            $fotos=$this->modelo->recogerFotos();
            echo json_encode(['fotos' => $fotos]);
            exit();
        }
    }

?>