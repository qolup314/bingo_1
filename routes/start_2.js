var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('start_2', { title: 'start_2' });
});

module.exports = router;
