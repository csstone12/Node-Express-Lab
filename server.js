const express = require('express');
const server = express();
const db = require('./data/db.js');
const port = 3000;

server.listen(port, () => console.log('API Running on port 3000'));


server.get('/', function(req, res){
    
});




server.listen(port, () => {
  console.log("API Running");
});