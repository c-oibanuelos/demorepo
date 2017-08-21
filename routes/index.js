var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'This is a change to my Angular application. Angular, Node and Twitter API' });
});

module.exports = router;
