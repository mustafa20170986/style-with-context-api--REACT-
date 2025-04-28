const jwt = require("jsonwebtoken")
const sec = "i love you emu"//id token secrect key
function gen(user){//genereate id token 
return jwt.sign({id:user.id},sec,{expiresIn:"10m"})
}
function ver(tok){// verify id token 
    return jwt.verify(tok,sec)
}
module.exports ={
    gen,ver
}
