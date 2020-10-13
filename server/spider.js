const superagent = require('superagent')
const fs=require('fs')
const path=require('path')
// const cheerio=require('cheerio')
const url="https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign"
superagent.get(url).then(res=>{
    // node获取的是http文本，解析里面的text，再返回
    //  console.log(JSON.parse(res.text).data)
    fs.writeFile(path.join(__dirname,'./data.json'),JSON.parse(res.text).data,err=>{
        if(err) throw err
        console.log('success')
    })
}).catch(err=>{
    throw err
})

