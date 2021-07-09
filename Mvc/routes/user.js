const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const errorsController = require('../controllers/errors');


router.get('/', productsController.getProducts);

router.use(errorsController.get404Page);

module.exports = router;