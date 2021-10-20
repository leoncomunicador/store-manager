const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createSale = async (itensSold) => { // função para criar nova venda
  const { insertedId } = await connection().then((db) => db
    .collection('sales').insertOne({ itensSold }));
  return { _id: insertedId, itensSold };
};

const getAllSales = async () => { // função para buscar todas as vendas
  const db = await connection();
  const sales = await db.collection('sales').find().toArray();

  return sales;
};

const getSalesById = async (id) => { // função para buscar uma venda pelo Id
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  return db.collection('sales').findOne(ObjectId(id));
};

const updateSale = async (id, itensSold) => { // função que atualiza uma venda
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('sales').updateOne({ id: ObjectId(id) }, { $set: { itensSold } });
};

const excludeOneSale = async (id) => { // função para excluir uma venda pelo id
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('sales').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createSale,
  getAllSales,
  getSalesById,
  updateSale,
  excludeOneSale,
};
