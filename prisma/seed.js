
const prisma = require('../src/client.js')
const pln =[
  {
    name: "fd-basic",
    amount:5000,
    intrest :5,
    duration :12,
    predefined: true
  },
  {
    name: "fd-pro",
    amount:10000,
    intrest :7,
    duration :12,
    predefined: true
  },
  {
    name: "fd-premium",
    amount:15000,
    intrest :7,
    duration :10,
    predefined: true
  },
  {
    name: "savings-basic",
    amount:5000,
    intrest :4,
    duration :12,
    predefined: true
  },
  {
    name: "savings-premium",
    amount:10000,
    intrest :5,
    duration :12,
    predefined: true
  }
]
async function seed(){
  try{
  await prisma.plan.createMany({
    data:pln,
    skipDuplicates:true
  })
  console.log("predefinedd sedded")
}
catch(error){
console.error("error",error),
  process.exit(1)
}
finally{
await prisma.$disconnect()
}}
seed()