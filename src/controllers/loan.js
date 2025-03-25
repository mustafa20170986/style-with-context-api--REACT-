const prisma =require('../client')
const rates={
    HOME:7.5,
    PERSONAL:8,
    CAR: 12,
    BUSINESS: 15
}    
exports.aploan = async(req,res)=>{
    const{userId,email,amount,loantype,duration}= req.body

try{
    if(!rates[loantype]){
return res.status(400).json({error:"invalid loan amount"})
    }
const user = await prisma.user.findUnique({
    where:{id:userId}
})
if(!user){
    return res.status(400).json({error:"user not found"})
}
const intrest = rates[loantype]
const totalrepayment =  amount + (amount * (intrest / 100) * (duration / 12))
const monthlyinstallment = totalrepayment/duration

const loan = await prisma.loan.create({
    data:{
        userId,
        email,
    intrest,
    amount,
    loantype,
     duration,
     totalrepayment,
     monthlyinstallment,
    }
})
res.status(200).json({message:"apply successfully",
loan:{
    ...loan,
    totalrepayment:totalrepayment.toFixed(2),
        monthlyinstallment:monthlyinstallment.toFixed(2),
}
})
} 
catch(error){
console.error(error)
return res.status(500).json({erro:"error encountered"})
}
}
