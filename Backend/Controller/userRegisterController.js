const User = require("../Models/userRegister");
const bcrypt = require("bcrypt");
const {validateEmail, validateLength} = require("../helpers/validation")
// const {generateToken} = require("../helpers/token");
const jwt = require("jsonwebtoken");

//handle error
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {emailAdress: '',kennenwort: '' };
  //incorrect email
  if(err.message === 'incorrect E-Mail'){
    errors.emailAdress= 'Die E-Mail-Adresse ist nicht registriert!'
  }
  //incorrect Kennenwort
  if(err.message === 'incorrect Kennenwort'){
    errors.kennenwort= 'Das Kennewort ist nicht richtig!'
  }
  //duplicate error code
  if(err.code === 11000){
    errors.emailAdress = 'Die E-Mail-Adresse ist breit benutzt!';
    return errors;
  }

  //validation errors
  if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties}) =>{ errors[properties.path] = properties.message});
  }
  return errors;
}

//Register
// module.exports.userRegister_get = (req,res) =>{
//   res.render('register');
// }

module.exports.userRegister = async ( req, res) =>{
  try {
    const {
      anrede, 
      vorname, 
      nachname, 
      beruf, 
      emailAdress,
      kennenwort, 
    } = req.body;
    
    
    //Email Validation
    if(!validateEmail(emailAdress)){
      return res.status(400).json({
          mrssage: "invalid email address"
      });
    }
        
    //Email is exist
    const check = await User.findOne({ emailAdress });

    if(check){
      return res.status(400).json({
        message: " email address is exists",
      });
    }
        
    // Vorname Valodation
    if(!validateLength(vorname,3,30)){
      return res.status(400).json({
        message: " Die Vorname muss zwichen 3 und 30 Characters",
      });
    }
    
    //Nachname Validation
    if(!validateLength(nachname,3,30)){
      return res.status(400).json({
        message: " Die Nachname muss zwichen 3 und 30 Characters",
      });
    }
    
    //Nachname Validation
    if(!validateLength(kennenwort,8,40)){
      return res.status(400).json({
        message: " Die Kennenwort muss min 8 und  max 40 Characters",
      });
    }
    //  const cryptKennenwort = await bcrypt.hash(kennenwort, 12);
    //kennenwort: cryptKennenwort
    
    const user = await User.create({anrede, vorname, nachname, beruf, emailAdress, kennenwort  });
    
    // const user = await new User ({anrede, vorname, nachname, beruf, kennenwort , emailAdress}).save();
    // res.json(user);

    //Token Create2
    const Token = createToken(user._id);
    res.cookie('jwt', Token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000});
    console.log(Token)

    res.send({ 
      userID: user._id,
      Anrede: user.anrede , 
      Vorname: user.vorname, 
      Nachname: user.nachname, 
      Beruf: user.beruf, 
      emailAdress: user.emailAdress,
      token: Token,
      message: "Register Success!"
    });

    
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({errors});
    }
};

module.exports.werkzeugCreate = async (req, res) =>{
  const {title, body, iconName} = req.body;
  try {
    const werkezeug = await User.create({title, body, iconName});
    res.status(201).json({ werkezeug: werkezeug._id});
  } catch (err) {
    const errors = handleErrors(err);
      res.status(400).json({errors});
  }
}


//Token Create
const maxAge = 3 * 24 * 60 *60 ;
const createToken = (id) => {
  return jwt.sign({id}, 'net Ali secret', {
    expiresIn: maxAge
  });
}

//login
// module.exports.userLogin_get = (req,res) =>{
//   res.render('Anmelden');
// }
module.exports.userLogin = async (req, res) => {
  try {
    const { emailAdress, kennenwort } = req.body;
    const user = await User.login(emailAdress, kennenwort);
    const Token = createToken(user._id);
    const {anrede, vorname, nachname} = user;
    res.cookie('jwt', Token, { httpOnly: true, maxAge: 3 * 24 * 60 *60 * 1000});
    res.status(200).json({user: user._id, anrede, vorname, nachname});
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({errors});
  }
};
//login2
// module.exports.userLogin = async (req, res) => {
//   try {
//     const { emailAdress, kennenwort } = req.body;
//     const user = await User.login(emailAdress, kennenwort);
//     const Token = createToken(user._id);
//     const {anrede, vorname, nachname} = user;
//     res.cookie('jwt', Token, { httpOnly: true, maxAge: 3 * 24 * 60 *60 * 1000});
//     res.status(200).json({user: user._id, anrede, vorname, nachname});
//   } catch (err) {
//     const errors = handleErrors(err);
//     res.status(400).json({errors});
//   }
// };


//Logout
// module.exports.userLogout_get = ( req, res) => {
//   res.cookie('jwt','', { maxAge: 1});
//   res.redirect('/');
//   res.status(200).json({ message: "Logged out successfully" });
// }

module.exports.userLogout = (req, res) => {
    res.clearCookie("Authorization", "");
    res.status(200).json({ message: "Logged out successfully" });
  };


  //get User Daten
  module.exports.getUserDetails = async (res, req) => {
    try {
      const benutzer = await User.findOne(req.benutzer);
      res.status(200).json({
        status: "success",
        data:{
          anrede: benutzer.anrede,
          vorname:  benutzer.vorname,
          nachname: benutzer.nachname,
          emailAdress: benutzer.emailAdress
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error"
      });
    }
  };

