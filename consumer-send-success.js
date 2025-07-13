const{Kafka} = require("kafkajs")

const kafka= new Kafka({//init kafka instance
    clientId:"consumer-grp",
    brokers:['localhost:9093']
})

const consumer= kafka.consumer({groupId:"consumer-send"})//group by kafka consumer

const main=async()=>{
    await consumer.connect()
    await consumer.subscribe({topic:"send-success",fromBeginning:true})// subscribe to the topic for listening events

    await consumer.run({// run the function 
        eachMessage:async({topic,partition,message})=>{
            const data= JSON.parse(message.value.toString())
            console.log(`[${topic}] send notify:`, data)
        }
    })
}
main()