const express = require('express');
const bodyParser = require('body-parser');
// express instance
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// movie routes
const movieRoutes = require('./api/routes/movies');
app.use('/movies', movieRoutes);

module.exports = app;
