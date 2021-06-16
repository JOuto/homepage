

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const ContactRouter = require('./Routes/contact.js');
const MessagesRouter = require('./Routes/messages.js');
const dotenv = require('dotenv');
require('dotenv').config();
const path = require('path');

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.static('build'));

app.use('/api/contact', ContactRouter);
app.use('/api/messages', MessagesRouter);

app.get('*', (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });
//var httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 3001;

/* httpsServer.listen(8443, () => {
  console.log(`server running on port ${PORT}`);
}); */

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
