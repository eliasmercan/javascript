# javascript
Repositorio orientado al estudio de Javascript

## 1. ajax
Proyecto de Ed.Team donde se enseña el manejo de las alternativas a Ajax usando Javascript.
## 2. consumoapirestjavascript
Proyecto de platzi donde se enseña al manejo de api rest con javascript

## 3. javascriptintensivo
Proyecto enfocado al aprendizaje de javascript fuente curso de udemy Codigo 369
## 4. Masterjavascript
Proyecto enfocado al aprendizaje de javascript fuente curso de udemy Juan Fernando Urrego (Máster en JavaScript: ECMAScript, Angular 9+, React, NodeJS)

## 5. my-store
Estudiando Angular y sus fundamentes curso platzi fundamentos de Angular - NicoByte
Nodejs V19.8.1
Npm 9.8.1
Angular cli: 16.1.8

## 6. npm-init
Proyecto enfocado al aprendizaje del uso de npm como herramienta importante para el despliegue de dependencias en NodeJS
### Comandos basicos:
1. *npm init* Inicializa el proyecto pregunta por el nombre del proyecto, version, descripcion, licencia de código.
2. *npm init -y* inicializa el proyecto pero no solicita información para la creación.
3. *npm install "namedependence"* Para instalar una depencia en un proyecto.
4.  *npm install "namedependece" --save-dev | npm install "namedependence" -D*  Instala la dependencia en el entorno de desarrollo
5.  *npm install "namedependece" --save | npm install "namedependence" -S*  Instala la dependencia para ser llevada a producción.
6.  *npm install -g "namedependece"*  Instala la dependencia en modo global y puede ser llamado desde la linea de comandos.
7.  *npm list*  Muestra el listado de las dependencias instaladas.
8.  *npm list -g*  Muestra el listado de las dependencias instaladas globalmente.

## 7. websocket-server
Practica de Wecksocket sencillo (No maneja seguridad). La fuente de este proyecto es el curso de Ed.team url: https://ed.team/cursos/websockets

* Instalación Para iniciar Servidor WebSocket el proyecto usar el comando:
    * npm install
    * npm start

### Ciclo de vida Web Socket Cliente:
* Conexión:
    *   websocket - Protocolo ws
    *   onopen - Listener saber si se conecto el cliente
    *   Envió y recepción de mensajes
    *   send - enviar y recepcionar mensajes desde el cliente al servidor
    *   onmessage - Listener recibe los mensajes del servidor
    *   onerror - Listenes para escuchar los errores
*Cierre del websocket
    *close -Desconexión del websocket

* Iniciar el cliente carpeta websocket-client/
    *Correr http-server de npm https://www.npmjs.com/package/http-server