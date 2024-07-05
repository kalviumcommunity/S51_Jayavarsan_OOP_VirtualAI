const mongoose = require('mongoose')

const signinSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const userModel = mongoose.model("user",signinSchema)

module.exports = userModel