// Middleware in Express.js is a function that runs before the final route handler
// It runs before the request or before completing the request

const express = require('express');
const app = express();

// function middleWare(req, resp, next){
//     console.log("User is trying to access " + req.url + " Page");
//     next();
// }
// app.use(middleWare)


// Can write above type and below type also


app.use((req, resp, next)=>{
    console.log("User is trying to access " + req.url + " Page");
    next();                                                                      // Helps to stop reloading
})

app.get("/",(req, resp)=>{
    resp.send("<h1>Home Page</h1>")
})

app.get("/users",(req, resp)=>{
    resp.send("<h1>Users Page</h1>")
})

app.get("/products", (req, resp)=>{
    resp.send("<h1>Products Page")
})

app.listen(3000)