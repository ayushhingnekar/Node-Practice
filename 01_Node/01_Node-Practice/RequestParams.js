const http = require('http');

http.createServer((req, resp) => {
    console.log(req.method);
    if (req.url == '/') {
        resp.write('<h1>Home Page</h1>')
    } 
    else if (req.url == '/login') {
        resp.write('<h1>Login Page<\h1>')
    } else if (req.url == '/about') {
        resp.write('<h1>About Page</h1>')
    } else {
        resp.write('The Page is not exist');
    }
    resp.end();
}).listen(5200)