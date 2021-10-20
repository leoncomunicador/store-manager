const salesModels = require('../models/salesModels');

const newSale = async (itensSold) => {
  const sale = salesModels.createSale(itensSold);
  return sale;
};

module.exports = { newSale };