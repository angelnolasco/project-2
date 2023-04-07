const express = require('express')
const fighterRouter = express.Router()
const Fighter = require('../models/fighters.js')


// INDEX
fighterRouter.get('/' , async (req,res)=>{
    const findFighter = await Fighter.find({})
    res.render('fighters/index.ejs',{ fighter: findFighter})
})

// NEW
fighterRouter.get('/new' , (req,res)=>{
    res.render('fighters/new.ejs')
})

// DELETE


// UPDATE


// CREATE
fighterRouter.post('/',(req,res)=>{
    const createdPost =  Fighter(req.body)
    createdPost.save().then(res.send('Islam Makhachev'))
})


// EDIT
fighterRouter.get('/:id/edit', (req,res)=>{
    res.send('Gilbert Burns')
})

// SHOW 
fighterRouter.get('/:id', (req,res)=>{
    res.send( 'alexander volkanovski')
})

module.exports = fighterRouter