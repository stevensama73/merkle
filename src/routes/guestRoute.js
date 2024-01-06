const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');

router.post('/add', guestController.addGuest);

module.exports = router;