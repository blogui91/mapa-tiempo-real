// Cargamos módulos Node
var express = require('express');
var http = require('http');

// Creamos aplicación
var app = express();
var server = require('http').createServer(app);

// Configuramos la aplicación
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/public'));
});

// Routing
app.get('/', function(req, res) {
    res.render('layout', {
    	title: 'Mapa en tiempo real',
    	description: 'Mi primer mapa'
    });
});

// Iniciamos server en el puerto 3000
server.listen(3000);

console.log('Servidor Node Js en http://localhost:3000');