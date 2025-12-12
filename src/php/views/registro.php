<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/juego_mobil.css">
        <title>Registro</title>
    </head>
    <body id="registro">
        <header>
            <h1>REGISTRO DE USUARIO</h1>
        </header>
        <main>
            <form action="../indexVictor.php?c=gestionUsuario&m=insertarUsuario" method="POST">
                <label>Nombre de Usuario:</label>
                <input type="text" id="nombreUsuario" name="nombreUsuario" placeholder="Nombre de Usuario" required>
                <label>Correo:</label>
                <input type="email" id="email" name="email" placeholder="usuario@gmail.com" required>
                <label>Nick:</label>
                <input type="text" id="nick" name="nick" placeholder="Nick" required>
                <label>Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Contraseña" required>
                <button id="btnEnviar" class="botones_juego">ENVIAR</button>
            </form>
        </main>
        <script type="module" src="../js/app.js"></script>
    </body>
</html>