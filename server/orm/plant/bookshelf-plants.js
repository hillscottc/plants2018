// import config from '../../config';
import knex from 'knex'
import bookshelf from 'bookshelf'

const Bookshelf = bookshelf(
  knex({
    client: 'pg',

    /*  FIX HARD-CODED DB   */
    // connection: 'postgres://plants_user:password@db/plants_db',

    // psql postgres://plants_user:password@localhost:15432/plants_db

    // connection: {
    //   host: process.DB_HOST,
    //   port: process.env.DB_PORT || 5432,
    //   user: process.env.DB_USER || 'postgres',
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME || 'postgres'
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
