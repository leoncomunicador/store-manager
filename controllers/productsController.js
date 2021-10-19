const productsService = require('../services/productsService');

const createProduct = async (req, res) => {
    const { name, quantity } = req.body;
    const newProduct = await productsService.createNewProduct(name, quantity);

    res.status(201).json(newProduct);
};

const listProducts = async (req, res) => {
  const products = await productsService.listProducts();

  res.status(200).json({ products });
};

const listProductById = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.listProductById(id);

  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  
  await productsService.updateProducts({ _id: id, name, quantity });

  res.status(200).json({ _id: id, name, quantity });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.deleteProduct(id);

  res.status(200).json(product);
};

module.exports = {
  createProduct,
  listProducts,
  listProductById,
  updateProduct,
  deleteProduct,
};