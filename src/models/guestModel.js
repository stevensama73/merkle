const db = require('../config/db');

class Guest {
  static addGuest(nama, alamat, nomorTelepon, catatan, callback) {
    db.run(
      'INSERT INTO tamu (nama, alamat, nomor_telepon, catatan) VALUES (?, ?, ?, ?)',
      [nama, alamat, nomorTelepon, catatan],
      callback
    );
  }

  static getNotes(callback) {
    db.all('SELECT nama, catatan FROM tamu', callback);
  }

  static getAllData(callback) {
    db.all('SELECT * FROM tamu', callback);
  }
}

module.exports = Guest;