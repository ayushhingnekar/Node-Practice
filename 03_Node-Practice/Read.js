const http = require('http')

http.createServer((req, resp)=>{
    resp.write("<h1>For GitHub contribution</h1>")
    resp.end()
}).listen(4400)