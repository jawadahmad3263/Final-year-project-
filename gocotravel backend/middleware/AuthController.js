const jwt=require('jsonwebtoken');
function authenticateToken(req, res, next) {

  
  // Gather the jwt access token from the request header
  const authHeader = req.headers["authorization"];
  console.log(req.headers,"SEE THIS")
  const token = authHeader && authHeader.split(" ")[1];

  console.log("token",token)
   // if there isn't any token

  jwt.verify(token, "123babar",(err, decoded) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.decoded = decoded;
    next(); // pass the execution off to whatever request the client intended
  });
}
module.exports = authenticateToken;


