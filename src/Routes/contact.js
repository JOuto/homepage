const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (_req, _res) => {
  const body = _req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAILUSER,
    to: process.env.EMAILUSER,
    subject: 'Message from ' + body.name,
    text: body.message + 'email: ' + body.email,
    html: '<b>' + body.message + '<br/>' + 'email: ' + body.email + '</b>',
  });

  _res.send(info);
});

module.exports = router;
