const jwt = require('jsonwebtoken');
const secretKey = 'fkd740gza5n80ijt0s96qhn0mbrgwzz0';

class Auth {
  static generateToken(username) {
    return jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  }

  static verifyToken(token, callback) {
    jwt.verify(token, secretKey, callback);
  }
}

module.exports = Auth;