const express = require('express')
const Task = require("../model/task-model");
const res = require('express/lib/response');

async function createTask(req,res){
    try {
        taskData= req.body
       newTask =  await Task.create(taskData)
        res.status(200).json(newTask);
    } catch (error) {
        console.log(error)
    }
}

 async function getTasks(req, res){
    try {
        allTasks = await Task.find({})
        res.status(203).json(allTasks)
    } catch (error) {
        console.log(error)
    }
}

async function getTask(req, res){
   try {
    const {id} = req.params;

   singleTask = await Task.findById(id)

   res.status(200).json(singleTask);

   } catch (error) {
    res.status(500).json({msg: error.message})
   }
}
async function deleteTask(req, res){
   try {
    const {id} = req.params;

   const task = await Task.findByIdAndDelete(id);
   if(!task){
    return res.status(404).send(`Task with id: ${id} has deleted already`)
   }
   res.status(200).json({msg: "Task Deleted"});

   } catch (error) {
    res.status(500).json({msg: error.message})
   }
}

//controller for updating tasks
async function updateTask(req, res){
    try {
        const {id} = req.params

        

        const task = await Task.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new: true}
        )

        if(!task){
            return res.status(404).json({msg: `Task with id: ${id} not found`});
        }

        res.status(200).json(task);
        console.log(task)
    } catch (error) {
      res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}