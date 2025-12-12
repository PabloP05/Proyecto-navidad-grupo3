<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Instalación Admin</title>
</head>
<body id="adminInicio_body">
    <div>
        <h1>Stop bullying challenge</h1>
        <h3>Instalación de Administrador</h3>
    </div>
    <form action="../indexVictor.php?c=gestionAdmin&m=procesarInstalacion" id="inicio_de_sesicon" method="post">
        <input type="email" name="correo" placeholder="Correo Nuevo Admin" required>
        <input type="password" name="contrasenia" placeholder="Contraseña" required>
        <input type="submit" value="Crear Admin">
    </form>
</body>
</html>
