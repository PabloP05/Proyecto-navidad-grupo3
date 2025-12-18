<?php
require_once __DIR__ . '/database/conexion2.php';
class M_gestionUsuario extends Conectar2 {

    public function insertarUsuario($nombreUsuario, $email, $nick, $password) {
        $sql = "INSERT INTO usuarios (nombre, correo, nick, clave) VALUES (:nombre, :correo, :nick, :clave)";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bindParam(':nombre', $nombreUsuario);
        $stmt->bindParam(':correo', $email);
        $stmt->bindParam(':nick', $nick);
        $stmt->bindParam(':clave', $password);
        $stmt->execute();
    }

    public function obtenerUsuarioPorNick($nick) {
        $sql = "SELECT * FROM usuarios WHERE nick = :nick";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bindParam(':nick', $nick);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    }



