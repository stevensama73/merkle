const db = require('../config/db');
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  db.get('SELECT * FROM token WHERE token = ?', [token.split(" ")[1]], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!row || row.expiration_time < Date.now()) {
      return res.status(401).json({ error: 'Unauthorized - Invalid or expired token' });
    }

    jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
      }

      next();
    });
  });
};