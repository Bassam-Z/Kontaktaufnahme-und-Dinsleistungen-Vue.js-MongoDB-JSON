const jwt = require("jsonwebtoken");

// exports.generateToken = (payload, expired) => {
//   return jwt.sign(payload, process.env.TOKEN_SECRET, {
//     expiresIn: expired,
//   });
// };
const maxAge = 3 * 24 * 60 *60 ;
exports.generateToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  });
}