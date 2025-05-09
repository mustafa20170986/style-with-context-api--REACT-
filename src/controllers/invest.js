const prisma = require('../client')
exports.buy = async(req,res)=>{
    const {userId,planId} = req.body
    try{
        //fetch user
        const user = await prisma.user.findUnique({
            where:{id:userId}
        })
        //fetch plan 
        const plan = await prisma.plan.findUnique({
            where:{id:planId}
        })
        // if none or any of the feild doesnt found 
        if(!user || !plan){
            return res.stauts(404).json({error:"user or plan not found"})
        }
        //check balance in user 
        if(user.balance < plan.amount){
            return res.status(400).json({error:"insufficient balance"})
        }
        // maturity date calcualtion 
        const mature = new Date()
        mature.setMonth(mature.getMonth()+ plan.duration)
        const final = plan.amount + (plan.amount * plan.intrest / 100)
        
        

    
    //deduct balance 
    const [updt,investments] = await prisma.$transaction([
        prisma.user.update({
where :{id:userId},
data:{balance:user.balance-plan.amount}
    }),
    prisma.investments.create({
        data:{
            userId,
            planId,
            amount: plan.amount,
            intrest:plan.intrest,
            maturity: mature
        }
    })
])
return res.status(200).json({
    message:"buying success",
balance:updt.balance
})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:"server error",
            detail:error.message})
    }
}