import http from 'http';
import fs from 'fs/promises';


const DATA_FILE = 'data.json';

const readData = async () => {
    try {
        const fileData = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(fileData);
    } catch (err) {
        return [];
    }
};


const writeData = async (data) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};


const server = http.createServer(async (req, res) => {
    

    if (req.method === 'GET' && req.url === '/data') {
        try {
            const data = await readData();
            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify(data));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading data');
        }
    } 
    else if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const newData = JSON.parse(body);
                const existingData = await readData();
                existingData.push(newData);
                await writeData(existingData);

                res.writeHead(201, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                res.end(JSON.stringify({ message: 'Data saved successfully' }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON data');
            }
        });

        req.on('error', () => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        });
    } 
     
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const PORT = 7002;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
