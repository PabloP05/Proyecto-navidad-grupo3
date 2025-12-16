<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/style.css">
    <title>Modificar Imagen</title>
</head>
<body id="modificacionFotos">
    <header>
        <a href="./indexAdrian.php?c=C_MostrarContenidos&m=listarContenidos">
            <img src="../css/icon/vueltaAtras.png" alt="Volver atrás">
        </a>
        <h1>Stop Bullying Challenge</h1>
    </header>
    <main>
        <h2>Modificar Imagen</h2>
        <div class="contenido">
            <div class="div_foto">
                <form action="./indexAdrian.php?c=C_ModificarFotos&m=modificarDatos&id=<?php echo $foto['idFoto']; ?>" method="POST" enctype="multipart/form-data">
                    <input type="text" name="pregunta" id="url" value="<?php echo $foto["foto"]; ?>" placeholder="Introduce url" readonly>
                    <?php
                        
                        echo "  <input type='text' class='opciones' id='correcta' value='".$respuestaCorrecta."' placeholder='Respuesta correcta' name=respuestas[".$idRespuestaCorrecta."] required>
                                <input type='text' class='opciones' id='incorrecta' value='".$respuestaIncorrecta."' placeholder='Respuesta incorrecta' name=respuestas[".$idRespuestaIncorrecta."] required>";

                    ?>
                    <img src="../../../<?php echo $foto["foto"]; ?>" alt="Imagen actual">
                    <label>Selecciona una nueva imagen:</label>
                    <input type="file" name="nuevaImagen" id="nuevaImagen" accept=".png, .jpeg, .jpg, .webp">
                    <input type="submit" value="Modificar imagen">
                </form>
            </div>
        </div>
    </main>
    <script src="../js/services/scriptModificar.js"></script>
</body>
</html>
