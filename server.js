const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const fighterRouter = 
require('dotenv').config()
const app = express()


mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))


// CONTROLLERS
const fighterController = require('./controller/fighters')
app.use('/', fighterController)






app.listen(process.env.PORT, ()=>{
    console.log(`fighing on port ${process.env.PORT}`);
})