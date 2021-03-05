const connection = require('./connection.js')

const orm = {
    selectAll(table, cb) {
      const queryString = 'SELECT * FROM ??';
      connection.query(
        queryString,
        [table],
        (err, result) => {
          if (err) throw err;
          cb(result);
        }
      );
    },
    insertOne(table, burgerName, cb) {
      const queryString = 'INSERT INTO ?? SET ?';
      connection.query(
        queryString,
        [table, burgerName],
        (err, result) => {
          console.log(burgerName);
          if (err) throw err;
          cb(result);
        }
      );
    },
    updateOne(table, devoured, col, val, cb) {
      const queryString ='UPDATE ?? SET ? WHERE ?? = ?';
      connection.query(
        queryString,
        [table, devoured, col, val, cb],
        (err, result) => {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };

  

  
  module.exports = orm;
  