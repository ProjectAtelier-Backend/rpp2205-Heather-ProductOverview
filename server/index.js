const express = require('express');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const { getProducts } = require('./controller.js');


app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


app.get('/products', (req, res) => {
  const page = req.query.page || 1;
  const count = req.query.count || 5;
  getProducts(page, count)
    .then((results) => {
      res.send(results);
    })
    .catch(err => console.log(err))
})

app.get('/products/:product_id', (req, res) => {

})

app.get('/products/:product_id/related', (req, res) => {
})

app.get('/products/:product_id/styles', (req, res) => {
})