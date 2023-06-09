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
fighterRouter.delete('/:id', async(req,res)=>{
    await Fighter.findByIdAndDelete(req.params.id,req.body)
    res.redirect('/fighter')
})

// UPDATE

fighterRouter.put('/:id', async(req,res)=>{
    await Fighter.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/fighter')
})

// CREATE
fighterRouter.post('/',(req,res)=>{
    const createdPost =  Fighter(req.body)
    createdPost.save().then(res.redirect('/fighter'))
})


// EDIT
fighterRouter.get('/:id/edit', async(req,res)=>{
    const editFighter = await Fighter.findById(req.params.id)
    res.render('fighters/edit.ejs',{fighter: editFighter})
})

// SHOW 
fighterRouter.get('/:id', async (req,res)=>{
    const findFighter = await Fighter.findById(req.params.id).exec()
    res.render( 'fighters/show.ejs',{fighter: findFighter})
})

module.exports = fighterRouter