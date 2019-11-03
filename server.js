const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


const app = express();
dotenv.config();
const uri = process.env.MONGODB_URI;

// Bodyparser Middleware
app.use(bodyParser.json());

//Cors Middleare
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(() => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'));




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));