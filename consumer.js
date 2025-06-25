const {Kafka} =require('kafkajs')
 const kafkaconfig ={
  clientId:"oni",
  brokers:['localhost:9092'],
  retry:{
    retries:5
  }
 }
 const cops = {
  groupId:'ord-grp',// multiple groupid can listener for same producer . its also apply loiad balancing 
  fromBeginning:true// from the start of the message 
 }

 const kafka= new Kafka(kafkaconfig)
 const consumer =kafka.consumer({groupId:cops.groupId})// consumer instance 
 
 const cns = async()=>{
  try{
    await consumer.connect()// connectr the consumer
    console.log("consumer is connected")

    await consumer.subscribe({// subscribing to the topic 
      topic:'order-topic',// must be match with the producer
      fromBeginning:true 
    })
    await consumer.run({
      eachMessage:async({partition,message,topic})=>{
        try{
      const order = JSON.parse(message.value.toString())
      console.log('new order receive')
      console.log(`id:${order.id}`)
      console.log(` name:${order.name}`)
      console.log(`product:${order.product}`)
      }
      catch(error){
console.log("error in sending message")
      }
    }
  })
 }catch(error){
  console.log("consumer error")
 }
}
cns()