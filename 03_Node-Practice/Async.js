const http = require('http')

http.createServer((req, resp)=>{
    resp.write("This is just for GitHub contribution")
    resp.end()
}).listen(2500)