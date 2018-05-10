
// import config from '../../config';
const knex = require('knex');
const bookshelf = require('bookshelf');


module.exports.Bookshelf = bookshelf(
    knex({
        client: 'pg',
        connection: 'postgres://plants_user:password@localhost:15432/plants_db',
        pool: {
            min: 0,
            max: 10,
            afterCreate: function (conn, cb) {
                conn.query("SET SESSION SCHEMA 'plants';", function (err) {
                    cb(err, conn);
                });
            }
        }
    }));

// const Bookshelf = bookshelf(
//   knex({
//     client: 'pg',
//     connection: 'postgres://plants_user:password@localhost:15432/plants_db',
//     pool: {
//       min: 0,
//       max: 10,
//       afterCreate: function (conn, cb) {
//         conn.query("SET SESSION SCHEMA 'plants';", function (err) {
//           cb(err, conn);
//         });
//       }
//     }
//   }));
// export default Bookshelf;
