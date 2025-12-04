<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/style.css">
    <title>Document</title>
</head>
<body id="modificacion">
    <header>
        <a href="./indexAdmin.php?c=C_listarContenido&m=listarContenido"><img src="views/css/icon/vueltaAtras.png" alt=""></a>
        <h1>Stop bullying challenge</h1>
    </header>
    <main>
        <form action="./indexAdmin.php?c=C_modificarPregunta&m=modificarDatos&id=<?= $pregunta['idPregunta'] ?>" method="post">

            <h2>datos</h2>
            <div>
                <p>Pregunta</p>
                <?php 
                    if ($pregunta) {
                        echo '<input type="text" name="pregunta" id="pregunta" value="' . $pregunta['pregunta']. '">';
                    } else {
                        echo '<input type="text" name="pregunta" id="pregunta" placeholder="Pregunta no encontrada">';
                    }
                ?>
            </div>

            <?php
            if (!empty($respuestas)) {
                foreach ($respuestas as $index => $respuesta) { 
                        echo '<div class="elementos">
                        <input type="text" name="respuestas['.$respuesta['idRespuestaPregunta'].']" 
                               value="'.$respuesta['respuesta'].'">
                    </div>';    
                }
            } else {
                echo '<p>No se encontraron respuestas para esta pregunta.</p>';
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
