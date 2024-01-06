const Auth = require('../models/authModel');
const db = require('../config/db');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const expirationTime = Date.now() + 3600000;

  const token = Auth.generateToken(username, password);
  db.run(`
    INSERT INTO token (token, expiration_time) VALUES (?, ?)
  `, [token, expirationTime], (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.json({ token });
};

exports.logout = (req, res) => {
  const token = req.body.token;

  db.run('DELETE FROM token WHERE token = ?', [token], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json({ message: 'Logout berhasil' });
  });
};