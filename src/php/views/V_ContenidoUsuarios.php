<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/style.css">
    <title>Usuarios</title>
</head>
<body class="Cpanel_body">
    <nav>
        <img src="../proyecto/app/img/logo.png" alt="Se describe un logotipo en el que pone Stop bullying challenge en letras naranja con bordes azulados"> <!-- lo indico así por accesibilidad -->
        <h1>Stop bullying challange</h1>
        <h3>Panel de administración de contenidos</h3>
    </nav>
    <aside>
        <ul>
            <li><a href="./index.php?c=gestionAdmin&m=mostrarPanel">Agregar contenidos</a></li>
            <li><a href="./index.php?c=listarContenido&m=listarContenido">Lista de contenido</a></li>
            <li><a href="./index.php?c=ListarUsuarios&m=mostrarUsuarios">Gestión de usuarios</a></li>
            <li><a href="./index.php?c=ListarPuntuaciones&m=mostrarPuntuaciones">Gestión de puntos</a></li>
            <li><a href="#">Gestión de salas</a></li>
        </ul>
        <a href="index.php?c=gestionAdmin&m=cerrarSesion"><button>Cerrar sesión</button></a>
    </aside>
    <main>
        <div class="contenido contenedor-usuarios">
            <h1>Usuarios</h1>
            <input type="text" id="buscadorUsuarios" placeholder="Buscar usuario...">
            <?php

                foreach($usuarios as $usuario) {
                    echo "  <div class='datos_de_contenido usuario'>
                                <h2>".$usuario['nombre']."</h2>
                                <button class='borrar'>
                                        <a href='./index.php?c=BorrarUsuarios&m=borrar&id=".$usuario['idusuario']."'>
                                            <img src='views/css/icon/papelera.png' alt=''>
                                        <a>
                                </button>
                            </div>";
                }

            ?>
        </div>
    </main>
    <script src="../admin/js/scriptBuscador.js"></script>
</body>
</html>