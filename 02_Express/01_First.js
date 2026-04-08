const express = require('express');
                                                                    // Express does not overrides the same route it keeps first route
// const express = require('express')()                             // Can write this type also if don't have to write next line

const app = express();                                              // Can give any name instead of app

app.get("",(req, resp)=>{                                           // This is Home Page
    resp.send("<h1>This is first Expressjs Program</h1>")
})

app.get("/about",(req, resp)=>{
    resp.send("<h1>This is about page</h1>")
})

app.get("/contact",(req, resp)=>{
    resp.send("<h1>This is contact page</h1>")
})

app.listen(3100)