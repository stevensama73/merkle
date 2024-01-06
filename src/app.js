const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const guestRoutes = require('./routes/guestRoute');
const noteGalleryRoutes = require('./routes/noteGalleryRoute');
const authRoutes = require('./routes/authRoute');
const adminRoutes = require('./routes/adminRoute');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use('/api/guest', guestRoutes);
app.use('/api/note-gallery', noteGalleryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});