const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const uri = process.env.MONGODB_URI;

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(() => console.log(err));
