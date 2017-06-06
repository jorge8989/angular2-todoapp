var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3010);

app.use(express.static(__dirname + '/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELTE");
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/api/todos', function(req, res) {
  var todos = [
    {_id: 'someid1', name: 'work', done: true},
    {_id: 'someid2', name: 'read', done: true},
    {_id: 'someid3', name: 'lunch', done: false}
  ];
  res.json({data: todos});
});

app.listen(app.get('port'), function() {
  console.log('app running on port '+app.get('port'));
});
