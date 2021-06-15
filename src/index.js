const express = require('express');
const cors = require('cors');
const ContactRouter = require('./Routes/contact.js');
const dotenv = require('dotenv');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'));

app.use('/api/contact', ContactRouter);

app.get('*', (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
