# Spark Driver — código reconstruido

## Abrir sin servidor

Extrae el ZIP y abre `ABRIR.html` con doble clic en Chrome o Edge. Este archivo incluye la interfaz, las imágenes y la autenticación local. No necesita Node.js, instalación ni un servidor de autenticación. Usa uno de los cuatro accesos que configuraste; ya no se acepta cualquier contraseña.

Los mapas y la consulta de direcciones continúan necesitando Internet. El archivo HTML debe permanecer en un navegador que permita Web Crypto y almacenamiento de sesión para archivos locales. La sintaxis del archivo se validó automáticamente; no se pudo probar directamente con `file://` porque la herramienta de navegador bloquea ese protocolo.

## Contraseñas y acceso local

Se configuraron cuatro cuentas. No se guardaron los correos ni las contraseñas en texto legible en los archivos entregados. Los identificadores se comparan con SHA-256 y las contraseñas se verifican con PBKDF2-HMAC-SHA-256, 310.000 iteraciones y una sal aleatoria diferente por cuenta.

La sesión dura una hora desde el inicio de sesión y se cierra automáticamente al vencer. Si el navegador suspende la pestaña, se comprueba también al volver a ella. La actualización requiere iniciar sesión de nuevo tras recargar; una pestaña que siga ejecutando el código antiguo no se actualiza sola. Se guarda el identificador interno de cuenta y su vencimiento, sin guardar la contraseña.

El navegador necesariamente recibe los verificadores y la lógica. Al inspeccionar elementos se puede ver código y hashes. No se puede garantizar un control de acceso inviolable sin backend: alguien con acceso al archivo puede modificar el JavaScript, alterar la sesión o intentar adivinar contraseñas contra los hashes. La contraseña también existe temporalmente en memoria mientras se introduce y verifica. El código local no oculta los datos de la aplicación frente a quien tenga el archivo.

## Editar y ejecutar el proyecto modular

Para editar el código separado por archivos, usa Node.js 20 o superior:

- `npm run dev`: sirve la aplicación en http://localhost:4173.
- `npm test`: ejecuta las pruebas.
- `npm run build`: genera `dist/` y actualiza `ABRIR.html`.
- `npm run preview`: sirve `dist/`.

`INICIAR.cmd` ejecuta el servidor HTTP de desarrollo opcional. No es necesario para usar `ABRIR.html`.

| Archivo | Contenido |
| --- | --- |
| `src/app.js` | Pantallas y navegación React |
| `src/auth.js` | Verificación local y sesión |
| `src/data/accounts.js` | Verificadores de las cuatro cuentas, sin credenciales legibles |
| `src/data/orders.js` | Los nueve pedidos recuperados |
| `src/data/assets.js` | Imágenes de productos e iconos |
| `src/lib/utils.js` | Cantidades, totales, fechas y coordenadas |
| `src/styles.css` | Estilos recuperados |
| `src/vendor.js` | Dependencias de navegador con comentarios de licencia conservados |
| `scripts/standalone.mjs` | Generador del HTML independiente |

No hace falta instalar dependencias. Después de editar archivos fuente, ejecuta `npm run build` para actualizar el HTML independiente.

## Alcance recuperado

La aplicación se reconstruyó desde la versión publicada en https://spark-joy-clone.lovable.app/, con autorización de su propietario. Incluye Inicio, Ganancias, Pedidos, Cuenta, detalles de entrega, imágenes y cantidades, escaneo simulado, instrucciones, pase de demostración, resumen y direcciones. La etiqueta inferior LOCAL DEMO está eliminada.

Es una recuperación editable del código enviado al navegador, no el repositorio TypeScript original. No se recuperaron historial Git, tipos originales, migraciones, base de datos, políticas RLS ni funciones privadas del servidor.

Los pedidos y las estadísticas originales son datos del frontend. El escáner avanza al pulsar su vista; no interpreta ni valida códigos reales. No existe una integración de pagos ni verificación de compra; el pase conserva su identificación de demostración. La ubicación de entrega se calcula dentro de un radio de 15 millas y se consulta con Nominatim; las instrucciones de giro son textos fijos. Las opciones estáticas del original se conservaron.

La autenticación actual es completamente local y ya no se conecta a Supabase. Los archivos modulares usan llamadas `jsxRuntime.jsx/jsxs`, equivalentes al JSX compilado, para funcionar sin herramientas de instalación.

