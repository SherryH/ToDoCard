var express = require('express');
var bodyparser = require('body-parser');

//define an app
var app = express();

//define port
var port = process.env.PORT || 3000;

//parse all JSONs in requests
app.use(bodyparser.json());

//return Hello World
app.get('/*', function(req, res) {
  res.status(200).send('Hello World');
});

//start up server
app.listen(port, function() {
  console.log('listening on port: ',port);
});