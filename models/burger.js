const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (results) => {
              cb(results)
        })
    },
    insertOne(burgerName, cb) {
        console.log(burgerName);
        orm.insertOne('burgers', burgerName, (results) => {
              cb(results)

                
        })
    },
    updateOne(devoured, val, cb) {
        orm.updateOne('burgers', devoured, 'id', val, (results) => {
              cb(results)
        })
    }

}

module.exports = burger;