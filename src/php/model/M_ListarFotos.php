<?php

<<<<<<< HEAD
    require_once 'database/conexion.php';
=======
    require_once "database/conectar.php";
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e

    class M_ListarFotos extends Conectar{

        function __construct(){
            parent::__construct();
        }

        public function recogerFotos(){
            $sql="  SELECT fotos.foto, respuestaFoto, correcta 
                    FROM fotos INNER JOIN respuestasFotos
<<<<<<< HEAD
							ON fotos.idFoto=respuestasFotos.idFoto";
            //echo $sql;

            try{
                $resultado=Conectar::$conexion->query($sql);

                $respuestasfotos=[];
                while($fila=$resultado->fetch(PDO::FETCH_ASSOC)){
=======
							ON fotos.idFoto = respuestasFotos.idFoto";
            //echo $sql;

            try{
                $resultado=$this->conexion->query($sql);

                $respuestasfotos=[];
                while($fila=$resultado->fetch_assoc()){
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e
                    $respuestasfotos[]=$fila;
                }

                return $respuestasfotos;
<<<<<<< HEAD
            }catch(PDOException $e){
=======
            }catch(mysqli_sql_exception $e){
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e
                return false;
            }
        }
    }

?>