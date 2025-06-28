const {Kafka} =require('kafkajs')

const kafka = new Kafka({

clientId:'producer',
brokers:['localhost:9092']
})
const producer= kafka.producer({idempotent:true})// to ignore duplicates

const run = async()=>{
  try{
  await producer.connect()
  console.log("producer is connedcted")
  for (let i=1;i<5;i++){
     const order = { orderId: i, userId: `u${i % 3}` };
      await producer.send({
topic:'order',
acks:-1,
messages:[{key:order.userId,value:JSON.stringify(order)}]
     }) 
     console.log("order sent")
  }
  for(let i=1;i<=3;i++){// for simulating order 
      const payment = { paymentId: 100 + i, userId: `u${i % 2}` };
      await producer.send({
        topic:'payment',
        acks:-1,//all replicas to confirm for receive msg
        messages:[{key:payment.userId,value:JSON.stringify(payment)}]
      })
      console.log(" payment sent")
  }
  await producer.disconnect()
}

catch(error){
  console.log("producer sending error",error)
}
}
run()