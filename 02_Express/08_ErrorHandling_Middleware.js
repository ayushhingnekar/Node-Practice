const express = require('express')
const app = express();

app.get('', (req, resp)=>{
    resp.send('<h1>Home Page</h1>')
})

app.get('/users', (req, resp)=>{
    resp.send('<h1>Users Page</h1>')
})

app.get('/error', (req, resp, next)=>{
    const error = new Error('')
    error.status = 404;
    next(error)
})

app.use((error, req, resp, next)=>{
    resp.status(error.status || 500).send('Try after some time')
})

app.listen(3800)