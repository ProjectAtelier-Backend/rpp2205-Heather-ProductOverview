const { productList } = require('./models.js');

module.exports = {
  getProducts: function(page, count) {
    return productList(page, count)
  }
}