const express = require('express');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const router = require('./routes.js');

app.use(express.json());
app.use('/products', router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

