var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

Todo = require('./models/todo');

app.set('port', process.env.PORT || 3010);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todos');
var db = mongoose.connection;

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/api/todos', function(req, res) {
  Todo.getTodos(function(err, todos) {
    if (err) throw err;
    res.json({data: todos});
  });
});

app.post('/api/todos', function(req, res) {
  Todo.addTodo(req.body, function(err, todo) {
    if (err) {
      console.log(err);
      throw err;
    };
    res.json({data: todo});
  });
});

app.delete('/api/todos/:_id', function(req, res) {
  Todo.removeTodo(req.params._id, function(err, todo) {
    if (err) throw err;
    res.json(todo);
  })
})

app.listen(app.get('port'), function() {
  console.log('app running on port '+app.get('port'));
});
