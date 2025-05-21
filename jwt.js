const jwt = require("jsonwebtoken")

const acsec = "i love you emu"
const refsec ="i love you oni"

function genac(user,sessionid){//generate access token
  return jwt.sign({
id:user.id,
email:user.email,
role:user.role,
permissions:user.permissions,
sessionid
  },acsec,{expiresIn:"5h"})
}

function genref(user,sessionid){
  return jwt.sign({
    id:user.id,
email:user.email,
role:user.role,
permissions:user.permissions,
sessionid
  },refsec,{expiresIn:"10d"})
}

function verify(token){//verify token
  return jwt.verify(token,acsec)
}

module.exports={
  genac,genref,verify
}