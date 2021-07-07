const express = require('express');
const router = express.Router();


const admin = require('./admin');

router.get('/', (req, res, next) => {

    res.render('index', {title: "Homepage", products: admin.products, path: '/'});
});
router.use((req, res)=>{
    res.status(404).render('404', {title: "404 Page"});
});

module.exports = router;