const{Kafka}= require("kafkajs")

const kafka = new Kafka({
    clientId:"transaction-app",
    brokers:['localhost:9093']
})

const admin = kafka.admin() 

const main= async()=>{
    await admin.connect()

await admin.createTopics({
    topics:[ // create topics with replicaction factor and partitions
        {
        topic:"bank-transaction",
        numPartitions:3, //plural (s)
        replicationFactor:2
    },
{
        topic:"dead-letter",
        numPartitons:3, //plural (s)
        replicationFactor:2
    }
]
})
console.log("topic created")
await admin.disconnect()
}
main()