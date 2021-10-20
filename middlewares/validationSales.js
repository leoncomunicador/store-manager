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

const validateSales = [
  registrationSale,
  isValidQuantity,
];

module.exports = {
  validateSales,
};
