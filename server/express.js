const express=require("express")
const app=express()
const path=require('path')
const fs=require('fs')
app.get('/api/data',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    fs.readFile(path.join(__dirname,'./data.json'),'utf8',(err,data)=>{
        if(err) throw err
        // console.log(data)
        res.send(data)
    })
    
})
app.listen(8066,()=>{
    console.log('http://127.0.0.1:8066/api/data')
})