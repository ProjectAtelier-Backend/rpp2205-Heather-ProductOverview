const express = require('express');
const app = express();
const port = 3001;
const db = require('../db/index.js');
const router = require('./routes.js');

app.use(express.json());
app.use('/products', router);

app.get('/loaderio-d2f65d5d24d21e1a7b9c603f5d7d1b9e', (req, res) => {
  const file = `${__dirname}/../loaderio-d2f65d5d24d21e1a7b9c603f5d7d1b9e.txt`;
  res.sendFile(file);
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
   console.log(`listening on port ${port}`);
  })
}



module.exports = app;