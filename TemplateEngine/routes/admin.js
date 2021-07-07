const express = require('express');
const router = express.Router();

const products = [
    {name: 'Samsung S8', price: 3000, image:'phone.jpg', description: 'Sonsuz Ekran, Galaxy S8 ve S8+’ın lansmanı, akıllı telefon ekranının sınırlarını kırarak, telefonların tasarlanma şeklinde çığır açmıştır. Bu tek elde kolaylıkla tutulan büyüleyici, sürükleyici bir ekranın başlangıcıdır. '},
    {name: 'Samsung S9', price: 5000, image:'phone.jpg', description: 'yeni telefon'},
    {name: 'Samsung S7', price: 2000, image:'phone.jpg', description: 'eski telefon'},
    {name: 'Samsung Note 5', price: 2500, image:'phone.jpg', description: 'eski ve farklı telefon'}

]

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title: "Add Product"});
});

router.post('/add-product', (req, res, next)=>{
    console.log(req.body);

    products.push({name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.desc});

    res.redirect('/');
})

exports.routes= router;
exports.products = products;