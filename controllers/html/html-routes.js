const router = require('express').Router();
const db = require('../../models/Comments');

// This route renders the homepage
router.get('/', (req, res) => {
  res.render('home');
});

router.post('/burgers/create', (req, res) => {
  db.create()
})

module.exports = router;
