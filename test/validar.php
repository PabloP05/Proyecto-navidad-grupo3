<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('USUARIO','daw_userbd22');
define('SERVIDOR','22.daw.esvirgua.com');
define('BBDD','daw_22_BD2');
define('CLAVE','jvgnTR!%EJiH[}vi');

$conexion = new MySQLi(SERVIDOR,USUARIO,CLAVE,BBDD);

try {
    $resultado = $conexion->query("SELECT * FROM usuarios WHERE nick='".$_POST['nick']."'");

    while($fila = $resultado->fetch_assoc()){
        if (password_verify($_POST['pw'], $fila['clave'])) {
            echo json_encode(['status' => 'ok', 'nick' => $fila['nick'],'id'=> $fila['idusuario']]);
            exit;
        }
    }

    // si no coincide nada
    echo json_encode(['status' => 'no']);
} catch(mysqli_sql_exception $e) {
    echo json_encode(['status' => 'no']);
}
?>
