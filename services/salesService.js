const salesModels = require('../models/salesModels');

const newSale = async (itensSold) => {
  const sale = salesModels.createSale(itensSold);
  return sale;
};

const listAllSales = async () => {
  const sales = await salesModels.getAllSales();
  return sales;
};

const listSaleById = async (id) => {
  const sale = await salesModels.getSalesById(id);
  return sale;
};

const updateSale = async (id, itensSold) => {
  const sale = await salesModels.updateSale(id, itensSold);
  return sale;
};

const deleteSale = async (id) => {
  const excludeSale = await salesModels.excludeOneSale(id);
  return excludeSale;
};

module.exports = {
  newSale,
  listAllSales,
  listSaleById,
  updateSale,
  deleteSale,
};