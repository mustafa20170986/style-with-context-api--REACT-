const{Kafka} = require('kafkajs')
 
const kafka = new Kafka({ // creating client
    clientId:"audit-log",
    brokers:["localhost:9092"]
})

const consumer= kafka.consumer({ // creating consumer
    groupId:"audit-grp",
    autoCommit:false 
})
const processed = new Set() // track the alredy proceessed message  
    const run = async()=>{
         try{
        await consumer.connect()
        console.log("audit is connected")
        await consumer.subscribe({topic:'order',fromBeginning:true}), // subscribe to topics
        await consumer.subscribe({topic:'payment',fromBeginning:true})
    
    await consumer.run({
        eachMessage:async({topic,partition,message})=>{// start consuming
            const data = message.value.toString();
      if (!processed.has(data)) {
        processed.add(data);
        console.log(`🔍 [${topic}] ${data} - processed exactly-once simulation.`);
      } else {
        console.log(`♻️ Duplicate detected, ignoring.`);
      }
      await consumer.commitOffsets([ // this handle he manual commit 
        //for restart and rebalnalce so that itn wont show same data again
        {topic,partition,offset:(Number(message.offset)+1).toString()}
      ])
        }
    })
  
 }
 catch(error){
    console.log("error in audit",error)
 }  }
 run()