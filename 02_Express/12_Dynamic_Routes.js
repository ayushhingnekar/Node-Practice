const express = require('express')
const app = express();

app.get("/", (req, resp)=>{
    const users = ["anil", "sam", "peter", "mark", "katy"];
    let data = `<uL>`;
    for(let i=0; i<users.length; i++){
        data += `<li><a href="user/${users[i]}">${users[i]}</a></li>`
        // console.log(users[i]);
    }
    data += `</ul>`
    resp.send(data)
})

app.get("/user/:name", (req, resp)=>{
    console.log(req.params.name);
    const userName = req.params.name
    resp.send(`<h1>This is ${userName}'s profile page</h1>`)
})

app.listen(4200)