<?php
    require_once __DIR__ .'/database/conexion.php';

    class CargarSituaciones extends Conectar{
        
        public function AgregarSituaciones(){
            try {
                $sql="INSERT INTO situaciones(situacion) VALUES ('".$_POST['info']."')";
                $this->conexion->query($sql); 
               /*  echo $sql; */
                $this->cargar_opciones();
                return true;
            } catch (PDOException $e){
                return false;
            }
        }

        private function cargar_opciones(){
            $id = $this->conexion->lastInsertId();

            foreach ($_POST['respuestas'] as $value) {
                $sql = "INSERT INTO opciones(idSituacion,opcion) VALUES (".$id.",'".$value."')";
                /* echo "<br>".$sql; */
                $this->conexion->query($sql);
            }
        }
        
    }
?>