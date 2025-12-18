<?php

    require_once __DIR__.'/../model/M_BorrarUsuarios.php';

    class C_BorrarUsuarios{
        private $modelo;

        public function __construct(){
            $this->modelo= new M_BorrarUsuarios();
        }

        public function borrar(){
            $idUsuario=$_GET['id'] ?? null;
            $usuarioBorrado=$this->modelo->borrarUsuario($idUsuario);

            if($usuarioBorrado){
                header("Location: ./index.php?c=ListarUsuarios&m=mostrarUsuarios");
                exit();
            }else{
                $this->vista='V_ErrorUsuarioBorrado';
                return [];
            }
        }
    }

?>