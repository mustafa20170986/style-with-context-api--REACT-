const{Kafka} =require('kafkajs')

const db={
    users:{
        "emu":1000,
        "ftm":3500
    },
    history:[]
}
// initialize  kafka instance

const kafka = new Kafka({
    clientId:"bank-app",
    brokers:["localhost:9093"]
})

//init transaction  9producer will perform the transcation

const producer=kafka.producer({
    transactionalId:"bank-transaction" //every must have an transactional id
})

const main=async()=>{// main function 
    await producer.connect() // connect the producer
    const transaction=await producer.transaction() // trnsaction init for the producer

    try{// business logic
        const fromuser="emu"
        const touser="ftm"
        const amount= 500
        const txt="TX"+Date.now()
        if(db.users[fromuser]<amount){
            throw new Error("insufficient balance")
        }
        
        db.users[fromuser] -= amount;
        db.users[touser] += amount;
        db.history.push({txt, fromuser, amount});

        //send transaction to the consumer grps 
await transaction.send({
    topic:"send-success",
    messages:[
{value:JSON.stringify({fromuser,amount,msg:"fund trnasfared"})}
    ]
})

await transaction.send({
    topic:'fund-add',
    messages:[
        {value:JSON.stringify({touser,amount,msg:"fund hasbeen added"})}
    ]
})

await transaction.send({
    topic:"history",
    messages:[
        {value:JSON.stringify({txt,fromuser,touser,amount,msg:"history added"}) }
    ]
})

await transaction.commit()// after all trasaction make a commit to fininsh the transaction
console.log("transaction successfull")
    }
catch(error){
console.log("trnasction failed",error)
await transaction.abort()// if error cancel the transaction abort()
}
finally{
    await producer.disconnect()
}
}
main()
