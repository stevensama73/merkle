const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database.db');

const createTamuTable = `
  CREATE TABLE IF NOT EXISTS tamu (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    alamat TEXT,
    nomor_telepon TEXT,
    catatan TEXT
  );
`;

db.exec(createTamuTable, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table "tamu" created successfully.');
  }
});

module.exports = db;