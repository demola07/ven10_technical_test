const express = require('express');
const router = express.Router();
// const multer = require('../middleware/multer-config');
const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getOneProduct);

module.exports = router;
