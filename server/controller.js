const { readProducts, readInfo, readRelated, readStyles } = require('./models.js')

module.exports = {
  getProducts: function(req, res) {
    const page = req.query.page;
    const count = req.query.count;
    readProducts(page, count)
      .then((results) => {
        res.send(results);
      })
      .catch(err => console.log(err))
  },

  getProdInfo: function(req, res) {
    const id = req.params.product_id;
    readInfo(id)
      .then((results) => {
        res.send(results);
      })
      .catch(err => console.log(err))
  },

  getRelated: function(req, res) {
    const id = req.params.product_id;
    readRelated(id)
      .then((results) => {
        res.send(results);
      })
      .catch(err => console.log(err))
  },

  getStyles: function(req, res) {
    const id = req.params.product_id;
    readStyles(id)
      .then((results) => {
        res.send(results);
      })
      .catch(err => console.log(err))
  }

}