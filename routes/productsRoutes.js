const router = require('express').Router();
const rescue = require('express-rescue');
const productsController = require('../controllers/productsController');
const productMiddleware = require('../middlewares/validationProducts');

router.get(
  '/:id',
  productMiddleware.isIdValid,
  rescue(productsController.listProductById),
);

router.get('/', rescue(productsController.listProducts));

router.post(
  '/',
  productMiddleware.validateProducts,
  rescue(productsController.createProduct),
);

router.put(
  '/:id',
  productMiddleware.updateProducts,
  rescue(productsController.updateProduct),
);

router.delete('/:id',
  productMiddleware.deleteProduct,
  rescue(productsController.deleteProduct));

module.exports = router;