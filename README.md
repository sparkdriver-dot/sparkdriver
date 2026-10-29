# Spark Driver

Aplicación estática publicada con GitHub Pages. `index.html` incluye la interfaz, estilos, imágenes y la lógica local en un solo archivo. `.nojekyll` permite servirlo como sitio estático.

## Funciones

- Cuatro cuentas locales con verificación de contraseñas mediante hashes PBKDF2.
- Cantidades sin el límite inicial de dos y opción **+ Add item**.
- Siete clics sobre la dirección de pickup abren el editor; **Save** guarda el cambio.
- Productos, cantidades y dirección persistidos en el navegador con localStorage.

Los cambios locales no se sincronizan entre dispositivos ni modifican el repositorio. Sin backend, la verificación de acceso puede modificarse en el navegador. El escaneo y el pase son demostraciones; no validan compras ni pagos reales.

## Publicación

GitHub Pages sirve la raíz de la rama `main`. Para actualizar el sitio, reemplaza `index.html` por la nueva versión generada y guarda un commit.
