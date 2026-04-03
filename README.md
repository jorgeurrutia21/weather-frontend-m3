# weather-frontend-m3

#Este proyecto corresponde a una plataforma web orientada a mostrar el estado del tiempo en distintas ciudades de Chile, presentando la información de manera clara, ordenada y accesible para el usuario.

Se seleccionaron 10 ciudades representativas de Chile (Norte, Sur, Centro) con el objetivo de mostrar la diversidad de climas a lo largo del territorio chileno.

Tecnologías utilizadas:

HTML
CSS(Metodologia BEM)
JavaScript
SASS

El proyecto utiliza SASS organizado en parciales para mantener el código modular y escalable. Los principales parciales son:

\_variables.scss: Define variables globales como colores, tipografías, tamaños y espaciados.
\_mixins.scss: Contiene mixins reutilizables para evitar repetición de código.
\_base.scss: Incluye estilos base o reset (normalización, tipografía general, body, etc.).
\_layout.scss: Agrupa estilos estructurales como header, footer, grid y contenedores principales.
\_components.scss: Define estilos de componentes reutilizables (botones, cards, formularios, etc.).
\_pages.scss: Estilos específicos de cada página o vista.
main.scss: Archivo principal que importa todos los parciales y compila el CSS final.

Esta estructura facilita el mantenimiento, la reutilización y la escalabilidad del proyecto.

Características principales:

Visualización del estado del tiempo en diez ciudades de Chile.
Consulta detallada del clima actual al seleccionar una ciudad.
Visualización del pronóstico meteorológico para los próximos 6 días.

Ejecución del proyecto
Para ejecutar este proyecto de manera local, siga los siguientes pasos:

Descargar o clonar este repositorio desde el siguiente enlace: https://github.com/jorgeurrutia21/weather-frontend-m3
Abrir la carpeta del proyecto en su equipo.
Ejecutar el archivo index.html en un navegador web, idealmente Google Chrome.

Objetivo del proyecto:

El objetivo principal de esta plataforma es entregar información meteorológica de distintas ciudades de Chile, permitiendo al usuario consultar tanto el clima actual como el pronóstico estimado para los próximos 6 días.

Autor
Jorge Urrutia
