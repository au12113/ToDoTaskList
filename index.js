var express = require("express");
var app = express();
var fs = require("fs")

var tasks = require("./tasks.json")

//
app.get("/", function(req, res) {
  // res.sendStatus(200)
  res.send("HELLO");
  // console.log("Hello")
});

// view all items in the list
app.get("/task/", function(req, res) {
  var task_id = req.param('id');
  for(var i = 0; i < task.length; i++) {
    if(task[i].id == task_id) {
      res.send("task_id: " + task[i].id + "\nsubject: " + task[i].subject + "\n ");
    }
  }
});

// add item to list
app.post("/add", function(req, res) {
  var task = {
    id : req.param('id'),
    subject : req.param('subject'),
    description : req.param('description'),
    done : false
  }
  tasks.push(task)
  fs.writeFile("./tasks.json", tasks)
})

app.listen(3000);
