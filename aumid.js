// aumid.js
//midddle ware to authenticate user 
const jwt = require("jsonwebtoken");
const { acsec } = require('./jwt.js');

function au(req, res, next) {
  const auth = req.headers.authorization;//get authorization header value
  if (!auth) {//if failed throw error 
    return res.status(403).json({ msg: "Authorization failed" });
  }
  const token = auth.split(" ")[1];//extract bearer token formate 
  try {
    const pay = jwt.verify(token, acsec);// verify the token and get a payload
    req.user = pay;
    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
}

module.exports = au;
