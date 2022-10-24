var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});

router.post('/', function(req, res, next) {
  const response = {success: true};

  console.log(req.body);
  res.status(200).send(response);
});


module.exports = router;
