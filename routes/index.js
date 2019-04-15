const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Silverplate Home' });
});

router.get('/store', function(req, res, next) {
  res.redirect('http://greatdeals.' + req.hostname);
});

module.exports = router;
