// import config from '../../config';
import knex from 'knex'
import bookshelf from 'bookshelf'

const Bookshelf = bookshelf(
  knex({
    client: 'pg',

    // connection: {
    //   host: process.DB_HOST,
    //   port: process.env.DB_PORT || 15432,
    //   user: process.env.DB_USER || 'plants_user',
    //   password: process.env.DB_PASSWORD || 'password',
    //   database: process.env.DB_NAME || 'plants_db'
    // },
    connection: {
      host: 'localhost',
      port: 15432,
      user: 'plants_user',
      password: 'password',
      database: 'plants_db'
    },
    pool: {
      min: 0,
      max: 10,
      afterCreate: function (conn, cb) {
        conn.query("SET SESSION SCHEMA 'plants';", function (err) {
          cb(err, conn)
        })
      }
    }
  }))

export default Bookshelf
