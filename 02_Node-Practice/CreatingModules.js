const http = require('http')
const userForm = require('./UserForm')

http.createServer((req, resp)=>{
    resp.writeHead(200, {"content-type":"text/html"})
    if(req.url == '/'){
        userForm(req, resp)
    } else if (req.url == '/submit') {
        resp.write('<h1>Form submitted</h1>')
        resp.write('<h1>Form has been submitted')
    }
    resp.end();
}).listen(3400)