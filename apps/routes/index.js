var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ message: 'Congratulation! Welcome to our api.' , author: 'quynv'});
});

module.exports = router;
