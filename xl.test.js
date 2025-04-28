const request =require('supertest')
const emu = require('./srv.js')

describe("jwt auth flow",()=>{
    let accesstoken
    let refreshtoken
    it("should get login and return tokens",async()=>{
const res = await request(emu).post("/login").send({
"name":"emu",
"password":"sha-256"
})
expect(res.statusCode).toBe(200)
expect(res.body).toHaveProperty("atk")
expect(res.body).toHaveProperty("rr")

accesstoken =res.body.atk
refreshtoken =res.body.rr
})
it("should validate access token",async()=>{
    const res = await request(emu)
    .get("/dash")
    .set("Authorization",`Bearer ${accesstoken}`)
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("msg")
    accesstoken = res.body.newac
})
it("should revoke refresh token",async()=>{
    const res = await request(emu)
    .post("/logout").send({
        rftk:refreshtoken
    })
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("msg")
})
it("should faile to revoke token",async()=>{
    const res = await request(emu)
    .post("/refresh").send({
        rftk:refreshtoken
    })
    expect(res.statusCode).toBe(403)
    expect(res.body).toHaveProperty("msg")
})

    })