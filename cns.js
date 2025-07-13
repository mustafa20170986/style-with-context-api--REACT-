const{Kafka} = require("kafkajs")

//this is the pipeline between the producer and all cosumer 

const kafka = new Kafka({
  clientId:"consusmergrp",
  brokers:["localhost:9093"]
})

const consumer = kafka.consumer({groupId:"consumer-grp"})

const main=async()=>{
  await consumer.connect()

  await consumer.subscribe({topic:"send-success",fromBeginning:true})
  await consumer.subscribe({topic:"fund-add",fromBeginning:true})
  await consumer.subscribe({topic:"history",fromBeginning:true})
    await consumer.run({
        eachMessage: async ({ topic, message }) => {
            console.log(`[${topic}] ${message.value.toString()}`);
        }
    });
}
main()