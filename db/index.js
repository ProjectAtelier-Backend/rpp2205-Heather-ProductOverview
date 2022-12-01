const { Pool, Client } = require('pg');
require("dotenv").config();

const pool = new Pool({
  user: 'hray',
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
})

pool.on('error', (err, client) => {
  console.error('Error', err)
  process.exit(-1)
})

module.exports = pool;