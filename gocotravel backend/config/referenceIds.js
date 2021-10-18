const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//const atob = require('atob')

exports.referenceIds =(req, res) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; 
  // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length).trimLeft();
  }
  if (token) {

  jwt.verify(token, "123babar", (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Token is not valid'
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });}

  /*  const tokenParts = token.split('.');
const encodedPayload = tokenParts[1];
const rawPayload = atob(encodedPayload);
const uSer = JSON.parse(rawPayload);
console.log(uSer.userId);   
    */  
 
  }