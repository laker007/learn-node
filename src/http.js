const http = require('http');
const fs= require('fs');

http.createServer(function (req, res) {
    res.writeHead(200);
    // res.end('hello');
    fs.createReadStream(__dirname+ '/index.html').pipe(res);
}).listen(3000)