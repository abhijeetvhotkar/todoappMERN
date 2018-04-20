var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = promise;

module.exports.Todo = require("./todo");
