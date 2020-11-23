const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movies = require('../models/movie');

router.get('/', (req, res, next) => {
  Movies.find()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Sorry We can not found your movies' })
    );
});

router.post('/', (req, res, next) => {
  const movies = new Movies({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: +req.body.price,
  });
  movies
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => res.status(500).json({ message: 'Movie is not added in DB!!!' }));
});

module.exports = router;
