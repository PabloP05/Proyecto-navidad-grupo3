<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Document</title>
</head>
<body id="adminInicio_body">
    <div>
        <h1>Stop bullying challenge</h1>
        <h3>Panel de administración de contenido</h3>
    </div>
    <form action="?c=gestionAdmin&m=validarAdmin" id="inicio_de_sesicon" method="post">
        <input type="email" name="correo" placeholder="Correo" required>
        <input type="password" name="contrasenia" placeholder="Contraseña" required>
        <input type="submit" value="Iniciar Sesión">
    </form>
</body>
</html>