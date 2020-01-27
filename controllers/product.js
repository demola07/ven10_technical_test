const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({
    id: req.params.id
  })
    .then(product => {
      res.status(200).json(product);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
};

exports.createProduct = (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    color: req.body.color,
    productImage: req.file.path
  });

  product
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Product saved successfully'
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};
