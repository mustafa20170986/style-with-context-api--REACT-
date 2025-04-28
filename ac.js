const jwt = require("jsonwebtoken")
const asc ="oni is my heart" //access token secrect key
const refsec  ="neha is so cute"//rrefresh  token secrect
function genac(user){
    return jwt.sign({//generate access token
        id:user.id,
        role:user.role,
        permission:user.permission
    },asc,{expiresIn:"20m"}
)
}
// reffresh token storage
const refst =[]
function genref(user){// generate refresh token
    const rft= jwt.sign({
        id:user.id
    },refsec,{expiresIn:"5d"})
    refst.push(rft)// store refresh token bcz we will be use it in future
    return rft
}
function verac(req,res,next){//verifying access token
    //this function is verifying the token before it got used .and it is protecting a route 
    const tok = req.headers["authorization"]?.split(" ")[1]//it extracts thex token
    if(!tok){
        return res.status(401).json({message:"acess denied"})
    }
    try{
        const pay = jwt.verify(tok,asc)//verify the user 
        req.user= pay // stores in pay
        next()// grant acess to the protected route
    }catch(err){
    res.status(403).json({msg:"token invalid"})
}
}
function verref(rft){// verify refresh token
    return jwt.verify(rft,refsec)
}
module.exports={
    genac,verac,verref,genref,refst
}