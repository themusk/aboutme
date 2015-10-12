var express = require('express');
//var app = express(); //dziala tylko > v3.x.x
var app = express();

var homeController = require('./controllers/home');

/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/
app.get('/', homeController.index);
app.set('view engine', 'jade');

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


/*
var express = require('express');
var app = express();

/*
var homeController = require('./controllers/home');
var app = express();

app.set('port', process.env.PORT || 3000);
app.get('/', homeController.index);

app.listen(app.get('port'), function() {
  console.log('Shmux server listening on %d port %s node.', app.get('port'), app.get('env'));
});

module.exports = app;

*/
