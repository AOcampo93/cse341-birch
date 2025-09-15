// Rutas principales de la aplicación
const routes = require('express').Router();
const myController = require('../controllers');

// Definimos las rutas y las funciones del controlador que manejarán las solicitudes
routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnAnotherPerson);

// Exportamos las rutas para usarlas en el servidor principal
module.exports = routes;