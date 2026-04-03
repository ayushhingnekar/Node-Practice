const http = require('http')

http.createServer((req, resp)=>{
    resp.write("This is just only for GitHub contribution")
    resp.end()
}).listen(2600)