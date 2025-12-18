<?php

require_once __DIR__ . '/../model/M_gestionUsuario.php';

class C_gestionUsuario {
    public $vista;
    public $modelo;
    public function __construct() {
        $this->modelo = new M_gestionUsuario();
    }

    public function mostrarLogin(){
        $this->vista = 'login';
    }

    public function mostrarRegistro(){
        $this->vista = 'registro';
    }

    public function insertarUsuario(){
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $this->modelo->insertarUsuario($_POST['nombreUsuario'], $_POST['email'], $_POST['nick'], $password);
        $this->vista = 'login';
        header("Location: index.php");
    }

    
    public function iniciarSesion(){
        $usuario = $this->modelo->obtenerUsuarioPorNick($_POST['nick']);
        
        if ($usuario && password_verify($_POST['password'], $usuario['clave'])) {
            $_SESSION['usuario'] = $usuario;
            // Redirige al controlador de inicio
            header("Location: index.php?c=inicio&m=vistaInicial");
            exit();
        } else {
            // Si falla, volvemos al login
            $this->vista = 'login';
        }
    }
}
?>