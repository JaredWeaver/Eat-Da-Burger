const express = require('express');
const burger = require('../models/burger.js');
const router = require('express').Router();


router.get('/', function(req,res){
    burger.selectAll(function(results){
       res.render('index', {burgers: results
    })
        
    })
});
// router.POST







module.exports = router;