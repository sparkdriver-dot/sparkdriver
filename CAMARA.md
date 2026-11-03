# Cámara compartida voluntariamente

Esta función no se activa al iniciar sesión ni bloquea el acceso a la app. Solo transmite video tras aceptar la explicación y pulsar Iniciar transmisión. No transmite audio ni graba video en la app.

1. Abre la app por HTTPS en ambos dispositivos e inicia sesión.
2. En el teléfono que comparte: Account → Compartir mi cámara. Lee y acepta la explicación y pulsa Iniciar transmisión. Acepta el permiso del navegador.
3. En el dispositivo que recibe: Account → toca 7 veces seguidas «Conexión de cámara». Se abre el visor.
4. Entrega el código del teléfono al visor mediante un medio de confianza. El visor lo pega en «Código del teléfono que comparte» y pulsa Generar respuesta.
5. Devuelve la respuesta al teléfono que comparte. Pégala y pulsa Conectar con este visor. El código corresponde a una sola conexión, con un solo visor.
6. Detener o Cerrar libera la cámara y cierra la conexión. Salir de Account, ocultar la página o cerrar la app también la detiene. No hay reconexión automática.

Mantén ambas páginas visibles durante el emparejamiento: cambiar a una app de mensajería detendrá la transmisión por privacidad. Para intercambiar los textos usa otro dispositivo, una ventana junto a la app o un medio de confianza que permita mantenerla visible. Puedes seleccionar y copiar el contenido de los cuadros.

Los siete toques son un atajo, no una contraseña de administrador. El acceso al video depende de recibir los códigos de emparejamiento del teléfono y devolver una respuesta que este acepte. Verifica la identidad del receptor antes de intercambiarlos. No publiques estos códigos: contienen datos de conexión.

## Compatibilidad y límites

El video usa WebRTC; la señalización se intercambia manualmente, sin un servidor de la app. Se consulta STUN de Google para obtener candidatos de conexión. El video no se envía a ese servicio STUN. Algunas redes móviles/corporativas necesitan un relay TURN; este paquete no incluye un servicio TURN y no garantiza conectar en todas las redes.

Usa HTTPS para dispositivos reales; localhost sirve para desarrollo en el mismo equipo. Abrir el HTML como archivo no es una prueba válida entre teléfonos. Bloquear el teléfono o pasar a otra aplicación corta la conexión. El espectador puede capturar lo que ve con herramientas ajenas a esta app.

Se comprobaron validación de códigos, consentimiento, apertura con siete toques y liberación de cámara mediante pruebas automatizadas con dispositivos simulados. La conexión real entre dos teléfonos y sus cámaras debe validarse en los dispositivos y redes finales.

Este ZIP no se ha publicado en GitHub.
