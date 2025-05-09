const prisma = require('../client')
exports.credit = async(req,res)=>{
    const {userId,type,limit}= req.body
    try{
const user = await prisma.user.findUnique({
    where:{id:userId}
})
    if(!user){
        res.status(404).json({message:"user not found"})
    }
    const rates={
"BASIC":10,
"GOLD":15,
"DIAMOND":20
    }
    const ir = rates[[type.toUpperCase()] ]|| 10
    const apply = await prisma.creditcard.create({
data:{
    userId,
    type,
    limit,
    intrest:ir
}
    })
return res.status(200).json({message:"appliedsuccess",apply})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:"error while appling",errordetail:error.message})
    }
}