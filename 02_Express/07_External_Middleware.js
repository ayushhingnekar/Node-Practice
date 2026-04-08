const express = require('express')
const app = express();

app.get("", (req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get("/users", (req, resp)=>{
    resp.send("<h1>Users Page</h1>")
})

app.listen(3700)

// Keeping this pending for tomorrow