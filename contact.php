<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre = htmlspecialchars($_POST['nombre'] ?? '');
    $correo = htmlspecialchars($_POST['correo'] ?? '');
    $telefono = htmlspecialchars($_POST['telefono'] ?? '');
    $asunto = htmlspecialchars($_POST['asunto'] ?? '');
    $mensaje = htmlspecialchars($_POST['mensaje'] ?? '');
    $fecha = date("Y-m-d H:i:s"); // Fecha y hora actual en formato texto

    // Verificar que los campos obligatorios no estén vacíos
    if (!empty($correo) && !empty($mensaje)) {
        try {
            // Conectar a la base de datos SQLite
            $db = new SQLite3('contactos.db');

            // Verificar si la tabla existe (opcional)
            $tableExists = $db->querySingle("SELECT name FROM sqlite_master WHERE type='table' AND name='mensajes'");
            if (!$tableExists) {
                $db->exec("CREATE TABLE mensajes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT,
                    correo TEXT,
                    telefono TEXT,
                    asunto TEXT,
                    mensaje TEXT,
                    fecha TEXT
                )");
            }

            // Insertar datos en la tabla
            $stmt = $db->prepare("INSERT INTO mensajes (nombre, correo, telefono, asunto, mensaje, fecha) VALUES (:nombre, :correo, :telefono, :asunto, :mensaje, :fecha)");
            $stmt->bindValue(':nombre', $nombre, SQLITE3_TEXT);
            $stmt->bindValue(':correo', $correo, SQLITE3_TEXT);
            $stmt->bindValue(':telefono', $telefono, SQLITE3_TEXT);
            $stmt->bindValue(':asunto', $asunto, SQLITE3_TEXT);
            $stmt->bindValue(':mensaje', $mensaje, SQLITE3_TEXT);
            $stmt->bindValue(':fecha', $fecha, SQLITE3_TEXT);

            // Ejecutar la inserción
            if ($stmt->execute()) {
                // Enviar correo electrónico
                $destinatario = "tucorreo@example.com"; // Cambia esto por tu correo
                $asuntoCorreo = "Nuevo mensaje de contacto de $nombre";
                $cuerpoCorreo = "Has recibido un nuevo mensaje de contacto:\n\n"
                              . "Nombre: $nombre\n"
                              . "Correo: $correo\n"
                              . "Teléfono: $telefono\n"
                              . "Asunto: $asunto\n"
                              . "Mensaje: $mensaje\n"
                              . "Fecha: $fecha\n";

                mail($destinatario, $asuntoCorreo, $cuerpoCorreo);

                // Mostrar mensaje de éxito y redirigir
                mostrarMensaje("¡Gracias, $nombre!", "Tu mensaje ha sido enviado correctamente.", true);
            } else {
                // Mostrar mensaje de error
                mostrarMensaje("Error", "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.", false);
            }
        } catch (Exception $e) {
            // Mostrar mensaje de error
            mostrarMensaje("Error", "Error al conectar con la base de datos: " . $e->getMessage(), false);
        } finally {
            if (isset($db)) {
                $db->close();
            }
        }
    } else {
        // Mostrar mensaje de error si faltan campos obligatorios
        mostrarMensaje("Error", "Por favor, completa todos los campos obligatorios (correo y mensaje).", false);
    }
} else {
    // Redirigir si no es una solicitud POST
    header("Location: index.html");
    exit();
}

/**
 * Función para mostrar un mensaje y redirigir al usuario.
 */
function mostrarMensaje($titulo, $mensaje, $esExito) {
    $colorTitulo = $esExito ? "#4CAF50" : "#FF0000"; // Verde para éxito, rojo para error
    $colorTexto = "#333"; // Color del texto secundario
    echo "<!DOCTYPE html>
          <html lang='es'>
          <head>
              <meta charset='UTF-8'>
              <meta name='viewport' content='width=device-width, initial-scale=1.0'>
              <title>Mensaje enviado</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      background-color: #f4f4f4;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100vh;
                      margin: 0;
                  }
                  .message {
                      background-color: #fff;
                      padding: 30px;
                      border-radius: 10px;
                      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                      text-align: center;
                      max-width: 500px;
                      width: 100%;
                  }
                  .message h1 {
                      color: $colorTitulo;
                      font-size: 2.5em;
                      margin-bottom: 20px;
                  }
                  .message p {
                      color: $colorTexto;
                      font-size: 1.2em;
                      margin-bottom: 20px;
                  }
                  .message .redirect {
                      color: #777;
                      font-size: 1em;
                  }
              </style>
          </head>
          <body>
              <div class='message'>
                  <h1>$titulo</h1>
                  <p>$mensaje</p>
                  <p class='redirect'>Serás redirigido a la página principal en 5 segundos...</p>
              </div>
              <script>
                  setTimeout(function() {
                      window.location.href = 'index.html'; // Redirigir a la página principal
                  }, 5000); // Redirigir después de 5 segundos
              </script>
          </body>
          </html>";
    exit();
}
?>

