const request =require("supertest")
const bcrypt =require("bcryptjs")
const emu =require('./pserv.js')
const users = require('./puser.js')

const email='emu2017@gmail.com'//email  for testing
const password ='i love you emu'// password for testin 

describe('auth routes',()=>{
let agent
beforeAll(()=>{
    agent=request.agent(emu)
})


it('dexcribe login routes',async()=>{ ///testing login route 
    const res= await agent// wait to purse cookie 
    .post('/login')// send request ton login route 
    .send({// send request body wih credentials
        email,password
    })
    expect(res.statusCode).toBe(200)//expect
expect(res.body).toHaveProperty('msg')//expect body
    expect(res.headers['set-cookie']).toBeDefined()//if headers contain cookie
})

//testing dash route (protected)
it('dashboard',async()=>{
    const res =await agent// wait to persue cookie 
    .get('/dash')// get request to dash
    expect(res.statusCode).toBe(200)//expect code 
    expect(res.body).toHaveProperty('msg')// ecpect body should contain msg
})
})
