const pool = require('../db/index.js');

module.exports = {
  readProducts: function (page = 1, count = 5) {
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
            console.log(err);
          })
      })
  },
  readInfo: function (id) {
    const query = `
    SELECT row_to_json(t)
    FROM (
      SELECT p.*,
      (
        SELECT array_to_json(array_agg(row_to_json(d)))
        FROM (
          SELECT f.feature, f.value
          FROM features f
          WHERE p.id = product_id
        ) d
      ) as features
    FROM products p
    WHERE p.id = ${id}
    ) t`;
    return pool.connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release()
            return res.rows[0].row_to_json;
          })
          .catch((err) => {
            client.release()
            console.log(err);
          })
      })
  },

  readRelated: function(id) {
    const query = `
    SELECT array_agg(r.id)
    FROM related r
    WHERE r.product_id = ${id}
    `
    return pool.connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release()
            return res.rows[0].array_agg
          })
          .catch((err) => {
            client.release()
            console.log(err);
          })
      })
  },

  readStyles: function(id) {

  }
}