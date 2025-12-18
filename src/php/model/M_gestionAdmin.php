<?php
require_once __DIR__ . '/database/conexion2.php';

class M_gestionAdmin extends Conectar2 {

    public function validarAdmin($correo, $password) {
        try {
            $sql = "SELECT * FROM admin WHERE correo = :correo";
            $stmt = $this->conexion->prepare($sql);
            $stmt->bindParam(':correo', $correo);
            $stmt->execute();
            
            $admin = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($admin && password_verify($password, $admin['contrasenia'])) {
                return $admin;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            return false;
        }
    }

    public function hayAdmins() {
        try {
            $sql = "SELECT COUNT(*) as total FROM admin";
            $stmt = $this->conexion->query($sql);
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            return $resultado['total'] > 0;
        } catch (PDOException $e) {
            return false;
        }
    }

    public function insertarAdmin($correo, $password) {
        try {
            $sql = "INSERT INTO admin (correo, contrasenia) VALUES (:correo, :contrasenia)";
            $stmt = $this->conexion->prepare($sql);
            $stmt->bindParam(':correo', $correo);
            $passwordHash = password_hash($password, PASSWORD_DEFAULT);
            $stmt->bindParam(':contrasenia', $passwordHash);
            return $stmt->execute();
        } catch (PDOException $e) {
            return false;
        }
    }
}
?>
