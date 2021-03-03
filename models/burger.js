const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cbController) {
        orm.selectAll('burgers', function(results){
              cbController(results)
        })
    }

    // create the code that will call the ORM functions using burger specific input for the ORM

}

module.exports = burger;