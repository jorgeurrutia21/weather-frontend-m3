# Weather Frontend M4

## Este proyecto corresponde a una plataforma web orientada a mostrar el estado del tiempo en distintas ciudades de Chile, presentando la información de manera clara, ordenada y accesible para el usuario.

## Ciudades incluidas

Se seleccionaron 10 ciudades representativas de Chile (norte, centro y sur) pasando desde Antofagasta hasta Punta Arenas con el objetivo de
mostrar la diversidad de climas a lo largo del territorio.

---

## Los datos estan organizados de la siguiente manera:

estan definidos en JavaScript en un arreglo llamado "lugares".

Cada lugar es un objeto que contiene:

- id
- nombre
- temperatura actual
- estado del clima actual
- pronóstico semanal

El pronóstico semanal es un arreglo con:

- día
- temperatura mínima
- temperatura máxima
- estado del clima

---

## Estadísticas que calcula la app

En la vista de detalle, la aplicación calcula automáticamente:

- Temperatura mínima de la semana
- Temperatura máxima de la semana
- Temperatura promedio
- Cantidad de días soleados, nublados y lluviosos
- Un resumen de la semana (por ejemplo: “Semana mayormente soleada”)

Estos datos se calculan usando JavaScript, recorriendo el arreglo del pronóstico.

## Seguridad JavaScript

Se elimino por completo el uso de innerHTML , dando paso al uso de textContent ,createElement ,appenChild, etc. Asegurandonos de la no insercion directa de HTML en JS siendo menos propenso a ataques XSS.

---

## Tecnologías utilizadas

- HTML
- CSS (Metodología BEM)
- JavaScript(Metodologia para la seguridad del Dom)
- SASS

---

## Estructura del proyecto (SASS)

Se utiliza una estructura modular basada en el patrón 7-1 simplificado:

abstracts/ → variables y mixins
base/ → estilos globales
components/ → componentes reutilizables (cards, etc.)
layout/ → estructura (navbar, footer)
styles.scss → archivo principal que importa todo

Esta estructura facilita el mantenimiento, la reutilización y la escalabilidad del proyecto.

---

## Características principales

- Visualización del estado del tiempo en diez ciudades de Chile
- Consulta detallada del clima actual al seleccionar una ciudad
- Pronóstico meteorológico para los próximos 6 días

---

## Ejecución del proyecto

Para ejecutar este proyecto de manera local:

1. Clonar o descargar el repositorio:  
   https://github.com/jorgeurrutia21/weather-frontend-m4
2. Abrir la carpeta del proyecto

3. Ejecutar el archivo index.html en un navegador web  
   (Recomendado: Google Chrome)

---

## Objetivo del proyecto

El objetivo principal es entregar información meteorológica de distintas ciudades de Chile, permitiendo al usuario consultar tanto el clima actual como el pronóstico estimado para los próximos 6 días de diferentes ciudades de Chile.

---

## Autor

_Jorge Urrutia_
