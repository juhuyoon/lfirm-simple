const router = require('express').Router();
// const db = require('../../models/Comments');

// This route renders the homepage
router.get('/', (req, res) => {
  res.render('home');
});

// For consultation apge
router.get('/consultation', (req, res) => {
  res.render('consultation');
});

// For Intro page
router.get('/about', (req, res) => {
  res.render('about');
});
/* <!===================================> */
// For offices
router.get('/seoul', (req, res) => {
  res.render('office/seoul');
});

router.get('/atlanta', (req, res) => {
  res.render('office/atlanta');
});

/* <!===================================> */
// For legal help

router.get('/intro', (req, res) => {
  res.render('legal/intro');
});

router.get('/contract', (req, res) => {
  res.render('legal/contract');
});

router.get('/criminal', (req, res) => {
  res.render('legal/criminal');
});

router.get('/family', (req, res) => {
  res.render('legal/family');
});

router.get('/inheritance', (req, res) => {
  res.render('legal/inheritance');
});

router.get('/taxes', (req, res) => {
  res.render('legal/taxes');
});

/* <!===================================> */
// For resources
router.get('/resources', (req, res) => {
  res.render('resources/resources');
});


module.exports = router;
