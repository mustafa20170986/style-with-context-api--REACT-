// kafka-admin/create-topics.js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({ //let kafka to create topics
  clientId: 'admin-client',
  brokers: ['localhost:9093'],
});

const admin = kafka.admin(); //make kafak as admin

async function run() {
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: 'bank-transfers',
        numPartitions: 3, 
        replicationFactor: 2,
      },
    ],
  });
  console.log('Topics created!');
  await admin.disconnect();
}

run().catch(console.error);
