const express = require('express');

const router = express.Router();

router.get('/user', function (req, res) {
  res.send('This is user api first222');
});

module.exports = router;