const {Kafka} = require('kafkajs')

const kafka= new Kafka({
    clientId:'admin-kafka',// can be use for log monitoring
    brokers:['localhost:9092']
})

const admin= kafka.admin()//make this admin 


    const run = async()=>{
        try{
        await admin.connect()
        console.log("admn is connected")
// dynamic creation of topic and partition  with replication factor 
        await admin.createTopics({//Topics plural     
            topics:[// topics plural
                {topic:"order",numPartitions:2,replicationFactor:1},
                {topic:"payment",numPartitions:2,replicationFactor:1}
            ]
        })
         console.log("topics are created")
        await admin.disconnect()  
}
catch(error){
    console.log("error occoured")
}
    }
run()
