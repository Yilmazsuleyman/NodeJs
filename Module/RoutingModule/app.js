const qs = require('querystring');
const fs = require('fs');

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('sendMessage.html', function (error, file) {
            if (error) {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 404;
                res.statusMessage = 'Not Found';
                res.end('Dosya bulunamadı.');
            }
            else {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 200;
                res.statusMessage = 'Okey';
                return res.end(file);
            }
        });
    }
    if (url === '/log' && method === ' POST') {
        fs.appendFileSync('message.txt', 'deneme');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}
module.exports = routeHandler;

