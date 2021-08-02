const mongoose = require('mongoose')

const Schema = mongoose.Schema


module.exports = mongoose.model('commands',new Schema({
    idProduct:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
}) )
