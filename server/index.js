const express = require('express');
const app = express();
const port = 3001;
const db = require('../db/index.js');
const router = require('./routes.js');

app.use(express.json());
app.use('/products', router);

app.get('/loaderio-13a118f93b296b3f32a9660bf2d0dbc0', (req, res) => {
  res.send('loaderio-13a118f93b296b3f32a9660bf2d0dbc0');
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
   console.log(`listening on port ${port}`);
  })
}



module.exports = app;