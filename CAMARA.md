# Cámara en vivo con Firebase

Firebase se usa únicamente para conectar cámaras y autenticar al administrador del visor. Las cuatro cuentas y la sesión de una hora de la app siguen siendo locales: no se copian ni se envían sus contraseñas a Firebase.

## Uso

1. Inicia sesión en la app con una de sus cuentas existentes.
2. Antes de ver el contenido aparece una invitación voluntaria. Lee el aviso y elige Aceptar y compartir cámara o Continuar sin cámara.
3. Solo si aceptas y autorizas el permiso se abre la cámara. No se muestra vista previa ni se transmite audio. Al compartir aparece un indicador pequeño de Cámara compartida. El botón Detener cámara y el número de visores están en Account.
4. Para abrir el visor pulsa Account siete veces seguidas (menos de 1,5 segundos entre toques). Inicia sesión con la cuenta de administrador de cámara creada en Firebase. Es independiente del login de la app.
5. El primer teléfono disponible se abre automáticamente; la lista se actualiza en tiempo real. Puedes elegir otro teléfono de la lista. No hay códigos que copiar. Hasta tres conexiones simultáneas del administrador por emisor; el visor muestra un teléfono cada vez.
6. La transmisión se detiene al pulsar Detener, ocultar la página, perder la conexión, bloquear el teléfono, cerrar sesión o salir de la app. Al volver de segundo plano se intentará reanudar solo si estaba compartiendo y la página y la sesión siguen abiertas. Detener, continuar sin cámara, cerrar sesión o cerrar completamente la página cancelan la reanudación. Navegar por las pantallas de la app mantiene la transmisión y el aviso visibles.

## Acceso y datos

Proyecto: spark-driver-live, plan Spark. Realtime Database almacena solo metadatos de presencia y mensajes de conexión WebRTC. El video va entre los dispositivos mediante WebRTC; no se almacena en Firebase ni se graba en la app. El receptor puede capturar lo que ve con herramientas externas.

Solo el UID de administrador dSZEXWPE6ncu0kzlRMn6RCmm1iU2 puede listar todos los directos y crear solicitudes para verlos. Los emisores usan identidades anónimas de Firebase exclusivas de la función de cámara y solo pueden leer/escribir su propia sesión. La base deniega todo el resto. Los siete toques son un acceso a la pantalla, no una contraseña de seguridad.

Las reglas propuestas están en firebase-camera.rules.json. En spark-driver-live ya se publicaron y se habilitó Anonymous en Authentication. Al instalar en otro proyecto hay que configurar ambos pasos. No usar reglas públicas ni modo de prueba. La configuración pública de Firebase está en src/camera-live.js; no incluye contraseñas, claves de servicio ni credenciales de administrador.

## Límites

Usar HTTPS. El plan Spark tiene cuotas; no equivale a servicio ilimitado ni a garantía de disponibilidad. Se usa STUN de Google y no se incluye un relay TURN. Algunas redes móviles o corporativas no conectarán sin ese servicio adicional. Esta versión no promete funcionamiento en segundo plano ni con el teléfono bloqueado.

Las pruebas automatizadas verifican consentimiento previo, cancelación tardía de permisos, limpieza de cámara, pérdida de red, acceso administrativo separado y estructura de reglas. Falta verificar el video entre dos teléfonos físicos y las reglas publicadas contra Firebase real. Si solo se pulsa Continuar sin cámara, no se carga Firebase ni se pide acceso a la cámara.

## Publicación

Ejecutar npm test y npm run build. Para GitHub Pages subir el contenido de github-pages a la raíz. No usar el index.html de desarrollo que referencia /src: ese archivo requiere el servidor de desarrollo y puede dejar Pages en blanco.
