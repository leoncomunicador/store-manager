const productsService = require('../services/productsService');

const productName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: '"name" length must be at least 5 characters long' },
    });
  }
  next();
};

const productAlreadyExists = async (req, res, next) => {
  const { name } = req.body;
  const findProduct = await productsService.findProductName(name);

  if (findProduct) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Product already exists' },
    });
  }
  next();
};

const quantityProduct = (req, res, next) => {
  const { quantity } = req.body;
  if (quantity <= 0) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: '"quantity" must be larger than or equal to 1' },
    });
  }
  next();
};

const isValidQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (typeof quantity === 'string') {
    return res.status(422).json({
      err: { code: 'invalid_data', message: '"quantity" must be a number' },
    });
  }
  next();
};

const isIdValid = (req, res, next) => {
  const { id } = req.params;
  if (+id.length !== 24) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Wrong id format' },
    });
  }
  next();
};

const validateProducts = [
  productName,
  productAlreadyExists,
  quantityProduct,
  isValidQuantity,
];

const updateProducts = [
  productName,
  quantityProduct,
  isValidQuantity,
];

module.exports = {
  validateProducts,
  isIdValid,
  updateProducts,
};
