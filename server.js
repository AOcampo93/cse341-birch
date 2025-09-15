// Estamos creando un servidor básico con Express (Libreria mas usada para crear servidores en Node.js)
var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

//Maneja las peticiones que llegan a la raíz
app.use('/',require('./routes'));

//El servidor esta escuchando en este puerto
app.listen(port,() => {
    console.log('Server is running on port ${port}');
})