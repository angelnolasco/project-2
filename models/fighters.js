const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fighterSchema = new Schema({
    name: String,
    age: String,
    weight: String,
    height: String,
    reach: String,
    wins: String,
    loses: String,
    city: String,
    ko: String,
    sub: String,
})

const Fighter = mongoose.model('Fighter',fighterSchema)

module.exports = Fighter