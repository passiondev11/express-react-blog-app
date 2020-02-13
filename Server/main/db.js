const { Pool } = require('pq')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: 'postgres',
    post: 5432
})

module.exports = pool