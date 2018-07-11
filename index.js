var express = require('express')
var app = express()

var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methods = require('./allowMethods')

var Tasks = require('./models/tasks')

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://ds127771.mlab.com:27771/meat'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  user: 'someone',
  pass: '6characters'
})

// define allow methods each path
app.all('/tasks',methods(['GET', 'POST']))
app.all('/tasks/:id', methods(['GET','POST','DELETE','PATCH']))
app.all('/tasks/:id/status', methods(['PATCH']))

// get all tasks
app.get('/tasks', function (req, res) {
  Tasks.find().exec(function (err, tasks) {
    if (err) {
      return res.sendStatus(500)
    }
    return res.status(200).jsonp(tasks)
  })
})

// get specific task by id
app.get('/tasks/:id', function (req, res) {
  Tasks.findOne({
    _id: req.params.id
  }).exec(function (err, task) {
    if (err) {
      return res.sendStatus(500)
    }
    return res.status(200).jsonp(task)
  })
})

// add new task with false status
app.post('/tasks', function (req, res) {
  var newTask = new Tasks({
    subject: req.body.subject,
    description: req.body.description,
    status: req.body.status || false
  })
  newTask.save(function (err, task) {
    if (err) {
      return res.sendStatus(500)
    }
    console.log(task._id)
    return res.sendStatus(201)
  })
})

// edit task detail
app.patch('/tasks/:id', function (req, res) {
  Tasks.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    $inc: {
      __v: 1
    }
  }, function (err, task) {
    if (err) {
      if (err.reason == undefined) {
        return res.sendStatus(404)
      } else {
        return res.sendStatus(500)
      }
    }
    return res.status(200).jsonp(task)
  })

})

// set/update task status
app.patch('/tasks/:id/status', function (req, res) {
  Tasks.findByIdAndUpdate(req.params.id, {
    $set: {
      status: req.body.status || true
    },
    $inc: {
      __v: 1
    }
  }, function (err, task) {
    if (err) {
      if (err.reason == undefined) {
        return res.sendStatus(404)
      } else {
        return res.sendStatus(500)
      }
    }
    return res.status(200).jsonp(task)
  })
})

// delete task by id
app.delete('/tasks/:id/', function (req, res) {
  Tasks.findOneAndRemove({
    _id: req.params.id
  }).exec(function (err, task) {
    if (err) {
      if (err.reason == undefined) {
        return res.sendStatus(404)
      } else {
        return res.sendStatus(500)
      }
    }
    if (!task) {
      return res.sendStatus(404)
    }
    res.sendStatus(200)
  })
})

app.listen(PORT)
