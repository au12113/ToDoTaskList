var express = require('express');
var app = express();
var fs = require('fs')
// var bodyParser = require('body-parser')
var tasks = require('./tasks.json')

// app.use(bodyParser)

//
app.get('/', function (req, res) {
  res.status(200).send('HELLO');
  // console.log('Hello')
});

// view all items in the list
app.get('/all-tasks/', function (req, res) {
  res.status(200).send(JSON.stringify(tasks))
});

// view specific item in list
app.get('/tasks/:id', function (req, res) {
  var task_id = req.param('id');
  for (var i = 0; i < tasks.length; i++) {
    console.log('i = ' + i)
    if (tasks[i].id == task_id) {
      return res.status(200).send(tasks[i]);
    }
  }
  return res.sendStatus(404)
});

// add item to list
app.post('/add', function (req, res) {
  var task = {
    'id': req.param('id'),
    'subject': req.param('subject'),
    'description': req.param('description'),
    'done': false
  }
  // console.log(task)
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == task.id) {
      return res.status(409)
    }
  }
  tasks.push(task)
  fs.writeFile('./tasks.json', JSON.stringify(tasks), function (err) {
    if (err) {
      console.log(err);
      return res.status(404)
    }
    res.status(201).send('added task.')
    console.log("The file was saved!");
  })
})

app.listen(3000);
