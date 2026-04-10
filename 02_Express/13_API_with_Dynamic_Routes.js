const express = require('express')
const app = express();
const data = require('./users.json');

app.get("", (req, resp)=>{
    // console.log(data);
    resp.json(data)
})

app.get("/user/:id", (req, resp)=>{
    const id = req.params.id;
    let filteredData = data.filter((user)=>user.id==id)

    resp.send(filteredData)
})

app.get("/username/:name", (req, resp)=>{
    const name = req.params.name;
    let filteredData = data.filter((username)=>username.name==name)

    resp.send(filteredData)
})

app.get("/userage/:age", (req, resp)=>{
    const age = req.params.age;
    let filteredData = data.filter((userage)=>userage.age==age)

    resp.send(filteredData)
})

app.listen(4300)