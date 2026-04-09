// Need to install Morgan from official site
// It is already built-in
// You just have to install and use

const express = require('express')
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))

app.get("", (req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get("/users", (req, resp)=>{
    resp.send("<h1>Users Page</h1>")
})

app.get("/login", (req, resp)=>{
    resp.send("<h1>Login Page</h1>")
})

app.listen(3700)