## Validación

Pasaron seis pruebas automáticas sobre los pedidos, totales, coordenadas, recursos, acceso local, sesiones y estructura de los verificadores. Se verificaron además los cuatro accesos configurados y el rechazo de contraseñas incorrectas. Se comprobó la sintaxis del HTML independiente y se generó el paquete estático.

La captura de la carpeta `docs/` corresponde a una versión anterior y puede mostrar la antigua etiqueta inferior; no refleja el acceso local actualizado.


## Artículos y dirección de pickup

Los botones + ya no tienen el límite inicial de 1 o 2 unidades. `+ Add item` permite crear tantos productos como permita el almacenamiento del navegador, con nombre único, descripción, precio y cantidad. Las cantidades, artículos personalizados y totales se conservan por pedido al recargar. No se crea una lista de pasos de escaneo por cada unidad en memoria, para admitir cantidades grandes.

Para modificar el pickup, pulsa siete veces la dirección que aparece debajo de Walmart Pickup. Se abre un editor: reemplaza el texto y pulsa Save. Cancel no modifica la dirección. La dirección guardada se utiliza en todos los pedidos de ese navegador y se conserva al recargar.

Estas modificaciones se guardan en localStorage del navegador y del dominio. No modifican la web anterior en Lovable ni el repositorio GitHub y no se sincronizan con otros dispositivos o navegadores. Borrar los datos del sitio elimina las modificaciones locales. Las ventanas privadas pueden perderlas al cerrarse. El archivo local y GitHub Pages tienen almacenamientos distintos.

## Publicar en GitHub Pages

`npm run build` genera además la carpeta `github-pages/`. Sube el contenido de esa carpeta (`index.html`, `.nojekyll`, `manifest.webmanifest`, `icon-192.png` e `icon-512.png`) a la raíz de tu repositorio y configura GitHub Pages para servir la raíz de la rama elegida. También puedes servir esa carpeta mediante una GitHub Action. El HTML contiene estilos, imágenes y JavaScript, por lo que funciona dentro del subdirectorio de un repositorio de Pages.

Después de publicarla, los siete clics y el botón Save funcionan en el sitio alojado, guardando la dirección en el navegador que realizó el cambio. Para que todos los visitantes vean una dirección nueva por defecto, cambia `pickupLocation.address` en `src/app.js`, ejecuta el build y vuelve a subir el HTML generado. Para sincronizar cambios desde la propia interfaz entre dispositivos se requiere almacenamiento compartido.

La actualización de artículos y pickup pasó ocho pruebas automáticas y se verificó en navegador: el editor no se abre con seis clics, se abre con siete, Save actualiza la dirección, las cantidades superan dos, se añade un tercer producto y los cambios persisten tras recargar.


## Instalación como app

La carpeta `github-pages/` incluye el manifiesto y los iconos de 192 y 512 píxeles necesarios para la instalación PWA. Deben subirse junto con el HTML, manteniendo esos nombres y rutas. El manifiesto usa rutas relativas y `display: standalone` para abrir la app en su propia ventana, dentro del subdirectorio del repositorio.

La instalación depende del navegador y dispositivo. En Chrome o Edge compatibles, abre la web publicada mediante HTTPS y busca la opción de instalar la app. En iPhone se utiliza Safari y Compartir → Añadir a pantalla de inicio. No se añadió caché offline ni un service worker: esta corrección permite la instalación y no promete funcionamiento sin conexión.


## Scanner demo restaurado

Se restauró Start Scanning con el diseño y los pasos simulados anteriores: código de barras, número de serie y confirmaciones. La vista muestra Demo scanner — click to simulate a scan y no solicita la cámara en el modo local. Se mantienen las cuentas de una hora, los artículos editables y el estado Pago sin verificar.


## Cámara dentro del scanner demo

La cámara se solicita al entrar al scanner y su imagen se muestra dentro del cuadro original, conservando el icono y el avance manual de los pasos. Modo demo · avance manual permanece visible fuera del cuadro; los errores de permiso también se muestran fuera de él. No se interpretan códigos ni se verifican compras. El permiso de cámara y la disponibilidad del dispositivo son necesarios para ver la imagen. Las pistas se detienen al salir del scanner.
