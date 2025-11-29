<?php
    require_once __DIR__ .'/database/conexion.php';

    class CargarPreguntas extends Conectar{
        
        public function AgregarPreguntas(){
            try {
                $sql="INSERT INTO preguntas(pregunta) VALUES ('".$_POST['info']."')";
                $this->conexion->query($sql); 
               /*  echo $sql; */
                $this->cargar_respuestas();
                return true;
            } catch (PDOException $e) {
                echo $e->getMessage(); #proviional
                return false;
            }
        }

        private function cargar_respuestas(){
            $id = $this->conexion->lastInsertId();

            foreach ($_POST['respuestas'] as $key => $value) {
                $sql = "INSERT INTO respuestas(idPregunta,respuesta) VALUES (".$id.",'".$value."')";
                /* echo "<br>".$sql; */
                $this->conexion->query($sql);
            }
        }
    }
?>