const express = require('express');

const router = express.Router();

router.get('/user', function (req, res) {
  res.send('This is user api new changes');
});

module.exports = router;