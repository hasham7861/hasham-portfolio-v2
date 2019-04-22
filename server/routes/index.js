var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hasham\'s Website API', website:'api.hashamalam.dev/' });
  
});

module.exports = router;
