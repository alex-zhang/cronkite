'use strict'

const express = require('express');
const expressApp = express();
const httpServer = require('http').Server(expressApp);
const scoketIO = require('socket.io')(httpServer);
const path = require('path');

const PORT = process.env.PORT || 3001;

expressApp.use(express.static(path.join(__dirname, '../web/dist')));

scoketIO.on('connection', ()=> {
  console.log('a user connect!')
});

httpServer.listen(PORT, ()=> {
  console.log(`app listening on port ${PORT}!`);
});
