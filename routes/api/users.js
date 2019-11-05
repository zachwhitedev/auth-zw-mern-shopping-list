const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/User');

router.post('/', (req, res) => {
    res.send('register');
});


module.exports = router;