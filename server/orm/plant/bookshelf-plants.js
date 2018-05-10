// import config from '../../config';
import knex from 'knex'
import bookshelf from 'bookshelf'

const Bookshelf = bookshelf(
  knex({
    client: 'pg',

    /*  FIX HARD-CODED DB   */
    connection: 'postgres://plants_user:password@db/plants_db',

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
