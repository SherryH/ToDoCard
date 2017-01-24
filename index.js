var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var routes = require('./app/routes');

//How to hide username and password??
var dbUrl = 'mongodb://root:root@ds127399.mlab.com:27399/todocard';

//define an app
var app = express();

//define port
var port = process.env.PORT || 8080;

//connect with Mongoose DB
mongoose.Promise = global.Promise; //to remove the promise deprecate error
mongoose.connect(dbUrl);
mongoose.connection.on('error', console.error.bind(console, 'Connection Error'));

//parse all JSONs in requests
app.use(bodyparser.json());

//location to serve static files
//place the default index.html file here too
app.use(express.static(__dirname + '/public'));


//direct routing
routes(app , mongoose.connection);

//start up server
app.listen(port, function() {
  console.log('listening on port: ',port);
});

