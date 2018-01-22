var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {id: 1, username: 'first'},
    {id: 2, username: 'second'},
    {id: 3, username: 'third'}
  ]);
});

module.exports = router;
