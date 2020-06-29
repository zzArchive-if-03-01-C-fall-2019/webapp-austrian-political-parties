const express = require('express')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var router = express.Router();
//var favicon = require('serve-favicon')

app.use('/main-pages', express.static(path.join(__dirname, '/pages/main-pages/')))
app.use('/secondary-pages', express.static(path.join(__dirname, '/pages/secondary-pages/')))
app.use('/js', express.static(path.join(__dirname, '/js/')))
app.use('/assets', express.static(path.join(__dirname, '/assets/')))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/pages/main-pages/index.html');
});
app.get('/index', function(req, res){
    res.sendFile(__dirname + '/pages/main-pages/index.html');
});



app.listen(3000) //last
