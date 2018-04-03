const express = require('express');
const server = express();
const db = require('./data/db.js');
const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));

server.get('/', function(req, res){
    res.send({ api: 'Running....'})
});

// add your server code starting here
