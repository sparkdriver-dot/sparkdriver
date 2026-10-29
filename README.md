# Spark Driver — código reconstruido

Recuperación editable de la aplicación publicada en https://spark-joy-clone.lovable.app/, realizada el 29 de octubre de 2026 con acceso autorizado por su propietario.

## Ejecutar

Necesitas Node.js 20 o superior. No es necesario instalar paquetes.

1. Extrae el ZIP.
2. Abre `INICIAR.cmd` en Windows, o una terminal en esta carpeta y ejecuta `npm run dev`.
3. Abre http://localhost:4173.
4. El modo inicial es una demostración local. Usa `demo@localhost` y cualquier contraseña, por ejemplo `demo`.

También puedes ejecutar `npm test`, `npm run build` y `npm run preview`. El último sirve la carpeta `dist/`. No abras `index.html` mediante doble clic: los módulos necesitan un servidor HTTP.

## Qué se recuperó

- Inicio, mapa de ubicación, métricas, incentivos y actividad reciente.
- Pantalla de ganancias, gráfico y desglose.
- Los nueve pedidos y sus productos, cantidades, importes, nombres y fotografías publicados.
- Detalle de entrega, instrucciones y controles de disponibilidad.
- Sustitución de imágenes por archivos locales y restauración de la imagen original, guardadas en localStorage.
- Flujo de escaneo en dos pasos por unidad, confirmaciones e instrucciones de checkout.
- Pase de demostración, resumen del pedido y pantalla de direcciones.
- Cuenta, cierre de sesión, notificaciones, estilos, iconos y manifiesto de instalación.

## Archivos para editar

| Archivo | Contenido |
| --- | --- |
| `src/app.js` | Componentes React y navegación de la aplicación |
| `src/data/orders.js` | Los nueve pedidos y el pedido destacado |
| `src/data/assets.js` | Rutas de imágenes |
| `src/lib/utils.js` | Cantidades, totales, tiempo y cálculos geográficos |
| `src/auth.js` | Autenticación demo y adaptador Supabase |
| `src/config.js` | Modo de autenticación y configuración pública del backend |
| `src/styles.css` | Estilos recuperados de la web publicada |
| `src/demo.css` | Personalizaciones visuales del modo local |
| `src/vendor.js` | Dependencias de navegador recuperadas, con comentarios de licencia conservados |
| `public/assets/` | Fotografías e iconos recuperados |
| `scripts/` | Servidor, empaquetado estático y pruebas |

Los componentes tienen nombres descriptivos: `HomeScreen`, `EarningsScreen`, `OrdersScreen`, `DeliveryDetails`, `ItemsList`, `ScannerScreen`, `ExitPassScreen`, `DirectionsScreen`, `AccountScreen` y `SignInScreen`.

El código React usa `jsxRuntime.jsx` y `jsxRuntime.jsxs`, que son llamadas JavaScript válidas generadas a partir de JSX. Por ejemplo, `jsxRuntime.jsx("h1", { children: "Orders" })` equivale a `<h1>Orders</h1>`. Esto permite editar y ejecutar el proyecto sin compilador ni dependencias de instalación.

## Supabase

El modo inicial `authMode: 'demo'` no contacta Supabase y no verifica contraseñas. Es exclusivamente una simulación local, indicada en el formulario de acceso. La etiqueta inferior se eliminó a petición del propietario.

Para volver a utilizar la autenticación de la web publicada, cambia `authMode` a `'supabase'` en `src/config.js`. Se conserva la URL y la clave pública `anon` incluidas en la aplicación publicada. También puedes sustituirlas por las de otro proyecto Supabase y crear los usuarios allí.

No se ha guardado tu contraseña. Nunca uses una clave `service_role` en este archivo. La disponibilidad y configuración del backend original dependen de tu cuenta Supabase/Lovable. La prueba de inicio de sesión real se realizó en la web original; la conexión de la copia a Supabase no se ha probado con tus credenciales.

Se eliminó el intento de insertar un rol administrativo desde el formulario de acceso. Los roles reales deben administrarse en el servidor. La etiqueta original «Admin access only» no constituye por sí misma una comprobación de permisos.

## Alcance y diferencias

Esta entrega es código reconstruido desde los archivos que el navegador recibe. No es una recuperación del repositorio TypeScript original: los tipos, nombres de variables originales, comentarios, historial Git, configuración de Lovable, migraciones, políticas RLS y funciones del servidor no estaban disponibles.

Los pedidos, ganancias y estadísticas encontrados en la versión publicada están definidos en el frontend. No se encontró una integración real para pagos, despacho de pedidos ni validación de códigos de barras. El escáner original avanza al pulsar su vista de cámara; la reconstrucción conserva ese flujo y en modo demo no solicita cámara. En modo Supabase muestra la cámara si el usuario la permite, pero tampoco interpreta códigos.

El pase está identificado como demostración y no acredita una compra ni un pago. Los mensajes de checkout proceden de la interfaz publicada, no de una transacción verificada.

La ubicación de entrega original se calcula de forma determinista dentro de un radio de 15 millas y se consulta con Nominatim; las instrucciones de giro son textos fijos. No son un servicio de navegación real. Los mapas y direcciones necesitan Internet y disponibilidad de OpenStreetMap, Nominatim y Google Maps. La interfaz y sus imágenes se sirven localmente.

Las opciones de Cuenta y el selector de periodos de Ganancias aparecen en el original como elementos estáticos. Se conservaron así. El botón View Summary en el detalle sólo actúa al volver desde el pase, igual que en la lógica publicada. Las cantidades del pedido se mantienen en memoria durante el flujo y se reinician al abrirlo de nuevo.

No se publicó una nueva web: la entrega es local y está lista para que la edites o la alojes.

## Validación

Se comprobó en navegador el inicio de sesión demo, listado de pedidos, cambio de cantidad y disponibilidad, escaneo completo de un pedido de una unidad, instrucciones, pase demo, total calculado, direcciones y recarga tras separar los módulos. Las seis pruebas automáticas cubren los nueve pedidos, totales parciales y cero, coordenadas cercanas, imágenes, sesión demo y delegación del adaptador Supabase. El build estático se generó correctamente.

