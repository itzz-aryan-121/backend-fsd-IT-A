import http from 'http';
import fs from 'fs';
import dotenv from 'dotenv';
import { sum, diff, mul, div, mod, pow, sqrt } from './L1.js';

dotenv.config();

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        // Replace placeholders with actual values
        data = data.replace('${sum(1, 2)}', sum(1, 2));
        data = data.replace('${diff(1, 2)}', diff(1, 2));
        data = data.replace('${mul(1, 2)}', mul(1, 2));
        data = data.replace('${div(1, 2)}', div(1, 2));
        data = data.replace('${mod(1, 2)}', mod(1, 2));
        data = data.replace('${pow(1, 2)}', pow(1, 2));
        data = data.replace('${sqrt(4)}', sqrt(4));

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});