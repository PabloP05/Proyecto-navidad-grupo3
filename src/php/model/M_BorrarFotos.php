<?php

    require_once 'database/conexion.php';

    class M_BorrarFotos extends Conectar{
        public function borrarFoto($idFoto){
            //Obtener la ruta de la foto antes de borrarla
            $sqlFoto="SELECT foto FROM fotos WHERE idFoto=:idFoto";
            $stmtFoto=Conectar::$conexion->prepare($sqlFoto);
            $stmtFoto->bindParam(':idFoto', $idFoto, PDO::PARAM_INT);
            $stmtFoto->execute();
            $foto=$stmtFoto->fetch(PDO::FETCH_ASSOC);

            $rutaImg=__DIR__."/../../proyecto/".$foto['foto'];

            if(file_exists($rutaImg)){
                unlink(__DIR__."/../../proyecto/".$foto['foto']); //Borra el archivo del disco
            }

            //Borrar respuestas asociadas a la foto
            $sqlFotos="DELETE FROM respuestasFotos WHERE idFoto=:idFoto";
            $stmtFoto=Conectar::$conexion->prepare($sqlFotos);
            $stmtFoto->bindParam(':idFoto', $idFoto, PDO::PARAM_INT);
            $stmtFoto->execute();
            $foto=$stmtFoto->fetch(PDO::FETCH_ASSOC);

            //Borrar la foto
            $sqlSituacion="DELETE FROM fotos WHERE idFoto=:idFoto";
            $stmtSituacion=Conectar::$conexion->prepare($sqlSituacion);
            $stmtSituacion->bindParam(':idFoto', $idFoto, PDO::PARAM_INT);
            $stmtSituacion->execute();
        }
    }
?>
