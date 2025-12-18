<?php

    require_once 'database/conexion.php';

    class M_ListarFotos extends Conectar{

        function __construct(){
            parent::__construct();
        }

        public function recogerFotos(){
            $sql="  SELECT fotos.foto, respuestaFoto, correcta 
                    FROM fotos INNER JOIN respuestasFotos
							ON fotos.idFoto=respuestasFotos.idFoto";
            //echo $sql;

            try{
                $resultado=Conectar::$conexion->query($sql);

                $respuestasfotos=[];
                while($fila=$resultado->fetch(PDO::FETCH_ASSOC)){
                    $respuestasfotos[]=$fila;
                }

                return $respuestasfotos;
            }catch(PDOException $e){
                return false;
            }
        }
    }

?>