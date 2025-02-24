import http from 'http';
let users = []
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.url === '/setdata' && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => {
            data += chunk.toString();
        });
        req.on('end', () => {
            users.push(JSON.parse(data));
            res.end('Data received');
        });
    }else{
        if(req.url === '/getdata' && req.method === 'GET'){
            res.end(JSON.stringify(users));
        }

        else{
            res.end('Invalid Request');
        }
    }
});

server.listen(7002, () => {
    console.log('Server is running on port 7002');
});


// import http from 'http';

// const users = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Doe' }
// ];

// const server = http.createServer((req, res) => {
//     if (req.url === '/setdata' && req.method === 'POST') {
//         const data = JSON.stringify(users);

//         const options = {
//             hostname: '172.16.41.164',
//             port: 80,
//             path: '/receiveData',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Length': data.length
//             }
//         };

//         const request = http.request(options, (response) => {
//             let responseData = '';

//             response.on('data', (chunk) => {
//                 responseData += chunk;
//             });

//             response.on('end', () => {
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 res.end(responseData);
//             });
//         });

//         request.on('error', (error) => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Error sending data');
//         });

//         request.write(data);
//         request.end();
//     } else {
//         res.writeHead(400, { 'Content-Type': 'text/plain' });
//         res.end('Invalid Request');
//     }
// });

// server.listen(7002, () => {
//     console.log('Server is running on port 7002');
// });