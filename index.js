const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const productsController = require('./controllers/productsController');
const middleware = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', middleware.validationProducts, rescue(productsController.createProduct));

app.use(middleware.error);

app.listen(PORT, () => console.log(`Servidor rodando na porta -> ${PORT}`));
