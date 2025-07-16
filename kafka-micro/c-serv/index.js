// consumer service 

const { Kafka } = require('kafkajs');

// kafka instance config 
const kafka = new Kafka({
  clientId: "consumer-app",
  brokers: ["localhost:9093"]
});

const consumer = kafka.consumer({ groupId: 'transaction-consumers' });

async function run() { 
  await consumer.connect(); //connncet the consumer 
  await consumer.subscribe({ topic: 'bank-transfers', fromBeginning: true }); //subscribe to the topic 

  await consumer.run({ //run the consuemr for each message  
    eachMessage: async ({ topic, message }) => {
      const decoded = JSON.parse(message.value.toString());//parse the message value as json to string
      console.log("Transaction processed:", decoded);
    }
  });
}

run().catch(console.error);
