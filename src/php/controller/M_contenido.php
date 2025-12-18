<?php
    
    require_once __DIR__ . '/../config/indexConfig.php';
    require_once __DIR__ . '/database/conexion.php';

    class M_contenido extends Conectar {
    
    public function agregarPreguntaYRespuestas() {
        $sql = "INSERT INTO preguntas (pregunta) VALUES (:pregunta)";
        $stmt = Conectar::$conexion->prepare($sql);
        $stmt->bindParam(':pregunta', $_POST['pregunta']);
        
        try {
            $stmt->execute();
            $idPregunta = Conectar::$conexion->lastInsertId();

            // Respuestas correctas
            $sqlCorrectas = "INSERT INTO respuestasPreguntas (idPregunta, respuesta, correcta) 
                             VALUES (:idPregunta, :respuesta, 1)";
            $stmtCorrectas = Conectar::$conexion->prepare($sqlCorrectas);
            foreach ($_POST['respuestasCorrectas'] as $respuesta) {
                $stmtCorrectas->execute([':idPregunta' => $idPregunta, ':respuesta' => $respuesta]);
            }

            // Respuestas incorrectas
            $sqlIncorrectas = "INSERT INTO respuestasPreguntas (idPregunta, respuesta, correcta) 
                               VALUES (:idPregunta, :respuesta, 0)";
            $stmtIncorrectas = Conectar::$conexion->prepare($sqlIncorrectas);
            foreach ($_POST['respuestasIncorrectas'] as $respuesta) {
                $stmtIncorrectas->execute([':idPregunta' => $idPregunta, ':respuesta' => $respuesta]);
            }
            return true;
        } catch (PDOException $e) {
            echo "Error al agregar pregunta: " . $e->getMessage();
            return false;
        }
    }

    // Método para agregar situación
    public function agregarSituacion() {
        $sql = "INSERT INTO situaciones (situacion) VALUES (:situacion)";
        $stmt = Conectar::$conexion->prepare($sql);
        $stmt->bindParam(':situacion', $_POST['pregunta']);
        try {
            $stmt->execute();
            $idSituacion = Conectar::$conexion->lastInsertId();

            // Respuestas correctas
            $sqlCorrectas = "INSERT INTO respuestasSituaciones (idSituacion, respuestaSituacion, correcta) 
                             VALUES (:idSituacion, :respuesta, 1)";
            $correctas = Conectar::$conexion->prepare($sqlCorrectas);
            foreach ($_POST['respuestasCorrectas'] as $respuesta) {
                $correctas->execute([':idSituacion' => $idSituacion, ':respuesta' => $respuesta]);
            }

            // Respuestas incorrectas
            $sqlIncorrectas = "INSERT INTO respuestasSituaciones (idSituacion, respuestaSituacion, correcta) 
                               VALUES (:idSituacion, :respuesta, 0)";
            $incorrectas = Conectar::$conexion->prepare($sqlIncorrectas);
            foreach ($_POST['respuestasIncorrectas'] as $respuesta) {
                $incorrectas->execute([':idSituacion' => $idSituacion, ':respuesta' => $respuesta]);
            }

            return true;
        } catch (PDOException $e) {
            echo "Error al agregar situación: " . $e->getMessage();
            return false;
        }
    }

    // Método para agregar imágenes
    public function agregarImagen(){
        //Carpeta
        $carpeta=__DIR__."/../../proyecto/assets/img/";

        //Nombre de la foto desde el input de texto
        $nombreFotoBD=$_POST['pregunta'];

        //Archivo subido
        $archivoSubido=$_FILES['imagen']['tmp_name'];
        $nombreArchivo=$_FILES['imagen']['name'];
        $rutaDestino=$carpeta.$nombreArchivo;

        //Mover archivo a la carpeta img
        if(move_uploaded_file($archivoSubido, $rutaDestino)){
            try{
                $nombreFotoBD="assets/img/".$nombreFotoBD;

                //Insertar en la base de datos
                $sql="INSERT INTO fotos(foto) VALUES (:foto)";
                $stmt=Conectar::$conexion->prepare($sql);
                $stmt->bindParam(':foto', $nombreFotoBD);
                $stmt->execute();
                $idFoto=Conectar::$conexion->lastInsertId();

                //Respuesta correcta
                $sqlCorrecta="  INSERT INTO respuestasFotos (idFoto, respuestaFoto, correcta) 
                                VALUES (:idFoto, :respuesta, 1)";
                $correcta=Conectar::$conexion->prepare($sqlCorrecta);
                $correcta->execute([
                    ':idFoto' => $idFoto,
                    ':respuesta' => $_POST['respuestasCorrectas'][0]
                ]);

                //Respuesta incorrecta
                $sqlIncorrecta="INSERT INTO respuestasFotos (idFoto, respuestaFoto, correcta) 
                                VALUES (:idFoto, :respuesta, 0)";
                $incorrecta=Conectar::$conexion->prepare($sqlIncorrecta);
                $incorrecta->execute([
                    ':idFoto' => $idFoto,
                    ':respuesta' => $_POST['respuestasIncorrectas'][0]
                ]);

                return true;
            }catch(PDOException $e){
                echo "Error al agregar imagen: ".$e->getMessage();
                return false;
            }
        }else{
            echo "Error al subir el archivo a la carpeta img.";
            return false;
        }
    }
}

?>