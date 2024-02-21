const dotenv = require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express()
const connectDB = require('./config/connectDB')
const mongoose = require('mongoose')
const Task = require('./model/task-model');
const taskRoutes = require("./routes/taskRoutes")


//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(taskRoutes);
app.use(cors())


const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send("Hello world")
})

const server = async ()=> {
    try {
        await connectDB()
        app.listen(PORT, ()=>{
        console.log("Server runnning");
    })
    } catch (error) {
        console.log(error)
    }
}

server()
//mongodb+srv://vicitug:<password>@vtec-blogs.6ptypgp.mongodb.net/?retryWrites=true&w=majority