const jwt = require("jsonwebtoken");
const User = require("../Models/userRegister");



const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    //chek json web Token exists & is verified
    if (token) {
      jwt.verify(token, 'net Ali secret', (err, decodedToken) => {
        if(err){
          console.log(err.message);
          // res.loginClicken();
          res.redirect('/userLogin');
        }else {
          console.log(decodedToken);
          next();
        }
      })
    }else{
      res.redirect('/userLogin');
      // res.showLoginDialog = true;
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error: "Unauthorized" });
  }
};

//check Current User
const checkUser = (req, res, next)=>{
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'net Ali secret', async (err, decodedToken) => {
      if(err){
        console.log(err.message);
        res.locals.user = null;
        next();
      }else {
        console.log(decodedToken);
        let user = await User.findBxId(decodedToken.id)
        res.locals.user = user;
        next();
      }
    })
  }else{
    res.locals.user = null;
    next();
  }
}
module.exports = {requireAuth, checkUser};

// exports.auth = (req, res, next) => {
//   const token = req.cookies.Authorization;
//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.userId = decoded.id;
//     req.companyName = decoded.companyName;
//     req.email = decoded.email;
//     next();
//   } catch (error) {
//     console.error(error.message);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// };