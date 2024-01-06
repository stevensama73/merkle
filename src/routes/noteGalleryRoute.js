const express = require('express');
const router = express.Router();
const noteGalleryController = require('../controllers/noteGalleryController');

router.get('/notes', noteGalleryController.getNotes);

module.exports = router;