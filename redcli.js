const redis = require("redis")

const client = redis.createClient()

async function redcli(){
  if(!client.isOpen){
   await client.connect()
  }
}
module.exports = {redcli,client}