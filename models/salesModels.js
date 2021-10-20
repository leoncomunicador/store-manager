// const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createSale = async (itensSold) => { // função para criar nova venda
  const { insertedId } = await connection().then((db) => db
    .collection('sales').insertOne({ itensSold }));
  return { _id: insertedId, itensSold };
};
module.exports = { createSale };