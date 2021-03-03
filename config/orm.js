const connection = require('./connection.js')

const orm = {
    selectAll: function (table, cbModel) {
      const queryString = 'SELECT * FROM ??';
      connection.query(
        queryString,
        [table],
        (err, result) => {
          if (err) throw err;
          cbModel(result);
        }
      );
    },
    insertOne: function(cb) {
      const queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
      console.log(queryString);
      connection.query(
        queryString,
        [],
        (err, result) => {
          if (err) throw err;
          cb(result);
        }
      );
    },
    updateOne: function(cb) {
      const queryString ='UPDATE burgers SET devoured = true WHERE ?';
  
      connection.query(
        queryString,

        (err, result) => {
          if (err) throw err;
          cb(result);
        }
      );
    },
  };
  
  module.exports = orm;
  