const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app =express()
const userModel = require('./models/Signin')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://jayavarsanr:jayavarsan@findyourtoilet.e1nama6.mongodb.net/purethreads?retryWrites=true&w=majority&appName=Findyourtoilet")


app.post('/sign',(req,res)=>{
    userModel.create(req.body)
    .then(users => console.log(users))
    .catch(err => console.log(err))
})

app.post('/login',(req,res)=>{
    const {email, password}= req.body;
    userModel.findOne({email : email})
    .then(user =>{
        if (user){
            if (user.password === password){
                res.json("Logged in")   
        }else{
            res.json(" The password is incorrect")
        }
    }else{
        res.json("User not found")
    }
    })
})

app.listen(4000, ()=>{
    console.log("running")
})

