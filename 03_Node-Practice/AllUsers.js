const http = require('http')

http.createServer((req, resp)=>{
    resp.write("<h1>This is for GitHub contribution</h1>")
    resp.end()
}).listen(4200)