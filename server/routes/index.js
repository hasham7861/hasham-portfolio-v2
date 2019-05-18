var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({"message":"Welcome to Hasham Alam's API"});
});

module.exports = router;
