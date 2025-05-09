const prisma = require('../client')
exports.promat=async()=>{
const mat = await prisma.investments.findMany({
where:{
    maturity: {lte:new Date()},
    status:"ACTIVE"
}
})
for(const inv of mat){
    const user = await prismam.user.findUnique({
        where:{id:inv.userId} })
    const tot = inv.amount + (inv.amount * (inv.interest / 100))
    await prisma.user.update({
        where:{id:inv.userId},
        data:{balancelance:user.balance+tot}
    })
    await prisma.investments.update({
        where:{id:inv.id},
        data:{status:"COMPLETED"}
    })
}

}