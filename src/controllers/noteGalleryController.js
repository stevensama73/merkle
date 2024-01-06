const Guest = require('../models/guestModel');

exports.getNotes = (req, res) => {
  Guest.getNotes((err, notes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(notes);
  });
};