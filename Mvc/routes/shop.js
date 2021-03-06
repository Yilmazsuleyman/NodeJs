const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');
const errorsController = require('../controllers/errors');


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productid', shopController.getProduct);

router.get('/categories/:categoryid', shopController.getProductsByCategoryId);

router.get('/details', shopController.getProductDetails);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.use(errorsController.get404Page);

module.exports = router;