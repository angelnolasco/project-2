const express = require('express')
const fighterRouter = express.Router()
const Fighter = require('../models/fighters.js')


// INDEX
fighterRouter.get('/' , (req,res)=>{
    res.send('jon jones')
})

// NEW


// DELETE


// UPDATE


// CREATE


// EDIT


// SHOW 


module.exports = fighterRouter