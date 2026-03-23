// Creating server in Node

const http = require('http');

http.createServer((req, resp)=>{
    resp.write('<h1>This is write response</h1>')
    resp.end('This is end response');                           // '.end' It needs to close the server else it alsways reloads the browser
}).listen(4200);