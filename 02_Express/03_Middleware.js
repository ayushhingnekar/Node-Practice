const express = require('express');
const app = express();

app.get("", (req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get("/login", (req, resp)=>{
    resp.send("<h1>Login Page</h1>")
})

app.get("/admin", (req, resp)=>{
    resp.send("<h1>Admin Page</h1>")
})

app.listen(3100)