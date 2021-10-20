const salesService = require('../services/salesService');

const createSale = async (req, res) => {
  const itensSold = req.body;
  const addSale = await salesService.newSale(itensSold);

  res.status(200).json(addSale);
};

module.exports = { createSale };