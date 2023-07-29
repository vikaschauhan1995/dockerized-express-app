const express = require('express');

const router = express.Router();

router.get('/user', function (req, res) {
  res.send('This is user api first2224333');
});

module.exports = router;