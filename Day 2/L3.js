import http from 'http';
import {sum,diff,mul,div,mod,pow,sqrt} from './L1.js';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req, res) => {
    <style>
        background-color: lightblue;
    </style>
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>Sum: ${sum(1,2)}</h1>`);
        res.write(`<h1>Diff: ${diff(1,2)}</h1>`);
        res.write(`<h1>Mul: ${mul(1,2)}</h1>`);
        res.write(`<h1>Div: ${div(1,2)}</h1>`);
        res.write(`<h1>Mod: ${mod(1,2)}</h1>`);
        res.write(`<h1>Pow: ${pow(1,2)}</h1>`);
        res.write(`<h1>Sqrt: ${sqrt(4)}</h1>`);
        res.end();



});

const PORT = process.env.PORT || 7001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
