const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Silverplate Home' });
});

router.get('/instructions', function(req, res) {
  res.render('instructions', { title: 'Instructions'})
});

module.exports = router;
