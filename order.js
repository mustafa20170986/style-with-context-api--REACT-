const{Kafka}= require('kafkajs')

const kafka = new Kafka({
    clientId:'order-serv',
    brokers:['localhost:9092']
})
const consumer = kafka.consumer({
    groupId:'order-grp',// who is consuming the message
    autoCommit:false
})

const run = async()=>{
    try{
    await consumer.connect()
    console.log("consumer is connectd")
    await consumer.subscribe({topic:'order',fromBeginning:true})

    await consumer.run({
        eachMessage: async({topic,partition,message})=>{
 console.log(` [${topic}] partition ${partition} -`, JSON.parse(message.value.toString()));
      console.log(`⚠ At-most-once: not committing offset.`);
        }
})

}
 catch(error){
    console.log('order consumer error encounetred',error)
}
}
run()