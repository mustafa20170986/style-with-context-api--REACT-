const jwt = require("jsonwebtoken")
const sec =" illove emu"// acess token secrect key
const rse= " oni is my heart"// refresh token secrectt key

function vrs(user){// generate access token
return jwt.sign({
    id: user.id,
    role:user.role
},sec,{expiresIn:"1h"})
}
function vrr (user){// generate refresh token 
    return jwt.sign({
    id:user.id,
    role:user.role
},rse,{expiresIn:"7d"})
}
module.exports={
    vrs,vrr,sec,rse
}