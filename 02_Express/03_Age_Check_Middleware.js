const express = require('express');
const app = express();

function ageCheck(req, resp, next){
    if(!req.query.age || req.query.age<18){                                             // Whatever we pass in the address that is query
        resp.send("<h1>Alert! You are not allowed to access this website</h1>")
    } else {
        next();
    }
}
app.use(ageCheck)


app.get("", (req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get("/login", (req, resp)=>{
    resp.send("<h1>Login Page</h1>")
})

app.get("/admin", (req, resp)=>{
    resp.send("<h1>Admin Page</h1>")
})

app.listen(3300)