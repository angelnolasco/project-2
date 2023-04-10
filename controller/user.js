const User = require('../models/user')
const express = require('express')
const userRouter = express.Router()


userRouter.get('/', (req,res)=>{
    res.render('register.ejs')
})


userRouter.post("/register" ,(req,res)=>{
    const {username ,password} = req.body
    const user = new User({ username, password})
    user.save().then(()=>{
        res.send('Registration successful!')
    })
    .catch(err =>{
        console.log(err);
        res.send("Registration failed. Please try again.")
    })
})

module.exports = userRouter