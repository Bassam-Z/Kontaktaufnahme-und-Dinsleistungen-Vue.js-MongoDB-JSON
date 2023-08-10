const mongoose = require("mongoose");

const werkezeugeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    }, 
    body:{
        type: String,
        required: true,
    }, 
    iconName:{
        type: String,
        required: true,
    }, 
});

const User = mongoose.model('werkezeug', werkezeugeSchema)
module.exports = User;