const http = require('http');

const usersData = [
    {
        name: 'sam',
        age: 23,
        email: 'sam@test.com'
    },
    {
        name: 'Peter',
        age: 21,
        email: 'peter@test.com'
    },
    {
        name: 'mark',
        age: 26,
        email: 'mark@test.com'
    },
    {
        name: 'John',
        age: 25,
        email: 'john@test.com'
    }
]

http.createServer((req, resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(usersData))
    resp.end();
}).listen(4500)