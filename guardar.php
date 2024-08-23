<?php
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$direccion=$_POST['direccion'];
$telefono=$_POST['telefono'];
$correo=$_POST['correo'];
$pass=$_POST['pass'];
echo "<p>Nombre: ".$nombre."</p>";
echo "Apellido: ".$apellido;
echo "<br>";
echo "Direccion: ".$direccion;
echo "<br>";
echo "Telefono: ".$telefono;
echo "<br>";
echo "Correo: ".$correo;
echo "<p>Password: ".$pass."</p>";
echo "<br>";
echo "<a class=\"btnEnviar\" href=\"/formulario\">Volver</a>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Resultado</title>
</head>
<body>
    
</body>
</html>