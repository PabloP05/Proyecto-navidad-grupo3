
<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    #datos de conexion para hacer pruebas 
    define('USUARIO','daw_userbd22');
    define('SERVIDOR','22.daw.esvirgua.com');
    define('BBDD','daw_22_BD2');
    define('CLAVE','jvgnTR!%EJiH[}vi');

    $conexion = new MySQLi(SERVIDOR,USUARIO,CLAVE,BBDD);

    try{
        $conexion->query("INSERT INTO partidas(idSala,puntuacionTotal,idJugador) 
        values (".$_POST['idSala'].",".$_POST['puntos'].",".$_POST['id'].")");
         echo json_encode(['status' => 'ok']);
    }catch(mysqli_sql_exception $e){            
        echo json_encode(['status' => 'no']);
    }


?>