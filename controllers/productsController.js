const productsService = require('../services/productsService');

const createProduct = async (req, res) => {
    const { name, quantity } = req.body;
    const newProduct = await productsService.createNewProduct(name, quantity);

    res.status(201).json(newProduct);
};

module.exports = {
  createProduct,
};