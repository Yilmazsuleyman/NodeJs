const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const admin = require('./routes/admin');
const userRoutes = require('./routes/user');

// app.get('/', (req, res)=>{
//     res.send('Hello World');
// });
// app.get('/api/products', (req, res)=>{
//     res.send('ürünler listelendi.');
// });


//      Middleware

// app.use((req, res, next) => {
//     console.log("Middleware 1 çalıştırıldı.");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("Middleware 2 çalıştırıldı.");
//     res.send("Middleware deneme");
// });


//      Routing 
// sıralama önemli!!

// app.use('/',(req, res, next) => {
//     console.log("Loglama yapıldı.");
//     next();
// });


//pug kurulum
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//route işlemleri
app.use('/admin', admin.routes);
app.use(userRoutes);












app.listen(3000, () => {
    console.log('listening on port 3000');
});