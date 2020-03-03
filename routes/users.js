var express = require('express');
var router = express.Router();
var service = require('./service');

// GET
router.get('/', function(req, res, next) {
  service.getMovies((rows)=>{
    res.json(rows);
  })
});

// POST
router.post('/', function(req, res, next){
  service.addMovie(req.body, (rowCount)=>{
    if(rowCount>0)
    res.status(201).json({mgs:'New movie added'});
    else{
      res.status(400).json({mgs:'Something went wrong!'});
    }
  })
});

module.exports = router;