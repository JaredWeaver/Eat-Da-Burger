const connection = require('./connection.js')

const orm = {
    selectAll() {
      const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
      connection.query(
        queryString,
        [tableInput, colToSearch, valOfCol],
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
    },
    insertOne() {
      const queryString = 'SELECT ?? FROM ?? ORDER BY ?? DESC';
      console.log(queryString);
      connection.query(
        queryString,
        [whatToSelect, table, orderCol],
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
    },
    updateOne() {
      const queryString =
        'SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1';
  
      connection.query(
        queryString,

        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
    },
  };
  
  module.exports = orm;
  