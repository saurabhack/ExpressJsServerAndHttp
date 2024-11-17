import express from "express"
const app=express()

app.get("/",(req,res)=>{
    res.send("hello world from Reactjs")
})
app.listen(3000,()=>{
    console.log("server is listining on the port of = http://localhost:3000")
})
