const jwt = require("jsonwebtoken");

exports.tokenInfo=(token)=>{
 if (token.startsWith('Bearer ')) {
   // Removing Bearer from string
    token = token.slice(7, token.length).trimLeft();
  }
  //decoding the token
  const decoded = jwt.verify(token, '123babar');
  //getting user id from token
  let userId=decoded.userId;
  return userId;
}
