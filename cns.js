const {Kafka, CompressionTypes} = require("kafkajs")

//kafka instance config 
const kafka = new Kafka({
  clientId:"trans-consumer",
  brokers:["localhost:9093"]
}) 


const consumer = kafka.consumer({groupId:"cons-grp1"})

const deadletter= kafka.producer() //init the dead letter prodcuer 

const run =async()=>{
  await consumer.connect() //connnect the consumer 
  await deadletter.connect() // cnnncet the consnumer (as a dead letter)

  await consumer.subscribe({topic:"bank_transfer",fromBeginning:true}) // subscribe to the topic

  await consumer.run({
    eachBatch:async({batch,resolveOffset,heartbeat})=>{ // this is a batch processing for each ,message processing 
      console.log("batch processing message")
    
    for(const message of batch.messages){
      const data=JSON.parse(message.value.toString())
      console.log(`transaction data`,data)


      if(data.amount>500){ // if the amaount i sgreater tghan 500 then  sedn a fraud alert
        console.log("fraud detected")

        await deadletter.send({ //send  the p;roblamitc message kin the dead ltetter topic 
        topic:"deadletter", // the topic wwhere the dead letter will be sent 
        messages:[{value:JSON.stringify(data)}], 
        compression:CompressionTypes.GZIP // compress the messgae for efficincy 
        })
      }
      resolveOffset(message.offset)
      await heartbeat()
    }
  }
})
}
run()
