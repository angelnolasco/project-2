const express = require('express')
const fighterRouter = express.Router()
const Fighter = require('../models/fighters.js')


// INDEX
fighterRouter.get('/' , (req,res)=>{
    res.send('jon jones')
})

// NEW
fighterRouter.get('/new' , (req,res)=>{
    res.send('Alex Pereira')
})

// DELETE


// UPDATE


// CREATE


// EDIT


// SHOW 
fighterRouter.get('/:id', (req,res)=>{
    res.send( 'alexander volkanovski')
})

module.exports = fighterRouter