<?php

    require_once __DIR__.'/database/conectarPDO.php';

    class M_ModificarFotos extends Conectar{
        public function obtenerFotoPorId($idFoto){
            $sql="SELECT * FROM fotos WHERE idFoto=:idFoto";
            $resultado=Conectar::$conexion->prepare($sql);
            $resultado->bindParam(':idFoto', $idFoto);
            $resultado->execute();
            return $resultado->fetch(PDO::FETCH_ASSOC);
        }

        public function obtenerRespuestas($idFoto){
            $sqlRespuestas="SELECT * FROM respuestasFotos WHERE idFoto=:idFoto ORDER BY correcta DESC";
            $resultadoRespuestas = Conectar::$conexion->prepare($sqlRespuestas);
            $resultadoRespuestas->bindParam(':idFoto', $idFoto);
            $resultadoRespuestas->execute();
            return $resultadoRespuestas->fetchAll(PDO::FETCH_ASSOC);
        }

        public function modificarDatosFotos($idFoto){
            //Modificar la foto
            if(isset($_FILES["nuevaImagen"]) && $_FILES["nuevaImagen"]["tmp_name"]!=""){
                //Obtener la ruta de la foto antes de borrarla
                $sqlFoto="SELECT foto FROM fotos WHERE idFoto=:idFoto";
                $stmtFoto=Conectar::$conexion->prepare($sqlFoto);
                $stmtFoto->bindParam(':idFoto', $idFoto, PDO::PARAM_INT);
                $stmtFoto->execute();
                $rutaFoto=$stmtFoto->fetch(PDO::FETCH_ASSOC);

                $rutaImagenActual=__DIR__."/../../../".$rutaFoto['foto'];

                //Eliminar la imagen anterior si existe
                if(file_exists($rutaImagenActual)){
                    unlink($rutaImagenActual);
                }
                //Carpeta de prueba en localhost
                $carpeta=__DIR__."/../../../img/";

                //Nombre de la foto desde el input de texto
                $nombreFotoBD=$_POST['pregunta'];

                //Archivo subido
                $archivoSubido=$_FILES['nuevaImagen']['tmp_name'];
                $nombreArchivo=$_FILES['nuevaImagen']['name'];
                $rutaDestino=$carpeta.$nombreArchivo;

                if(move_uploaded_file($archivoSubido, $rutaDestino)){
                    $sqlModificarFoto="UPDATE fotos SET foto=:foto WHERE idFoto=:idFoto";
                    $resultadoModificarFoto=Conectar::$conexion->prepare($sqlModificarFoto);
                    $resultadoModificarFoto->bindParam(':foto', $nombreFotoBD);
                    $resultadoModificarFoto->bindParam(':idFoto', $idFoto);
                    $resultadoModificarFoto->execute();
                }
            }

            //Modificar las respuestas
            if(isset($_POST['respuestas'])){
                foreach($_POST['respuestas'] as $idRespuestaFoto => $textoRespuesta){
                    $sqlModificarRespuesta="UPDATE respuestasFotos SET respuestaFoto=:respuestaFoto WHERE idRespuestaFoto=:idRespuestaFoto";
                    $resultadoModificarRespuesta=Conectar::$conexion->prepare($sqlModificarRespuesta);
                    $resultadoModificarRespuesta->bindParam(':respuestaFoto', $textoRespuesta);
                    $resultadoModificarRespuesta->bindParam(':idRespuestaFoto', $idRespuestaFoto, PDO::PARAM_INT);
                    $resultadoModificarRespuesta->execute();
                }
            }
        }
    }

?>