<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/juego_mobil.css">
        <title>Login</title>
    </head>
    <body id="login">
        <header>
            <h1>LOGIN DE USUARIO</h1>
        </header>
        <main>
            <form action="../indexVictor.php?c=gestionUsuario&m=iniciarSesion" method="POST">
                <div class="control">
                    <label>Nick:</label>
                    <input type="text" id="nick" name="nick" placeholder="Nick" autocomplete="username">
                    <p></p>
                </div>
                <div class="control">
                    <label>Contraseña:</label>
                    <input type="password" id="pw" name="password" autocomplete="current-password">
                    <p></p>
                </div>
                <button type="submit" id="btnIniciar" class="botones_juego">INICIAR SESIÓN</button>
            </form>
        </main>
        <a href="inicio.html">
            <img src="../css/icon/vueltaAtras.png" alt="" id="volverSalas" class="volver_atras">
        </a>
        <script type="module" src="../js/app.js"></script>
    </body>
</html>