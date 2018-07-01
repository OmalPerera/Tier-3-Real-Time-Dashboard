(function () {
  'use strict';

  var express = require('express');
  var app = require('express')();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  var MongoWatch = require('mongo-oplog-watch');  //Create MongoWatch

  var port = 8085;
  var mongoConnectionString = 'mongodb://localhost:27017';

  var watcher = new MongoWatch(
    mongoConnectionString,
    { ns: 'streamdb.mongoRecGenie' }
  );

  //Watching for the insert action from MongoDB
  watcher.on('insert', function (doc) {
    console.log('=============================');
    console.log(doc.object);

    //If insert action is occured, emit data to client via socket.io
    io.emit('aggregator-message', doc.object);
  });

  var watcherVehicularSpeedRtParlimentJunction = new MongoWatch(
    mongoConnectionString,
    { ns: 'streamdb.parlimentJuncVehicularSpeeds' }
  );

  watcherVehicularSpeedRtParlimentJunction.on('insert', function (doc) {
    console.log('=============================');
    console.log(doc.object);

    io.emit('SocketVehicularSpeedRtParlimentJunction', doc.object);
  });

  app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'web', 'index.html'));
    //res.sendFile('index.html', { root: path.join(__dirname, 'web') });
    res.sendFile('web/index.html', { root: __dirname });
  });


  app.use(express.static(__dirname + '/web'));

  //Detech any user connect to server via web browser
  io = io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
      console.log('a user disconnected');
    });
  });

  http.listen(port, function () {
    console.log('Running on port ' + port);
  });

}());
