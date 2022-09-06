const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log('Received notification: ' + body);
        res.end('ok');
    });
});

server.listen(port, () => {
    console.log(`Server running  on ${port}/`);
});
