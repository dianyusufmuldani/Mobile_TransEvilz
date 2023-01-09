const express = require('express');
const router = express.Router();
const db = require('../config/mysql');

router.get('/', (req, res, next) => {
  var sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      message: 'Get Method Users',
      data: result,
    });
  });
});

router.post('/', (req, res, next) => {
  const users = {
    name: req.body.name,
    password: req.body.password,
  };
  res.status(200).json({
    message: 'Post Method Users',
    data: users,
    balance: 'Rp.2.000.000',
    nationality: 'WNI',
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  var sql = 'SELECT * FROM users WHERE id=' + id;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json({
      message: 'Users ditemukan',
      data: result,
    });
  });
});

router.put('/', (req, res, next) => {
  res.status(200).json({
    message: 'Put Method Users',
  });
});

router.delete('/', (req, res, next) => {
  res.status(200).json({
    message: 'Delete Method Users',
  });
});

module.exports = router;
