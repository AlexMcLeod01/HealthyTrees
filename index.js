const express = require('express');
const app = express();
var path = require('path');

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'build')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});