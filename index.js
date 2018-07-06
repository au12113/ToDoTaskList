var express = require('express')
var app = express()

var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var Tasks = require('./models/tasks')

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://ds127771.mlab.com:27771/meat'

app.use(bodyParser.json())

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    user: 'someone',
    pass: '6characters'
})

app.get('/', function(req, res) {
    Tasks.find().exec(function(err, objects) {
        if(err) {
            return res.sendStatus(500)
        }
        res.jsonp(objects)
    })
})

app.post('/add', function(req, res) {
    var newTask = new Tasks({
        subject : req.params.subject,
        description: req.params.description,
        status: false
    })
    newTask.save(function(err, task) {
        if(err) { 
            return res.sendStatus(500)
        }
        console.log(task._id)
        return res.sendStatus(201)
    })
})

app.listen(PORT)