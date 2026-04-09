// There is two Built-in Moudlesin Expressjs
const express = require('express')
const app = express();

app.get("", (req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.use(express.urlencoded({extended:false}))                           // Built-in Module of Middleware
// app.use(express.static('public'))                                    // This is 2nd Built-in Module 
app.get("/login", (req, resp)=>{
    resp.send(`
        <form action='/submit' method='post'>
            <input type='text' placeholder='Enter your email' />
            <input type='text' placeholder='Enter your password' />
            <button>Submit</button>
        </form>
        `)
})

app.post("/submit", (req, resp)=>{
    console.log(req.body);
    resp.send("<h1>Submit Page</h1>")
})

app.get("/users", (req, resp)=>{
    resp.send("<h1>Users Page</h1>")
})

app.listen(3600)