const { ObjectId } = require('mongodb');
const connect = require('./connection');

const getAllProducts = async () => { // função para buscar todos os produtos
  const db = await connect();
  const products = await db.collection('products').find().toArray();

  return products;
};

const getByIdProduct = async (id) => { // função para buscar o produto pelo Id
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  return db.collection('products').findOne(ObjectId(id));
};

const createProduct = async (name, quantity) => { // função para criar novo produto
  const { insertedId } = await connect().then((db) => db
    .collection('products').insertOne({ name, quantity }));
  return { _id: insertedId, name, quantity };
};

const updateProduct = async (id, name, quantity) => { // função que atualiza o produto
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  await db.collection('products').updateOne({ id: ObjectId(id) }, { $set: { name, quantity } });
};

const excludeProduct = async (id) => { // função para excluir o produto pelo id
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  await db.collection('products').deleteOne({ _id: ObjectId(id) });
};

const findProductName = async (name) => { // função para buscar um produto pelo nome
  const product = await connect()
    .then((db) => db.collection('products').findOne({ name }));
  return product;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
  excludeProduct,
  findProductName,
};