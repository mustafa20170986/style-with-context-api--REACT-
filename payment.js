const{Kafka}= require('kafkajs')

const kafka = new Kafka({
    clientId:'payment-serv',
    brokers:['localhost:9092']
})

const consumer= kafka.consumer({
    groupId:'payment-grp',
    autoCommit:true
})
try{
    const run= async()=>{
        await consumer.connect()
        console.log("payment service is connected")
        await consumer.subscribe({
            topic:'payment',
            fromBeginning:true
        })
        await consumer.run({
            eachMessage:async ({topic,partition,message})=>{
                  console.log(`💰 [${topic}] partition ${partition} -`, JSON.parse(message.value.toString()));
      console.log(`✅ At-least-once: committing offset.`);
       await consumer.commitOffsets([
        { topic, partition, offset: (Number(message.offset) + 1).toString() }
      ]);
            }
        })
    }
    run()
} catch(error){
    console.log("error in payment service",error)
}