var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'This is Oscar Demo. Angular, Node and Twitter API' });
});

module.exports = router;
