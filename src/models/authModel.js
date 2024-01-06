const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

class Auth {
  static generateToken(username, password) {
    return jwt.sign({ username, password }, secretKey, { expiresIn: '1h' });
  }

  static verifyToken(token, callback) {
    jwt.verify(token, secretKey, callback);
  }
}

module.exports = Auth;