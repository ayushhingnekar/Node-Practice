const http = require('http')
// const fd = require('fs')

http.createServer((req, resp)=>{
    resp.writeHead(200, {"content-type":"text/html"})
    if(req.url == '/') {
        resp.write(`
            <form action="/submit" method="post">
                <input type='text' placeholder='Enter your name'>
                <input type='password' placeholder='Enter your password'>
                <button>Submit</button>
            </form>
            `)
        }
        else if(req.url == '/submit') {
            resp.write("<h1>Form Submitted</h1>")
        }
        
    resp.end()
}).listen(3200)
