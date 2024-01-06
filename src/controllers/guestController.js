const Guest = require('../models/guestModel');

exports.addGuest = (req, res) => {
  const { nama, alamat, nomorTelepon, catatan } = req.body;

  Guest.addGuest(nama, alamat, nomorTelepon, catatan, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: 'Data tamu berhasil ditambahkan.' });
  });
};