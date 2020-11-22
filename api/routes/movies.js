const express = require('express');
const router = express.Router();

const movies = [
  { id: '1', title: 'Goosebums', price: '1200 Rs' },
  { id: '2', title: 'Die Hard', price: '500 Rs' },
  { id: '3', title: 'Sherlock Holmes', price: '800 Rs' },
  { id: '4', title: 'Avengers Packet', price: '2,000 Rs' },
];

router.get('/', (req, res, next) => {
  res.status(200).json(movies);
});

module.exports = router;
