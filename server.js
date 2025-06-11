const express = require('express');
const app = express();

// Endpoint utama
app.get('/', (req, res) => {
  res.send('✅ WhatsApp Bot Aktif!');
});

// Jalankan server di port Railway atau default (3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Express server berjalan di port ${PORT}`);
});
