# Unidad Educativa Cruz Loma

Sitio estatico en espanol, con HTML, CSS y JavaScript. No requiere dependencias ni compilacion.

## Ver el sitio
Abre `index.html` en un navegador. Tambien puedes servir la carpeta con `python -m http.server 8000` y visitar http://localhost:8000.

## Organizacion
- `index.html`: portada con los seis accesos.
- `css/estilos.css`: identidad visual y modo claro/oscuro.
- `css/secciones.css`: articulos, menus laterales, galerias y paginas interiores.
- `js/tema.js` y `js/principal.js`: preferencia de tema.
- `js/galeria.js`: ampliacion de fotografias con controles y teclado (flechas y Escape).
- `imagenes/`: recursos originales proporcionados por la comunidad.
- `secciones/`: historia, eventos, turismo, noticias, lectura y comunidad.
- `secciones/eventos/`: nueve eventos adicionales; el Dia del Estudiante se encuentra en `secciones/eventos-y-festividades.html` y abre por defecto.
- `secciones/lecturas/`: dos lecturas adicionales; el articulo de tecnologia se encuentra en `secciones/espacio-de-lectura.html` y abre por defecto.

Las 18 paginas son HTML completos y los menus son enlaces normales. Funcionan sin JavaScript; en ese caso, las fotos abren su archivo original y se utiliza el tema claro. El modo oscuro sigue inicialmente al sistema y permite guardar una preferencia manual. En celulares, el menu lateral pasa encima del articulo y puede plegarse tocando su titulo.

## Modificar contenido
Edita directamente el HTML de la pagina correspondiente. Las fotos de cada galeria son enlaces con el atributo `data-gallery`. Para agregar un evento o una lectura, crea su pagina y actualiza los menus de esa coleccion y los enlaces de continuacion. Conserva las rutas relativas segun el nivel de carpeta.

## GitHub Pages
Publica la carpeta raiz del repositorio cuando decidas subirlo. Todo usa rutas relativas y no requiere build. Conserva los nombres de archivos y sus mayusculas/minusculas; los nombres de imagenes con caracteres especiales se mantienen tal como fueron proporcionados. No se ha publicado el sitio ni modificado el repositorio remoto.
