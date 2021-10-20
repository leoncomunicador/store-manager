const salesService = require('../services/salesService');

const createSale = async (req, res) => {
  const itensSold = req.body;
  const addSale = await salesService.newSale(itensSold);

  res.status(200).json(addSale);
};

const listSales = async (req, res) => {
  const sales = await salesService.listAllSales();

  res.status(200).json({ sales });
};

const listSalesById = async (req, res) => {
  const { id } = req.params;

  const sale = await salesService.listSaleById(id);

  res.status(200).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const itensSold = req.body;
  
  await salesService.updateSale({ _id: id, itensSold });

  res.status(200).json({ _id: id, itensSold });
};

module.exports = {
  createSale,
  listSales,
  listSalesById,
  updateSale,
};
