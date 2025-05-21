const {client}= require('./redcli.js')

async function crs(userid,sessionid,data,ttl=900){//create session
await client.set(`sess:${userid}`,sessionid,{EX:ttl})//store the session
await client.set(`sessdata:${sessionid}`,JSON.stringify(data),{EX:ttl})
}

async function vldses(userid,sessionid){//validate the session
  const stored =await client.get(`sess:${userid}`)
  return stored === sessionid
}

async function delses(userid,sessionid){//function to delete the session 
  await client.del(`sess:${userid}`)
  await client.del(`sessdata:${sessionid}`)
}

module.exports={
  crs,vldses,delses
}