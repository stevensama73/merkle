const Auth = require('../models/authModel');

exports.login = (req, res) => {
  const { username, password } = req.body;
  
  const token = Auth.generateToken(username);

  res.json({ token });
};

exports.logout = (req, res) => {
  res.json({ message: 'Logout berhasil' });
};