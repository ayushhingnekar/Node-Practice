const http = require('http');

http.createServer((req, resp)=>{
    resp.setHeader('Content-Type','text/html');                         // It helps to show html tags/element
    resp.write(`
        <html>
            <head>
                <title>Second Server</title>
            </head>
            <body>
                <h3>All content is in backticks</h3>
                <h1>This content is in proper html format</h1>
                <h3>`+new Date+`</h3>
            </body>
        </html>
        `);
    resp.end();
    process.exit()                                                      // It exits the server
}).listen(4300);