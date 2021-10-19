const productsModels = require('../models/productsModels');

const createNewProduct = async (name, quantity) => {
  const product = await productsModels.createProduct(name, quantity);
  
  return product;
};

const findProductName = async (name) => {
  const product = await productsModels.findProductName(name);
  return product;
};

const listProducts = async () => {
  const products = await productsModels.getAllProducts();
  return products;
};

const listProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  return product;
};

module.exports = {
  createNewProduct,
  findProductName,
  listProducts,
  listProductById,
};