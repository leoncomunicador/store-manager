const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllProducts = async () => { // função para buscar todos os produtos
  const db = await connection();
  const products = await db.collection('products').find().toArray();

  return products;
};

const getProductById = async (id) => { // função para buscar o produto pelo Id
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  return db.collection('products').findOne(ObjectId(id));
};

const createProduct = async (name, quantity) => { // função para criar novo produto
  const { insertedId } = await connection().then((db) => db
    .collection('products').insertOne({ name, quantity }));
  return { _id: insertedId, name, quantity };
};

const updateProduct = async (id, name, quantity) => { // função que atualiza o produto
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('products').updateOne({ id: ObjectId(id) }, { $set: { name, quantity } });
};

const excludeProduct = async (id) => { // função para excluir o produto pelo id
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('products').deleteOne({ _id: ObjectId(id) });
};

const findProductName = async (name) => { // função para buscar um produto pelo nome
  const product = await connection()
    .then((db) => db.collection('products').findOne({ name }));
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  excludeProduct,
  findProductName,
};