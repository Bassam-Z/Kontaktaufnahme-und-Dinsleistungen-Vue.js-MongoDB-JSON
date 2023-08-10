const mongoose = require("mongoose");
const {isEmail} = require('validator');
const bcrypt = require ('bcrypt');

const userRegisterSchema = new mongoose.Schema({
    anrede:{
        type: String,
        required: [true, " Anrede ist required"],
        trim: true,
        text: true,
    }, 
    vorname: {
        type: String,
        required: [true, " Vorname ist required"],
    },
    nachname: {
        type: String,
        required: [true, " Nachname ist required"],
        trim:true,
        text: true,
    },
    beruf:{
        type: String,
        required: [true, " anrede ist required"],
    },
    emailAdress: {
        type: String,
        required: [true, 'Bitte geben Sie eine E-Mail-Adresse ein!'],
        unique: true,
        lowercase: true ,
        validate: [isEmail, 'Bitte geben Sie eine richtige E-Mail-Adresse ein!']   
    },
    kennenwort:{
        type: String,
        required: [true, 'Bitte geben Sie ein Kennenwort ein!'],
        minlength: [6, 'Minimum Kennenwort ist 6 Characters!']    
    },
});

//fire a function before doc saved to db
userRegisterSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt();
    console.log(salt);
    this.kennenwort = await bcrypt.hash(this.kennenwort, salt);
    next();
});

// static Method to login
userRegisterSchema.statics.login = async function (emailAdress, kennenwort){
    const user = await this.findOne({emailAdress});
    if(user){
       const auth = await bcrypt.compare(kennenwort, user.kennenwort );
       if (auth) {
        return user;
       }
       throw Error('incorrect Kennenwort');
    }
    throw Error('incorrect E-Mail');
}

const User = mongoose.model('user', userRegisterSchema)
module.exports = User;