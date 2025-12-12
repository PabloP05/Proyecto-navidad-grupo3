<?php
require_once __DIR__ . '/../model/M_gestionAdmin.php';

class C_gestionAdmin {
    public $vista;
    public $modelo;

    public function __construct() {
        $this->modelo = new M_gestionAdmin();
    }

    public function mostrarLogin() {
        $this->vista = 'inicioAdmin';
    }

    public function validarAdmin() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $correo = $_POST['correo'] ?? '';
            $contrasenia = $_POST['contrasenia'] ?? '';

            if (!empty($correo) && !empty($contrasenia)) {
                $admin = $this->modelo->validarAdmin($correo, $contrasenia);

                if ($admin) {
                    $_SESSION['admin'] = $admin;
                    header('Location: indexVictor.php?c=gestionAdmin&m=mostrarPanel');
                    exit();
                } else {
                    // Login fallido
                    $this->vista = 'inicioAdmin';
                }
            } else {
                $this->vista = 'inicioAdmin';
            }
        } else {
            // Si no es POST, mostramos el login
            $this->mostrarLogin();
        }
    }

    public function mostrarPanel() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        if (!isset($_SESSION['admin'])) {
            header('Location: indexVictor.php?c=gestionAdmin&m=mostrarLogin');
            exit();
        }

        $this->vista = 'CpanelPantallaDeInicio';
    }

    public function cerrarSesion() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        session_destroy();
        header('Location: indexVictor.php?c=gestionAdmin&m=mostrarLogin');
        exit();
    }

    public function mostrarInstalacion() {
        if ($this->modelo->hayAdmins()) {
            // Ya existe un admin, no permitimos instalar otro
            header('Location: indexVictor.php?c=gestionAdmin&m=mostrarLogin');
            exit();
        }
        $this->vista = 'instalacion';
    }

    public function procesarInstalacion() {
        if ($this->modelo->hayAdmins()) {
            header('Location: indexVictor.php?c=gestionAdmin&m=mostrarLogin');
            exit();
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $correo = $_POST['correo'] ?? '';
            $contrasenia = $_POST['contrasenia'] ?? '';

            if (!empty($correo) && !empty($contrasenia)) {
                if ($this->modelo->insertarAdmin($correo, $contrasenia)) {
                    // Instalación exitosa
                    header('Location: indexVictor.php?c=gestionAdmin&m=mostrarLogin');
                    exit();
                } else {
                    $this->vista = 'instalacion';
                }
            } else {
                $this->vista = 'instalacion';
            }
        }
    }
}
?>
