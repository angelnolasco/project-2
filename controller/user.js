const User = require('../models/user')
const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcrypt')



userRouter.get('/register', async(req,res)=>{
    res.render('register.ejs')
})

// Routes / Controllers
userRouter.post('/login', async (req, res) => {
    const user = await User.findOne({username:req.body.email})
    if (bcrypt.compareSync( req.body.password, user.password)) 
    {req.session.user= user 
        res.redirect('/fighter')}
    req.session.anyProperty = 'any value';
    res.send('This is the route that sets the value of req.session.anyProperty');
});

userRouter.post('/register', async(req,res)=>{
    req.body.password  = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(11))
    const user = new User  (req.body) 
    await user.save()
    res.redirect('/fighter')
})

module.exports = userRouter