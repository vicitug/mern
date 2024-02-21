const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

const dbConnection = async () => {
    const connectDB = await mongoose.connect(process.env.DB_URI)
    .then(()=> console.log("Database Connect"))
    .catch((err) => console.log(err))
}

module.exports = dbConnection