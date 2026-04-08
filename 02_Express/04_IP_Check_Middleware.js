const express = require('express')
const app = express();

function ipCheck(req, resp, next){
    const ip = req.socket.remoteAddress
    console.log(ip);
    if(ip.includes('192.168.1.59')) {
        resp.send("<h1>Alert! You are not allowed to access this page</h1>")
    } else {
        next();
    }
}
app.use(ipCheck)


app.get("", (req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get("/login", (req, resp)=>{
    resp.send("<h1>Login Page</h1>")
})

app.get("/admin", (req, resp)=>{
    resp.send("<h1>Admin Page</h1>")
})

app.listen(3400)