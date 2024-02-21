const express = require('express')
const Task = require("../model/task-model")
const router = express.Router()
const {createTask, getTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController")
//create new task
router.post("/", createTask)

//get all tasks
router.get('/api/task', getTasks)

//get a single task
router.get('/:id', getTask)

//deleteTask request
router.delete('/:id', deleteTask)

//route to update tasks
router.put('/:id', updateTask)

module.exports = router