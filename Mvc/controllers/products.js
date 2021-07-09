const Product  = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.getAllProducts();
    res.render('index', {title: "Homepage", products: products, path: '/'});
}


exports.getAddProduct = (req, res, next) => {
    console.log(req.body);
    res.render('add-product', {title: "Add Product", path: '/admin/add-product'});
}

exports.postAddProduct = (req, res, next)=>{
    console.log(req.body);
    const product = new Product( req.body.name,  req.body.price, req.body.imageUrl, req.body.desc);
    product.saveProduct();


    res.redirect('/');
}