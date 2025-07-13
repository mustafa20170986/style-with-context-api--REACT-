const {Kafka} =require("kafkajs")

const kafka = new Kafka({
    clientId:"fund-ad",
    brokers:['localhost:9093']
})

const consumer= kafka.consumer({groupId:"fund-add-grp"})

const main =async()=>{
    await consumer.connect()
    await consumer.subscribe({topic:"fund-add",fromBeginning:true})

    await consumer.run({
        eachMessage:async({topic,partition,message})=>{
            const data = JSON.parse(message.value.toString())
            console.log(`[${topic}] send notify: `,data)
        }
    })
}
main()