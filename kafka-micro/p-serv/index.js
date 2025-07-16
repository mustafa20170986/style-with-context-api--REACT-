const express = require('express');
const { Kafka } = require('kafkajs');

const app = express();
app.use(express.json());

//kafka config 
const kafka = new Kafka({
  clientId: "producer-app",
  brokers: ["localhost:9093"]
});
//transactional id for consistency and transaction
const producer = kafka.producer({ transactionalId: "txn-producer" });

const db = { //in memory db
  users: { emu: 500, ftm: 1500, nha: 3500, smy: 8000 },
  history: []
};

async function init() { //async function to handle the transaction with post request
  await producer.connect();

  //request handler 
  app.post('/transfer', async (req, res) => {
    const { fromuser, touser, amount } = req.body;
    const txid = `txid-${Date.now()}`;

    const txn = await producer.transaction(); //take the transaction in a variable 

    try { // business logic in try cath block 
      if (!db.users[fromuser] || !db.users[touser]) {
        throw new Error("Invalid user(s)");
      }
      if (db.users[fromuser] < amount) {
        throw new Error("Insufficient funds");
      }

      db.users[fromuser] -= amount;
      db.users[touser] += amount;
      db.history.push({ fromuser, touser, amount, txid }); 

      await txn.send({// send the transaction to the topic
        topic: "bank-transfers",
        messages: [ // also send the message as  json fromate
          { value: JSON.stringify({ fromuser, touser, amount, txid }) }
        ]
      });

      await txn.commit(); //commit the message
      return res.json({ message: "Transaction complete", txid }); // return the result 

    } catch (err) { //  for catching error 
      await txn.abort(); // reject teh trans action
      console.error("Transaction failed:", err.message);
      return res.status(400).json({ error: err.message });
    }
  });

  app.listen(3000, () => {
    console.log("Producer service running on port 3000");
  });
}

init().catch(console.error);
