const {Kafka} =require ("kafkajs")
// configure the kafka 
const kafkaconfig={
  clientId:"emu",// client id for loggin 
  brokers:['localhost:9092'],// thats where the messages are store 
  connectionTimeout:3000,// if idle for 3000s then go to sleep
  retry:{// if fail try 5 times
    retries:5
  }
}

const orders= [// dummy database
  {id:1,name:"emu",product:"samusng galaxy s23 ultra"},
  {id:2,name:"oni",product:"iphone 14 pro"}
]
//configure the producer 
const pdr=async()=>{
  const kafka= new Kafka(kafkaconfig)//wrap kafka config
  const producer =kafka.producer() //defining the producer . its the syntax dont chnage it 
  try{// for error handling try cactch
    await producer.connect()// wait producer to connect

    for(const order of orders){// iteraet the array 
     const message={// message
      key:String(order.id),
      value:JSON.stringify(order)
    }
    await producer.send({//send the message 
      topic:'order-topic',// this must be match with the subscribe in consumer 
      messages:[message]// sending the message
    })
    console.log(` thank you ${order.name} for purchasing ${order.product}`)
  }
  await producer.disconnect()// disconnnect after sending message
}
catch(error){
console.log("kafka error encounterd")
}
}
pdr()// function recall to run the programm