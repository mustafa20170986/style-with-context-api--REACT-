const{Kafka,CompressionTypes,logLevel} =require('kafkajs')

// kafak instance config 
 const kafka = new Kafka({
    clientId:"bank-appp2",
    brokers:["localhost:9093"],
    retry:{ //retry logic
        initialRetryTime:3000,//every 3000ms
        retries:10//plural
    },
    logLevel:logLevel.INFO
 })

 const producer =kafka.producer({
    allowAutoTopicCreatoin:false
 })


// block start 
 
const users = ['alice', 'bob', 'carol', 'dave'];

const sendBatch = async () => {
    const messages = [];

    for (let i = 0; i < 5; i++) {
        const from = users[Math.floor(Math.random() * users.length)];
        let to;
        do {
            to = users[Math.floor(Math.random() * users.length)];
        } while (to === from);

        const amount = Math.floor(Math.random() * 1000) + 1;

        messages.push({
            key:from,
            value:JSON.stringify({from,to,amount})
        })

        // blockj ends here 

        //this block simulate amount transfer 
    }
    await producer.send({//  sending the consumer data 
        topic:"bank_transfer",
        messages,
        acks:-1, // acknowledgement t( acknowledge by all)
        compressio:CompressionTypes.GZIP // gzip capital 
    })
    console.log("batch send",messages)
}
    const run = async()=>{ //run the service and simulate the dilay of 3 seconds 
        await producer.connect()
        setInterval(async ()=>{

        try{
await sendBatch()
        } 
        catch(error){
            console.log("error cauget",error)// if fail the send error
        }
    },3000)
}

run()