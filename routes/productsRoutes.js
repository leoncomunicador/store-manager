// Em implantação

// const router = require('express').Router();
// const rescue = require('express-rescue');
// const productsController = require('../controllers/productsController');
// const productMiddleware = require('../middlewares/validationProducts');

// router.get(
//   '/products/:id',
//   productMiddleware.isIdValid,
//   rescue(productsController.listProductById),
// );

// router.get('/products', rescue(productsController.listProducts));

// router.post(
//   '/products',
//   productMiddleware.validateProducts,
//   rescue(productsController.createProduct),
// );

// router.put(
//   '/products/:id',
//   productMiddleware.updateProducts,
//   rescue(productsController.updateProduct),
// );

// router.delete('/products/:id',
//   productMiddleware.deleteProduct,
//   rescue(productsController.deleteProduct));

// module.exports = router;