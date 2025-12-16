<?php

    require_once "database/conectar.php";

    class M_AgregarFotos extends Conectar{

        function __construct(){
            parent::__construct();
        }

        function altaFotos($urlFoto){
            $sql="INSERT INTO profesores(nombre) VALUES ('".$urlFoto."');";
            //echo $sql;

            try{
                $resultado=$this->conexion->query($sql);

                return $resultado;
            }catch(mysqli_sql_exception $e){
                return false;
            }
        }
    }

?>