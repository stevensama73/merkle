const db = require('../config/db');

class Admin {
  static getAllData(callback) {
    db.all('SELECT * FROM guest', callback);
  }
}

module.exports = Admin;