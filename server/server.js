import express from 'express'
import { PORT, mongodbURI } from './config.js'
import mongoose from 'mongoose'
import { Student } from './models/student-model.js'
import cors from 'cors';

const app = express();

app.use(express.json());

//middelware cors.
app.use(cors())


app.get("/", (req, res)=>{
    res.status(202).send("HELLO WORLD!")
})

app.post('/students', async (req, res)=>{
    try {
        if(
            !req.body.name ||
            !req.body.level ||
            !req.body.stream
        ){
            return res.status(400).send({message: 'Please provide all information'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }

    const newStudent = {
    name: req.body.name,
    level: req.body.level,
    stream: req.body.stream
    }

    const student = await Student.create(newStudent);
    return res.status(203).send(student);
})

const uri = mongodbURI;

mongoose
    .connect(uri)
    .then((results)=>{
        console.log("DATABASE CONNECTION CLEAR");
        app.listen(PORT, (req, res)=>{
            console.log("Server is running")
        });

    })









