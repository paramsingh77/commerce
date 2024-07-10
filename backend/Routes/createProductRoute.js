const express = require('express');

const {
    addProductToStock,
    deleteProduct
} = require('../controllers/Product');

const router = express.Router();

router.post("/",addProductToStock);
router.post("/delete/",deleteProduct);

module.exports = router;