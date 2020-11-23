const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// express instance
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// DB Connection
const connectionString =
  'mongodb+srv://iristech:test@cluster0.2ii4j.mongodb.net/movies_db?retryWrites=true&w=majority';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// movie routes
const movieRoutes = require('./api/routes/movies');
app.use('/movies', movieRoutes);

module.exports = app;
