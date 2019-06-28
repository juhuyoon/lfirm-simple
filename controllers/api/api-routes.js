const router = require('express').Router();
const db = require('../../models/Comments');

// This route renders the homepage
router.get('/', function(req, res) {
  res.render('index')
});


module.exports = router;
