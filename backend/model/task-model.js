const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requried: [ true, "Please add name for the task"]
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;