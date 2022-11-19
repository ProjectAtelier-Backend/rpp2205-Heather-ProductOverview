const pool = require('../db/index.js');

module.exports = {
  productList: function (page = 1, count = 5) {
    const max = page * count;
    const min = (page-1)* count;

    const query = `SELECT * FROM products WHERE id <= ${max} AND id > ${min}`
    return pool.connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release()
            return res.rows;

          })
          .catch((err) => {
            client.release()
            console.log('ERROR IN productList', err);
          })
      })
  }
}