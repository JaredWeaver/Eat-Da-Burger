const burger = require("../models/burger.js");
const router = require("express").Router();

router.get('/', (req, res) => {
  burger.selectAll(results => {
    res.render('index', { burgers: results });
  });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne({ burger_name: req.body.burger_name }, results =>{
        if (results.affectedRows === 0) {
            return res.status(404).end();
          }
          res.redirect("/");
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.updateOne(req.body, req.params.id, results => {
        if (results.affectedRows === 0) {
            return res.status(404).end();
          }
          res.status(200).end();
    });

});

module.exports = router;
