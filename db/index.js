const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'hray',
  host: 'localhost',
  database: 'products',
  password: 'password',
  port: 5432
})

pool.on('error', (err, client) => {
  console.error('Error', err)
  process.exit(-1)
})

module.exports = pool;