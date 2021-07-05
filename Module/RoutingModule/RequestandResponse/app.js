const http = require('http');
const routes = require('../app');
/*
const server = http.createServer((req, res)=>{
    /*

        Kendimiz her hangi bir metin döndürmek istediğimizde yaptıklarımız.

    
    //res.setHeader('Content-Type', 'text/plain');
    //res.setHeader('Content-Type', 'application/json');
   /* res.setHeader('Content-Type', 'text/html');

    res.statusCode = 200;
    res.statusMessage = 'Okey';

    //res.write(JSON.stringify({name: 'Samsung', price: 5000}));
    res.write('<html>');
    res.write('<head><title> My First Page</title></head>');
    res.write('<body>Hello World from node server</body>');
    res.write('</html>');

    res.end();


    /*

        Bir sayfa döndürmek istediğimizde yaptıklarımız.

    
/*
    fs.readFile('index.html', function(error, file){
        if(error){
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 404;
            res.statusMessage = 'Not Found';
            res.end('Dosya bulunamadı.');
        }
        else{
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'Okey';
            res.end(file);
        }
    });



    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile('sendMessage.html', function(error, file){
            if(error){
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 404;
                res.statusMessage = 'Not Found';
                res.end('Dosya bulunamadı.');
            }
            else{
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 200;
                res.statusMessage = 'Okey';
                res.end(file);
            }
        })
    }
    if(url === '/log' && method === ' POST'){
        fs.appendFileSync('message.txt', 'deneme');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }


});
*/
// server.on('connection', function(){
//     console.log('new connection...');
// });

const server = http.createServer(routes);

server.listen(3000);
console.log('Listening port on 3000...');

//Onay ve Hata durumlarının kontrolü ve gösterimi



