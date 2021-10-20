const error = require('./error');
const productMiddleware = require('./validationProducts');
const salesMiddleware = require('./validationSales');

module.exports = {
  error,
  productMiddleware,
  salesMiddleware,
};
