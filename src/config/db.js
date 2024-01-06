const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database.db');

const createGuestTable = `
  CREATE TABLE IF NOT EXISTS guest (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    alamat TEXT,
    nomor_telepon TEXT,
    catatan TEXT
  );
`;

const createTokenTable = `
  CREATE TABLE IF NOT EXISTS token (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT,
    expiration_time INTEGER
  );
`;

db.exec(createGuestTable, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table "guest" created successfully.');
  }
});

db.exec(createTokenTable, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table "token" created successfully.');
  }
});

module.exports = db;