<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/style.css">
    <title>Stop bullying challenge</title>
</head>
<body id="modificacion">
    <header>
        <a href="./indexAdmin.php?c=C_listarContenido&m=listarContenido"><img src="views/css/icon/vueltaAtras.png" alt=""></a>
        <h1>Stop bullying challenge</h1>
    </header>
    <main>
        <!-- Acción apunta al controlador de situaciones -->
        <form action="./indexAdmin.php?c=C_modificarSituacion&m=modificarDatos&id=<?= $situacion['idSituacion'] ?>" method="post">

            <h2>Datos</h2>
            <div>
                <p>Situación supuesta</p>
                <?php 
                    if (!empty($situacion)) {
                        echo '<input type="text" name="situacion" id="situacion" value="' 
                             .$situacion['situacion']. '">';
                    } else {
                        echo '<input type="text" name="situacion" id="situacion" placeholder="Situación no encontrada">';
                    }
                ?>
            </div>

            <?php
            if (!empty($respuestas)) {
                foreach ($respuestas as $respuesta) { 
                    echo '<div class="elementos">
                        <input type="text" name="respuestas['.$respuesta['idRespuestaSituacion'].']" 
                               value="'.$respuesta['respuestaSituacion'].'">
                        <a href="./indexAdmin.php?c=C_modificarSituacion&m=borrarRespuesta&id='.$situacion['idSituacion'].'&idRespuesta='.$respuesta['idRespuestaSituacion'].'">Eliminar</a>
                    </div>';
                }
            } else {
                echo '<p>No se encontraron respuestas para esta situación.</p>';
            }
            ?>

            <input type="submit" value="Modificar datos">
        </form>
    </main>
    <footer>
        <h2>Panel de administrador (gestión y modificación del contenido)</h2>
    </footer>
</body>
</html>
