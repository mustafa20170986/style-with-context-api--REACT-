const{Kafka}= require("kafkajs")

const kafka= new Kafka({
clientId:"history-consumer",
brokers:['localhost:9093']
})

const consumer = kafka.consumer({
    groupId:'history-grp'
})

const main=async()=>{
    await consumer.connect()
    await consumer.subscribe({topic:"history",fromBeginning:true})

    await consumer.run({
        eachMessage:async({topic,partition,message})=>{
const data= JSON.parse(message.value.toString())
console.log(`[${topic}] send notification: `, data)
    }
})
}
main()