import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/home'){
        res.write('<h1>Home Page</h1>');
    }
    else if(req.url === '/about'){
        res.write('<h1>About Page</h1>');
    }
    else if(req.url === '/contact'){
        res.write('<h1>Contact Page</h1>');
    }
    else{
        res.write('<h1>404 Page Not Found</h1>');
    }
});


server.listen(7002, () => {
    console.log('Server is running on port 7002');
});