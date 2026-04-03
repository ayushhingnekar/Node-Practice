const http = require('http')

http.createServer((req, resp)=>{
    resp.write("This is just for the only GitHub contribution")
    resp.end()
}).listen(2600)