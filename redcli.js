// redcli.js
const redis = require("redis");
const client = redis.createClient();

client.on('error', (err) => {// if there is an error 
  console.error('Redis client error:', err);
});

async function connect() {// if not error then
  if (!client.isOpen) {//if the client is not open 
    await client.connect();// connect the client 
    console.log("Redis connected");
  }
}

module.exports = { client, connect };
