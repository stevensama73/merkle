const db = require('../config/db');

class Guest {
  static addGuest(nama, alamat, nomorTelepon, catatan, callback) {
    db.run(
      'INSERT INTO guest (nama, alamat, nomor_telepon, catatan) VALUES (?, ?, ?, ?)',
      [nama, alamat, nomorTelepon, catatan],
      callback
    );
  }

  static getNotes(callback) {
    db.all('SELECT nama, catatan FROM guest', callback);
  }

  static getAllData(callback) {
    db.all('SELECT * FROM guest', callback);
  }
}

module.exports = Guest;