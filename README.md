# javascript
Repositorio orientado al estudio de Javascript

## 1. consumoapirestjavascript
Proyecto de platzi donde se enseña al manejo de api rest con javascript

## 2. Masterjavascript
Proyecto enfocado al aprendizaje de javascript fuente curso de udemy Juan Fernando Urrego (Máster en JavaScript: ECMAScript, Angular 9+, React, NodeJS)

## 3. websocket-server
Practica de Wecksocket sencillo (No maneja seguridad). La fuente de este proyecto es el curso de Ed.team url: https://ed.team/cursos/websockets

* Instalación Para iniciar Servidor WebSocket el proyecto usar el comando:
    * npm install
    * npm start

Ciclo de vida Web Socket Cliente:
* Conexión
    * websocket - Protocolo ws
    * onopen - Listener saber si se conecto el cliente
*Envió y recepción de mensajes
    *send - enviar y recepcionar mensajes desde el cliente al servidor
    *onmessage - Listener recibe los mensajes del servidor
    *onerror - Listenes para escuchar los errores
*Cierre del websocket
    *close -Desconexión del websocket

* Iniciar el cliente carpeta websocket-client/
    *Correr http-server de npm https://www.npmjs.com/package/http-server