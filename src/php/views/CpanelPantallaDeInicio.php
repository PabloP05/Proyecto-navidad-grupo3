<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/css/style.css">
    <title>Document</title>
</head>
<body class="Cpanel_body">
     <nav>
        <img src="../img/logo.png" alt="Se describe un logotipo en el que pone Stop bullying challenge en letras naranja con bordes azulados"> <!-- lo indico así por accesibilidad -->
        <h1>Stop bullying challange</h1>
        <h3>Panel de administración de contenidos</h3>
    </nav>
    <aside>
        <ul>
            <li><a href="./indexAdmin.php">Agregar contenidos</a></li>
            <li><a href="./indexAdmin.php?c=C_listarContenido&m=listarContenido">Lista de contenido</a></li>
            <li><a href="#">Gestión de usuarios</a></li>
           <li><a href="#">Gestión de salas</a></li>
        </ul>
        <button>Cerrar sesión</button>
    </aside>
    <main>
        <form action="./indexAdmin.php?c=C_agregarContenido&m=agregarContenido" method="post">
            <h2>Agregado de contenidos</h2>
            <div class="campo">
                <p>Selecciona el modo </p>
                <select name="modo" id="selectorModo">
                    <option value="1">Preguntas y respuestas</option>
                    <option value="2">Situaciones</option>
                    <option value="3">Describe la imagen</option>
                </select>
                <p>Es obligatorio que el modo se seleccione previo al envio de los datos </p>
            </div>
            <div class="campo" id="contenido">
                <p>Datos del contenido</p>
               <!-- esto variará con JS al seleccionar la opcion del select -->
                <input type="text" name="pregunta" placeholder="introduce pregunta contenido o url " required>
                <input type="text" class="opciones" placeholder="Respuesta correcta" name="respuestasCorrectas[]">
                <input type="text" class="opciones" placeholder="Respuesta incorrecta" name="respuestasIncorrectas[]">
                <input type="text" class="opciones" placeholder="Respuesta incorrecta" name="respuestasIncorrectas[]">
            </div>
             <button type="submit">Subir archivos <img src="views/css/icon/subidaDeArchivos.png" alt=""> </button>
        </form>
    </main>
    
    <script src="../js/services/servicios_pablo/servicios.js"></script>
</body>
</html>