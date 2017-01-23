var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

//define an app
var app = express();

//define port
var port = process.env.PORT || 3000;

//parse all JSONs in requests
app.use(bodyparser.json());

//location to serve static files
//place the default index.html file here too
app.use(express.static(__dirname + '/public'));
var publicPath = path.join(__dirname, '/public');

//return Hello World
app.get('/*', function(req, res) {
  res.status(200).sendFile(publicPath + '/index.html');
});

//start up server
app.listen(port, function() {
  console.log('listening on port: ',port);
});

