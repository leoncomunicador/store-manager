const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const productsController = require('./controllers/productsController');
const { error, productMiddleware } = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/:id', productMiddleware.isIdValid, rescue(productsController.listProductById));

app.get('/products', rescue(productsController.listProducts));

app.post('/products', productMiddleware.validateProducts, rescue(productsController.createProduct));

app.put(
  '/products/:id',
  productMiddleware.updateProducts,
  rescue(productsController.updateProduct),
);

app.delete('/products/:id',
  productMiddleware.deleteProduct,
  rescue(productsController.deleteProduct));

app.use(error);

app.listen(PORT, () => console.log(`Servidor rodando na porta -> ${PORT}`));