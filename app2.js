﻿// Cargamos módulos Node
var express = require('express');
var http = require('http');

// Creamos aplicación
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

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

io.sockets.on('connection', function (socket) {
	socket.on('coords:me', function (data) {
		console.log(data);
		socket.broadcast.emit('coords:user', data);
	});
80});

// Iniciamos server en el puerto 8080
server.listen(process.env.port || 8080);

console.log('Servidor Node Js en http://localhost:3000');