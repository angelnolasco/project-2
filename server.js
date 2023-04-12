const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')
const session= require("express-session")
require('dotenv').config()
const app = express()



mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use('/public', express.static("public"))

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)


// CONTROLLERS
const fighterController = require('./controller/fighters')
app.use('/fighter', fighterController)

const userController = require('./controller/user')
app.use('/user',userController)



// LOGIN PAGE
app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.listen(process.env.PORT, ()=>{
    console.log(`fighting on port ${process.env.PORT}`);
})