const {verify} = require('./jwt.js')
const {vldses} =require('./ses.js')


async function authmid(req,res,next){
  const head = req.headers.authorization
  if(!head){
    return res.status(403).json({msg:"authentication failed"})
  }
  const token = head.split(' ')[1]
  try{
    const payload= verify(token)
    const isval = await vldses(payload.id,payload.sessionid)
    if(!isval){
      return res.status(403).json({msg:"invlid seission"})
    }
    req.user = payload 
    next()
  }catch(err){
    return res.status(403).json({msg:"invalid token"})
  }
}

 function perm(required){// extract permision from user
  return(req,res,next)=>{
    if(!req.user.permissions.includes(required)){//check the permission
      return res.status(403).json({msg:"access denied"})
    }
    next()
  }
 }
 module.exports={
  perm,authmid
 }