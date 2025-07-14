const {Kafka} = require("kafkajs")

const kafka= new  Kafka({
    clientId:"dead-letter-log",
    brokers:['localhost:9093']
})

const consumer = kafka.consumer({groupId:"ded-grp"})

const main=async()=>{
    await consumer.connect()
    await consumer.subscribe({topic:"dead-letter",fromBeginning:true})

    await consumer.run({
        eachMessage:async({topic,message})=>{
            console.log(`fraud detection data`,JSON.parse(value.toString()))
        }
    })
}
main()