const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);
router.post('/', multer, productController.createProduct);
router.get('/:id', multer, productController.getOneProduct);

module.exports = router;
