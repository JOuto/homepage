/* var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('certificates/key.pem', 'utf8');
var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate }; */

const sslRedirect = require('heroku-ssl-redirect').default;

const express = require('express');
const cors = require('cors');
const ContactRouter = require('./Routes/contact.js');
const dotenv = require('dotenv');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(sslRedirect());
app.use(express.json());
app.use(cors());
app.use(express.static('build'));

app.use('/api/contact', ContactRouter);

app.get('*', (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

//var httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT || 3001;

/* httpsServer.listen(8443, () => {
  console.log(`server running on port ${PORT}`);
}); */

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
