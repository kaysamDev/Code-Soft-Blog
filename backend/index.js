require('dotenv').config()
const express = require('express')
const connnectedDatabase = require('./config/database')
const PORT = process.env.PORT || 5010
const app = express()

// Database connection
connnectedDatabase();

// Importing all routes
// const user = require('./routes/user') //register user

// app.use('/api/v1', user)

const registerRouter = require('./controller/userController')


app.use(express.json())

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))