import http from 'http';

const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/getdata'){
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'Data received', data: JSON.parse(data) }));
        });
        
    }else{
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end('Method Not Allowed');
    }


});

server.listen(7002, () => {
    console.log('Server is running on port 7002');
});