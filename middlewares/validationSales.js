const salesService = require('../services/salesService');

const registrationSale = (req, res, next) => {
  const { quantity } = req.body[0];
  if (quantity <= 0) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
    });
  }
  next();
};

const isValidQuantity = (req, res, next) => {
  const { quantity } = req.body[0];
  if (typeof quantity === 'string') {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
    });
  }
  next();
};

const isSaleIdValid = async (req, res, next) => {
  const { id } = req.params;
  const existsSale = await salesService.listSaleById(id);
  if (+id.length !== 24 || !existsSale) {
    return res.status(404).json({
      err: { code: 'not_found', message: 'Sale not found' },
    });
  }
  next();
};

const isValidSale = (req, res, next) => {
  const { quantity } = req.body[0];
  const MIN_FOR_SALE = 0;

  if (quantity <= MIN_FOR_SALE) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
    });
  }
  next();
};

const verifyExistSale = async (req, res, next) => {
  const { id } = req.params;
  if (!id || +id.length !== 24) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Wrong sale ID format' },
    });
  }
  next();
};

const validateSales = [
  registrationSale,
  isValidQuantity,
];

const updateSale = [
  isValidSale,
  isValidQuantity,
];

module.exports = {
  validateSales,
  isSaleIdValid,
  updateSale,
  verifyExistSale,
};
