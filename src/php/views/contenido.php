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
        <img src="../../img/logo.png" alt="Se describe un logotipo en el que pone Stop bullying challenge en letras naranja con bordes azulados"> <!-- lo indico así por accesibilidad -->
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
       <div class="contenido contenedor-preguntas">
        <h1>Preguntas y respuestas</h1>
            <?php
                foreach($preguntas as $pregunta) {
                    echo '<div class="datos_de_contenido">
                            <h2>' . htmlspecialchars($pregunta['pregunta']) . '</h2>
                            <button class="borrar"><a href="./indexAdmin.php?c=C_borrarPreguntas&m=borrar&id='.$pregunta['idPregunta'].'"><img src="views/css/icon/papelera.png" alt=""></a></button>
                            <button class="configurar"><a href="./indexAdmin.php?c=C_modificarPregunta&m=modificar&id='.$pregunta['idPregunta'].'"><img src="views/css/icon/ajustes.png" alt=""></a></button>
                          </div>';
                }   
            ?>
       </div>
       <div class="contenido contenedor-situaciones">
            <h1>Situaciones</h1>
            <?php
                foreach($situaciones as $situacion) {
                    echo '<div class="datos_de_contenido">
                              <h2>'.$situacion['situacion'].'</h2>
                              <button class="borrar">
                                 <a href="./indexAdmin.php?c=C_borrarSituacion&m=borrar&id='.$situacion['idSituacion'].'"><img src="views/css/icon/papelera.png" alt=""><a>
                              </button>
                              <button class="configurar">
                                 <a href="./indexAdmin.php?c=C_modificarSituacion&m=modificar&id='.$situacion['idSituacion'].'">
                                       <img src="views/css/icon/ajustes.png" alt="">
                                 </a>
                              </button>
                        </div>';
                }
            ?>
       </div>
       <div class="contenido contenedor-fotos">
            <h2>Fotos</h2>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
             <div class="datos_de_contenido div_foto">   
                <img src="../../img/logo.png" alt="">
                 <button class="borrar"><img src="../../css/icon/papelera.png" alt=""></button>
                <button class="configurar"><img src="../../css/icon/ajustes.png" alt=""></button>
             </div>
       </div>
    </main>
</body>
</html>