const Admin = require('../models/adminModel');

exports.getAllData = (req, res) => {
  Admin.getAllData((err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(data);
  });
};