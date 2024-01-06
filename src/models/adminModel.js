const db = require('../config/db');

class Admin {
  static getAllData(callback) {
    db.all('SELECT * FROM tamu', callback);
  }
}

module.exports = Admin;