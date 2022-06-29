
const express = require('express')
const app = express()
const nodemailer = require('nodemailer');



//helps us to use middleware
app.use(express.json())

const userRouter = require('./routes/user.js')
app.use('/', userRouter)

const PORT = 5500;

app.listen(PORT);