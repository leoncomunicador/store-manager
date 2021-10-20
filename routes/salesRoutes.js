const router = require('express').Router();
const rescue = require('express-rescue');
const salesMiddleware = require('../middlewares/validationSales');
const salesController = require('../controllers/salesController');

router.get('/:id', salesMiddleware.isSaleIdValid, rescue(salesController.listSalesById));

router.get('/', rescue(salesController.listSales));

router.post('/', salesMiddleware.validateSales, rescue(salesController.createSale));

router.put('/:id', salesMiddleware.updateSale, rescue(salesController.updateSale));

router.delete('/:id', salesMiddleware.verifyExistSale, rescue(salesController.deleteOneSale));

module.exports = router;
