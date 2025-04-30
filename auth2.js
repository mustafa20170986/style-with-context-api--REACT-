const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const{users,rft} =require('./db.js')
const {sec,vrs,rse,vrr} = require('./gen.js')
const {passport} =require('./mid.js')
//registration logic 
const re =async (req,res,)=>{
    const {email,password,role} = req.body// take these credentials from request body 
if(!email ||  !password || !role){//if any of them are missing throw error 
    return res.status(400).json({msg:"invalid credentials"})
}
if(users.find(e=> e.email=== email)){//check if email exist (never registerd before)
    return res.status(400).json({msg:"email alredy exist"})
}
//hash password
const hsh = await bcrypt.hash(password,17)
const nwus = {id:users.length+1,password:hsh,email,role}//add new user
users.push(nwus)//push into database
return res.status(200).json({msg:"new usr created"})
}


//login logic goes here

     const login =(req,res,next)=>{
passport.authenticate("local",{session:false},(err,user,info)=>{//usng local strategy to authenticate the user 
    //session is false bcz statelss ,
if(err || !user){// if not found user
    return res.status(400).json({msg:info?.msg||"error"})
}// if okay then
const accesstoken = vrs(user)// generate accestoken
const refreshtoken = vrr(user)// also generaet new refresh token
rft.push(refreshtoken)
return res.status(200).json({accesstoken,refreshtoken})// return them for copy pasting 
})(req,res,next)// if req res cycle move to next
     }
     //generating new refresh token 
const rrr = (req,res,)=>{
    const{token}=req.body // taking old token form the bodyv 
    if(!token || rft.includes(token) ){// verifyv if exist and if in database
        return res.status(403).json({message:"invalid refresh token"})
    }
    try{
        const pay = jwt.verify(token,rse)//verify
        const user = users.find(u=>u.id === pay.id)// find the user id with payload
        if(!user){
            return res.status(403).json({msg:"unable to find users"})
        }
    const nrefreshtoken =vrs(user)//generate new erefresh toke 
    const naccesstoken = vrr(user)// generate new access token

    rft.splice(rft.indexOf(token),1,nrefreshtoken)// remove the old refresh token for token rotation
    return res.status(200).json({accesstoken:naccesstoken,refresh:nrefreshtoken})
}catch(err){
    return res.status(403).json({message:"invalid token or token expired"})
}
}
const dash =(req,res)=>{// this one is protected route 
res.status(200).json({msg:`welcome ${req.user.role}`})
}
module.exports={
dash,rrr,re,login
}

     
