var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false,
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = module.exports = mongoose.model('Todo', todoSchema);

module.exports.getTodos = function(callback, limit) {
  Todo.find(callback).limit(limit);
}

module.exports.addTodo = function(todo, callback) {
  Todo.create(todo, callback);
}

module.exports.removeTodo = function(id, callback) {
  var query = {_id: id};
  Todo.remove(query, callback);
}
