<?php

    require_once "database/conectar.php";

    class M_ListarFotos extends Conectar{

        function __construct(){
            parent::__construct();
        }

        public function recogerFotos(){
            $sql="  SELECT fotos.foto, respuestaFoto, correcta 
                    FROM fotos INNER JOIN respuestasFotos
							ON fotos.idFoto = respuestasFotos.idFoto";
            //echo $sql;

            try{
                $resultado=$this->conexion->query($sql);

                $respuestasfotos=[];
                while($fila=$resultado->fetch_assoc()){
                    $respuestasfotos[]=$fila;
                }

                return $respuestasfotos;
            }catch(mysqli_sql_exception $e){
                return false;
            }
        }
    }

?>