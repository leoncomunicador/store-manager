const express = require('express');
const bodyParser = require('body-parser');

const { error } = require('./middlewares');

const { products, sales } = require('./routes');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', products);

app.use('/sales', sales);

app.use(error);

app.listen(PORT, () => console.log(`Servidor rodando na porta -> ${PORT}`));