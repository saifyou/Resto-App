const mongoose = require('mongoose')

const Schema = mongoose.Schema


module.exports = mongoose.model('product',new Schema({
    nom:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },prix:{
        type:String,
        required:true
    },
}) )
