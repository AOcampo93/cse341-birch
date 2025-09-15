# CSE341 - WEEK 1 Sarah Birch
## Node.js
Node.js es un entorno de ejecución que permite correr JavaScript fuera del navegador, normalmente en el servidor.

## 📌 Comparación: PHP vs Node.js

| Característica       | **PHP**                                                                 | **Node.js**                                                                 |
|-----------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------|
| **Lenguaje**          | Lenguaje propio (PHP)                                                   | JavaScript (ya usado en frontend)                                          |
| **Modelo de ejecución** | Basado en hilos, cada request abre un proceso nuevo (Apache/Nginx)      | Event-loop, no bloqueante, maneja miles de requests en un solo hilo        |
| **Facilidad de uso**  | Muy fácil de empezar (subes un `.php` al hosting y funciona)             | Requiere instalar Node y configurar scripts/servidores                     |
| **Ecosistema**        | WordPress, Drupal, Laravel, Symfony → enorme en web tradicional y CMS   | npm (millones de librerías), frameworks modernos (Express, NestJS, Next.js)|
| **Escalabilidad**     | Bien para sitios tradicionales, pero más costoso en apps tiempo real     | Excelente para apps que necesitan tiempo real (chats, streaming, IoT)      |
| **Bases de datos**    | Muy integrado con MySQL/MariaDB                                         | Muy usado con MongoDB, PostgreSQL, Redis (también soporta MySQL)           |
| **Tiempo real**       | Limitado (requiere librerías externas o hacks)                          | Nativo con WebSockets y asincronía                                         |
| **Hosting**           | Barato y disponible en cualquier proveedor clásico (ej. HostGator)      | Orientado a PaaS (Render, Vercel, Heroku) o VPS                            |
| **Curva de aprendizaje** | Muy baja para principiantes                                           | Más técnica si vienes de PHP, pero fácil si ya manejas JS                  |


## 🔹 ¿Cuándo usar PHP?

Sitios web tradicionales (blogs, catálogos, páginas corporativas).

Cuando quieres rapidez y no complicarte con servidores (ej. un hosting compartido).

CMS como WordPress, Joomla, Prestashop (todos en PHP).

Proyectos que no requieren tiempo real ni miles de conexiones simultáneas.

## 🔹 ¿Cuándo usar Node.js?

Apps en tiempo real (chat, multiplayer, dashboards en vivo).

APIs REST o GraphQL para apps móviles/web.

Cuando quieres usar un solo lenguaje (JS) en todo el stack.

Aplicaciones con mucho tráfico concurrente (Node escala muy bien).

Microservicios y arquitecturas modernas.

## 👉 En resumen:

PHP es como el “clásico confiable” → fácil, barato, masivo en web.

Node.js es el “nuevo jugador” → potente para tiempo real y proyectos modernos.